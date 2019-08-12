/* start module: pyjsdl.sprite */
$pyjs['loaded_modules']['pyjsdl.sprite'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.sprite']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.sprite'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.sprite'];
	$m['__repr__'] = function() { return '<module: pyjsdl.sprite>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.sprite';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['sprite'] = $pyjs['loaded_modules']['pyjsdl.sprite'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.sprite.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.sprite.py, line 4:\n    from pyjsdl.rect import rectPool';
		$m.__track_lines__[5] = 'pyjsdl.sprite.py, line 5:\n    from pyjsdl import mask';
		$m.__track_lines__[7] = "pyjsdl.sprite.py, line 7:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[10] = 'pyjsdl.sprite.py, line 10:\n    def id(obj):';
		$m.__track_lines__[11] = 'pyjsdl.sprite.py, line 11:\n    return obj._identity';
		$m.__track_lines__[14] = 'pyjsdl.sprite.py, line 14:\n    class Sprite(object):';
		$m.__track_lines__[26] = 'pyjsdl.sprite.py, line 26:\n    _identity = 0';
		$m.__track_lines__[28] = 'pyjsdl.sprite.py, line 28:\n    def __init__(self, *groups):';
		$m.__track_lines__[34] = 'pyjsdl.sprite.py, line 34:\n    self._identity = Sprite._identity';
		$m.__track_lines__[35] = 'pyjsdl.sprite.py, line 35:\n    Sprite._identity += 1';
		$m.__track_lines__[36] = 'pyjsdl.sprite.py, line 36:\n    self._groups = {}';
		$m.__track_lines__[37] = 'pyjsdl.sprite.py, line 37:\n    if groups:';
		$m.__track_lines__[38] = 'pyjsdl.sprite.py, line 38:\n    self.add(*groups)';
		$m.__track_lines__[40] = 'pyjsdl.sprite.py, line 40:\n    def __repr__(self):';
		$m.__track_lines__[44] = 'pyjsdl.sprite.py, line 44:\n    return "%s(in %d groups)" % (self.__class__, len(self._groups))';
		$m.__track_lines__[46] = 'pyjsdl.sprite.py, line 46:\n    def add(self, *groups):';
		$m.__track_lines__[50] = 'pyjsdl.sprite.py, line 50:\n    for group in groups:';
		$m.__track_lines__[51] = "pyjsdl.sprite.py, line 51:\n    if hasattr(group, '_sprites'):";
		$m.__track_lines__[52] = 'pyjsdl.sprite.py, line 52:\n    group.add(self)';
		$m.__track_lines__[54] = 'pyjsdl.sprite.py, line 54:\n    self.add(*group)';
		$m.__track_lines__[55] = 'pyjsdl.sprite.py, line 55:\n    return None';
		$m.__track_lines__[57] = 'pyjsdl.sprite.py, line 57:\n    def remove(self, *groups):';
		$m.__track_lines__[61] = 'pyjsdl.sprite.py, line 61:\n    for group in groups:';
		$m.__track_lines__[62] = "pyjsdl.sprite.py, line 62:\n    if hasattr(group, '_sprites'):";
		$m.__track_lines__[63] = 'pyjsdl.sprite.py, line 63:\n    group.remove(self)';
		$m.__track_lines__[65] = 'pyjsdl.sprite.py, line 65:\n    self.remove(*group)';
		$m.__track_lines__[66] = 'pyjsdl.sprite.py, line 66:\n    return None';
		$m.__track_lines__[68] = 'pyjsdl.sprite.py, line 68:\n    def kill(self):';
		$m.__track_lines__[72] = 'pyjsdl.sprite.py, line 72:\n    for group in self._groups.values():';
		$m.__track_lines__[73] = 'pyjsdl.sprite.py, line 73:\n    group.remove(self)';
		$m.__track_lines__[74] = 'pyjsdl.sprite.py, line 74:\n    return None';
		$m.__track_lines__[76] = 'pyjsdl.sprite.py, line 76:\n    def alive(self):';
		$m.__track_lines__[80] = 'pyjsdl.sprite.py, line 80:\n    if self._groups:';
		$m.__track_lines__[81] = 'pyjsdl.sprite.py, line 81:\n    return True';
		$m.__track_lines__[83] = 'pyjsdl.sprite.py, line 83:\n    return False';
		$m.__track_lines__[85] = 'pyjsdl.sprite.py, line 85:\n    def groups(self):';
		$m.__track_lines__[89] = 'pyjsdl.sprite.py, line 89:\n    return self._groups.values()';
		$m.__track_lines__[91] = 'pyjsdl.sprite.py, line 91:\n    def update(self, *args):';
		$m.__track_lines__[95] = 'pyjsdl.sprite.py, line 95:\n    pass';
		$m.__track_lines__[98] = 'pyjsdl.sprite.py, line 98:\n    class DirtySprite(Sprite):';
		$m.__track_lines__[106] = 'pyjsdl.sprite.py, line 106:\n    def __init__(self, *groups):';
		$m.__track_lines__[110] = 'pyjsdl.sprite.py, line 110:\n    Sprite.__init__(self, *groups)';
		$m.__track_lines__[113] = 'pyjsdl.sprite.py, line 113:\n    class Group(object):';
		$m.__track_lines__[128] = 'pyjsdl.sprite.py, line 128:\n    _identity = 0';
		$m.__track_lines__[130] = 'pyjsdl.sprite.py, line 130:\n    def __init__(self, *sprites):';
		$m.__track_lines__[135] = 'pyjsdl.sprite.py, line 135:\n    self._identity = Group._identity';
		$m.__track_lines__[136] = 'pyjsdl.sprite.py, line 136:\n    Group._identity += 1';
		$m.__track_lines__[137] = 'pyjsdl.sprite.py, line 137:\n    self._sprites = {}';
		$m.__track_lines__[138] = 'pyjsdl.sprite.py, line 138:\n    if sprites:';
		$m.__track_lines__[139] = 'pyjsdl.sprite.py, line 139:\n    self.add(*sprites)';
		$m.__track_lines__[140] = 'pyjsdl.sprite.py, line 140:\n    self._clear_active = False';
		$m.__track_lines__[141] = 'pyjsdl.sprite.py, line 141:\n    self._sprites_drawn = {}';
		$m.__track_lines__[143] = 'pyjsdl.sprite.py, line 143:\n    def __repr__(self):';
		$m.__track_lines__[147] = 'pyjsdl.sprite.py, line 147:\n    return "%s(%d sprites)" % (self.__class__, len(self._sprites))';
		$m.__track_lines__[149] = 'pyjsdl.sprite.py, line 149:\n    def __iter__(self):';
		$m.__track_lines__[153] = 'pyjsdl.sprite.py, line 153:\n    return self._sprites.itervalues()';
		$m.__track_lines__[155] = 'pyjsdl.sprite.py, line 155:\n    def __contains__(self, sprite):';
		$m.__track_lines__[159] = 'pyjsdl.sprite.py, line 159:\n    return id(sprite) in self._sprites';
		$m.__track_lines__[161] = 'pyjsdl.sprite.py, line 161:\n    def __len__(self):';
		$m.__track_lines__[165] = 'pyjsdl.sprite.py, line 165:\n    return len(self._sprites)';
		$m.__track_lines__[167] = 'pyjsdl.sprite.py, line 167:\n    def sprites(self):';
		$m.__track_lines__[171] = 'pyjsdl.sprite.py, line 171:\n    return self._sprites.values()';
		$m.__track_lines__[173] = 'pyjsdl.sprite.py, line 173:\n    def copy(self):';
		$m.__track_lines__[177] = 'pyjsdl.sprite.py, line 177:\n    newgroup = self.__class__()';
		$m.__track_lines__[178] = 'pyjsdl.sprite.py, line 178:\n    newgroup._sprites = self._sprites.copy()';
		$m.__track_lines__[179] = 'pyjsdl.sprite.py, line 179:\n    return newgroup';
		$m.__track_lines__[181] = 'pyjsdl.sprite.py, line 181:\n    def add(self, *sprites):';
		$m.__track_lines__[185] = 'pyjsdl.sprite.py, line 185:\n    for sprite in sprites:';
		$m.__track_lines__[186] = "pyjsdl.sprite.py, line 186:\n    if hasattr(sprite, '_groups'):";
		$m.__track_lines__[187] = 'pyjsdl.sprite.py, line 187:\n    spriteID = id(sprite)';
		$m.__track_lines__[188] = 'pyjsdl.sprite.py, line 188:\n    if spriteID not in self._sprites:';
		$m.__track_lines__[189] = 'pyjsdl.sprite.py, line 189:\n    self._sprites[spriteID] = sprite';
		$m.__track_lines__[190] = 'pyjsdl.sprite.py, line 190:\n    sprite._groups[id(self)] = self';
		$m.__track_lines__[192] = 'pyjsdl.sprite.py, line 192:\n    self.add(*sprite)';
		$m.__track_lines__[193] = 'pyjsdl.sprite.py, line 193:\n    return None';
		$m.__track_lines__[195] = 'pyjsdl.sprite.py, line 195:\n    def remove(self, *sprites):';
		$m.__track_lines__[199] = 'pyjsdl.sprite.py, line 199:\n    for sprite in sprites:';
		$m.__track_lines__[200] = "pyjsdl.sprite.py, line 200:\n    if hasattr(sprite, '_groups'):";
		$m.__track_lines__[201] = 'pyjsdl.sprite.py, line 201:\n    spriteID = id(sprite)';
		$m.__track_lines__[202] = 'pyjsdl.sprite.py, line 202:\n    if spriteID in self._sprites:';
		$m.__track_lines__[203] = 'pyjsdl.sprite.py, line 203:\n    del self._sprites[spriteID]';
		$m.__track_lines__[204] = 'pyjsdl.sprite.py, line 204:\n    del sprite._groups[id(self)]';
		$m.__track_lines__[206] = 'pyjsdl.sprite.py, line 206:\n    self.remove(*sprite)';
		$m.__track_lines__[207] = 'pyjsdl.sprite.py, line 207:\n    return None';
		$m.__track_lines__[209] = 'pyjsdl.sprite.py, line 209:\n    def has(self, *sprites):';
		$m.__track_lines__[213] = 'pyjsdl.sprite.py, line 213:\n    for sprite in sprites:';
		$m.__track_lines__[214] = "pyjsdl.sprite.py, line 214:\n    if hasattr(sprite, '_groups'):";
		$m.__track_lines__[215] = 'pyjsdl.sprite.py, line 215:\n    if id(sprite) not in self._sprites:';
		$m.__track_lines__[216] = 'pyjsdl.sprite.py, line 216:\n    return False';
		$m.__track_lines__[218] = 'pyjsdl.sprite.py, line 218:\n    if not self.has(*sprite):';
		$m.__track_lines__[219] = 'pyjsdl.sprite.py, line 219:\n    return False';
		$m.__track_lines__[220] = 'pyjsdl.sprite.py, line 220:\n    return True';
		$m.__track_lines__[222] = 'pyjsdl.sprite.py, line 222:\n    def draw(self, surface):';
		$m.__track_lines__[226] = 'pyjsdl.sprite.py, line 226:\n    surface._blits(self._sprites.itervalues())';
		$m.__track_lines__[227] = 'pyjsdl.sprite.py, line 227:\n    if self._clear_active:';
		$m.__track_lines__[228] = 'pyjsdl.sprite.py, line 228:\n    rectPool.extend(self._sprites_drawn.itervalues())';
		$m.__track_lines__[229] = 'pyjsdl.sprite.py, line 229:\n    self._sprites_drawn.clear()';
		$m.__track_lines__[230] = 'pyjsdl.sprite.py, line 230:\n    for sprite in self._sprites:';
		$m.__track_lines__[231] = 'pyjsdl.sprite.py, line 231:\n    self._sprites_drawn[sprite] = rectPool.copy(self._sprites[sprite].rect)';
		$m.__track_lines__[232] = 'pyjsdl.sprite.py, line 232:\n    return None';
		$m.__track_lines__[234] = 'pyjsdl.sprite.py, line 234:\n    def clear(self, surface, background):';
		$m.__track_lines__[239] = 'pyjsdl.sprite.py, line 239:\n    self._clear_active = True';
		$m.__track_lines__[240] = "pyjsdl.sprite.py, line 240:\n    if hasattr(background, 'width'):";
		$m.__track_lines__[241] = 'pyjsdl.sprite.py, line 241:\n    surface._blit_clear(background, self._sprites_drawn.itervalues())';
		$m.__track_lines__[243] = 'pyjsdl.sprite.py, line 243:\n    for sprite in self._sprites_drawn:';
		$m.__track_lines__[244] = 'pyjsdl.sprite.py, line 244:\n    background(surface, self._sprites_drawn[sprite])';
		$m.__track_lines__[246] = 'pyjsdl.sprite.py, line 246:\n    def empty(self):';
		$m.__track_lines__[250] = 'pyjsdl.sprite.py, line 250:\n    for sprite in self._sprites.itervalues():';
		$m.__track_lines__[251] = 'pyjsdl.sprite.py, line 251:\n    del sprite._groups[id(self)]';
		$m.__track_lines__[252] = 'pyjsdl.sprite.py, line 252:\n    self._sprites.clear()';
		$m.__track_lines__[253] = 'pyjsdl.sprite.py, line 253:\n    return None';
		$m.__track_lines__[255] = 'pyjsdl.sprite.py, line 255:\n    def update(self, *args):';
		$m.__track_lines__[259] = 'pyjsdl.sprite.py, line 259:\n    for sprite in self._sprites.values():';
		$m.__track_lines__[260] = 'pyjsdl.sprite.py, line 260:\n    sprite.update(*args)';
		$m.__track_lines__[261] = 'pyjsdl.sprite.py, line 261:\n    return None';
		$m.__track_lines__[264] = 'pyjsdl.sprite.py, line 264:\n    class GroupSingle(Group):';
		$m.__track_lines__[271] = 'pyjsdl.sprite.py, line 271:\n    def __init__(self, sprite=None):';
		$m.__track_lines__[276] = 'pyjsdl.sprite.py, line 276:\n    if sprite:';
		$m.__track_lines__[277] = 'pyjsdl.sprite.py, line 277:\n    Group.__init__(self, sprite)';
		$m.__track_lines__[279] = 'pyjsdl.sprite.py, line 279:\n    Group.__init__(self)';
		$m.__track_lines__[281] = 'pyjsdl.sprite.py, line 281:\n    def __getattr__(self, attr):';
		$m.__track_lines__[285] = "pyjsdl.sprite.py, line 285:\n    if attr == 'sprite':";
		$m.__track_lines__[286] = 'pyjsdl.sprite.py, line 286:\n    if self._sprites:';
		$m.__track_lines__[287] = 'pyjsdl.sprite.py, line 287:\n    return self._sprites.values()[0]';
		$m.__track_lines__[289] = 'pyjsdl.sprite.py, line 289:\n    return None';
		$m.__track_lines__[291] = 'pyjsdl.sprite.py, line 291:\n    def add(self, sprite):';
		$m.__track_lines__[295] = 'pyjsdl.sprite.py, line 295:\n    self.empty()';
		$m.__track_lines__[296] = 'pyjsdl.sprite.py, line 296:\n    self._sprites[id(sprite)] = sprite';
		$m.__track_lines__[297] = 'pyjsdl.sprite.py, line 297:\n    sprite._groups[id(self)] = self';
		$m.__track_lines__[298] = 'pyjsdl.sprite.py, line 298:\n    return None';
		$m.__track_lines__[300] = 'pyjsdl.sprite.py, line 300:\n    def update(self, *args):';
		$m.__track_lines__[304] = 'pyjsdl.sprite.py, line 304:\n    if self._sprites:';
		$m.__track_lines__[305] = 'pyjsdl.sprite.py, line 305:\n    self._sprites.values()[0].update(*args)';
		$m.__track_lines__[306] = 'pyjsdl.sprite.py, line 306:\n    return None';
		$m.__track_lines__[309] = 'pyjsdl.sprite.py, line 309:\n    class RenderUpdates(Group):';
		$m.__track_lines__[316] = 'pyjsdl.sprite.py, line 316:\n    def __init__(self, *sprites):';
		$m.__track_lines__[321] = 'pyjsdl.sprite.py, line 321:\n    Group.__init__(self, *sprites)';
		$m.__track_lines__[322] = 'pyjsdl.sprite.py, line 322:\n    self.changed_areas = []';
		$m.__track_lines__[324] = 'pyjsdl.sprite.py, line 324:\n    def draw(self, surface):';
		$m.__track_lines__[329] = 'pyjsdl.sprite.py, line 329:\n    surface._blits(self._sprites.itervalues())';
		$m.__track_lines__[330] = 'pyjsdl.sprite.py, line 330:\n    if self._clear_active:';
		$m.__track_lines__[331] = 'pyjsdl.sprite.py, line 331:\n    rectPool.extend(self.changed_areas)';
		$m.__track_lines__[332] = 'pyjsdl.sprite.py, line 332:\n    self.changed_areas[:] = []';
		$m.__track_lines__[333] = 'pyjsdl.sprite.py, line 333:\n    for sprite in self._sprites:';
		$m.__track_lines__[334] = 'pyjsdl.sprite.py, line 334:\n    if sprite in self._sprites_drawn:';
		$m.__track_lines__[335] = 'pyjsdl.sprite.py, line 335:\n    if self._sprites_drawn[sprite].intersects(self._sprites[sprite].rect):';
		$m.__track_lines__[336] = 'pyjsdl.sprite.py, line 336:\n    self._sprites_drawn[sprite].union_ip(self._sprites[sprite].rect)';
		$m.__track_lines__[338] = 'pyjsdl.sprite.py, line 338:\n    self.changed_areas.append(rectPool.copy(self._sprites[sprite].rect))';
		$m.__track_lines__[340] = 'pyjsdl.sprite.py, line 340:\n    self.changed_areas.append(rectPool.copy(self._sprites[sprite].rect))';
		$m.__track_lines__[341] = 'pyjsdl.sprite.py, line 341:\n    self.changed_areas.extend(self._sprites_drawn.itervalues())';
		$m.__track_lines__[342] = 'pyjsdl.sprite.py, line 342:\n    self._sprites_drawn.clear()';
		$m.__track_lines__[343] = 'pyjsdl.sprite.py, line 343:\n    for sprite in self._sprites:';
		$m.__track_lines__[344] = 'pyjsdl.sprite.py, line 344:\n    self._sprites_drawn[sprite] = rectPool.copy(self._sprites[sprite].rect)';
		$m.__track_lines__[346] = 'pyjsdl.sprite.py, line 346:\n    rectPool.extend(self.changed_areas)';
		$m.__track_lines__[347] = 'pyjsdl.sprite.py, line 347:\n    self.changed_areas[:] = []';
		$m.__track_lines__[348] = 'pyjsdl.sprite.py, line 348:\n    self.changed_areas.extend([rectPool.copy(sprite.rect) for sprite in self._sprites.itervalues()])';
		$m.__track_lines__[349] = 'pyjsdl.sprite.py, line 349:\n    return self.changed_areas';
		$m.__track_lines__[352] = 'pyjsdl.sprite.py, line 352:\n    class OrderedUpdates(RenderUpdates):';
		$m.__track_lines__[359] = 'pyjsdl.sprite.py, line 359:\n    def __init__(self, *sprites):';
		$m.__track_lines__[364] = 'pyjsdl.sprite.py, line 364:\n    self.order = {}';
		$m.__track_lines__[365] = 'pyjsdl.sprite.py, line 365:\n    self.place = {}';
		$m.__track_lines__[366] = 'pyjsdl.sprite.py, line 366:\n    self.range = 1000';
		$m.__track_lines__[367] = 'pyjsdl.sprite.py, line 367:\n    self.index = iter(xrange(self.range))';
		$m.__track_lines__[368] = 'pyjsdl.sprite.py, line 368:\n    self.sort = None';
		$m.__track_lines__[369] = 'pyjsdl.sprite.py, line 369:\n    for sprite in sprites:';
		$m.__track_lines__[370] = 'pyjsdl.sprite.py, line 370:\n    if sprite not in self._sprites:';
		$m.__track_lines__[371] = 'pyjsdl.sprite.py, line 371:\n    spriteID = id(sprite)';
		$m.__track_lines__[372] = 'pyjsdl.sprite.py, line 372:\n    index = self.index.next()';
		$m.__track_lines__[373] = 'pyjsdl.sprite.py, line 373:\n    self.order[index] = spriteID';
		$m.__track_lines__[374] = 'pyjsdl.sprite.py, line 374:\n    self.place[spriteID] = index';
		$m.__track_lines__[375] = 'pyjsdl.sprite.py, line 375:\n    RenderUpdates.__init__(self, *sprites)';
		$m.__track_lines__[377] = 'pyjsdl.sprite.py, line 377:\n    def __iter__(self):';
		$m.__track_lines__[381] = 'pyjsdl.sprite.py, line 381:\n    if self.sort:';
		$m.__track_lines__[382] = 'pyjsdl.sprite.py, line 382:\n    order_sprite = iter(self.sort)';
		$m.__track_lines__[384] = 'pyjsdl.sprite.py, line 384:\n    keys = self.order.keys()';
		$m.__track_lines__[385] = 'pyjsdl.sprite.py, line 385:\n    keys.sort()';
		$m.__track_lines__[386] = 'pyjsdl.sprite.py, line 386:\n    self.sort = [self._sprites[self.order[key]] for key in keys]';
		$m.__track_lines__[387] = 'pyjsdl.sprite.py, line 387:\n    order_sprite = iter(self.sort)';
		$m.__track_lines__[388] = 'pyjsdl.sprite.py, line 388:\n    return order_sprite';
		$m.__track_lines__[390] = 'pyjsdl.sprite.py, line 390:\n    def sprites(self):';
		$m.__track_lines__[394] = 'pyjsdl.sprite.py, line 394:\n    if self.sort:';
		$m.__track_lines__[395] = 'pyjsdl.sprite.py, line 395:\n    order_sprite = self.sort[:]';
		$m.__track_lines__[397] = 'pyjsdl.sprite.py, line 397:\n    keys = self.order.keys()';
		$m.__track_lines__[398] = 'pyjsdl.sprite.py, line 398:\n    keys.sort()';
		$m.__track_lines__[399] = 'pyjsdl.sprite.py, line 399:\n    self.sort = [self._sprites[self.order[key]] for key in keys]';
		$m.__track_lines__[400] = 'pyjsdl.sprite.py, line 400:\n    order_sprite = self.sort[:]';
		$m.__track_lines__[401] = 'pyjsdl.sprite.py, line 401:\n    return order_sprite';
		$m.__track_lines__[403] = 'pyjsdl.sprite.py, line 403:\n    def copy(self):';
		$m.__track_lines__[407] = 'pyjsdl.sprite.py, line 407:\n    newgroup = RenderUpdates.copy(self)';
		$m.__track_lines__[408] = 'pyjsdl.sprite.py, line 408:\n    newgroup.order = self.order.copy()';
		$m.__track_lines__[409] = 'pyjsdl.sprite.py, line 409:\n    newgroup.place = self.place.copy()';
		$m.__track_lines__[410] = 'pyjsdl.sprite.py, line 410:\n    newgroup.range = self.range';
		$m.__track_lines__[411] = 'pyjsdl.sprite.py, line 411:\n    newgroup.index = iter(xrange(max(self.order.keys())+1,self.range))';
		$m.__track_lines__[412] = 'pyjsdl.sprite.py, line 412:\n    return newgroup';
		$m.__track_lines__[414] = 'pyjsdl.sprite.py, line 414:\n    def add(self, *sprites):';
		$m.__track_lines__[418] = 'pyjsdl.sprite.py, line 418:\n    for sprite in sprites:';
		$m.__track_lines__[419] = 'pyjsdl.sprite.py, line 419:\n    if sprite not in self._sprites:';
		$m.__track_lines__[420] = 'pyjsdl.sprite.py, line 420:\n    index = self._get_index()';
		$m.__track_lines__[421] = 'pyjsdl.sprite.py, line 421:\n    if index is not None:';
		$m.__track_lines__[422] = 'pyjsdl.sprite.py, line 422:\n    spriteID = id(sprite)';
		$m.__track_lines__[423] = 'pyjsdl.sprite.py, line 423:\n    self.order[index] = spriteID';
		$m.__track_lines__[424] = 'pyjsdl.sprite.py, line 424:\n    self.place[spriteID] = index';
		$m.__track_lines__[426] = 'pyjsdl.sprite.py, line 426:\n    keys = self.order.keys()';
		$m.__track_lines__[427] = 'pyjsdl.sprite.py, line 427:\n    keys.sort()';
		$m.__track_lines__[428] = 'pyjsdl.sprite.py, line 428:\n    if len(keys)*2 > self.range:';
		$m.__track_lines__[429] = 'pyjsdl.sprite.py, line 429:\n    self.range = len(keys)*2';
		$m.__track_lines__[430] = 'pyjsdl.sprite.py, line 430:\n    self.index = iter(xrange(self.range))';
		$m.__track_lines__[431] = 'pyjsdl.sprite.py, line 431:\n    order = self.order';
		$m.__track_lines__[432] = 'pyjsdl.sprite.py, line 432:\n    self.order = {}';
		$m.__track_lines__[433] = 'pyjsdl.sprite.py, line 433:\n    self.place = {}';
		$m.__track_lines__[434] = 'pyjsdl.sprite.py, line 434:\n    for key in keys:';
		$m.__track_lines__[435] = 'pyjsdl.sprite.py, line 435:\n    index = self.index.next()';
		$m.__track_lines__[436] = 'pyjsdl.sprite.py, line 436:\n    self.order[index] = order[key]';
		$m.__track_lines__[437] = 'pyjsdl.sprite.py, line 437:\n    self.place[order[key]] = index';
		$m.__track_lines__[438] = 'pyjsdl.sprite.py, line 438:\n    index = self.index.next()';
		$m.__track_lines__[439] = 'pyjsdl.sprite.py, line 439:\n    spriteID = id(sprite)';
		$m.__track_lines__[440] = 'pyjsdl.sprite.py, line 440:\n    self.order[index] = spriteID';
		$m.__track_lines__[441] = 'pyjsdl.sprite.py, line 441:\n    self.place[spriteID] = index';
		$m.__track_lines__[442] = 'pyjsdl.sprite.py, line 442:\n    self.sort = None';
		$m.__track_lines__[443] = 'pyjsdl.sprite.py, line 443:\n    RenderUpdates.add(self, *sprites)';
		$m.__track_lines__[444] = 'pyjsdl.sprite.py, line 444:\n    return None';
		$m.__track_lines__[446] = 'pyjsdl.sprite.py, line 446:\n    def _get_index(self):';
		$m.__track_lines__[447] = 'pyjsdl.sprite.py, line 447:\n    try:';
		$m.__track_lines__[448] = 'pyjsdl.sprite.py, line 448:\n    return self.index.next()';
		$m.__track_lines__[450] = 'pyjsdl.sprite.py, line 450:\n    return None';
		$m.__track_lines__[452] = 'pyjsdl.sprite.py, line 452:\n    def remove(self, *sprites):';
		$m.__track_lines__[456] = 'pyjsdl.sprite.py, line 456:\n    for sprite in sprites:';
		$m.__track_lines__[457] = 'pyjsdl.sprite.py, line 457:\n    spriteID = id(sprite)';
		$m.__track_lines__[458] = 'pyjsdl.sprite.py, line 458:\n    if spriteID in self.place:';
		$m.__track_lines__[459] = 'pyjsdl.sprite.py, line 459:\n    del self.order[self.place[spriteID]]';
		$m.__track_lines__[460] = 'pyjsdl.sprite.py, line 460:\n    del self.place[spriteID]';
		$m.__track_lines__[461] = 'pyjsdl.sprite.py, line 461:\n    self.sort = None';
		$m.__track_lines__[462] = 'pyjsdl.sprite.py, line 462:\n    RenderUpdates.remove(self, *sprites)';
		$m.__track_lines__[463] = 'pyjsdl.sprite.py, line 463:\n    return None';
		$m.__track_lines__[465] = 'pyjsdl.sprite.py, line 465:\n    def empty(self):';
		$m.__track_lines__[469] = 'pyjsdl.sprite.py, line 469:\n    self.order = {}';
		$m.__track_lines__[470] = 'pyjsdl.sprite.py, line 470:\n    self.place = {}';
		$m.__track_lines__[471] = 'pyjsdl.sprite.py, line 471:\n    self.index = iter(xrange(self.range))';
		$m.__track_lines__[472] = 'pyjsdl.sprite.py, line 472:\n    self.sort = None';
		$m.__track_lines__[473] = 'pyjsdl.sprite.py, line 473:\n    RenderUpdates.empty(self)';
		$m.__track_lines__[475] = 'pyjsdl.sprite.py, line 475:\n    def draw(self, surface):';
		$m.__track_lines__[479] = 'pyjsdl.sprite.py, line 479:\n    if self.sort:';
		$m.__track_lines__[480] = 'pyjsdl.sprite.py, line 480:\n    order_sprite = iter(self.sort)';
		$m.__track_lines__[482] = 'pyjsdl.sprite.py, line 482:\n    keys = self.order.keys()';
		$m.__track_lines__[483] = 'pyjsdl.sprite.py, line 483:\n    keys.sort()';
		$m.__track_lines__[484] = 'pyjsdl.sprite.py, line 484:\n    self.sort = [self._sprites[self.order[key]] for key in keys]';
		$m.__track_lines__[485] = 'pyjsdl.sprite.py, line 485:\n    order_sprite = iter(self.sort)';
		$m.__track_lines__[486] = 'pyjsdl.sprite.py, line 486:\n    surface._blits(order_sprite)';
		$m.__track_lines__[487] = 'pyjsdl.sprite.py, line 487:\n    if self._clear_active:';
		$m.__track_lines__[488] = 'pyjsdl.sprite.py, line 488:\n    rectPool.extend(self.changed_areas)';
		$m.__track_lines__[489] = 'pyjsdl.sprite.py, line 489:\n    self.changed_areas[:] = []';
		$m.__track_lines__[490] = 'pyjsdl.sprite.py, line 490:\n    for sprite in self._sprites:';
		$m.__track_lines__[491] = 'pyjsdl.sprite.py, line 491:\n    if sprite in self._sprites_drawn:';
		$m.__track_lines__[492] = 'pyjsdl.sprite.py, line 492:\n    if self._sprites_drawn[sprite].intersects(self._sprites[sprite].rect):';
		$m.__track_lines__[493] = 'pyjsdl.sprite.py, line 493:\n    self._sprites_drawn[sprite].union_ip(self._sprites[sprite].rect)';
		$m.__track_lines__[495] = 'pyjsdl.sprite.py, line 495:\n    self.changed_areas.append(rectPool.copy(self._sprites[sprite].rect))';
		$m.__track_lines__[497] = 'pyjsdl.sprite.py, line 497:\n    self.changed_areas.append(rectPool.copy(self._sprites[sprite].rect))';
		$m.__track_lines__[498] = 'pyjsdl.sprite.py, line 498:\n    self.changed_areas.extend(self._sprites_drawn.itervalues())';
		$m.__track_lines__[499] = 'pyjsdl.sprite.py, line 499:\n    self._sprites_drawn.clear()';
		$m.__track_lines__[500] = 'pyjsdl.sprite.py, line 500:\n    for sprite in self._sprites:';
		$m.__track_lines__[501] = 'pyjsdl.sprite.py, line 501:\n    self._sprites_drawn[sprite] = rectPool.copy(self._sprites[sprite].rect)';
		$m.__track_lines__[503] = 'pyjsdl.sprite.py, line 503:\n    rectPool.extend(self.changed_areas)';
		$m.__track_lines__[504] = 'pyjsdl.sprite.py, line 504:\n    self.changed_areas[:] = []';
		$m.__track_lines__[505] = 'pyjsdl.sprite.py, line 505:\n    self.changed_areas.extend([rectPool.copy(sprite.rect) for sprite in self._sprites.itervalues()])';
		$m.__track_lines__[506] = 'pyjsdl.sprite.py, line 506:\n    return self.changed_areas';
		$m.__track_lines__[509] = 'pyjsdl.sprite.py, line 509:\n    class LayeredUpdates(OrderedUpdates):';
		$m.__track_lines__[517] = 'pyjsdl.sprite.py, line 517:\n    def __init__(self, *sprites):';
		$m.__track_lines__[521] = 'pyjsdl.sprite.py, line 521:\n    OrderedUpdates(self, *sprites)';
		$m.__track_lines__[524] = 'pyjsdl.sprite.py, line 524:\n    class LayeredDirty(LayeredUpdates):';
		$m.__track_lines__[532] = 'pyjsdl.sprite.py, line 532:\n    def __init__(self, *sprites):';
		$m.__track_lines__[536] = 'pyjsdl.sprite.py, line 536:\n    LayeredUpdates(self, *sprites)';
		$m.__track_lines__[539] = 'pyjsdl.sprite.py, line 539:\n    def spritecollide(sprite, group, dokill, collided=None):';
		$m.__track_lines__[547] = 'pyjsdl.sprite.py, line 547:\n    collide = []';
		$m.__track_lines__[548] = 'pyjsdl.sprite.py, line 548:\n    for sprites in group:';
		$m.__track_lines__[549] = 'pyjsdl.sprite.py, line 549:\n    if sprite.rect.intersects(sprites.rect):';
		$m.__track_lines__[550] = 'pyjsdl.sprite.py, line 550:\n    if collided:';
		$m.__track_lines__[551] = 'pyjsdl.sprite.py, line 551:\n    if not collided(sprite,sprites):';
		$m.__track_lines__[552] = 'pyjsdl.sprite.py, line 552:\n    continue';
		$m.__track_lines__[553] = 'pyjsdl.sprite.py, line 553:\n    collide.append(sprites)';
		$m.__track_lines__[554] = 'pyjsdl.sprite.py, line 554:\n    if collide and dokill:';
		$m.__track_lines__[555] = 'pyjsdl.sprite.py, line 555:\n    for sprite in collide:';
		$m.__track_lines__[556] = 'pyjsdl.sprite.py, line 556:\n    sprite.kill()';
		$m.__track_lines__[557] = 'pyjsdl.sprite.py, line 557:\n    return collide';
		$m.__track_lines__[560] = 'pyjsdl.sprite.py, line 560:\n    def collide_rect(sprite1, sprite2):';
		$m.__track_lines__[567] = 'pyjsdl.sprite.py, line 567:\n    return sprite1.rect.intersects(sprite2.rect)';
		$m.__track_lines__[570] = 'pyjsdl.sprite.py, line 570:\n    def collide_rect_ratio(ratio):';
		$m.__track_lines__[578] = 'pyjsdl.sprite.py, line 578:\n    obj = _collide_rect_ratio(ratio)';
		$m.__track_lines__[579] = 'pyjsdl.sprite.py, line 579:\n    return lambda sprite1,sprite2: obj.__call__(sprite1,sprite2)';
		$m.__track_lines__[582] = 'pyjsdl.sprite.py, line 582:\n    class _collide_rect_ratio(object):';
		$m.__track_lines__[584] = "pyjsdl.sprite.py, line 584:\n    __slots__ = ['ratio']";
		$m.__track_lines__[586] = 'pyjsdl.sprite.py, line 586:\n    def __init__(self, ratio):';
		$m.__track_lines__[587] = 'pyjsdl.sprite.py, line 587:\n    self.ratio = ratio';
		$m.__track_lines__[589] = 'pyjsdl.sprite.py, line 589:\n    def __call__(self, sprite1, sprite2):   #__call__ not implemented in pyjs';
		$m.__track_lines__[590] = 'pyjsdl.sprite.py, line 590:\n    r = sprite1.rect';
		$m.__track_lines__[591] = 'pyjsdl.sprite.py, line 591:\n    x = (r.width*self.ratio)-r.width';
		$m.__track_lines__[592] = 'pyjsdl.sprite.py, line 592:\n    y = (r.height*self.ratio)-r.height';
		$m.__track_lines__[593] = 'pyjsdl.sprite.py, line 593:\n    r1 = rectPool.get(r.x-int(x*0.5), r.y-int(y*0.5), r.width+int(x), r.height+int(y))';
		$m.__track_lines__[594] = 'pyjsdl.sprite.py, line 594:\n    r = sprite2.rect';
		$m.__track_lines__[595] = 'pyjsdl.sprite.py, line 595:\n    x = (r.width*self.ratio)-r.width';
		$m.__track_lines__[596] = 'pyjsdl.sprite.py, line 596:\n    y = (r.height*self.ratio)-r.height';
		$m.__track_lines__[597] = 'pyjsdl.sprite.py, line 597:\n    r2 = rectPool.get(r.x-int(x*0.5), r.y-int(y*0.5), r.width+int(x), r.height+int(y))';
		$m.__track_lines__[598] = 'pyjsdl.sprite.py, line 598:\n    collide = r1.intersects(r2)';
		$m.__track_lines__[599] = 'pyjsdl.sprite.py, line 599:\n    rectPool.extend((r1,r2))';
		$m.__track_lines__[600] = 'pyjsdl.sprite.py, line 600:\n    return collide';
		$m.__track_lines__[603] = 'pyjsdl.sprite.py, line 603:\n    def collide_circle(sprite1, sprite2):';
		$m.__track_lines__[611] = "pyjsdl.sprite.py, line 611:\n    if hasattr(sprite1, 'radius'):";
		$m.__track_lines__[612] = 'pyjsdl.sprite.py, line 612:\n    radius1 = sprite1.radius';
		$m.__track_lines__[614] = 'pyjsdl.sprite.py, line 614:\n    radius1 = ( (((sprite1.rect.width)**2) + ((sprite1.rect.height)**2))**0.5 ) * 0.5';
		$m.__track_lines__[615] = "pyjsdl.sprite.py, line 615:\n    if hasattr(sprite2, 'radius'):";
		$m.__track_lines__[616] = 'pyjsdl.sprite.py, line 616:\n    radius2 = sprite2.radius';
		$m.__track_lines__[618] = 'pyjsdl.sprite.py, line 618:\n    radius2 = ( (((sprite2.rect.width)**2) + ((sprite2.rect.height)**2))**0.5 ) * 0.5';
		$m.__track_lines__[619] = 'pyjsdl.sprite.py, line 619:\n    sx1 = (sprite1.rect.x+int(sprite1.rect.width*0.5))';
		$m.__track_lines__[620] = 'pyjsdl.sprite.py, line 620:\n    sy1 = (sprite1.rect.y+int(sprite1.rect.height*0.5))';
		$m.__track_lines__[621] = 'pyjsdl.sprite.py, line 621:\n    sx2 = (sprite2.rect.x+int(sprite2.rect.width*0.5))';
		$m.__track_lines__[622] = 'pyjsdl.sprite.py, line 622:\n    sy2 = (sprite2.rect.y+int(sprite2.rect.height*0.5))';
		$m.__track_lines__[623] = 'pyjsdl.sprite.py, line 623:\n    return ( ((sx1-sx2)**2 + (sy1-sy2)**2) ) < (radius1**2+radius2**2)';
		$m.__track_lines__[626] = 'pyjsdl.sprite.py, line 626:\n    def collide_circle_ratio(ratio):';
		$m.__track_lines__[635] = 'pyjsdl.sprite.py, line 635:\n    obj = _collide_circle_ratio(ratio)';
		$m.__track_lines__[636] = 'pyjsdl.sprite.py, line 636:\n    return lambda sprite1,sprite2: obj.__call__(sprite1,sprite2)';
		$m.__track_lines__[639] = 'pyjsdl.sprite.py, line 639:\n    class _collide_circle_ratio(object):';
		$m.__track_lines__[641] = "pyjsdl.sprite.py, line 641:\n    __slots__ = ['ratio']";
		$m.__track_lines__[643] = 'pyjsdl.sprite.py, line 643:\n    def __init__(self, ratio):';
		$m.__track_lines__[644] = 'pyjsdl.sprite.py, line 644:\n    self.ratio = ratio';
		$m.__track_lines__[646] = 'pyjsdl.sprite.py, line 646:\n    def __call__(self, sprite1, sprite2):   #__call__ not implemented in pyjs';
		$m.__track_lines__[647] = "pyjsdl.sprite.py, line 647:\n    if hasattr(sprite1, 'radius'):";
		$m.__track_lines__[648] = 'pyjsdl.sprite.py, line 648:\n    radius1 = sprite1.radius * self.ratio';
		$m.__track_lines__[650] = 'pyjsdl.sprite.py, line 650:\n    radius1 = ( (((sprite1.rect.width)**2) + ((sprite1.rect.height)**2))**0.5 ) * 0.5 * self.ratio';
		$m.__track_lines__[651] = "pyjsdl.sprite.py, line 651:\n    if hasattr(sprite2, 'radius'):";
		$m.__track_lines__[652] = 'pyjsdl.sprite.py, line 652:\n    radius2 = sprite2.radius * self.ratio';
		$m.__track_lines__[654] = 'pyjsdl.sprite.py, line 654:\n    radius2 = ( (((sprite2.rect.width)**2) + ((sprite2.rect.height)**2))**0.5 ) * 0.5 * self.ratio';
		$m.__track_lines__[655] = 'pyjsdl.sprite.py, line 655:\n    sx1 = (sprite1.rect.x+int(sprite1.rect.width*0.5))';
		$m.__track_lines__[656] = 'pyjsdl.sprite.py, line 656:\n    sy1 = (sprite1.rect.y+int(sprite1.rect.height*0.5))';
		$m.__track_lines__[657] = 'pyjsdl.sprite.py, line 657:\n    sx2 = (sprite2.rect.x+int(sprite2.rect.width*0.5))';
		$m.__track_lines__[658] = 'pyjsdl.sprite.py, line 658:\n    sy2 = (sprite2.rect.y+int(sprite2.rect.height*0.5))';
		$m.__track_lines__[659] = 'pyjsdl.sprite.py, line 659:\n    return ( ((sx1-sx2)**2 + (sy1-sy2)**2) ) < (radius1**2+radius2**2)';
		$m.__track_lines__[662] = 'pyjsdl.sprite.py, line 662:\n    def collide_mask(sprite1, sprite2):';
		$m.__track_lines__[670] = "pyjsdl.sprite.py, line 670:\n    if hasattr(sprite1, 'mask'):";
		$m.__track_lines__[671] = 'pyjsdl.sprite.py, line 671:\n    mask1 = sprite1.mask';
		$m.__track_lines__[673] = 'pyjsdl.sprite.py, line 673:\n    mask1 = mask.from_surface(sprite1.image)';
		$m.__track_lines__[674] = "pyjsdl.sprite.py, line 674:\n    if hasattr(sprite2, 'mask'):";
		$m.__track_lines__[675] = 'pyjsdl.sprite.py, line 675:\n    mask2 = sprite2.mask';
		$m.__track_lines__[677] = 'pyjsdl.sprite.py, line 677:\n    mask2 = mask.from_surface(sprite2.image)';
		$m.__track_lines__[678] = 'pyjsdl.sprite.py, line 678:\n    if mask1.overlap(mask2, (sprite2.rect.x-sprite1.rect.x,sprite2.rect.y-sprite1.rect.y)):';
		$m.__track_lines__[679] = 'pyjsdl.sprite.py, line 679:\n    return True';
		$m.__track_lines__[681] = 'pyjsdl.sprite.py, line 681:\n    return False';
		$m.__track_lines__[684] = 'pyjsdl.sprite.py, line 684:\n    def groupcollide(group1, group2, dokill1, dokill2):';
		$m.__track_lines__[691] = 'pyjsdl.sprite.py, line 691:\n    collide = {}';
		$m.__track_lines__[692] = 'pyjsdl.sprite.py, line 692:\n    for sprite1 in group1:';
		$m.__track_lines__[693] = 'pyjsdl.sprite.py, line 693:\n    for sprite2 in group2:';
		$m.__track_lines__[694] = 'pyjsdl.sprite.py, line 694:\n    if sprite1.rect.intersects(sprite2.rect):';
		$m.__track_lines__[695] = 'pyjsdl.sprite.py, line 695:\n    if sprite1 not in collide:';
		$m.__track_lines__[696] = 'pyjsdl.sprite.py, line 696:\n    collide[sprite1] = []';
		$m.__track_lines__[697] = 'pyjsdl.sprite.py, line 697:\n    collide[sprite1].append(sprite2)';
		$m.__track_lines__[698] = 'pyjsdl.sprite.py, line 698:\n    if collide:';
		$m.__track_lines__[699] = 'pyjsdl.sprite.py, line 699:\n    if dokill1:';
		$m.__track_lines__[700] = 'pyjsdl.sprite.py, line 700:\n    for sprite1 in collide:';
		$m.__track_lines__[701] = 'pyjsdl.sprite.py, line 701:\n    sprite1.kill()';
		$m.__track_lines__[702] = 'pyjsdl.sprite.py, line 702:\n    if dokill2:';
		$m.__track_lines__[703] = 'pyjsdl.sprite.py, line 703:\n    for sprite1 in collide:';
		$m.__track_lines__[704] = 'pyjsdl.sprite.py, line 704:\n    for sprite2 in collide[sprite1]:';
		$m.__track_lines__[705] = 'pyjsdl.sprite.py, line 705:\n    sprite2.kill()';
		$m.__track_lines__[706] = 'pyjsdl.sprite.py, line 706:\n    return collide';
		$m.__track_lines__[709] = 'pyjsdl.sprite.py, line 709:\n    def spritecollideany(sprite, group):';
		$m.__track_lines__[715] = 'pyjsdl.sprite.py, line 715:\n    for sprites in group:';
		$m.__track_lines__[716] = 'pyjsdl.sprite.py, line 716:\n    if sprite.rect.intersects(sprites.rect):';
		$m.__track_lines__[717] = 'pyjsdl.sprite.py, line 717:\n    return True';
		$m.__track_lines__[718] = 'pyjsdl.sprite.py, line 718:\n    return False';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_1000 = new $p['int'](1000);
		$pyjs['track']['module']='pyjsdl.sprite';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['rectPool'] = $p['___import___']('pyjsdl.rect.rectPool', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['mask'] = $p['___import___']('pyjsdl.mask', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=10;
		$m['id'] = function(obj) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.sprite','lineno':10};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=11;
			var $pyjs__ret = $p['getattr'](obj, '_identity');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['id']['__name__'] = 'id';

		$m['id']['__bind_type__'] = 0;
		$m['id']['__args__'] = [null,null,['obj']];
		$pyjs['track']['lineno']=14;
		$m['Sprite'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = 'e7e226e9373bf199aac669553a64e8ae';
			$pyjs['track']['lineno']=26;
			$cls_definition['_identity'] = $constant_int_0;
			$pyjs['track']['lineno']=28;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7e226e9373bf199aac669553a64e8ae') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':28};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=28;
				$pyjs['track']['lineno']=34;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_identity', $p['getattr']($m['Sprite'], '_identity')) : $p['setattr'](self, '_identity', $p['getattr']($m['Sprite'], '_identity')); 
				$pyjs['track']['lineno']=35;
				$m['Sprite']['__is_instance__'] && typeof $m['Sprite']['__setattr__'] == 'function' ? $m['Sprite']['__setattr__']('_identity', $p['__op_add']($add1=$p['getattr']($m['Sprite'], '_identity'),$add2=$constant_int_1)) : $p['setattr']($m['Sprite'], '_identity', $p['__op_add']($add1=$p['getattr']($m['Sprite'], '_identity'),$add2=$constant_int_1)); 
				$pyjs['track']['lineno']=36;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_groups', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) : $p['setattr'](self, '_groups', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()); 
				$pyjs['track']['lineno']=37;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](groups);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
					$pyjs['track']['lineno']=38;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(self, 'add', groups, null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['groups',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=40;
			$method = $pyjs__bind_method2('__repr__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7e226e9373bf199aac669553a64e8ae') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':40};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=40;
				$pyjs['track']['lineno']=44;
				$pyjs['track']['lineno']=44;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s(in %d groups)', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, '__class__'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, '_groups'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=46;
			$method = $pyjs__bind_method2('add', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7e226e9373bf199aac669553a64e8ae') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,group,$iter1_idx;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=46;
				$pyjs['track']['lineno']=50;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return groups;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					group = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=51;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['hasattr'](group, '_sprites');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
						$pyjs['track']['lineno']=52;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return group['add'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=54;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call(self, 'add', group, null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=55;
				$pyjs['track']['lineno']=55;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['groups',null,['self']]);
			$cls_definition['add'] = $method;
			$pyjs['track']['lineno']=57;
			$method = $pyjs__bind_method2('remove', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7e226e9373bf199aac669553a64e8ae') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,$pyjs__trackstack_size_1,group,$iter2_array;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':57};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=57;
				$pyjs['track']['lineno']=61;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return groups;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					group = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=62;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['hasattr'](group, '_sprites');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
						$pyjs['track']['lineno']=63;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return group['remove'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=65;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call(self, 'remove', group, null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=66;
				$pyjs['track']['lineno']=66;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['groups',null,['self']]);
			$cls_definition['remove'] = $method;
			$pyjs['track']['lineno']=68;
			$method = $pyjs__bind_method2('kill', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7e226e9373bf199aac669553a64e8ae') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,group,$iter3_type,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$iter3_nextval;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=72;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_groups']['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					group = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=73;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return group['remove'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=74;
				$pyjs['track']['lineno']=74;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['kill'] = $method;
			$pyjs['track']['lineno']=76;
			$method = $pyjs__bind_method2('alive', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7e226e9373bf199aac669553a64e8ae') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':76};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=76;
				$pyjs['track']['lineno']=80;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, '_groups'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
					$pyjs['track']['lineno']=81;
					$pyjs['track']['lineno']=81;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=83;
					$pyjs['track']['lineno']=83;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['alive'] = $method;
			$pyjs['track']['lineno']=85;
			$method = $pyjs__bind_method2('groups', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7e226e9373bf199aac669553a64e8ae') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':85};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=85;
				$pyjs['track']['lineno']=89;
				$pyjs['track']['lineno']=89;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_groups']['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['groups'] = $method;
			$pyjs['track']['lineno']=91;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7e226e9373bf199aac669553a64e8ae') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':91};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=91;
				$pyjs['track']['lineno']=95;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=14;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Sprite', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=98;
		$m['DirtySprite'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '478df509f357340d07da34dd7e734aa8';
			$pyjs['track']['lineno']=106;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '478df509f357340d07da34dd7e734aa8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':106};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=106;
				$pyjs['track']['lineno']=110;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['Sprite'], '__init__', groups, null, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['groups',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=98;
			var $bases = new Array($m['Sprite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DirtySprite', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=113;
		$m['Group'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '334458c91e9f5e15a3112aa6e55c0eb3';
			$pyjs['track']['lineno']=128;
			$cls_definition['_identity'] = $constant_int_0;
			$pyjs['track']['lineno']=130;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '334458c91e9f5e15a3112aa6e55c0eb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,$add4;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':130};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=130;
				$pyjs['track']['lineno']=135;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_identity', $p['getattr']($m['Group'], '_identity')) : $p['setattr'](self, '_identity', $p['getattr']($m['Group'], '_identity')); 
				$pyjs['track']['lineno']=136;
				$m['Group']['__is_instance__'] && typeof $m['Group']['__setattr__'] == 'function' ? $m['Group']['__setattr__']('_identity', $p['__op_add']($add3=$p['getattr']($m['Group'], '_identity'),$add4=$constant_int_1)) : $p['setattr']($m['Group'], '_identity', $p['__op_add']($add3=$p['getattr']($m['Group'], '_identity'),$add4=$constant_int_1)); 
				$pyjs['track']['lineno']=137;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_sprites', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()) : $p['setattr'](self, '_sprites', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()); 
				$pyjs['track']['lineno']=138;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](sprites);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
					$pyjs['track']['lineno']=139;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(self, 'add', sprites, null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				}
				$pyjs['track']['lineno']=140;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_clear_active', false) : $p['setattr'](self, '_clear_active', false); 
				$pyjs['track']['lineno']=141;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_sprites_drawn', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) : $p['setattr'](self, '_sprites_drawn', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=143;
			$method = $pyjs__bind_method2('__repr__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '334458c91e9f5e15a3112aa6e55c0eb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':143};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=143;
				$pyjs['track']['lineno']=147;
				$pyjs['track']['lineno']=147;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s(%d sprites)', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, '__class__'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, '_sprites'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=149;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '334458c91e9f5e15a3112aa6e55c0eb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':149};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=149;
				$pyjs['track']['lineno']=153;
				$pyjs['track']['lineno']=153;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_sprites']['itervalues']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=155;
			$method = $pyjs__bind_method2('__contains__', function(sprite) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sprite = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '334458c91e9f5e15a3112aa6e55c0eb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':155};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=155;
				$pyjs['track']['lineno']=159;
				$pyjs['track']['lineno']=159;
				var $pyjs__ret = $p['getattr'](self, '_sprites')['__contains__']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['id'](sprite);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sprite']]);
			$cls_definition['__contains__'] = $method;
			$pyjs['track']['lineno']=161;
			$method = $pyjs__bind_method2('__len__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '334458c91e9f5e15a3112aa6e55c0eb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':161};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=161;
				$pyjs['track']['lineno']=165;
				$pyjs['track']['lineno']=165;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, '_sprites'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs['track']['lineno']=167;
			$method = $pyjs__bind_method2('sprites', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '334458c91e9f5e15a3112aa6e55c0eb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':167};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=167;
				$pyjs['track']['lineno']=171;
				$pyjs['track']['lineno']=171;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_sprites']['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['sprites'] = $method;
			$pyjs['track']['lineno']=173;
			$method = $pyjs__bind_method2('copy', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '334458c91e9f5e15a3112aa6e55c0eb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var newgroup;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':173};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=173;
				$pyjs['track']['lineno']=177;
				newgroup = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__class__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
				$pyjs['track']['lineno']=178;
				newgroup['__is_instance__'] && typeof newgroup['__setattr__'] == 'function' ? newgroup['__setattr__']('_sprites', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_sprites']['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) : $p['setattr'](newgroup, '_sprites', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_sprites']['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()); 
				$pyjs['track']['lineno']=179;
				$pyjs['track']['lineno']=179;
				var $pyjs__ret = newgroup;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['copy'] = $method;
			$pyjs['track']['lineno']=181;
			$method = $pyjs__bind_method2('add', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '334458c91e9f5e15a3112aa6e55c0eb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var sprite,$iter4_nextval,spriteID,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':181};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=181;
				$pyjs['track']['lineno']=185;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return sprites;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					sprite = $iter4_nextval['$nextval'];
					$pyjs['track']['lineno']=186;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['hasattr'](sprite, '_groups');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()) {
						$pyjs['track']['lineno']=187;
						spriteID = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['id'](sprite);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
						$pyjs['track']['lineno']=188;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['getattr'](self, '_sprites')['__contains__'](spriteID));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()) {
							$pyjs['track']['lineno']=189;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, '_sprites')['__setitem__'](spriteID, sprite);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
							$pyjs['track']['lineno']=190;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](sprite, '_groups')['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['id'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})(), self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
						}
					}
					else {
						$pyjs['track']['lineno']=192;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call(self, 'add', sprite, null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=193;
				$pyjs['track']['lineno']=193;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['add'] = $method;
			$pyjs['track']['lineno']=195;
			$method = $pyjs__bind_method2('remove', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '334458c91e9f5e15a3112aa6e55c0eb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,sprite,$iter5_array,$pyjs__trackstack_size_1,spriteID,$iter5_iter,$iter5_idx,$iter5_type;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':195};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=195;
				$pyjs['track']['lineno']=199;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return sprites;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					sprite = $iter5_nextval['$nextval'];
					$pyjs['track']['lineno']=200;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['hasattr'](sprite, '_groups');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
						$pyjs['track']['lineno']=201;
						spriteID = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['id'](sprite);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
						$pyjs['track']['lineno']=202;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['getattr'](self, '_sprites')['__contains__'](spriteID));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
							$pyjs['track']['lineno']=203;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, '_sprites')['__delitem__'](spriteID);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
							$pyjs['track']['lineno']=204;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](sprite, '_groups')['__delitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['id'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
						}
					}
					else {
						$pyjs['track']['lineno']=206;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call(self, 'remove', sprite, null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=207;
				$pyjs['track']['lineno']=207;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['remove'] = $method;
			$pyjs['track']['lineno']=209;
			$method = $pyjs__bind_method2('has', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '334458c91e9f5e15a3112aa6e55c0eb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var sprite,$iter6_idx,$iter6_type,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':209};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=209;
				$pyjs['track']['lineno']=213;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return sprites;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					sprite = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=214;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['hasattr'](sprite, '_groups');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
						$pyjs['track']['lineno']=215;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['getattr'](self, '_sprites')['__contains__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['id'](sprite);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
							$pyjs['track']['lineno']=216;
							$pyjs['track']['lineno']=216;
							var $pyjs__ret = false;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
					else {
						$pyjs['track']['lineno']=218;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call(self, 'has', sprite, null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) {
							$pyjs['track']['lineno']=219;
							$pyjs['track']['lineno']=219;
							var $pyjs__ret = false;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=220;
				$pyjs['track']['lineno']=220;
				var $pyjs__ret = true;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['has'] = $method;
			$pyjs['track']['lineno']=222;
			$method = $pyjs__bind_method2('draw', function(surface) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '334458c91e9f5e15a3112aa6e55c0eb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var sprite,$iter7_nextval,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':222};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=222;
				$pyjs['track']['lineno']=226;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['_blits']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_sprites']['itervalues']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
				$pyjs['track']['lineno']=227;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, '_clear_active'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()) {
					$pyjs['track']['lineno']=228;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['rectPool']['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_sprites_drawn']['itervalues']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
					$pyjs['track']['lineno']=229;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_sprites_drawn']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
					$pyjs['track']['lineno']=230;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '_sprites');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						sprite = $iter7_nextval['$nextval'];
						$pyjs['track']['lineno']=231;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, '_sprites_drawn')['__setitem__'](sprite, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				$pyjs['track']['lineno']=232;
				$pyjs['track']['lineno']=232;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface']]);
			$cls_definition['draw'] = $method;
			$pyjs['track']['lineno']=234;
			$method = $pyjs__bind_method2('clear', function(surface, background) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					background = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '334458c91e9f5e15a3112aa6e55c0eb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter8_idx,sprite,$iter8_array,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,$iter8_type;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':234};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=234;
				$pyjs['track']['lineno']=239;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_clear_active', true) : $p['setattr'](self, '_clear_active', true); 
				$pyjs['track']['lineno']=240;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](background, 'width');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()) {
					$pyjs['track']['lineno']=241;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['_blit_clear'](background, (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_sprites_drawn']['itervalues']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=243;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '_sprites_drawn');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
					while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
						sprite = $iter8_nextval['$nextval'];
						$pyjs['track']['lineno']=244;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return background(surface, $p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['background']]);
			$cls_definition['clear'] = $method;
			$pyjs['track']['lineno']=246;
			$method = $pyjs__bind_method2('empty', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '334458c91e9f5e15a3112aa6e55c0eb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var sprite,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_type,$pyjs__trackstack_size_1,$iter9_array;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':246};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=246;
				$pyjs['track']['lineno']=250;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_sprites']['itervalues']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					sprite = $iter9_nextval['$nextval'];
					$pyjs['track']['lineno']=251;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](sprite, '_groups')['__delitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['id'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=252;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_sprites']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
				$pyjs['track']['lineno']=253;
				$pyjs['track']['lineno']=253;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['empty'] = $method;
			$pyjs['track']['lineno']=255;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '334458c91e9f5e15a3112aa6e55c0eb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter10_nextval,sprite,$iter10_array,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter,$iter10_idx;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':255};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=255;
				$pyjs['track']['lineno']=259;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_sprites']['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					sprite = $iter10_nextval['$nextval'];
					$pyjs['track']['lineno']=260;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(sprite, 'update', args, null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=261;
				$pyjs['track']['lineno']=261;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=113;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Group', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=264;
		$m['GroupSingle'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '7648fe33d38578df6ee0b374717ed826';
			$pyjs['track']['lineno']=271;
			$method = $pyjs__bind_method2('__init__', function(sprite) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sprite = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7648fe33d38578df6ee0b374717ed826') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sprite == 'undefined') sprite=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':271};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=271;
				$pyjs['track']['lineno']=276;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](sprite);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()) {
					$pyjs['track']['lineno']=277;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Group']['__init__'](self, sprite);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=279;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Group']['__init__'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sprite', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=281;
			$method = $pyjs__bind_method2('__getattr__', function(attr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					attr = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7648fe33d38578df6ee0b374717ed826') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':281};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=281;
				$pyjs['track']['lineno']=285;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](attr, 'sprite'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})()) {
					$pyjs['track']['lineno']=286;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, '_sprites'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()) {
						$pyjs['track']['lineno']=287;
						$pyjs['track']['lineno']=287;
						var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
						return self['_sprites']['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()['__getitem__']($constant_int_0);
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=289;
						$pyjs['track']['lineno']=289;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['attr']]);
			$cls_definition['__getattr__'] = $method;
			$pyjs['track']['lineno']=291;
			$method = $pyjs__bind_method2('add', function(sprite) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sprite = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7648fe33d38578df6ee0b374717ed826') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':291};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=291;
				$pyjs['track']['lineno']=295;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['empty']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
				$pyjs['track']['lineno']=296;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_sprites')['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['id'](sprite);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})(), sprite);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
				$pyjs['track']['lineno']=297;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](sprite, '_groups')['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['id'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})(), self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
				$pyjs['track']['lineno']=298;
				$pyjs['track']['lineno']=298;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sprite']]);
			$cls_definition['add'] = $method;
			$pyjs['track']['lineno']=300;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7648fe33d38578df6ee0b374717ed826') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':300};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=300;
				$pyjs['track']['lineno']=304;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, '_sprites'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})()) {
					$pyjs['track']['lineno']=305;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_sprites']['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()['__getitem__']($constant_int_0), 'update', args, null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
				}
				$pyjs['track']['lineno']=306;
				$pyjs['track']['lineno']=306;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=264;
			var $bases = new Array($m['Group']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GroupSingle', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=309;
		$m['RenderUpdates'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '58716784ca315638c1942bc11cf0c67e';
			$pyjs['track']['lineno']=316;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '58716784ca315638c1942bc11cf0c67e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':316};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=316;
				$pyjs['track']['lineno']=321;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['Group'], '__init__', sprites, null, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
				$pyjs['track']['lineno']=322;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('changed_areas', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()) : $p['setattr'](self, 'changed_areas', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=324;
			$method = $pyjs__bind_method2('draw', function(surface) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '58716784ca315638c1942bc11cf0c67e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter12_idx,$iter12_type,sprite,$iter11_iter,$iter11_type,$iter12_array,$iter12_iter,$iter11_array,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1,$iter12_nextval;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':324};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=324;
				$pyjs['track']['lineno']=329;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['_blits']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_sprites']['itervalues']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
				$pyjs['track']['lineno']=330;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, '_clear_active'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})()) {
					$pyjs['track']['lineno']=331;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
					$pyjs['track']['lineno']=332;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
					$pyjs['track']['lineno']=333;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '_sprites');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
					$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
					while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
						sprite = $iter11_nextval['$nextval'];
						$pyjs['track']['lineno']=334;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['getattr'](self, '_sprites_drawn')['__contains__'](sprite));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()) {
							$pyjs['track']['lineno']=335;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['intersects']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})()) {
								$pyjs['track']['lineno']=336;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['union_ip']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
							}
							else {
								$pyjs['track']['lineno']=338;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return self['changed_areas']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
							}
						}
						else {
							$pyjs['track']['lineno']=340;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['changed_areas']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
					$pyjs['track']['lineno']=341;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['changed_areas']['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_sprites_drawn']['itervalues']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
					$pyjs['track']['lineno']=342;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_sprites_drawn']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
					$pyjs['track']['lineno']=343;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '_sprites');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
					$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
					while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
						sprite = $iter12_nextval['$nextval'];
						$pyjs['track']['lineno']=344;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, '_sprites_drawn')['__setitem__'](sprite, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				else {
					$pyjs['track']['lineno']=346;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
					$pyjs['track']['lineno']=347;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
					$pyjs['track']['lineno']=348;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['changed_areas']['extend'](function(){
						var $iter13_nextval,sprite,$iter13_iter,$collcomp1,$iter13_type,$iter13_idx,$pyjs__trackstack_size_1,$iter13_array;
	$collcomp1 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_sprites']['itervalues']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
					$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
					while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
						sprite = $iter13_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp1['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['rectPool']['copy']($p['getattr'](sprite, 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp1;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
				}
				$pyjs['track']['lineno']=349;
				$pyjs['track']['lineno']=349;
				var $pyjs__ret = $p['getattr'](self, 'changed_areas');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface']]);
			$cls_definition['draw'] = $method;
			$pyjs['track']['lineno']=309;
			var $bases = new Array($m['Group']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RenderUpdates', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=352;
		$m['OrderedUpdates'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '8ae0d5e1be04898878c47827ae5dac05';
			$pyjs['track']['lineno']=359;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ae0d5e1be04898878c47827ae5dac05') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,$iter14_array,$iter14_type,sprite,spriteID,$iter14_iter,$pyjs__trackstack_size_1,$iter14_idx,$iter14_nextval;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':359};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=359;
				$pyjs['track']['lineno']=364;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('order', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})()) : $p['setattr'](self, 'order', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})()); 
				$pyjs['track']['lineno']=365;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('place', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()) : $p['setattr'](self, 'place', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()); 
				$pyjs['track']['lineno']=366;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('range', $constant_int_1000) : $p['setattr'](self, 'range', $constant_int_1000); 
				$pyjs['track']['lineno']=367;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('index', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['iter']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($p['getattr'](self, 'range'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})()) : $p['setattr'](self, 'index', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['iter']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($p['getattr'](self, 'range'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})()); 
				$pyjs['track']['lineno']=368;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', null) : $p['setattr'](self, 'sort', null); 
				$pyjs['track']['lineno']=369;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter14_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return sprites;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					sprite = $iter14_nextval['$nextval'];
					$pyjs['track']['lineno']=370;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['getattr'](self, '_sprites')['__contains__'](sprite));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})()) {
						$pyjs['track']['lineno']=371;
						spriteID = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['id'](sprite);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
						$pyjs['track']['lineno']=372;
						index = (function(){try{try{$pyjs['in_try_except'] += 1;
						return self['index']['next']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
						$pyjs['track']['lineno']=373;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'order')['__setitem__'](index, spriteID);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
						$pyjs['track']['lineno']=374;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'place')['__setitem__'](spriteID, index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=375;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['RenderUpdates'], '__init__', sprites, null, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=377;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ae0d5e1be04898878c47827ae5dac05') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var order_sprite,keys;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':377};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=377;
				$pyjs['track']['lineno']=381;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'sort'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})()) {
					$pyjs['track']['lineno']=382;
					order_sprite = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['iter']($p['getattr'](self, 'sort'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=384;
					keys = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['order']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
					$pyjs['track']['lineno']=385;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return keys['sort']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
					$pyjs['track']['lineno']=386;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', function(){
						var key,$iter15_iter,$iter15_array,$collcomp2,$iter15_idx,$iter15_nextval,$iter15_type,$pyjs__trackstack_size_1;
	$collcomp2 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter15_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return keys;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
					$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
					while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
						key = $iter15_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp2['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp2;}()) : $p['setattr'](self, 'sort', function(){
						var key,$iter15_iter,$iter15_array,$collcomp2,$iter15_idx,$iter15_nextval,$iter15_type,$pyjs__trackstack_size_1;
	$collcomp2 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter15_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return keys;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
					$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
					while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
						key = $iter15_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp2['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp2;}()); 
					$pyjs['track']['lineno']=387;
					order_sprite = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['iter']($p['getattr'](self, 'sort'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
				}
				$pyjs['track']['lineno']=388;
				$pyjs['track']['lineno']=388;
				var $pyjs__ret = order_sprite;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=390;
			$method = $pyjs__bind_method2('sprites', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ae0d5e1be04898878c47827ae5dac05') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var order_sprite,keys;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':390};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=390;
				$pyjs['track']['lineno']=394;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'sort'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})()) {
					$pyjs['track']['lineno']=395;
					order_sprite = $p['__getslice']($p['getattr'](self, 'sort'), 0, null);
				}
				else {
					$pyjs['track']['lineno']=397;
					keys = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['order']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})();
					$pyjs['track']['lineno']=398;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return keys['sort']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
					$pyjs['track']['lineno']=399;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', function(){
						var $iter16_array,$iter16_type,$collcomp3,$iter16_idx,key,$pyjs__trackstack_size_1,$iter16_nextval,$iter16_iter;
	$collcomp3 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter16_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return keys;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
					$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
					while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
						key = $iter16_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp3['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp3;}()) : $p['setattr'](self, 'sort', function(){
						var $iter16_array,$iter16_type,$collcomp3,$iter16_idx,key,$pyjs__trackstack_size_1,$iter16_nextval,$iter16_iter;
	$collcomp3 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter16_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return keys;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
					$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
					while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
						key = $iter16_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp3['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp3;}()); 
					$pyjs['track']['lineno']=400;
					order_sprite = $p['__getslice']($p['getattr'](self, 'sort'), 0, null);
				}
				$pyjs['track']['lineno']=401;
				$pyjs['track']['lineno']=401;
				var $pyjs__ret = order_sprite;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['sprites'] = $method;
			$pyjs['track']['lineno']=403;
			$method = $pyjs__bind_method2('copy', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ae0d5e1be04898878c47827ae5dac05') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var newgroup,$add6,$add5;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':403};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=403;
				$pyjs['track']['lineno']=407;
				newgroup = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['RenderUpdates']['copy'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
				$pyjs['track']['lineno']=408;
				newgroup['__is_instance__'] && typeof newgroup['__setattr__'] == 'function' ? newgroup['__setattr__']('order', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['order']['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()) : $p['setattr'](newgroup, 'order', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['order']['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()); 
				$pyjs['track']['lineno']=409;
				newgroup['__is_instance__'] && typeof newgroup['__setattr__'] == 'function' ? newgroup['__setattr__']('place', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['place']['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})()) : $p['setattr'](newgroup, 'place', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['place']['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})()); 
				$pyjs['track']['lineno']=410;
				newgroup['__is_instance__'] && typeof newgroup['__setattr__'] == 'function' ? newgroup['__setattr__']('range', $p['getattr'](self, 'range')) : $p['setattr'](newgroup, 'range', $p['getattr'](self, 'range')); 
				$pyjs['track']['lineno']=411;
				newgroup['__is_instance__'] && typeof newgroup['__setattr__'] == 'function' ? newgroup['__setattr__']('index', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['iter']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($p['__op_add']($add5=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['max']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['order']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})(),$add6=$constant_int_1), $p['getattr'](self, 'range'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})()) : $p['setattr'](newgroup, 'index', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['iter']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($p['__op_add']($add5=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['max']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['order']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})(),$add6=$constant_int_1), $p['getattr'](self, 'range'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})()); 
				$pyjs['track']['lineno']=412;
				$pyjs['track']['lineno']=412;
				var $pyjs__ret = newgroup;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['copy'] = $method;
			$pyjs['track']['lineno']=414;
			$method = $pyjs__bind_method2('add', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ae0d5e1be04898878c47827ae5dac05') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter18_type,spriteID,$iter17_type,index,$iter17_iter,$iter18_idx,$iter18_nextval,$iter17_nextval,$iter18_iter,sprite,keys,$iter17_array,key,$mul4,$mul3,$mul2,$mul1,$iter18_array,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,$iter17_idx,order;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':414};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=414;
				$pyjs['track']['lineno']=418;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter17_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return sprites;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
				$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
				while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
					sprite = $iter17_nextval['$nextval'];
					$pyjs['track']['lineno']=419;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['getattr'](self, '_sprites')['__contains__'](sprite));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})()) {
						$pyjs['track']['lineno']=420;
						index = (function(){try{try{$pyjs['in_try_except'] += 1;
						return self['_get_index']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
						$pyjs['track']['lineno']=421;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['op_is'](index, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})()) {
							$pyjs['track']['lineno']=422;
							spriteID = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['id'](sprite);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
							$pyjs['track']['lineno']=423;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'order')['__setitem__'](index, spriteID);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
							$pyjs['track']['lineno']=424;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'place')['__setitem__'](spriteID, index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=426;
							keys = (function(){try{try{$pyjs['in_try_except'] += 1;
							return self['order']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
							$pyjs['track']['lineno']=427;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return keys['sort']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})();
							$pyjs['track']['lineno']=428;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](($p['cmp']((typeof ($mul1=(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['len'](keys);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})())==typeof ($mul2=$constant_int_2) && typeof $mul1=='number'?
								$mul1*$mul2:
								$p['op_mul']($mul1,$mul2)), $p['getattr'](self, 'range')) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})()) {
								$pyjs['track']['lineno']=429;
								self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('range', (typeof ($mul3=(function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['len'](keys);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})())==typeof ($mul4=$constant_int_2) && typeof $mul3=='number'?
									$mul3*$mul4:
									$p['op_mul']($mul3,$mul4))) : $p['setattr'](self, 'range', (typeof ($mul3=(function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['len'](keys);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})())==typeof ($mul4=$constant_int_2) && typeof $mul3=='number'?
									$mul3*$mul4:
									$p['op_mul']($mul3,$mul4))); 
							}
							$pyjs['track']['lineno']=430;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('index', (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['iter']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['xrange']($p['getattr'](self, 'range'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})()) : $p['setattr'](self, 'index', (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['iter']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['xrange']($p['getattr'](self, 'range'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})()); 
							$pyjs['track']['lineno']=431;
							order = $p['getattr'](self, 'order');
							$pyjs['track']['lineno']=432;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('order', (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})()) : $p['setattr'](self, 'order', (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})()); 
							$pyjs['track']['lineno']=433;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('place', (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})()) : $p['setattr'](self, 'place', (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})()); 
							$pyjs['track']['lineno']=434;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter18_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
							return keys;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})();
							$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
							while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
								key = $iter18_nextval['$nextval'];
								$pyjs['track']['lineno']=435;
								index = (function(){try{try{$pyjs['in_try_except'] += 1;
								return self['index']['next']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
								$pyjs['track']['lineno']=436;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['getattr'](self, 'order')['__setitem__'](index, order['__getitem__'](key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
								$pyjs['track']['lineno']=437;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['getattr'](self, 'place')['__setitem__'](order['__getitem__'](key), index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})();
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.sprite';
							$pyjs['track']['lineno']=438;
							index = (function(){try{try{$pyjs['in_try_except'] += 1;
							return self['index']['next']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
							$pyjs['track']['lineno']=439;
							spriteID = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['id'](sprite);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
							$pyjs['track']['lineno']=440;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'order')['__setitem__'](index, spriteID);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
							$pyjs['track']['lineno']=441;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'place')['__setitem__'](spriteID, index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
						}
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=442;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', null) : $p['setattr'](self, 'sort', null); 
				$pyjs['track']['lineno']=443;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['RenderUpdates'], 'add', sprites, null, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
				$pyjs['track']['lineno']=444;
				$pyjs['track']['lineno']=444;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['add'] = $method;
			$pyjs['track']['lineno']=446;
			$method = $pyjs__bind_method2('_get_index', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ae0d5e1be04898878c47827ae5dac05') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':446};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=446;
				$pyjs['track']['lineno']=447;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=448;
						$pyjs['track']['lineno']=448;
						var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
						return self['index']['next']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
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
					$pyjs['track']['module']='pyjsdl.sprite';
					if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						$pyjs['track']['lineno']=450;
						$pyjs['track']['lineno']=450;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_get_index'] = $method;
			$pyjs['track']['lineno']=452;
			$method = $pyjs__bind_method2('remove', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ae0d5e1be04898878c47827ae5dac05') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter19_idx,sprite,spriteID,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':452};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=452;
				$pyjs['track']['lineno']=456;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter19_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return sprites;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})();
				$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
				while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
					sprite = $iter19_nextval['$nextval'];
					$pyjs['track']['lineno']=457;
					spriteID = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['id'](sprite);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})();
					$pyjs['track']['lineno']=458;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, 'place')['__contains__'](spriteID));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})()) {
						$pyjs['track']['lineno']=459;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'order')['__delitem__']($p['getattr'](self, 'place')['__getitem__'](spriteID));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})();
						$pyjs['track']['lineno']=460;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'place')['__delitem__'](spriteID);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=461;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', null) : $p['setattr'](self, 'sort', null); 
				$pyjs['track']['lineno']=462;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['RenderUpdates'], 'remove', sprites, null, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})();
				$pyjs['track']['lineno']=463;
				$pyjs['track']['lineno']=463;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['remove'] = $method;
			$pyjs['track']['lineno']=465;
			$method = $pyjs__bind_method2('empty', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ae0d5e1be04898878c47827ae5dac05') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':465};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=465;
				$pyjs['track']['lineno']=469;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('order', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})()) : $p['setattr'](self, 'order', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})()); 
				$pyjs['track']['lineno']=470;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('place', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})()) : $p['setattr'](self, 'place', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})()); 
				$pyjs['track']['lineno']=471;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('index', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['iter']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($p['getattr'](self, 'range'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})()) : $p['setattr'](self, 'index', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['iter']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($p['getattr'](self, 'range'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})()); 
				$pyjs['track']['lineno']=472;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', null) : $p['setattr'](self, 'sort', null); 
				$pyjs['track']['lineno']=473;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['RenderUpdates']['empty'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['empty'] = $method;
			$pyjs['track']['lineno']=475;
			$method = $pyjs__bind_method2('draw', function(surface) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8ae0d5e1be04898878c47827ae5dac05') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter22_array,$iter21_idx,sprite,keys,$iter21_nextval,$iter22_nextval,$iter22_idx,$iter21_type,$iter21_iter,$iter22_type,$iter21_array,$pyjs__trackstack_size_1,order_sprite,$iter22_iter;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':475};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=475;
				$pyjs['track']['lineno']=479;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'sort'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})()) {
					$pyjs['track']['lineno']=480;
					order_sprite = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['iter']($p['getattr'](self, 'sort'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=482;
					keys = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['order']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})();
					$pyjs['track']['lineno']=483;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return keys['sort']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
					$pyjs['track']['lineno']=484;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', function(){
						var $iter20_iter,$iter20_nextval,$iter20_type,$collcomp4,$iter20_idx,key,$pyjs__trackstack_size_1,$iter20_array;
	$collcomp4 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter20_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return keys;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
					$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
					while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
						key = $iter20_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp4['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp4;}()) : $p['setattr'](self, 'sort', function(){
						var $iter20_iter,$iter20_nextval,$iter20_type,$collcomp4,$iter20_idx,key,$pyjs__trackstack_size_1,$iter20_array;
	$collcomp4 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter20_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return keys;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
					$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
					while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
						key = $iter20_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp4['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp4;}()); 
					$pyjs['track']['lineno']=485;
					order_sprite = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['iter']($p['getattr'](self, 'sort'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})();
				}
				$pyjs['track']['lineno']=486;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['_blits'](order_sprite);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})();
				$pyjs['track']['lineno']=487;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, '_clear_active'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})()) {
					$pyjs['track']['lineno']=488;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})();
					$pyjs['track']['lineno']=489;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
					$pyjs['track']['lineno']=490;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter21_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '_sprites');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})();
					$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
					while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
						sprite = $iter21_nextval['$nextval'];
						$pyjs['track']['lineno']=491;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['getattr'](self, '_sprites_drawn')['__contains__'](sprite));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})()) {
							$pyjs['track']['lineno']=492;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['intersects']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})()) {
								$pyjs['track']['lineno']=493;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['union_ip']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})();
							}
							else {
								$pyjs['track']['lineno']=495;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return self['changed_areas']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})();
							}
						}
						else {
							$pyjs['track']['lineno']=497;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['changed_areas']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})();
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
					$pyjs['track']['lineno']=498;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['changed_areas']['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_sprites_drawn']['itervalues']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})();
					$pyjs['track']['lineno']=499;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_sprites_drawn']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})();
					$pyjs['track']['lineno']=500;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter22_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '_sprites');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})();
					$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
					while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
						sprite = $iter22_nextval['$nextval'];
						$pyjs['track']['lineno']=501;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, '_sprites_drawn')['__setitem__'](sprite, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				else {
					$pyjs['track']['lineno']=503;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})();
					$pyjs['track']['lineno']=504;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})();
					$pyjs['track']['lineno']=505;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['changed_areas']['extend'](function(){
						var $iter23_type,$iter23_nextval,$iter23_iter,$collcomp5,$iter23_idx,$pyjs__trackstack_size_1,$iter23_array,sprite;
	$collcomp5 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter23_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_sprites']['itervalues']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})();
					$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
					while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
						sprite = $iter23_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp5['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['rectPool']['copy']($p['getattr'](sprite, 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp5;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})();
				}
				$pyjs['track']['lineno']=506;
				$pyjs['track']['lineno']=506;
				var $pyjs__ret = $p['getattr'](self, 'changed_areas');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface']]);
			$cls_definition['draw'] = $method;
			$pyjs['track']['lineno']=352;
			var $bases = new Array($m['RenderUpdates']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('OrderedUpdates', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=509;
		$m['LayeredUpdates'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = 'd63f2d86eee6f88f272366c9dd3f47e9';
			$pyjs['track']['lineno']=517;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd63f2d86eee6f88f272366c9dd3f47e9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':517};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=517;
				$pyjs['track']['lineno']=521;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['OrderedUpdates'], sprites, null, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=509;
			var $bases = new Array($m['OrderedUpdates']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('LayeredUpdates', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=524;
		$m['LayeredDirty'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '800489ba0dda2d402efa2ac2f2d96e97';
			$pyjs['track']['lineno']=532;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '800489ba0dda2d402efa2ac2f2d96e97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':532};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=532;
				$pyjs['track']['lineno']=536;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['LayeredUpdates'], sprites, null, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=524;
			var $bases = new Array($m['LayeredUpdates']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('LayeredDirty', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=539;
		$m['spritecollide'] = function(sprite, group, dokill, collided) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
			if (typeof collided == 'undefined') collided=arguments['callee']['__args__'][5][1];
			var $iter25_array,sprites,$iter24_idx,$and2,$iter25_nextval,collide,$iter25_iter,$iter24_type,$iter24_array,$and1,$pyjs__trackstack_size_1,$iter25_idx,$iter25_type,$iter24_iter,$iter24_nextval;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':539};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=539;
			$pyjs['track']['lineno']=547;
			collide = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})();
			$pyjs['track']['lineno']=548;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter24_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return group;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})();
			$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
			while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
				sprites = $iter24_nextval['$nextval'];
				$pyjs['track']['lineno']=549;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return sprite['rect']['intersects']($p['getattr'](sprites, 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})()) {
					$pyjs['track']['lineno']=550;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](collided);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})()) {
						$pyjs['track']['lineno']=551;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return collided(sprite, sprites);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})()) {
							$pyjs['track']['lineno']=552;
							continue;
						}
					}
					$pyjs['track']['lineno']=553;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return collide['append'](sprites);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=554;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=collide)?dokill:$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})()) {
				$pyjs['track']['lineno']=555;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter25_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return collide;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
				$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
				while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
					sprite = $iter25_nextval['$nextval'];
					$pyjs['track']['lineno']=556;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return sprite['kill']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
			}
			$pyjs['track']['lineno']=557;
			$pyjs['track']['lineno']=557;
			var $pyjs__ret = collide;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['spritecollide']['__name__'] = 'spritecollide';

		$m['spritecollide']['__bind_type__'] = 0;
		$m['spritecollide']['__args__'] = [null,null,['sprite'],['group'],['dokill'],['collided', null]];
		$pyjs['track']['lineno']=560;
		$m['collide_rect'] = function(sprite1, sprite2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.sprite','lineno':560};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=560;
			$pyjs['track']['lineno']=567;
			$pyjs['track']['lineno']=567;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return sprite1['rect']['intersects']($p['getattr'](sprite2, 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['collide_rect']['__name__'] = 'collide_rect';

		$m['collide_rect']['__bind_type__'] = 0;
		$m['collide_rect']['__args__'] = [null,null,['sprite1'],['sprite2']];
		$pyjs['track']['lineno']=570;
		$m['collide_rect_ratio'] = function(ratio) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var obj,$lambda1;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':570};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=570;
			$pyjs['track']['lineno']=578;
			obj = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof _collide_rect_ratio == "undefined"?$m['_collide_rect_ratio']:_collide_rect_ratio)(ratio);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})();
			$pyjs['track']['lineno']=579;
			var 			$lambda1 = function(sprite1, sprite2) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.sprite','lineno':579};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=579;
				$pyjs['track']['lineno']=579;
				$pyjs['track']['lineno']=579;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return obj['__call__'](sprite1, sprite2);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null,['sprite1'],['sprite2']];
			$pyjs['track']['lineno']=579;
			var $pyjs__ret = $lambda1;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['collide_rect_ratio']['__name__'] = 'collide_rect_ratio';

		$m['collide_rect_ratio']['__bind_type__'] = 0;
		$m['collide_rect_ratio']['__args__'] = [null,null,['ratio']];
		$pyjs['track']['lineno']=582;
		$m['_collide_rect_ratio'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = 'b3779ee9e1661122106509ad4457cdaa';
			$pyjs['track']['lineno']=584;
			$cls_definition['__slots__'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['ratio']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})();
			$pyjs['track']['lineno']=586;
			$method = $pyjs__bind_method2('__init__', function(ratio) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ratio = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3779ee9e1661122106509ad4457cdaa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':586};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=586;
				$pyjs['track']['lineno']=587;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ratio', ratio) : $p['setattr'](self, 'ratio', ratio); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['ratio']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=589;
			$method = $pyjs__bind_method2('__call__', function(sprite1, sprite2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sprite1 = arguments[1];
					sprite2 = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b3779ee9e1661122106509ad4457cdaa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add12,$add13,r2,$mul20,collide,$sub9,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$sub13,$sub12,$sub11,$sub10,$sub16,$sub15,$sub14,$add14,$mul14,$add10,$add11,$mul9,$mul8,$mul7,$mul6,$mul5,r1,$mul17,$mul16,$mul15,$add9,$mul13,$mul12,$mul11,$mul10,$mul19,$mul18,r,$add7,y,x,$add8;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':589};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=589;
				$pyjs['track']['lineno']=590;
				r = $p['getattr'](sprite1, 'rect');
				$pyjs['track']['lineno']=591;
				x = $p['__op_sub']($sub1=(typeof ($mul5=$p['getattr'](r, 'width'))==typeof ($mul6=$p['getattr'](self, 'ratio')) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)),$sub2=$p['getattr'](r, 'width'));
				$pyjs['track']['lineno']=592;
				y = $p['__op_sub']($sub3=(typeof ($mul7=$p['getattr'](r, 'height'))==typeof ($mul8=$p['getattr'](self, 'ratio')) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)),$sub4=$p['getattr'](r, 'height'));
				$pyjs['track']['lineno']=593;
				r1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['rectPool']['get']($p['__op_sub']($sub5=$p['getattr'](r, 'x'),$sub6=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($mul9=x)==typeof ($mul10=0.5) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})()), $p['__op_sub']($sub7=$p['getattr'](r, 'y'),$sub8=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($mul11=y)==typeof ($mul12=0.5) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})()), $p['__op_add']($add7=$p['getattr'](r, 'width'),$add8=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})()), $p['__op_add']($add9=$p['getattr'](r, 'height'),$add10=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int'](y);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})();
				$pyjs['track']['lineno']=594;
				r = $p['getattr'](sprite2, 'rect');
				$pyjs['track']['lineno']=595;
				x = $p['__op_sub']($sub9=(typeof ($mul13=$p['getattr'](r, 'width'))==typeof ($mul14=$p['getattr'](self, 'ratio')) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)),$sub10=$p['getattr'](r, 'width'));
				$pyjs['track']['lineno']=596;
				y = $p['__op_sub']($sub11=(typeof ($mul15=$p['getattr'](r, 'height'))==typeof ($mul16=$p['getattr'](self, 'ratio')) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)),$sub12=$p['getattr'](r, 'height'));
				$pyjs['track']['lineno']=597;
				r2 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['rectPool']['get']($p['__op_sub']($sub13=$p['getattr'](r, 'x'),$sub14=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($mul17=x)==typeof ($mul18=0.5) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})()), $p['__op_sub']($sub15=$p['getattr'](r, 'y'),$sub16=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($mul19=y)==typeof ($mul20=0.5) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})()), $p['__op_add']($add11=$p['getattr'](r, 'width'),$add12=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})()), $p['__op_add']($add13=$p['getattr'](r, 'height'),$add14=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int'](y);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})();
				$pyjs['track']['lineno']=598;
				collide = (function(){try{try{$pyjs['in_try_except'] += 1;
				return r1['intersects'](r2);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})();
				$pyjs['track']['lineno']=599;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['rectPool']['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([r1, r2]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})();
				$pyjs['track']['lineno']=600;
				$pyjs['track']['lineno']=600;
				var $pyjs__ret = collide;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sprite1'],['sprite2']]);
			$cls_definition['__call__'] = $method;
			$pyjs['track']['lineno']=582;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('_collide_rect_ratio', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=603;
		$m['collide_circle'] = function(sprite1, sprite2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var radius1,$sub20,radius2,sy2,sy1,$pow14,$add27,$pow19,$pow18,$pow17,$pow16,$pow15,$add26,$pow13,$pow12,$pow11,$pow10,$pow7,$pow6,$pow5,$pow4,$pow3,$pow2,$pow1,$add21,$add20,$add23,$add22,$add25,$add24,$pow9,$pow8,$mul28,$mul29,$mul26,$mul27,$mul24,$mul25,$mul22,$mul23,$mul21,$add29,$sub19,$sub18,$add28,$sub17,$add15,$add16,$add17,$pow20,$add18,$add19,sx1,$add30,sx2,$mul31,$mul30,$mul32;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':603};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=603;
			$pyjs['track']['lineno']=611;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['hasattr'](sprite1, 'radius');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})()) {
				$pyjs['track']['lineno']=612;
				radius1 = $p['getattr'](sprite1, 'radius');
			}
			else {
				$pyjs['track']['lineno']=614;
				radius1 = (typeof ($mul21=(typeof ($pow5=$p['__op_add']($add15=(typeof ($pow1=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($pow2=$constant_int_2) && typeof $pow1=='number'?
					Math['pow']($pow1,$pow2):
					$p['op_pow']($pow1,$pow2)),$add16=(typeof ($pow3=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($pow4=$constant_int_2) && typeof $pow3=='number'?
					Math['pow']($pow3,$pow4):
					$p['op_pow']($pow3,$pow4))))==typeof ($pow6=0.5) && typeof $pow5=='number'?
					Math['pow']($pow5,$pow6):
					$p['op_pow']($pow5,$pow6)))==typeof ($mul22=0.5) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22));
			}
			$pyjs['track']['lineno']=615;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['hasattr'](sprite2, 'radius');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})()) {
				$pyjs['track']['lineno']=616;
				radius2 = $p['getattr'](sprite2, 'radius');
			}
			else {
				$pyjs['track']['lineno']=618;
				radius2 = (typeof ($mul23=(typeof ($pow11=$p['__op_add']($add17=(typeof ($pow7=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($pow8=$constant_int_2) && typeof $pow7=='number'?
					Math['pow']($pow7,$pow8):
					$p['op_pow']($pow7,$pow8)),$add18=(typeof ($pow9=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($pow10=$constant_int_2) && typeof $pow9=='number'?
					Math['pow']($pow9,$pow10):
					$p['op_pow']($pow9,$pow10))))==typeof ($pow12=0.5) && typeof $pow11=='number'?
					Math['pow']($pow11,$pow12):
					$p['op_pow']($pow11,$pow12)))==typeof ($mul24=0.5) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24));
			}
			$pyjs['track']['lineno']=619;
			sx1 = $p['__op_add']($add19=$p['getattr']($p['getattr'](sprite1, 'rect'), 'x'),$add20=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['int']((typeof ($mul25=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($mul26=0.5) && typeof $mul25=='number'?
				$mul25*$mul26:
				$p['op_mul']($mul25,$mul26)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})());
			$pyjs['track']['lineno']=620;
			sy1 = $p['__op_add']($add21=$p['getattr']($p['getattr'](sprite1, 'rect'), 'y'),$add22=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['int']((typeof ($mul27=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($mul28=0.5) && typeof $mul27=='number'?
				$mul27*$mul28:
				$p['op_mul']($mul27,$mul28)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})());
			$pyjs['track']['lineno']=621;
			sx2 = $p['__op_add']($add23=$p['getattr']($p['getattr'](sprite2, 'rect'), 'x'),$add24=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['int']((typeof ($mul29=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($mul30=0.5) && typeof $mul29=='number'?
				$mul29*$mul30:
				$p['op_mul']($mul29,$mul30)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})());
			$pyjs['track']['lineno']=622;
			sy2 = $p['__op_add']($add25=$p['getattr']($p['getattr'](sprite2, 'rect'), 'y'),$add26=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['int']((typeof ($mul31=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($mul32=0.5) && typeof $mul31=='number'?
				$mul31*$mul32:
				$p['op_mul']($mul31,$mul32)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})());
			$pyjs['track']['lineno']=623;
			$pyjs['track']['lineno']=623;
			var $pyjs__ret = ($p['cmp']($p['__op_add']($add27=(typeof ($pow13=$p['__op_sub']($sub17=sx1,$sub18=sx2))==typeof ($pow14=$constant_int_2) && typeof $pow13=='number'?
				Math['pow']($pow13,$pow14):
				$p['op_pow']($pow13,$pow14)),$add28=(typeof ($pow15=$p['__op_sub']($sub19=sy1,$sub20=sy2))==typeof ($pow16=$constant_int_2) && typeof $pow15=='number'?
				Math['pow']($pow15,$pow16):
				$p['op_pow']($pow15,$pow16))), $p['__op_add']($add29=(typeof ($pow17=radius1)==typeof ($pow18=$constant_int_2) && typeof $pow17=='number'?
				Math['pow']($pow17,$pow18):
				$p['op_pow']($pow17,$pow18)),$add30=(typeof ($pow19=radius2)==typeof ($pow20=$constant_int_2) && typeof $pow19=='number'?
				Math['pow']($pow19,$pow20):
				$p['op_pow']($pow19,$pow20)))) == -1);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['collide_circle']['__name__'] = 'collide_circle';

		$m['collide_circle']['__bind_type__'] = 0;
		$m['collide_circle']['__args__'] = [null,null,['sprite1'],['sprite2']];
		$pyjs['track']['lineno']=626;
		$m['collide_circle_ratio'] = function(ratio) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var obj,$lambda2;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':626};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=626;
			$pyjs['track']['lineno']=635;
			obj = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof _collide_circle_ratio == "undefined"?$m['_collide_circle_ratio']:_collide_circle_ratio)(ratio);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})();
			$pyjs['track']['lineno']=636;
			var 			$lambda2 = function(sprite1, sprite2) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.sprite','lineno':636};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=636;
				$pyjs['track']['lineno']=636;
				$pyjs['track']['lineno']=636;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return obj['__call__'](sprite1, sprite2);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null,['sprite1'],['sprite2']];
			$pyjs['track']['lineno']=636;
			var $pyjs__ret = $lambda2;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['collide_circle_ratio']['__name__'] = 'collide_circle_ratio';

		$m['collide_circle_ratio']['__bind_type__'] = 0;
		$m['collide_circle_ratio']['__args__'] = [null,null,['ratio']];
		$pyjs['track']['lineno']=639;
		$m['_collide_circle_ratio'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '4041a3408c2234ee7048e8d09a395fc7';
			$pyjs['track']['lineno']=641;
			$cls_definition['__slots__'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['ratio']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})();
			$pyjs['track']['lineno']=643;
			$method = $pyjs__bind_method2('__init__', function(ratio) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ratio = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4041a3408c2234ee7048e8d09a395fc7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':643};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=643;
				$pyjs['track']['lineno']=644;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ratio', ratio) : $p['setattr'](self, 'ratio', ratio); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['ratio']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=646;
			$method = $pyjs__bind_method2('__call__', function(sprite1, sprite2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sprite1 = arguments[1];
					sprite2 = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4041a3408c2234ee7048e8d09a395fc7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var radius1,$sub22,radius2,$mul50,$sub24,$sub23,$add43,$add42,$pow35,sy2,sy1,$sub21,$pow31,$pow30,$pow33,$pow32,$pow40,$add44,$add40,$pow39,$pow38,$mul48,$mul49,$pow36,$mul44,$mul45,$mul47,$mul40,$mul41,$mul42,$mul43,$pow37,$pow34,$add45,$pow26,$pow27,$pow24,$pow25,$pow22,$pow23,$pow21,$add46,$pow28,$pow29,sx2,$add38,$add39,sx1,$add32,$add33,$mul51,$add31,$add36,$add37,$add34,$add35,$add41,$mul39,$mul38,$mul52,$mul35,$mul34,$mul37,$mul36,$mul46,$mul33;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':646};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=646;
				$pyjs['track']['lineno']=647;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](sprite1, 'radius');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})()) {
					$pyjs['track']['lineno']=648;
					radius1 = (typeof ($mul33=$p['getattr'](sprite1, 'radius'))==typeof ($mul34=$p['getattr'](self, 'ratio')) && typeof $mul33=='number'?
						$mul33*$mul34:
						$p['op_mul']($mul33,$mul34));
				}
				else {
					$pyjs['track']['lineno']=650;
					radius1 = (typeof ($mul37=(typeof ($mul35=(typeof ($pow25=$p['__op_add']($add31=(typeof ($pow21=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($pow22=$constant_int_2) && typeof $pow21=='number'?
						Math['pow']($pow21,$pow22):
						$p['op_pow']($pow21,$pow22)),$add32=(typeof ($pow23=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($pow24=$constant_int_2) && typeof $pow23=='number'?
						Math['pow']($pow23,$pow24):
						$p['op_pow']($pow23,$pow24))))==typeof ($pow26=0.5) && typeof $pow25=='number'?
						Math['pow']($pow25,$pow26):
						$p['op_pow']($pow25,$pow26)))==typeof ($mul36=0.5) && typeof $mul35=='number'?
						$mul35*$mul36:
						$p['op_mul']($mul35,$mul36)))==typeof ($mul38=$p['getattr'](self, 'ratio')) && typeof $mul37=='number'?
						$mul37*$mul38:
						$p['op_mul']($mul37,$mul38));
				}
				$pyjs['track']['lineno']=651;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](sprite2, 'radius');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})()) {
					$pyjs['track']['lineno']=652;
					radius2 = (typeof ($mul39=$p['getattr'](sprite2, 'radius'))==typeof ($mul40=$p['getattr'](self, 'ratio')) && typeof $mul39=='number'?
						$mul39*$mul40:
						$p['op_mul']($mul39,$mul40));
				}
				else {
					$pyjs['track']['lineno']=654;
					radius2 = (typeof ($mul43=(typeof ($mul41=(typeof ($pow31=$p['__op_add']($add33=(typeof ($pow27=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($pow28=$constant_int_2) && typeof $pow27=='number'?
						Math['pow']($pow27,$pow28):
						$p['op_pow']($pow27,$pow28)),$add34=(typeof ($pow29=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($pow30=$constant_int_2) && typeof $pow29=='number'?
						Math['pow']($pow29,$pow30):
						$p['op_pow']($pow29,$pow30))))==typeof ($pow32=0.5) && typeof $pow31=='number'?
						Math['pow']($pow31,$pow32):
						$p['op_pow']($pow31,$pow32)))==typeof ($mul42=0.5) && typeof $mul41=='number'?
						$mul41*$mul42:
						$p['op_mul']($mul41,$mul42)))==typeof ($mul44=$p['getattr'](self, 'ratio')) && typeof $mul43=='number'?
						$mul43*$mul44:
						$p['op_mul']($mul43,$mul44));
				}
				$pyjs['track']['lineno']=655;
				sx1 = $p['__op_add']($add35=$p['getattr']($p['getattr'](sprite1, 'rect'), 'x'),$add36=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($mul45=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($mul46=0.5) && typeof $mul45=='number'?
					$mul45*$mul46:
					$p['op_mul']($mul45,$mul46)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})());
				$pyjs['track']['lineno']=656;
				sy1 = $p['__op_add']($add37=$p['getattr']($p['getattr'](sprite1, 'rect'), 'y'),$add38=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($mul47=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($mul48=0.5) && typeof $mul47=='number'?
					$mul47*$mul48:
					$p['op_mul']($mul47,$mul48)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})());
				$pyjs['track']['lineno']=657;
				sx2 = $p['__op_add']($add39=$p['getattr']($p['getattr'](sprite2, 'rect'), 'x'),$add40=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($mul49=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($mul50=0.5) && typeof $mul49=='number'?
					$mul49*$mul50:
					$p['op_mul']($mul49,$mul50)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})());
				$pyjs['track']['lineno']=658;
				sy2 = $p['__op_add']($add41=$p['getattr']($p['getattr'](sprite2, 'rect'), 'y'),$add42=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($mul51=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($mul52=0.5) && typeof $mul51=='number'?
					$mul51*$mul52:
					$p['op_mul']($mul51,$mul52)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})());
				$pyjs['track']['lineno']=659;
				$pyjs['track']['lineno']=659;
				var $pyjs__ret = ($p['cmp']($p['__op_add']($add43=(typeof ($pow33=$p['__op_sub']($sub21=sx1,$sub22=sx2))==typeof ($pow34=$constant_int_2) && typeof $pow33=='number'?
					Math['pow']($pow33,$pow34):
					$p['op_pow']($pow33,$pow34)),$add44=(typeof ($pow35=$p['__op_sub']($sub23=sy1,$sub24=sy2))==typeof ($pow36=$constant_int_2) && typeof $pow35=='number'?
					Math['pow']($pow35,$pow36):
					$p['op_pow']($pow35,$pow36))), $p['__op_add']($add45=(typeof ($pow37=radius1)==typeof ($pow38=$constant_int_2) && typeof $pow37=='number'?
					Math['pow']($pow37,$pow38):
					$p['op_pow']($pow37,$pow38)),$add46=(typeof ($pow39=radius2)==typeof ($pow40=$constant_int_2) && typeof $pow39=='number'?
					Math['pow']($pow39,$pow40):
					$p['op_pow']($pow39,$pow40)))) == -1);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sprite1'],['sprite2']]);
			$cls_definition['__call__'] = $method;
			$pyjs['track']['lineno']=639;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('_collide_circle_ratio', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=662;
		$m['collide_mask'] = function(sprite1, sprite2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $sub26,$sub27,$sub25,$sub28,mask1,mask2;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':662};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=662;
			$pyjs['track']['lineno']=670;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['hasattr'](sprite1, 'mask');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})()) {
				$pyjs['track']['lineno']=671;
				mask1 = $p['getattr'](sprite1, 'mask');
			}
			else {
				$pyjs['track']['lineno']=673;
				mask1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['mask']['from_surface']($p['getattr'](sprite1, 'image'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})();
			}
			$pyjs['track']['lineno']=674;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['hasattr'](sprite2, 'mask');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_284_err){if (!$p['isinstance']($pyjs_dbg_284_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_284_err);}throw $pyjs_dbg_284_err;
}})()) {
				$pyjs['track']['lineno']=675;
				mask2 = $p['getattr'](sprite2, 'mask');
			}
			else {
				$pyjs['track']['lineno']=677;
				mask2 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['mask']['from_surface']($p['getattr'](sprite2, 'image'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_285_err){if (!$p['isinstance']($pyjs_dbg_285_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_285_err);}throw $pyjs_dbg_285_err;
}})();
			}
			$pyjs['track']['lineno']=678;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return mask1['overlap'](mask2, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([$p['__op_sub']($sub25=$p['getattr']($p['getattr'](sprite2, 'rect'), 'x'),$sub26=$p['getattr']($p['getattr'](sprite1, 'rect'), 'x')), $p['__op_sub']($sub27=$p['getattr']($p['getattr'](sprite2, 'rect'), 'y'),$sub28=$p['getattr']($p['getattr'](sprite1, 'rect'), 'y'))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_286_err){if (!$p['isinstance']($pyjs_dbg_286_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_286_err);}throw $pyjs_dbg_286_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_287_err){if (!$p['isinstance']($pyjs_dbg_287_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_287_err);}throw $pyjs_dbg_287_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_288_err){if (!$p['isinstance']($pyjs_dbg_288_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_288_err);}throw $pyjs_dbg_288_err;
}})()) {
				$pyjs['track']['lineno']=679;
				$pyjs['track']['lineno']=679;
				var $pyjs__ret = true;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else {
				$pyjs['track']['lineno']=681;
				$pyjs['track']['lineno']=681;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['collide_mask']['__name__'] = 'collide_mask';

		$m['collide_mask']['__bind_type__'] = 0;
		$m['collide_mask']['__args__'] = [null,null,['sprite1'],['sprite2']];
		$pyjs['track']['lineno']=684;
		$m['groupcollide'] = function(group1, group2, dokill1, dokill2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			var $iter29_type,$iter26_nextval,$iter28_idx,$iter26_idx,$iter26_array,$iter27_nextval,$iter30_nextval,$iter27_array,$iter26_type,$iter27_iter,sprite2,$iter27_type,sprite1,$iter30_type,collide,$iter29_nextval,$iter30_idx,$iter28_iter,$iter28_type,$iter26_iter,$iter28_array,$iter30_iter,$iter28_nextval,$iter27_idx,$pyjs__trackstack_size_2,$iter29_array,$pyjs__trackstack_size_1,$iter30_array,$iter29_idx,$iter29_iter;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':684};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=684;
			$pyjs['track']['lineno']=691;
			collide = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_289_err){if (!$p['isinstance']($pyjs_dbg_289_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_289_err);}throw $pyjs_dbg_289_err;
}})();
			$pyjs['track']['lineno']=692;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter26_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return group1;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_290_err){if (!$p['isinstance']($pyjs_dbg_290_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_290_err);}throw $pyjs_dbg_290_err;
}})();
			$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
			while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
				sprite1 = $iter26_nextval['$nextval'];
				$pyjs['track']['lineno']=693;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter27_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return group2;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_291_err){if (!$p['isinstance']($pyjs_dbg_291_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_291_err);}throw $pyjs_dbg_291_err;
}})();
				$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
				while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
					sprite2 = $iter27_nextval['$nextval'];
					$pyjs['track']['lineno']=694;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return sprite1['rect']['intersects']($p['getattr'](sprite2, 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_292_err){if (!$p['isinstance']($pyjs_dbg_292_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_292_err);}throw $pyjs_dbg_292_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})()) {
						$pyjs['track']['lineno']=695;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!collide['__contains__'](sprite1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_294_err){if (!$p['isinstance']($pyjs_dbg_294_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_294_err);}throw $pyjs_dbg_294_err;
}})()) {
							$pyjs['track']['lineno']=696;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return collide['__setitem__'](sprite1, (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})();
						}
						$pyjs['track']['lineno']=697;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return collide['__getitem__'](sprite1)['append'](sprite2);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_297_err){if (!$p['isinstance']($pyjs_dbg_297_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_297_err);}throw $pyjs_dbg_297_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=698;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](collide);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_298_err){if (!$p['isinstance']($pyjs_dbg_298_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_298_err);}throw $pyjs_dbg_298_err;
}})()) {
				$pyjs['track']['lineno']=699;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](dokill1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_299_err){if (!$p['isinstance']($pyjs_dbg_299_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_299_err);}throw $pyjs_dbg_299_err;
}})()) {
					$pyjs['track']['lineno']=700;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter28_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return collide;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_300_err){if (!$p['isinstance']($pyjs_dbg_300_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_300_err);}throw $pyjs_dbg_300_err;
}})();
					$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
					while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
						sprite1 = $iter28_nextval['$nextval'];
						$pyjs['track']['lineno']=701;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return sprite1['kill']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_301_err){if (!$p['isinstance']($pyjs_dbg_301_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_301_err);}throw $pyjs_dbg_301_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				$pyjs['track']['lineno']=702;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](dokill2);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_302_err){if (!$p['isinstance']($pyjs_dbg_302_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_302_err);}throw $pyjs_dbg_302_err;
}})()) {
					$pyjs['track']['lineno']=703;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter29_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return collide;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_303_err){if (!$p['isinstance']($pyjs_dbg_303_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_303_err);}throw $pyjs_dbg_303_err;
}})();
					$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
					while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
						sprite1 = $iter29_nextval['$nextval'];
						$pyjs['track']['lineno']=704;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter30_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return collide['__getitem__'](sprite1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_304_err){if (!$p['isinstance']($pyjs_dbg_304_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_304_err);}throw $pyjs_dbg_304_err;
}})();
						$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
						while (typeof($p['__wrapped_next']($iter30_nextval)['$nextval']) != 'undefined') {
							sprite2 = $iter30_nextval['$nextval'];
							$pyjs['track']['lineno']=705;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return sprite2['kill']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_305_err){if (!$p['isinstance']($pyjs_dbg_305_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_305_err);}throw $pyjs_dbg_305_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.sprite';
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
			}
			$pyjs['track']['lineno']=706;
			$pyjs['track']['lineno']=706;
			var $pyjs__ret = collide;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['groupcollide']['__name__'] = 'groupcollide';

		$m['groupcollide']['__bind_type__'] = 0;
		$m['groupcollide']['__args__'] = [null,null,['group1'],['group2'],['dokill1'],['dokill2']];
		$pyjs['track']['lineno']=709;
		$m['spritecollideany'] = function(sprite, group) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter31_array,$iter31_nextval,$iter31_idx,$iter31_type,$pyjs__trackstack_size_1,$iter31_iter,sprites;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':709};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=709;
			$pyjs['track']['lineno']=715;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter31_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return group;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_306_err){if (!$p['isinstance']($pyjs_dbg_306_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_306_err);}throw $pyjs_dbg_306_err;
}})();
			$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
			while (typeof($p['__wrapped_next']($iter31_nextval)['$nextval']) != 'undefined') {
				sprites = $iter31_nextval['$nextval'];
				$pyjs['track']['lineno']=716;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return sprite['rect']['intersects']($p['getattr'](sprites, 'rect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_307_err){if (!$p['isinstance']($pyjs_dbg_307_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_307_err);}throw $pyjs_dbg_307_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_308_err){if (!$p['isinstance']($pyjs_dbg_308_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_308_err);}throw $pyjs_dbg_308_err;
}})()) {
					$pyjs['track']['lineno']=717;
					$pyjs['track']['lineno']=717;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=718;
			$pyjs['track']['lineno']=718;
			var $pyjs__ret = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['spritecollideany']['__name__'] = 'spritecollideany';

		$m['spritecollideany']['__bind_type__'] = 0;
		$m['spritecollideany']['__args__'] = [null,null,['sprite'],['group']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.sprite */


/* end module: pyjsdl.sprite */


/*
PYJS_DEPS: ['pyjsdl.rect.rectPool', 'pyjsdl', 'pyjsdl.rect', 'pyjsdl.mask']
*/
