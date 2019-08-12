/* start module: serpentduel */
$pyjs['loaded_modules']['serpentduel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['serpentduel']['__was_initialized__']) return $pyjs['loaded_modules']['serpentduel'];
	var $m = $pyjs['loaded_modules']['serpentduel'];
	$m['__repr__'] = function() { return '<module: serpentduel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'serpentduel';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'serpentduel.py, line 1:\n    #!/usr/bin/env python';
		$m.__track_lines__[2] = 'serpentduel.py, line 2:\n    from __future__ import division';
		$m.__track_lines__[4] = 'serpentduel.py, line 4:\n    """';
		$m.__track_lines__[29] = 'serpentduel.py, line 29:\n    import pyjsdl as pygame     #pyjsdl import';
		$m.__track_lines__[30] = 'serpentduel.py, line 30:\n    import random';
		$m.__track_lines__[33] = 'serpentduel.py, line 33:\n    class Matrix(object):';
		$m.__track_lines__[37] = 'serpentduel.py, line 37:\n    def __init__(self, x, y, screen, background):';
		$m.__track_lines__[38] = 'serpentduel.py, line 38:\n    self.x, self.y = x, y';
		$m.__track_lines__[39] = 'serpentduel.py, line 39:\n    self.screen = screen';
		$m.__track_lines__[40] = 'serpentduel.py, line 40:\n    self.background = background';
		$m.__track_lines__[41] = 'serpentduel.py, line 41:\n    self.clock = pygame.time.Clock()';
		$m.__track_lines__[42] = 'serpentduel.py, line 42:\n    self.level = 2';
		$m.__track_lines__[43] = 'serpentduel.py, line 43:\n    self.speed = 2';
		$m.__track_lines__[44] = "serpentduel.py, line 44:\n    self.mode = {'Serpent1':'AI', 'Serpent2':'AI'}";
		$m.__track_lines__[45] = "serpentduel.py, line 45:\n    self.ctrl = {'Pad':'Serpent1', 'Key1':'Serpent1', 'Key2':None}";
		$m.__track_lines__[46] = "serpentduel.py, line 46:\n    self.points = {'Serpent1':0, 'Serpent2':0}";
		$m.__track_lines__[47] = 'serpentduel.py, line 47:\n    self.match = 0';
		$m.__track_lines__[48] = 'serpentduel.py, line 48:\n    self.auto = True';
		$m.__track_lines__[49] = 'serpentduel.py, line 49:\n    self.controls = {}';
		$m.__track_lines__[50] = 'serpentduel.py, line 50:\n    self.dirn = {}';
		$m.__track_lines__[51] = "serpentduel.py, line 51:\n    self.dirn['U'] = {'U':'U', 'D':'D', 'L':'L', 'R':'R'}";
		$m.__track_lines__[52] = "serpentduel.py, line 52:\n    self.dirn['D'] = {'U':'D', 'D':'U', 'L':'R', 'R':'L'}";
		$m.__track_lines__[53] = "serpentduel.py, line 53:\n    self.dirn['L'] = {'U':'R', 'D':'L', 'L':'D', 'R':'U'}";
		$m.__track_lines__[54] = "serpentduel.py, line 54:\n    self.dirn['R'] = {'U':'L', 'D':'R', 'L':'U', 'R':'D'}";
		$m.__track_lines__[55] = 'serpentduel.py, line 55:\n    self.serpent_control = self.serpent_control_scr';
		$m.__track_lines__[56] = 'serpentduel.py, line 56:\n    self.update_rect = []';
		$m.__track_lines__[57] = 'serpentduel.py, line 57:\n    self.clear_screen()';
		$m.__track_lines__[58] = 'serpentduel.py, line 58:\n    self.active = False';
		$m.__track_lines__[60] = 'serpentduel.py, line 60:\n    def start(self):';
		$m.__track_lines__[62] = 'serpentduel.py, line 62:\n    self.treat = pygame.sprite.RenderUpdates()';
		$m.__track_lines__[63] = "serpentduel.py, line 63:\n    self.serpent = {'Serpent1':None, 'Serpent2':None}";
		$m.__track_lines__[64] = 'serpentduel.py, line 64:\n    for serpent in self.mode:';
		$m.__track_lines__[65] = "serpentduel.py, line 65:\n    if self.mode[serpent] in ('USER', 'AI'):";
		$m.__track_lines__[66] = 'serpentduel.py, line 66:\n    self.serpent_initiate(serpent)';
		$m.__track_lines__[68] = 'serpentduel.py, line 68:\n    self.match = 0';
		$m.__track_lines__[69] = "serpentduel.py, line 69:\n    self.auto = not 'USER' in self.mode.values()";
		$m.__track_lines__[70] = 'serpentduel.py, line 70:\n    self.clear_screen()';
		$m.__track_lines__[71] = 'serpentduel.py, line 71:\n    for serpent in self.points:';
		$m.__track_lines__[72] = 'serpentduel.py, line 72:\n    self.points[serpent] = 0';
		$m.__track_lines__[73] = 'serpentduel.py, line 73:\n    self.active = True';
		$m.__track_lines__[75] = 'serpentduel.py, line 75:\n    def clear_screen(self):';
		$m.__track_lines__[77] = 'serpentduel.py, line 77:\n    self.screen.blit(self.background, (0,0))';
		$m.__track_lines__[78] = 'serpentduel.py, line 78:\n    self.draw_edge()';
		$m.__track_lines__[79] = 'serpentduel.py, line 79:\n    pygame.display.flip()';
		$m.__track_lines__[81] = 'serpentduel.py, line 81:\n    def draw_edge(self):';
		$m.__track_lines__[83] = 'serpentduel.py, line 83:\n    self.edges = []';
		$m.__track_lines__[84] = 'serpentduel.py, line 84:\n    for rect in [ (0,0,self.x,5), (0,self.y-5,self.x,5), (0,0,5,self.y), (self.x-5,0,5,self.y-5) ]:';
		$m.__track_lines__[85] = 'serpentduel.py, line 85:\n    edge_rect = pygame.Rect(rect)';
		$m.__track_lines__[86] = 'serpentduel.py, line 86:\n    self.edges.append(pygame.draw.rect(self.screen, (43,50,58), edge_rect, 0))';
		$m.__track_lines__[87] = 'serpentduel.py, line 87:\n    self.update_rect.append(edge_rect)';
		$m.__track_lines__[89] = 'serpentduel.py, line 89:\n    def update_screen(self):';
		$m.__track_lines__[91] = 'serpentduel.py, line 91:\n    if self.treat:';
		$m.__track_lines__[92] = 'serpentduel.py, line 92:\n    self.treat.clear(self.screen, self.background)';
		$m.__track_lines__[93] = 'serpentduel.py, line 93:\n    self.update_rect.extend( self.treat.draw(self.screen) )';
		$m.__track_lines__[94] = 'serpentduel.py, line 94:\n    for serpent in self.serpent:';
		$m.__track_lines__[95] = 'serpentduel.py, line 95:\n    if not self.serpent[serpent]:';
		$m.__track_lines__[96] = 'serpentduel.py, line 96:\n    continue';
		$m.__track_lines__[97] = 'serpentduel.py, line 97:\n    self.serpent[serpent].segments.clear(self.screen, self.background)';
		$m.__track_lines__[98] = 'serpentduel.py, line 98:\n    self.update_rect.extend( self.serpent[serpent].segments.draw(self.screen) )';
		$m.__track_lines__[99] = 'serpentduel.py, line 99:\n    pygame.display.update(self.update_rect)';
		$m.__track_lines__[100] = 'serpentduel.py, line 100:\n    self.update_rect = []';
		$m.__track_lines__[102] = 'serpentduel.py, line 102:\n    def set_active(self, state=None, pause=False):';
		$m.__track_lines__[104] = 'serpentduel.py, line 104:\n    if state is None:';
		$m.__track_lines__[105] = 'serpentduel.py, line 105:\n    self.active = not self.active';
		$m.__track_lines__[107] = 'serpentduel.py, line 107:\n    self.active = state';
		$m.__track_lines__[108] = 'serpentduel.py, line 108:\n    if self.active:';
		$m.__track_lines__[109] = 'serpentduel.py, line 109:\n    if not pause:';
		$m.__track_lines__[110] = 'serpentduel.py, line 110:\n    self.start()';
		$m.__track_lines__[112] = 'serpentduel.py, line 112:\n    def set_mode(self, serpent, mode):';
		$m.__track_lines__[114] = 'serpentduel.py, line 114:\n    self.mode[serpent] = mode';
		$m.__track_lines__[116] = 'serpentduel.py, line 116:\n    def set_control_mode(self, mode):';
		$m.__track_lines__[118] = "serpentduel.py, line 118:\n    if mode == 'SCR':";
		$m.__track_lines__[119] = 'serpentduel.py, line 119:\n    self.serpent_control = self.serpent_control_scr';
		$m.__track_lines__[121] = 'serpentduel.py, line 121:\n    self.serpent_control = self.serpent_control_usr';
		$m.__track_lines__[123] = 'serpentduel.py, line 123:\n    def set_difficulty(self, level):';
		$m.__track_lines__[125] = 'serpentduel.py, line 125:\n    self.level = level';
		$m.__track_lines__[126] = 'serpentduel.py, line 126:\n    self.speed = { 1:1, 2:2, 3:5, 4:10 }[level]';
		$m.__track_lines__[128] = 'serpentduel.py, line 128:\n    def set_control(self, serpent, control):';
		$m.__track_lines__[130] = 'serpentduel.py, line 130:\n    for ctr in self.ctrl:';
		$m.__track_lines__[131] = 'serpentduel.py, line 131:\n    if self.ctrl[ctr] == serpent:';
		$m.__track_lines__[132] = 'serpentduel.py, line 132:\n    self.ctrl[ctr] = None';
		$m.__track_lines__[133] = "serpentduel.py, line 133:\n    if control == 'Pad/Key1':";
		$m.__track_lines__[134] = "serpentduel.py, line 134:\n    self.ctrl['Pad'] = serpent";
		$m.__track_lines__[135] = "serpentduel.py, line 135:\n    self.ctrl['Key1'] = serpent";
		$m.__track_lines__[137] = 'serpentduel.py, line 137:\n    self.ctrl[control] = serpent';
		$m.__track_lines__[139] = "serpentduel.py, line 139:\n    def serpent_control_scr(self, direction, ctrl='Pad'):";
		$m.__track_lines__[141] = 'serpentduel.py, line 141:\n    try:';
		$m.__track_lines__[142] = 'serpentduel.py, line 142:\n    self.serpent[self.ctrl[ctrl]].control(direction)';
		$m.__track_lines__[144] = 'serpentduel.py, line 144:\n    pass';
		$m.__track_lines__[146] = "serpentduel.py, line 146:\n    def serpent_control_usr(self, direction, ctrl='Pad'):";
		$m.__track_lines__[148] = 'serpentduel.py, line 148:\n    try:';
		$m.__track_lines__[149] = 'serpentduel.py, line 149:\n    dirn = self.serpent[self.ctrl[ctrl]].direction';
		$m.__track_lines__[150] = 'serpentduel.py, line 150:\n    direction = self.dirn[dirn][direction]';
		$m.__track_lines__[151] = 'serpentduel.py, line 151:\n    self.serpent[self.ctrl[ctrl]].control(direction)';
		$m.__track_lines__[153] = 'serpentduel.py, line 153:\n    pass';
		$m.__track_lines__[155] = 'serpentduel.py, line 155:\n    def serpent_initiate(self, identity):';
		$m.__track_lines__[157] = "serpentduel.py, line 157:\n    if identity == 'Serpent1':";
		$m.__track_lines__[158] = "serpentduel.py, line 158:\n    self.serpent['Serpent1'] = Serpent(self, (self.x//2)+50,(self.y//3)+30, identity, self.speed, self.mode['Serpent1'])";
		$m.__track_lines__[160] = "serpentduel.py, line 160:\n    self.serpent['Serpent2'] = Serpent(self, (self.x//2)-50,(self.y//3)+30, identity, self.speed, self.mode['Serpent2'])";
		$m.__track_lines__[162] = 'serpentduel.py, line 162:\n    def pause(self):';
		$m.__track_lines__[163] = 'serpentduel.py, line 163:\n    tm = pygame.time.wait(100)';
		$m.__track_lines__[165] = 'serpentduel.py, line 165:\n    def update(self):';
		$m.__track_lines__[167] = 'serpentduel.py, line 167:\n    if self.active:';
		$m.__track_lines__[168] = 'serpentduel.py, line 168:\n    if not self.treat:';
		$m.__track_lines__[169] = 'serpentduel.py, line 169:\n    self.treat.clear(self.screen, self.background)';
		$m.__track_lines__[170] = 'serpentduel.py, line 170:\n    self.update_rect.extend( self.treat.draw(self.screen) )';
		$m.__track_lines__[171] = 'serpentduel.py, line 171:\n    if self.serpent and random.random() > 0.95:';
		$m.__track_lines__[172] = 'serpentduel.py, line 172:\n    self.treat.add( Treat(self) )';
		$m.__track_lines__[173] = 'serpentduel.py, line 173:\n    self.treat.clear(self.screen, self.background)';
		$m.__track_lines__[174] = 'serpentduel.py, line 174:\n    self.update_rect.extend( self.treat.draw(self.screen) )';
		$m.__track_lines__[175] = 'serpentduel.py, line 175:\n    self.treat.update()';
		$m.__track_lines__[176] = 'serpentduel.py, line 176:\n    for serpent in self.serpent:';
		$m.__track_lines__[177] = 'serpentduel.py, line 177:\n    if not self.serpent[serpent]:';
		$m.__track_lines__[178] = 'serpentduel.py, line 178:\n    continue';
		$m.__track_lines__[179] = 'serpentduel.py, line 179:\n    if not self.serpent[serpent].alive:';
		$m.__track_lines__[180] = 'serpentduel.py, line 180:\n    if not self.match and not self.auto:';
		$m.__track_lines__[181] = 'serpentduel.py, line 181:\n    self.active = False';
		$m.__track_lines__[183] = 'serpentduel.py, line 183:\n    self.serpent_initiate(self.serpent[serpent].identity)';
		$m.__track_lines__[184] = 'serpentduel.py, line 184:\n    self.draw_edge()';
		$m.__track_lines__[185] = 'serpentduel.py, line 185:\n    self.serpent[serpent].update()';
		$m.__track_lines__[186] = 'serpentduel.py, line 186:\n    self.serpent[serpent].segments.clear(self.screen, self.background)';
		$m.__track_lines__[187] = 'serpentduel.py, line 187:\n    self.update_rect.extend( self.serpent[serpent].segments.draw(self.screen) )';
		$m.__track_lines__[189] = 'serpentduel.py, line 189:\n    self.pause()';
		$m.__track_lines__[192] = 'serpentduel.py, line 192:\n    class Serpent(object):';
		$m.__track_lines__[196] = 'serpentduel.py, line 196:\n    def __init__(self, matrix, x, y, identity, speed, mode):';
		$m.__track_lines__[197] = 'serpentduel.py, line 197:\n    self.matrix = matrix';
		$m.__track_lines__[198] = 'serpentduel.py, line 198:\n    self.identity = identity';
		$m.__track_lines__[199] = 'serpentduel.py, line 199:\n    self.mode = mode';
		$m.__track_lines__[200] = 'serpentduel.py, line 200:\n    self.x, self.y = x, y';
		$m.__track_lines__[201] = 'serpentduel.py, line 201:\n    self.speed = speed';
		$m.__track_lines__[202] = "serpentduel.py, line 202:\n    self.DIR = { 'U':(0,-1), 'D':(0,1), 'L':(-1,0), 'R':(1,0) }";
		$m.__track_lines__[203] = "serpentduel.py, line 203:\n    self.DEG = { 'U':0, 'D':180, 'L':90, 'R':-90 }";
		$m.__track_lines__[204] = "serpentduel.py, line 204:\n    if self.identity == 'Serpent1':";
		$m.__track_lines__[205] = "serpentduel.py, line 205:\n    self.direction = 'R'";
		$m.__track_lines__[207] = "serpentduel.py, line 207:\n    self.direction = 'L'";
		$m.__track_lines__[208] = 'serpentduel.py, line 208:\n    self.new_direction = None';
		$m.__track_lines__[209] = 'serpentduel.py, line 209:\n    self.step, self.growing, self.rate = 0, 0, 0';
		$m.__track_lines__[210] = 'serpentduel.py, line 210:\n    self.segments = pygame.sprite.RenderUpdates()';
		$m.__track_lines__[211] = 'serpentduel.py, line 211:\n    self.segment_spares = []';
		$m.__track_lines__[212] = 'serpentduel.py, line 212:\n    self.serpent_body = {}';
		$m.__track_lines__[213] = 'serpentduel.py, line 213:\n    self.grow(self.x, self.y, self.DIR[self.direction])';
		$m.__track_lines__[214] = "serpentduel.py, line 214:\n    self.serpent_body[0].image = self.serpent_body[0].images[self.identity+'_head'][self.direction]";
		$m.__track_lines__[215] = 'serpentduel.py, line 215:\n    self.scan_rect = pygame.sprite.Sprite()';
		$m.__track_lines__[216] = 'serpentduel.py, line 216:\n    self.scan_rect.rect = pygame.Rect(0,0,10,10)';
		$m.__track_lines__[217] = 'serpentduel.py, line 217:\n    self.scan_detect = False';
		$m.__track_lines__[218] = 'serpentduel.py, line 218:\n    self.pause = 20';
		$m.__track_lines__[219] = 'serpentduel.py, line 219:\n    self.active = True';
		$m.__track_lines__[220] = 'serpentduel.py, line 220:\n    self.alive = True';
		$m.__track_lines__[222] = 'serpentduel.py, line 222:\n    def grow(self, x, y, direction, number=5):';
		$m.__track_lines__[224] = 'serpentduel.py, line 224:\n    for num in range(0,number*10,10):';
		$m.__track_lines__[225] = 'serpentduel.py, line 225:\n    if not self.segment_spares:';
		$m.__track_lines__[226] = 'serpentduel.py, line 226:\n    self.segment_spares.append(Segment(self.identity, (0,0)))';
		$m.__track_lines__[227] = 'serpentduel.py, line 227:\n    segment = self.segment_spares.pop()';
		$m.__track_lines__[228] = 'serpentduel.py, line 228:\n    segment.x, segment.y = ((x-(direction[0]*num)),(y-(direction[1]*num)))';
		$m.__track_lines__[229] = 'serpentduel.py, line 229:\n    segment.x_pre, segment.y_pre = segment.x, segment.y';
		$m.__track_lines__[230] = "serpentduel.py, line 230:\n    segment.rect.__setattr__('center',(segment.x,segment.y))";
		$m.__track_lines__[231] = 'serpentduel.py, line 231:\n    segment.direction = direction';
		$m.__track_lines__[232] = 'serpentduel.py, line 232:\n    segment.speed = self.speed';
		$m.__track_lines__[233] = 'serpentduel.py, line 233:\n    self.segments.add(segment)';
		$m.__track_lines__[234] = 'serpentduel.py, line 234:\n    self.serpent_body[len(self.serpent_body)] = segment';
		$m.__track_lines__[236] = 'serpentduel.py, line 236:\n    def control(self, direction):';
		$m.__track_lines__[238] = "serpentduel.py, line 238:\n    for dirn in ( ('L','R'),('U','D') ):";
		$m.__track_lines__[239] = 'serpentduel.py, line 239:\n    if (direction in dirn) and (self.direction not in dirn):';
		$m.__track_lines__[240] = 'serpentduel.py, line 240:\n    self.new_direction = direction';
		$m.__track_lines__[241] = 'serpentduel.py, line 241:\n    self.last_move = direction';
		$m.__track_lines__[243] = 'serpentduel.py, line 243:\n    def move(self):';
		$m.__track_lines__[245] = "serpentduel.py, line 245:\n    if self.mode == 'AI':";
		$m.__track_lines__[246] = 'serpentduel.py, line 246:\n    self.move_auto()';
		$m.__track_lines__[247] = 'serpentduel.py, line 247:\n    self.step += 1';
		$m.__track_lines__[248] = 'serpentduel.py, line 248:\n    if self.step >= 10/self.speed:';
		$m.__track_lines__[249] = 'serpentduel.py, line 249:\n    for i in range(len(self.serpent_body)-1, 0, -1):';
		$m.__track_lines__[250] = 'serpentduel.py, line 250:\n    self.serpent_body[i].direction = self.serpent_body[i-1].direction';
		$m.__track_lines__[251] = 'serpentduel.py, line 251:\n    if self.new_direction:';
		$m.__track_lines__[252] = 'serpentduel.py, line 252:\n    self.direction = self.new_direction';
		$m.__track_lines__[253] = 'serpentduel.py, line 253:\n    self.serpent_body[0].direction = self.DIR[self.direction]';
		$m.__track_lines__[254] = "serpentduel.py, line 254:\n    self.serpent_body[0].image = self.serpent_body[0].images[self.identity+'_head'][self.direction]";
		$m.__track_lines__[255] = 'serpentduel.py, line 255:\n    self.new_direction = None';
		$m.__track_lines__[256] = 'serpentduel.py, line 256:\n    self.step = 0';
		$m.__track_lines__[257] = 'serpentduel.py, line 257:\n    self.segments.update()';
		$m.__track_lines__[259] = 'serpentduel.py, line 259:\n    def move_auto(self):';
		$m.__track_lines__[261] = 'serpentduel.py, line 261:\n    def collide(direction):';
		$m.__track_lines__[262] = 'serpentduel.py, line 262:\n    direction = self.DIR[direction]';
		$m.__track_lines__[263] = 'serpentduel.py, line 263:\n    self.scan_rect.rect.x = self.serpent_body[0].x+(direction[0]*10) - (self.scan_rect.rect.width//2)';
		$m.__track_lines__[264] = 'serpentduel.py, line 264:\n    self.scan_rect.rect.y = self.serpent_body[0].y+(direction[1]*10) - (self.scan_rect.rect.height//2)';
		$m.__track_lines__[265] = 'serpentduel.py, line 265:\n    collide = False';
		$m.__track_lines__[266] = 'serpentduel.py, line 266:\n    for serpent in self.matrix.serpent:';
		$m.__track_lines__[267] = 'serpentduel.py, line 267:\n    if not self.matrix.serpent[serpent]:';
		$m.__track_lines__[268] = 'serpentduel.py, line 268:\n    continue';
		$m.__track_lines__[269] = 'serpentduel.py, line 269:\n    if pygame.sprite.spritecollideany(self.scan_rect, self.matrix.serpent[serpent].segments):';
		$m.__track_lines__[270] = 'serpentduel.py, line 270:\n    collide = True';
		$m.__track_lines__[271] = 'serpentduel.py, line 271:\n    return collide';
		$m.__track_lines__[272] = 'serpentduel.py, line 272:\n    if self.scan_rect.rect.collidelist(self.matrix.edges) != -1:';
		$m.__track_lines__[273] = 'serpentduel.py, line 273:\n    collide = True';
		$m.__track_lines__[274] = 'serpentduel.py, line 274:\n    return collide';
		$m.__track_lines__[275] = 'serpentduel.py, line 275:\n    return collide';
		$m.__track_lines__[276] = 'serpentduel.py, line 276:\n    try:';
		$m.__track_lines__[277] = 'serpentduel.py, line 277:\n    treat = [treat for treat in self.matrix.treat][0]';
		$m.__track_lines__[279] = 'serpentduel.py, line 279:\n    treat = None';
		$m.__track_lines__[280] = 'serpentduel.py, line 280:\n    if treat and not self.new_direction:';
		$m.__track_lines__[281] = 'serpentduel.py, line 281:\n    x, y = self.serpent_body[0].x, self.serpent_body[0].y';
		$m.__track_lines__[282] = 'serpentduel.py, line 282:\n    if x <= treat.x and y <= treat.y:';
		$m.__track_lines__[283] = "serpentduel.py, line 283:\n    direct = ('R','D')";
		$m.__track_lines__[285] = "serpentduel.py, line 285:\n    direct = ('R','U')";
		$m.__track_lines__[287] = "serpentduel.py, line 287:\n    direct = ('L','D')";
		$m.__track_lines__[289] = "serpentduel.py, line 289:\n    direct = ('L','U')";
		$m.__track_lines__[290] = 'serpentduel.py, line 290:\n    if self.direction not in direct:';
		$m.__track_lines__[291] = 'serpentduel.py, line 291:\n    new_direction = []';
		$m.__track_lines__[292] = 'serpentduel.py, line 292:\n    for direction in direct:';
		$m.__track_lines__[293] = 'serpentduel.py, line 293:\n    if not collide(direction):';
		$m.__track_lines__[294] = 'serpentduel.py, line 294:\n    new_direction.append(direction)';
		$m.__track_lines__[295] = 'serpentduel.py, line 295:\n    if new_direction:';
		$m.__track_lines__[296] = 'serpentduel.py, line 296:\n    self.control(random.choice(new_direction))';
		$m.__track_lines__[297] = 'serpentduel.py, line 297:\n    if collide(self.direction):';
		$m.__track_lines__[298] = 'serpentduel.py, line 298:\n    self.new_direction = None';
		$m.__track_lines__[299] = 'serpentduel.py, line 299:\n    new_direction = []';
		$m.__track_lines__[300] = "serpentduel.py, line 300:\n    if self.direction in ('U','D'):";
		$m.__track_lines__[301] = "serpentduel.py, line 301:\n    for direction in ('L','R'):";
		$m.__track_lines__[302] = 'serpentduel.py, line 302:\n    if not collide(direction):';
		$m.__track_lines__[303] = 'serpentduel.py, line 303:\n    new_direction.append(direction)';
		$m.__track_lines__[305] = "serpentduel.py, line 305:\n    for direction in ('U','D'):";
		$m.__track_lines__[306] = 'serpentduel.py, line 306:\n    if not collide(direction):';
		$m.__track_lines__[307] = 'serpentduel.py, line 307:\n    new_direction.append(direction)';
		$m.__track_lines__[308] = 'serpentduel.py, line 308:\n    if new_direction:';
		$m.__track_lines__[309] = 'serpentduel.py, line 309:\n    self.control(random.choice(new_direction))';
		$m.__track_lines__[310] = 'serpentduel.py, line 310:\n    self.scan_detect = True';
		$m.__track_lines__[312] = 'serpentduel.py, line 312:\n    self.scan_detect = False';
		$m.__track_lines__[314] = 'serpentduel.py, line 314:\n    def growth(self):';
		$m.__track_lines__[316] = 'serpentduel.py, line 316:\n    if pygame.sprite.spritecollide(self.serpent_body[0], self.matrix.treat, False, pygame.sprite.collide_mask):';
		$m.__track_lines__[317] = 'serpentduel.py, line 317:\n    points = 0';
		$m.__track_lines__[318] = 'serpentduel.py, line 318:\n    treat = [treat for treat in self.matrix.treat][0]';
		$m.__track_lines__[319] = "serpentduel.py, line 319:\n    if treat.identity == 'Food':";
		$m.__track_lines__[320] = 'serpentduel.py, line 320:\n    if self.growing >= 0:';
		$m.__track_lines__[321] = 'serpentduel.py, line 321:\n    self.growing += 5';
		$m.__track_lines__[323] = 'serpentduel.py, line 323:\n    points += 5';
		$m.__track_lines__[325] = 'serpentduel.py, line 325:\n    if len(self.serpent_body) > 5 and self.growing >= 0:';
		$m.__track_lines__[326] = 'serpentduel.py, line 326:\n    self.growing = -(len(self.serpent_body)-5)';
		$m.__track_lines__[327] = 'serpentduel.py, line 327:\n    self.rate = 0';
		$m.__track_lines__[328] = 'serpentduel.py, line 328:\n    points += 10';
		$m.__track_lines__[329] = 'serpentduel.py, line 329:\n    if points:';
		$m.__track_lines__[330] = 'serpentduel.py, line 330:\n    self.set_points(points)';
		$m.__track_lines__[331] = 'serpentduel.py, line 331:\n    self.matrix.treat.empty()';
		$m.__track_lines__[332] = 'serpentduel.py, line 332:\n    if self.growing:';
		$m.__track_lines__[333] = 'serpentduel.py, line 333:\n    self.rate += 1';
		$m.__track_lines__[334] = 'serpentduel.py, line 334:\n    if self.rate > 10/self.speed:';
		$m.__track_lines__[335] = 'serpentduel.py, line 335:\n    points = 0';
		$m.__track_lines__[336] = 'serpentduel.py, line 336:\n    if self.growing > 0:';
		$m.__track_lines__[337] = 'serpentduel.py, line 337:\n    tail = self.serpent_body[len(self.serpent_body)-1]';
		$m.__track_lines__[338] = 'serpentduel.py, line 338:\n    self.grow(tail.x-(tail.direction[0]*10), tail.y-(tail.direction[1]*10), tail.direction, number=1)';
		$m.__track_lines__[339] = 'serpentduel.py, line 339:\n    self.growing -= 1';
		$m.__track_lines__[340] = 'serpentduel.py, line 340:\n    points += 1';
		$m.__track_lines__[342] = 'serpentduel.py, line 342:\n    tail = len(self.serpent_body)-1';
		$m.__track_lines__[343] = 'serpentduel.py, line 343:\n    self.segment_spares.append(self.serpent_body[tail])';
		$m.__track_lines__[344] = 'serpentduel.py, line 344:\n    self.segments.remove(self.serpent_body[tail])';
		$m.__track_lines__[345] = 'serpentduel.py, line 345:\n    del self.serpent_body[tail]';
		$m.__track_lines__[346] = 'serpentduel.py, line 346:\n    self.growing += 1';
		$m.__track_lines__[347] = 'serpentduel.py, line 347:\n    points += 1';
		$m.__track_lines__[348] = 'serpentduel.py, line 348:\n    self.rate = 0';
		$m.__track_lines__[349] = 'serpentduel.py, line 349:\n    if points:';
		$m.__track_lines__[350] = 'serpentduel.py, line 350:\n    self.set_points(points)';
		$m.__track_lines__[352] = 'serpentduel.py, line 352:\n    def set_points(self, points):';
		$m.__track_lines__[354] = 'serpentduel.py, line 354:\n    self.matrix.points[self.identity] += points';
		$m.__track_lines__[355] = 'serpentduel.py, line 355:\n    if self.matrix.match and not self.matrix.auto:';
		$m.__track_lines__[356] = 'serpentduel.py, line 356:\n    if self.matrix.points[self.identity] >= self.matrix.match and not self.growing:';
		$m.__track_lines__[357] = 'serpentduel.py, line 357:\n    self.matrix.set_active(False)';
		$m.__track_lines__[359] = 'serpentduel.py, line 359:\n    def collision(self):';
		$m.__track_lines__[361] = "serpentduel.py, line 361:\n    if self.mode == 'AI' and not self.scan_detect:";
		$m.__track_lines__[362] = 'serpentduel.py, line 362:\n    return';
		$m.__track_lines__[363] = 'serpentduel.py, line 363:\n    for serpent in self.matrix.serpent:';
		$m.__track_lines__[364] = 'serpentduel.py, line 364:\n    if not self.matrix.serpent[serpent]:';
		$m.__track_lines__[365] = 'serpentduel.py, line 365:\n    continue';
		$m.__track_lines__[366] = 'serpentduel.py, line 366:\n    for segment in pygame.sprite.spritecollide(self.serpent_body[0], self.matrix.serpent[serpent].segments, False):';
		$m.__track_lines__[367] = 'serpentduel.py, line 367:\n    if segment not in (self.serpent_body[0], self.serpent_body[1]):';
		$m.__track_lines__[368] = 'serpentduel.py, line 368:\n    return True';
		$m.__track_lines__[369] = 'serpentduel.py, line 369:\n    if self.serpent_body[0].rect.collidelist(self.matrix.edges) != -1:';
		$m.__track_lines__[370] = 'serpentduel.py, line 370:\n    return True';
		$m.__track_lines__[371] = 'serpentduel.py, line 371:\n    return False';
		$m.__track_lines__[373] = 'serpentduel.py, line 373:\n    def update(self):';
		$m.__track_lines__[375] = 'serpentduel.py, line 375:\n    if self.active:';
		$m.__track_lines__[376] = 'serpentduel.py, line 376:\n    self.move()';
		$m.__track_lines__[377] = 'serpentduel.py, line 377:\n    self.growth()';
		$m.__track_lines__[378] = 'serpentduel.py, line 378:\n    self.active = not self.collision()';
		$m.__track_lines__[379] = 'serpentduel.py, line 379:\n    if not self.active:';
		$m.__track_lines__[380] = "serpentduel.py, line 380:\n    self.serpent_body[0].image = self.serpent_body[0].images[self.identity+'_ko'][self.direction]";
		$m.__track_lines__[381] = 'serpentduel.py, line 381:\n    if (self.matrix.match or self.matrix.auto):';
		$m.__track_lines__[382] = 'serpentduel.py, line 382:\n    if len(self.serpent_body) > 5:';
		$m.__track_lines__[383] = 'serpentduel.py, line 383:\n    penalty = 5+(len(self.serpent_body)//5)';
		$m.__track_lines__[384] = 'serpentduel.py, line 384:\n    if self.matrix.points[self.identity] - penalty < 0:';
		$m.__track_lines__[385] = 'serpentduel.py, line 385:\n    penalty = self.matrix.points[self.identity]';
		$m.__track_lines__[386] = 'serpentduel.py, line 386:\n    self.set_points(-penalty)';
		$m.__track_lines__[388] = 'serpentduel.py, line 388:\n    if not self.matrix.match and not self.matrix.auto:';
		$m.__track_lines__[389] = 'serpentduel.py, line 389:\n    self.alive = False';
		$m.__track_lines__[391] = 'serpentduel.py, line 391:\n    self.pause -= 1';
		$m.__track_lines__[392] = 'serpentduel.py, line 392:\n    if not self.pause:';
		$m.__track_lines__[393] = 'serpentduel.py, line 393:\n    self.segment_spares.extend(self.segments.sprites())';
		$m.__track_lines__[394] = 'serpentduel.py, line 394:\n    self.segments.empty()';
		$m.__track_lines__[395] = 'serpentduel.py, line 395:\n    self.alive = False';
		$m.__track_lines__[398] = 'serpentduel.py, line 398:\n    class Segment(pygame.sprite.Sprite):';
		$m.__track_lines__[402] = 'serpentduel.py, line 402:\n    images = None';
		$m.__track_lines__[403] = 'serpentduel.py, line 403:\n    mask = None';
		$m.__track_lines__[404] = 'serpentduel.py, line 404:\n    def __init__(self, serpent, position, direction=None, speed=0):';
		$m.__track_lines__[405] = 'serpentduel.py, line 405:\n    pygame.sprite.Sprite.__init__(self)';
		$m.__track_lines__[406] = "serpentduel.py, line 406:\n    self.type = {'Serpent1':(0,0,255), 'Serpent2':(255,0,0)}";
		$m.__track_lines__[407] = 'serpentduel.py, line 407:\n    if not Segment.images:';
		$m.__track_lines__[408] = 'serpentduel.py, line 408:\n    Segment.images = {}';
		$m.__track_lines__[409] = "serpentduel.py, line 409:\n    for species in ('Serpent1', 'Serpent2'):";
		$m.__track_lines__[410] = 'serpentduel.py, line 410:\n    Segment.images[species] = pygame.Surface((10,10))';
		$m.__track_lines__[411] = 'serpentduel.py, line 411:\n    pygame.draw.circle(Segment.images[species], self.type[species], (5,5), 6, 0)';
		$m.__track_lines__[412] = 'serpentduel.py, line 412:\n    Segment.images[species].set_colorkey((0,0,0))';
		$m.__track_lines__[413] = 'serpentduel.py, line 413:\n    segment_head = Segment.images[species].copy()';
		$m.__track_lines__[414] = 'serpentduel.py, line 414:\n    pygame.draw.line(segment_head, (0,255,0), (2,2), (0,5), 3)';
		$m.__track_lines__[415] = 'serpentduel.py, line 415:\n    pygame.draw.line(segment_head, (0,255,0), (7,2), (9,5), 3)';
		$m.__track_lines__[416] = 'serpentduel.py, line 416:\n    segment_ko = Segment.images[species].copy()';
		$m.__track_lines__[417] = 'serpentduel.py, line 417:\n    pygame.draw.circle(segment_ko, (0,255,0), (2,3), 2, 1)';
		$m.__track_lines__[418] = 'serpentduel.py, line 418:\n    pygame.draw.circle(segment_ko, (0,255,0), (8,3), 2, 1)';
		$m.__track_lines__[419] = "serpentduel.py, line 419:\n    Segment.images[species+'_head'] = {}";
		$m.__track_lines__[420] = "serpentduel.py, line 420:\n    Segment.images[species+'_ko'] = {}";
		$m.__track_lines__[421] = "serpentduel.py, line 421:\n    deg = { 'U':0, 'D':180, 'L':90, 'R':-90 }";
		$m.__track_lines__[422] = "serpentduel.py, line 422:\n    for dirn in ('U','D','L','R'):";
		$m.__track_lines__[423] = "serpentduel.py, line 423:\n    Segment.images[species+'_head'][dirn] = pygame.transform.rotate(segment_head, deg[dirn])";
		$m.__track_lines__[424] = "serpentduel.py, line 424:\n    Segment.images[species+'_ko'][dirn] = pygame.transform.rotate(segment_ko, deg[dirn])";
		$m.__track_lines__[425] = "serpentduel.py, line 425:\n    Segment.mask = pygame.mask.from_surface(Segment.images['Serpent1'])";
		$m.__track_lines__[426] = 'serpentduel.py, line 426:\n    self.x, self.y = position';
		$m.__track_lines__[427] = 'serpentduel.py, line 427:\n    self.direction = direction';
		$m.__track_lines__[428] = 'serpentduel.py, line 428:\n    self.speed = speed';
		$m.__track_lines__[429] = 'serpentduel.py, line 429:\n    self.image = Segment.images[serpent]';
		$m.__track_lines__[430] = 'serpentduel.py, line 430:\n    self.rect = self.image.get_rect(center=(self.x,self.y))';
		$m.__track_lines__[431] = 'serpentduel.py, line 431:\n    self.x_pre, self.y_pre = self.x, self.y';
		$m.__track_lines__[432] = 'serpentduel.py, line 432:\n    self.mask = Segment.mask';
		$m.__track_lines__[434] = 'serpentduel.py, line 434:\n    def update(self):';
		$m.__track_lines__[436] = 'serpentduel.py, line 436:\n    self.x += self.direction[0]*self.speed';
		$m.__track_lines__[437] = 'serpentduel.py, line 437:\n    self.y += self.direction[1]*self.speed';
		$m.__track_lines__[438] = 'serpentduel.py, line 438:\n    self.rect.move_ip(self.x-self.x_pre, self.y-self.y_pre)';
		$m.__track_lines__[439] = 'serpentduel.py, line 439:\n    self.x_pre, self.y_pre = self.x, self.y';
		$m.__track_lines__[442] = 'serpentduel.py, line 442:\n    class Treat(pygame.sprite.Sprite):';
		$m.__track_lines__[446] = 'serpentduel.py, line 446:\n    images = None';
		$m.__track_lines__[447] = 'serpentduel.py, line 447:\n    mask = None';
		$m.__track_lines__[448] = 'serpentduel.py, line 448:\n    def __init__(self, matrix):';
		$m.__track_lines__[449] = 'serpentduel.py, line 449:\n    pygame.sprite.Sprite.__init__(self)';
		$m.__track_lines__[450] = 'serpentduel.py, line 450:\n    self.matrix = matrix';
		$m.__track_lines__[451] = 'serpentduel.py, line 451:\n    if not Treat.images:';
		$m.__track_lines__[452] = 'serpentduel.py, line 452:\n    Treat.images = {}';
		$m.__track_lines__[453] = 'serpentduel.py, line 453:\n    Treat.mask = {}';
		$m.__track_lines__[454] = "serpentduel.py, line 454:\n    Treat.images['Food'] = pygame.Surface((15,15))";
		$m.__track_lines__[455] = "serpentduel.py, line 455:\n    pygame.draw.circle(Treat.images['Food'], (0,255,0), (7,7), 5, 0)";
		$m.__track_lines__[456] = "serpentduel.py, line 456:\n    Treat.images['Food'].set_colorkey((0,0,0))";
		$m.__track_lines__[457] = "serpentduel.py, line 457:\n    Treat.images['Bonus'] = pygame.Surface((15,15))";
		$m.__track_lines__[458] = "serpentduel.py, line 458:\n    pygame.draw.circle(Treat.images['Bonus'], (255,0,0), (7,10), 5, 0)";
		$m.__track_lines__[459] = "serpentduel.py, line 459:\n    pygame.draw.arc(Treat.images['Bonus'], (0,255,0), (-7,0,15,15), 0, 1, 1)";
		$m.__track_lines__[460] = "serpentduel.py, line 460:\n    Treat.images['Bonus'].set_colorkey((0,0,0))";
		$m.__track_lines__[461] = "serpentduel.py, line 461:\n    Treat.mask['Food'] = pygame.mask.from_surface(Treat.images['Food'])";
		$m.__track_lines__[462] = "serpentduel.py, line 462:\n    Treat.mask['Bonus'] = pygame.mask.from_surface(Treat.images['Bonus'])";
		$m.__track_lines__[463] = 'serpentduel.py, line 463:\n    placed = False';
		$m.__track_lines__[464] = 'serpentduel.py, line 464:\n    while not placed:';
		$m.__track_lines__[465] = 'serpentduel.py, line 465:\n    x, y = random.randrange(20,self.matrix.x-20), random.randrange(20,self.matrix.y-20)';
		$m.__track_lines__[466] = 'serpentduel.py, line 466:\n    self.x, self.y = x, y';
		$m.__track_lines__[467] = 'serpentduel.py, line 467:\n    if random.random() > 0.1+(matrix.clock.get_time()/300.0):';
		$m.__track_lines__[468] = "serpentduel.py, line 468:\n    self.identity = 'Food'";
		$m.__track_lines__[469] = 'serpentduel.py, line 469:\n    self.duration = random.randrange(800,2000)';
		$m.__track_lines__[471] = "serpentduel.py, line 471:\n    self.identity = 'Bonus'";
		$m.__track_lines__[472] = 'serpentduel.py, line 472:\n    self.duration = random.randrange(400,800)';
		$m.__track_lines__[473] = 'serpentduel.py, line 473:\n    self.duration //= matrix.level';
		$m.__track_lines__[474] = 'serpentduel.py, line 474:\n    self.image = Treat.images[self.identity]';
		$m.__track_lines__[475] = 'serpentduel.py, line 475:\n    self.rect = self.image.get_rect(center=(x,y))';
		$m.__track_lines__[476] = 'serpentduel.py, line 476:\n    self.mask = Treat.mask[self.identity]';
		$m.__track_lines__[477] = 'serpentduel.py, line 477:\n    disrupt = False';
		$m.__track_lines__[478] = 'serpentduel.py, line 478:\n    for serpent in self.matrix.serpent:';
		$m.__track_lines__[479] = 'serpentduel.py, line 479:\n    if not self.matrix.serpent[serpent]:';
		$m.__track_lines__[480] = 'serpentduel.py, line 480:\n    continue';
		$m.__track_lines__[481] = 'serpentduel.py, line 481:\n    if pygame.sprite.spritecollideany(self, self.matrix.serpent[serpent].segments):';
		$m.__track_lines__[482] = 'serpentduel.py, line 482:\n    disrupt = True';
		$m.__track_lines__[483] = 'serpentduel.py, line 483:\n    break';
		$m.__track_lines__[484] = 'serpentduel.py, line 484:\n    if not disrupt:';
		$m.__track_lines__[485] = 'serpentduel.py, line 485:\n    placed = True';
		$m.__track_lines__[487] = 'serpentduel.py, line 487:\n    def update(self):';
		$m.__track_lines__[489] = 'serpentduel.py, line 489:\n    self.duration -= 1';
		$m.__track_lines__[490] = 'serpentduel.py, line 490:\n    if not self.duration:';
		$m.__track_lines__[491] = 'serpentduel.py, line 491:\n    self.matrix.treat.remove(self)';
		$m.__track_lines__[494] = 'serpentduel.py, line 494:\n    class Control(object):';
		$m.__track_lines__[495] = 'serpentduel.py, line 495:\n    def __init__(self, matrix):';
		$m.__track_lines__[496] = 'serpentduel.py, line 496:\n    self.matrix = matrix';
		$m.__track_lines__[497] = 'serpentduel.py, line 497:\n    pygame.font.init()';
		$m.__track_lines__[498] = 'serpentduel.py, line 498:\n    font = pygame.font.get_default_font()';
		$m.__track_lines__[499] = 'serpentduel.py, line 499:\n    self.font = pygame.font.Font(font, 24)';
		$m.__track_lines__[500] = 'serpentduel.py, line 500:\n    self.font2 = pygame.font.Font(font, 14)';
		$m.__track_lines__[501] = 'serpentduel.py, line 501:\n    self.matrix_start = False';
		$m.__track_lines__[502] = 'serpentduel.py, line 502:\n    self.quit_request = False';
		$m.__track_lines__[503] = 'serpentduel.py, line 503:\n    pygame.event.set_blocked(pygame.MOUSEMOTION)';
		$m.__track_lines__[504] = 'serpentduel.py, line 504:\n    self.quit = False';
		$m.__track_lines__[505] = 'serpentduel.py, line 505:\n    self.pause = True';
		$m.__track_lines__[506] = "serpentduel.py, line 506:\n    self.pause_program('Serpent Duel', 'Click to run/pause', '[r]estart [p]ause [q]uit')";
		$m.__track_lines__[507] = 'serpentduel.py, line 507:\n    def pause_program(self, text1, text2=None, text3=None):';
		$m.__track_lines__[508] = 'serpentduel.py, line 508:\n    self.matrix.screen.fill((0,0,0))';
		$m.__track_lines__[509] = 'serpentduel.py, line 509:\n    text = self.font.render(text1, True, (100,100,100))';
		$m.__track_lines__[510] = 'serpentduel.py, line 510:\n    size = self.font.size(text1)';
		$m.__track_lines__[511] = 'serpentduel.py, line 511:\n    self.matrix.screen.blit(text, (self.matrix.x//2-size[0]//2, (self.matrix.y//2-size[1]//2)-12))';
		$m.__track_lines__[512] = 'serpentduel.py, line 512:\n    if text2:';
		$m.__track_lines__[513] = 'serpentduel.py, line 513:\n    text = self.font2.render(text2, True, (100,100,100))';
		$m.__track_lines__[514] = 'serpentduel.py, line 514:\n    size = self.font2.size(text2)';
		$m.__track_lines__[515] = 'serpentduel.py, line 515:\n    self.matrix.screen.blit(text, (self.matrix.x//2-size[0]//2, (self.matrix.y//2-size[1]//2)+25))';
		$m.__track_lines__[516] = 'serpentduel.py, line 516:\n    if text3:';
		$m.__track_lines__[517] = 'serpentduel.py, line 517:\n    text = self.font2.render(text3, True, (100,100,100))';
		$m.__track_lines__[518] = 'serpentduel.py, line 518:\n    size = self.font2.size(text3)';
		$m.__track_lines__[519] = 'serpentduel.py, line 519:\n    self.matrix.screen.blit(text, (self.matrix.x//2-size[0]//2, (self.matrix.y//2-size[1]//2)+40))';
		$m.__track_lines__[520] = 'serpentduel.py, line 520:\n    pygame.display.flip()';
		$m.__track_lines__[521] = 'serpentduel.py, line 521:\n    self.matrix.active = False';
		$m.__track_lines__[522] = 'serpentduel.py, line 522:\n    def matrix_control(self):';
		$m.__track_lines__[523] = 'serpentduel.py, line 523:\n    if not self.pause:';
		$m.__track_lines__[524] = "serpentduel.py, line 524:\n    self.pause_program('Serpent Duel', 'Click to run/pause', '[r]estart [p]ause [q]uit')";
		$m.__track_lines__[525] = 'serpentduel.py, line 525:\n    self.pause = True';
		$m.__track_lines__[527] = 'serpentduel.py, line 527:\n    if self.matrix_start:';
		$m.__track_lines__[528] = 'serpentduel.py, line 528:\n    self.matrix.clear_screen()';
		$m.__track_lines__[529] = 'serpentduel.py, line 529:\n    self.matrix.update_screen()';
		$m.__track_lines__[530] = 'serpentduel.py, line 530:\n    self.matrix.active = True';
		$m.__track_lines__[532] = 'serpentduel.py, line 532:\n    self.matrix.start()';
		$m.__track_lines__[533] = 'serpentduel.py, line 533:\n    self.matrix_start = True';
		$m.__track_lines__[534] = 'serpentduel.py, line 534:\n    self.quit_request = False';
		$m.__track_lines__[535] = 'serpentduel.py, line 535:\n    self.pause = False';
		$m.__track_lines__[536] = 'serpentduel.py, line 536:\n    def check_control(self):';
		$m.__track_lines__[537] = 'serpentduel.py, line 537:\n    for event in pygame.event.get():';
		$m.__track_lines__[538] = 'serpentduel.py, line 538:\n    if event.type == pygame.MOUSEBUTTONDOWN:';
		$m.__track_lines__[539] = 'serpentduel.py, line 539:\n    if event.button == 1:';
		$m.__track_lines__[540] = 'serpentduel.py, line 540:\n    self.matrix_control()';
		$m.__track_lines__[542] = 'serpentduel.py, line 542:\n    if event.key == pygame.K_p:';
		$m.__track_lines__[543] = 'serpentduel.py, line 543:\n    self.matrix_control()';
		$m.__track_lines__[545] = 'serpentduel.py, line 545:\n    self.pause = False';
		$m.__track_lines__[546] = 'serpentduel.py, line 546:\n    self.quit_request = False';
		$m.__track_lines__[547] = 'serpentduel.py, line 547:\n    self.matrix.start()';
		$m.__track_lines__[549] = "serpentduel.py, line 549:\n    self.pause_program('Serpent Duel', 'Quit (y/n)?')";
		$m.__track_lines__[550] = 'serpentduel.py, line 550:\n    self.pause = True';
		$m.__track_lines__[551] = 'serpentduel.py, line 551:\n    self.quit_request = True';
		$m.__track_lines__[553] = 'serpentduel.py, line 553:\n    if self.quit_request:';
		$m.__track_lines__[554] = 'serpentduel.py, line 554:\n    if event.key == pygame.K_n:';
		$m.__track_lines__[555] = 'serpentduel.py, line 555:\n    self.matrix_control()';
		$m.__track_lines__[557] = 'serpentduel.py, line 557:\n    self.matrix.screen.fill((0,0,0))';
		$m.__track_lines__[558] = 'serpentduel.py, line 558:\n    pygame.display.flip()';
		$m.__track_lines__[559] = 'serpentduel.py, line 559:\n    pygame.time.delay(10)';
		$m.__track_lines__[560] = 'serpentduel.py, line 560:\n    pygame.quit()';
		$m.__track_lines__[561] = 'serpentduel.py, line 561:\n    self.quit = True';
		$m.__track_lines__[563] = 'serpentduel.py, line 563:\n    self.quit = True';
		$m.__track_lines__[564] = 'serpentduel.py, line 564:\n    return self.quit';
		$m.__track_lines__[567] = 'serpentduel.py, line 567:\n    def setup(x=500,y=500,screen=None):';
		$m.__track_lines__[568] = 'serpentduel.py, line 568:\n    pygame.display.init()   #pygame.init()';
		$m.__track_lines__[569] = "serpentduel.py, line 569:\n    pygame.display.set_caption('Serpent Duel')";
		$m.__track_lines__[570] = 'serpentduel.py, line 570:\n    if not screen:';
		$m.__track_lines__[571] = 'serpentduel.py, line 571:\n    screen = pygame.display.set_mode((x,y))';
		$m.__track_lines__[572] = 'serpentduel.py, line 572:\n    background = pygame.Surface((x,y))';
		$m.__track_lines__[573] = 'serpentduel.py, line 573:\n    background.fill((50,50,50))';
		$m.__track_lines__[574] = 'serpentduel.py, line 574:\n    for line in range(0,300,25):';
		$m.__track_lines__[575] = 'serpentduel.py, line 575:\n    pygame.draw.line(background, (43,50,58), (0,line), (400,line), 1)';
		$m.__track_lines__[576] = 'serpentduel.py, line 576:\n    for line in range(0,400,25):';
		$m.__track_lines__[577] = 'serpentduel.py, line 577:\n    pygame.draw.line(background, (43,50,58), (line,0), (line,300), 1)';
		$m.__track_lines__[578] = 'serpentduel.py, line 578:\n    matrix = Matrix(x,y,screen,background)';
		$m.__track_lines__[579] = 'serpentduel.py, line 579:\n    control = Control(matrix)';
		$m.__track_lines__[580] = 'serpentduel.py, line 580:\n    return matrix, control';
		$m.__track_lines__[583] = 'serpentduel.py, line 583:\n    def program_exec(matrix, control):';
		$m.__track_lines__[584] = 'serpentduel.py, line 584:\n    matrix.update_rect = []';
		$m.__track_lines__[585] = 'serpentduel.py, line 585:\n    matrix.update()';
		$m.__track_lines__[586] = 'serpentduel.py, line 586:\n    pygame.display.update(matrix.update_rect)';
		$m.__track_lines__[587] = 'serpentduel.py, line 587:\n    matrix.clock.tick(30)';
		$m.__track_lines__[588] = 'serpentduel.py, line 588:\n    quit = control.check_control()';
		$m.__track_lines__[589] = 'serpentduel.py, line 589:\n    return quit';
		$m.__track_lines__[592] = 'serpentduel.py, line 592:\n    def run():      #pyjsdl executed function';
		$m.__track_lines__[593] = 'serpentduel.py, line 593:\n    program_exec(matrix, control)';
		$m.__track_lines__[596] = 'serpentduel.py, line 596:\n    matrix, control = None, None';
		$m.__track_lines__[599] = 'serpentduel.py, line 599:\n    def main():';
		$m.__track_lines__[600] = 'serpentduel.py, line 600:\n    global matrix, control';
		$m.__track_lines__[601] = 'serpentduel.py, line 601:\n    matrix, control = setup(400,300)';
		$m.__track_lines__[602] = 'serpentduel.py, line 602:\n    pygame.display.setup(run)     #pyjsdl setup';
		$m.__track_lines__[605] = "serpentduel.py, line 605:\n    if __name__ == '__main__':";
		$m.__track_lines__[606] = 'serpentduel.py, line 606:\n    main()';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_14 = new $p['int'](14);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_400 = new $p['int'](400);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_25 = new $p['int'](25);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_800 = new $p['int'](800);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_43 = new $p['int'](43);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_180 = new $p['int'](180);
		var $constant_int_58 = new $p['int'](58);
		var $constant_int_2000 = new $p['int'](2000);
		var $constant_int_90 = new $p['int'](90);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_500 = new $p['int'](500);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='serpentduel';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=2;
		$pyjs['track']['lineno']=4;
		$pyjs['track']['lineno']=29;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pygame'] = $p['___import___']('pyjsdl', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=30;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['random'] = $p['___import___']('random', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=33;
		$m['Matrix'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'serpentduel';
			$cls_definition['__md5__'] = '1665cd051d8ac91cfb23f6ed74f95987';
			$pyjs['track']['lineno']=37;
			$method = $pyjs__bind_method2('__init__', function(x, y, screen, background) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					screen = arguments[3];
					background = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1665cd051d8ac91cfb23f6ed74f95987') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'serpentduel', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=37;
				$pyjs['track']['lineno']=38;
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', $tupleassign1[0]) : $p['setattr'](self, 'x', $tupleassign1[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', $tupleassign1[1]) : $p['setattr'](self, 'y', $tupleassign1[1]); 
				$pyjs['track']['lineno']=39;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('screen', screen) : $p['setattr'](self, 'screen', screen); 
				$pyjs['track']['lineno']=40;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('background', background) : $p['setattr'](self, 'background', background); 
				$pyjs['track']['lineno']=41;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('clock', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['time']['Clock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) : $p['setattr'](self, 'clock', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['time']['Clock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()); 
				$pyjs['track']['lineno']=42;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('level', $constant_int_2) : $p['setattr'](self, 'level', $constant_int_2); 
				$pyjs['track']['lineno']=43;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('speed', $constant_int_2) : $p['setattr'](self, 'speed', $constant_int_2); 
				$pyjs['track']['lineno']=44;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mode', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['Serpent1', 'AI'], ['Serpent2', 'AI']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) : $p['setattr'](self, 'mode', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['Serpent1', 'AI'], ['Serpent2', 'AI']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()); 
				$pyjs['track']['lineno']=45;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ctrl', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['Pad', 'Serpent1'], ['Key1', 'Serpent1'], ['Key2', null]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) : $p['setattr'](self, 'ctrl', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['Pad', 'Serpent1'], ['Key1', 'Serpent1'], ['Key2', null]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()); 
				$pyjs['track']['lineno']=46;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('points', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['Serpent1', $constant_int_0], ['Serpent2', $constant_int_0]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) : $p['setattr'](self, 'points', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['Serpent1', $constant_int_0], ['Serpent2', $constant_int_0]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()); 
				$pyjs['track']['lineno']=47;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('match', $constant_int_0) : $p['setattr'](self, 'match', $constant_int_0); 
				$pyjs['track']['lineno']=48;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('auto', true) : $p['setattr'](self, 'auto', true); 
				$pyjs['track']['lineno']=49;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('controls', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) : $p['setattr'](self, 'controls', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()); 
				$pyjs['track']['lineno']=50;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dirn', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) : $p['setattr'](self, 'dirn', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()); 
				$pyjs['track']['lineno']=51;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'dirn')['__setitem__']('U', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['U', 'U'], ['D', 'D'], ['L', 'L'], ['R', 'R']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$pyjs['track']['lineno']=52;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'dirn')['__setitem__']('D', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['U', 'D'], ['D', 'U'], ['L', 'R'], ['R', 'L']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs['track']['lineno']=53;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'dirn')['__setitem__']('L', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['U', 'R'], ['D', 'L'], ['L', 'D'], ['R', 'U']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs['track']['lineno']=54;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'dirn')['__setitem__']('R', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['U', 'L'], ['D', 'R'], ['L', 'U'], ['R', 'D']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs['track']['lineno']=55;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('serpent_control', $p['getattr'](self, 'serpent_control_scr')) : $p['setattr'](self, 'serpent_control', $p['getattr'](self, 'serpent_control_scr')); 
				$pyjs['track']['lineno']=56;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('update_rect', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) : $p['setattr'](self, 'update_rect', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()); 
				$pyjs['track']['lineno']=57;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['clear_screen']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs['track']['lineno']=58;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', false) : $p['setattr'](self, 'active', false); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['screen'],['background']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=60;
			$method = $pyjs__bind_method2('start', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1665cd051d8ac91cfb23f6ed74f95987') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_iter,$iter2_nextval,$iter1_nextval,$iter1_type,serpent,$iter1_iter,$iter2_idx,$iter1_array,$pyjs__trackstack_size_1,$iter2_type,$iter2_array,$iter1_idx;
				$pyjs['track']={'module':'serpentduel', 'lineno':60};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=60;
				$pyjs['track']['lineno']=62;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('treat', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['sprite']['RenderUpdates']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) : $p['setattr'](self, 'treat', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['sprite']['RenderUpdates']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()); 
				$pyjs['track']['lineno']=63;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('serpent', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['Serpent1', null], ['Serpent2', null]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) : $p['setattr'](self, 'serpent', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['Serpent1', null], ['Serpent2', null]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()); 
				$pyjs['track']['lineno']=64;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'mode');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					serpent = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=65;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple'](['USER', 'AI']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()['__contains__']($p['getattr'](self, 'mode')['__getitem__'](serpent)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()) {
						$pyjs['track']['lineno']=66;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['serpent_initiate'](serpent);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=68;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('match', $constant_int_0) : $p['setattr'](self, 'match', $constant_int_0); 
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=69;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('auto', !$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['mode']['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()['__contains__']('USER'))) : $p['setattr'](self, 'auto', !$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['mode']['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()['__contains__']('USER'))); 
				$pyjs['track']['lineno']=70;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['clear_screen']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs['track']['lineno']=71;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'points');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					serpent = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=72;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'points')['__setitem__'](serpent, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=73;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', true) : $p['setattr'](self, 'active', true); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['start'] = $method;
			$pyjs['track']['lineno']=75;
			$method = $pyjs__bind_method2('clear_screen', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1665cd051d8ac91cfb23f6ed74f95987') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'serpentduel', 'lineno':75};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=75;
				$pyjs['track']['lineno']=77;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['screen']['blit']($p['getattr'](self, 'background'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs['track']['lineno']=78;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['draw_edge']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
				$pyjs['track']['lineno']=79;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['display']['flip']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear_screen'] = $method;
			$pyjs['track']['lineno']=81;
			$method = $pyjs__bind_method2('draw_edge', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1665cd051d8ac91cfb23f6ed74f95987') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,$sub5,$iter3_type,edge_rect,$sub6,$iter3_iter,$iter3_array,$sub3,$sub2,$sub1,$pyjs__trackstack_size_1,$iter3_nextval,rect,$sub4;
				$pyjs['track']={'module':'serpentduel', 'lineno':81};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=81;
				$pyjs['track']['lineno']=83;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('edges', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) : $p['setattr'](self, 'edges', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()); 
				$pyjs['track']['lineno']=84;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_0, $constant_int_0, $p['getattr'](self, 'x'), $constant_int_5]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_0, $p['__op_sub']($sub1=$p['getattr'](self, 'y'),$sub2=$constant_int_5), $p['getattr'](self, 'x'), $constant_int_5]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_5, $p['getattr'](self, 'y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['__op_sub']($sub3=$p['getattr'](self, 'x'),$sub4=$constant_int_5), $constant_int_0, $constant_int_5, $p['__op_sub']($sub5=$p['getattr'](self, 'y'),$sub6=$constant_int_5)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					rect = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=85;
					edge_rect = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['pygame']['Rect'](rect);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
					$pyjs['track']['lineno']=86;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['edges']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['pygame']['draw']['rect']($p['getattr'](self, 'screen'), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$constant_int_43, $constant_int_50, $constant_int_58]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})(), edge_rect, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
					$pyjs['track']['lineno']=87;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['update_rect']['append'](edge_rect);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='serpentduel';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['draw_edge'] = $method;
			$pyjs['track']['lineno']=89;
			$method = $pyjs__bind_method2('update_screen', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1665cd051d8ac91cfb23f6ed74f95987') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var serpent,$iter4_nextval,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
				$pyjs['track']={'module':'serpentduel', 'lineno':89};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=89;
				$pyjs['track']['lineno']=91;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'treat'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()) {
					$pyjs['track']['lineno']=92;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['treat']['clear']($p['getattr'](self, 'screen'), $p['getattr'](self, 'background'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
					$pyjs['track']['lineno']=93;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['update_rect']['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['treat']['draw']($p['getattr'](self, 'screen'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				}
				$pyjs['track']['lineno']=94;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'serpent');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					serpent = $iter4_nextval['$nextval'];
					$pyjs['track']['lineno']=95;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']($p['getattr'](self, 'serpent')['__getitem__'](serpent)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
						$pyjs['track']['lineno']=96;
						continue;
					}
					$pyjs['track']['lineno']=97;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'serpent')['__getitem__'](serpent)['segments']['clear']($p['getattr'](self, 'screen'), $p['getattr'](self, 'background'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
					$pyjs['track']['lineno']=98;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['update_rect']['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'serpent')['__getitem__'](serpent)['segments']['draw']($p['getattr'](self, 'screen'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=99;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['display']['update']($p['getattr'](self, 'update_rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
				$pyjs['track']['lineno']=100;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('update_rect', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) : $p['setattr'](self, 'update_rect', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update_screen'] = $method;
			$pyjs['track']['lineno']=102;
			$method = $pyjs__bind_method2('set_active', function(state, pause) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					pause = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1665cd051d8ac91cfb23f6ed74f95987') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof state == 'undefined') state=arguments['callee']['__args__'][3][1];
				if (typeof pause == 'undefined') pause=arguments['callee']['__args__'][4][1];

				$pyjs['track']={'module':'serpentduel', 'lineno':102};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=102;
				$pyjs['track']['lineno']=104;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_is'](state, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
					$pyjs['track']['lineno']=105;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', !$p['bool']($p['getattr'](self, 'active'))) : $p['setattr'](self, 'active', !$p['bool']($p['getattr'](self, 'active'))); 
				}
				else {
					$pyjs['track']['lineno']=107;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', state) : $p['setattr'](self, 'active', state); 
				}
				$pyjs['track']['lineno']=108;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'active'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()) {
					$pyjs['track']['lineno']=109;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool'](pause));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
						$pyjs['track']['lineno']=110;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['start']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['state', null],['pause', false]]);
			$cls_definition['set_active'] = $method;
			$pyjs['track']['lineno']=112;
			$method = $pyjs__bind_method2('set_mode', function(serpent, mode) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					serpent = arguments[1];
					mode = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1665cd051d8ac91cfb23f6ed74f95987') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'serpentduel', 'lineno':112};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=112;
				$pyjs['track']['lineno']=114;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'mode')['__setitem__'](serpent, mode);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['serpent'],['mode']]);
			$cls_definition['set_mode'] = $method;
			$pyjs['track']['lineno']=116;
			$method = $pyjs__bind_method2('set_control_mode', function(mode) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					mode = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1665cd051d8ac91cfb23f6ed74f95987') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'serpentduel', 'lineno':116};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=116;
				$pyjs['track']['lineno']=118;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](mode, 'SCR'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
					$pyjs['track']['lineno']=119;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('serpent_control', $p['getattr'](self, 'serpent_control_scr')) : $p['setattr'](self, 'serpent_control', $p['getattr'](self, 'serpent_control_scr')); 
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](mode, 'USR'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) {
					$pyjs['track']['lineno']=121;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('serpent_control', $p['getattr'](self, 'serpent_control_usr')) : $p['setattr'](self, 'serpent_control', $p['getattr'](self, 'serpent_control_usr')); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['mode']]);
			$cls_definition['set_control_mode'] = $method;
			$pyjs['track']['lineno']=123;
			$method = $pyjs__bind_method2('set_difficulty', function(level) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1665cd051d8ac91cfb23f6ed74f95987') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'serpentduel', 'lineno':123};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=123;
				$pyjs['track']['lineno']=125;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('level', level) : $p['setattr'](self, 'level', level); 
				$pyjs['track']['lineno']=126;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('speed', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$constant_int_1, $constant_int_1], [$constant_int_2, $constant_int_2], [$constant_int_3, $constant_int_5], [$constant_int_4, $constant_int_10]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()['__getitem__'](level)) : $p['setattr'](self, 'speed', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$constant_int_1, $constant_int_1], [$constant_int_2, $constant_int_2], [$constant_int_3, $constant_int_5], [$constant_int_4, $constant_int_10]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()['__getitem__'](level)); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['level']]);
			$cls_definition['set_difficulty'] = $method;
			$pyjs['track']['lineno']=128;
			$method = $pyjs__bind_method2('set_control', function(serpent, control) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					serpent = arguments[1];
					control = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1665cd051d8ac91cfb23f6ed74f95987') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,ctr,$iter5_array,$pyjs__trackstack_size_1,$iter5_iter,$iter5_idx,$iter5_type;
				$pyjs['track']={'module':'serpentduel', 'lineno':128};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=128;
				$pyjs['track']['lineno']=130;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'ctrl');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					ctr = $iter5_nextval['$nextval'];
					$pyjs['track']['lineno']=131;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](self, 'ctrl')['__getitem__'](ctr), serpent));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
						$pyjs['track']['lineno']=132;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'ctrl')['__setitem__'](ctr, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=133;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](control, 'Pad/Key1'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})()) {
					$pyjs['track']['lineno']=134;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'ctrl')['__setitem__']('Pad', serpent);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
					$pyjs['track']['lineno']=135;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'ctrl')['__setitem__']('Key1', serpent);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['op_eq'](control, '-'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) {
					$pyjs['track']['lineno']=137;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'ctrl')['__setitem__'](control, serpent);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['serpent'],['control']]);
			$cls_definition['set_control'] = $method;
			$pyjs['track']['lineno']=139;
			$method = $pyjs__bind_method2('serpent_control_scr', function(direction, ctrl) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					direction = arguments[1];
					ctrl = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1665cd051d8ac91cfb23f6ed74f95987') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof ctrl == 'undefined') ctrl=arguments['callee']['__args__'][4][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'serpentduel', 'lineno':139};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=139;
				$pyjs['track']['lineno']=141;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=142;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'serpent')['__getitem__']($p['getattr'](self, 'ctrl')['__getitem__'](ctrl))['control'](direction);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
					} finally { $pyjs['in_try_except'] -= 1; }
				} catch($pyjs_try_err) {
					$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
					$pyjs['__active_exception_stack__'] = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='serpentduel';
					if (true) {
						$pyjs['track']['lineno']=144;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['direction'],['ctrl', 'Pad']]);
			$cls_definition['serpent_control_scr'] = $method;
			$pyjs['track']['lineno']=146;
			$method = $pyjs__bind_method2('serpent_control_usr', function(direction, ctrl) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					direction = arguments[1];
					ctrl = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1665cd051d8ac91cfb23f6ed74f95987') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof ctrl == 'undefined') ctrl=arguments['callee']['__args__'][4][1];
				var dirn,$pyjs_try_err;
				$pyjs['track']={'module':'serpentduel', 'lineno':146};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=146;
				$pyjs['track']['lineno']=148;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=149;
						dirn = $p['getattr']($p['getattr'](self, 'serpent')['__getitem__']($p['getattr'](self, 'ctrl')['__getitem__'](ctrl)), 'direction');
						$pyjs['track']['lineno']=150;
						direction = $p['getattr'](self, 'dirn')['__getitem__'](dirn)['__getitem__'](direction);
						$pyjs['track']['lineno']=151;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'serpent')['__getitem__']($p['getattr'](self, 'ctrl')['__getitem__'](ctrl))['control'](direction);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
					} finally { $pyjs['in_try_except'] -= 1; }
				} catch($pyjs_try_err) {
					$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
					$pyjs['__active_exception_stack__'] = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='serpentduel';
					if (true) {
						$pyjs['track']['lineno']=153;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['direction'],['ctrl', 'Pad']]);
			$cls_definition['serpent_control_usr'] = $method;
			$pyjs['track']['lineno']=155;
			$method = $pyjs__bind_method2('serpent_initiate', function(identity) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					identity = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1665cd051d8ac91cfb23f6ed74f95987') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $floordiv7,$add4,$floordiv6,$add5,$add2,$add3,$floordiv5,$add1,$floordiv3,$floordiv2,$floordiv1,$floordiv4,$add6,$sub7,$sub8,$floordiv8;
				$pyjs['track']={'module':'serpentduel', 'lineno':155};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=155;
				$pyjs['track']['lineno']=157;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](identity, 'Serpent1'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()) {
					$pyjs['track']['lineno']=158;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'serpent')['__setitem__']('Serpent1', (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof Serpent == "undefined"?$m['Serpent']:Serpent)(self, $p['__op_add']($add1=(typeof ($floordiv1=$p['getattr'](self, 'x'))==typeof ($floordiv2=$constant_int_2) && typeof $floordiv1=='number' && $floordiv2 !== 0?
						Math['floor']($floordiv1/$floordiv2):
						$p['op_floordiv']($floordiv1,$floordiv2)),$add2=$constant_int_50), $p['__op_add']($add3=(typeof ($floordiv3=$p['getattr'](self, 'y'))==typeof ($floordiv4=$constant_int_3) && typeof $floordiv3=='number' && $floordiv4 !== 0?
						Math['floor']($floordiv3/$floordiv4):
						$p['op_floordiv']($floordiv3,$floordiv4)),$add4=$constant_int_30), identity, $p['getattr'](self, 'speed'), $p['getattr'](self, 'mode')['__getitem__']('Serpent1'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=160;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'serpent')['__setitem__']('Serpent2', (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof Serpent == "undefined"?$m['Serpent']:Serpent)(self, $p['__op_sub']($sub7=(typeof ($floordiv5=$p['getattr'](self, 'x'))==typeof ($floordiv6=$constant_int_2) && typeof $floordiv5=='number' && $floordiv6 !== 0?
						Math['floor']($floordiv5/$floordiv6):
						$p['op_floordiv']($floordiv5,$floordiv6)),$sub8=$constant_int_50), $p['__op_add']($add5=(typeof ($floordiv7=$p['getattr'](self, 'y'))==typeof ($floordiv8=$constant_int_3) && typeof $floordiv7=='number' && $floordiv8 !== 0?
						Math['floor']($floordiv7/$floordiv8):
						$p['op_floordiv']($floordiv7,$floordiv8)),$add6=$constant_int_30), identity, $p['getattr'](self, 'speed'), $p['getattr'](self, 'mode')['__getitem__']('Serpent2'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['identity']]);
			$cls_definition['serpent_initiate'] = $method;
			$pyjs['track']['lineno']=162;
			$method = $pyjs__bind_method2('pause', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1665cd051d8ac91cfb23f6ed74f95987') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tm;
				$pyjs['track']={'module':'serpentduel', 'lineno':162};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=162;
				$pyjs['track']['lineno']=163;
				tm = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['time']['wait']($constant_int_100);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['pause'] = $method;
			$pyjs['track']['lineno']=165;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1665cd051d8ac91cfb23f6ed74f95987') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var serpent,$iter6_idx,$iter6_type,$and1,$and3,$and4,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$and2,$iter6_nextval;
				$pyjs['track']={'module':'serpentduel', 'lineno':165};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=165;
				$pyjs['track']['lineno']=167;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'active'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
					$pyjs['track']['lineno']=168;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']($p['getattr'](self, 'treat')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()) {
						$pyjs['track']['lineno']=169;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['treat']['clear']($p['getattr'](self, 'screen'), $p['getattr'](self, 'background'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
						$pyjs['track']['lineno']=170;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['update_rect']['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
						return self['treat']['draw']($p['getattr'](self, 'screen'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
						$pyjs['track']['lineno']=171;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($and1=$p['getattr'](self, 'serpent'))?($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['random']['random']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})(), 0.95) == 1):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()) {
							$pyjs['track']['lineno']=172;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['treat']['add']((function(){try{try{$pyjs['in_try_except'] += 1;
							return (typeof Treat == "undefined"?$m['Treat']:Treat)(self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
							$pyjs['track']['lineno']=173;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['treat']['clear']($p['getattr'](self, 'screen'), $p['getattr'](self, 'background'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
							$pyjs['track']['lineno']=174;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['update_rect']['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
							return self['treat']['draw']($p['getattr'](self, 'screen'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
						}
					}
					$pyjs['track']['lineno']=175;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['treat']['update']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
					$pyjs['track']['lineno']=176;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'serpent');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
					while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
						serpent = $iter6_nextval['$nextval'];
						$pyjs['track']['lineno']=177;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['bool']($p['getattr'](self, 'serpent')['__getitem__'](serpent)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})()) {
							$pyjs['track']['lineno']=178;
							continue;
						}
						$pyjs['track']['lineno']=179;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'serpent')['__getitem__'](serpent), 'alive')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})()) {
							$pyjs['track']['lineno']=180;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](($p['bool']($and3=!$p['bool']($p['getattr'](self, 'match')))?!$p['bool']($p['getattr'](self, 'auto')):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()) {
								$pyjs['track']['lineno']=181;
								self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', false) : $p['setattr'](self, 'active', false); 
							}
							else {
								$pyjs['track']['lineno']=183;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return self['serpent_initiate']($p['getattr']($p['getattr'](self, 'serpent')['__getitem__'](serpent), 'identity'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
								$pyjs['track']['lineno']=184;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return self['draw_edge']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
							}
						}
						$pyjs['track']['lineno']=185;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'serpent')['__getitem__'](serpent)['update']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
						$pyjs['track']['lineno']=186;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'serpent')['__getitem__'](serpent)['segments']['clear']($p['getattr'](self, 'screen'), $p['getattr'](self, 'background'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
						$pyjs['track']['lineno']=187;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['update_rect']['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'serpent')['__getitem__'](serpent)['segments']['draw']($p['getattr'](self, 'screen'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='serpentduel';
				}
				else {
					$pyjs['track']['lineno']=189;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['pause']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=33;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Matrix', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=192;
		$m['Serpent'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'serpentduel';
			$cls_definition['__md5__'] = '322caac2bffbd11c1e02492e925ed2d2';
			$pyjs['track']['lineno']=196;
			$method = $pyjs__bind_method2('__init__', function(matrix, x, y, identity, speed, mode) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					matrix = arguments[1];
					x = arguments[2];
					y = arguments[3];
					identity = arguments[4];
					speed = arguments[5];
					mode = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '322caac2bffbd11c1e02492e925ed2d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add8,$add7;
				$pyjs['track']={'module':'serpentduel', 'lineno':196};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=196;
				$pyjs['track']['lineno']=197;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix', matrix) : $p['setattr'](self, 'matrix', matrix); 
				$pyjs['track']['lineno']=198;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('identity', identity) : $p['setattr'](self, 'identity', identity); 
				$pyjs['track']['lineno']=199;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mode', mode) : $p['setattr'](self, 'mode', mode); 
				$pyjs['track']['lineno']=200;
				var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', $tupleassign2[0]) : $p['setattr'](self, 'x', $tupleassign2[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', $tupleassign2[1]) : $p['setattr'](self, 'y', $tupleassign2[1]); 
				$pyjs['track']['lineno']=201;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('speed', speed) : $p['setattr'](self, 'speed', speed); 
				$pyjs['track']['lineno']=202;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('DIR', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['U', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_0, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()], ['D', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_0, $constant_int_1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()], ['L', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([(typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)), $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()], ['R', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_1, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()) : $p['setattr'](self, 'DIR', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['U', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_0, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()], ['D', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_0, $constant_int_1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()], ['L', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([(typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)), $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()], ['R', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_1, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()); 
				$pyjs['track']['lineno']=203;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('DEG', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['U', $constant_int_0], ['D', $constant_int_180], ['L', $constant_int_90], ['R', (typeof ($usub3=$constant_int_90)=='number'?
					-$usub3:
					$p['op_usub']($usub3))]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()) : $p['setattr'](self, 'DEG', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['U', $constant_int_0], ['D', $constant_int_180], ['L', $constant_int_90], ['R', (typeof ($usub3=$constant_int_90)=='number'?
					-$usub3:
					$p['op_usub']($usub3))]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()); 
				$pyjs['track']['lineno']=204;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](self, 'identity'), 'Serpent1'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()) {
					$pyjs['track']['lineno']=205;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('direction', 'R') : $p['setattr'](self, 'direction', 'R'); 
				}
				else {
					$pyjs['track']['lineno']=207;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('direction', 'L') : $p['setattr'](self, 'direction', 'L'); 
				}
				$pyjs['track']['lineno']=208;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('new_direction', null) : $p['setattr'](self, 'new_direction', null); 
				$pyjs['track']['lineno']=209;
				var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})(), 3, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('step', $tupleassign3[0]) : $p['setattr'](self, 'step', $tupleassign3[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('growing', $tupleassign3[1]) : $p['setattr'](self, 'growing', $tupleassign3[1]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rate', $tupleassign3[2]) : $p['setattr'](self, 'rate', $tupleassign3[2]); 
				$pyjs['track']['lineno']=210;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('segments', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['sprite']['RenderUpdates']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})()) : $p['setattr'](self, 'segments', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['sprite']['RenderUpdates']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})()); 
				$pyjs['track']['lineno']=211;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('segment_spares', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})()) : $p['setattr'](self, 'segment_spares', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})()); 
				$pyjs['track']['lineno']=212;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('serpent_body', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})()) : $p['setattr'](self, 'serpent_body', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})()); 
				$pyjs['track']['lineno']=213;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['grow']($p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'DIR')['__getitem__']($p['getattr'](self, 'direction')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
				$pyjs['track']['lineno']=214;
				$p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__is_instance__'] && typeof $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__'] == 'function' ? $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__']('image', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'images')['__getitem__']($p['__op_add']($add7=$p['getattr'](self, 'identity'),$add8='_head'))['__getitem__']($p['getattr'](self, 'direction'))) : $p['setattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'image', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'images')['__getitem__']($p['__op_add']($add7=$p['getattr'](self, 'identity'),$add8='_head'))['__getitem__']($p['getattr'](self, 'direction'))); 
				$pyjs['track']['lineno']=215;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scan_rect', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['sprite']['Sprite']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})()) : $p['setattr'](self, 'scan_rect', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['sprite']['Sprite']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})()); 
				$pyjs['track']['lineno']=216;
				$p['getattr'](self, 'scan_rect')['__is_instance__'] && typeof $p['getattr'](self, 'scan_rect')['__setattr__'] == 'function' ? $p['getattr'](self, 'scan_rect')['__setattr__']('rect', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['Rect']($constant_int_0, $constant_int_0, $constant_int_10, $constant_int_10);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})()) : $p['setattr']($p['getattr'](self, 'scan_rect'), 'rect', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['Rect']($constant_int_0, $constant_int_0, $constant_int_10, $constant_int_10);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})()); 
				$pyjs['track']['lineno']=217;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scan_detect', false) : $p['setattr'](self, 'scan_detect', false); 
				$pyjs['track']['lineno']=218;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pause', $constant_int_20) : $p['setattr'](self, 'pause', $constant_int_20); 
				$pyjs['track']['lineno']=219;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', true) : $p['setattr'](self, 'active', true); 
				$pyjs['track']['lineno']=220;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('alive', true) : $p['setattr'](self, 'alive', true); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['matrix'],['x'],['y'],['identity'],['speed'],['mode']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=222;
			$method = $pyjs__bind_method2('grow', function(x, y, direction, number) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					direction = arguments[3];
					number = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '322caac2bffbd11c1e02492e925ed2d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof number == 'undefined') number=arguments['callee']['__args__'][6][1];
				var num,segment,$sub9,$sub12,$iter7_type,$iter7_iter,$sub11,$sub10,$iter7_idx,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$iter7_nextval,$iter7_array,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'serpentduel', 'lineno':222};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=222;
				$pyjs['track']['lineno']=224;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range']($constant_int_0, (typeof ($mul1=number)==typeof ($mul2=$constant_int_10) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)), $constant_int_10);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					num = $iter7_nextval['$nextval'];
					$pyjs['track']['lineno']=225;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']($p['getattr'](self, 'segment_spares')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})()) {
						$pyjs['track']['lineno']=226;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['segment_spares']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return (typeof Segment == "undefined"?$m['Segment']:Segment)($p['getattr'](self, 'identity'), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
					}
					$pyjs['track']['lineno']=227;
					segment = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['segment_spares']['pop']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
					$pyjs['track']['lineno']=228;
					var $tupleassign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_sub']($sub9=x,$sub10=(typeof ($mul3=direction['__getitem__']($constant_int_0))==typeof ($mul4=num) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4))), $p['__op_sub']($sub11=y,$sub12=(typeof ($mul5=direction['__getitem__']($constant_int_1))==typeof ($mul6=num) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
					segment['__is_instance__'] && typeof segment['__setattr__'] == 'function' ? segment['__setattr__']('x', $tupleassign4[0]) : $p['setattr'](segment, 'x', $tupleassign4[0]); 
					segment['__is_instance__'] && typeof segment['__setattr__'] == 'function' ? segment['__setattr__']('y', $tupleassign4[1]) : $p['setattr'](segment, 'y', $tupleassign4[1]); 
					$pyjs['track']['lineno']=229;
					var $tupleassign5 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](segment, 'x'), $p['getattr'](segment, 'y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
					segment['__is_instance__'] && typeof segment['__setattr__'] == 'function' ? segment['__setattr__']('x_pre', $tupleassign5[0]) : $p['setattr'](segment, 'x_pre', $tupleassign5[0]); 
					segment['__is_instance__'] && typeof segment['__setattr__'] == 'function' ? segment['__setattr__']('y_pre', $tupleassign5[1]) : $p['setattr'](segment, 'y_pre', $tupleassign5[1]); 
					$pyjs['track']['lineno']=230;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return segment['rect']['__setattr__']('center', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](segment, 'x'), $p['getattr'](segment, 'y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
					$pyjs['track']['lineno']=231;
					segment['__is_instance__'] && typeof segment['__setattr__'] == 'function' ? segment['__setattr__']('direction', direction) : $p['setattr'](segment, 'direction', direction); 
					$pyjs['track']['lineno']=232;
					segment['__is_instance__'] && typeof segment['__setattr__'] == 'function' ? segment['__setattr__']('speed', $p['getattr'](self, 'speed')) : $p['setattr'](segment, 'speed', $p['getattr'](self, 'speed')); 
					$pyjs['track']['lineno']=233;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['segments']['add'](segment);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
					$pyjs['track']['lineno']=234;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'serpent_body')['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, 'serpent_body'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})(), segment);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='serpentduel';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['direction'],['number', $constant_int_5]]);
			$cls_definition['grow'] = $method;
			$pyjs['track']['lineno']=236;
			$method = $pyjs__bind_method2('control', function(direction) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					direction = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '322caac2bffbd11c1e02492e925ed2d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter8_idx,$iter8_array,$and5,$and6,dirn,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,$iter8_type;
				$pyjs['track']={'module':'serpentduel', 'lineno':236};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=236;
				$pyjs['track']['lineno']=238;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](['L', 'R']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](['U', 'D']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					dirn = $iter8_nextval['$nextval'];
					$pyjs['track']['lineno']=239;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and5=dirn['__contains__'](direction))?!dirn['__contains__']($p['getattr'](self, 'direction')):$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})()) {
						$pyjs['track']['lineno']=240;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('new_direction', direction) : $p['setattr'](self, 'new_direction', direction); 
						$pyjs['track']['lineno']=241;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('last_move', direction) : $p['setattr'](self, 'last_move', direction); 
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='serpentduel';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['direction']]);
			$cls_definition['control'] = $method;
			$pyjs['track']['lineno']=243;
			$method = $pyjs__bind_method2('move', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '322caac2bffbd11c1e02492e925ed2d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div1,$iter9_iter,i,$iter9_nextval,$iter9_idx,$sub14,$iter9_array,$sub13,$sub16,$add10,$sub15,$add12,$pyjs__trackstack_size_1,$div2,$add9,$iter9_type,$add11;
				$pyjs['track']={'module':'serpentduel', 'lineno':243};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=243;
				$pyjs['track']['lineno']=245;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](self, 'mode'), 'AI'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})()) {
					$pyjs['track']['lineno']=246;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['move_auto']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
				}
				$pyjs['track']['lineno']=247;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('step', $p['__op_add']($add9=$p['getattr'](self, 'step'),$add10=$constant_int_1)) : $p['setattr'](self, 'step', $p['__op_add']($add9=$p['getattr'](self, 'step'),$add10=$constant_int_1)); 
				$pyjs['track']['lineno']=248;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](((($p['cmp']($p['getattr'](self, 'step'), (typeof ($div1=$constant_int_10)==typeof ($div2=$p['getattr'](self, 'speed')) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_truediv']($div1,$div2))))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})()) {
					$pyjs['track']['lineno']=249;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['range']($p['__op_sub']($sub13=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, 'serpent_body'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})(),$sub14=$constant_int_1), $constant_int_0, (typeof ($usub4=$constant_int_1)=='number'?
						-$usub4:
						$p['op_usub']($usub4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
					$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
					while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
						i = $iter9_nextval['$nextval'];
						$pyjs['track']['lineno']=250;
						$p['getattr'](self, 'serpent_body')['__getitem__'](i)['__is_instance__'] && typeof $p['getattr'](self, 'serpent_body')['__getitem__'](i)['__setattr__'] == 'function' ? $p['getattr'](self, 'serpent_body')['__getitem__'](i)['__setattr__']('direction', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($p['__op_sub']($sub15=i,$sub16=$constant_int_1)), 'direction')) : $p['setattr']($p['getattr'](self, 'serpent_body')['__getitem__'](i), 'direction', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($p['__op_sub']($sub15=i,$sub16=$constant_int_1)), 'direction')); 
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='serpentduel';
					$pyjs['track']['lineno']=251;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, 'new_direction'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})()) {
						$pyjs['track']['lineno']=252;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('direction', $p['getattr'](self, 'new_direction')) : $p['setattr'](self, 'direction', $p['getattr'](self, 'new_direction')); 
						$pyjs['track']['lineno']=253;
						$p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__is_instance__'] && typeof $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__'] == 'function' ? $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__']('direction', $p['getattr'](self, 'DIR')['__getitem__']($p['getattr'](self, 'direction'))) : $p['setattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'direction', $p['getattr'](self, 'DIR')['__getitem__']($p['getattr'](self, 'direction'))); 
						$pyjs['track']['lineno']=254;
						$p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__is_instance__'] && typeof $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__'] == 'function' ? $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__']('image', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'images')['__getitem__']($p['__op_add']($add11=$p['getattr'](self, 'identity'),$add12='_head'))['__getitem__']($p['getattr'](self, 'direction'))) : $p['setattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'image', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'images')['__getitem__']($p['__op_add']($add11=$p['getattr'](self, 'identity'),$add12='_head'))['__getitem__']($p['getattr'](self, 'direction'))); 
						$pyjs['track']['lineno']=255;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('new_direction', null) : $p['setattr'](self, 'new_direction', null); 
					}
					$pyjs['track']['lineno']=256;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('step', $constant_int_0) : $p['setattr'](self, 'step', $constant_int_0); 
				}
				$pyjs['track']['lineno']=257;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['segments']['update']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['move'] = $method;
			$pyjs['track']['lineno']=259;
			$method = $pyjs__bind_method2('move_auto', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '322caac2bffbd11c1e02492e925ed2d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter14_iter,direct,$iter13_idx,$iter14_array,$pyjs_try_err,treat,$iter13_type,$and8,$and9,direction,$iter14_type,new_direction,$iter12_array,collide,$and7,$and12,$and13,$and10,$and11,$and16,$and14,$and15,$iter14_idx,$iter14_nextval,$iter13_nextval,$iter13_iter,$iter12_type,$iter13_array,$iter12_iter,$pyjs__trackstack_size_1,y,x,$iter12_idx,$iter12_nextval;
				$pyjs['track']={'module':'serpentduel', 'lineno':259};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=259;
				$pyjs['track']['lineno']=261;
				collide = function(direction) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $sub20,$iter10_nextval,serpent,$add13,$sub19,$iter10_iter,collide,$iter10_idx,$sub18,$sub17,$floordiv12,$floordiv11,$floordiv10,$add14,$add15,$add16,$mul9,$mul8,$mul7,$mul10,$iter10_array,$pyjs__trackstack_size_1,$iter10_type,$floordiv9;
					$pyjs['track']={'module':'serpentduel','lineno':261};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='serpentduel';
					$pyjs['track']['lineno']=261;
					$pyjs['track']['lineno']=262;
					direction = $p['getattr'](self, 'DIR')['__getitem__'](direction);
					$pyjs['track']['lineno']=263;
					$p['getattr']($p['getattr'](self, 'scan_rect'), 'rect')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'scan_rect'), 'rect')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'scan_rect'), 'rect')['__setattr__']('x', $p['__op_sub']($sub17=$p['__op_add']($add13=$p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'x'),$add14=(typeof ($mul7=direction['__getitem__']($constant_int_0))==typeof ($mul8=$constant_int_10) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8))),$sub18=(typeof ($floordiv9=$p['getattr']($p['getattr']($p['getattr'](self, 'scan_rect'), 'rect'), 'width'))==typeof ($floordiv10=$constant_int_2) && typeof $floordiv9=='number' && $floordiv10 !== 0?
						Math['floor']($floordiv9/$floordiv10):
						$p['op_floordiv']($floordiv9,$floordiv10)))) : $p['setattr']($p['getattr']($p['getattr'](self, 'scan_rect'), 'rect'), 'x', $p['__op_sub']($sub17=$p['__op_add']($add13=$p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'x'),$add14=(typeof ($mul7=direction['__getitem__']($constant_int_0))==typeof ($mul8=$constant_int_10) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8))),$sub18=(typeof ($floordiv9=$p['getattr']($p['getattr']($p['getattr'](self, 'scan_rect'), 'rect'), 'width'))==typeof ($floordiv10=$constant_int_2) && typeof $floordiv9=='number' && $floordiv10 !== 0?
						Math['floor']($floordiv9/$floordiv10):
						$p['op_floordiv']($floordiv9,$floordiv10)))); 
					$pyjs['track']['lineno']=264;
					$p['getattr']($p['getattr'](self, 'scan_rect'), 'rect')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'scan_rect'), 'rect')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'scan_rect'), 'rect')['__setattr__']('y', $p['__op_sub']($sub19=$p['__op_add']($add15=$p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'y'),$add16=(typeof ($mul9=direction['__getitem__']($constant_int_1))==typeof ($mul10=$constant_int_10) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10))),$sub20=(typeof ($floordiv11=$p['getattr']($p['getattr']($p['getattr'](self, 'scan_rect'), 'rect'), 'height'))==typeof ($floordiv12=$constant_int_2) && typeof $floordiv11=='number' && $floordiv12 !== 0?
						Math['floor']($floordiv11/$floordiv12):
						$p['op_floordiv']($floordiv11,$floordiv12)))) : $p['setattr']($p['getattr']($p['getattr'](self, 'scan_rect'), 'rect'), 'y', $p['__op_sub']($sub19=$p['__op_add']($add15=$p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'y'),$add16=(typeof ($mul9=direction['__getitem__']($constant_int_1))==typeof ($mul10=$constant_int_10) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10))),$sub20=(typeof ($floordiv11=$p['getattr']($p['getattr']($p['getattr'](self, 'scan_rect'), 'rect'), 'height'))==typeof ($floordiv12=$constant_int_2) && typeof $floordiv11=='number' && $floordiv12 !== 0?
						Math['floor']($floordiv11/$floordiv12):
						$p['op_floordiv']($floordiv11,$floordiv12)))); 
					$pyjs['track']['lineno']=265;
					collide = false;
					$pyjs['track']['lineno']=266;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($p['getattr'](self, 'matrix'), 'serpent');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
					$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
					while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
						serpent = $iter10_nextval['$nextval'];
						$pyjs['track']['lineno']=267;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})()) {
							$pyjs['track']['lineno']=268;
							continue;
						}
						$pyjs['track']['lineno']=269;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['pygame']['sprite']['spritecollideany']($p['getattr'](self, 'scan_rect'), $p['getattr']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent), 'segments'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()) {
							$pyjs['track']['lineno']=270;
							collide = true;
							$pyjs['track']['lineno']=271;
							$pyjs['track']['lineno']=271;
							var $pyjs__ret = collide;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='serpentduel';
					$pyjs['track']['lineno']=272;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['scan_rect']['rect']['collidelist']($p['getattr']($p['getattr'](self, 'matrix'), 'edges'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})(), (typeof ($usub5=$constant_int_1)=='number'?
						-$usub5:
						$p['op_usub']($usub5))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})()) {
						$pyjs['track']['lineno']=273;
						collide = true;
						$pyjs['track']['lineno']=274;
						$pyjs['track']['lineno']=274;
						var $pyjs__ret = collide;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					$pyjs['track']['lineno']=275;
					$pyjs['track']['lineno']=275;
					var $pyjs__ret = collide;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				collide['__name__'] = 'collide';

				collide['__bind_type__'] = 0;
				collide['__args__'] = [null,null,['direction']];
				$pyjs['track']['lineno']=276;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=277;
						treat = function(){
							var $iter11_iter,$iter11_type,$collcomp1,$pyjs__trackstack_size_2,treat,$iter11_array,$iter11_nextval,$iter11_idx;
	$collcomp1 = $p['list']();
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr']($p['getattr'](self, 'matrix'), 'treat');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
						$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
						while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
							treat = $iter11_nextval['$nextval'];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp1['append'](treat);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='serpentduel';

	return $collcomp1;}()['__getitem__']($constant_int_0);
					} finally { $pyjs['in_try_except'] -= 1; }
				} catch($pyjs_try_err) {
					$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
					$pyjs['__active_exception_stack__'] = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='serpentduel';
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						$pyjs['track']['lineno']=279;
						treat = null;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=280;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and7=treat)?!$p['bool']($p['getattr'](self, 'new_direction')):$and7));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})()) {
					$pyjs['track']['lineno']=281;
					var $tupleassign6 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'x'), $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
					x = $tupleassign6[0];
					y = $tupleassign6[1];
					$pyjs['track']['lineno']=282;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and9=($p['cmp'](x, $p['getattr'](treat, 'x')) < 1))?($p['cmp'](y, $p['getattr'](treat, 'y')) < 1):$and9));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})()) {
						$pyjs['track']['lineno']=283;
						direct = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple'](['R', 'D']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and11=($p['cmp'](x, $p['getattr'](treat, 'x')) < 1))?((($p['cmp'](y, $p['getattr'](treat, 'y')))|1) == 1):$and11));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})()) {
						$pyjs['track']['lineno']=285;
						direct = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple'](['R', 'U']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and13=((($p['cmp'](x, $p['getattr'](treat, 'x')))|1) == 1))?($p['cmp'](y, $p['getattr'](treat, 'y')) < 1):$and13));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})()) {
						$pyjs['track']['lineno']=287;
						direct = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple'](['L', 'D']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and15=((($p['cmp'](x, $p['getattr'](treat, 'x')))|1) == 1))?((($p['cmp'](y, $p['getattr'](treat, 'y')))|1) == 1):$and15));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})()) {
						$pyjs['track']['lineno']=289;
						direct = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple'](['L', 'U']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
					}
					$pyjs['track']['lineno']=290;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!direct['__contains__']($p['getattr'](self, 'direction')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})()) {
						$pyjs['track']['lineno']=291;
						new_direction = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})();
						$pyjs['track']['lineno']=292;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return direct;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
						$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
						while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
							direction = $iter12_nextval['$nextval'];
							$pyjs['track']['lineno']=293;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return collide(direction);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})()) {
								$pyjs['track']['lineno']=294;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return new_direction['append'](direction);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})();
							}
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='serpentduel';
						$pyjs['track']['lineno']=295;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](new_direction);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})()) {
							$pyjs['track']['lineno']=296;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['control']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['random']['choice'](new_direction);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
						}
					}
				}
				$pyjs['track']['lineno']=297;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return collide($p['getattr'](self, 'direction'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})()) {
					$pyjs['track']['lineno']=298;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('new_direction', null) : $p['setattr'](self, 'new_direction', null); 
					$pyjs['track']['lineno']=299;
					new_direction = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
					$pyjs['track']['lineno']=300;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple'](['U', 'D']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})()['__contains__']($p['getattr'](self, 'direction')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})()) {
						$pyjs['track']['lineno']=301;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple'](['L', 'R']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
						$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
						while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
							direction = $iter13_nextval['$nextval'];
							$pyjs['track']['lineno']=302;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return collide(direction);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})()) {
								$pyjs['track']['lineno']=303;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return new_direction['append'](direction);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
							}
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='serpentduel';
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple'](['L', 'R']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})()['__contains__']($p['getattr'](self, 'direction')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})()) {
						$pyjs['track']['lineno']=305;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter14_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple'](['U', 'D']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
						$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
						while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
							direction = $iter14_nextval['$nextval'];
							$pyjs['track']['lineno']=306;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return collide(direction);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})()) {
								$pyjs['track']['lineno']=307;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return new_direction['append'](direction);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
							}
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='serpentduel';
					}
					$pyjs['track']['lineno']=308;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](new_direction);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})()) {
						$pyjs['track']['lineno']=309;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['control']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['random']['choice'](new_direction);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
					}
					$pyjs['track']['lineno']=310;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scan_detect', true) : $p['setattr'](self, 'scan_detect', true); 
				}
				else {
					$pyjs['track']['lineno']=312;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scan_detect', false) : $p['setattr'](self, 'scan_detect', false); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['move_auto'] = $method;
			$pyjs['track']['lineno']=314;
			$method = $pyjs__bind_method2('growth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '322caac2bffbd11c1e02492e925ed2d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub22,$sub23,$sub21,$sub26,$sub27,$sub24,$sub25,$sub28,$sub29,$add29,$add28,$add21,$add20,$add22,$add25,$add24,$add27,$add26,tail,treat,$sub31,$sub30,$sub32,$add17,$and17,$div3,$and18,$add18,$add19,$div4,$mul14,$mul13,$mul12,$mul11,$add30,points,$add23;
				$pyjs['track']={'module':'serpentduel', 'lineno':314};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=314;
				$pyjs['track']['lineno']=316;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['sprite']['spritecollide']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), $p['getattr']($p['getattr'](self, 'matrix'), 'treat'), false, $p['getattr']($p['getattr']($m['pygame'], 'sprite'), 'collide_mask'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})()) {
					$pyjs['track']['lineno']=317;
					points = $constant_int_0;
					$pyjs['track']['lineno']=318;
					treat = function(){
						var $iter15_iter,$iter15_array,$collcomp2,$iter15_idx,treat,$iter15_nextval,$iter15_type,$pyjs__trackstack_size_1;
	$collcomp2 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter15_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($p['getattr'](self, 'matrix'), 'treat');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
					$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
					while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
						treat = $iter15_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp2['append'](treat);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='serpentduel';

	return $collcomp2;}()['__getitem__']($constant_int_0);
					$pyjs['track']['lineno']=319;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](treat, 'identity'), 'Food'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})()) {
						$pyjs['track']['lineno']=320;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](((($p['cmp']($p['getattr'](self, 'growing'), $constant_int_0))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})()) {
							$pyjs['track']['lineno']=321;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('growing', $p['__op_add']($add17=$p['getattr'](self, 'growing'),$add18=$constant_int_5)) : $p['setattr'](self, 'growing', $p['__op_add']($add17=$p['getattr'](self, 'growing'),$add18=$constant_int_5)); 
						}
						else {
							$pyjs['track']['lineno']=323;
							points = $p['__op_add']($add19=points,$add20=$constant_int_5);
						}
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](treat, 'identity'), 'Bonus'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})()) {
						$pyjs['track']['lineno']=325;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($and17=($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](self, 'serpent_body'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})(), $constant_int_5) == 1))?((($p['cmp']($p['getattr'](self, 'growing'), $constant_int_0))|1) == 1):$and17));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})()) {
							$pyjs['track']['lineno']=326;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('growing', (typeof ($usub6=$p['__op_sub']($sub21=(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['len']($p['getattr'](self, 'serpent_body'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})(),$sub22=$constant_int_5))=='number'?
								-$usub6:
								$p['op_usub']($usub6))) : $p['setattr'](self, 'growing', (typeof ($usub6=$p['__op_sub']($sub21=(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['len']($p['getattr'](self, 'serpent_body'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})(),$sub22=$constant_int_5))=='number'?
								-$usub6:
								$p['op_usub']($usub6))); 
							$pyjs['track']['lineno']=327;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rate', $constant_int_0) : $p['setattr'](self, 'rate', $constant_int_0); 
						}
						$pyjs['track']['lineno']=328;
						points = $p['__op_add']($add21=points,$add22=$constant_int_10);
					}
					$pyjs['track']['lineno']=329;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](points);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})()) {
						$pyjs['track']['lineno']=330;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['set_points'](points);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})();
					}
					$pyjs['track']['lineno']=331;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['matrix']['treat']['empty']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})();
				}
				$pyjs['track']['lineno']=332;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'growing'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})()) {
					$pyjs['track']['lineno']=333;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rate', $p['__op_add']($add23=$p['getattr'](self, 'rate'),$add24=$constant_int_1)) : $p['setattr'](self, 'rate', $p['__op_add']($add23=$p['getattr'](self, 'rate'),$add24=$constant_int_1)); 
					$pyjs['track']['lineno']=334;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp']($p['getattr'](self, 'rate'), (typeof ($div3=$constant_int_10)==typeof ($div4=$p['getattr'](self, 'speed')) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_truediv']($div3,$div4))) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})()) {
						$pyjs['track']['lineno']=335;
						points = $constant_int_0;
						$pyjs['track']['lineno']=336;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['cmp']($p['getattr'](self, 'growing'), $constant_int_0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})()) {
							$pyjs['track']['lineno']=337;
							tail = $p['getattr'](self, 'serpent_body')['__getitem__']($p['__op_sub']($sub23=(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['len']($p['getattr'](self, 'serpent_body'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})(),$sub24=$constant_int_1));
							$pyjs['track']['lineno']=338;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $pyjs_kwargs_call(self, 'grow', null, null, [{'number':$constant_int_1}, $p['__op_sub']($sub25=$p['getattr'](tail, 'x'),$sub26=(typeof ($mul11=$p['getattr'](tail, 'direction')['__getitem__']($constant_int_0))==typeof ($mul12=$constant_int_10) && typeof $mul11=='number'?
								$mul11*$mul12:
								$p['op_mul']($mul11,$mul12))), $p['__op_sub']($sub27=$p['getattr'](tail, 'y'),$sub28=(typeof ($mul13=$p['getattr'](tail, 'direction')['__getitem__']($constant_int_1))==typeof ($mul14=$constant_int_10) && typeof $mul13=='number'?
								$mul13*$mul14:
								$p['op_mul']($mul13,$mul14))), $p['getattr'](tail, 'direction')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})();
							$pyjs['track']['lineno']=339;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('growing', $p['__op_sub']($sub29=$p['getattr'](self, 'growing'),$sub30=$constant_int_1)) : $p['setattr'](self, 'growing', $p['__op_sub']($sub29=$p['getattr'](self, 'growing'),$sub30=$constant_int_1)); 
							$pyjs['track']['lineno']=340;
							points = $p['__op_add']($add25=points,$add26=$constant_int_1);
						}
						else {
							$pyjs['track']['lineno']=342;
							tail = $p['__op_sub']($sub31=(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['len']($p['getattr'](self, 'serpent_body'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})(),$sub32=$constant_int_1);
							$pyjs['track']['lineno']=343;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['segment_spares']['append']($p['getattr'](self, 'serpent_body')['__getitem__'](tail));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})();
							$pyjs['track']['lineno']=344;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['segments']['remove']($p['getattr'](self, 'serpent_body')['__getitem__'](tail));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})();
							$pyjs['track']['lineno']=345;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'serpent_body')['__delitem__'](tail);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})();
							$pyjs['track']['lineno']=346;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('growing', $p['__op_add']($add27=$p['getattr'](self, 'growing'),$add28=$constant_int_1)) : $p['setattr'](self, 'growing', $p['__op_add']($add27=$p['getattr'](self, 'growing'),$add28=$constant_int_1)); 
							$pyjs['track']['lineno']=347;
							points = $p['__op_add']($add29=points,$add30=$constant_int_1);
						}
						$pyjs['track']['lineno']=348;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rate', $constant_int_0) : $p['setattr'](self, 'rate', $constant_int_0); 
						$pyjs['track']['lineno']=349;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](points);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})()) {
							$pyjs['track']['lineno']=350;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['set_points'](points);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})();
						}
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['growth'] = $method;
			$pyjs['track']['lineno']=352;
			$method = $pyjs__bind_method2('set_points', function(points) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					points = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '322caac2bffbd11c1e02492e925ed2d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $augexpr1,$and20,$add32,$add31,$augsub1,$and22,$and21,$and19;
				$pyjs['track']={'module':'serpentduel', 'lineno':352};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=352;
				$pyjs['track']['lineno']=354;
				var $augsub1 = $p['getattr'](self, 'identity');
				var $augexpr1 = $p['getattr']($p['getattr'](self, 'matrix'), 'points');
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $augexpr1['__setitem__']($augsub1, $p['__op_add']($add31=$augexpr1['__getitem__']($augsub1),$add32=points));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})();
				$pyjs['track']['lineno']=355;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and19=$p['getattr']($p['getattr'](self, 'matrix'), 'match'))?!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'auto')):$and19));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})()) {
					$pyjs['track']['lineno']=356;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and21=((($p['cmp']($p['getattr']($p['getattr'](self, 'matrix'), 'points')['__getitem__']($p['getattr'](self, 'identity')), $p['getattr']($p['getattr'](self, 'matrix'), 'match')))|1) == 1))?!$p['bool']($p['getattr'](self, 'growing')):$and21));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})()) {
						$pyjs['track']['lineno']=357;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['matrix']['set_active'](false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})();
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['points']]);
			$cls_definition['set_points'] = $method;
			$pyjs['track']['lineno']=359;
			$method = $pyjs__bind_method2('collision', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '322caac2bffbd11c1e02492e925ed2d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter16_array,$iter17_nextval,$iter17_iter,$iter17_type,serpent,$iter16_type,segment,$iter16_idx,$iter17_array,$iter17_idx,$pyjs__trackstack_size_1,$and23,$iter16_nextval,$pyjs__trackstack_size_2,$iter16_iter,$and24;
				$pyjs['track']={'module':'serpentduel', 'lineno':359};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=359;
				$pyjs['track']['lineno']=361;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and23=$p['op_eq']($p['getattr'](self, 'mode'), 'AI'))?!$p['bool']($p['getattr'](self, 'scan_detect')):$and23));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})()) {
					$pyjs['track']['lineno']=362;
					$pyjs['track']['lineno']=362;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=363;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter16_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'matrix'), 'serpent');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})();
				$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
				while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
					serpent = $iter16_nextval['$nextval'];
					$pyjs['track']['lineno']=364;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})()) {
						$pyjs['track']['lineno']=365;
						continue;
					}
					$pyjs['track']['lineno']=366;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter17_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['pygame']['sprite']['spritecollide']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), $p['getattr']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent), 'segments'), false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})();
					$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
					while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
						segment = $iter17_nextval['$nextval'];
						$pyjs['track']['lineno']=367;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_1)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})()['__contains__'](segment));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})()) {
							$pyjs['track']['lineno']=368;
							$pyjs['track']['lineno']=368;
							var $pyjs__ret = true;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='serpentduel';
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=369;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['rect']['collidelist']($p['getattr']($p['getattr'](self, 'matrix'), 'edges'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})(), (typeof ($usub7=$constant_int_1)=='number'?
					-$usub7:
					$p['op_usub']($usub7))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})()) {
					$pyjs['track']['lineno']=370;
					$pyjs['track']['lineno']=370;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=371;
				$pyjs['track']['lineno']=371;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['collision'] = $method;
			$pyjs['track']['lineno']=373;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '322caac2bffbd11c1e02492e925ed2d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add36,$sub33,$or1,$sub34,$or2,$add33,$floordiv14,$floordiv13,$add34,$add35,penalty,$sub35,$sub36,$and26,$and25;
				$pyjs['track']={'module':'serpentduel', 'lineno':373};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=373;
				$pyjs['track']['lineno']=375;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'active'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})()) {
					$pyjs['track']['lineno']=376;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['move']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})();
					$pyjs['track']['lineno']=377;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['growth']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})();
					$pyjs['track']['lineno']=378;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', !$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['collision']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})())) : $p['setattr'](self, 'active', !$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['collision']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})())); 
					$pyjs['track']['lineno']=379;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']($p['getattr'](self, 'active')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})()) {
						$pyjs['track']['lineno']=380;
						$p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__is_instance__'] && typeof $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__'] == 'function' ? $p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0)['__setattr__']('image', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'images')['__getitem__']($p['__op_add']($add33=$p['getattr'](self, 'identity'),$add34='_ko'))['__getitem__']($p['getattr'](self, 'direction'))) : $p['setattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'image', $p['getattr']($p['getattr'](self, 'serpent_body')['__getitem__']($constant_int_0), 'images')['__getitem__']($p['__op_add']($add33=$p['getattr'](self, 'identity'),$add34='_ko'))['__getitem__']($p['getattr'](self, 'direction'))); 
						$pyjs['track']['lineno']=381;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($or1=$p['getattr']($p['getattr'](self, 'matrix'), 'match'))?$or1:$p['getattr']($p['getattr'](self, 'matrix'), 'auto')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})()) {
							$pyjs['track']['lineno']=382;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['len']($p['getattr'](self, 'serpent_body'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})(), $constant_int_5) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})()) {
								$pyjs['track']['lineno']=383;
								penalty = $p['__op_add']($add35=$constant_int_5,$add36=(typeof ($floordiv13=(function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['len']($p['getattr'](self, 'serpent_body'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})())==typeof ($floordiv14=$constant_int_5) && typeof $floordiv13=='number' && $floordiv14 !== 0?
									Math['floor']($floordiv13/$floordiv14):
									$p['op_floordiv']($floordiv13,$floordiv14)));
								$pyjs['track']['lineno']=384;
								if ((function(){try{try{$pyjs['in_try_except'] += 1;
									return $p['bool'](($p['cmp']($p['__op_sub']($sub33=$p['getattr']($p['getattr'](self, 'matrix'), 'points')['__getitem__']($p['getattr'](self, 'identity')),$sub34=penalty), $constant_int_0) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})()) {
									$pyjs['track']['lineno']=385;
									penalty = $p['getattr']($p['getattr'](self, 'matrix'), 'points')['__getitem__']($p['getattr'](self, 'identity'));
								}
								$pyjs['track']['lineno']=386;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return self['set_points']((typeof ($usub8=penalty)=='number'?
									-$usub8:
									$p['op_usub']($usub8)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})();
							}
						}
					}
				}
				else {
					$pyjs['track']['lineno']=388;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and25=!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'match')))?!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'auto')):$and25));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})()) {
						$pyjs['track']['lineno']=389;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('alive', false) : $p['setattr'](self, 'alive', false); 
					}
					else {
						$pyjs['track']['lineno']=391;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pause', $p['__op_sub']($sub35=$p['getattr'](self, 'pause'),$sub36=$constant_int_1)) : $p['setattr'](self, 'pause', $p['__op_sub']($sub35=$p['getattr'](self, 'pause'),$sub36=$constant_int_1)); 
						$pyjs['track']['lineno']=392;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['bool']($p['getattr'](self, 'pause')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})()) {
							$pyjs['track']['lineno']=393;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['segment_spares']['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
							return self['segments']['sprites']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})();
							$pyjs['track']['lineno']=394;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['segments']['empty']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})();
							$pyjs['track']['lineno']=395;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('alive', false) : $p['setattr'](self, 'alive', false); 
						}
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=192;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Serpent', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=398;
		$m['Segment'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'serpentduel';
			$cls_definition['__md5__'] = '31f1ceb7c5d7e2bfd037b0b34920f82e';
			$pyjs['track']['lineno']=402;
			$cls_definition['images'] = null;
			$pyjs['track']['lineno']=403;
			$cls_definition['mask'] = null;
			$pyjs['track']['lineno']=404;
			$method = $pyjs__bind_method2('__init__', function(serpent, position, direction, speed) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					serpent = arguments[1];
					position = arguments[2];
					direction = arguments[3];
					speed = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '31f1ceb7c5d7e2bfd037b0b34920f82e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof direction == 'undefined') direction=arguments['callee']['__args__'][5][1];
				if (typeof speed == 'undefined') speed=arguments['callee']['__args__'][6][1];
				var $add42,species,$add44,$add43,$iter18_idx,$add41,$add40,segment_head,$iter19_iter,$iter19_nextval,$iter18_nextval,$iter18_type,$iter18_iter,$iter19_array,$iter19_idx,dirn,$add38,$add39,segment_ko,$iter18_array,$add37,$iter19_type,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,deg;
				$pyjs['track']={'module':'serpentduel', 'lineno':404};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=404;
				$pyjs['track']['lineno']=405;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['sprite']['Sprite']['__init__'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})();
				$pyjs['track']['lineno']=406;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['Serpent1', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_255]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})()], ['Serpent2', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_255, $constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})()) : $p['setattr'](self, 'type', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['Serpent1', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_255]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})()], ['Serpent2', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_255, $constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})()); 
				$pyjs['track']['lineno']=407;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr']($m['Segment'], 'images')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})()) {
					$pyjs['track']['lineno']=408;
					$m['Segment']['__is_instance__'] && typeof $m['Segment']['__setattr__'] == 'function' ? $m['Segment']['__setattr__']('images', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})()) : $p['setattr']($m['Segment'], 'images', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})()); 
					$pyjs['track']['lineno']=409;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter18_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple'](['Serpent1', 'Serpent2']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})();
					$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
					while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
						species = $iter18_nextval['$nextval'];
						$pyjs['track']['lineno']=410;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr']($m['Segment'], 'images')['__setitem__'](species, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['pygame']['Surface']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$constant_int_10, $constant_int_10]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})();
						$pyjs['track']['lineno']=411;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['pygame']['draw']['circle']($p['getattr']($m['Segment'], 'images')['__getitem__'](species), $p['getattr'](self, 'type')['__getitem__'](species), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$constant_int_5, $constant_int_5]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})(), $constant_int_6, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})();
						$pyjs['track']['lineno']=412;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr']($m['Segment'], 'images')['__getitem__'](species)['set_colorkey']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})();
						$pyjs['track']['lineno']=413;
						segment_head = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr']($m['Segment'], 'images')['__getitem__'](species)['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})();
						$pyjs['track']['lineno']=414;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['pygame']['draw']['line'](segment_head, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$constant_int_0, $constant_int_255, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$constant_int_2, $constant_int_2]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$constant_int_0, $constant_int_5]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})(), $constant_int_3);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})();
						$pyjs['track']['lineno']=415;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['pygame']['draw']['line'](segment_head, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$constant_int_0, $constant_int_255, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$constant_int_7, $constant_int_2]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$constant_int_9, $constant_int_5]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})(), $constant_int_3);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})();
						$pyjs['track']['lineno']=416;
						segment_ko = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr']($m['Segment'], 'images')['__getitem__'](species)['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})();
						$pyjs['track']['lineno']=417;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['pygame']['draw']['circle'](segment_ko, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$constant_int_0, $constant_int_255, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$constant_int_2, $constant_int_3]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})(), $constant_int_2, $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})();
						$pyjs['track']['lineno']=418;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['pygame']['draw']['circle'](segment_ko, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$constant_int_0, $constant_int_255, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$constant_int_8, $constant_int_3]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})(), $constant_int_2, $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})();
						$pyjs['track']['lineno']=419;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr']($m['Segment'], 'images')['__setitem__']($p['__op_add']($add37=species,$add38='_head'), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})();
						$pyjs['track']['lineno']=420;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr']($m['Segment'], 'images')['__setitem__']($p['__op_add']($add39=species,$add40='_ko'), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_284_err){if (!$p['isinstance']($pyjs_dbg_284_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_284_err);}throw $pyjs_dbg_284_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_285_err){if (!$p['isinstance']($pyjs_dbg_285_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_285_err);}throw $pyjs_dbg_285_err;
}})();
						$pyjs['track']['lineno']=421;
						deg = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['dict']([['U', $constant_int_0], ['D', $constant_int_180], ['L', $constant_int_90], ['R', (typeof ($usub9=$constant_int_90)=='number'?
							-$usub9:
							$p['op_usub']($usub9))]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_286_err){if (!$p['isinstance']($pyjs_dbg_286_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_286_err);}throw $pyjs_dbg_286_err;
}})();
						$pyjs['track']['lineno']=422;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter19_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple'](['U', 'D', 'L', 'R']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_287_err){if (!$p['isinstance']($pyjs_dbg_287_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_287_err);}throw $pyjs_dbg_287_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_288_err){if (!$p['isinstance']($pyjs_dbg_288_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_288_err);}throw $pyjs_dbg_288_err;
}})();
						$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
						while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
							dirn = $iter19_nextval['$nextval'];
							$pyjs['track']['lineno']=423;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr']($m['Segment'], 'images')['__getitem__']($p['__op_add']($add41=species,$add42='_head'))['__setitem__'](dirn, (function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['pygame']['transform']['rotate'](segment_head, deg['__getitem__'](dirn));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_289_err){if (!$p['isinstance']($pyjs_dbg_289_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_289_err);}throw $pyjs_dbg_289_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_290_err){if (!$p['isinstance']($pyjs_dbg_290_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_290_err);}throw $pyjs_dbg_290_err;
}})();
							$pyjs['track']['lineno']=424;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr']($m['Segment'], 'images')['__getitem__']($p['__op_add']($add43=species,$add44='_ko'))['__setitem__'](dirn, (function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['pygame']['transform']['rotate'](segment_ko, deg['__getitem__'](dirn));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_291_err){if (!$p['isinstance']($pyjs_dbg_291_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_291_err);}throw $pyjs_dbg_291_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_292_err){if (!$p['isinstance']($pyjs_dbg_292_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_292_err);}throw $pyjs_dbg_292_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='serpentduel';
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='serpentduel';
					$pyjs['track']['lineno']=425;
					$m['Segment']['__is_instance__'] && typeof $m['Segment']['__setattr__'] == 'function' ? $m['Segment']['__setattr__']('mask', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['pygame']['mask']['from_surface']($p['getattr']($m['Segment'], 'images')['__getitem__']('Serpent1'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})()) : $p['setattr']($m['Segment'], 'mask', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['pygame']['mask']['from_surface']($p['getattr']($m['Segment'], 'images')['__getitem__']('Serpent1'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})()); 
				}
				$pyjs['track']['lineno']=426;
				var $tupleassign7 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack'](position, 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_294_err){if (!$p['isinstance']($pyjs_dbg_294_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_294_err);}throw $pyjs_dbg_294_err;
}})();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', $tupleassign7[0]) : $p['setattr'](self, 'x', $tupleassign7[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', $tupleassign7[1]) : $p['setattr'](self, 'y', $tupleassign7[1]); 
				$pyjs['track']['lineno']=427;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('direction', direction) : $p['setattr'](self, 'direction', direction); 
				$pyjs['track']['lineno']=428;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('speed', speed) : $p['setattr'](self, 'speed', speed); 
				$pyjs['track']['lineno']=429;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('image', $p['getattr']($m['Segment'], 'images')['__getitem__'](serpent)) : $p['setattr'](self, 'image', $p['getattr']($m['Segment'], 'images')['__getitem__'](serpent)); 
				$pyjs['track']['lineno']=430;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rect', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(self['image'], 'get_rect', null, null, [{'center':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})()}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})()) : $p['setattr'](self, 'rect', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(self['image'], 'get_rect', null, null, [{'center':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})()}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})()); 
				$pyjs['track']['lineno']=431;
				var $tupleassign8 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_297_err){if (!$p['isinstance']($pyjs_dbg_297_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_297_err);}throw $pyjs_dbg_297_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_298_err){if (!$p['isinstance']($pyjs_dbg_298_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_298_err);}throw $pyjs_dbg_298_err;
}})();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x_pre', $tupleassign8[0]) : $p['setattr'](self, 'x_pre', $tupleassign8[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y_pre', $tupleassign8[1]) : $p['setattr'](self, 'y_pre', $tupleassign8[1]); 
				$pyjs['track']['lineno']=432;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mask', $p['getattr']($m['Segment'], 'mask')) : $p['setattr'](self, 'mask', $p['getattr']($m['Segment'], 'mask')); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['serpent'],['position'],['direction', null],['speed', $constant_int_0]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=434;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '31f1ceb7c5d7e2bfd037b0b34920f82e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul17,$mul16,$mul15,$sub37,$add48,$add47,$add46,$mul18,$sub39,$sub38,$sub40,$add45;
				$pyjs['track']={'module':'serpentduel', 'lineno':434};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=434;
				$pyjs['track']['lineno']=436;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', $p['__op_add']($add45=$p['getattr'](self, 'x'),$add46=(typeof ($mul15=$p['getattr'](self, 'direction')['__getitem__']($constant_int_0))==typeof ($mul16=$p['getattr'](self, 'speed')) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)))) : $p['setattr'](self, 'x', $p['__op_add']($add45=$p['getattr'](self, 'x'),$add46=(typeof ($mul15=$p['getattr'](self, 'direction')['__getitem__']($constant_int_0))==typeof ($mul16=$p['getattr'](self, 'speed')) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)))); 
				$pyjs['track']['lineno']=437;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', $p['__op_add']($add47=$p['getattr'](self, 'y'),$add48=(typeof ($mul17=$p['getattr'](self, 'direction')['__getitem__']($constant_int_1))==typeof ($mul18=$p['getattr'](self, 'speed')) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)))) : $p['setattr'](self, 'y', $p['__op_add']($add47=$p['getattr'](self, 'y'),$add48=(typeof ($mul17=$p['getattr'](self, 'direction')['__getitem__']($constant_int_1))==typeof ($mul18=$p['getattr'](self, 'speed')) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)))); 
				$pyjs['track']['lineno']=438;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['rect']['move_ip']($p['__op_sub']($sub37=$p['getattr'](self, 'x'),$sub38=$p['getattr'](self, 'x_pre')), $p['__op_sub']($sub39=$p['getattr'](self, 'y'),$sub40=$p['getattr'](self, 'y_pre')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_299_err){if (!$p['isinstance']($pyjs_dbg_299_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_299_err);}throw $pyjs_dbg_299_err;
}})();
				$pyjs['track']['lineno']=439;
				var $tupleassign9 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_300_err){if (!$p['isinstance']($pyjs_dbg_300_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_300_err);}throw $pyjs_dbg_300_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_301_err){if (!$p['isinstance']($pyjs_dbg_301_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_301_err);}throw $pyjs_dbg_301_err;
}})();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x_pre', $tupleassign9[0]) : $p['setattr'](self, 'x_pre', $tupleassign9[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y_pre', $tupleassign9[1]) : $p['setattr'](self, 'y_pre', $tupleassign9[1]); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=398;
			var $bases = new Array($p['getattr']($p['getattr']($m['pygame'], 'sprite'), 'Sprite'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Segment', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=442;
		$m['Treat'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'serpentduel';
			$cls_definition['__md5__'] = 'cebc591d21adb40ceca6fdd05c75a918';
			$pyjs['track']['lineno']=446;
			$cls_definition['images'] = null;
			$pyjs['track']['lineno']=447;
			$cls_definition['mask'] = null;
			$pyjs['track']['lineno']=448;
			$method = $pyjs__bind_method2('__init__', function(matrix) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					matrix = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cebc591d21adb40ceca6fdd05c75a918') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter20_nextval,serpent,$sub41,$sub42,$sub43,$sub44,$iter20_array,$add49,disrupt,$iter20_iter,$floordiv16,$floordiv15,$div6,$div5,$add50,$iter20_type,placed,$iter20_idx,$pyjs__trackstack_size_1,y,x;
				$pyjs['track']={'module':'serpentduel', 'lineno':448};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=448;
				$pyjs['track']['lineno']=449;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['sprite']['Sprite']['__init__'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_302_err){if (!$p['isinstance']($pyjs_dbg_302_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_302_err);}throw $pyjs_dbg_302_err;
}})();
				$pyjs['track']['lineno']=450;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix', matrix) : $p['setattr'](self, 'matrix', matrix); 
				$pyjs['track']['lineno']=451;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr']($m['Treat'], 'images')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_303_err){if (!$p['isinstance']($pyjs_dbg_303_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_303_err);}throw $pyjs_dbg_303_err;
}})()) {
					$pyjs['track']['lineno']=452;
					$m['Treat']['__is_instance__'] && typeof $m['Treat']['__setattr__'] == 'function' ? $m['Treat']['__setattr__']('images', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_304_err){if (!$p['isinstance']($pyjs_dbg_304_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_304_err);}throw $pyjs_dbg_304_err;
}})()) : $p['setattr']($m['Treat'], 'images', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_304_err){if (!$p['isinstance']($pyjs_dbg_304_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_304_err);}throw $pyjs_dbg_304_err;
}})()); 
					$pyjs['track']['lineno']=453;
					$m['Treat']['__is_instance__'] && typeof $m['Treat']['__setattr__'] == 'function' ? $m['Treat']['__setattr__']('mask', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_305_err){if (!$p['isinstance']($pyjs_dbg_305_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_305_err);}throw $pyjs_dbg_305_err;
}})()) : $p['setattr']($m['Treat'], 'mask', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_305_err){if (!$p['isinstance']($pyjs_dbg_305_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_305_err);}throw $pyjs_dbg_305_err;
}})()); 
					$pyjs['track']['lineno']=454;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($m['Treat'], 'images')['__setitem__']('Food', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['pygame']['Surface']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$constant_int_15, $constant_int_15]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_306_err){if (!$p['isinstance']($pyjs_dbg_306_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_306_err);}throw $pyjs_dbg_306_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_307_err){if (!$p['isinstance']($pyjs_dbg_307_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_307_err);}throw $pyjs_dbg_307_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_308_err){if (!$p['isinstance']($pyjs_dbg_308_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_308_err);}throw $pyjs_dbg_308_err;
}})();
					$pyjs['track']['lineno']=455;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['pygame']['draw']['circle']($p['getattr']($m['Treat'], 'images')['__getitem__']('Food'), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$constant_int_0, $constant_int_255, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_309_err){if (!$p['isinstance']($pyjs_dbg_309_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_309_err);}throw $pyjs_dbg_309_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$constant_int_7, $constant_int_7]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_310_err){if (!$p['isinstance']($pyjs_dbg_310_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_310_err);}throw $pyjs_dbg_310_err;
}})(), $constant_int_5, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_311_err){if (!$p['isinstance']($pyjs_dbg_311_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_311_err);}throw $pyjs_dbg_311_err;
}})();
					$pyjs['track']['lineno']=456;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($m['Treat'], 'images')['__getitem__']('Food')['set_colorkey']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_312_err){if (!$p['isinstance']($pyjs_dbg_312_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_312_err);}throw $pyjs_dbg_312_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_313_err){if (!$p['isinstance']($pyjs_dbg_313_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_313_err);}throw $pyjs_dbg_313_err;
}})();
					$pyjs['track']['lineno']=457;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($m['Treat'], 'images')['__setitem__']('Bonus', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['pygame']['Surface']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$constant_int_15, $constant_int_15]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_314_err){if (!$p['isinstance']($pyjs_dbg_314_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_314_err);}throw $pyjs_dbg_314_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_315_err){if (!$p['isinstance']($pyjs_dbg_315_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_315_err);}throw $pyjs_dbg_315_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_316_err){if (!$p['isinstance']($pyjs_dbg_316_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_316_err);}throw $pyjs_dbg_316_err;
}})();
					$pyjs['track']['lineno']=458;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['pygame']['draw']['circle']($p['getattr']($m['Treat'], 'images')['__getitem__']('Bonus'), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$constant_int_255, $constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_317_err){if (!$p['isinstance']($pyjs_dbg_317_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_317_err);}throw $pyjs_dbg_317_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$constant_int_7, $constant_int_10]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_318_err){if (!$p['isinstance']($pyjs_dbg_318_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_318_err);}throw $pyjs_dbg_318_err;
}})(), $constant_int_5, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_319_err){if (!$p['isinstance']($pyjs_dbg_319_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_319_err);}throw $pyjs_dbg_319_err;
}})();
					$pyjs['track']['lineno']=459;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['pygame']['draw']['arc']($p['getattr']($m['Treat'], 'images')['__getitem__']('Bonus'), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$constant_int_0, $constant_int_255, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_320_err){if (!$p['isinstance']($pyjs_dbg_320_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_320_err);}throw $pyjs_dbg_320_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([(typeof ($usub10=$constant_int_7)=='number'?
						-$usub10:
						$p['op_usub']($usub10)), $constant_int_0, $constant_int_15, $constant_int_15]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_321_err){if (!$p['isinstance']($pyjs_dbg_321_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_321_err);}throw $pyjs_dbg_321_err;
}})(), $constant_int_0, $constant_int_1, $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_322_err){if (!$p['isinstance']($pyjs_dbg_322_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_322_err);}throw $pyjs_dbg_322_err;
}})();
					$pyjs['track']['lineno']=460;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($m['Treat'], 'images')['__getitem__']('Bonus')['set_colorkey']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_323_err){if (!$p['isinstance']($pyjs_dbg_323_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_323_err);}throw $pyjs_dbg_323_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_324_err){if (!$p['isinstance']($pyjs_dbg_324_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_324_err);}throw $pyjs_dbg_324_err;
}})();
					$pyjs['track']['lineno']=461;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($m['Treat'], 'mask')['__setitem__']('Food', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['pygame']['mask']['from_surface']($p['getattr']($m['Treat'], 'images')['__getitem__']('Food'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_325_err){if (!$p['isinstance']($pyjs_dbg_325_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_325_err);}throw $pyjs_dbg_325_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_326_err){if (!$p['isinstance']($pyjs_dbg_326_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_326_err);}throw $pyjs_dbg_326_err;
}})();
					$pyjs['track']['lineno']=462;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($m['Treat'], 'mask')['__setitem__']('Bonus', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['pygame']['mask']['from_surface']($p['getattr']($m['Treat'], 'images')['__getitem__']('Bonus'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_327_err){if (!$p['isinstance']($pyjs_dbg_327_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_327_err);}throw $pyjs_dbg_327_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_328_err){if (!$p['isinstance']($pyjs_dbg_328_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_328_err);}throw $pyjs_dbg_328_err;
}})();
				}
				$pyjs['track']['lineno']=463;
				placed = false;
				$pyjs['track']['lineno']=464;
				while ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](placed));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_329_err){if (!$p['isinstance']($pyjs_dbg_329_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_329_err);}throw $pyjs_dbg_329_err;
}})()) {
					$pyjs['track']['lineno']=465;
					var $tupleassign10 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['random']['randrange']($constant_int_20, $p['__op_sub']($sub41=$p['getattr']($p['getattr'](self, 'matrix'), 'x'),$sub42=$constant_int_20));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_330_err){if (!$p['isinstance']($pyjs_dbg_330_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_330_err);}throw $pyjs_dbg_330_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['random']['randrange']($constant_int_20, $p['__op_sub']($sub43=$p['getattr']($p['getattr'](self, 'matrix'), 'y'),$sub44=$constant_int_20));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_331_err){if (!$p['isinstance']($pyjs_dbg_331_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_331_err);}throw $pyjs_dbg_331_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_332_err){if (!$p['isinstance']($pyjs_dbg_332_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_332_err);}throw $pyjs_dbg_332_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_333_err){if (!$p['isinstance']($pyjs_dbg_333_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_333_err);}throw $pyjs_dbg_333_err;
}})();
					x = $tupleassign10[0];
					y = $tupleassign10[1];
					$pyjs['track']['lineno']=466;
					var $tupleassign11 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_334_err){if (!$p['isinstance']($pyjs_dbg_334_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_334_err);}throw $pyjs_dbg_334_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_335_err){if (!$p['isinstance']($pyjs_dbg_335_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_335_err);}throw $pyjs_dbg_335_err;
}})();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', $tupleassign11[0]) : $p['setattr'](self, 'x', $tupleassign11[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', $tupleassign11[1]) : $p['setattr'](self, 'y', $tupleassign11[1]); 
					$pyjs['track']['lineno']=467;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['random']['random']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_336_err){if (!$p['isinstance']($pyjs_dbg_336_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_336_err);}throw $pyjs_dbg_336_err;
}})(), $p['__op_add']($add49=0.1,$add50=(typeof ($div5=(function(){try{try{$pyjs['in_try_except'] += 1;
					return matrix['clock']['get_time']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_337_err){if (!$p['isinstance']($pyjs_dbg_337_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_337_err);}throw $pyjs_dbg_337_err;
}})())==typeof ($div6=300.0) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_truediv']($div5,$div6)))) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_338_err){if (!$p['isinstance']($pyjs_dbg_338_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_338_err);}throw $pyjs_dbg_338_err;
}})()) {
						$pyjs['track']['lineno']=468;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('identity', 'Food') : $p['setattr'](self, 'identity', 'Food'); 
						$pyjs['track']['lineno']=469;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('duration', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['random']['randrange']($constant_int_800, $constant_int_2000);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_339_err){if (!$p['isinstance']($pyjs_dbg_339_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_339_err);}throw $pyjs_dbg_339_err;
}})()) : $p['setattr'](self, 'duration', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['random']['randrange']($constant_int_800, $constant_int_2000);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_339_err){if (!$p['isinstance']($pyjs_dbg_339_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_339_err);}throw $pyjs_dbg_339_err;
}})()); 
					}
					else {
						$pyjs['track']['lineno']=471;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('identity', 'Bonus') : $p['setattr'](self, 'identity', 'Bonus'); 
						$pyjs['track']['lineno']=472;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('duration', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['random']['randrange']($constant_int_400, $constant_int_800);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_340_err){if (!$p['isinstance']($pyjs_dbg_340_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_340_err);}throw $pyjs_dbg_340_err;
}})()) : $p['setattr'](self, 'duration', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['random']['randrange']($constant_int_400, $constant_int_800);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_340_err){if (!$p['isinstance']($pyjs_dbg_340_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_340_err);}throw $pyjs_dbg_340_err;
}})()); 
					}
					$pyjs['track']['lineno']=473;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('duration', (typeof ($floordiv15=$p['getattr'](self, 'duration'))==typeof ($floordiv16=$p['getattr'](matrix, 'level')) && typeof $floordiv15=='number' && $floordiv16 !== 0?
						Math['floor']($floordiv15/$floordiv16):
						$p['op_floordiv']($floordiv15,$floordiv16))) : $p['setattr'](self, 'duration', (typeof ($floordiv15=$p['getattr'](self, 'duration'))==typeof ($floordiv16=$p['getattr'](matrix, 'level')) && typeof $floordiv15=='number' && $floordiv16 !== 0?
						Math['floor']($floordiv15/$floordiv16):
						$p['op_floordiv']($floordiv15,$floordiv16))); 
					$pyjs['track']['lineno']=474;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('image', $p['getattr']($m['Treat'], 'images')['__getitem__']($p['getattr'](self, 'identity'))) : $p['setattr'](self, 'image', $p['getattr']($m['Treat'], 'images')['__getitem__']($p['getattr'](self, 'identity'))); 
					$pyjs['track']['lineno']=475;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rect', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(self['image'], 'get_rect', null, null, [{'center':(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_341_err){if (!$p['isinstance']($pyjs_dbg_341_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_341_err);}throw $pyjs_dbg_341_err;
}})()}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_342_err){if (!$p['isinstance']($pyjs_dbg_342_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_342_err);}throw $pyjs_dbg_342_err;
}})()) : $p['setattr'](self, 'rect', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(self['image'], 'get_rect', null, null, [{'center':(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_341_err){if (!$p['isinstance']($pyjs_dbg_341_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_341_err);}throw $pyjs_dbg_341_err;
}})()}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_342_err){if (!$p['isinstance']($pyjs_dbg_342_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_342_err);}throw $pyjs_dbg_342_err;
}})()); 
					$pyjs['track']['lineno']=476;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mask', $p['getattr']($m['Treat'], 'mask')['__getitem__']($p['getattr'](self, 'identity'))) : $p['setattr'](self, 'mask', $p['getattr']($m['Treat'], 'mask')['__getitem__']($p['getattr'](self, 'identity'))); 
					$pyjs['track']['lineno']=477;
					disrupt = false;
					$pyjs['track']['lineno']=478;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter20_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($p['getattr'](self, 'matrix'), 'serpent');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_343_err){if (!$p['isinstance']($pyjs_dbg_343_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_343_err);}throw $pyjs_dbg_343_err;
}})();
					$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
					while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
						serpent = $iter20_nextval['$nextval'];
						$pyjs['track']['lineno']=479;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_344_err){if (!$p['isinstance']($pyjs_dbg_344_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_344_err);}throw $pyjs_dbg_344_err;
}})()) {
							$pyjs['track']['lineno']=480;
							continue;
						}
						$pyjs['track']['lineno']=481;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['pygame']['sprite']['spritecollideany'](self, $p['getattr']($p['getattr']($p['getattr'](self, 'matrix'), 'serpent')['__getitem__'](serpent), 'segments'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_345_err){if (!$p['isinstance']($pyjs_dbg_345_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_345_err);}throw $pyjs_dbg_345_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_346_err){if (!$p['isinstance']($pyjs_dbg_346_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_346_err);}throw $pyjs_dbg_346_err;
}})()) {
							$pyjs['track']['lineno']=482;
							disrupt = true;
							$pyjs['track']['lineno']=483;
							break;
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='serpentduel';
					$pyjs['track']['lineno']=484;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool'](disrupt));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_347_err){if (!$p['isinstance']($pyjs_dbg_347_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_347_err);}throw $pyjs_dbg_347_err;
}})()) {
						$pyjs['track']['lineno']=485;
						placed = true;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['matrix']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=487;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cebc591d21adb40ceca6fdd05c75a918') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub45,$sub46;
				$pyjs['track']={'module':'serpentduel', 'lineno':487};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=487;
				$pyjs['track']['lineno']=489;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('duration', $p['__op_sub']($sub45=$p['getattr'](self, 'duration'),$sub46=$constant_int_1)) : $p['setattr'](self, 'duration', $p['__op_sub']($sub45=$p['getattr'](self, 'duration'),$sub46=$constant_int_1)); 
				$pyjs['track']['lineno']=490;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'duration')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_348_err){if (!$p['isinstance']($pyjs_dbg_348_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_348_err);}throw $pyjs_dbg_348_err;
}})()) {
					$pyjs['track']['lineno']=491;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['matrix']['treat']['remove'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_349_err){if (!$p['isinstance']($pyjs_dbg_349_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_349_err);}throw $pyjs_dbg_349_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=442;
			var $bases = new Array($p['getattr']($p['getattr']($m['pygame'], 'sprite'), 'Sprite'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Treat', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=494;
		$m['Control'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'serpentduel';
			$cls_definition['__md5__'] = '03543de0c74efac4f924bf3c184ec3da';
			$pyjs['track']['lineno']=495;
			$method = $pyjs__bind_method2('__init__', function(matrix) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					matrix = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '03543de0c74efac4f924bf3c184ec3da') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var font;
				$pyjs['track']={'module':'serpentduel', 'lineno':495};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=495;
				$pyjs['track']['lineno']=496;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix', matrix) : $p['setattr'](self, 'matrix', matrix); 
				$pyjs['track']['lineno']=497;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['font']['init']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_350_err){if (!$p['isinstance']($pyjs_dbg_350_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_350_err);}throw $pyjs_dbg_350_err;
}})();
				$pyjs['track']['lineno']=498;
				font = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['font']['get_default_font']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_351_err){if (!$p['isinstance']($pyjs_dbg_351_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_351_err);}throw $pyjs_dbg_351_err;
}})();
				$pyjs['track']['lineno']=499;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('font', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['font']['Font'](font, $constant_int_24);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_352_err){if (!$p['isinstance']($pyjs_dbg_352_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_352_err);}throw $pyjs_dbg_352_err;
}})()) : $p['setattr'](self, 'font', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['font']['Font'](font, $constant_int_24);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_352_err){if (!$p['isinstance']($pyjs_dbg_352_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_352_err);}throw $pyjs_dbg_352_err;
}})()); 
				$pyjs['track']['lineno']=500;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('font2', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['font']['Font'](font, $constant_int_14);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_353_err){if (!$p['isinstance']($pyjs_dbg_353_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_353_err);}throw $pyjs_dbg_353_err;
}})()) : $p['setattr'](self, 'font2', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['font']['Font'](font, $constant_int_14);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_353_err){if (!$p['isinstance']($pyjs_dbg_353_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_353_err);}throw $pyjs_dbg_353_err;
}})()); 
				$pyjs['track']['lineno']=501;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix_start', false) : $p['setattr'](self, 'matrix_start', false); 
				$pyjs['track']['lineno']=502;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quit_request', false) : $p['setattr'](self, 'quit_request', false); 
				$pyjs['track']['lineno']=503;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['event']['set_blocked']($p['getattr']($m['pygame'], 'MOUSEMOTION'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_354_err){if (!$p['isinstance']($pyjs_dbg_354_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_354_err);}throw $pyjs_dbg_354_err;
}})();
				$pyjs['track']['lineno']=504;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quit', false) : $p['setattr'](self, 'quit', false); 
				$pyjs['track']['lineno']=505;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pause', true) : $p['setattr'](self, 'pause', true); 
				$pyjs['track']['lineno']=506;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pause_program']('Serpent Duel', 'Click to run/pause', '[r]estart [p]ause [q]uit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_355_err){if (!$p['isinstance']($pyjs_dbg_355_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_355_err);}throw $pyjs_dbg_355_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['matrix']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=507;
			$method = $pyjs__bind_method2('pause_program', function(text1, text2, text3) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					text1 = arguments[1];
					text2 = arguments[2];
					text3 = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '03543de0c74efac4f924bf3c184ec3da') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof text2 == 'undefined') text2=arguments['callee']['__args__'][4][1];
				if (typeof text3 == 'undefined') text3=arguments['callee']['__args__'][5][1];
				var $floordiv26,$floordiv27,$floordiv24,$floordiv25,$floordiv22,$floordiv23,$floordiv20,$floordiv21,text,$floordiv33,$floordiv28,$floordiv29,$sub48,$sub49,$floordiv32,$floordiv35,$floordiv34,$sub47,$sub56,$sub51,$sub50,$floordiv39,$sub60,size,$floordiv37,$floordiv31,$floordiv30,$sub55,$sub54,$sub53,$sub52,$floordiv19,$floordiv18,$floordiv17,$floordiv38,$sub59,$sub58,$floordiv36,$floordiv40,$add51,$add52,$add53,$add54,$sub57;
				$pyjs['track']={'module':'serpentduel', 'lineno':507};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=507;
				$pyjs['track']['lineno']=508;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['matrix']['screen']['fill']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_356_err){if (!$p['isinstance']($pyjs_dbg_356_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_356_err);}throw $pyjs_dbg_356_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_357_err){if (!$p['isinstance']($pyjs_dbg_357_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_357_err);}throw $pyjs_dbg_357_err;
}})();
				$pyjs['track']['lineno']=509;
				text = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['font']['render'](text1, true, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_100, $constant_int_100, $constant_int_100]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_358_err){if (!$p['isinstance']($pyjs_dbg_358_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_358_err);}throw $pyjs_dbg_358_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_359_err){if (!$p['isinstance']($pyjs_dbg_359_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_359_err);}throw $pyjs_dbg_359_err;
}})();
				$pyjs['track']['lineno']=510;
				size = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['font']['size'](text1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_360_err){if (!$p['isinstance']($pyjs_dbg_360_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_360_err);}throw $pyjs_dbg_360_err;
}})();
				$pyjs['track']['lineno']=511;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['matrix']['screen']['blit'](text, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['__op_sub']($sub47=(typeof ($floordiv17=$p['getattr']($p['getattr'](self, 'matrix'), 'x'))==typeof ($floordiv18=$constant_int_2) && typeof $floordiv17=='number' && $floordiv18 !== 0?
					Math['floor']($floordiv17/$floordiv18):
					$p['op_floordiv']($floordiv17,$floordiv18)),$sub48=(typeof ($floordiv19=size['__getitem__']($constant_int_0))==typeof ($floordiv20=$constant_int_2) && typeof $floordiv19=='number' && $floordiv20 !== 0?
					Math['floor']($floordiv19/$floordiv20):
					$p['op_floordiv']($floordiv19,$floordiv20))), $p['__op_sub']($sub51=$p['__op_sub']($sub49=(typeof ($floordiv21=$p['getattr']($p['getattr'](self, 'matrix'), 'y'))==typeof ($floordiv22=$constant_int_2) && typeof $floordiv21=='number' && $floordiv22 !== 0?
					Math['floor']($floordiv21/$floordiv22):
					$p['op_floordiv']($floordiv21,$floordiv22)),$sub50=(typeof ($floordiv23=size['__getitem__']($constant_int_1))==typeof ($floordiv24=$constant_int_2) && typeof $floordiv23=='number' && $floordiv24 !== 0?
					Math['floor']($floordiv23/$floordiv24):
					$p['op_floordiv']($floordiv23,$floordiv24))),$sub52=$constant_int_12)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_361_err){if (!$p['isinstance']($pyjs_dbg_361_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_361_err);}throw $pyjs_dbg_361_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_362_err){if (!$p['isinstance']($pyjs_dbg_362_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_362_err);}throw $pyjs_dbg_362_err;
}})();
				$pyjs['track']['lineno']=512;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](text2);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_363_err){if (!$p['isinstance']($pyjs_dbg_363_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_363_err);}throw $pyjs_dbg_363_err;
}})()) {
					$pyjs['track']['lineno']=513;
					text = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['font2']['render'](text2, true, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$constant_int_100, $constant_int_100, $constant_int_100]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_364_err){if (!$p['isinstance']($pyjs_dbg_364_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_364_err);}throw $pyjs_dbg_364_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_365_err){if (!$p['isinstance']($pyjs_dbg_365_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_365_err);}throw $pyjs_dbg_365_err;
}})();
					$pyjs['track']['lineno']=514;
					size = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['font2']['size'](text2);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_366_err){if (!$p['isinstance']($pyjs_dbg_366_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_366_err);}throw $pyjs_dbg_366_err;
}})();
					$pyjs['track']['lineno']=515;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['matrix']['screen']['blit'](text, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_sub']($sub53=(typeof ($floordiv25=$p['getattr']($p['getattr'](self, 'matrix'), 'x'))==typeof ($floordiv26=$constant_int_2) && typeof $floordiv25=='number' && $floordiv26 !== 0?
						Math['floor']($floordiv25/$floordiv26):
						$p['op_floordiv']($floordiv25,$floordiv26)),$sub54=(typeof ($floordiv27=size['__getitem__']($constant_int_0))==typeof ($floordiv28=$constant_int_2) && typeof $floordiv27=='number' && $floordiv28 !== 0?
						Math['floor']($floordiv27/$floordiv28):
						$p['op_floordiv']($floordiv27,$floordiv28))), $p['__op_add']($add51=$p['__op_sub']($sub55=(typeof ($floordiv29=$p['getattr']($p['getattr'](self, 'matrix'), 'y'))==typeof ($floordiv30=$constant_int_2) && typeof $floordiv29=='number' && $floordiv30 !== 0?
						Math['floor']($floordiv29/$floordiv30):
						$p['op_floordiv']($floordiv29,$floordiv30)),$sub56=(typeof ($floordiv31=size['__getitem__']($constant_int_1))==typeof ($floordiv32=$constant_int_2) && typeof $floordiv31=='number' && $floordiv32 !== 0?
						Math['floor']($floordiv31/$floordiv32):
						$p['op_floordiv']($floordiv31,$floordiv32))),$add52=$constant_int_25)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_367_err){if (!$p['isinstance']($pyjs_dbg_367_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_367_err);}throw $pyjs_dbg_367_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_368_err){if (!$p['isinstance']($pyjs_dbg_368_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_368_err);}throw $pyjs_dbg_368_err;
}})();
				}
				$pyjs['track']['lineno']=516;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](text3);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_369_err){if (!$p['isinstance']($pyjs_dbg_369_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_369_err);}throw $pyjs_dbg_369_err;
}})()) {
					$pyjs['track']['lineno']=517;
					text = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['font2']['render'](text3, true, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$constant_int_100, $constant_int_100, $constant_int_100]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_370_err){if (!$p['isinstance']($pyjs_dbg_370_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_370_err);}throw $pyjs_dbg_370_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_371_err){if (!$p['isinstance']($pyjs_dbg_371_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_371_err);}throw $pyjs_dbg_371_err;
}})();
					$pyjs['track']['lineno']=518;
					size = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['font2']['size'](text3);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_372_err){if (!$p['isinstance']($pyjs_dbg_372_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_372_err);}throw $pyjs_dbg_372_err;
}})();
					$pyjs['track']['lineno']=519;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['matrix']['screen']['blit'](text, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_sub']($sub57=(typeof ($floordiv33=$p['getattr']($p['getattr'](self, 'matrix'), 'x'))==typeof ($floordiv34=$constant_int_2) && typeof $floordiv33=='number' && $floordiv34 !== 0?
						Math['floor']($floordiv33/$floordiv34):
						$p['op_floordiv']($floordiv33,$floordiv34)),$sub58=(typeof ($floordiv35=size['__getitem__']($constant_int_0))==typeof ($floordiv36=$constant_int_2) && typeof $floordiv35=='number' && $floordiv36 !== 0?
						Math['floor']($floordiv35/$floordiv36):
						$p['op_floordiv']($floordiv35,$floordiv36))), $p['__op_add']($add53=$p['__op_sub']($sub59=(typeof ($floordiv37=$p['getattr']($p['getattr'](self, 'matrix'), 'y'))==typeof ($floordiv38=$constant_int_2) && typeof $floordiv37=='number' && $floordiv38 !== 0?
						Math['floor']($floordiv37/$floordiv38):
						$p['op_floordiv']($floordiv37,$floordiv38)),$sub60=(typeof ($floordiv39=size['__getitem__']($constant_int_1))==typeof ($floordiv40=$constant_int_2) && typeof $floordiv39=='number' && $floordiv40 !== 0?
						Math['floor']($floordiv39/$floordiv40):
						$p['op_floordiv']($floordiv39,$floordiv40))),$add54=$constant_int_40)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_373_err){if (!$p['isinstance']($pyjs_dbg_373_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_373_err);}throw $pyjs_dbg_373_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_374_err){if (!$p['isinstance']($pyjs_dbg_374_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_374_err);}throw $pyjs_dbg_374_err;
}})();
				}
				$pyjs['track']['lineno']=520;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['display']['flip']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_375_err){if (!$p['isinstance']($pyjs_dbg_375_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_375_err);}throw $pyjs_dbg_375_err;
}})();
				$pyjs['track']['lineno']=521;
				$p['getattr'](self, 'matrix')['__is_instance__'] && typeof $p['getattr'](self, 'matrix')['__setattr__'] == 'function' ? $p['getattr'](self, 'matrix')['__setattr__']('active', false) : $p['setattr']($p['getattr'](self, 'matrix'), 'active', false); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['text1'],['text2', null],['text3', null]]);
			$cls_definition['pause_program'] = $method;
			$pyjs['track']['lineno']=522;
			$method = $pyjs__bind_method2('matrix_control', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '03543de0c74efac4f924bf3c184ec3da') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'serpentduel', 'lineno':522};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=522;
				$pyjs['track']['lineno']=523;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'pause')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_376_err){if (!$p['isinstance']($pyjs_dbg_376_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_376_err);}throw $pyjs_dbg_376_err;
}})()) {
					$pyjs['track']['lineno']=524;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['pause_program']('Serpent Duel', 'Click to run/pause', '[r]estart [p]ause [q]uit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_377_err){if (!$p['isinstance']($pyjs_dbg_377_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_377_err);}throw $pyjs_dbg_377_err;
}})();
					$pyjs['track']['lineno']=525;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pause', true) : $p['setattr'](self, 'pause', true); 
				}
				else {
					$pyjs['track']['lineno']=527;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, 'matrix_start'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_378_err){if (!$p['isinstance']($pyjs_dbg_378_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_378_err);}throw $pyjs_dbg_378_err;
}})()) {
						$pyjs['track']['lineno']=528;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['matrix']['clear_screen']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_379_err){if (!$p['isinstance']($pyjs_dbg_379_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_379_err);}throw $pyjs_dbg_379_err;
}})();
						$pyjs['track']['lineno']=529;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['matrix']['update_screen']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_380_err){if (!$p['isinstance']($pyjs_dbg_380_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_380_err);}throw $pyjs_dbg_380_err;
}})();
						$pyjs['track']['lineno']=530;
						$p['getattr'](self, 'matrix')['__is_instance__'] && typeof $p['getattr'](self, 'matrix')['__setattr__'] == 'function' ? $p['getattr'](self, 'matrix')['__setattr__']('active', true) : $p['setattr']($p['getattr'](self, 'matrix'), 'active', true); 
					}
					else {
						$pyjs['track']['lineno']=532;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['matrix']['start']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_381_err){if (!$p['isinstance']($pyjs_dbg_381_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_381_err);}throw $pyjs_dbg_381_err;
}})();
						$pyjs['track']['lineno']=533;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix_start', true) : $p['setattr'](self, 'matrix_start', true); 
					}
					$pyjs['track']['lineno']=534;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quit_request', false) : $p['setattr'](self, 'quit_request', false); 
					$pyjs['track']['lineno']=535;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pause', false) : $p['setattr'](self, 'pause', false); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['matrix_control'] = $method;
			$pyjs['track']['lineno']=536;
			$method = $pyjs__bind_method2('check_control', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '03543de0c74efac4f924bf3c184ec3da') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter21_idx,$iter21_nextval,$iter21_type,$iter21_iter,$iter21_array,$pyjs__trackstack_size_1,event;
				$pyjs['track']={'module':'serpentduel', 'lineno':536};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=536;
				$pyjs['track']['lineno']=537;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter21_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['event']['get']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_382_err){if (!$p['isinstance']($pyjs_dbg_382_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_382_err);}throw $pyjs_dbg_382_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_383_err){if (!$p['isinstance']($pyjs_dbg_383_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_383_err);}throw $pyjs_dbg_383_err;
}})();
				$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
				while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
					event = $iter21_nextval['$nextval'];
					$pyjs['track']['lineno']=538;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](event, 'type'), $p['getattr']($m['pygame'], 'MOUSEBUTTONDOWN')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_384_err){if (!$p['isinstance']($pyjs_dbg_384_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_384_err);}throw $pyjs_dbg_384_err;
}})()) {
						$pyjs['track']['lineno']=539;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['op_eq']($p['getattr'](event, 'button'), $constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_385_err){if (!$p['isinstance']($pyjs_dbg_385_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_385_err);}throw $pyjs_dbg_385_err;
}})()) {
							$pyjs['track']['lineno']=540;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['matrix_control']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_386_err){if (!$p['isinstance']($pyjs_dbg_386_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_386_err);}throw $pyjs_dbg_386_err;
}})();
						}
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](event, 'type'), $p['getattr']($m['pygame'], 'KEYDOWN')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_387_err){if (!$p['isinstance']($pyjs_dbg_387_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_387_err);}throw $pyjs_dbg_387_err;
}})()) {
						$pyjs['track']['lineno']=542;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_p')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_388_err){if (!$p['isinstance']($pyjs_dbg_388_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_388_err);}throw $pyjs_dbg_388_err;
}})()) {
							$pyjs['track']['lineno']=543;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['matrix_control']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_389_err){if (!$p['isinstance']($pyjs_dbg_389_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_389_err);}throw $pyjs_dbg_389_err;
}})();
						}
						else if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_r')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_390_err){if (!$p['isinstance']($pyjs_dbg_390_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_390_err);}throw $pyjs_dbg_390_err;
}})()) {
							$pyjs['track']['lineno']=545;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pause', false) : $p['setattr'](self, 'pause', false); 
							$pyjs['track']['lineno']=546;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quit_request', false) : $p['setattr'](self, 'quit_request', false); 
							$pyjs['track']['lineno']=547;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['matrix']['start']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_391_err){if (!$p['isinstance']($pyjs_dbg_391_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_391_err);}throw $pyjs_dbg_391_err;
}})();
						}
						else if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_q')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_392_err){if (!$p['isinstance']($pyjs_dbg_392_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_392_err);}throw $pyjs_dbg_392_err;
}})()) {
							$pyjs['track']['lineno']=549;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['pause_program']('Serpent Duel', 'Quit (y/n)?');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_393_err){if (!$p['isinstance']($pyjs_dbg_393_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_393_err);}throw $pyjs_dbg_393_err;
}})();
							$pyjs['track']['lineno']=550;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pause', true) : $p['setattr'](self, 'pause', true); 
							$pyjs['track']['lineno']=551;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quit_request', true) : $p['setattr'](self, 'quit_request', true); 
						}
						else if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$p['getattr']($m['pygame'], 'K_y'), $p['getattr']($m['pygame'], 'K_n')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_394_err){if (!$p['isinstance']($pyjs_dbg_394_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_394_err);}throw $pyjs_dbg_394_err;
}})()['__contains__']($p['getattr'](event, 'key')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_395_err){if (!$p['isinstance']($pyjs_dbg_395_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_395_err);}throw $pyjs_dbg_395_err;
}})()) {
							$pyjs['track']['lineno']=553;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['getattr'](self, 'quit_request'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_396_err){if (!$p['isinstance']($pyjs_dbg_396_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_396_err);}throw $pyjs_dbg_396_err;
}})()) {
								$pyjs['track']['lineno']=554;
								if ((function(){try{try{$pyjs['in_try_except'] += 1;
									return $p['bool']($p['op_eq']($p['getattr'](event, 'key'), $p['getattr']($m['pygame'], 'K_n')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_397_err){if (!$p['isinstance']($pyjs_dbg_397_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_397_err);}throw $pyjs_dbg_397_err;
}})()) {
									$pyjs['track']['lineno']=555;
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return self['matrix_control']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_398_err){if (!$p['isinstance']($pyjs_dbg_398_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_398_err);}throw $pyjs_dbg_398_err;
}})();
								}
								else {
									$pyjs['track']['lineno']=557;
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return self['matrix']['screen']['fill']((function(){try{try{$pyjs['in_try_except'] += 1;
									return $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_399_err){if (!$p['isinstance']($pyjs_dbg_399_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_399_err);}throw $pyjs_dbg_399_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_400_err){if (!$p['isinstance']($pyjs_dbg_400_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_400_err);}throw $pyjs_dbg_400_err;
}})();
									$pyjs['track']['lineno']=558;
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return $m['pygame']['display']['flip']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_401_err){if (!$p['isinstance']($pyjs_dbg_401_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_401_err);}throw $pyjs_dbg_401_err;
}})();
									$pyjs['track']['lineno']=559;
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return $m['pygame']['time']['delay']($constant_int_10);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_402_err){if (!$p['isinstance']($pyjs_dbg_402_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_402_err);}throw $pyjs_dbg_402_err;
}})();
									$pyjs['track']['lineno']=560;
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return $m['pygame']['quit']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_403_err){if (!$p['isinstance']($pyjs_dbg_403_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_403_err);}throw $pyjs_dbg_403_err;
}})();
									$pyjs['track']['lineno']=561;
									self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quit', true) : $p['setattr'](self, 'quit', true); 
								}
							}
						}
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](event, 'type'), $p['getattr']($m['pygame'], 'QUIT')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_404_err){if (!$p['isinstance']($pyjs_dbg_404_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_404_err);}throw $pyjs_dbg_404_err;
}})()) {
						$pyjs['track']['lineno']=563;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quit', true) : $p['setattr'](self, 'quit', true); 
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='serpentduel';
				$pyjs['track']['lineno']=564;
				$pyjs['track']['lineno']=564;
				var $pyjs__ret = $p['getattr'](self, 'quit');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['check_control'] = $method;
			$pyjs['track']['lineno']=494;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Control', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=567;
		$m['setup'] = function(x, y, screen) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 3, arguments['length']);
			if (typeof x == 'undefined') x=arguments['callee']['__args__'][2][1];
			if (typeof y == 'undefined') y=arguments['callee']['__args__'][3][1];
			if (typeof screen == 'undefined') screen=arguments['callee']['__args__'][4][1];
			var control,$iter23_type,$iter22_array,$iter23_idx,$iter23_iter,$iter22_nextval,$iter22_idx,matrix,$iter23_nextval,$iter23_array,$iter22_type,background,$pyjs__trackstack_size_1,line,$iter22_iter;
			$pyjs['track']={'module':'serpentduel','lineno':567};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='serpentduel';
			$pyjs['track']['lineno']=567;
			$pyjs['track']['lineno']=568;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['pygame']['display']['init']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_405_err){if (!$p['isinstance']($pyjs_dbg_405_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_405_err);}throw $pyjs_dbg_405_err;
}})();
			$pyjs['track']['lineno']=569;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['pygame']['display']['set_caption']('Serpent Duel');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_406_err){if (!$p['isinstance']($pyjs_dbg_406_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_406_err);}throw $pyjs_dbg_406_err;
}})();
			$pyjs['track']['lineno']=570;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](screen));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_407_err){if (!$p['isinstance']($pyjs_dbg_407_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_407_err);}throw $pyjs_dbg_407_err;
}})()) {
				$pyjs['track']['lineno']=571;
				screen = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['display']['set_mode']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_408_err){if (!$p['isinstance']($pyjs_dbg_408_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_408_err);}throw $pyjs_dbg_408_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_409_err){if (!$p['isinstance']($pyjs_dbg_409_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_409_err);}throw $pyjs_dbg_409_err;
}})();
			}
			$pyjs['track']['lineno']=572;
			background = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['pygame']['Surface']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_410_err){if (!$p['isinstance']($pyjs_dbg_410_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_410_err);}throw $pyjs_dbg_410_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_411_err){if (!$p['isinstance']($pyjs_dbg_411_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_411_err);}throw $pyjs_dbg_411_err;
}})();
			$pyjs['track']['lineno']=573;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return background['fill']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([$constant_int_50, $constant_int_50, $constant_int_50]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_412_err){if (!$p['isinstance']($pyjs_dbg_412_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_412_err);}throw $pyjs_dbg_412_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_413_err){if (!$p['isinstance']($pyjs_dbg_413_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_413_err);}throw $pyjs_dbg_413_err;
}})();
			$pyjs['track']['lineno']=574;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter22_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range']($constant_int_0, $constant_int_300, $constant_int_25);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_414_err){if (!$p['isinstance']($pyjs_dbg_414_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_414_err);}throw $pyjs_dbg_414_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_415_err){if (!$p['isinstance']($pyjs_dbg_415_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_415_err);}throw $pyjs_dbg_415_err;
}})();
			$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
			while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
				line = $iter22_nextval['$nextval'];
				$pyjs['track']['lineno']=575;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['draw']['line'](background, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_43, $constant_int_50, $constant_int_58]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_416_err){if (!$p['isinstance']($pyjs_dbg_416_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_416_err);}throw $pyjs_dbg_416_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_0, line]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_417_err){if (!$p['isinstance']($pyjs_dbg_417_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_417_err);}throw $pyjs_dbg_417_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_400, line]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_418_err){if (!$p['isinstance']($pyjs_dbg_418_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_418_err);}throw $pyjs_dbg_418_err;
}})(), $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_419_err){if (!$p['isinstance']($pyjs_dbg_419_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_419_err);}throw $pyjs_dbg_419_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='serpentduel';
			$pyjs['track']['lineno']=576;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter23_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range']($constant_int_0, $constant_int_400, $constant_int_25);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_420_err){if (!$p['isinstance']($pyjs_dbg_420_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_420_err);}throw $pyjs_dbg_420_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_421_err){if (!$p['isinstance']($pyjs_dbg_421_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_421_err);}throw $pyjs_dbg_421_err;
}})();
			$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
			while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
				line = $iter23_nextval['$nextval'];
				$pyjs['track']['lineno']=577;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['pygame']['draw']['line'](background, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_43, $constant_int_50, $constant_int_58]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_422_err){if (!$p['isinstance']($pyjs_dbg_422_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_422_err);}throw $pyjs_dbg_422_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([line, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_423_err){if (!$p['isinstance']($pyjs_dbg_423_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_423_err);}throw $pyjs_dbg_423_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([line, $constant_int_300]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_424_err){if (!$p['isinstance']($pyjs_dbg_424_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_424_err);}throw $pyjs_dbg_424_err;
}})(), $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_425_err){if (!$p['isinstance']($pyjs_dbg_425_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_425_err);}throw $pyjs_dbg_425_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='serpentduel';
			$pyjs['track']['lineno']=578;
			matrix = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Matrix'](x, y, screen, background);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_426_err){if (!$p['isinstance']($pyjs_dbg_426_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_426_err);}throw $pyjs_dbg_426_err;
}})();
			$pyjs['track']['lineno']=579;
			control = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Control'](matrix);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_427_err){if (!$p['isinstance']($pyjs_dbg_427_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_427_err);}throw $pyjs_dbg_427_err;
}})();
			$pyjs['track']['lineno']=580;
			$pyjs['track']['lineno']=580;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([matrix, control]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_428_err){if (!$p['isinstance']($pyjs_dbg_428_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_428_err);}throw $pyjs_dbg_428_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['setup']['__name__'] = 'setup';

		$m['setup']['__bind_type__'] = 0;
		$m['setup']['__args__'] = [null,null,['x', $constant_int_500],['y', $constant_int_500],['screen', null]];
		$pyjs['track']['lineno']=583;
		$m['program_exec'] = function(matrix, control) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var quit;
			$pyjs['track']={'module':'serpentduel','lineno':583};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='serpentduel';
			$pyjs['track']['lineno']=583;
			$pyjs['track']['lineno']=584;
			matrix['__is_instance__'] && typeof matrix['__setattr__'] == 'function' ? matrix['__setattr__']('update_rect', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_429_err){if (!$p['isinstance']($pyjs_dbg_429_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_429_err);}throw $pyjs_dbg_429_err;
}})()) : $p['setattr'](matrix, 'update_rect', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_429_err){if (!$p['isinstance']($pyjs_dbg_429_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_429_err);}throw $pyjs_dbg_429_err;
}})()); 
			$pyjs['track']['lineno']=585;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return matrix['update']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_430_err){if (!$p['isinstance']($pyjs_dbg_430_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_430_err);}throw $pyjs_dbg_430_err;
}})();
			$pyjs['track']['lineno']=586;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['pygame']['display']['update']($p['getattr'](matrix, 'update_rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_431_err){if (!$p['isinstance']($pyjs_dbg_431_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_431_err);}throw $pyjs_dbg_431_err;
}})();
			$pyjs['track']['lineno']=587;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return matrix['clock']['tick']($constant_int_30);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_432_err){if (!$p['isinstance']($pyjs_dbg_432_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_432_err);}throw $pyjs_dbg_432_err;
}})();
			$pyjs['track']['lineno']=588;
			quit = (function(){try{try{$pyjs['in_try_except'] += 1;
			return control['check_control']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_433_err){if (!$p['isinstance']($pyjs_dbg_433_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_433_err);}throw $pyjs_dbg_433_err;
}})();
			$pyjs['track']['lineno']=589;
			$pyjs['track']['lineno']=589;
			var $pyjs__ret = quit;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['program_exec']['__name__'] = 'program_exec';

		$m['program_exec']['__bind_type__'] = 0;
		$m['program_exec']['__args__'] = [null,null,['matrix'],['control']];
		$pyjs['track']['lineno']=592;
		$m['run'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'serpentduel','lineno':592};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='serpentduel';
			$pyjs['track']['lineno']=592;
			$pyjs['track']['lineno']=593;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['program_exec']((typeof matrix == "undefined"?$m['matrix']:matrix), (typeof control == "undefined"?$m['control']:control));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_434_err){if (!$p['isinstance']($pyjs_dbg_434_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_434_err);}throw $pyjs_dbg_434_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['run']['__name__'] = 'run';

		$m['run']['__bind_type__'] = 0;
		$m['run']['__args__'] = [null,null];
		$pyjs['track']['lineno']=596;
		var $tupleassign12 = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['tuple']([null, null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_435_err){if (!$p['isinstance']($pyjs_dbg_435_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_435_err);}throw $pyjs_dbg_435_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_436_err){if (!$p['isinstance']($pyjs_dbg_436_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_436_err);}throw $pyjs_dbg_436_err;
}})();
		$m['matrix'] = $tupleassign12[0];
		$m['control'] = $tupleassign12[1];
		$pyjs['track']['lineno']=599;
		$m['main'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'serpentduel','lineno':599};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='serpentduel';
			$pyjs['track']['lineno']=599;
			$pyjs['track']['lineno']=600;
			$pyjs['track']['lineno']=601;
			var $tupleassign13 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['setup']($constant_int_400, $constant_int_300);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_437_err){if (!$p['isinstance']($pyjs_dbg_437_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_437_err);}throw $pyjs_dbg_437_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_438_err){if (!$p['isinstance']($pyjs_dbg_438_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_438_err);}throw $pyjs_dbg_438_err;
}})();
			$m['matrix'] = $tupleassign13[0];
			$m['control'] = $tupleassign13[1];
			$pyjs['track']['lineno']=602;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['pygame']['display']['setup']($m['run']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_439_err){if (!$p['isinstance']($pyjs_dbg_439_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_439_err);}throw $pyjs_dbg_439_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['main']['__name__'] = 'main';

		$m['main']['__bind_type__'] = 0;
		$m['main']['__args__'] = [null,null];
		$pyjs['track']['lineno']=605;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_440_err){if (!$p['isinstance']($pyjs_dbg_440_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_440_err);}throw $pyjs_dbg_440_err;
}})()) {
			$pyjs['track']['lineno']=606;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['main']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_441_err){if (!$p['isinstance']($pyjs_dbg_441_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_441_err);}throw $pyjs_dbg_441_err;
}})();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end serpentduel */


/* end module: serpentduel */


/*
PYJS_DEPS: ['pyjsdl', 'random']
*/
