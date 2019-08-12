from __future__ import division
import pyjsdl
import math
import time
from __pyjamas__ import JS

WIDTH = 800
HEIGHT = 600
CENTRO = (WIDTH/2, HEIGHT/2)

screen, fonte_grande, fonte_pequena, clk = None, None, None, None

def setup():
    pyjsdl.display.init()
    screen = pyjsdl.display.set_mode((WIDTH, HEIGHT))
    pyjsdl.display.set_caption("relogio_web")
    pyjsdl.font.init()
    fonte_grande = pyjsdl.font.SysFont("Noto Sans", 30)
    fonte_pequena = pyjsdl.font.SysFont("Noto Sans", 20)
    clk = pyjsdl.time.Clock()
    pyjsdl.display.setup(run)
    return screen, fonte_grande, fonte_pequena, clk

def main():
    global screen, fonte_grande, fonte_pequena, clk
    screen, fonte_grande, fonte_pequena, clk = setup()
    pyjsdl.display.setup(run)

def run():
    loop(screen, fonte_grande, fonte_pequena, clk)

def loop(screen, fonte_grande, fonte_pequena, clk):
    tm = time.localtime()
    screen.fill((0,0,0))

    h = tm.tm_hour
    m = tm.tm_min
    s = tm.tm_sec

    hd = math.radians(-(h + (m/60) + (s/3600))*15)
    md = math.radians(-(m + (s/60))*6)
    sd = math.radians(-s*6)
    
    ph_x = CENTRO[0] + math.cos(hd) * 100
    ph_y = CENTRO[1] + math.sin(hd) * 100

    pm_x = CENTRO[0] + math.cos(md) * 150
    pm_y = CENTRO[1] + math.sin(md) * 150

    ps_x = CENTRO[0] + math.cos(sd) * 200
    ps_y = CENTRO[1] + math.sin(sd) * 200

    for p in range(0,60):
        pp_x = int(CENTRO[0] + math.cos(math.radians(p*6)) * 215)
        pp_y = int(CENTRO[1] + math.sin(math.radians(p*6)) * 215)
        if p % 5 != 0:
            pyjsdl.draw.circle(screen, (255,255,255), (pp_x, pp_y), 3)
        else:
            pyjsdl.draw.circle(screen, (255,255,255), (pp_x, pp_y), 7)
    
    for t in range(0, 24):
        txt = fonte_grande.render(str(t), False, (255,255,255))
        t_x = int(CENTRO[0] + math.cos(math.radians(-t*15)) * 245)
        t_y = int(CENTRO[1] + math.sin(math.radians(-t*15)) * 245)
        screen.blit(txt, (t_x-(txt.get_width()/2), t_y-(txt.get_height()/2)))
        
    for m in range(0, 60, 5):
        txt = fonte_pequena.render(str(m), False, (255,255,255))
        t_x = int(CENTRO[0] + math.cos(math.radians(-m*6)) * 185)
        t_y = int(CENTRO[1] + math.sin(math.radians(-m*6)) * 185)
        screen.blit(txt, (t_x-(txt.get_width()/2), t_y-(txt.get_height()/2)))
    
    pyjsdl.draw.line(screen, (0,255,0), CENTRO, (ph_x, ph_y), 5)
    pyjsdl.draw.line(screen, (0,0,255), CENTRO, (pm_x, pm_y), 3)
    pyjsdl.draw.line(screen, (0,255,255), CENTRO, (ps_x, ps_y))

    pyjsdl.display.flip()
    clk.tick(1)

if __name__ == '__main__':
    main()
