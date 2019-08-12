/* start module: pyjsdl.display */
$pyjs['loaded_modules']['pyjsdl.display'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.display']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.display'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.display'];
	$m['__repr__'] = function() { return '<module: pyjsdl.display>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.display';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['display'] = $pyjs['loaded_modules']['pyjsdl.display'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.display.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.display.py, line 4:\n    import base64';
		$m.__track_lines__[5] = 'pyjsdl.display.py, line 5:\n    from pyjsdl.surface import Surface';
		$m.__track_lines__[6] = 'pyjsdl.display.py, line 6:\n    from pyjsdl.rect import Rect';
		$m.__track_lines__[7] = 'pyjsdl.display.py, line 7:\n    from pyjsdl.time import Time';
		$m.__track_lines__[8] = 'pyjsdl.display.py, line 8:\n    from pyjsdl.color import Color';
		$m.__track_lines__[9] = 'pyjsdl.display.py, line 9:\n    from pyjsdl import env';
		$m.__track_lines__[10] = 'pyjsdl.display.py, line 10:\n    import pyjsdl.event';
		$m.__track_lines__[11] = 'pyjsdl.display.py, line 11:\n    from pyjsdl.pyjsobj import DOM, Window, RootPanel, FocusPanel, VerticalPanel, loadImages, TextBox, TextArea, MouseWheelHandler, eventGetMouseWheelVelocityY, Event, requestAnimationFrameInit';
		$m.__track_lines__[12] = 'pyjsdl.display.py, line 12:\n    from __pyjamas__ import JS';
		$m.__track_lines__[14] = "pyjsdl.display.py, line 14:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[17] = 'pyjsdl.display.py, line 17:\n    _canvas = None';
		$m.__track_lines__[18] = 'pyjsdl.display.py, line 18:\n    _ctx = None';
		$m.__track_lines__[19] = 'pyjsdl.display.py, line 19:\n    _img = None';
		$m.__track_lines__[20] = 'pyjsdl.display.py, line 20:\n    _wnd = None';
		$m.__track_lines__[23] = 'pyjsdl.display.py, line 23:\n    class Canvas(Surface, MouseWheelHandler):';
		$m.__track_lines__[25] = 'pyjsdl.display.py, line 25:\n    def __init__(self, size, buffered):';
		$m.__track_lines__[26] = 'pyjsdl.display.py, line 26:\n    Surface.__init__(self, size)';
		$m.__track_lines__[27] = 'pyjsdl.display.py, line 27:\n    MouseWheelHandler.__init__(self, True)';
		$m.__track_lines__[28] = 'pyjsdl.display.py, line 28:\n    if isinstance(buffered, bool):';
		$m.__track_lines__[29] = 'pyjsdl.display.py, line 29:\n    self._bufferedimage = buffered';
		$m.__track_lines__[31] = 'pyjsdl.display.py, line 31:\n    self._bufferedimage = True';
		$m.__track_lines__[32] = 'pyjsdl.display.py, line 32:\n    try:';
		$m.__track_lines__[33] = 'pyjsdl.display.py, line 33:\n    if self.impl.canvasContext:';
		$m.__track_lines__[34] = 'pyjsdl.display.py, line 34:\n    self._isCanvas = True';
		$m.__track_lines__[36] = 'pyjsdl.display.py, line 36:\n    self._isCanvas = False';
		$m.__track_lines__[37] = 'pyjsdl.display.py, line 37:\n    self._bufferedimage = False';
		$m.__track_lines__[38] = 'pyjsdl.display.py, line 38:\n    if self._bufferedimage:';
		$m.__track_lines__[39] = 'pyjsdl.display.py, line 39:\n    self.surface = Surface(size)';
		$m.__track_lines__[41] = 'pyjsdl.display.py, line 41:\n    self.surface = self';
		$m.__track_lines__[42] = 'pyjsdl.display.py, line 42:\n    self.images = {}';
		$m.__track_lines__[43] = 'pyjsdl.display.py, line 43:\n    self.image_list = []';
		$m.__track_lines__[44] = 'pyjsdl.display.py, line 44:\n    self.callback = None';
		$m.__track_lines__[45] = 'pyjsdl.display.py, line 45:\n    self.time = Time()';
		$m.__track_lines__[46] = 'pyjsdl.display.py, line 46:\n    self.event = pyjsdl.event';
		$m.__track_lines__[47] = 'pyjsdl.display.py, line 47:\n    self.addMouseListener(self)';
		$m.__track_lines__[48] = 'pyjsdl.display.py, line 48:\n    self.addMouseWheelListener(self)';
		$m.__track_lines__[49] = 'pyjsdl.display.py, line 49:\n    self.addKeyboardListener(self)';
		$m.__track_lines__[50] = 'pyjsdl.display.py, line 50:\n    self.sinkEvents(Event.ONMOUSEDOWN | Event.ONMOUSEUP| Event.ONMOUSEMOVE | Event.ONMOUSEOUT | Event.ONMOUSEWHEEL | Event.ONKEYDOWN | Event.ONKEYPRESS | Event.ONKEYUP)';
		$m.__track_lines__[51] = 'pyjsdl.display.py, line 51:\n    self.modKey = pyjsdl.event.modKey';
		$m.__track_lines__[52] = 'pyjsdl.display.py, line 52:\n    self.specialKey = pyjsdl.event.specialKey';
		$m.__track_lines__[53] = 'pyjsdl.display.py, line 53:\n    self.event._initiate_touch_listener(self)';
		$m.__track_lines__[54] = 'pyjsdl.display.py, line 54:\n    self._touch_callback = self.event.touchlistener.callback';
		$m.__track_lines__[55] = 'pyjsdl.display.py, line 55:\n    self._repaint = False';
		$m.__track_lines__[56] = 'pyjsdl.display.py, line 56:\n    self._rect_list = []';
		$m.__track_lines__[57] = 'pyjsdl.display.py, line 57:\n    self._rect_len = 0';
		$m.__track_lines__[58] = 'pyjsdl.display.py, line 58:\n    self._rect_num = 0';
		$m.__track_lines__[59] = 'pyjsdl.display.py, line 59:\n    self._framerate = 0';
		$m.__track_lines__[60] = 'pyjsdl.display.py, line 60:\n    self._frametime = 0';
		$m.__track_lines__[61] = 'pyjsdl.display.py, line 61:\n    self._canvas_init()';
		$m.__track_lines__[62] = 'pyjsdl.display.py, line 62:\n    self.initialized = False';
		$m.__track_lines__[64] = 'pyjsdl.display.py, line 64:\n    def _canvas_init(self):';
		$m.__track_lines__[65] = 'pyjsdl.display.py, line 65:\n    global _canvas, _ctx, _img, _wnd';
		$m.__track_lines__[66] = 'pyjsdl.display.py, line 66:\n    _canvas = self';
		$m.__track_lines__[67] = 'pyjsdl.display.py, line 67:\n    _ctx = self.impl.canvasContext';
		$m.__track_lines__[68] = 'pyjsdl.display.py, line 68:\n    _img = self.surface.canvas';
		$m.__track_lines__[69] = 'pyjsdl.display.py, line 69:\n    _wnd = requestAnimationFrameInit()';
		$m.__track_lines__[71] = 'pyjsdl.display.py, line 71:\n    def onMouseMove(self, sender, x, y):';
		$m.__track_lines__[72] = 'pyjsdl.display.py, line 72:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[73] = 'pyjsdl.display.py, line 73:\n    event.pos = (x, y)';
		$m.__track_lines__[74] = "pyjsdl.display.py, line 74:\n    self.event.mouseMove['x'], self.event.mouseMove['y'] = x, y";
		$m.__track_lines__[75] = 'pyjsdl.display.py, line 75:\n    self.event._updateQueue(event)';
		$m.__track_lines__[77] = 'pyjsdl.display.py, line 77:\n    def onMouseDown(self, sender, x, y):';
		$m.__track_lines__[78] = 'pyjsdl.display.py, line 78:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[79] = 'pyjsdl.display.py, line 79:\n    event.pos = (x, y)';
		$m.__track_lines__[80] = 'pyjsdl.display.py, line 80:\n    self.event.mousePress[event.button] = True';
		$m.__track_lines__[81] = 'pyjsdl.display.py, line 81:\n    self.event._updateQueue(event)';
		$m.__track_lines__[83] = 'pyjsdl.display.py, line 83:\n    def onMouseUp(self, sender, x, y):';
		$m.__track_lines__[84] = 'pyjsdl.display.py, line 84:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[85] = 'pyjsdl.display.py, line 85:\n    event.pos = (x, y)';
		$m.__track_lines__[86] = 'pyjsdl.display.py, line 86:\n    self.event.mousePress[event.button] = False';
		$m.__track_lines__[87] = 'pyjsdl.display.py, line 87:\n    self.event._updateQueue(event)';
		$m.__track_lines__[89] = 'pyjsdl.display.py, line 89:\n    def onMouseLeave(self, sender):';
		$m.__track_lines__[90] = 'pyjsdl.display.py, line 90:\n    self.event.mousePress[0], self.event.mousePress[1], self.event.mousePress[2] = False, False, False';
		$m.__track_lines__[91] = "pyjsdl.display.py, line 91:\n    self.event.mouseMove['x'], self.event.mouseMove['y'] = -1, -1";
		$m.__track_lines__[92] = "pyjsdl.display.py, line 92:\n    self.event.mouseMoveRel['x'], self.event.mouseMoveRel['y'] = None, None";
		$m.__track_lines__[93] = 'pyjsdl.display.py, line 93:\n    for keycode in self.modKey:';
		$m.__track_lines__[94] = 'pyjsdl.display.py, line 94:\n    if self.event.keyPress[keycode]:';
		$m.__track_lines__[95] = 'pyjsdl.display.py, line 95:\n    self.event.keyPress[keycode] = False';
		$m.__track_lines__[97] = 'pyjsdl.display.py, line 97:\n    def onMouseWheel(self, sender, velocity):';
		$m.__track_lines__[98] = 'pyjsdl.display.py, line 98:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[99] = "pyjsdl.display.py, line 99:\n    if event.type == 'mousewheel':";
		$m.__track_lines__[101] = "pyjsdl.display.py, line 101:\n    if hasattr(event, 'wheelDeltaX'):";
		$m.__track_lines__[102] = 'pyjsdl.display.py, line 102:\n    self.onMouseWheel = self._onMouseWheel';
		$m.__track_lines__[103] = 'pyjsdl.display.py, line 103:\n    self._onMouseWheel(sender, velocity)';
		$m.__track_lines__[105] = 'pyjsdl.display.py, line 105:\n    self.onMouseWheel = self._onMouseWheelY';
		$m.__track_lines__[106] = 'pyjsdl.display.py, line 106:\n    DOM.eventGetMouseWheelVelocityY = eventGetMouseWheelVelocityY';
		$m.__track_lines__[107] = 'pyjsdl.display.py, line 107:\n    self._onMouseWheelY(sender, eventGetMouseWheelVelocityY(event))';
		$m.__track_lines__[109] = 'pyjsdl.display.py, line 109:\n    self.onMouseWheel = self._onMouseScroll';
		$m.__track_lines__[110] = 'pyjsdl.display.py, line 110:\n    self._onMouseScroll(sender, velocity)';
		$m.__track_lines__[112] = 'pyjsdl.display.py, line 112:\n    def _onMouseWheel(self, sender, velocity):';
		$m.__track_lines__[113] = 'pyjsdl.display.py, line 113:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[114] = 'pyjsdl.display.py, line 114:\n    if not event.wheelDeltaX:';
		$m.__track_lines__[115] = 'pyjsdl.display.py, line 115:\n    if velocity < 0:';
		$m.__track_lines__[116] = 'pyjsdl.display.py, line 116:\n    button = 4';
		$m.__track_lines__[117] = 'pyjsdl.display.py, line 117:\n    events = velocity / -3';
		$m.__track_lines__[119] = 'pyjsdl.display.py, line 119:\n    button = 5';
		$m.__track_lines__[120] = 'pyjsdl.display.py, line 120:\n    events = velocity / 3';
		$m.__track_lines__[122] = 'pyjsdl.display.py, line 122:\n    if velocity < 0:';
		$m.__track_lines__[123] = 'pyjsdl.display.py, line 123:\n    button = 6';
		$m.__track_lines__[124] = 'pyjsdl.display.py, line 124:\n    events = velocity / -3';
		$m.__track_lines__[126] = 'pyjsdl.display.py, line 126:\n    button = 7';
		$m.__track_lines__[127] = 'pyjsdl.display.py, line 127:\n    events = velocity / 3';
		$m.__track_lines__[128] = 'pyjsdl.display.py, line 128:\n    event.btn = button';
		$m.__track_lines__[129] = "pyjsdl.display.py, line 129:\n    event.pos = (self.event.mouseMove['x'], self.event.mouseMove['y'])";
		$m.__track_lines__[130] = 'pyjsdl.display.py, line 130:\n    for evt in range(events):';
		$m.__track_lines__[131] = 'pyjsdl.display.py, line 131:\n    self.event._updateQueue(event)';
		$m.__track_lines__[133] = 'pyjsdl.display.py, line 133:\n    def _onMouseWheelY(self, sender, velocity):';
		$m.__track_lines__[134] = 'pyjsdl.display.py, line 134:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[135] = 'pyjsdl.display.py, line 135:\n    if velocity < 0:';
		$m.__track_lines__[136] = 'pyjsdl.display.py, line 136:\n    button = 4';
		$m.__track_lines__[137] = 'pyjsdl.display.py, line 137:\n    events = velocity / -3';
		$m.__track_lines__[139] = 'pyjsdl.display.py, line 139:\n    button = 5';
		$m.__track_lines__[140] = 'pyjsdl.display.py, line 140:\n    events = velocity / 3';
		$m.__track_lines__[141] = 'pyjsdl.display.py, line 141:\n    event.btn = button';
		$m.__track_lines__[142] = "pyjsdl.display.py, line 142:\n    event.pos = (self.event.mouseMove['x'], self.event.mouseMove['y'])";
		$m.__track_lines__[143] = 'pyjsdl.display.py, line 143:\n    for evt in range(events):';
		$m.__track_lines__[144] = 'pyjsdl.display.py, line 144:\n    self.event._updateQueue(event)';
		$m.__track_lines__[146] = 'pyjsdl.display.py, line 146:\n    def _onMouseScroll(self, sender, velocity):';
		$m.__track_lines__[147] = 'pyjsdl.display.py, line 147:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[148] = 'pyjsdl.display.py, line 148:\n    if velocity > 1 or velocity < -1:';
		$m.__track_lines__[149] = 'pyjsdl.display.py, line 149:\n    if velocity < 0:';
		$m.__track_lines__[150] = 'pyjsdl.display.py, line 150:\n    button = 4';
		$m.__track_lines__[152] = 'pyjsdl.display.py, line 152:\n    button = 5';
		$m.__track_lines__[154] = 'pyjsdl.display.py, line 154:\n    if velocity < 0:';
		$m.__track_lines__[155] = 'pyjsdl.display.py, line 155:\n    button = 6';
		$m.__track_lines__[157] = 'pyjsdl.display.py, line 157:\n    button = 7';
		$m.__track_lines__[158] = 'pyjsdl.display.py, line 158:\n    event.btn = button';
		$m.__track_lines__[159] = "pyjsdl.display.py, line 159:\n    event.pos = (self.event.mouseMove['x'], self.event.mouseMove['y'])";
		$m.__track_lines__[160] = 'pyjsdl.display.py, line 160:\n    self.event._updateQueue(event)';
		$m.__track_lines__[162] = 'pyjsdl.display.py, line 162:\n    def onKeyDown(self, sender, keycode, modifiers):';
		$m.__track_lines__[163] = 'pyjsdl.display.py, line 163:\n    if keycode in self.modKey:';
		$m.__track_lines__[164] = 'pyjsdl.display.py, line 164:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[165] = 'pyjsdl.display.py, line 165:\n    self.event.keyPress[keycode] = True';
		$m.__track_lines__[166] = 'pyjsdl.display.py, line 166:\n    self.event._updateQueue(event)';
		$m.__track_lines__[167] = 'pyjsdl.display.py, line 167:\n    DOM.eventPreventDefault(event)';
		$m.__track_lines__[169] = 'pyjsdl.display.py, line 169:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[170] = 'pyjsdl.display.py, line 170:\n    self.event._updateQueue(event)';
		$m.__track_lines__[171] = 'pyjsdl.display.py, line 171:\n    DOM.eventPreventDefault(event)';
		$m.__track_lines__[173] = 'pyjsdl.display.py, line 173:\n    def onKeyPress(self, sender, keycode, modifiers):';
		$m.__track_lines__[174] = 'pyjsdl.display.py, line 174:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[175] = 'pyjsdl.display.py, line 175:\n    if not (event.keyCode and event.keyCode in self.specialKey):';
		$m.__track_lines__[176] = 'pyjsdl.display.py, line 176:\n    self.event._updateQueue(event)';
		$m.__track_lines__[177] = 'pyjsdl.display.py, line 177:\n    DOM.eventPreventDefault(event)';
		$m.__track_lines__[179] = 'pyjsdl.display.py, line 179:\n    def onKeyUp(self, sender, keycode, modifiers):';
		$m.__track_lines__[180] = 'pyjsdl.display.py, line 180:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[181] = 'pyjsdl.display.py, line 181:\n    if keycode in self.modKey:';
		$m.__track_lines__[182] = 'pyjsdl.display.py, line 182:\n    self.event.keyPress[keycode] = False';
		$m.__track_lines__[183] = 'pyjsdl.display.py, line 183:\n    self.event._updateQueue(event)';
		$m.__track_lines__[185] = 'pyjsdl.display.py, line 185:\n    def onTouchInitiate(self, event):';
		$m.__track_lines__[186] = 'pyjsdl.display.py, line 186:\n    self.event.touchlistener.activate()';
		$m.__track_lines__[187] = 'pyjsdl.display.py, line 187:\n    for callback in self._touch_callback:';
		$m.__track_lines__[188] = "pyjsdl.display.py, line 188:\n    if hasattr(callback, 'onTouchInitiate'):";
		$m.__track_lines__[189] = 'pyjsdl.display.py, line 189:\n    callback.onTouchInitiate(event)';
		$m.__track_lines__[190] = 'pyjsdl.display.py, line 190:\n    self.onTouchStart(event)';
		$m.__track_lines__[192] = 'pyjsdl.display.py, line 192:\n    def onTouchStart(self, event):';
		$m.__track_lines__[193] = 'pyjsdl.display.py, line 193:\n    for callback in self._touch_callback:';
		$m.__track_lines__[194] = 'pyjsdl.display.py, line 194:\n    callback.onTouchStart(event)';
		$m.__track_lines__[196] = 'pyjsdl.display.py, line 196:\n    def onTouchEnd(self, event):';
		$m.__track_lines__[197] = 'pyjsdl.display.py, line 197:\n    for callback in self._touch_callback:';
		$m.__track_lines__[198] = 'pyjsdl.display.py, line 198:\n    callback.onTouchEnd(event)';
		$m.__track_lines__[200] = 'pyjsdl.display.py, line 200:\n    def onTouchMove(self, event):';
		$m.__track_lines__[201] = 'pyjsdl.display.py, line 201:\n    for callback in self._touch_callback:';
		$m.__track_lines__[202] = 'pyjsdl.display.py, line 202:\n    callback.onTouchMove(event)';
		$m.__track_lines__[204] = 'pyjsdl.display.py, line 204:\n    def onTouchCancel(self, event):';
		$m.__track_lines__[205] = 'pyjsdl.display.py, line 205:\n    for callback in self._touch_callback:';
		$m.__track_lines__[206] = 'pyjsdl.display.py, line 206:\n    callback.onTouchCancel(event)';
		$m.__track_lines__[208] = 'pyjsdl.display.py, line 208:\n    def resize(self, width, height):';
		$m.__track_lines__[209] = 'pyjsdl.display.py, line 209:\n    Surface.resize(self, width, height)';
		$m.__track_lines__[210] = 'pyjsdl.display.py, line 210:\n    if self._bufferedimage:';
		$m.__track_lines__[211] = 'pyjsdl.display.py, line 211:\n    self.surface.resize(width, height)';
		$m.__track_lines__[212] = 'pyjsdl.display.py, line 212:\n    self.surface._display._surface_rect = self.surface.get_rect()';
		$m.__track_lines__[214] = 'pyjsdl.display.py, line 214:\n    def set_callback(self, cb):';
		$m.__track_lines__[215] = "pyjsdl.display.py, line 215:\n    if not hasattr(cb, 'run'):";
		$m.__track_lines__[216] = 'pyjsdl.display.py, line 216:\n    self.callback = Callback(cb)';
		$m.__track_lines__[218] = 'pyjsdl.display.py, line 218:\n    self.callback = cb';
		$m.__track_lines__[220] = 'pyjsdl.display.py, line 220:\n    def load_images(self, images):';
		$m.__track_lines__[221] = 'pyjsdl.display.py, line 221:\n    if images:';
		$m.__track_lines__[222] = 'pyjsdl.display.py, line 222:\n    image_list = []';
		$m.__track_lines__[223] = 'pyjsdl.display.py, line 223:\n    for image in images:';
		$m.__track_lines__[224] = 'pyjsdl.display.py, line 224:\n    if isinstance(image, str):';
		$m.__track_lines__[225] = 'pyjsdl.display.py, line 225:\n    image_list.append(image)';
		$m.__track_lines__[226] = 'pyjsdl.display.py, line 226:\n    self.image_list.append(image)';
		$m.__track_lines__[228] = 'pyjsdl.display.py, line 228:\n    name = image[0]';
		$m.__track_lines__[229] = 'pyjsdl.display.py, line 229:\n    if isinstance(image[1], str):';
		$m.__track_lines__[230] = 'pyjsdl.display.py, line 230:\n    data = image[1]';
		$m.__track_lines__[232] = 'pyjsdl.display.py, line 232:\n    data = base64.b64encode(image[1].getvalue())';
		$m.__track_lines__[233] = "pyjsdl.display.py, line 233:\n    if not data.startswith('data:'):";
		$m.__track_lines__[234] = "pyjsdl.display.py, line 234:\n    ext = name.strip().split('.')[-1]";
		$m.__track_lines__[235] = 'pyjsdl.display.py, line 235:\n    data = "data:%s;base64,%s" %(ext, data)';
		$m.__track_lines__[237] = 'pyjsdl.display.py, line 237:\n    image_list.append(data)';
		$m.__track_lines__[238] = 'pyjsdl.display.py, line 238:\n    self.image_list.append(name)';
		$m.__track_lines__[239] = 'pyjsdl.display.py, line 239:\n    loadImages(image_list, self)';
		$m.__track_lines__[241] = 'pyjsdl.display.py, line 241:\n    self.start()';
		$m.__track_lines__[243] = 'pyjsdl.display.py, line 243:\n    def onImagesLoaded(self, images):';
		$m.__track_lines__[244] = 'pyjsdl.display.py, line 244:\n    for i, image in enumerate(self.image_list):';
		$m.__track_lines__[245] = 'pyjsdl.display.py, line 245:\n    self.images[image] = images[i].getElement()';
		$m.__track_lines__[246] = 'pyjsdl.display.py, line 246:\n    self.start()';
		$m.__track_lines__[248] = 'pyjsdl.display.py, line 248:\n    def start(self):';
		$m.__track_lines__[249] = 'pyjsdl.display.py, line 249:\n    if not self.initialized:';
		$m.__track_lines__[250] = 'pyjsdl.display.py, line 250:\n    self.initialized = True';
		$m.__track_lines__[251] = 'pyjsdl.display.py, line 251:\n    _wnd.requestAnimationFrame(run)';
		$m.__track_lines__[252] = 'pyjsdl.display.py, line 252:\n    self.time.timeout(0, self)';
		$m.__track_lines__[254] = 'pyjsdl.display.py, line 254:\n    def stop(self):';
		$m.__track_lines__[255] = 'pyjsdl.display.py, line 255:\n    global run';
		$m.__track_lines__[256] = 'pyjsdl.display.py, line 256:\n    run = lambda ts: None';
		$m.__track_lines__[257] = 'pyjsdl.display.py, line 257:\n    self.run = lambda: None';
		$m.__track_lines__[259] = 'pyjsdl.display.py, line 259:\n    def _get_rect(self):';
		$m.__track_lines__[260] = 'pyjsdl.display.py, line 260:\n    if self._rect_num < self._rect_len:';
		$m.__track_lines__[261] = 'pyjsdl.display.py, line 261:\n    return self._rect_list[self._rect_num]';
		$m.__track_lines__[263] = 'pyjsdl.display.py, line 263:\n    self._rect_list.append(Rect(0,0,0,0))';
		$m.__track_lines__[264] = 'pyjsdl.display.py, line 264:\n    self._rect_len += 1';
		$m.__track_lines__[265] = 'pyjsdl.display.py, line 265:\n    return self._rect_list[self._rect_num]';
		$m.__track_lines__[267] = 'pyjsdl.display.py, line 267:\n    def run(self):';
		$m.__track_lines__[268] = 'pyjsdl.display.py, line 268:\n    if not self._repaint:';
		$m.__track_lines__[269] = 'pyjsdl.display.py, line 269:\n    self.callback.run()';
		$m.__track_lines__[270] = 'pyjsdl.display.py, line 270:\n    self._repaint = True';
		$m.__track_lines__[271] = 'pyjsdl.display.py, line 271:\n    self.time.timeout(0, self)';
		$m.__track_lines__[274] = 'pyjsdl.display.py, line 274:\n    def run(timestamp):';
		$m.__track_lines__[275] = 'pyjsdl.display.py, line 275:\n    _wnd.requestAnimationFrame(run)';
		$m.__track_lines__[276] = 'pyjsdl.display.py, line 276:\n    if _canvas._repaint:';
		$m.__track_lines__[277] = 'pyjsdl.display.py, line 277:\n    if (timestamp-_canvas._frametime) >= _canvas._framerate:';
		$m.__track_lines__[278] = 'pyjsdl.display.py, line 278:\n    _canvas._frametime = timestamp';
		$m.__track_lines__[279] = 'pyjsdl.display.py, line 279:\n    while _canvas._rect_num:';
		$m.__track_lines__[280] = 'pyjsdl.display.py, line 280:\n    rect = _canvas._rect_list[_canvas._rect_num-1]';
		$m.__track_lines__[281] = 'pyjsdl.display.py, line 281:\n    _ctx.drawImage(_img, rect.x,rect.y,rect.width,rect.height,';
		$m.__track_lines__[283] = 'pyjsdl.display.py, line 283:\n    _canvas._rect_num -= 1';
		$m.__track_lines__[284] = 'pyjsdl.display.py, line 284:\n    _canvas._repaint = False';
		$m.__track_lines__[287] = 'pyjsdl.display.py, line 287:\n    class Callback(object):';
		$m.__track_lines__[289] = "pyjsdl.display.py, line 289:\n    __slots__ = ['run']";
		$m.__track_lines__[291] = 'pyjsdl.display.py, line 291:\n    def __init__(self, cb):';
		$m.__track_lines__[292] = 'pyjsdl.display.py, line 292:\n    self.run = cb';
		$m.__track_lines__[295] = 'pyjsdl.display.py, line 295:\n    class Display(object):';
		$m.__track_lines__[322] = 'pyjsdl.display.py, line 322:\n    def __init__(self):';
		$m.__track_lines__[328] = 'pyjsdl.display.py, line 328:\n    self._initialized = False';
		$m.__track_lines__[329] = 'pyjsdl.display.py, line 329:\n    self.init()';
		$m.__track_lines__[331] = 'pyjsdl.display.py, line 331:\n    def init(self):';
		$m.__track_lines__[335] = 'pyjsdl.display.py, line 335:\n    if not self._initialized:';
		$m.__track_lines__[336] = "pyjsdl.display.py, line 336:\n    self.id = ''";
		$m.__track_lines__[337] = 'pyjsdl.display.py, line 337:\n    self.icon = None';
		$m.__track_lines__[338] = 'pyjsdl.display.py, line 338:\n    self._image_list = []';
		$m.__track_lines__[339] = 'pyjsdl.display.py, line 339:\n    self._nonimplemented_methods()';
		$m.__track_lines__[340] = 'pyjsdl.display.py, line 340:\n    self._initialized = True';
		$m.__track_lines__[342] = 'pyjsdl.display.py, line 342:\n    def set_mode(self, size, buffered=True, *args, **kwargs):';
		$m.__track_lines__[348] = 'pyjsdl.display.py, line 348:\n    self.canvas = Canvas(size, buffered)';
		$m.__track_lines__[349] = 'pyjsdl.display.py, line 349:\n    env.canvas = self.canvas';
		$m.__track_lines__[350] = 'pyjsdl.display.py, line 350:\n    self.frame = Window.getDocumentRoot()';
		$m.__track_lines__[351] = 'pyjsdl.display.py, line 351:\n    env.frame = self.frame';
		$m.__track_lines__[352] = 'pyjsdl.display.py, line 352:\n    panel = FocusPanel(Widget=self.canvas)';
		$m.__track_lines__[353] = 'pyjsdl.display.py, line 353:\n    RootPanel().add(panel)';
		$m.__track_lines__[354] = 'pyjsdl.display.py, line 354:\n    self.panel = panel';
		$m.__track_lines__[355] = 'pyjsdl.display.py, line 355:\n    self.vpanel = None';
		$m.__track_lines__[356] = 'pyjsdl.display.py, line 356:\n    self.textbox = None';
		$m.__track_lines__[357] = 'pyjsdl.display.py, line 357:\n    self.textarea = None';
		$m.__track_lines__[358] = 'pyjsdl.display.py, line 358:\n    self.Textbox = Textbox';
		$m.__track_lines__[359] = 'pyjsdl.display.py, line 359:\n    self.Textarea = Textarea';
		$m.__track_lines__[360] = 'pyjsdl.display.py, line 360:\n    self.surface = self.canvas.surface';
		$m.__track_lines__[361] = 'pyjsdl.display.py, line 361:\n    self.surface._display = self';
		$m.__track_lines__[362] = 'pyjsdl.display.py, line 362:\n    self._surface_rect = self.surface.get_rect()';
		$m.__track_lines__[363] = 'pyjsdl.display.py, line 363:\n    if not self.canvas._bufferedimage:';
		$m.__track_lines__[364] = 'pyjsdl.display.py, line 364:\n    self.flip = lambda: None';
		$m.__track_lines__[365] = 'pyjsdl.display.py, line 365:\n    self.update = lambda *arg: None';
		$m.__track_lines__[366] = 'pyjsdl.display.py, line 366:\n    return self.surface';
		$m.__track_lines__[368] = 'pyjsdl.display.py, line 368:\n    def setup(self, callback, images=None):';
		$m.__track_lines__[375] = 'pyjsdl.display.py, line 375:\n    self.canvas.set_callback(callback)';
		$m.__track_lines__[376] = 'pyjsdl.display.py, line 376:\n    image_list = []';
		$m.__track_lines__[377] = 'pyjsdl.display.py, line 377:\n    if self._image_list:';
		$m.__track_lines__[378] = 'pyjsdl.display.py, line 378:\n    image_list.extend(self._image_list)';
		$m.__track_lines__[379] = 'pyjsdl.display.py, line 379:\n    self._image_list[:] = []';
		$m.__track_lines__[380] = 'pyjsdl.display.py, line 380:\n    if images:';
		$m.__track_lines__[381] = 'pyjsdl.display.py, line 381:\n    image_list.extend(images)';
		$m.__track_lines__[382] = 'pyjsdl.display.py, line 382:\n    self.canvas.load_images(image_list)';
		$m.__track_lines__[384] = 'pyjsdl.display.py, line 384:\n    def set_callback(self, callback):';
		$m.__track_lines__[390] = 'pyjsdl.display.py, line 390:\n    if self.canvas.initialized:';
		$m.__track_lines__[391] = 'pyjsdl.display.py, line 391:\n    self.canvas.set_callback(callback)';
		$m.__track_lines__[393] = 'pyjsdl.display.py, line 393:\n    self.setup(callback)';
		$m.__track_lines__[395] = 'pyjsdl.display.py, line 395:\n    def setup_images(self, images):';
		$m.__track_lines__[401] = 'pyjsdl.display.py, line 401:\n    if isinstance(images, str):';
		$m.__track_lines__[402] = 'pyjsdl.display.py, line 402:\n    images = [images]';
		$m.__track_lines__[403] = 'pyjsdl.display.py, line 403:\n    self._image_list.extend(images)';
		$m.__track_lines__[405] = 'pyjsdl.display.py, line 405:\n    def textbox_init(self):';
		$m.__track_lines__[409] = 'pyjsdl.display.py, line 409:\n    if not self.textbox:';
		$m.__track_lines__[410] = 'pyjsdl.display.py, line 410:\n    self.textbox = Textbox()';
		$m.__track_lines__[411] = 'pyjsdl.display.py, line 411:\n    self.textarea = Textarea()';
		$m.__track_lines__[413] = 'pyjsdl.display.py, line 413:\n    def is_canvas(self):';
		$m.__track_lines__[417] = 'pyjsdl.display.py, line 417:\n    return self.canvas._isCanvas';
		$m.__track_lines__[419] = 'pyjsdl.display.py, line 419:\n    def get_surface(self):';
		$m.__track_lines__[423] = 'pyjsdl.display.py, line 423:\n    return self.surface';
		$m.__track_lines__[425] = 'pyjsdl.display.py, line 425:\n    def get_canvas(self):';
		$m.__track_lines__[429] = 'pyjsdl.display.py, line 429:\n    return self.canvas';
		$m.__track_lines__[431] = 'pyjsdl.display.py, line 431:\n    def get_panel(self):';
		$m.__track_lines__[435] = 'pyjsdl.display.py, line 435:\n    return self.panel';
		$m.__track_lines__[437] = 'pyjsdl.display.py, line 437:\n    def get_vpanel(self):';
		$m.__track_lines__[441] = 'pyjsdl.display.py, line 441:\n    if not self.vpanel:';
		$m.__track_lines__[442] = 'pyjsdl.display.py, line 442:\n    self.vpanel = VerticalPanel()';
		$m.__track_lines__[443] = 'pyjsdl.display.py, line 443:\n    RootPanel().add(self.vpanel)';
		$m.__track_lines__[444] = 'pyjsdl.display.py, line 444:\n    return self.vpanel';
		$m.__track_lines__[446] = 'pyjsdl.display.py, line 446:\n    def getAbsoluteLeft(self):';
		$m.__track_lines__[450] = 'pyjsdl.display.py, line 450:\n    return self.canvas.getAbsoluteLeft()';
		$m.__track_lines__[452] = 'pyjsdl.display.py, line 452:\n    def getAbsoluteTop(self):';
		$m.__track_lines__[456] = 'pyjsdl.display.py, line 456:\n    return self.canvas.getAbsoluteTop()';
		$m.__track_lines__[458] = 'pyjsdl.display.py, line 458:\n    def getScrollLeft(self):';
		$m.__track_lines__[462] = 'pyjsdl.display.py, line 462:\n    return self.frame.scrollLeft';
		$m.__track_lines__[464] = 'pyjsdl.display.py, line 464:\n    def getScrollTop(self):';
		$m.__track_lines__[468] = 'pyjsdl.display.py, line 468:\n    return self.frame.scrollTop';
		$m.__track_lines__[470] = 'pyjsdl.display.py, line 470:\n    def quit(self):';
		$m.__track_lines__[474] = 'pyjsdl.display.py, line 474:\n    self._initialized = False';
		$m.__track_lines__[475] = 'pyjsdl.display.py, line 475:\n    return None';
		$m.__track_lines__[477] = 'pyjsdl.display.py, line 477:\n    def get_init(self):';
		$m.__track_lines__[481] = 'pyjsdl.display.py, line 481:\n    return self._initialized';
		$m.__track_lines__[483] = 'pyjsdl.display.py, line 483:\n    def get_active(self):';
		$m.__track_lines__[487] = "pyjsdl.display.py, line 487:\n    if hasattr(self, 'canvas'):";
		$m.__track_lines__[488] = 'pyjsdl.display.py, line 488:\n    return True';
		$m.__track_lines__[490] = 'pyjsdl.display.py, line 490:\n    return False';
		$m.__track_lines__[492] = 'pyjsdl.display.py, line 492:\n    def set_caption(self, text):';
		$m.__track_lines__[497] = 'pyjsdl.display.py, line 497:\n    self.id = text';
		$m.__track_lines__[498] = 'pyjsdl.display.py, line 498:\n    try:';
		$m.__track_lines__[499] = 'pyjsdl.display.py, line 499:\n    self.canvas.setID(self.id)';
		$m.__track_lines__[501] = 'pyjsdl.display.py, line 501:\n    pass';
		$m.__track_lines__[502] = 'pyjsdl.display.py, line 502:\n    return None';
		$m.__track_lines__[504] = 'pyjsdl.display.py, line 504:\n    def get_caption(self):';
		$m.__track_lines__[508] = 'pyjsdl.display.py, line 508:\n    try:';
		$m.__track_lines__[509] = 'pyjsdl.display.py, line 509:\n    return self.canvas.getID()';
		$m.__track_lines__[511] = 'pyjsdl.display.py, line 511:\n    return self.id';
		$m.__track_lines__[513] = 'pyjsdl.display.py, line 513:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[517] = 'pyjsdl.display.py, line 517:\n    self.set_icon = lambda *arg: None';
		$m.__track_lines__[519] = 'pyjsdl.display.py, line 519:\n    def flip(self):';
		$m.__track_lines__[523] = 'pyjsdl.display.py, line 523:\n    self.canvas.impl.canvasContext.drawImage(self.surface.canvas, 0, 0)';
		$m.__track_lines__[524] = 'pyjsdl.display.py, line 524:\n    return None';
		$m.__track_lines__[526] = 'pyjsdl.display.py, line 526:\n    def update(self, rect_list=None):';
		$m.__track_lines__[531] = "pyjsdl.display.py, line 531:\n    if hasattr(rect_list, 'append'):";
		$m.__track_lines__[532] = 'pyjsdl.display.py, line 532:\n    _update(self.canvas, rect_list)';
		$m.__track_lines__[534] = 'pyjsdl.display.py, line 534:\n    _update(self.canvas, [rect_list])';
		$m.__track_lines__[536] = 'pyjsdl.display.py, line 536:\n    self.flip()';
		$m.__track_lines__[537] = 'pyjsdl.display.py, line 537:\n    return None';
		$m.__track_lines__[540] = 'pyjsdl.display.py, line 540:\n    def _update(canvas, rect_list):';
		$m.__track_lines__[541] = 'pyjsdl.display.py, line 541:\n    for rect in rect_list:';
		$m.__track_lines__[542] = "pyjsdl.display.py, line 542:\n    if hasattr(rect, 'width'):";
		$m.__track_lines__[543] = 'pyjsdl.display.py, line 543:\n    if (rect.width > 0) and (rect.height > 0):';
		$m.__track_lines__[544] = 'pyjsdl.display.py, line 544:\n    repaint_rect = canvas._get_rect()';
		$m.__track_lines__[545] = 'pyjsdl.display.py, line 545:\n    repaint_rect.x = rect.x';
		$m.__track_lines__[546] = 'pyjsdl.display.py, line 546:\n    repaint_rect.y = rect.y';
		$m.__track_lines__[547] = 'pyjsdl.display.py, line 547:\n    repaint_rect.width = rect.width';
		$m.__track_lines__[548] = 'pyjsdl.display.py, line 548:\n    repaint_rect.height = rect.height';
		$m.__track_lines__[549] = 'pyjsdl.display.py, line 549:\n    canvas._rect_num += 1';
		$m.__track_lines__[551] = 'pyjsdl.display.py, line 551:\n    if (rect[2] > 0) and (rect[3] > 0):';
		$m.__track_lines__[552] = 'pyjsdl.display.py, line 552:\n    repaint_rect = canvas._get_rect()';
		$m.__track_lines__[553] = 'pyjsdl.display.py, line 553:\n    repaint_rect.x = rect[0]';
		$m.__track_lines__[554] = 'pyjsdl.display.py, line 554:\n    repaint_rect.y = rect[1]';
		$m.__track_lines__[555] = 'pyjsdl.display.py, line 555:\n    repaint_rect.width = rect[2]';
		$m.__track_lines__[556] = 'pyjsdl.display.py, line 556:\n    repaint_rect.height = rect[3]';
		$m.__track_lines__[557] = 'pyjsdl.display.py, line 557:\n    canvas._rect_num += 1';
		$m.__track_lines__[560] = 'pyjsdl.display.py, line 560:\n    class Textbox(TextBox):';
		$m.__track_lines__[567] = 'pyjsdl.display.py, line 567:\n    def __init__(self, size=None, panel=None):';
		$m.__track_lines__[568] = 'pyjsdl.display.py, line 568:\n    TextBox.__init__(self)';
		$m.__track_lines__[569] = 'pyjsdl.display.py, line 569:\n    if not size:';
		$m.__track_lines__[570] = 'pyjsdl.display.py, line 570:\n    self.width, self.height = env.canvas.surface.width-5, 20';
		$m.__track_lines__[572] = 'pyjsdl.display.py, line 572:\n    self.width, self.height = int(size[0]), int(size[1])';
		$m.__track_lines__[573] = "pyjsdl.display.py, line 573:\n    self.setSize(str(self.width)+'px', str(self.height)+'px')";
		$m.__track_lines__[574] = 'pyjsdl.display.py, line 574:\n    self.setVisible(False)';
		$m.__track_lines__[575] = 'pyjsdl.display.py, line 575:\n    if panel:';
		$m.__track_lines__[576] = 'pyjsdl.display.py, line 576:\n    panel.add(self)';
		$m.__track_lines__[578] = 'pyjsdl.display.py, line 578:\n    try:';
		$m.__track_lines__[579] = 'pyjsdl.display.py, line 579:\n    env.canvas.surface._display.vpanel.add(self)';
		$m.__track_lines__[581] = 'pyjsdl.display.py, line 581:\n    env.canvas.surface._display.vpanel = VerticalPanel()';
		$m.__track_lines__[582] = 'pyjsdl.display.py, line 582:\n    RootPanel().add(env.canvas.surface._display.vpanel)';
		$m.__track_lines__[583] = 'pyjsdl.display.py, line 583:\n    env.canvas.surface._display.vpanel.add(self)';
		$m.__track_lines__[585] = 'pyjsdl.display.py, line 585:\n    def resize(self, width=None, height=None):';
		$m.__track_lines__[586] = 'pyjsdl.display.py, line 586:\n    if not (width or height):';
		$m.__track_lines__[587] = 'pyjsdl.display.py, line 587:\n    self.width, self.height = env.canvas.surface.width-5, 20';
		$m.__track_lines__[589] = 'pyjsdl.display.py, line 589:\n    if width:';
		$m.__track_lines__[590] = 'pyjsdl.display.py, line 590:\n    self.width = int(width)';
		$m.__track_lines__[591] = 'pyjsdl.display.py, line 591:\n    if height:';
		$m.__track_lines__[592] = 'pyjsdl.display.py, line 592:\n    self.height = int(height)';
		$m.__track_lines__[593] = "pyjsdl.display.py, line 593:\n    self.setSize(str(self.width)+'px', str(self.height)+'px')";
		$m.__track_lines__[595] = 'pyjsdl.display.py, line 595:\n    def toggle(self, visible=None):';
		$m.__track_lines__[596] = 'pyjsdl.display.py, line 596:\n    if visible:';
		$m.__track_lines__[597] = 'pyjsdl.display.py, line 597:\n    self.setVisible(visible)';
		$m.__track_lines__[599] = 'pyjsdl.display.py, line 599:\n    self.setVisible(not self.getVisible())';
		$m.__track_lines__[602] = 'pyjsdl.display.py, line 602:\n    class Textarea(TextArea):';
		$m.__track_lines__[609] = 'pyjsdl.display.py, line 609:\n    def __init__(self, size=None, panel=None):';
		$m.__track_lines__[610] = 'pyjsdl.display.py, line 610:\n    TextArea.__init__(self)';
		$m.__track_lines__[611] = 'pyjsdl.display.py, line 611:\n    if not size:';
		$m.__track_lines__[612] = 'pyjsdl.display.py, line 612:\n    self.width, self.height = env.canvas.surface.width-5, int(env.canvas.surface.height/5)-5';
		$m.__track_lines__[614] = 'pyjsdl.display.py, line 614:\n    self.width, self.height = int(size[0]), int(size[1])';
		$m.__track_lines__[615] = "pyjsdl.display.py, line 615:\n    self.setSize(str(self.width)+'px', str(self.height)+'px')";
		$m.__track_lines__[616] = "pyjsdl.display.py, line 616:\n    self.setStyleAttribute({'resize':'vertical'})";
		$m.__track_lines__[617] = 'pyjsdl.display.py, line 617:\n    self.setVisible(False)';
		$m.__track_lines__[618] = 'pyjsdl.display.py, line 618:\n    if panel:';
		$m.__track_lines__[619] = 'pyjsdl.display.py, line 619:\n    panel.add(self)';
		$m.__track_lines__[621] = 'pyjsdl.display.py, line 621:\n    try:';
		$m.__track_lines__[622] = 'pyjsdl.display.py, line 622:\n    env.canvas.surface._display.vpanel.add(self)';
		$m.__track_lines__[624] = 'pyjsdl.display.py, line 624:\n    env.canvas.surface._display.vpanel = VerticalPanel()';
		$m.__track_lines__[625] = 'pyjsdl.display.py, line 625:\n    RootPanel().add(env.canvas.surface._display.vpanel)';
		$m.__track_lines__[626] = 'pyjsdl.display.py, line 626:\n    env.canvas.surface._display.vpanel.add(self)';
		$m.__track_lines__[628] = 'pyjsdl.display.py, line 628:\n    def resize(self, width=None, height=None):';
		$m.__track_lines__[629] = 'pyjsdl.display.py, line 629:\n    if not (width or height):';
		$m.__track_lines__[630] = 'pyjsdl.display.py, line 630:\n    self.width, self.height = env.canvas.surface.width-5, int(env.canvas.surface.height/5)-5';
		$m.__track_lines__[632] = 'pyjsdl.display.py, line 632:\n    if width:';
		$m.__track_lines__[633] = 'pyjsdl.display.py, line 633:\n    self.width = int(width)';
		$m.__track_lines__[634] = 'pyjsdl.display.py, line 634:\n    if height:';
		$m.__track_lines__[635] = 'pyjsdl.display.py, line 635:\n    self.height = int(height)';
		$m.__track_lines__[636] = "pyjsdl.display.py, line 636:\n    self.setSize(str(self.width)+'px', str(self.height)+'px')";
		$m.__track_lines__[638] = 'pyjsdl.display.py, line 638:\n    def toggle(self, visible=None):';
		$m.__track_lines__[639] = 'pyjsdl.display.py, line 639:\n    if visible:';
		$m.__track_lines__[640] = 'pyjsdl.display.py, line 640:\n    self.setVisible(visible)';
		$m.__track_lines__[642] = 'pyjsdl.display.py, line 642:\n    self.setVisible(not self.getVisible())';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_20 = new $p['int'](20);
		$pyjs['track']['module']='pyjsdl.display';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['base64'] = $p['___import___']('base64', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Rect'] = $p['___import___']('pyjsdl.rect.Rect', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Time'] = $p['___import___']('pyjsdl.time.Time', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=8;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=9;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=10;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pyjsdl'] = $p['___import___']('pyjsdl.event', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=11;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjsdl.pyjsobj.DOM', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Window'] = $p['___import___']('pyjsdl.pyjsobj.Window', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['RootPanel'] = $p['___import___']('pyjsdl.pyjsobj.RootPanel', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['FocusPanel'] = $p['___import___']('pyjsdl.pyjsobj.FocusPanel', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['VerticalPanel'] = $p['___import___']('pyjsdl.pyjsobj.VerticalPanel', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['loadImages'] = $p['___import___']('pyjsdl.pyjsobj.loadImages', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['TextBox'] = $p['___import___']('pyjsdl.pyjsobj.TextBox', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['TextArea'] = $p['___import___']('pyjsdl.pyjsobj.TextArea', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['MouseWheelHandler'] = $p['___import___']('pyjsdl.pyjsobj.MouseWheelHandler', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['eventGetMouseWheelVelocityY'] = $p['___import___']('pyjsdl.pyjsobj.eventGetMouseWheelVelocityY', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Event'] = $p['___import___']('pyjsdl.pyjsobj.Event', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['requestAnimationFrameInit'] = $p['___import___']('pyjsdl.pyjsobj.requestAnimationFrameInit', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=12;
		$pyjs['track']['lineno']=14;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=17;
		$m['_canvas'] = null;
		$pyjs['track']['lineno']=18;
		$m['_ctx'] = null;
		$pyjs['track']['lineno']=19;
		$m['_img'] = null;
		$pyjs['track']['lineno']=20;
		$m['_wnd'] = null;
		$pyjs['track']['lineno']=23;
		$m['Canvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.display';
			$cls_definition['__md5__'] = '52dcb7fdaad76f831bba9d71c37a536e';
			$pyjs['track']['lineno']=25;
			$method = $pyjs__bind_method2('__init__', function(size, buffered) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					buffered = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=25;
				$pyjs['track']['lineno']=26;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Surface']['__init__'](self, size);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
				$pyjs['track']['lineno']=27;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['MouseWheelHandler']['__init__'](self, true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
				$pyjs['track']['lineno']=28;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](buffered, $p['bool']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
					$pyjs['track']['lineno']=29;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_bufferedimage', buffered) : $p['setattr'](self, '_bufferedimage', buffered); 
				}
				else {
					$pyjs['track']['lineno']=31;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_bufferedimage', true) : $p['setattr'](self, '_bufferedimage', true); 
				}
				$pyjs['track']['lineno']=32;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=33;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['getattr']($p['getattr'](self, 'impl'), 'canvasContext'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
							$pyjs['track']['lineno']=34;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isCanvas', true) : $p['setattr'](self, '_isCanvas', true); 
						}
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
					$pyjs['track']['module']='pyjsdl.display';
					if (true) {
						$pyjs['track']['lineno']=36;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isCanvas', false) : $p['setattr'](self, '_isCanvas', false); 
						$pyjs['track']['lineno']=37;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_bufferedimage', false) : $p['setattr'](self, '_bufferedimage', false); 
					}
				}
				$pyjs['track']['lineno']=38;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, '_bufferedimage'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
					$pyjs['track']['lineno']=39;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('surface', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Surface'](size);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) : $p['setattr'](self, 'surface', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Surface'](size);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()); 
				}
				else {
					$pyjs['track']['lineno']=41;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('surface', self) : $p['setattr'](self, 'surface', self); 
				}
				$pyjs['track']['lineno']=42;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('images', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) : $p['setattr'](self, 'images', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()); 
				$pyjs['track']['lineno']=43;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('image_list', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) : $p['setattr'](self, 'image_list', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()); 
				$pyjs['track']['lineno']=44;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callback', null) : $p['setattr'](self, 'callback', null); 
				$pyjs['track']['lineno']=45;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Time']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) : $p['setattr'](self, 'time', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Time']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()); 
				$pyjs['track']['lineno']=46;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('event', $p['getattr']($m['pyjsdl'], 'event')) : $p['setattr'](self, 'event', $p['getattr']($m['pyjsdl'], 'event')); 
				$pyjs['track']['lineno']=47;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addMouseListener'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs['track']['lineno']=48;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addMouseWheelListener'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs['track']['lineno']=49;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addKeyboardListener'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs['track']['lineno']=50;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['sinkEvents']($p['op_bitor']([$p['getattr']($m['Event'], 'ONMOUSEDOWN'), $p['getattr']($m['Event'], 'ONMOUSEUP'), $p['getattr']($m['Event'], 'ONMOUSEMOVE'), $p['getattr']($m['Event'], 'ONMOUSEOUT'), $p['getattr']($m['Event'], 'ONMOUSEWHEEL'), $p['getattr']($m['Event'], 'ONKEYDOWN'), $p['getattr']($m['Event'], 'ONKEYPRESS'), $p['getattr']($m['Event'], 'ONKEYUP')]));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs['track']['lineno']=51;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modKey', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'modKey')) : $p['setattr'](self, 'modKey', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'modKey')); 
				$pyjs['track']['lineno']=52;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('specialKey', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'specialKey')) : $p['setattr'](self, 'specialKey', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'specialKey')); 
				$pyjs['track']['lineno']=53;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['event']['_initiate_touch_listener'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs['track']['lineno']=54;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_touch_callback', $p['getattr']($p['getattr']($p['getattr'](self, 'event'), 'touchlistener'), 'callback')) : $p['setattr'](self, '_touch_callback', $p['getattr']($p['getattr']($p['getattr'](self, 'event'), 'touchlistener'), 'callback')); 
				$pyjs['track']['lineno']=55;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_repaint', false) : $p['setattr'](self, '_repaint', false); 
				$pyjs['track']['lineno']=56;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_rect_list', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) : $p['setattr'](self, '_rect_list', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()); 
				$pyjs['track']['lineno']=57;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_rect_len', $constant_int_0) : $p['setattr'](self, '_rect_len', $constant_int_0); 
				$pyjs['track']['lineno']=58;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_rect_num', $constant_int_0) : $p['setattr'](self, '_rect_num', $constant_int_0); 
				$pyjs['track']['lineno']=59;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_framerate', $constant_int_0) : $p['setattr'](self, '_framerate', $constant_int_0); 
				$pyjs['track']['lineno']=60;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_frametime', $constant_int_0) : $p['setattr'](self, '_frametime', $constant_int_0); 
				$pyjs['track']['lineno']=61;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_canvas_init']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs['track']['lineno']=62;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('initialized', false) : $p['setattr'](self, 'initialized', false); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['size'],['buffered']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=64;
			$method = $pyjs__bind_method2('_canvas_init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=64;
				$pyjs['track']['lineno']=65;
				$pyjs['track']['lineno']=66;
				$m['_canvas'] = self;
				$pyjs['track']['lineno']=67;
				$m['_ctx'] = $p['getattr']($p['getattr'](self, 'impl'), 'canvasContext');
				$pyjs['track']['lineno']=68;
				$m['_img'] = $p['getattr']($p['getattr'](self, 'surface'), 'canvas');
				$pyjs['track']['lineno']=69;
				$m['_wnd'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['requestAnimationFrameInit']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_canvas_init'] = $method;
			$pyjs['track']['lineno']=71;
			$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=71;
				$pyjs['track']['lineno']=72;
				event = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['eventGetCurrentEvent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs['track']['lineno']=73;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) : $p['setattr'](event, 'pos', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()); 
				$pyjs['track']['lineno']=74;
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('x', $tupleassign1[0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('y', $tupleassign1[1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				$pyjs['track']['lineno']=75;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['event']['_updateQueue'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseMove'] = $method;
			$pyjs['track']['lineno']=77;
			$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':77};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=77;
				$pyjs['track']['lineno']=78;
				event = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['eventGetCurrentEvent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs['track']['lineno']=79;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) : $p['setattr'](event, 'pos', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()); 
				$pyjs['track']['lineno']=80;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($p['getattr'](event, 'button'), true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs['track']['lineno']=81;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['event']['_updateQueue'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseDown'] = $method;
			$pyjs['track']['lineno']=83;
			$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':83};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=83;
				$pyjs['track']['lineno']=84;
				event = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['eventGetCurrentEvent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs['track']['lineno']=85;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) : $p['setattr'](event, 'pos', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()); 
				$pyjs['track']['lineno']=86;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($p['getattr'](event, 'button'), false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
				$pyjs['track']['lineno']=87;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['event']['_updateQueue'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseUp'] = $method;
			$pyjs['track']['lineno']=89;
			$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,keycode;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':89};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=89;
				$pyjs['track']['lineno']=90;
				var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([false, false, false]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})(), 3, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($constant_int_0, $tupleassign2[0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($constant_int_1, $tupleassign2[1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($constant_int_2, $tupleassign2[2]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				$pyjs['track']['lineno']=91;
				var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([(typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('x', $tupleassign3[0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('y', $tupleassign3[1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs['track']['lineno']=92;
				var $tupleassign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([null, null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'event'), 'mouseMoveRel')['__setitem__']('x', $tupleassign4[0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'event'), 'mouseMoveRel')['__setitem__']('y', $tupleassign4[1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
				$pyjs['track']['lineno']=93;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'modKey');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					keycode = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=94;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__getitem__'](keycode));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})()) {
						$pyjs['track']['lineno']=95;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__setitem__'](keycode, false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseLeave'] = $method;
			$pyjs['track']['lineno']=97;
			$method = $pyjs__bind_method2('onMouseWheel', function(sender, velocity) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					velocity = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':97};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=97;
				$pyjs['track']['lineno']=98;
				event = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['eventGetCurrentEvent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				$pyjs['track']['lineno']=99;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](event, 'type'), 'mousewheel'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
					$pyjs['track']['lineno']=101;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['hasattr'](event, 'wheelDeltaX');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()) {
						$pyjs['track']['lineno']=102;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onMouseWheel', $p['getattr'](self, '_onMouseWheel')) : $p['setattr'](self, 'onMouseWheel', $p['getattr'](self, '_onMouseWheel')); 
						$pyjs['track']['lineno']=103;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['_onMouseWheel'](sender, velocity);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=105;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onMouseWheel', $p['getattr'](self, '_onMouseWheelY')) : $p['setattr'](self, 'onMouseWheel', $p['getattr'](self, '_onMouseWheelY')); 
						$pyjs['track']['lineno']=106;
						$m['DOM']['__is_instance__'] && typeof $m['DOM']['__setattr__'] == 'function' ? $m['DOM']['__setattr__']('eventGetMouseWheelVelocityY', $m['eventGetMouseWheelVelocityY']) : $p['setattr']($m['DOM'], 'eventGetMouseWheelVelocityY', $m['eventGetMouseWheelVelocityY']); 
						$pyjs['track']['lineno']=107;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['_onMouseWheelY'](sender, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['eventGetMouseWheelVelocityY'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=109;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onMouseWheel', $p['getattr'](self, '_onMouseScroll')) : $p['setattr'](self, 'onMouseWheel', $p['getattr'](self, '_onMouseScroll')); 
					$pyjs['track']['lineno']=110;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_onMouseScroll'](sender, velocity);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['velocity']]);
			$cls_definition['onMouseWheel'] = $method;
			$pyjs['track']['lineno']=112;
			$method = $pyjs__bind_method2('_onMouseWheel', function(sender, velocity) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					velocity = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,evt,button,$pyjs__trackstack_size_1,$iter2_idx,event,$div8,events,$iter2_array,$div3,$div2,$div7,$div1,$div6,$div4,$div5;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':112};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=112;
				$pyjs['track']['lineno']=113;
				event = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['eventGetCurrentEvent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
				$pyjs['track']['lineno']=114;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](event, 'wheelDeltaX')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
					$pyjs['track']['lineno']=115;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp'](velocity, $constant_int_0) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) {
						$pyjs['track']['lineno']=116;
						button = $constant_int_4;
						$pyjs['track']['lineno']=117;
						events = (typeof ($div1=velocity)==typeof ($div2=(typeof ($usub3=$constant_int_3)=='number'?
							-$usub3:
							$p['op_usub']($usub3))) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2));
					}
					else {
						$pyjs['track']['lineno']=119;
						button = $constant_int_5;
						$pyjs['track']['lineno']=120;
						events = (typeof ($div3=velocity)==typeof ($div4=$constant_int_3) && typeof $div3=='number' && $div4 !== 0?
							$div3/$div4:
							$p['op_div']($div3,$div4));
					}
				}
				else {
					$pyjs['track']['lineno']=122;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp'](velocity, $constant_int_0) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
						$pyjs['track']['lineno']=123;
						button = $constant_int_6;
						$pyjs['track']['lineno']=124;
						events = (typeof ($div5=velocity)==typeof ($div6=(typeof ($usub4=$constant_int_3)=='number'?
							-$usub4:
							$p['op_usub']($usub4))) && typeof $div5=='number' && $div6 !== 0?
							$div5/$div6:
							$p['op_div']($div5,$div6));
					}
					else {
						$pyjs['track']['lineno']=126;
						button = $constant_int_7;
						$pyjs['track']['lineno']=127;
						events = (typeof ($div7=velocity)==typeof ($div8=$constant_int_3) && typeof $div7=='number' && $div8 !== 0?
							$div7/$div8:
							$p['op_div']($div7,$div8));
					}
				}
				$pyjs['track']['lineno']=128;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('btn', button) : $p['setattr'](event, 'btn', button); 
				$pyjs['track']['lineno']=129;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) : $p['setattr'](event, 'pos', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()); 
				$pyjs['track']['lineno']=130;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range'](events);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					evt = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=131;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['event']['_updateQueue'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['velocity']]);
			$cls_definition['_onMouseWheel'] = $method;
			$pyjs['track']['lineno']=133;
			$method = $pyjs__bind_method2('_onMouseWheelY', function(sender, velocity) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					velocity = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,events,button,$iter3_array,$div10,$div11,$div12,event,$pyjs__trackstack_size_1,$div9,$iter3_iter,$iter3_type,$iter3_nextval,evt;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':133};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=133;
				$pyjs['track']['lineno']=134;
				event = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['eventGetCurrentEvent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
				$pyjs['track']['lineno']=135;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp'](velocity, $constant_int_0) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})()) {
					$pyjs['track']['lineno']=136;
					button = $constant_int_4;
					$pyjs['track']['lineno']=137;
					events = (typeof ($div9=velocity)==typeof ($div10=(typeof ($usub5=$constant_int_3)=='number'?
						-$usub5:
						$p['op_usub']($usub5))) && typeof $div9=='number' && $div10 !== 0?
						$div9/$div10:
						$p['op_div']($div9,$div10));
				}
				else {
					$pyjs['track']['lineno']=139;
					button = $constant_int_5;
					$pyjs['track']['lineno']=140;
					events = (typeof ($div11=velocity)==typeof ($div12=$constant_int_3) && typeof $div11=='number' && $div12 !== 0?
						$div11/$div12:
						$p['op_div']($div11,$div12));
				}
				$pyjs['track']['lineno']=141;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('btn', button) : $p['setattr'](event, 'btn', button); 
				$pyjs['track']['lineno']=142;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) : $p['setattr'](event, 'pos', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()); 
				$pyjs['track']['lineno']=143;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range'](events);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					evt = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=144;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['event']['_updateQueue'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['velocity']]);
			$cls_definition['_onMouseWheelY'] = $method;
			$pyjs['track']['lineno']=146;
			$method = $pyjs__bind_method2('_onMouseScroll', function(sender, velocity) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					velocity = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,$or2,button,event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':146};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=146;
				$pyjs['track']['lineno']=147;
				event = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['eventGetCurrentEvent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				$pyjs['track']['lineno']=148;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($or1=($p['cmp'](velocity, $constant_int_1) == 1))?$or1:($p['cmp'](velocity, (typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6))) == -1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
					$pyjs['track']['lineno']=149;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp'](velocity, $constant_int_0) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()) {
						$pyjs['track']['lineno']=150;
						button = $constant_int_4;
					}
					else {
						$pyjs['track']['lineno']=152;
						button = $constant_int_5;
					}
				}
				else {
					$pyjs['track']['lineno']=154;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp'](velocity, $constant_int_0) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()) {
						$pyjs['track']['lineno']=155;
						button = $constant_int_6;
					}
					else {
						$pyjs['track']['lineno']=157;
						button = $constant_int_7;
					}
				}
				$pyjs['track']['lineno']=158;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('btn', button) : $p['setattr'](event, 'btn', button); 
				$pyjs['track']['lineno']=159;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) : $p['setattr'](event, 'pos', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()); 
				$pyjs['track']['lineno']=160;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['event']['_updateQueue'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['velocity']]);
			$cls_definition['_onMouseScroll'] = $method;
			$pyjs['track']['lineno']=162;
			$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':162};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=162;
				$pyjs['track']['lineno']=163;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'modKey')['__contains__'](keycode));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
					$pyjs['track']['lineno']=164;
					event = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['eventGetCurrentEvent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
					$pyjs['track']['lineno']=165;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__setitem__'](keycode, true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
					$pyjs['track']['lineno']=166;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['event']['_updateQueue'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
					$pyjs['track']['lineno']=167;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['eventPreventDefault'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'specialKey')['__contains__'](keycode));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()) {
					$pyjs['track']['lineno']=169;
					event = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['eventGetCurrentEvent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
					$pyjs['track']['lineno']=170;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['event']['_updateQueue'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
					$pyjs['track']['lineno']=171;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['eventPreventDefault'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyDown'] = $method;
			$pyjs['track']['lineno']=173;
			$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and1,$and2,event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':173};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=173;
				$pyjs['track']['lineno']=174;
				event = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['eventGetCurrentEvent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				$pyjs['track']['lineno']=175;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](($p['bool']($and1=$p['getattr'](event, 'keyCode'))?$p['getattr'](self, 'specialKey')['__contains__']($p['getattr'](event, 'keyCode')):$and1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()) {
					$pyjs['track']['lineno']=176;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['event']['_updateQueue'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
				}
				$pyjs['track']['lineno']=177;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['eventPreventDefault'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyPress'] = $method;
			$pyjs['track']['lineno']=179;
			$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':179};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=179;
				$pyjs['track']['lineno']=180;
				event = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['eventGetCurrentEvent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
				$pyjs['track']['lineno']=181;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'modKey')['__contains__'](keycode));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()) {
					$pyjs['track']['lineno']=182;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__setitem__'](keycode, false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				}
				$pyjs['track']['lineno']=183;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['event']['_updateQueue'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyUp'] = $method;
			$pyjs['track']['lineno']=185;
			$method = $pyjs__bind_method2('onTouchInitiate', function(event) {
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
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter4_nextval,$iter4_idx,callback,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':185};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=185;
				$pyjs['track']['lineno']=186;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['event']['touchlistener']['activate']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
				$pyjs['track']['lineno']=187;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_touch_callback');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					callback = $iter4_nextval['$nextval'];
					$pyjs['track']['lineno']=188;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['hasattr'](callback, 'onTouchInitiate');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()) {
						$pyjs['track']['lineno']=189;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return callback['onTouchInitiate'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=190;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['onTouchStart'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onTouchInitiate'] = $method;
			$pyjs['track']['lineno']=192;
			$method = $pyjs__bind_method2('onTouchStart', function(event) {
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
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter5_array,$pyjs__trackstack_size_1,callback,$iter5_iter,$iter5_idx,$iter5_type;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':192};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=192;
				$pyjs['track']['lineno']=193;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_touch_callback');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					callback = $iter5_nextval['$nextval'];
					$pyjs['track']['lineno']=194;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return callback['onTouchStart'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onTouchStart'] = $method;
			$pyjs['track']['lineno']=196;
			$method = $pyjs__bind_method2('onTouchEnd', function(event) {
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
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_idx,$iter6_type,callback,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':196};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=196;
				$pyjs['track']['lineno']=197;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_touch_callback');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					callback = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=198;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return callback['onTouchEnd'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onTouchEnd'] = $method;
			$pyjs['track']['lineno']=200;
			$method = $pyjs__bind_method2('onTouchMove', function(event) {
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
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter7_nextval,$iter7_iter,$iter7_array,callback,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':200};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=200;
				$pyjs['track']['lineno']=201;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_touch_callback');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					callback = $iter7_nextval['$nextval'];
					$pyjs['track']['lineno']=202;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return callback['onTouchMove'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onTouchMove'] = $method;
			$pyjs['track']['lineno']=204;
			$method = $pyjs__bind_method2('onTouchCancel', function(event) {
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
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter8_idx,$iter8_array,$iter8_iter,callback,$iter8_nextval,$pyjs__trackstack_size_1,$iter8_type;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':204};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=204;
				$pyjs['track']['lineno']=205;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_touch_callback');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					callback = $iter8_nextval['$nextval'];
					$pyjs['track']['lineno']=206;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return callback['onTouchCancel'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onTouchCancel'] = $method;
			$pyjs['track']['lineno']=208;
			$method = $pyjs__bind_method2('resize', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':208};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=208;
				$pyjs['track']['lineno']=209;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Surface']['resize'](self, width, height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
				$pyjs['track']['lineno']=210;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, '_bufferedimage'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()) {
					$pyjs['track']['lineno']=211;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['surface']['resize'](width, height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
				}
				$pyjs['track']['lineno']=212;
				$p['getattr']($p['getattr'](self, 'surface'), '_display')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'surface'), '_display')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'surface'), '_display')['__setattr__']('_surface_rect', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['surface']['get_rect']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()) : $p['setattr']($p['getattr']($p['getattr'](self, 'surface'), '_display'), '_surface_rect', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['surface']['get_rect']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['resize'] = $method;
			$pyjs['track']['lineno']=214;
			$method = $pyjs__bind_method2('set_callback', function(cb) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					cb = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':214};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=214;
				$pyjs['track']['lineno']=215;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](cb, 'run');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})()) {
					$pyjs['track']['lineno']=216;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callback', (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof Callback == "undefined"?$m['Callback']:Callback)(cb);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})()) : $p['setattr'](self, 'callback', (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof Callback == "undefined"?$m['Callback']:Callback)(cb);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})()); 
				}
				else {
					$pyjs['track']['lineno']=218;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callback', cb) : $p['setattr'](self, 'callback', cb); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['cb']]);
			$cls_definition['set_callback'] = $method;
			$pyjs['track']['lineno']=220;
			$method = $pyjs__bind_method2('load_images', function(images) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					images = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var name,$iter9_iter,image_list,$iter9_nextval,$iter9_idx,$iter9_array,ext,image,$pyjs__trackstack_size_1,data,$iter9_type;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':220};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=220;
				$pyjs['track']['lineno']=221;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](images);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})()) {
					$pyjs['track']['lineno']=222;
					image_list = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
					$pyjs['track']['lineno']=223;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return images;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
					$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
					while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
						image = $iter9_nextval['$nextval'];
						$pyjs['track']['lineno']=224;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isinstance'](image, $p['str']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})()) {
							$pyjs['track']['lineno']=225;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return image_list['append'](image);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
							$pyjs['track']['lineno']=226;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['image_list']['append'](image);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=228;
							name = image['__getitem__']($constant_int_0);
							$pyjs['track']['lineno']=229;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['isinstance'](image['__getitem__']($constant_int_1), $p['str']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})()) {
								$pyjs['track']['lineno']=230;
								data = image['__getitem__']($constant_int_1);
							}
							else {
								$pyjs['track']['lineno']=232;
								data = (function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['base64']['b64encode']((function(){try{try{$pyjs['in_try_except'] += 1;
								return image['__getitem__']($constant_int_1)['getvalue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
							}
							$pyjs['track']['lineno']=233;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return data['startswith']('data:');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()) {
								$pyjs['track']['lineno']=234;
								ext = (function(){try{try{$pyjs['in_try_except'] += 1;
								return (function(){try{try{$pyjs['in_try_except'] += 1;
								return name['strip']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})()['$$split']('.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()['__getitem__']((typeof ($usub7=$constant_int_1)=='number'?
									-$usub7:
									$p['op_usub']($usub7)));
								$pyjs['track']['lineno']=235;
								data = (function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['sprintf']('data:%s;base64,%s', (function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['tuple']([ext, data]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
							}
							$pyjs['track']['lineno']=237;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return image_list['append'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
							$pyjs['track']['lineno']=238;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['image_list']['append'](name);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.display';
					$pyjs['track']['lineno']=239;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['loadImages'](image_list, self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=241;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['start']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['images']]);
			$cls_definition['load_images'] = $method;
			$pyjs['track']['lineno']=243;
			$method = $pyjs__bind_method2('onImagesLoaded', function(images) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					images = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter10_nextval,i,$iter10_array,$iter10_type,image,$pyjs__trackstack_size_1,$iter10_iter,$iter10_idx;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':243};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=243;
				$pyjs['track']['lineno']=244;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['enumerate']($p['getattr'](self, 'image_list'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					var $tupleassign5 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter10_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
					i = $tupleassign5[0];
					image = $tupleassign5[1];
					$pyjs['track']['lineno']=245;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'images')['__setitem__'](image, (function(){try{try{$pyjs['in_try_except'] += 1;
					return images['__getitem__'](i)['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=246;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['start']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['images']]);
			$cls_definition['onImagesLoaded'] = $method;
			$pyjs['track']['lineno']=248;
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
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':248};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=248;
				$pyjs['track']['lineno']=249;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'initialized')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})()) {
					$pyjs['track']['lineno']=250;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('initialized', true) : $p['setattr'](self, 'initialized', true); 
					$pyjs['track']['lineno']=251;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['_wnd']['requestAnimationFrame']((typeof run == "undefined"?$m['run']:run));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
					$pyjs['track']['lineno']=252;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['time']['timeout']($constant_int_0, self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['start'] = $method;
			$pyjs['track']['lineno']=254;
			$method = $pyjs__bind_method2('stop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda2,$lambda1;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':254};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=254;
				$pyjs['track']['lineno']=255;
				$pyjs['track']['lineno']=256;
				var 				$lambda1 = function(ts) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

					$pyjs['track']={'module':'pyjsdl.display','lineno':256};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.display';
					$pyjs['track']['lineno']=256;
					$pyjs['track']['lineno']=256;
					$pyjs['track']['lineno']=256;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null,['ts']];
				$m['run'] = $lambda1;
				$pyjs['track']['lineno']=257;
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					$pyjs['track']={'module':'pyjsdl.display','lineno':257};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.display';
					$pyjs['track']['lineno']=257;
					$pyjs['track']['lineno']=257;
					$pyjs['track']['lineno']=257;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = [null,null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('run', $lambda2) : $p['setattr'](self, 'run', $lambda2); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['stop'] = $method;
			$pyjs['track']['lineno']=259;
			$method = $pyjs__bind_method2('_get_rect', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':259};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=259;
				$pyjs['track']['lineno']=260;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp']($p['getattr'](self, '_rect_num'), $p['getattr'](self, '_rect_len')) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})()) {
					$pyjs['track']['lineno']=261;
					$pyjs['track']['lineno']=261;
					var $pyjs__ret = $p['getattr'](self, '_rect_list')['__getitem__']($p['getattr'](self, '_rect_num'));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=263;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_rect_list']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Rect']($constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})();
					$pyjs['track']['lineno']=264;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_rect_len', $p['__op_add']($add1=$p['getattr'](self, '_rect_len'),$add2=$constant_int_1)) : $p['setattr'](self, '_rect_len', $p['__op_add']($add1=$p['getattr'](self, '_rect_len'),$add2=$constant_int_1)); 
					$pyjs['track']['lineno']=265;
					$pyjs['track']['lineno']=265;
					var $pyjs__ret = $p['getattr'](self, '_rect_list')['__getitem__']($p['getattr'](self, '_rect_num'));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_get_rect'] = $method;
			$pyjs['track']['lineno']=267;
			$method = $pyjs__bind_method2('run', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52dcb7fdaad76f831bba9d71c37a536e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':267};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=267;
				$pyjs['track']['lineno']=268;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, '_repaint')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})()) {
					$pyjs['track']['lineno']=269;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['callback']['run']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
					$pyjs['track']['lineno']=270;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_repaint', true) : $p['setattr'](self, '_repaint', true); 
				}
				$pyjs['track']['lineno']=271;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['time']['timeout']($constant_int_0, self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['run'] = $method;
			$pyjs['track']['lineno']=23;
			var $bases = new Array($m['Surface'],$m['MouseWheelHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Canvas', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=274;
		$m['run'] = function(timestamp) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $sub5,$sub3,$sub2,$sub1,$sub6,rect,$sub4;
			$pyjs['track']={'module':'pyjsdl.display','lineno':274};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.display';
			$pyjs['track']['lineno']=274;
			$pyjs['track']['lineno']=275;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['_wnd']['requestAnimationFrame']($m['run']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
			$pyjs['track']['lineno']=276;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr']($m['_canvas'], '_repaint'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()) {
				$pyjs['track']['lineno']=277;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](((($p['cmp']($p['__op_sub']($sub1=timestamp,$sub2=$p['getattr']($m['_canvas'], '_frametime')), $p['getattr']($m['_canvas'], '_framerate')))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})()) {
					$pyjs['track']['lineno']=278;
					$m['_canvas']['__is_instance__'] && typeof $m['_canvas']['__setattr__'] == 'function' ? $m['_canvas']['__setattr__']('_frametime', timestamp) : $p['setattr']($m['_canvas'], '_frametime', timestamp); 
					$pyjs['track']['lineno']=279;
					while ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr']($m['_canvas'], '_rect_num'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})()) {
						$pyjs['track']['lineno']=280;
						rect = $p['getattr']($m['_canvas'], '_rect_list')['__getitem__']($p['__op_sub']($sub3=$p['getattr']($m['_canvas'], '_rect_num'),$sub4=$constant_int_1));
						$pyjs['track']['lineno']=281;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['_ctx']['drawImage']($m['_img'], $p['getattr'](rect, 'x'), $p['getattr'](rect, 'y'), $p['getattr'](rect, 'width'), $p['getattr'](rect, 'height'), $p['getattr'](rect, 'x'), $p['getattr'](rect, 'y'), $p['getattr'](rect, 'width'), $p['getattr'](rect, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
						$pyjs['track']['lineno']=283;
						$m['_canvas']['__is_instance__'] && typeof $m['_canvas']['__setattr__'] == 'function' ? $m['_canvas']['__setattr__']('_rect_num', $p['__op_sub']($sub5=$p['getattr']($m['_canvas'], '_rect_num'),$sub6=$constant_int_1)) : $p['setattr']($m['_canvas'], '_rect_num', $p['__op_sub']($sub5=$p['getattr']($m['_canvas'], '_rect_num'),$sub6=$constant_int_1)); 
					}
					$pyjs['track']['lineno']=284;
					$m['_canvas']['__is_instance__'] && typeof $m['_canvas']['__setattr__'] == 'function' ? $m['_canvas']['__setattr__']('_repaint', false) : $p['setattr']($m['_canvas'], '_repaint', false); 
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['run']['__name__'] = 'run';

		$m['run']['__bind_type__'] = 0;
		$m['run']['__args__'] = [null,null,['timestamp']];
		$pyjs['track']['lineno']=287;
		$m['Callback'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.display';
			$cls_definition['__md5__'] = '4645b1211e29a081c20f3fdf39388759';
			$pyjs['track']['lineno']=289;
			$cls_definition['__slots__'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['run']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
			$pyjs['track']['lineno']=291;
			$method = $pyjs__bind_method2('__init__', function(cb) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					cb = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4645b1211e29a081c20f3fdf39388759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':291};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=291;
				$pyjs['track']['lineno']=292;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('run', cb) : $p['setattr'](self, 'run', cb); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['cb']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=287;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Callback', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=295;
		$m['Display'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.display';
			$cls_definition['__md5__'] = '91a32dec5d48ffc5f705378390bb24db';
			$pyjs['track']['lineno']=322;
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
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':322};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=322;
				$pyjs['track']['lineno']=328;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_initialized', false) : $p['setattr'](self, '_initialized', false); 
				$pyjs['track']['lineno']=329;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['init']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=331;
			$method = $pyjs__bind_method2('init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':331};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=331;
				$pyjs['track']['lineno']=335;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, '_initialized')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})()) {
					$pyjs['track']['lineno']=336;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('id', '') : $p['setattr'](self, 'id', ''); 
					$pyjs['track']['lineno']=337;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('icon', null) : $p['setattr'](self, 'icon', null); 
					$pyjs['track']['lineno']=338;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_image_list', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})()) : $p['setattr'](self, '_image_list', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})()); 
					$pyjs['track']['lineno']=339;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_nonimplemented_methods']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
					$pyjs['track']['lineno']=340;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_initialized', true) : $p['setattr'](self, '_initialized', true); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['init'] = $method;
			$pyjs['track']['lineno']=342;
			$method = $pyjs__bind_method2('set_mode', function(size, buffered) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					buffered = arguments[2];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof buffered != 'undefined') {
						if (buffered !== null && typeof buffered['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = buffered;
							buffered = arguments[3];
						}
					} else 					if (typeof size != 'undefined') {
						if (size !== null && typeof size['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = size;
							size = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof buffered == 'undefined') buffered=arguments['callee']['__args__'][4][1];
				var $lambda4,$lambda3,panel;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':342};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=342;
				$pyjs['track']['lineno']=348;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('canvas', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Canvas'](size, buffered);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})()) : $p['setattr'](self, 'canvas', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Canvas'](size, buffered);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})()); 
				$pyjs['track']['lineno']=349;
				$m['env']['__is_instance__'] && typeof $m['env']['__setattr__'] == 'function' ? $m['env']['__setattr__']('canvas', $p['getattr'](self, 'canvas')) : $p['setattr']($m['env'], 'canvas', $p['getattr'](self, 'canvas')); 
				$pyjs['track']['lineno']=350;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('frame', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Window']['getDocumentRoot']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})()) : $p['setattr'](self, 'frame', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Window']['getDocumentRoot']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})()); 
				$pyjs['track']['lineno']=351;
				$m['env']['__is_instance__'] && typeof $m['env']['__setattr__'] == 'function' ? $m['env']['__setattr__']('frame', $p['getattr'](self, 'frame')) : $p['setattr']($m['env'], 'frame', $p['getattr'](self, 'frame')); 
				$pyjs['track']['lineno']=352;
				panel = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['FocusPanel'], null, null, [{'Widget':$p['getattr'](self, 'canvas')}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
				$pyjs['track']['lineno']=353;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['RootPanel']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})()['add'](panel);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
				$pyjs['track']['lineno']=354;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('panel', panel) : $p['setattr'](self, 'panel', panel); 
				$pyjs['track']['lineno']=355;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('vpanel', null) : $p['setattr'](self, 'vpanel', null); 
				$pyjs['track']['lineno']=356;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('textbox', null) : $p['setattr'](self, 'textbox', null); 
				$pyjs['track']['lineno']=357;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('textarea', null) : $p['setattr'](self, 'textarea', null); 
				$pyjs['track']['lineno']=358;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('Textbox', (typeof Textbox == "undefined"?$m['Textbox']:Textbox)) : $p['setattr'](self, 'Textbox', (typeof Textbox == "undefined"?$m['Textbox']:Textbox)); 
				$pyjs['track']['lineno']=359;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('Textarea', (typeof Textarea == "undefined"?$m['Textarea']:Textarea)) : $p['setattr'](self, 'Textarea', (typeof Textarea == "undefined"?$m['Textarea']:Textarea)); 
				$pyjs['track']['lineno']=360;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('surface', $p['getattr']($p['getattr'](self, 'canvas'), 'surface')) : $p['setattr'](self, 'surface', $p['getattr']($p['getattr'](self, 'canvas'), 'surface')); 
				$pyjs['track']['lineno']=361;
				$p['getattr'](self, 'surface')['__is_instance__'] && typeof $p['getattr'](self, 'surface')['__setattr__'] == 'function' ? $p['getattr'](self, 'surface')['__setattr__']('_display', self) : $p['setattr']($p['getattr'](self, 'surface'), '_display', self); 
				$pyjs['track']['lineno']=362;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_surface_rect', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['surface']['get_rect']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})()) : $p['setattr'](self, '_surface_rect', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['surface']['get_rect']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})()); 
				$pyjs['track']['lineno']=363;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'canvas'), '_bufferedimage')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})()) {
					$pyjs['track']['lineno']=364;
					var 					$lambda3 = function() {
						if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

						$pyjs['track']={'module':'pyjsdl.display','lineno':364};$pyjs['trackstack']['push']($pyjs['track']);
						$pyjs['track']['module']='pyjsdl.display';
						$pyjs['track']['lineno']=364;
						$pyjs['track']['lineno']=364;
						$pyjs['track']['lineno']=364;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					};
					$lambda3['__name__'] = '$lambda3';

					$lambda3['__bind_type__'] = 0;
					$lambda3['__args__'] = [null,null];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('flip', $lambda3) : $p['setattr'](self, 'flip', $lambda3); 
					$pyjs['track']['lineno']=365;
					var 					$lambda4 = function() {
						if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
						var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


						$pyjs['track']={'module':'pyjsdl.display','lineno':365};$pyjs['trackstack']['push']($pyjs['track']);
						$pyjs['track']['module']='pyjsdl.display';
						$pyjs['track']['lineno']=365;
						$pyjs['track']['lineno']=365;
						$pyjs['track']['lineno']=365;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					};
					$lambda4['__name__'] = '$lambda4';

					$lambda4['__bind_type__'] = 0;
					$lambda4['__args__'] = ['arg',null];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('update', $lambda4) : $p['setattr'](self, 'update', $lambda4); 
				}
				$pyjs['track']['lineno']=366;
				$pyjs['track']['lineno']=366;
				var $pyjs__ret = $p['getattr'](self, 'surface');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['args',['kwargs'],['self'],['size'],['buffered', true]]);
			$cls_definition['set_mode'] = $method;
			$pyjs['track']['lineno']=368;
			$method = $pyjs__bind_method2('setup', function(callback, images) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					callback = arguments[1];
					images = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof images == 'undefined') images=arguments['callee']['__args__'][4][1];
				var image_list;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':368};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=368;
				$pyjs['track']['lineno']=375;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['canvas']['set_callback'](callback);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
				$pyjs['track']['lineno']=376;
				image_list = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})();
				$pyjs['track']['lineno']=377;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, '_image_list'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})()) {
					$pyjs['track']['lineno']=378;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return image_list['extend']($p['getattr'](self, '_image_list'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
					$pyjs['track']['lineno']=379;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__setslice']($p['getattr'](self, '_image_list'), 0, null, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})();
				}
				$pyjs['track']['lineno']=380;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](images);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})()) {
					$pyjs['track']['lineno']=381;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return image_list['extend'](images);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
				}
				$pyjs['track']['lineno']=382;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['canvas']['load_images'](image_list);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['callback'],['images', null]]);
			$cls_definition['setup'] = $method;
			$pyjs['track']['lineno']=384;
			$method = $pyjs__bind_method2('set_callback', function(callback) {
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
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':384};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=384;
				$pyjs['track']['lineno']=390;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr']($p['getattr'](self, 'canvas'), 'initialized'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})()) {
					$pyjs['track']['lineno']=391;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['canvas']['set_callback'](callback);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=393;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['setup'](callback);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['callback']]);
			$cls_definition['set_callback'] = $method;
			$pyjs['track']['lineno']=395;
			$method = $pyjs__bind_method2('setup_images', function(images) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					images = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':395};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=395;
				$pyjs['track']['lineno']=401;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](images, $p['str']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})()) {
					$pyjs['track']['lineno']=402;
					images = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([images]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
				}
				$pyjs['track']['lineno']=403;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_image_list']['extend'](images);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['images']]);
			$cls_definition['setup_images'] = $method;
			$pyjs['track']['lineno']=405;
			$method = $pyjs__bind_method2('textbox_init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':405};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=405;
				$pyjs['track']['lineno']=409;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'textbox')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})()) {
					$pyjs['track']['lineno']=410;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('textbox', (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof Textbox == "undefined"?$m['Textbox']:Textbox)();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})()) : $p['setattr'](self, 'textbox', (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof Textbox == "undefined"?$m['Textbox']:Textbox)();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})()); 
					$pyjs['track']['lineno']=411;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('textarea', (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof Textarea == "undefined"?$m['Textarea']:Textarea)();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})()) : $p['setattr'](self, 'textarea', (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof Textarea == "undefined"?$m['Textarea']:Textarea)();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})()); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['textbox_init'] = $method;
			$pyjs['track']['lineno']=413;
			$method = $pyjs__bind_method2('is_canvas', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':413};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=413;
				$pyjs['track']['lineno']=417;
				$pyjs['track']['lineno']=417;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvas'), '_isCanvas');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['is_canvas'] = $method;
			$pyjs['track']['lineno']=419;
			$method = $pyjs__bind_method2('get_surface', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':419};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=419;
				$pyjs['track']['lineno']=423;
				$pyjs['track']['lineno']=423;
				var $pyjs__ret = $p['getattr'](self, 'surface');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_surface'] = $method;
			$pyjs['track']['lineno']=425;
			$method = $pyjs__bind_method2('get_canvas', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':425};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=425;
				$pyjs['track']['lineno']=429;
				$pyjs['track']['lineno']=429;
				var $pyjs__ret = $p['getattr'](self, 'canvas');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_canvas'] = $method;
			$pyjs['track']['lineno']=431;
			$method = $pyjs__bind_method2('get_panel', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':431};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=431;
				$pyjs['track']['lineno']=435;
				$pyjs['track']['lineno']=435;
				var $pyjs__ret = $p['getattr'](self, 'panel');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_panel'] = $method;
			$pyjs['track']['lineno']=437;
			$method = $pyjs__bind_method2('get_vpanel', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':437};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=437;
				$pyjs['track']['lineno']=441;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'vpanel')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})()) {
					$pyjs['track']['lineno']=442;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('vpanel', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['VerticalPanel']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})()) : $p['setattr'](self, 'vpanel', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['VerticalPanel']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})()); 
					$pyjs['track']['lineno']=443;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['RootPanel']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})()['add']($p['getattr'](self, 'vpanel'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
				}
				$pyjs['track']['lineno']=444;
				$pyjs['track']['lineno']=444;
				var $pyjs__ret = $p['getattr'](self, 'vpanel');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_vpanel'] = $method;
			$pyjs['track']['lineno']=446;
			$method = $pyjs__bind_method2('getAbsoluteLeft', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':446};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=446;
				$pyjs['track']['lineno']=450;
				$pyjs['track']['lineno']=450;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['canvas']['getAbsoluteLeft']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAbsoluteLeft'] = $method;
			$pyjs['track']['lineno']=452;
			$method = $pyjs__bind_method2('getAbsoluteTop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':452};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=452;
				$pyjs['track']['lineno']=456;
				$pyjs['track']['lineno']=456;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['canvas']['getAbsoluteTop']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAbsoluteTop'] = $method;
			$pyjs['track']['lineno']=458;
			$method = $pyjs__bind_method2('getScrollLeft', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':458};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=458;
				$pyjs['track']['lineno']=462;
				$pyjs['track']['lineno']=462;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'frame'), 'scrollLeft');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getScrollLeft'] = $method;
			$pyjs['track']['lineno']=464;
			$method = $pyjs__bind_method2('getScrollTop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':464};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=464;
				$pyjs['track']['lineno']=468;
				$pyjs['track']['lineno']=468;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'frame'), 'scrollTop');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getScrollTop'] = $method;
			$pyjs['track']['lineno']=470;
			$method = $pyjs__bind_method2('quit', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':470};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=470;
				$pyjs['track']['lineno']=474;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_initialized', false) : $p['setattr'](self, '_initialized', false); 
				$pyjs['track']['lineno']=475;
				$pyjs['track']['lineno']=475;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['quit'] = $method;
			$pyjs['track']['lineno']=477;
			$method = $pyjs__bind_method2('get_init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':477};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=477;
				$pyjs['track']['lineno']=481;
				$pyjs['track']['lineno']=481;
				var $pyjs__ret = $p['getattr'](self, '_initialized');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_init'] = $method;
			$pyjs['track']['lineno']=483;
			$method = $pyjs__bind_method2('get_active', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':483};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=483;
				$pyjs['track']['lineno']=487;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](self, 'canvas');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})()) {
					$pyjs['track']['lineno']=488;
					$pyjs['track']['lineno']=488;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=490;
					$pyjs['track']['lineno']=490;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_active'] = $method;
			$pyjs['track']['lineno']=492;
			$method = $pyjs__bind_method2('set_caption', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':492};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=492;
				$pyjs['track']['lineno']=497;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('id', text) : $p['setattr'](self, 'id', text); 
				$pyjs['track']['lineno']=498;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=499;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['canvas']['setID']($p['getattr'](self, 'id'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
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
					$pyjs['track']['module']='pyjsdl.display';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=501;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=502;
				$pyjs['track']['lineno']=502;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['set_caption'] = $method;
			$pyjs['track']['lineno']=504;
			$method = $pyjs__bind_method2('get_caption', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':504};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=504;
				$pyjs['track']['lineno']=508;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=509;
						$pyjs['track']['lineno']=509;
						var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
						return self['canvas']['getID']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
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
					$pyjs['track']['module']='pyjsdl.display';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=511;
						$pyjs['track']['lineno']=511;
						var $pyjs__ret = $p['getattr'](self, 'id');
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_caption'] = $method;
			$pyjs['track']['lineno']=513;
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
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda5;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':513};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=513;
				$pyjs['track']['lineno']=517;
				var 				$lambda5 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.display','lineno':517};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.display';
					$pyjs['track']['lineno']=517;
					$pyjs['track']['lineno']=517;
					$pyjs['track']['lineno']=517;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda5['__name__'] = '$lambda5';

				$lambda5['__bind_type__'] = 0;
				$lambda5['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set_icon', $lambda5) : $p['setattr'](self, 'set_icon', $lambda5); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=519;
			$method = $pyjs__bind_method2('flip', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':519};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=519;
				$pyjs['track']['lineno']=523;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['canvas']['impl']['canvasContext']['drawImage']($p['getattr']($p['getattr'](self, 'surface'), 'canvas'), $constant_int_0, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})();
				$pyjs['track']['lineno']=524;
				$pyjs['track']['lineno']=524;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['flip'] = $method;
			$pyjs['track']['lineno']=526;
			$method = $pyjs__bind_method2('update', function(rect_list) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rect_list = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '91a32dec5d48ffc5f705378390bb24db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof rect_list == 'undefined') rect_list=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':526};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=526;
				$pyjs['track']['lineno']=531;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](rect_list, 'append');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})()) {
					$pyjs['track']['lineno']=532;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof _update == "undefined"?$m['_update']:_update)($p['getattr'](self, 'canvas'), rect_list);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](rect_list);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})()) {
					$pyjs['track']['lineno']=534;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof _update == "undefined"?$m['_update']:_update)($p['getattr'](self, 'canvas'), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([rect_list]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=536;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['flip']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})();
				}
				$pyjs['track']['lineno']=537;
				$pyjs['track']['lineno']=537;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rect_list', null]]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=295;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Display', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=540;
		$m['_update'] = function(canvas, rect_list) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $and3,repaint_rect,$iter11_iter,$iter11_type,$and4,$and5,$and6,$add3,$add5,$add6,$add4,$iter11_array,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1,rect;
			$pyjs['track']={'module':'pyjsdl.display','lineno':540};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.display';
			$pyjs['track']['lineno']=540;
			$pyjs['track']['lineno']=541;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return rect_list;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				rect = $iter11_nextval['$nextval'];
				$pyjs['track']['lineno']=542;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](rect, 'width');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})()) {
					$pyjs['track']['lineno']=543;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and3=($p['cmp']($p['getattr'](rect, 'width'), $constant_int_0) == 1))?($p['cmp']($p['getattr'](rect, 'height'), $constant_int_0) == 1):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})()) {
						$pyjs['track']['lineno']=544;
						repaint_rect = (function(){try{try{$pyjs['in_try_except'] += 1;
						return canvas['_get_rect']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})();
						$pyjs['track']['lineno']=545;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('x', $p['getattr'](rect, 'x')) : $p['setattr'](repaint_rect, 'x', $p['getattr'](rect, 'x')); 
						$pyjs['track']['lineno']=546;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('y', $p['getattr'](rect, 'y')) : $p['setattr'](repaint_rect, 'y', $p['getattr'](rect, 'y')); 
						$pyjs['track']['lineno']=547;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('width', $p['getattr'](rect, 'width')) : $p['setattr'](repaint_rect, 'width', $p['getattr'](rect, 'width')); 
						$pyjs['track']['lineno']=548;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('height', $p['getattr'](rect, 'height')) : $p['setattr'](repaint_rect, 'height', $p['getattr'](rect, 'height')); 
						$pyjs['track']['lineno']=549;
						canvas['__is_instance__'] && typeof canvas['__setattr__'] == 'function' ? canvas['__setattr__']('_rect_num', $p['__op_add']($add3=$p['getattr'](canvas, '_rect_num'),$add4=$constant_int_1)) : $p['setattr'](canvas, '_rect_num', $p['__op_add']($add3=$p['getattr'](canvas, '_rect_num'),$add4=$constant_int_1)); 
					}
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](rect);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})()) {
					$pyjs['track']['lineno']=551;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and5=($p['cmp'](rect['__getitem__']($constant_int_2), $constant_int_0) == 1))?($p['cmp'](rect['__getitem__']($constant_int_3), $constant_int_0) == 1):$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})()) {
						$pyjs['track']['lineno']=552;
						repaint_rect = (function(){try{try{$pyjs['in_try_except'] += 1;
						return canvas['_get_rect']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})();
						$pyjs['track']['lineno']=553;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('x', rect['__getitem__']($constant_int_0)) : $p['setattr'](repaint_rect, 'x', rect['__getitem__']($constant_int_0)); 
						$pyjs['track']['lineno']=554;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('y', rect['__getitem__']($constant_int_1)) : $p['setattr'](repaint_rect, 'y', rect['__getitem__']($constant_int_1)); 
						$pyjs['track']['lineno']=555;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('width', rect['__getitem__']($constant_int_2)) : $p['setattr'](repaint_rect, 'width', rect['__getitem__']($constant_int_2)); 
						$pyjs['track']['lineno']=556;
						repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('height', rect['__getitem__']($constant_int_3)) : $p['setattr'](repaint_rect, 'height', rect['__getitem__']($constant_int_3)); 
						$pyjs['track']['lineno']=557;
						canvas['__is_instance__'] && typeof canvas['__setattr__'] == 'function' ? canvas['__setattr__']('_rect_num', $p['__op_add']($add5=$p['getattr'](canvas, '_rect_num'),$add6=$constant_int_1)) : $p['setattr'](canvas, '_rect_num', $p['__op_add']($add5=$p['getattr'](canvas, '_rect_num'),$add6=$constant_int_1)); 
					}
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.display';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['_update']['__name__'] = '_update';

		$m['_update']['__bind_type__'] = 0;
		$m['_update']['__args__'] = [null,null,['canvas'],['rect_list']];
		$pyjs['track']['lineno']=560;
		$m['Textbox'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.display';
			$cls_definition['__md5__'] = 'ef1807f4a3f1d5feedf326084fe5e1e5';
			$pyjs['track']['lineno']=567;
			$method = $pyjs__bind_method2('__init__', function(size, panel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					panel = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ef1807f4a3f1d5feedf326084fe5e1e5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
				if (typeof panel == 'undefined') panel=arguments['callee']['__args__'][4][1];
				var $add9,$pyjs_try_err,$sub8,$add10,$add7,$add8,$sub7;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':567};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=567;
				$pyjs['track']['lineno']=568;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['TextBox']['__init__'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})();
				$pyjs['track']['lineno']=569;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](size));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})()) {
					$pyjs['track']['lineno']=570;
					var $tupleassign6 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_sub']($sub7=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub8=$constant_int_5), $constant_int_20]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign6[0]) : $p['setattr'](self, 'width', $tupleassign6[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign6[1]) : $p['setattr'](self, 'height', $tupleassign6[1]); 
				}
				else {
					$pyjs['track']['lineno']=572;
					var $tupleassign7 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int'](size['__getitem__']($constant_int_0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int'](size['__getitem__']($constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign7[0]) : $p['setattr'](self, 'width', $tupleassign7[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign7[1]) : $p['setattr'](self, 'height', $tupleassign7[1]); 
				}
				$pyjs['track']['lineno']=573;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setSize']($p['__op_add']($add7=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr'](self, 'width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})(),$add8='px'), $p['__op_add']($add9=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr'](self, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})(),$add10='px'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})();
				$pyjs['track']['lineno']=574;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setVisible'](false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})();
				$pyjs['track']['lineno']=575;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](panel);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})()) {
					$pyjs['track']['lineno']=576;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return panel['add'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=578;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						try {
							$pyjs['in_try_except'] += 1;
							$pyjs['track']['lineno']=579;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
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
						$pyjs['track']['module']='pyjsdl.display';
						if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
							$pyjs['track']['lineno']=581;
							$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__is_instance__'] && typeof $p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__setattr__'] == 'function' ? $p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__setattr__']('vpanel', (function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['VerticalPanel']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})()) : $p['setattr']($p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display'), 'vpanel', (function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['VerticalPanel']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})()); 
							$pyjs['track']['lineno']=582;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return (function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['RootPanel']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})()['add']($p['getattr']($p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display'), 'vpanel'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})();
							$pyjs['track']['lineno']=583;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})();
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['size', null],['panel', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=585;
			$method = $pyjs__bind_method2('resize', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ef1807f4a3f1d5feedf326084fe5e1e5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
				if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];
				var $or4,$or3,$sub10,$add14,$sub9,$add11,$add12,$add13;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':585};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=585;
				$pyjs['track']['lineno']=586;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](($p['bool']($or3=width)?$or3:height)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})()) {
					$pyjs['track']['lineno']=587;
					var $tupleassign8 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_sub']($sub9=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub10=$constant_int_5), $constant_int_20]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign8[0]) : $p['setattr'](self, 'width', $tupleassign8[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign8[1]) : $p['setattr'](self, 'height', $tupleassign8[1]); 
				}
				else {
					$pyjs['track']['lineno']=589;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})()) {
						$pyjs['track']['lineno']=590;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['int'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})()) : $p['setattr'](self, 'width', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['int'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})()); 
					}
					$pyjs['track']['lineno']=591;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})()) {
						$pyjs['track']['lineno']=592;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['int'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})()) : $p['setattr'](self, 'height', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['int'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})()); 
					}
				}
				$pyjs['track']['lineno']=593;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setSize']($p['__op_add']($add11=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr'](self, 'width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})(),$add12='px'), $p['__op_add']($add13=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr'](self, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})(),$add14='px'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width', null],['height', null]]);
			$cls_definition['resize'] = $method;
			$pyjs['track']['lineno']=595;
			$method = $pyjs__bind_method2('toggle', function(visible) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					visible = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ef1807f4a3f1d5feedf326084fe5e1e5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof visible == 'undefined') visible=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':595};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=595;
				$pyjs['track']['lineno']=596;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](visible);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})()) {
					$pyjs['track']['lineno']=597;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['setVisible'](visible);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=599;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['setVisible'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['getVisible']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['visible', null]]);
			$cls_definition['toggle'] = $method;
			$pyjs['track']['lineno']=560;
			var $bases = new Array($m['TextBox']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Textbox', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=602;
		$m['Textarea'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.display';
			$cls_definition['__md5__'] = '855367a75006e822eac14b21033468c9';
			$pyjs['track']['lineno']=609;
			$method = $pyjs__bind_method2('__init__', function(size, panel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					panel = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '855367a75006e822eac14b21033468c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
				if (typeof panel == 'undefined') panel=arguments['callee']['__args__'][4][1];
				var $add15,$div14,$sub12,$pyjs_try_err,$sub14,$div13,$sub13,$add16,$add17,$add18,$sub11;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':609};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=609;
				$pyjs['track']['lineno']=610;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['TextArea']['__init__'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})();
				$pyjs['track']['lineno']=611;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](size));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})()) {
					$pyjs['track']['lineno']=612;
					var $tupleassign9 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_sub']($sub11=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub12=$constant_int_5), $p['__op_sub']($sub13=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div13=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'height'))==typeof ($div14=$constant_int_5) && typeof $div13=='number' && $div14 !== 0?
						$div13/$div14:
						$p['op_div']($div13,$div14)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})(),$sub14=$constant_int_5)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign9[0]) : $p['setattr'](self, 'width', $tupleassign9[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign9[1]) : $p['setattr'](self, 'height', $tupleassign9[1]); 
				}
				else {
					$pyjs['track']['lineno']=614;
					var $tupleassign10 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int'](size['__getitem__']($constant_int_0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int'](size['__getitem__']($constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign10[0]) : $p['setattr'](self, 'width', $tupleassign10[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign10[1]) : $p['setattr'](self, 'height', $tupleassign10[1]); 
				}
				$pyjs['track']['lineno']=615;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setSize']($p['__op_add']($add15=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr'](self, 'width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})(),$add16='px'), $p['__op_add']($add17=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr'](self, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})(),$add18='px'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})();
				$pyjs['track']['lineno']=616;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setStyleAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['resize', 'vertical']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})();
				$pyjs['track']['lineno']=617;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setVisible'](false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})();
				$pyjs['track']['lineno']=618;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](panel);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})()) {
					$pyjs['track']['lineno']=619;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return panel['add'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=621;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						try {
							$pyjs['in_try_except'] += 1;
							$pyjs['track']['lineno']=622;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
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
						$pyjs['track']['module']='pyjsdl.display';
						if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
							$pyjs['track']['lineno']=624;
							$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__is_instance__'] && typeof $p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__setattr__'] == 'function' ? $p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__setattr__']('vpanel', (function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['VerticalPanel']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})()) : $p['setattr']($p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display'), 'vpanel', (function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['VerticalPanel']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})()); 
							$pyjs['track']['lineno']=625;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return (function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['RootPanel']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})()['add']($p['getattr']($p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display'), 'vpanel'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})();
							$pyjs['track']['lineno']=626;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})();
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['size', null],['panel', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=628;
			$method = $pyjs__bind_method2('resize', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '855367a75006e822eac14b21033468c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
				if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];
				var $or5,$or6,$add21,$div15,$add22,$sub17,$sub16,$sub15,$sub18,$add19,$add20,$div16;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':628};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=628;
				$pyjs['track']['lineno']=629;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](($p['bool']($or5=width)?$or5:height)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})()) {
					$pyjs['track']['lineno']=630;
					var $tupleassign11 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_sub']($sub15=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub16=$constant_int_5), $p['__op_sub']($sub17=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div15=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'height'))==typeof ($div16=$constant_int_5) && typeof $div15=='number' && $div16 !== 0?
						$div15/$div16:
						$p['op_div']($div15,$div16)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})(),$sub18=$constant_int_5)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign11[0]) : $p['setattr'](self, 'width', $tupleassign11[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign11[1]) : $p['setattr'](self, 'height', $tupleassign11[1]); 
				}
				else {
					$pyjs['track']['lineno']=632;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})()) {
						$pyjs['track']['lineno']=633;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['int'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})()) : $p['setattr'](self, 'width', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['int'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})()); 
					}
					$pyjs['track']['lineno']=634;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})()) {
						$pyjs['track']['lineno']=635;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['int'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})()) : $p['setattr'](self, 'height', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['int'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})()); 
					}
				}
				$pyjs['track']['lineno']=636;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setSize']($p['__op_add']($add19=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr'](self, 'width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})(),$add20='px'), $p['__op_add']($add21=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr'](self, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})(),$add22='px'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width', null],['height', null]]);
			$cls_definition['resize'] = $method;
			$pyjs['track']['lineno']=638;
			$method = $pyjs__bind_method2('toggle', function(visible) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					visible = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '855367a75006e822eac14b21033468c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof visible == 'undefined') visible=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':638};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=638;
				$pyjs['track']['lineno']=639;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](visible);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})()) {
					$pyjs['track']['lineno']=640;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['setVisible'](visible);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=642;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['setVisible'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['getVisible']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['visible', null]]);
			$cls_definition['toggle'] = $method;
			$pyjs['track']['lineno']=602;
			var $bases = new Array($m['TextArea']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Textarea', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.display */


/* end module: pyjsdl.display */


/*
PYJS_DEPS: ['base64', 'pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface', 'pyjsdl.rect.Rect', 'pyjsdl.rect', 'pyjsdl.time.Time', 'pyjsdl.time', 'pyjsdl.color.Color', 'pyjsdl.color', 'pyjsdl.env', 'pyjsdl.event', 'pyjsdl.pyjsobj.DOM', 'pyjsdl.pyjsobj', 'pyjsdl.pyjsobj.Window', 'pyjsdl.pyjsobj.RootPanel', 'pyjsdl.pyjsobj.FocusPanel', 'pyjsdl.pyjsobj.VerticalPanel', 'pyjsdl.pyjsobj.loadImages', 'pyjsdl.pyjsobj.TextBox', 'pyjsdl.pyjsobj.TextArea', 'pyjsdl.pyjsobj.MouseWheelHandler', 'pyjsdl.pyjsobj.eventGetMouseWheelVelocityY', 'pyjsdl.pyjsobj.Event', 'pyjsdl.pyjsobj.requestAnimationFrameInit']
*/
