#!/usr/bin/python3
import pygame
import math
import time

WIDTH = 800
HEIGHT = 600
CENTRO = (WIDTH/2, HEIGHT/2)

pygame.init()
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Proposta de Relógio Alternativo")
pygame.font.init()
fonte_grande = pygame.font.SysFont("Noto Sans", 30)
fonte_pequena = pygame.font.SysFont("Noto Sans", 20)
clk = pygame.time.Clock()
done = False

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
    
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
            pygame.draw.circle(screen, (255,255,255), (pp_x, pp_y), 3)
        else:
            pygame.draw.circle(screen, (255,255,255), (pp_x, pp_y), 7)
    
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
    
    pygame.draw.line(screen, (0,255,0), CENTRO, (ph_x, ph_y), 5)
    pygame.draw.line(screen, (0,0,255), CENTRO, (pm_x, pm_y), 3)
    pygame.draw.line(screen, (0,255,255), CENTRO, (ps_x, ps_y))

    pygame.display.flip()
    clk.tick(1)
