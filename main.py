from __future__ import division
import pyjsdl
import math
import time

WIDTH = 800
HEIGHT = 600
CENTER = (WIDTH/2, HEIGHT/2)

screen, big_font, small_font, clk = None, None, None, None

def setup():
    pyjsdl.display.init()
    screen = pyjsdl.display.set_mode((WIDTH, HEIGHT))
    pyjsdl.display.set_caption("trig-clock")
    pyjsdl.font.init()
    big_font = pyjsdl.font.SysFont("Noto Sans", 30)
    small_font = pyjsdl.font.SysFont("Noto Sans", 20)
    clk = pyjsdl.time.Clock()
    pyjsdl.display.setup(run)
    return screen, big_font, small_font, clk

def main():
    global screen, big_font, small_font, clk
    screen, big_font, small_font, clk = setup()
    pyjsdl.display.setup(run)

def run():
    loop(screen, big_font, small_font, clk)

def loop(screen, big_font, small_font, clk):
    tm = time.localtime()
    screen.fill((0,0,0))

    h = tm.tm_hour
    m = tm.tm_min
    s = tm.tm_sec

    hd = math.radians(-(h + (m/60) + (s/3600))*15)
    md = math.radians(-(m + (s/60))*6)
    sd = math.radians(-s*6)
    
    ph_x = CENTER[0] + math.cos(hd) * 100
    ph_y = CENTER[1] + math.sin(hd) * 100

    pm_x = CENTER[0] + math.cos(md) * 150
    pm_y = CENTER[1] + math.sin(md) * 150

    ps_x = CENTER[0] + math.cos(sd) * 200
    ps_y = CENTER[1] + math.sin(sd) * 200

    for p in range(0,60):
        pp_x = int(CENTER[0] + math.cos(math.radians(p*6)) * 215)
        pp_y = int(CENTER[1] + math.sin(math.radians(p*6)) * 215)
        if p % 5 != 0:
            pyjsdl.draw.circle(screen, (255,255,255), (pp_x, pp_y), 3)
        else:
            pyjsdl.draw.circle(screen, (255,255,255), (pp_x, pp_y), 7)
    
    for t in range(0, 24):
        txt = big_font.render(str(t), False, (255,255,255))
        t_x = int(CENTER[0] + math.cos(math.radians(-t*15)) * 245)
        t_y = int(CENTER[1] + math.sin(math.radians(-t*15)) * 245)
        screen.blit(txt, (t_x-(txt.get_width()/2), t_y-(txt.get_height()/2)))
        
    for m in range(0, 60, 5):
        txt = small_font.render(str(m), False, (255,255,255))
        t_x = int(CENTER[0] + math.cos(math.radians(-m*6)) * 185)
        t_y = int(CENTER[1] + math.sin(math.radians(-m*6)) * 185)
        screen.blit(txt, (t_x-(txt.get_width()/2), t_y-(txt.get_height()/2)))
    
    pyjsdl.draw.line(screen, (0,255,0), CENTER, (ph_x, ph_y), 5)
    pyjsdl.draw.line(screen, (0,0,255), CENTER, (pm_x, pm_y), 3)
    pyjsdl.draw.line(screen, (0,255,255), CENTER, (ps_x, ps_y))

    pyjsdl.display.flip()
    clk.tick(1)

if __name__ == '__main__':
    main()
