/* start module: pyjsdl.event */
$pyjs['loaded_modules']['pyjsdl.event'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.event']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.event'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.event'];
	$m['__repr__'] = function() { return '<module: pyjsdl.event>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.event';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['event'] = $pyjs['loaded_modules']['pyjsdl.event'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.event.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.event.py, line 4:\n    from pyjsdl import env';
		$m.__track_lines__[5] = 'pyjsdl.event.py, line 5:\n    from pyjsdl import locals as Const';
		$m.__track_lines__[7] = "pyjsdl.event.py, line 7:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[10] = 'pyjsdl.event.py, line 10:\n    class Event(object):';
		$m.__track_lines__[28] = 'pyjsdl.event.py, line 28:\n    def __init__(self):';
		$m.__track_lines__[34] = 'pyjsdl.event.py, line 34:\n    self.eventQueue = [None for i in range(256)]      #max 256: Error: Event queue full';
		$m.__track_lines__[36] = 'pyjsdl.event.py, line 36:\n    self.eventNum = 0';
		$m.__track_lines__[37] = 'pyjsdl.event.py, line 37:\n    self.eventQueueTmp = [None for i in range(256)]   #used when main queue is locked';
		$m.__track_lines__[39] = 'pyjsdl.event.py, line 39:\n    self.eventNumTmp = 0';
		$m.__track_lines__[40] = 'pyjsdl.event.py, line 40:\n    self.queueLock = False';
		$m.__track_lines__[41] = 'pyjsdl.event.py, line 41:\n    self.queueAccess = False';
		$m.__track_lines__[42] = 'pyjsdl.event.py, line 42:\n    self.queue = []';
		$m.__track_lines__[43] = 'pyjsdl.event.py, line 43:\n    self.queueNil = []';
		$m.__track_lines__[44] = 'pyjsdl.event.py, line 44:\n    self.queueTmp = []';
		$m.__track_lines__[45] = 'pyjsdl.event.py, line 45:\n    self.mousePress = {0:False, 1:False, 2:False}';
		$m.__track_lines__[46] = "pyjsdl.event.py, line 46:\n    self.mouseMove = {'x':-1, 'y':-1}";
		$m.__track_lines__[47] = "pyjsdl.event.py, line 47:\n    self.mouseMoveRel = {'x':None, 'y':None}";
		$m.__track_lines__[48] = 'pyjsdl.event.py, line 48:\n    self.keyPress = {Const.K_ALT:False, Const.K_CTRL:False, Const.K_SHIFT:False}';
		$m.__track_lines__[49] = 'pyjsdl.event.py, line 49:\n    self.keyMod = {Const.K_ALT:{True:Const.KMOD_ALT,False:0}, Const.K_CTRL:{True:Const.KMOD_CTRL,False:0}, Const.K_SHIFT:{True:Const.KMOD_SHIFT,False:0}}';
		$m.__track_lines__[50] = "pyjsdl.event.py, line 50:\n    self.eventName = {'mousemove':'MouseMotion', 'mousedown':'MouseButtonDown', 'mouseup':'MouseButtonUp', 'keydown':'KeyDown', 'keyup':'KeyUp'}";
		$m.__track_lines__[51] = "pyjsdl.event.py, line 51:\n    self.eventType = ['mousemove', 'mousedown', 'mouseup', 'wheel', 'mousewheel', 'DOMMouseScroll', 'keydown', 'keypress', 'keyup']";
		$m.__track_lines__[52] = 'pyjsdl.event.py, line 52:\n    self.events = set(self.eventType)';
		$m.__track_lines__[53] = "pyjsdl.event.py, line 53:\n    self.eventTypes = {Const.MOUSEMOTION:['mousemove'], Const.MOUSEBUTTONDOWN:['mousedown','wheel','mousewheel', 'DOMMouseScroll'], Const.MOUSEBUTTONUP:['mouseup'], Const.KEYDOWN:['keydown','keypress'], Const.KEYUP:['keyup']}";
		$m.__track_lines__[54] = 'pyjsdl.event.py, line 54:\n    if env.pyjs_mode.optimized:';
		$m.__track_lines__[55] = 'pyjsdl.event.py, line 55:\n    self.modKey = set([Const.K_ALT, Const.K_CTRL, Const.K_SHIFT])';
		$m.__track_lines__[56] = 'pyjsdl.event.py, line 56:\n    self.specialKey = set([Const.K_UP, Const.K_DOWN, Const.K_LEFT, Const.K_RIGHT, Const.K_HOME, Const.K_END, Const.K_PAGEDOWN, Const.K_PAGEUP, Const.K_BACKSPACE, Const.K_DELETE, Const.K_INSERT, Const.K_RETURN, Const.K_TAB, Const.K_ESCAPE])';
		$m.__track_lines__[58] = 'pyjsdl.event.py, line 58:\n    self.modKey = set([keycode.valueOf() for keycode in (Const.K_ALT, Const.K_CTRL, Const.K_SHIFT)])';
		$m.__track_lines__[59] = 'pyjsdl.event.py, line 59:\n    self.specialKey = set([keycode.valueOf() for keycode in (Const.K_UP, Const.K_DOWN, Const.K_LEFT, Const.K_RIGHT, Const.K_HOME, Const.K_END, Const.K_PAGEDOWN, Const.K_PAGEUP, Const.K_BACKSPACE, Const.K_DELETE, Const.K_INSERT, Const.K_RETURN, Const.K_TAB, Const.K_ESCAPE)])';
		$m.__track_lines__[61] = 'pyjsdl.event.py, line 61:\n    self.touchlistener = None';
		$m.__track_lines__[62] = 'pyjsdl.event.py, line 62:\n    self.Event = UserEvent';
		$m.__track_lines__[63] = 'pyjsdl.event.py, line 63:\n    self._nonimplemented_methods()';
		$m.__track_lines__[65] = 'pyjsdl.event.py, line 65:\n    def _lock(self):';
		$m.__track_lines__[66] = 'pyjsdl.event.py, line 66:\n    self.queueLock = True';
		$m.__track_lines__[68] = 'pyjsdl.event.py, line 68:\n    def _unlock(self):';
		$m.__track_lines__[69] = 'pyjsdl.event.py, line 69:\n    self.queueLock = False';
		$m.__track_lines__[71] = 'pyjsdl.event.py, line 71:\n    def _updateQueue(self, event):';
		$m.__track_lines__[72] = 'pyjsdl.event.py, line 72:\n    if event.type not in self.events:';
		$m.__track_lines__[73] = 'pyjsdl.event.py, line 73:\n    return';
		$m.__track_lines__[74] = 'pyjsdl.event.py, line 74:\n    self.queueAccess = True';
		$m.__track_lines__[75] = 'pyjsdl.event.py, line 75:\n    if not self.queueLock:';
		$m.__track_lines__[76] = 'pyjsdl.event.py, line 76:\n    if self.eventNumTmp:';
		$m.__track_lines__[77] = 'pyjsdl.event.py, line 77:\n    self._appendMerge()';
		$m.__track_lines__[78] = 'pyjsdl.event.py, line 78:\n    self._append(event)';
		$m.__track_lines__[80] = 'pyjsdl.event.py, line 80:\n    self._appendTmp(event)';
		$m.__track_lines__[81] = 'pyjsdl.event.py, line 81:\n    self.queueAccess = False';
		$m.__track_lines__[83] = 'pyjsdl.event.py, line 83:\n    def _append(self, event):';
		$m.__track_lines__[84] = 'pyjsdl.event.py, line 84:\n    if self.eventNum < 255:';
		$m.__track_lines__[85] = 'pyjsdl.event.py, line 85:\n    self.eventQueue[self.eventNum] = event';
		$m.__track_lines__[86] = 'pyjsdl.event.py, line 86:\n    self.eventNum += 1';
		$m.__track_lines__[88] = 'pyjsdl.event.py, line 88:\n    def _appendTmp(self, event):';
		$m.__track_lines__[89] = 'pyjsdl.event.py, line 89:\n    if self.eventNumTmp < 255:';
		$m.__track_lines__[90] = 'pyjsdl.event.py, line 90:\n    self.eventQueueTmp[self.eventNumTmp] = event';
		$m.__track_lines__[91] = 'pyjsdl.event.py, line 91:\n    self.eventNumTmp += 1';
		$m.__track_lines__[93] = 'pyjsdl.event.py, line 93:\n    def _appendMerge(self):';
		$m.__track_lines__[94] = 'pyjsdl.event.py, line 94:\n    for i in range(self.eventNumTmp):';
		$m.__track_lines__[95] = 'pyjsdl.event.py, line 95:\n    self._append( self.eventQueueTmp[i] )';
		$m.__track_lines__[96] = 'pyjsdl.event.py, line 96:\n    self.eventQueueTmp[i] = None';
		$m.__track_lines__[97] = 'pyjsdl.event.py, line 97:\n    self.eventNumTmp = 0';
		$m.__track_lines__[99] = 'pyjsdl.event.py, line 99:\n    def pump(self):';
		$m.__track_lines__[103] = 'pyjsdl.event.py, line 103:\n    if self.eventNum > 250:';
		$m.__track_lines__[104] = 'pyjsdl.event.py, line 104:\n    self._lock()';
		$m.__track_lines__[105] = 'pyjsdl.event.py, line 105:\n    self._pump()';
		$m.__track_lines__[106] = 'pyjsdl.event.py, line 106:\n    self._unlock()';
		$m.__track_lines__[107] = 'pyjsdl.event.py, line 107:\n    return None';
		$m.__track_lines__[109] = 'pyjsdl.event.py, line 109:\n    def _pump(self):';
		$m.__track_lines__[110] = 'pyjsdl.event.py, line 110:\n    queue = self.eventQueue[50:self.eventNum]';
		$m.__track_lines__[111] = 'pyjsdl.event.py, line 111:\n    self.eventNum -= 50';
		$m.__track_lines__[112] = 'pyjsdl.event.py, line 112:\n    for i in range(self.eventNum):';
		$m.__track_lines__[113] = 'pyjsdl.event.py, line 113:\n    self.eventQueue[i] = queue[i]';
		$m.__track_lines__[115] = 'pyjsdl.event.py, line 115:\n    def get(self, eventType=None):';
		$m.__track_lines__[120] = 'pyjsdl.event.py, line 120:\n    if not self.eventNum:';
		$m.__track_lines__[121] = 'pyjsdl.event.py, line 121:\n    return self.queueNil';
		$m.__track_lines__[122] = 'pyjsdl.event.py, line 122:\n    self._lock()';
		$m.__track_lines__[123] = 'pyjsdl.event.py, line 123:\n    if not eventType:';
		$m.__track_lines__[124] = 'pyjsdl.event.py, line 124:\n    self.queue = [ JEvent(event) for event in self.eventQueue[0:self.eventNum] ]';
		$m.__track_lines__[125] = 'pyjsdl.event.py, line 125:\n    self.eventNum = 0';
		$m.__track_lines__[127] = 'pyjsdl.event.py, line 127:\n    if not isinstance(eventType, (tuple,list)):';
		$m.__track_lines__[128] = 'pyjsdl.event.py, line 128:\n    evtType = [et for et in self.eventTypes[eventType]]';
		$m.__track_lines__[130] = 'pyjsdl.event.py, line 130:\n    evtType = [et for t in eventType for et in self.eventTypes[t]]';
		$m.__track_lines__[131] = 'pyjsdl.event.py, line 131:\n    self.queue = []';
		$m.__track_lines__[132] = 'pyjsdl.event.py, line 132:\n    for i in range(self.eventNum):';
		$m.__track_lines__[133] = 'pyjsdl.event.py, line 133:\n    if self.eventQueue[i].type not in evtType:';
		$m.__track_lines__[134] = 'pyjsdl.event.py, line 134:\n    self.queueTmp.append(self.eventQueue[i])';
		$m.__track_lines__[136] = 'pyjsdl.event.py, line 136:\n    self.queue.append( JEvent(self.eventQueue[i]) )';
		$m.__track_lines__[137] = 'pyjsdl.event.py, line 137:\n    if not self.queueTmp:';
		$m.__track_lines__[138] = 'pyjsdl.event.py, line 138:\n    self.eventNum = 0';
		$m.__track_lines__[140] = 'pyjsdl.event.py, line 140:\n    self.eventNum = len(self.queueTmp)';
		$m.__track_lines__[141] = 'pyjsdl.event.py, line 141:\n    for i in range(self.eventNum):';
		$m.__track_lines__[142] = 'pyjsdl.event.py, line 142:\n    self.eventQueue[i] = self.queueTmp[i]';
		$m.__track_lines__[143] = 'pyjsdl.event.py, line 143:\n    self.queueTmp[:] = []';
		$m.__track_lines__[144] = 'pyjsdl.event.py, line 144:\n    if self.eventNum > 250:';
		$m.__track_lines__[145] = 'pyjsdl.event.py, line 145:\n    self._pump()';
		$m.__track_lines__[146] = 'pyjsdl.event.py, line 146:\n    self._unlock()';
		$m.__track_lines__[147] = 'pyjsdl.event.py, line 147:\n    return self.queue';
		$m.__track_lines__[149] = 'pyjsdl.event.py, line 149:\n    def poll(self):';
		$m.__track_lines__[153] = 'pyjsdl.event.py, line 153:\n    self._lock()';
		$m.__track_lines__[154] = 'pyjsdl.event.py, line 154:\n    if self.eventNum:';
		$m.__track_lines__[155] = 'pyjsdl.event.py, line 155:\n    evt = JEvent( self.eventQueue.pop(0) )';
		$m.__track_lines__[156] = 'pyjsdl.event.py, line 156:\n    self.eventNum -= 1';
		$m.__track_lines__[157] = 'pyjsdl.event.py, line 157:\n    self.eventQueue.append(None)';
		$m.__track_lines__[158] = 'pyjsdl.event.py, line 158:\n    if self.eventNum > 250:';
		$m.__track_lines__[159] = 'pyjsdl.event.py, line 159:\n    self._pump()';
		$m.__track_lines__[161] = 'pyjsdl.event.py, line 161:\n    evt = self.Event(Const.NOEVENT)';
		$m.__track_lines__[162] = 'pyjsdl.event.py, line 162:\n    self._unlock()';
		$m.__track_lines__[163] = 'pyjsdl.event.py, line 163:\n    return evt';
		$m.__track_lines__[165] = 'pyjsdl.event.py, line 165:\n    def wait(self):     #not implemented in js';
		$m.__track_lines__[169] = 'pyjsdl.event.py, line 169:\n    while True:';
		$m.__track_lines__[170] = 'pyjsdl.event.py, line 170:\n    if self.eventNum:';
		$m.__track_lines__[171] = 'pyjsdl.event.py, line 171:\n    self._lock()';
		$m.__track_lines__[172] = 'pyjsdl.event.py, line 172:\n    evt = JEvent( self.eventQueue.pop(0) )';
		$m.__track_lines__[173] = 'pyjsdl.event.py, line 173:\n    self.eventNum -= 1';
		$m.__track_lines__[174] = 'pyjsdl.event.py, line 174:\n    self.eventQueue.append(None)';
		$m.__track_lines__[175] = 'pyjsdl.event.py, line 175:\n    if self.eventNum > 250:';
		$m.__track_lines__[176] = 'pyjsdl.event.py, line 176:\n    self._pump()';
		$m.__track_lines__[177] = 'pyjsdl.event.py, line 177:\n    self._unlock()';
		$m.__track_lines__[178] = 'pyjsdl.event.py, line 178:\n    return evt';
		$m.__track_lines__[180] = 'pyjsdl.event.py, line 180:\n    self._unlock()';
		$m.__track_lines__[181] = 'pyjsdl.event.py, line 181:\n    return None';
		$m.__track_lines__[183] = 'pyjsdl.event.py, line 183:\n    def peek(self, eventType=None):';
		$m.__track_lines__[188] = 'pyjsdl.event.py, line 188:\n    if not self.eventNum:';
		$m.__track_lines__[189] = 'pyjsdl.event.py, line 189:\n    return False';
		$m.__track_lines__[191] = 'pyjsdl.event.py, line 191:\n    return True';
		$m.__track_lines__[192] = 'pyjsdl.event.py, line 192:\n    if not isinstance(eventType, (tuple,list)):';
		$m.__track_lines__[193] = 'pyjsdl.event.py, line 193:\n    evtType = [et for et in self.eventTypes[eventType]]';
		$m.__track_lines__[195] = 'pyjsdl.event.py, line 195:\n    evtType = [et for t in eventType for et in self.eventTypes[t]]';
		$m.__track_lines__[196] = 'pyjsdl.event.py, line 196:\n    self._lock()';
		$m.__track_lines__[197] = 'pyjsdl.event.py, line 197:\n    evt = [event.type for event in self.eventQueue[0:self.eventNum]]';
		$m.__track_lines__[198] = 'pyjsdl.event.py, line 198:\n    if self.eventNum > 250:';
		$m.__track_lines__[199] = 'pyjsdl.event.py, line 199:\n    self._pump()';
		$m.__track_lines__[200] = 'pyjsdl.event.py, line 200:\n    self._unlock()';
		$m.__track_lines__[201] = 'pyjsdl.event.py, line 201:\n    for et in evtType:';
		$m.__track_lines__[202] = 'pyjsdl.event.py, line 202:\n    if et in evt:';
		$m.__track_lines__[203] = 'pyjsdl.event.py, line 203:\n    return True';
		$m.__track_lines__[204] = 'pyjsdl.event.py, line 204:\n    return False';
		$m.__track_lines__[206] = 'pyjsdl.event.py, line 206:\n    def clear(self, eventType=None):';
		$m.__track_lines__[211] = 'pyjsdl.event.py, line 211:\n    if not self.eventNum:';
		$m.__track_lines__[212] = 'pyjsdl.event.py, line 212:\n    return None';
		$m.__track_lines__[213] = 'pyjsdl.event.py, line 213:\n    self._lock()';
		$m.__track_lines__[214] = 'pyjsdl.event.py, line 214:\n    if eventType is None:';
		$m.__track_lines__[215] = 'pyjsdl.event.py, line 215:\n    self.eventNum = 0';
		$m.__track_lines__[217] = 'pyjsdl.event.py, line 217:\n    if not isinstance(eventType, (tuple,list)):';
		$m.__track_lines__[218] = 'pyjsdl.event.py, line 218:\n    evtType = [et for et in self.eventTypes[eventType]]';
		$m.__track_lines__[220] = 'pyjsdl.event.py, line 220:\n    evtType = [et for t in eventType for et in self.eventTypes[t]]';
		$m.__track_lines__[221] = 'pyjsdl.event.py, line 221:\n    for i in range(self.eventNum):';
		$m.__track_lines__[222] = 'pyjsdl.event.py, line 222:\n    if self.eventQueue[i].type not in evtType:';
		$m.__track_lines__[223] = 'pyjsdl.event.py, line 223:\n    self.queueTmp.append(self.eventQueue[i])';
		$m.__track_lines__[224] = 'pyjsdl.event.py, line 224:\n    if not self.queueTmp:';
		$m.__track_lines__[225] = 'pyjsdl.event.py, line 225:\n    self.eventNum = 0';
		$m.__track_lines__[227] = 'pyjsdl.event.py, line 227:\n    self.eventNum = len(self.queueTmp)';
		$m.__track_lines__[228] = 'pyjsdl.event.py, line 228:\n    for i in range(self.eventNum):';
		$m.__track_lines__[229] = 'pyjsdl.event.py, line 229:\n    self.eventQueue[i] = self.queueTmp[i]';
		$m.__track_lines__[230] = 'pyjsdl.event.py, line 230:\n    self.queueTmp[:] = []';
		$m.__track_lines__[231] = 'pyjsdl.event.py, line 231:\n    if self.eventNum > 250:';
		$m.__track_lines__[232] = 'pyjsdl.event.py, line 232:\n    self._pump()';
		$m.__track_lines__[233] = 'pyjsdl.event.py, line 233:\n    self._unlock()';
		$m.__track_lines__[234] = 'pyjsdl.event.py, line 234:\n    return None';
		$m.__track_lines__[236] = 'pyjsdl.event.py, line 236:\n    def event_name(self, eventType):';
		$m.__track_lines__[240] = 'pyjsdl.event.py, line 240:\n    evtType = self.eventTypes[eventType][0]';
		$m.__track_lines__[241] = 'pyjsdl.event.py, line 241:\n    if evtType in self.eventName:';
		$m.__track_lines__[242] = 'pyjsdl.event.py, line 242:\n    return self.eventName[evtType]';
		$m.__track_lines__[244] = 'pyjsdl.event.py, line 244:\n    return None';
		$m.__track_lines__[246] = 'pyjsdl.event.py, line 246:\n    def set_blocked(self, eventType):';
		$m.__track_lines__[250] = 'pyjsdl.event.py, line 250:\n    if eventType is not None:';
		$m.__track_lines__[251] = 'pyjsdl.event.py, line 251:\n    if not isinstance(eventType, (tuple,list)):';
		$m.__track_lines__[252] = 'pyjsdl.event.py, line 252:\n    evtType = [et for et in self.eventTypes[eventType]]';
		$m.__track_lines__[254] = 'pyjsdl.event.py, line 254:\n    evtType = [et for t in eventType for et in self.eventTypes[t]]';
		$m.__track_lines__[255] = 'pyjsdl.event.py, line 255:\n    for et in evtType:';
		$m.__track_lines__[256] = 'pyjsdl.event.py, line 256:\n    if et in self.events:';
		$m.__track_lines__[257] = 'pyjsdl.event.py, line 257:\n    self.events.remove(et)';
		$m.__track_lines__[259] = 'pyjsdl.event.py, line 259:\n    for event in self.eventType:';
		$m.__track_lines__[260] = 'pyjsdl.event.py, line 260:\n    self.events.add(event)';
		$m.__track_lines__[261] = 'pyjsdl.event.py, line 261:\n    return None';
		$m.__track_lines__[263] = 'pyjsdl.event.py, line 263:\n    def set_allowed(self, eventType):';
		$m.__track_lines__[267] = 'pyjsdl.event.py, line 267:\n    if eventType is not None:';
		$m.__track_lines__[268] = 'pyjsdl.event.py, line 268:\n    if not isinstance(eventType, (tuple,list)):';
		$m.__track_lines__[269] = 'pyjsdl.event.py, line 269:\n    evtType = [et for et in self.eventTypes[eventType]]';
		$m.__track_lines__[271] = 'pyjsdl.event.py, line 271:\n    evtType = [et for t in eventType for et in self.eventTypes[t]]';
		$m.__track_lines__[272] = 'pyjsdl.event.py, line 272:\n    for et in evtType:';
		$m.__track_lines__[273] = 'pyjsdl.event.py, line 273:\n    self.events.add(et)';
		$m.__track_lines__[275] = 'pyjsdl.event.py, line 275:\n    self.events.clear()';
		$m.__track_lines__[276] = 'pyjsdl.event.py, line 276:\n    return None';
		$m.__track_lines__[278] = 'pyjsdl.event.py, line 278:\n    def get_blocked(self, eventType):';
		$m.__track_lines__[282] = 'pyjsdl.event.py, line 282:\n    evtType = [et for et in self.eventTypes[eventType]][0]';
		$m.__track_lines__[283] = 'pyjsdl.event.py, line 283:\n    if evtType not in self.events:';
		$m.__track_lines__[284] = 'pyjsdl.event.py, line 284:\n    return True';
		$m.__track_lines__[286] = 'pyjsdl.event.py, line 286:\n    return False';
		$m.__track_lines__[288] = 'pyjsdl.event.py, line 288:\n    def post(self, event):';
		$m.__track_lines__[292] = 'pyjsdl.event.py, line 292:\n    self._lock()';
		$m.__track_lines__[293] = 'pyjsdl.event.py, line 293:\n    self._append(event)';
		$m.__track_lines__[294] = 'pyjsdl.event.py, line 294:\n    if event.type not in self.events:';
		$m.__track_lines__[295] = 'pyjsdl.event.py, line 295:\n    self.eventTypes[event.type] = [event.type]';
		$m.__track_lines__[296] = 'pyjsdl.event.py, line 296:\n    self._unlock()';
		$m.__track_lines__[297] = 'pyjsdl.event.py, line 297:\n    return None';
		$m.__track_lines__[299] = 'pyjsdl.event.py, line 299:\n    def _initiate_touch_listener(self, canvas):';
		$m.__track_lines__[300] = 'pyjsdl.event.py, line 300:\n    self.touchlistener = TouchListener(canvas)';
		$m.__track_lines__[301] = 'pyjsdl.event.py, line 301:\n    return None';
		$m.__track_lines__[303] = 'pyjsdl.event.py, line 303:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[307] = 'pyjsdl.event.py, line 307:\n    self.set_grab = lambda *arg: None';
		$m.__track_lines__[308] = 'pyjsdl.event.py, line 308:\n    self.get_grab = lambda *arg: False';
		$m.__track_lines__[311] = 'pyjsdl.event.py, line 311:\n    class UserEvent(object):';
		$m.__track_lines__[313] = "pyjsdl.event.py, line 313:\n    __slots__ = ['type', 'attr']";
		$m.__track_lines__[315] = 'pyjsdl.event.py, line 315:\n    def __init__(self, eventType, *args, **kwargs):';
		$m.__track_lines__[321] = 'pyjsdl.event.py, line 321:\n    if args:';
		$m.__track_lines__[322] = 'pyjsdl.event.py, line 322:\n    attr = args[0]';
		$m.__track_lines__[324] = 'pyjsdl.event.py, line 324:\n    attr = kwargs';
		$m.__track_lines__[325] = 'pyjsdl.event.py, line 325:\n    object.__setattr__(self, "type", eventType)';
		$m.__track_lines__[326] = 'pyjsdl.event.py, line 326:\n    object.__setattr__(self, "attr", attr)';
		$m.__track_lines__[328] = 'pyjsdl.event.py, line 328:\n    def __repr__(self):';
		$m.__track_lines__[332] = 'pyjsdl.event.py, line 332:\n    return "%s(%s-UserEvent %r)" % (self.__class__, self.type, self.attr)';
		$m.__track_lines__[334] = 'pyjsdl.event.py, line 334:\n    def __getattr__(self, attr):';
		$m.__track_lines__[335] = 'pyjsdl.event.py, line 335:\n    if attr in self.attr:';
		$m.__track_lines__[336] = 'pyjsdl.event.py, line 336:\n    return self.attr[attr]';
		$m.__track_lines__[338] = 'pyjsdl.event.py, line 338:\n    raise AttributeError("\'Event\' object has no attribute \'%s\'" % attr)';
		$m.__track_lines__[340] = 'pyjsdl.event.py, line 340:\n    def __setattr__(self, attr, value):';
		$m.__track_lines__[341] = 'pyjsdl.event.py, line 341:\n    raise AttributeError("\'Event\' object has no attribute \'%s\'" % attr)';
		$m.__track_lines__[344] = 'pyjsdl.event.py, line 344:\n    class JEvent(object):';
		$m.__track_lines__[346] = 'pyjsdl.event.py, line 346:\n    _mouse_pos = (0, 0)';
		$m.__track_lines__[347] = "pyjsdl.event.py, line 347:\n    _types = {'mousemove':Const.MOUSEMOTION, 'mousedown':Const.MOUSEBUTTONDOWN, 'mouseup':Const.MOUSEBUTTONUP, 'wheel':Const.MOUSEBUTTONDOWN, 'mousewheel':Const.MOUSEBUTTONDOWN, 'DOMMouseScroll':Const.MOUSEBUTTONDOWN, 'keydown':Const.KEYDOWN, 'keypress':Const.KEYDOWN, 'keyup':Const.KEYUP}";
		$m.__track_lines__[348] = 'pyjsdl.event.py, line 348:\n    _charCode = {33:Const.K_EXCLAIM, 34:Const.K_QUOTEDBL, 35:Const.K_HASH, 36:Const.K_DOLLAR, 38:Const.K_AMPERSAND, 39:Const.K_QUOTE, 40:Const.K_LEFTPAREN, 41:Const.K_RIGHTPAREN, 42:Const.K_ASTERISK, 43:Const.K_PLUS, 44:Const.K_COMMA, 45:Const.K_MINUS, 46:Const.K_PERIOD, 97:Const.K_a, 98:Const.K_b, 99:Const.K_c, 100:Const.K_d, 101:Const.K_e, 102:Const.K_f, 103:Const.K_g, 104:Const.K_h, 105:Const.K_i, 106:Const.K_j, 107:Const.K_k, 108:Const.K_l, 109:Const.K_m, 110:Const.K_n, 111:Const.K_o, 112:Const.K_p, 113:Const.K_q, 114:Const.K_r, 115:Const.K_s, 116:Const.K_t, 117:Const.K_u, 118:Const.K_v, 119:Const.K_w, 120:Const.K_x, 121:Const.K_y, 122:Const.K_z}';
		$m.__track_lines__[350] = 'pyjsdl.event.py, line 350:\n    def __init__(self, event):';
		$m.__track_lines__[362] = 'pyjsdl.event.py, line 362:\n    self.event = event      #__getattr__ not implemented in pyjs -O';
		$m.__track_lines__[363] = "pyjsdl.event.py, line 363:\n    if event.type in ('mousedown', 'mouseup'):";
		$m.__track_lines__[364] = 'pyjsdl.event.py, line 364:\n    self.type = self.__class__._types[event.type]';
		$m.__track_lines__[365] = 'pyjsdl.event.py, line 365:\n    self.button = event.button + 1';
		$m.__track_lines__[366] = 'pyjsdl.event.py, line 366:\n    self.pos = event.pos[0]+env.frame.scrollLeft, event.pos[1]+env.frame.scrollTop';
		$m.__track_lines__[368] = 'pyjsdl.event.py, line 368:\n    self.type = self.__class__._types[event.type]';
		$m.__track_lines__[369] = 'pyjsdl.event.py, line 369:\n    self.button = event.button + 1';
		$m.__track_lines__[370] = 'pyjsdl.event.py, line 370:\n    self.pos = event.pos[0]+env.frame.scrollLeft, event.pos[1]+env.frame.scrollTop';
		$m.__track_lines__[371] = 'pyjsdl.event.py, line 371:\n    self.rel = (self.pos[0]-self.__class__._mouse_pos[0], self.pos[1]-self.__class__._mouse_pos[1])';
		$m.__track_lines__[372] = 'pyjsdl.event.py, line 372:\n    self.__class__._mouse_pos = self.pos';
		$m.__track_lines__[374] = 'pyjsdl.event.py, line 374:\n    self.type = self.__class__._types[event.type]';
		$m.__track_lines__[375] = 'pyjsdl.event.py, line 375:\n    self.button = event.btn';
		$m.__track_lines__[376] = 'pyjsdl.event.py, line 376:\n    self.pos = event.pos[0]+env.frame.scrollLeft, event.pos[1]+env.frame.scrollTop';
		$m.__track_lines__[378] = 'pyjsdl.event.py, line 378:\n    self.type = self.__class__._types[event.type]';
		$m.__track_lines__[379] = 'pyjsdl.event.py, line 379:\n    self.key = event.keyCode';
		$m.__track_lines__[381] = 'pyjsdl.event.py, line 381:\n    self.type = self.__class__._types[event.type]';
		$m.__track_lines__[382] = 'pyjsdl.event.py, line 382:\n    if event.keyCode:';
		$m.__track_lines__[383] = 'pyjsdl.event.py, line 383:\n    code = event.keyCode';
		$m.__track_lines__[385] = 'pyjsdl.event.py, line 385:\n    code = event.which';
		$m.__track_lines__[386] = 'pyjsdl.event.py, line 386:\n    if code in self.__class__._charCode:';
		$m.__track_lines__[387] = 'pyjsdl.event.py, line 387:\n    self.key = self.__class__._charCode[code]';
		$m.__track_lines__[389] = 'pyjsdl.event.py, line 389:\n    self.key = code';
		$m.__track_lines__[391] = 'pyjsdl.event.py, line 391:\n    self.type = event.type';
		$m.__track_lines__[392] = 'pyjsdl.event.py, line 392:\n    for attr in event.attr:';
		$m.__track_lines__[393] = 'pyjsdl.event.py, line 393:\n    object.__setattr__(self, attr, event.attr[attr])';
		$m.__track_lines__[395] = 'pyjsdl.event.py, line 395:\n    def __repr__(self):';
		$m.__track_lines__[399] = "pyjsdl.event.py, line 399:\n    if hasattr(self.event, 'toString'):";
		$m.__track_lines__[400] = 'pyjsdl.event.py, line 400:\n    return "%s(%s)" % (self.__class__, self.event.toString())';
		$m.__track_lines__[402] = 'pyjsdl.event.py, line 402:\n    return self.event.__repr__()';
		$m.__track_lines__[404] = 'pyjsdl.event.py, line 404:\n    def getEvent(self):';
		$m.__track_lines__[408] = 'pyjsdl.event.py, line 408:\n    return self.event';
		$m.__track_lines__[411] = 'pyjsdl.event.py, line 411:\n    class TouchListener:';
		$m.__track_lines__[419] = 'pyjsdl.event.py, line 419:\n    def __init__(self, canvas):';
		$m.__track_lines__[433] = 'pyjsdl.event.py, line 433:\n    global _canvas';
		$m.__track_lines__[434] = 'pyjsdl.event.py, line 434:\n    _canvas = canvas';
		$m.__track_lines__[435] = 'pyjsdl.event.py, line 435:\n    self.element = canvas.getElement()';
		$m.__track_lines__[436] = "pyjsdl.event.py, line 436:\n    self.element.addEventListener('touchstart', _touch_detect)";
		$m.__track_lines__[437] = 'pyjsdl.event.py, line 437:\n    self.active = False';
		$m.__track_lines__[438] = 'pyjsdl.event.py, line 438:\n    self.callback = []';
		$m.__track_lines__[440] = 'pyjsdl.event.py, line 440:\n    def activate(self):';
		$m.__track_lines__[441] = "pyjsdl.event.py, line 441:\n    self.element.removeEventListener('touchstart', _touch_detect)";
		$m.__track_lines__[442] = "pyjsdl.event.py, line 442:\n    self.element.addEventListener('touchstart', _touch_start)";
		$m.__track_lines__[443] = "pyjsdl.event.py, line 443:\n    self.element.addEventListener('touchend', _touch_end)";
		$m.__track_lines__[444] = "pyjsdl.event.py, line 444:\n    self.element.addEventListener('touchmove', _touch_move)";
		$m.__track_lines__[445] = "pyjsdl.event.py, line 445:\n    self.element.addEventListener('touchcancel', _touch_cancel)";
		$m.__track_lines__[446] = 'pyjsdl.event.py, line 446:\n    self.active = True';
		$m.__track_lines__[448] = 'pyjsdl.event.py, line 448:\n    def add_callback(self, callback):';
		$m.__track_lines__[455] = 'pyjsdl.event.py, line 455:\n    self.callback.append(callback)';
		$m.__track_lines__[456] = 'pyjsdl.event.py, line 456:\n    return None';
		$m.__track_lines__[458] = 'pyjsdl.event.py, line 458:\n    def is_active(self):';
		$m.__track_lines__[462] = 'pyjsdl.event.py, line 462:\n    return self.active';
		$m.__track_lines__[464] = 'pyjsdl.event.py, line 464:\n    _canvas = None';
		$m.__track_lines__[466] = 'pyjsdl.event.py, line 466:\n    def _touch_detect(event):';
		$m.__track_lines__[467] = 'pyjsdl.event.py, line 467:\n    _canvas.onTouchInitiate(event)';
		$m.__track_lines__[469] = 'pyjsdl.event.py, line 469:\n    def _touch_start(event):';
		$m.__track_lines__[470] = 'pyjsdl.event.py, line 470:\n    _canvas.onTouchStart(event)';
		$m.__track_lines__[472] = 'pyjsdl.event.py, line 472:\n    def _touch_end(event):';
		$m.__track_lines__[473] = 'pyjsdl.event.py, line 473:\n    _canvas.onTouchEnd(event)';
		$m.__track_lines__[475] = 'pyjsdl.event.py, line 475:\n    def _touch_move(event):';
		$m.__track_lines__[476] = 'pyjsdl.event.py, line 476:\n    _canvas.onTouchMove(event)';
		$m.__track_lines__[478] = 'pyjsdl.event.py, line 478:\n    def _touch_cancel(event):';
		$m.__track_lines__[479] = 'pyjsdl.event.py, line 479:\n    _canvas.onTouchCancel(event)';

		var $constant_int_256 = new $p['int'](256);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_33 = new $p['int'](33);
		var $constant_int_34 = new $p['int'](34);
		var $constant_int_35 = new $p['int'](35);
		var $constant_int_36 = new $p['int'](36);
		var $constant_int_38 = new $p['int'](38);
		var $constant_int_39 = new $p['int'](39);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_41 = new $p['int'](41);
		var $constant_int_42 = new $p['int'](42);
		var $constant_int_43 = new $p['int'](43);
		var $constant_int_44 = new $p['int'](44);
		var $constant_int_45 = new $p['int'](45);
		var $constant_int_46 = new $p['int'](46);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_122 = new $p['int'](122);
		var $constant_int_97 = new $p['int'](97);
		var $constant_int_98 = new $p['int'](98);
		var $constant_int_99 = new $p['int'](99);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_101 = new $p['int'](101);
		var $constant_int_102 = new $p['int'](102);
		var $constant_int_103 = new $p['int'](103);
		var $constant_int_104 = new $p['int'](104);
		var $constant_int_105 = new $p['int'](105);
		var $constant_int_106 = new $p['int'](106);
		var $constant_int_107 = new $p['int'](107);
		var $constant_int_108 = new $p['int'](108);
		var $constant_int_109 = new $p['int'](109);
		var $constant_int_110 = new $p['int'](110);
		var $constant_int_111 = new $p['int'](111);
		var $constant_int_112 = new $p['int'](112);
		var $constant_int_113 = new $p['int'](113);
		var $constant_int_114 = new $p['int'](114);
		var $constant_int_115 = new $p['int'](115);
		var $constant_int_116 = new $p['int'](116);
		var $constant_int_117 = new $p['int'](117);
		var $constant_int_118 = new $p['int'](118);
		var $constant_int_119 = new $p['int'](119);
		var $constant_int_120 = new $p['int'](120);
		var $constant_int_121 = new $p['int'](121);
		var $constant_int_250 = new $p['int'](250);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='pyjsdl.event';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Const'] = $p['___import___']('pyjsdl.locals', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=10;
		$m['Event'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.event';
			$cls_definition['__md5__'] = 'f8032c59f2c2d3f0ddf56ddfccacf0be';
			$pyjs['track']['lineno']=28;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':28};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=28;
				$pyjs['track']['lineno']=34;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventQueue', function(){
					var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range']($constant_int_256);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp1['append'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp1;}()) : $p['setattr'](self, 'eventQueue', function(){
					var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range']($constant_int_256);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp1['append'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp1;}()); 
				$pyjs['track']['lineno']=36;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $constant_int_0) : $p['setattr'](self, 'eventNum', $constant_int_0); 
				$pyjs['track']['lineno']=37;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventQueueTmp', function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,i,$collcomp2,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range']($constant_int_256);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					i = $iter2_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp2['append'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp2;}()) : $p['setattr'](self, 'eventQueueTmp', function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,i,$collcomp2,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range']($constant_int_256);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					i = $iter2_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp2['append'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp2;}()); 
				$pyjs['track']['lineno']=39;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNumTmp', $constant_int_0) : $p['setattr'](self, 'eventNumTmp', $constant_int_0); 
				$pyjs['track']['lineno']=40;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueLock', false) : $p['setattr'](self, 'queueLock', false); 
				$pyjs['track']['lineno']=41;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueAccess', false) : $p['setattr'](self, 'queueAccess', false); 
				$pyjs['track']['lineno']=42;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queue', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) : $p['setattr'](self, 'queue', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()); 
				$pyjs['track']['lineno']=43;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueNil', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) : $p['setattr'](self, 'queueNil', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()); 
				$pyjs['track']['lineno']=44;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueTmp', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) : $p['setattr'](self, 'queueTmp', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()); 
				$pyjs['track']['lineno']=45;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mousePress', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$constant_int_0, false], [$constant_int_1, false], [$constant_int_2, false]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) : $p['setattr'](self, 'mousePress', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$constant_int_0, false], [$constant_int_1, false], [$constant_int_2, false]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()); 
				$pyjs['track']['lineno']=46;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mouseMove', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['x', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))], ['y', (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) : $p['setattr'](self, 'mouseMove', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['x', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))], ['y', (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()); 
				$pyjs['track']['lineno']=47;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mouseMoveRel', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['x', null], ['y', null]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) : $p['setattr'](self, 'mouseMoveRel', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['x', null], ['y', null]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()); 
				$pyjs['track']['lineno']=48;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('keyPress', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$p['getattr']($m['Const'], 'K_ALT'), false], [$p['getattr']($m['Const'], 'K_CTRL'), false], [$p['getattr']($m['Const'], 'K_SHIFT'), false]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) : $p['setattr'](self, 'keyPress', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$p['getattr']($m['Const'], 'K_ALT'), false], [$p['getattr']($m['Const'], 'K_CTRL'), false], [$p['getattr']($m['Const'], 'K_SHIFT'), false]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()); 
				$pyjs['track']['lineno']=49;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('keyMod', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$p['getattr']($m['Const'], 'K_ALT'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_ALT')], [false, $constant_int_0]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()], [$p['getattr']($m['Const'], 'K_CTRL'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_CTRL')], [false, $constant_int_0]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()], [$p['getattr']($m['Const'], 'K_SHIFT'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_SHIFT')], [false, $constant_int_0]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) : $p['setattr'](self, 'keyMod', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$p['getattr']($m['Const'], 'K_ALT'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_ALT')], [false, $constant_int_0]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()], [$p['getattr']($m['Const'], 'K_CTRL'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_CTRL')], [false, $constant_int_0]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()], [$p['getattr']($m['Const'], 'K_SHIFT'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_SHIFT')], [false, $constant_int_0]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()); 
				$pyjs['track']['lineno']=50;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventName', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['mousemove', 'MouseMotion'], ['mousedown', 'MouseButtonDown'], ['mouseup', 'MouseButtonUp'], ['keydown', 'KeyDown'], ['keyup', 'KeyUp']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) : $p['setattr'](self, 'eventName', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['mousemove', 'MouseMotion'], ['mousedown', 'MouseButtonDown'], ['mouseup', 'MouseButtonUp'], ['keydown', 'KeyDown'], ['keyup', 'KeyUp']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()); 
				$pyjs['track']['lineno']=51;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventType', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['mousemove', 'mousedown', 'mouseup', 'wheel', 'mousewheel', 'DOMMouseScroll', 'keydown', 'keypress', 'keyup']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) : $p['setattr'](self, 'eventType', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['mousemove', 'mousedown', 'mouseup', 'wheel', 'mousewheel', 'DOMMouseScroll', 'keydown', 'keypress', 'keyup']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()); 
				$pyjs['track']['lineno']=52;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('events', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['set']($p['getattr'](self, 'eventType'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) : $p['setattr'](self, 'events', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['set']($p['getattr'](self, 'eventType'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()); 
				$pyjs['track']['lineno']=53;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventTypes', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$p['getattr']($m['Const'], 'MOUSEMOTION'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['mousemove']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()], [$p['getattr']($m['Const'], 'MOUSEBUTTONDOWN'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['mousedown', 'wheel', 'mousewheel', 'DOMMouseScroll']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()], [$p['getattr']($m['Const'], 'MOUSEBUTTONUP'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['mouseup']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()], [$p['getattr']($m['Const'], 'KEYDOWN'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['keydown', 'keypress']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()], [$p['getattr']($m['Const'], 'KEYUP'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['keyup']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) : $p['setattr'](self, 'eventTypes', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$p['getattr']($m['Const'], 'MOUSEMOTION'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['mousemove']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()], [$p['getattr']($m['Const'], 'MOUSEBUTTONDOWN'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['mousedown', 'wheel', 'mousewheel', 'DOMMouseScroll']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()], [$p['getattr']($m['Const'], 'MOUSEBUTTONUP'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['mouseup']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()], [$p['getattr']($m['Const'], 'KEYDOWN'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['keydown', 'keypress']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()], [$p['getattr']($m['Const'], 'KEYUP'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['keyup']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()); 
				$pyjs['track']['lineno']=54;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr']($p['getattr']($m['env'], 'pyjs_mode'), 'optimized'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) {
					$pyjs['track']['lineno']=55;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modKey', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['set']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([$p['getattr']($m['Const'], 'K_ALT'), $p['getattr']($m['Const'], 'K_CTRL'), $p['getattr']($m['Const'], 'K_SHIFT')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) : $p['setattr'](self, 'modKey', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['set']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([$p['getattr']($m['Const'], 'K_ALT'), $p['getattr']($m['Const'], 'K_CTRL'), $p['getattr']($m['Const'], 'K_SHIFT')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()); 
					$pyjs['track']['lineno']=56;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('specialKey', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['set']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([$p['getattr']($m['Const'], 'K_UP'), $p['getattr']($m['Const'], 'K_DOWN'), $p['getattr']($m['Const'], 'K_LEFT'), $p['getattr']($m['Const'], 'K_RIGHT'), $p['getattr']($m['Const'], 'K_HOME'), $p['getattr']($m['Const'], 'K_END'), $p['getattr']($m['Const'], 'K_PAGEDOWN'), $p['getattr']($m['Const'], 'K_PAGEUP'), $p['getattr']($m['Const'], 'K_BACKSPACE'), $p['getattr']($m['Const'], 'K_DELETE'), $p['getattr']($m['Const'], 'K_INSERT'), $p['getattr']($m['Const'], 'K_RETURN'), $p['getattr']($m['Const'], 'K_TAB'), $p['getattr']($m['Const'], 'K_ESCAPE')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) : $p['setattr'](self, 'specialKey', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['set']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([$p['getattr']($m['Const'], 'K_UP'), $p['getattr']($m['Const'], 'K_DOWN'), $p['getattr']($m['Const'], 'K_LEFT'), $p['getattr']($m['Const'], 'K_RIGHT'), $p['getattr']($m['Const'], 'K_HOME'), $p['getattr']($m['Const'], 'K_END'), $p['getattr']($m['Const'], 'K_PAGEDOWN'), $p['getattr']($m['Const'], 'K_PAGEUP'), $p['getattr']($m['Const'], 'K_BACKSPACE'), $p['getattr']($m['Const'], 'K_DELETE'), $p['getattr']($m['Const'], 'K_INSERT'), $p['getattr']($m['Const'], 'K_RETURN'), $p['getattr']($m['Const'], 'K_TAB'), $p['getattr']($m['Const'], 'K_ESCAPE')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()); 
				}
				else {
					$pyjs['track']['lineno']=58;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modKey', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['set'](function(){
						var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp3,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,keycode;
	$collcomp3 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr']($m['Const'], 'K_ALT'), $p['getattr']($m['Const'], 'K_CTRL'), $p['getattr']($m['Const'], 'K_SHIFT')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						keycode = $iter3_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp3['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return keycode['valueOf']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp3;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) : $p['setattr'](self, 'modKey', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['set'](function(){
						var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp3,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,keycode;
	$collcomp3 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr']($m['Const'], 'K_ALT'), $p['getattr']($m['Const'], 'K_CTRL'), $p['getattr']($m['Const'], 'K_SHIFT')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						keycode = $iter3_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp3['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return keycode['valueOf']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp3;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()); 
					$pyjs['track']['lineno']=59;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('specialKey', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['set'](function(){
						var $iter4_nextval,$collcomp4,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter,keycode;
	$collcomp4 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr']($m['Const'], 'K_UP'), $p['getattr']($m['Const'], 'K_DOWN'), $p['getattr']($m['Const'], 'K_LEFT'), $p['getattr']($m['Const'], 'K_RIGHT'), $p['getattr']($m['Const'], 'K_HOME'), $p['getattr']($m['Const'], 'K_END'), $p['getattr']($m['Const'], 'K_PAGEDOWN'), $p['getattr']($m['Const'], 'K_PAGEUP'), $p['getattr']($m['Const'], 'K_BACKSPACE'), $p['getattr']($m['Const'], 'K_DELETE'), $p['getattr']($m['Const'], 'K_INSERT'), $p['getattr']($m['Const'], 'K_RETURN'), $p['getattr']($m['Const'], 'K_TAB'), $p['getattr']($m['Const'], 'K_ESCAPE')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						keycode = $iter4_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp4['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return keycode['valueOf']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp4;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()) : $p['setattr'](self, 'specialKey', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['set'](function(){
						var $iter4_nextval,$collcomp4,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter,keycode;
	$collcomp4 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr']($m['Const'], 'K_UP'), $p['getattr']($m['Const'], 'K_DOWN'), $p['getattr']($m['Const'], 'K_LEFT'), $p['getattr']($m['Const'], 'K_RIGHT'), $p['getattr']($m['Const'], 'K_HOME'), $p['getattr']($m['Const'], 'K_END'), $p['getattr']($m['Const'], 'K_PAGEDOWN'), $p['getattr']($m['Const'], 'K_PAGEUP'), $p['getattr']($m['Const'], 'K_BACKSPACE'), $p['getattr']($m['Const'], 'K_DELETE'), $p['getattr']($m['Const'], 'K_INSERT'), $p['getattr']($m['Const'], 'K_RETURN'), $p['getattr']($m['Const'], 'K_TAB'), $p['getattr']($m['Const'], 'K_ESCAPE')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						keycode = $iter4_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp4['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return keycode['valueOf']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp4;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()); 
				}
				$pyjs['track']['lineno']=61;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('touchlistener', null) : $p['setattr'](self, 'touchlistener', null); 
				$pyjs['track']['lineno']=62;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('Event', (typeof UserEvent == "undefined"?$m['UserEvent']:UserEvent)) : $p['setattr'](self, 'Event', (typeof UserEvent == "undefined"?$m['UserEvent']:UserEvent)); 
				$pyjs['track']['lineno']=63;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_nonimplemented_methods']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=65;
			$method = $pyjs__bind_method2('_lock', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':65};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=65;
				$pyjs['track']['lineno']=66;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueLock', true) : $p['setattr'](self, 'queueLock', true); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_lock'] = $method;
			$pyjs['track']['lineno']=68;
			$method = $pyjs__bind_method2('_unlock', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=69;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueLock', false) : $p['setattr'](self, 'queueLock', false); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_unlock'] = $method;
			$pyjs['track']['lineno']=71;
			$method = $pyjs__bind_method2('_updateQueue', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=71;
				$pyjs['track']['lineno']=72;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['getattr'](self, 'events')['__contains__']($p['getattr'](event, 'type')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()) {
					$pyjs['track']['lineno']=73;
					$pyjs['track']['lineno']=73;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=74;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueAccess', true) : $p['setattr'](self, 'queueAccess', true); 
				$pyjs['track']['lineno']=75;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'queueLock')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
					$pyjs['track']['lineno']=76;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, 'eventNumTmp'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()) {
						$pyjs['track']['lineno']=77;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['_appendMerge']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
					}
					$pyjs['track']['lineno']=78;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_append'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=80;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_appendTmp'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				}
				$pyjs['track']['lineno']=81;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueAccess', false) : $p['setattr'](self, 'queueAccess', false); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_updateQueue'] = $method;
			$pyjs['track']['lineno']=83;
			$method = $pyjs__bind_method2('_append', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':83};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=83;
				$pyjs['track']['lineno']=84;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_255) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
					$pyjs['track']['lineno']=85;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'eventQueue')['__setitem__']($p['getattr'](self, 'eventNum'), event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
					$pyjs['track']['lineno']=86;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['__op_add']($add1=$p['getattr'](self, 'eventNum'),$add2=$constant_int_1)) : $p['setattr'](self, 'eventNum', $p['__op_add']($add1=$p['getattr'](self, 'eventNum'),$add2=$constant_int_1)); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_append'] = $method;
			$pyjs['track']['lineno']=88;
			$method = $pyjs__bind_method2('_appendTmp', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,$add4;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':88};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=88;
				$pyjs['track']['lineno']=89;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp']($p['getattr'](self, 'eventNumTmp'), $constant_int_255) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
					$pyjs['track']['lineno']=90;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'eventQueueTmp')['__setitem__']($p['getattr'](self, 'eventNumTmp'), event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
					$pyjs['track']['lineno']=91;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNumTmp', $p['__op_add']($add3=$p['getattr'](self, 'eventNumTmp'),$add4=$constant_int_1)) : $p['setattr'](self, 'eventNumTmp', $p['__op_add']($add3=$p['getattr'](self, 'eventNumTmp'),$add4=$constant_int_1)); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_appendTmp'] = $method;
			$pyjs['track']['lineno']=93;
			$method = $pyjs__bind_method2('_appendMerge', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,i,$iter5_idx,$pyjs__trackstack_size_1,$iter5_iter,$iter5_array,$iter5_type;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':93};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=93;
				$pyjs['track']['lineno']=94;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range']($p['getattr'](self, 'eventNumTmp'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					i = $iter5_nextval['$nextval'];
					$pyjs['track']['lineno']=95;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_append']($p['getattr'](self, 'eventQueueTmp')['__getitem__'](i));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
					$pyjs['track']['lineno']=96;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'eventQueueTmp')['__setitem__'](i, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=97;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNumTmp', $constant_int_0) : $p['setattr'](self, 'eventNumTmp', $constant_int_0); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_appendMerge'] = $method;
			$pyjs['track']['lineno']=99;
			$method = $pyjs__bind_method2('pump', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':99};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=99;
				$pyjs['track']['lineno']=103;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()) {
					$pyjs['track']['lineno']=104;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_lock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
					$pyjs['track']['lineno']=105;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_pump']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
					$pyjs['track']['lineno']=106;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_unlock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
				}
				$pyjs['track']['lineno']=107;
				$pyjs['track']['lineno']=107;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['pump'] = $method;
			$pyjs['track']['lineno']=109;
			$method = $pyjs__bind_method2('_pump', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_idx,$iter6_type,queue,i,$iter6_array,$pyjs__trackstack_size_1,$sub2,$sub1,$iter6_iter,$iter6_nextval;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':109};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=109;
				$pyjs['track']['lineno']=110;
				queue = $p['__getslice']($p['getattr'](self, 'eventQueue'), $constant_int_50, $p['getattr'](self, 'eventNum'));
				$pyjs['track']['lineno']=111;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['__op_sub']($sub1=$p['getattr'](self, 'eventNum'),$sub2=$constant_int_50)) : $p['setattr'](self, 'eventNum', $p['__op_sub']($sub1=$p['getattr'](self, 'eventNum'),$sub2=$constant_int_50)); 
				$pyjs['track']['lineno']=112;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range']($p['getattr'](self, 'eventNum'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					i = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=113;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'eventQueue')['__setitem__'](i, queue['__getitem__'](i));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_pump'] = $method;
			$pyjs['track']['lineno']=115;
			$method = $pyjs__bind_method2('get', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
				var evtType,$iter12_type,$iter12_idx,i,$iter11_type,$iter12_array,$iter11_array,$iter12_iter,$iter11_iter,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1,$iter12_nextval;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':115};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=115;
				$pyjs['track']['lineno']=120;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'eventNum')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()) {
					$pyjs['track']['lineno']=121;
					$pyjs['track']['lineno']=121;
					var $pyjs__ret = $p['getattr'](self, 'queueNil');
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=122;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_lock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
				$pyjs['track']['lineno']=123;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](eventType));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()) {
					$pyjs['track']['lineno']=124;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queue', function(){
						var $iter7_nextval,$iter7_iter,$collcomp5,$iter7_array,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1,event;
	$collcomp5 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__getslice']($p['getattr'](self, 'eventQueue'), $constant_int_0, $p['getattr'](self, 'eventNum'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						event = $iter7_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp5['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return (typeof JEvent == "undefined"?$m['JEvent']:JEvent)(event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp5;}()) : $p['setattr'](self, 'queue', function(){
						var $iter7_nextval,$iter7_iter,$collcomp5,$iter7_array,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1,event;
	$collcomp5 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__getslice']($p['getattr'](self, 'eventQueue'), $constant_int_0, $p['getattr'](self, 'eventNum'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						event = $iter7_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp5['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return (typeof JEvent == "undefined"?$m['JEvent']:JEvent)(event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp5;}()); 
					$pyjs['track']['lineno']=125;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $constant_int_0) : $p['setattr'](self, 'eventNum', $constant_int_0); 
				}
				else {
					$pyjs['track']['lineno']=127;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](eventType, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['tuple'], $p['list']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()) {
						$pyjs['track']['lineno']=128;
						evtType = function(){
							var $iter8_idx,$collcomp6,$iter8_type,$iter8_array,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,et;
	$collcomp6 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
						$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
						while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
							et = $iter8_nextval['$nextval'];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp6['append'](et);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp6;}();
					}
					else {
						$pyjs['track']['lineno']=130;
						evtType = function(){
							var $iter10_nextval,$iter9_iter,$collcomp7,$iter10_idx,$iter9_nextval,$iter9_idx,$iter10_array,$iter9_type,$pyjs__trackstack_size_2,t,$pyjs__trackstack_size_1,$iter10_type,et,$iter10_iter,$iter9_array;
	$collcomp7 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return eventType;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
						$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
						while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
							t = $iter9_nextval['$nextval'];
							$pyjs['track']['lineno']=130;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'eventTypes')['__getitem__'](t);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
							$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
							while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
								et = $iter10_nextval['$nextval'];
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return $collcomp7['append'](et);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.event';
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp7;}();
					}
					$pyjs['track']['lineno']=131;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queue', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) : $p['setattr'](self, 'queue', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()); 
					$pyjs['track']['lineno']=132;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['range']($p['getattr'](self, 'eventNum'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
					$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
					while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
						i = $iter11_nextval['$nextval'];
						$pyjs['track']['lineno']=133;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!evtType['__contains__']($p['getattr']($p['getattr'](self, 'eventQueue')['__getitem__'](i), 'type')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()) {
							$pyjs['track']['lineno']=134;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['queueTmp']['append']($p['getattr'](self, 'eventQueue')['__getitem__'](i));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=136;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['queue']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
							return (typeof JEvent == "undefined"?$m['JEvent']:JEvent)($p['getattr'](self, 'eventQueue')['__getitem__'](i));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
					$pyjs['track']['lineno']=137;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']($p['getattr'](self, 'queueTmp')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
						$pyjs['track']['lineno']=138;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $constant_int_0) : $p['setattr'](self, 'eventNum', $constant_int_0); 
					}
					else {
						$pyjs['track']['lineno']=140;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](self, 'queueTmp'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()) : $p['setattr'](self, 'eventNum', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](self, 'queueTmp'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()); 
						$pyjs['track']['lineno']=141;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['range']($p['getattr'](self, 'eventNum'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
						$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
						while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
							i = $iter12_nextval['$nextval'];
							$pyjs['track']['lineno']=142;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'eventQueue')['__setitem__'](i, $p['getattr'](self, 'queueTmp')['__getitem__'](i));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';
						$pyjs['track']['lineno']=143;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['__setslice']($p['getattr'](self, 'queueTmp'), 0, null, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
					}
					$pyjs['track']['lineno']=144;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()) {
						$pyjs['track']['lineno']=145;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['_pump']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
					}
				}
				$pyjs['track']['lineno']=146;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_unlock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
				$pyjs['track']['lineno']=147;
				$pyjs['track']['lineno']=147;
				var $pyjs__ret = $p['getattr'](self, 'queue');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['eventType', null]]);
			$cls_definition['get'] = $method;
			$pyjs['track']['lineno']=149;
			$method = $pyjs__bind_method2('poll', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub3,evt,$sub4;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':149};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=149;
				$pyjs['track']['lineno']=153;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_lock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
				$pyjs['track']['lineno']=154;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'eventNum'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()) {
					$pyjs['track']['lineno']=155;
					evt = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof JEvent == "undefined"?$m['JEvent']:JEvent)((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['eventQueue']['pop']($constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
					$pyjs['track']['lineno']=156;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['__op_sub']($sub3=$p['getattr'](self, 'eventNum'),$sub4=$constant_int_1)) : $p['setattr'](self, 'eventNum', $p['__op_sub']($sub3=$p['getattr'](self, 'eventNum'),$sub4=$constant_int_1)); 
					$pyjs['track']['lineno']=157;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['eventQueue']['append'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
					$pyjs['track']['lineno']=158;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})()) {
						$pyjs['track']['lineno']=159;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['_pump']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=161;
					evt = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['Event']($p['getattr']($m['Const'], 'NOEVENT'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
				}
				$pyjs['track']['lineno']=162;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_unlock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
				$pyjs['track']['lineno']=163;
				$pyjs['track']['lineno']=163;
				var $pyjs__ret = evt;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['poll'] = $method;
			$pyjs['track']['lineno']=165;
			$method = $pyjs__bind_method2('wait', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evt,$sub6,$sub5;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':165};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=165;
				$pyjs['track']['lineno']=169;
				while ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})()) {
					$pyjs['track']['lineno']=170;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, 'eventNum'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()) {
						$pyjs['track']['lineno']=171;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['_lock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
						$pyjs['track']['lineno']=172;
						evt = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (typeof JEvent == "undefined"?$m['JEvent']:JEvent)((function(){try{try{$pyjs['in_try_except'] += 1;
						return self['eventQueue']['pop']($constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
						$pyjs['track']['lineno']=173;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['__op_sub']($sub5=$p['getattr'](self, 'eventNum'),$sub6=$constant_int_1)) : $p['setattr'](self, 'eventNum', $p['__op_sub']($sub5=$p['getattr'](self, 'eventNum'),$sub6=$constant_int_1)); 
						$pyjs['track']['lineno']=174;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['eventQueue']['append'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
						$pyjs['track']['lineno']=175;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()) {
							$pyjs['track']['lineno']=176;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['_pump']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
						}
						$pyjs['track']['lineno']=177;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['_unlock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
						$pyjs['track']['lineno']=178;
						$pyjs['track']['lineno']=178;
						var $pyjs__ret = evt;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=180;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['_unlock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
						$pyjs['track']['lineno']=181;
						$pyjs['track']['lineno']=181;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['wait'] = $method;
			$pyjs['track']['lineno']=183;
			$method = $pyjs__bind_method2('peek', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
				var evtType,$iter17_nextval,$iter17_iter,et,$pyjs__trackstack_size_1,$iter17_array,$iter17_idx,$iter17_type,evt;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':183};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=183;
				$pyjs['track']['lineno']=188;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'eventNum')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})()) {
					$pyjs['track']['lineno']=189;
					$pyjs['track']['lineno']=189;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_is'](eventType, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})()) {
					$pyjs['track']['lineno']=191;
					$pyjs['track']['lineno']=191;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=192;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](eventType, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['tuple'], $p['list']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})()) {
					$pyjs['track']['lineno']=193;
					evtType = function(){
						var $iter13_nextval,$iter13_iter,$collcomp8,$iter13_type,$iter13_idx,$pyjs__trackstack_size_1,et,$iter13_array;
	$collcomp8 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
					$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
					while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
						et = $iter13_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp8['append'](et);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp8;}();
				}
				else {
					$pyjs['track']['lineno']=195;
					evtType = function(){
						var $iter14_array,$iter15_array,$iter14_type,$iter15_iter,$collcomp9,et,$iter15_type,$iter15_idx,$pyjs__trackstack_size_2,t,$iter14_iter,$pyjs__trackstack_size_1,$iter15_nextval,$iter14_idx,$iter14_nextval;
	$collcomp9 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter14_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return eventType;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
					$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
					while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
						t = $iter14_nextval['$nextval'];
						$pyjs['track']['lineno']=195;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter15_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'eventTypes')['__getitem__'](t);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
						$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
						while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
							et = $iter15_nextval['$nextval'];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp9['append'](et);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp9;}();
				}
				$pyjs['track']['lineno']=196;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_lock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
				$pyjs['track']['lineno']=197;
				evt = function(){
					var $iter16_array,$iter16_type,$pyjs__trackstack_size_1,$iter16_idx,$collcomp10,$iter16_nextval,$iter16_iter,event;
	$collcomp10 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter16_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__getslice']($p['getattr'](self, 'eventQueue'), $constant_int_0, $p['getattr'](self, 'eventNum'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
				$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
				while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
					event = $iter16_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp10['append']($p['getattr'](event, 'type'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp10;}();
				$pyjs['track']['lineno']=198;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()) {
					$pyjs['track']['lineno']=199;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_pump']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
				}
				$pyjs['track']['lineno']=200;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_unlock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
				$pyjs['track']['lineno']=201;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter17_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return evtType;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
				$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
				while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
					et = $iter17_nextval['$nextval'];
					$pyjs['track']['lineno']=202;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](evt['__contains__'](et));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})()) {
						$pyjs['track']['lineno']=203;
						$pyjs['track']['lineno']=203;
						var $pyjs__ret = true;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=204;
				$pyjs['track']['lineno']=204;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['eventType', null]]);
			$cls_definition['peek'] = $method;
			$pyjs['track']['lineno']=206;
			$method = $pyjs__bind_method2('clear', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
				var evtType,$iter21_idx,$iter22_array,i,$iter21_nextval,$iter22_nextval,$iter22_idx,$iter21_type,$iter21_iter,$iter22_type,$iter21_array,$pyjs__trackstack_size_1,$iter22_iter;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':206};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=206;
				$pyjs['track']['lineno']=211;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'eventNum')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})()) {
					$pyjs['track']['lineno']=212;
					$pyjs['track']['lineno']=212;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=213;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_lock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
				$pyjs['track']['lineno']=214;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_is'](eventType, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})()) {
					$pyjs['track']['lineno']=215;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $constant_int_0) : $p['setattr'](self, 'eventNum', $constant_int_0); 
				}
				else {
					$pyjs['track']['lineno']=217;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](eventType, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['tuple'], $p['list']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})()) {
						$pyjs['track']['lineno']=218;
						evtType = function(){
							var $iter18_type,$iter18_iter,$iter18_array,$iter18_idx,$collcomp11,$pyjs__trackstack_size_1,et,$iter18_nextval;
	$collcomp11 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter18_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
						$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
						while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
							et = $iter18_nextval['$nextval'];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp11['append'](et);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp11;}();
					}
					else {
						$pyjs['track']['lineno']=220;
						evtType = function(){
							var $iter20_iter,$iter20_nextval,$iter19_idx,$iter20_type,$iter20_idx,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,$pyjs__trackstack_size_2,$collcomp12,$pyjs__trackstack_size_1,et,$iter20_array,t;
	$collcomp12 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter19_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return eventType;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
						$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
						while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
							t = $iter19_nextval['$nextval'];
							$pyjs['track']['lineno']=220;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter20_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'eventTypes')['__getitem__'](t);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
							$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
							while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
								et = $iter20_nextval['$nextval'];
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return $collcomp12['append'](et);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.event';
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp12;}();
					}
					$pyjs['track']['lineno']=221;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter21_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['range']($p['getattr'](self, 'eventNum'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
					$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
					while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
						i = $iter21_nextval['$nextval'];
						$pyjs['track']['lineno']=222;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!evtType['__contains__']($p['getattr']($p['getattr'](self, 'eventQueue')['__getitem__'](i), 'type')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})()) {
							$pyjs['track']['lineno']=223;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['queueTmp']['append']($p['getattr'](self, 'eventQueue')['__getitem__'](i));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
					$pyjs['track']['lineno']=224;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']($p['getattr'](self, 'queueTmp')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})()) {
						$pyjs['track']['lineno']=225;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $constant_int_0) : $p['setattr'](self, 'eventNum', $constant_int_0); 
					}
					else {
						$pyjs['track']['lineno']=227;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](self, 'queueTmp'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})()) : $p['setattr'](self, 'eventNum', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](self, 'queueTmp'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})()); 
						$pyjs['track']['lineno']=228;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter22_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['range']($p['getattr'](self, 'eventNum'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
						$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
						while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
							i = $iter22_nextval['$nextval'];
							$pyjs['track']['lineno']=229;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'eventQueue')['__setitem__'](i, $p['getattr'](self, 'queueTmp')['__getitem__'](i));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';
						$pyjs['track']['lineno']=230;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['__setslice']($p['getattr'](self, 'queueTmp'), 0, null, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
					}
					$pyjs['track']['lineno']=231;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})()) {
						$pyjs['track']['lineno']=232;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['_pump']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
					}
				}
				$pyjs['track']['lineno']=233;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_unlock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
				$pyjs['track']['lineno']=234;
				$pyjs['track']['lineno']=234;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['eventType', null]]);
			$cls_definition['clear'] = $method;
			$pyjs['track']['lineno']=236;
			$method = $pyjs__bind_method2('event_name', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evtType;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':236};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=236;
				$pyjs['track']['lineno']=240;
				evtType = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType)['__getitem__']($constant_int_0);
				$pyjs['track']['lineno']=241;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'eventName')['__contains__'](evtType));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})()) {
					$pyjs['track']['lineno']=242;
					$pyjs['track']['lineno']=242;
					var $pyjs__ret = $p['getattr'](self, 'eventName')['__getitem__'](evtType);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=244;
					$pyjs['track']['lineno']=244;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['eventType']]);
			$cls_definition['event_name'] = $method;
			$pyjs['track']['lineno']=246;
			$method = $pyjs__bind_method2('set_blocked', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evtType,$iter27_nextval,$iter26_idx,$iter26_nextval,$pyjs__trackstack_size_1,$iter26_type,$iter27_array,$iter27_iter,$iter27_idx,et,$iter26_array,$iter26_iter,event,$iter27_type;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':246};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=246;
				$pyjs['track']['lineno']=250;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['op_is'](eventType, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})()) {
					$pyjs['track']['lineno']=251;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](eventType, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['tuple'], $p['list']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})()) {
						$pyjs['track']['lineno']=252;
						evtType = function(){
							var $iter23_type,$iter23_nextval,$iter23_iter,$iter23_idx,$pyjs__trackstack_size_1,$iter23_array,et,$collcomp13;
	$collcomp13 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter23_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
						$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
						while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
							et = $iter23_nextval['$nextval'];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp13['append'](et);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp13;}();
					}
					else {
						$pyjs['track']['lineno']=254;
						evtType = function(){
							var $collcomp14,$iter24_idx,$iter25_array,$iter25_nextval,$iter25_iter,$iter24_type,$iter24_array,$pyjs__trackstack_size_2,t,$iter25_idx,$pyjs__trackstack_size_1,et,$iter25_type,$iter24_iter,$iter24_nextval;
	$collcomp14 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter24_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return eventType;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
						$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
						while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
							t = $iter24_nextval['$nextval'];
							$pyjs['track']['lineno']=254;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter25_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'eventTypes')['__getitem__'](t);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
							$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
							while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
								et = $iter25_nextval['$nextval'];
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return $collcomp14['append'](et);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.event';
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp14;}();
					}
					$pyjs['track']['lineno']=255;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter26_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return evtType;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})();
					$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
					while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
						et = $iter26_nextval['$nextval'];
						$pyjs['track']['lineno']=256;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['getattr'](self, 'events')['__contains__'](et));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})()) {
							$pyjs['track']['lineno']=257;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['events']['remove'](et);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
				}
				else {
					$pyjs['track']['lineno']=259;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter27_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'eventType');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})();
					$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
					while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
						event = $iter27_nextval['$nextval'];
						$pyjs['track']['lineno']=260;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['events']['add'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
				}
				$pyjs['track']['lineno']=261;
				$pyjs['track']['lineno']=261;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['eventType']]);
			$cls_definition['set_blocked'] = $method;
			$pyjs['track']['lineno']=263;
			$method = $pyjs__bind_method2('set_allowed', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evtType,$iter31_array,$iter31_nextval,$iter31_idx,$iter31_type,$pyjs__trackstack_size_1,et,$iter31_iter;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':263};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=263;
				$pyjs['track']['lineno']=267;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['op_is'](eventType, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})()) {
					$pyjs['track']['lineno']=268;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](eventType, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['tuple'], $p['list']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})()) {
						$pyjs['track']['lineno']=269;
						evtType = function(){
							var $iter28_array,$iter28_nextval,$iter28_idx,$collcomp15,et,$iter28_iter,$iter28_type,$pyjs__trackstack_size_1;
	$collcomp15 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter28_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
						$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
						while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
							et = $iter28_nextval['$nextval'];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp15['append'](et);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp15;}();
					}
					else {
						$pyjs['track']['lineno']=271;
						evtType = function(){
							var $iter30_type,$iter30_nextval,et,$iter29_type,$iter29_iter,$collcomp16,$iter29_nextval,$iter30_array,t,$pyjs__trackstack_size_1,$iter30_idx,$iter29_idx,$pyjs__trackstack_size_2,$iter30_iter,$iter29_array;
	$collcomp16 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter29_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return eventType;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})();
						$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
						while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
							t = $iter29_nextval['$nextval'];
							$pyjs['track']['lineno']=271;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter30_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'eventTypes')['__getitem__'](t);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
							$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
							while (typeof($p['__wrapped_next']($iter30_nextval)['$nextval']) != 'undefined') {
								et = $iter30_nextval['$nextval'];
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return $collcomp16['append'](et);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.event';
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp16;}();
					}
					$pyjs['track']['lineno']=272;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter31_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return evtType;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
					$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
					while (typeof($p['__wrapped_next']($iter31_nextval)['$nextval']) != 'undefined') {
						et = $iter31_nextval['$nextval'];
						$pyjs['track']['lineno']=273;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['events']['add'](et);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
				}
				else {
					$pyjs['track']['lineno']=275;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['events']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
				}
				$pyjs['track']['lineno']=276;
				$pyjs['track']['lineno']=276;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['eventType']]);
			$cls_definition['set_allowed'] = $method;
			$pyjs['track']['lineno']=278;
			$method = $pyjs__bind_method2('get_blocked', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evtType;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':278};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=278;
				$pyjs['track']['lineno']=282;
				evtType = function(){
					var $iter32_type,$iter32_idx,$iter32_nextval,$collcomp17,$iter32_iter,$iter32_array,$pyjs__trackstack_size_1,et;
	$collcomp17 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter32_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
				$iter32_nextval=$p['__iter_prepare']($iter32_iter,false);
				while (typeof($p['__wrapped_next']($iter32_nextval)['$nextval']) != 'undefined') {
					et = $iter32_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp17['append'](et);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp17;}()['__getitem__']($constant_int_0);
				$pyjs['track']['lineno']=283;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['getattr'](self, 'events')['__contains__'](evtType));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})()) {
					$pyjs['track']['lineno']=284;
					$pyjs['track']['lineno']=284;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=286;
					$pyjs['track']['lineno']=286;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['eventType']]);
			$cls_definition['get_blocked'] = $method;
			$pyjs['track']['lineno']=288;
			$method = $pyjs__bind_method2('post', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':288};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=288;
				$pyjs['track']['lineno']=292;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_lock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
				$pyjs['track']['lineno']=293;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_append'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})();
				$pyjs['track']['lineno']=294;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['getattr'](self, 'events')['__contains__']($p['getattr'](event, 'type')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})()) {
					$pyjs['track']['lineno']=295;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'eventTypes')['__setitem__']($p['getattr'](event, 'type'), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([$p['getattr'](event, 'type')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
				}
				$pyjs['track']['lineno']=296;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_unlock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
				$pyjs['track']['lineno']=297;
				$pyjs['track']['lineno']=297;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['post'] = $method;
			$pyjs['track']['lineno']=299;
			$method = $pyjs__bind_method2('_initiate_touch_listener', function(canvas) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					canvas = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':299};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=299;
				$pyjs['track']['lineno']=300;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('touchlistener', (function(){try{try{$pyjs['in_try_except'] += 1;
				return (typeof TouchListener == "undefined"?$m['TouchListener']:TouchListener)(canvas);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})()) : $p['setattr'](self, 'touchlistener', (function(){try{try{$pyjs['in_try_except'] += 1;
				return (typeof TouchListener == "undefined"?$m['TouchListener']:TouchListener)(canvas);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})()); 
				$pyjs['track']['lineno']=301;
				$pyjs['track']['lineno']=301;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['canvas']]);
			$cls_definition['_initiate_touch_listener'] = $method;
			$pyjs['track']['lineno']=303;
			$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f8032c59f2c2d3f0ddf56ddfccacf0be') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda2,$lambda1;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':303};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=303;
				$pyjs['track']['lineno']=307;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.event','lineno':307};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.event';
					$pyjs['track']['lineno']=307;
					$pyjs['track']['lineno']=307;
					$pyjs['track']['lineno']=307;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set_grab', $lambda1) : $p['setattr'](self, 'set_grab', $lambda1); 
				$pyjs['track']['lineno']=308;
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.event','lineno':308};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.event';
					$pyjs['track']['lineno']=308;
					$pyjs['track']['lineno']=308;
					$pyjs['track']['lineno']=308;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_grab', $lambda2) : $p['setattr'](self, 'get_grab', $lambda2); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=10;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Event', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=311;
		$m['UserEvent'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.event';
			$cls_definition['__md5__'] = '9c2eb45a1cb2715f074e4e2b1881c23d';
			$pyjs['track']['lineno']=313;
			$cls_definition['__slots__'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['type', 'attr']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
			$pyjs['track']['lineno']=315;
			$method = $pyjs__bind_method2('__init__', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c2eb45a1cb2715f074e4e2b1881c23d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof eventType != 'undefined') {
						if (eventType !== null && typeof eventType['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = eventType;
							eventType = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var attr;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':315};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=315;
				$pyjs['track']['lineno']=321;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](args);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})()) {
					$pyjs['track']['lineno']=322;
					attr = args['__getitem__']($constant_int_0);
				}
				else {
					$pyjs['track']['lineno']=324;
					attr = kwargs;
				}
				$pyjs['track']['lineno']=325;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['object']['__setattr__'](self, 'type', eventType);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})();
				$pyjs['track']['lineno']=326;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['object']['__setattr__'](self, 'attr', attr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['eventType']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=328;
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
					if (self.prototype['__md5__'] !== '9c2eb45a1cb2715f074e4e2b1881c23d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':328};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=328;
				$pyjs['track']['lineno']=332;
				$pyjs['track']['lineno']=332;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s(%s-UserEvent %r)', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, '__class__'), $p['getattr'](self, 'type'), $p['getattr'](self, 'attr')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=334;
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
					if (self.prototype['__md5__'] !== '9c2eb45a1cb2715f074e4e2b1881c23d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':334};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=334;
				$pyjs['track']['lineno']=335;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'attr')['__contains__'](attr));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})()) {
					$pyjs['track']['lineno']=336;
					$pyjs['track']['lineno']=336;
					var $pyjs__ret = $p['getattr'](self, 'attr')['__getitem__'](attr);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=338;
					$pyjs['__active_exception_stack__'] = null;
					throw ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['AttributeError']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']("'Event' object has no attribute '%s'", attr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})());
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['attr']]);
			$cls_definition['__getattr__'] = $method;
			$pyjs['track']['lineno']=340;
			$method = $pyjs__bind_method2('__setattr__', function(attr, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					attr = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9c2eb45a1cb2715f074e4e2b1881c23d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':340};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=340;
				$pyjs['track']['lineno']=341;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['AttributeError']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']("'Event' object has no attribute '%s'", attr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['attr'],['value']]);
			$cls_definition['__setattr__'] = $method;
			$pyjs['track']['lineno']=311;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('UserEvent', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=344;
		$m['JEvent'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.event';
			$cls_definition['__md5__'] = 'eb0bff3bc102217da37bcebf584d3946';
			$pyjs['track']['lineno']=346;
			$cls_definition['_mouse_pos'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([$constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})();
			$pyjs['track']['lineno']=347;
			$cls_definition['_types'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([['mousemove', $p['getattr']($m['Const'], 'MOUSEMOTION')], ['mousedown', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['mouseup', $p['getattr']($m['Const'], 'MOUSEBUTTONUP')], ['wheel', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['mousewheel', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['DOMMouseScroll', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['keydown', $p['getattr']($m['Const'], 'KEYDOWN')], ['keypress', $p['getattr']($m['Const'], 'KEYDOWN')], ['keyup', $p['getattr']($m['Const'], 'KEYUP')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
			$pyjs['track']['lineno']=348;
			$cls_definition['_charCode'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([[$constant_int_33, $p['getattr']($m['Const'], 'K_EXCLAIM')], [$constant_int_34, $p['getattr']($m['Const'], 'K_QUOTEDBL')], [$constant_int_35, $p['getattr']($m['Const'], 'K_HASH')], [$constant_int_36, $p['getattr']($m['Const'], 'K_DOLLAR')], [$constant_int_38, $p['getattr']($m['Const'], 'K_AMPERSAND')], [$constant_int_39, $p['getattr']($m['Const'], 'K_QUOTE')], [$constant_int_40, $p['getattr']($m['Const'], 'K_LEFTPAREN')], [$constant_int_41, $p['getattr']($m['Const'], 'K_RIGHTPAREN')], [$constant_int_42, $p['getattr']($m['Const'], 'K_ASTERISK')], [$constant_int_43, $p['getattr']($m['Const'], 'K_PLUS')], [$constant_int_44, $p['getattr']($m['Const'], 'K_COMMA')], [$constant_int_45, $p['getattr']($m['Const'], 'K_MINUS')], [$constant_int_46, $p['getattr']($m['Const'], 'K_PERIOD')], [$constant_int_97, $p['getattr']($m['Const'], 'K_a')], [$constant_int_98, $p['getattr']($m['Const'], 'K_b')], [$constant_int_99, $p['getattr']($m['Const'], 'K_c')], [$constant_int_100, $p['getattr']($m['Const'], 'K_d')], [$constant_int_101, $p['getattr']($m['Const'], 'K_e')], [$constant_int_102, $p['getattr']($m['Const'], 'K_f')], [$constant_int_103, $p['getattr']($m['Const'], 'K_g')], [$constant_int_104, $p['getattr']($m['Const'], 'K_h')], [$constant_int_105, $p['getattr']($m['Const'], 'K_i')], [$constant_int_106, $p['getattr']($m['Const'], 'K_j')], [$constant_int_107, $p['getattr']($m['Const'], 'K_k')], [$constant_int_108, $p['getattr']($m['Const'], 'K_l')], [$constant_int_109, $p['getattr']($m['Const'], 'K_m')], [$constant_int_110, $p['getattr']($m['Const'], 'K_n')], [$constant_int_111, $p['getattr']($m['Const'], 'K_o')], [$constant_int_112, $p['getattr']($m['Const'], 'K_p')], [$constant_int_113, $p['getattr']($m['Const'], 'K_q')], [$constant_int_114, $p['getattr']($m['Const'], 'K_r')], [$constant_int_115, $p['getattr']($m['Const'], 'K_s')], [$constant_int_116, $p['getattr']($m['Const'], 'K_t')], [$constant_int_117, $p['getattr']($m['Const'], 'K_u')], [$constant_int_118, $p['getattr']($m['Const'], 'K_v')], [$constant_int_119, $p['getattr']($m['Const'], 'K_w')], [$constant_int_120, $p['getattr']($m['Const'], 'K_x')], [$constant_int_121, $p['getattr']($m['Const'], 'K_y')], [$constant_int_122, $p['getattr']($m['Const'], 'K_z')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
			$pyjs['track']['lineno']=350;
			$method = $pyjs__bind_method2('__init__', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'eb0bff3bc102217da37bcebf584d3946') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter33_iter,code,$pyjs__trackstack_size_1,$iter33_idx,$iter33_type,$add20,$sub9,$sub8,$sub7,$iter33_nextval,$sub10,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,$iter33_array,attr,$add6,$add7,$add5,$add8,$add9;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':350};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=350;
				$pyjs['track']['lineno']=362;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('event', event) : $p['setattr'](self, 'event', event); 
				$pyjs['track']['lineno']=363;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](['mousedown', 'mouseup']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})()['__contains__']($p['getattr'](event, 'type')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})()) {
					$pyjs['track']['lineno']=364;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))) : $p['setattr'](self, 'type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))); 
					$pyjs['track']['lineno']=365;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('button', $p['__op_add']($add5=$p['getattr'](event, 'button'),$add6=$constant_int_1)) : $p['setattr'](self, 'button', $p['__op_add']($add5=$p['getattr'](event, 'button'),$add6=$constant_int_1)); 
					$pyjs['track']['lineno']=366;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pos', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_add']($add7=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add8=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add9=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add10=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})()) : $p['setattr'](self, 'pos', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_add']($add7=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add8=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add9=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add10=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})()); 
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](event, 'type'), 'mousemove'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})()) {
					$pyjs['track']['lineno']=368;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))) : $p['setattr'](self, 'type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))); 
					$pyjs['track']['lineno']=369;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('button', $p['__op_add']($add11=$p['getattr'](event, 'button'),$add12=$constant_int_1)) : $p['setattr'](self, 'button', $p['__op_add']($add11=$p['getattr'](event, 'button'),$add12=$constant_int_1)); 
					$pyjs['track']['lineno']=370;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pos', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_add']($add13=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add14=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add15=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add16=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})()) : $p['setattr'](self, 'pos', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_add']($add13=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add14=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add15=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add16=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})()); 
					$pyjs['track']['lineno']=371;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rel', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_sub']($sub7=$p['getattr'](self, 'pos')['__getitem__']($constant_int_0),$sub8=$p['getattr']($p['getattr'](self, '__class__'), '_mouse_pos')['__getitem__']($constant_int_0)), $p['__op_sub']($sub9=$p['getattr'](self, 'pos')['__getitem__']($constant_int_1),$sub10=$p['getattr']($p['getattr'](self, '__class__'), '_mouse_pos')['__getitem__']($constant_int_1))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})()) : $p['setattr'](self, 'rel', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_sub']($sub7=$p['getattr'](self, 'pos')['__getitem__']($constant_int_0),$sub8=$p['getattr']($p['getattr'](self, '__class__'), '_mouse_pos')['__getitem__']($constant_int_0)), $p['__op_sub']($sub9=$p['getattr'](self, 'pos')['__getitem__']($constant_int_1),$sub10=$p['getattr']($p['getattr'](self, '__class__'), '_mouse_pos')['__getitem__']($constant_int_1))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})()); 
					$pyjs['track']['lineno']=372;
					$p['getattr'](self, '__class__')['__is_instance__'] && typeof $p['getattr'](self, '__class__')['__setattr__'] == 'function' ? $p['getattr'](self, '__class__')['__setattr__']('_mouse_pos', $p['getattr'](self, 'pos')) : $p['setattr']($p['getattr'](self, '__class__'), '_mouse_pos', $p['getattr'](self, 'pos')); 
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](['wheel', 'mousewheel', 'DOMMouseScroll']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})()['__contains__']($p['getattr'](event, 'type')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})()) {
					$pyjs['track']['lineno']=374;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))) : $p['setattr'](self, 'type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))); 
					$pyjs['track']['lineno']=375;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('button', $p['getattr'](event, 'btn')) : $p['setattr'](self, 'button', $p['getattr'](event, 'btn')); 
					$pyjs['track']['lineno']=376;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pos', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_add']($add17=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add18=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add19=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add20=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})()) : $p['setattr'](self, 'pos', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_add']($add17=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add18=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add19=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add20=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})()); 
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](['keydown', 'keyup']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})()['__contains__']($p['getattr'](event, 'type')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})()) {
					$pyjs['track']['lineno']=378;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))) : $p['setattr'](self, 'type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))); 
					$pyjs['track']['lineno']=379;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key', $p['getattr'](event, 'keyCode')) : $p['setattr'](self, 'key', $p['getattr'](event, 'keyCode')); 
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](event, 'type'), 'keypress'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})()) {
					$pyjs['track']['lineno']=381;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))) : $p['setattr'](self, 'type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))); 
					$pyjs['track']['lineno']=382;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](event, 'keyCode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})()) {
						$pyjs['track']['lineno']=383;
						code = $p['getattr'](event, 'keyCode');
					}
					else {
						$pyjs['track']['lineno']=385;
						code = $p['getattr'](event, 'which');
					}
					$pyjs['track']['lineno']=386;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr']($p['getattr'](self, '__class__'), '_charCode')['__contains__'](code));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})()) {
						$pyjs['track']['lineno']=387;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key', $p['getattr']($p['getattr'](self, '__class__'), '_charCode')['__getitem__'](code)) : $p['setattr'](self, 'key', $p['getattr']($p['getattr'](self, '__class__'), '_charCode')['__getitem__'](code)); 
					}
					else {
						$pyjs['track']['lineno']=389;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key', code) : $p['setattr'](self, 'key', code); 
					}
				}
				else {
					$pyjs['track']['lineno']=391;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr'](event, 'type')) : $p['setattr'](self, 'type', $p['getattr'](event, 'type')); 
					$pyjs['track']['lineno']=392;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter33_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](event, 'attr');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})();
					$iter33_nextval=$p['__iter_prepare']($iter33_iter,false);
					while (typeof($p['__wrapped_next']($iter33_nextval)['$nextval']) != 'undefined') {
						attr = $iter33_nextval['$nextval'];
						$pyjs['track']['lineno']=393;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['object']['__setattr__'](self, attr, $p['getattr'](event, 'attr')['__getitem__'](attr));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=395;
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
					if (self.prototype['__md5__'] !== 'eb0bff3bc102217da37bcebf584d3946') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':395};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=395;
				$pyjs['track']['lineno']=399;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr']($p['getattr'](self, 'event'), 'toString');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})()) {
					$pyjs['track']['lineno']=400;
					$pyjs['track']['lineno']=400;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('%s(%s)', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](self, '__class__'), (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['event']['toString']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=402;
					$pyjs['track']['lineno']=402;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['event']['__repr__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=404;
			$method = $pyjs__bind_method2('getEvent', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'eb0bff3bc102217da37bcebf584d3946') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':404};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=404;
				$pyjs['track']['lineno']=408;
				$pyjs['track']['lineno']=408;
				var $pyjs__ret = $p['getattr'](self, 'event');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getEvent'] = $method;
			$pyjs['track']['lineno']=344;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('JEvent', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=411;
		$m['TouchListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.event';
			$cls_definition['__md5__'] = '26c848025b02d60fdd93491548f129cc';
			$pyjs['track']['lineno']=419;
			$method = $pyjs__bind_method2('__init__', function(canvas) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					canvas = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '26c848025b02d60fdd93491548f129cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':419};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=419;
				$pyjs['track']['lineno']=433;
				$pyjs['track']['lineno']=434;
				$m['_canvas'] = canvas;
				$pyjs['track']['lineno']=435;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('element', (function(){try{try{$pyjs['in_try_except'] += 1;
				return canvas['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})()) : $p['setattr'](self, 'element', (function(){try{try{$pyjs['in_try_except'] += 1;
				return canvas['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})()); 
				$pyjs['track']['lineno']=436;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['addEventListener']('touchstart', (typeof _touch_detect == "undefined"?$m['_touch_detect']:_touch_detect));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})();
				$pyjs['track']['lineno']=437;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', false) : $p['setattr'](self, 'active', false); 
				$pyjs['track']['lineno']=438;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callback', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})()) : $p['setattr'](self, 'callback', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})()); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['canvas']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=440;
			$method = $pyjs__bind_method2('activate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '26c848025b02d60fdd93491548f129cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':440};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=440;
				$pyjs['track']['lineno']=441;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeEventListener']('touchstart', (typeof _touch_detect == "undefined"?$m['_touch_detect']:_touch_detect));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})();
				$pyjs['track']['lineno']=442;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['addEventListener']('touchstart', (typeof _touch_start == "undefined"?$m['_touch_start']:_touch_start));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})();
				$pyjs['track']['lineno']=443;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['addEventListener']('touchend', (typeof _touch_end == "undefined"?$m['_touch_end']:_touch_end));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})();
				$pyjs['track']['lineno']=444;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['addEventListener']('touchmove', (typeof _touch_move == "undefined"?$m['_touch_move']:_touch_move));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})();
				$pyjs['track']['lineno']=445;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['addEventListener']('touchcancel', (typeof _touch_cancel == "undefined"?$m['_touch_cancel']:_touch_cancel));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})();
				$pyjs['track']['lineno']=446;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('active', true) : $p['setattr'](self, 'active', true); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['activate'] = $method;
			$pyjs['track']['lineno']=448;
			$method = $pyjs__bind_method2('add_callback', function(callback) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					callback = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '26c848025b02d60fdd93491548f129cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':448};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=448;
				$pyjs['track']['lineno']=455;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['callback']['append'](callback);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})();
				$pyjs['track']['lineno']=456;
				$pyjs['track']['lineno']=456;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['callback']]);
			$cls_definition['add_callback'] = $method;
			$pyjs['track']['lineno']=458;
			$method = $pyjs__bind_method2('is_active', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '26c848025b02d60fdd93491548f129cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':458};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=458;
				$pyjs['track']['lineno']=462;
				$pyjs['track']['lineno']=462;
				var $pyjs__ret = $p['getattr'](self, 'active');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['is_active'] = $method;
			$pyjs['track']['lineno']=411;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TouchListener', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=464;
		$m['_canvas'] = null;
		$pyjs['track']['lineno']=466;
		$m['_touch_detect'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.event','lineno':466};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.event';
			$pyjs['track']['lineno']=466;
			$pyjs['track']['lineno']=467;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['_canvas']['onTouchInitiate'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['_touch_detect']['__name__'] = '_touch_detect';

		$m['_touch_detect']['__bind_type__'] = 0;
		$m['_touch_detect']['__args__'] = [null,null,['event']];
		$pyjs['track']['lineno']=469;
		$m['_touch_start'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.event','lineno':469};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.event';
			$pyjs['track']['lineno']=469;
			$pyjs['track']['lineno']=470;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['_canvas']['onTouchStart'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['_touch_start']['__name__'] = '_touch_start';

		$m['_touch_start']['__bind_type__'] = 0;
		$m['_touch_start']['__args__'] = [null,null,['event']];
		$pyjs['track']['lineno']=472;
		$m['_touch_end'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.event','lineno':472};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.event';
			$pyjs['track']['lineno']=472;
			$pyjs['track']['lineno']=473;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['_canvas']['onTouchEnd'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['_touch_end']['__name__'] = '_touch_end';

		$m['_touch_end']['__bind_type__'] = 0;
		$m['_touch_end']['__args__'] = [null,null,['event']];
		$pyjs['track']['lineno']=475;
		$m['_touch_move'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.event','lineno':475};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.event';
			$pyjs['track']['lineno']=475;
			$pyjs['track']['lineno']=476;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['_canvas']['onTouchMove'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['_touch_move']['__name__'] = '_touch_move';

		$m['_touch_move']['__bind_type__'] = 0;
		$m['_touch_move']['__args__'] = [null,null,['event']];
		$pyjs['track']['lineno']=478;
		$m['_touch_cancel'] = function(event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.event','lineno':478};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.event';
			$pyjs['track']['lineno']=478;
			$pyjs['track']['lineno']=479;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['_canvas']['onTouchCancel'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['_touch_cancel']['__name__'] = '_touch_cancel';

		$m['_touch_cancel']['__bind_type__'] = 0;
		$m['_touch_cancel']['__args__'] = [null,null,['event']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.event */


/* end module: pyjsdl.event */


/*
PYJS_DEPS: ['pyjsdl.env', 'pyjsdl', 'pyjsdl.locals']
*/
