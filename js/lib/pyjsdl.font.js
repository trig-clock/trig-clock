/* start module: pyjsdl.font */
$pyjs['loaded_modules']['pyjsdl.font'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.font']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.font'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.font'];
	$m['__repr__'] = function() { return '<module: pyjsdl.font>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.font';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['font'] = $pyjs['loaded_modules']['pyjsdl.font'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.font.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[5] = 'pyjsdl.font.py, line 5:\n    from math import ceil as _ceil';
		$m.__track_lines__[6] = 'pyjsdl.font.py, line 6:\n    from pyjsdl.surface import Surface';
		$m.__track_lines__[7] = 'pyjsdl.font.py, line 7:\n    from pyjsdl.color import Color';
		$m.__track_lines__[8] = 'pyjsdl.font.py, line 8:\n    from pyjsdl.pyjsobj import HTML5Canvas';
		$m.__track_lines__[10] = "pyjsdl.font.py, line 10:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[13] = 'pyjsdl.font.py, line 13:\n    _initialized = False';
		$m.__track_lines__[14] = 'pyjsdl.font.py, line 14:\n    _surf = None';
		$m.__track_lines__[17] = 'pyjsdl.font.py, line 17:\n    def init():';
		$m.__track_lines__[23] = 'pyjsdl.font.py, line 23:\n    global _surf, _initialized, match_font';
		$m.__track_lines__[24] = 'pyjsdl.font.py, line 24:\n    if _initialized:';
		$m.__track_lines__[25] = 'pyjsdl.font.py, line 25:\n    return';
		$m.__track_lines__[26] = 'pyjsdl.font.py, line 26:\n    try:';
		$m.__track_lines__[27] = 'pyjsdl.font.py, line 27:\n    _surf = HTML5Canvas(1,1)';
		$m.__track_lines__[28] = "pyjsdl.font.py, line 28:\n    _surf.measureText('x')";
		$m.__track_lines__[30] = 'pyjsdl.font.py, line 30:\n    _surf = None';
		$m.__track_lines__[31] = 'pyjsdl.font.py, line 31:\n    _initialized = True';
		$m.__track_lines__[32] = 'pyjsdl.font.py, line 32:\n    init()';
		$m.__track_lines__[35] = 'pyjsdl.font.py, line 35:\n    def quit():';
		$m.__track_lines__[41] = 'pyjsdl.font.py, line 41:\n    global _surf, _initialized';
		$m.__track_lines__[42] = 'pyjsdl.font.py, line 42:\n    _surf = None';
		$m.__track_lines__[43] = 'pyjsdl.font.py, line 43:\n    _initialized = False';
		$m.__track_lines__[46] = 'pyjsdl.font.py, line 46:\n    def get_init():';
		$m.__track_lines__[52] = 'pyjsdl.font.py, line 52:\n    return _initialized';
		$m.__track_lines__[55] = 'pyjsdl.font.py, line 55:\n    def get_default_font():';
		$m.__track_lines__[61] = 'pyjsdl.font.py, line 61:\n    return Font._font[0]';
		$m.__track_lines__[64] = 'pyjsdl.font.py, line 64:\n    def get_fonts():';
		$m.__track_lines__[70] = 'pyjsdl.font.py, line 70:\n    return Font._font';
		$m.__track_lines__[73] = 'pyjsdl.font.py, line 73:\n    def match_font(name):';
		$m.__track_lines__[80] = 'pyjsdl.font.py, line 80:\n    fallback = False';
		$m.__track_lines__[81] = "pyjsdl.font.py, line 81:\n    font = [fn.strip().lower() for fn in name.split(',')]";
		$m.__track_lines__[82] = 'pyjsdl.font.py, line 82:\n    for i, fn in enumerate(font):';
		$m.__track_lines__[83] = 'pyjsdl.font.py, line 83:\n    if fn in Font._font:';
		$m.__track_lines__[84] = 'pyjsdl.font.py, line 84:\n    fallback = True';
		$m.__track_lines__[85] = 'pyjsdl.font.py, line 85:\n    continue';
		$m.__track_lines__[87] = "pyjsdl.font.py, line 87:\n    f = ''.join(c for c in fn if c.isalnum())";
		$m.__track_lines__[88] = 'pyjsdl.font.py, line 88:\n    if f in Font._font_alt:';
		$m.__track_lines__[89] = 'pyjsdl.font.py, line 89:\n    font[i] = Font._font[Font._font_alt[f]]';
		$m.__track_lines__[90] = 'pyjsdl.font.py, line 90:\n    fallback = True';
		$m.__track_lines__[91] = 'pyjsdl.font.py, line 91:\n    if not fallback:';
		$m.__track_lines__[92] = 'pyjsdl.font.py, line 92:\n    font.append(Font._font[0])';
		$m.__track_lines__[93] = "pyjsdl.font.py, line 93:\n    font = ','.join(font)";
		$m.__track_lines__[94] = 'pyjsdl.font.py, line 94:\n    return font';
		$m.__track_lines__[97] = 'pyjsdl.font.py, line 97:\n    class Font(object):';
		$m.__track_lines__[112] = "pyjsdl.font.py, line 112:\n    _font = ['arial', 'bitstream vera sans', 'bitstream vera serif', 'book antiqua', 'comic sans ms', 'courier new', 'courier', 'dejavu sans', 'dejavu sans mono', 'dejavu serif', 'freesans', 'garamond', 'georgia', 'helvetica', 'impact', 'liberation sans', 'liberation serif', 'lucida console', 'lucida serif', 'nimbus mono l', 'nimbus roman no9 l', 'nimbus sans l', 'palatino', 'times new roman', 'times', 'tahoma', 'verdana', 'cursive', 'monospace', 'sans-serif', 'serif']";
		$m.__track_lines__[114] = "pyjsdl.font.py, line 114:\n    _font_alt = {'arial':0, 'bitstreamverasans':1, 'bitstreamveraserif':2, 'bookantiqua':3, 'comicsansms':4, 'couriernew':5, 'courier':6, 'dejavusans':7, 'dejavusansmono':8, 'dejavuserif':9, 'freesans':10, 'garamond':11, 'georgia':12, 'helvetica':13, 'impact':14, 'liberationsans':15, 'liberationserif':16, 'lucidaconsole':17, 'lucidaserif':18, 'nimbusmonol':19, 'nimbusromanno9l':20, 'nimbussansl':21, 'palatino':22, 'timesnewroman':23, 'times':24, 'tahoma':25, 'verdana':26, 'cursive':27, 'monospace':28, 'sansserif':29, 'serif':30}";
		$m.__track_lines__[116] = "pyjsdl.font.py, line 116:\n    _font_family = [['arial', 'helvetica', 'liberation sans',  'nimbus sans l', 'freesans', 'tahoma', 'sans-serif'], ['verdana', 'bitstream vera sans', 'dejavu sans', 'sans-serif'], ['impact', 'sans-serif'], ['comic sans ms', 'cursive', 'sans-serif'], ['courier new', 'courier', 'lucida console', 'dejavu sans mono', 'monospace'], ['times new roman', 'times', 'liberation serif', 'nimbus roman no9 l', 'serif'], ['garamond',  'book antiqua', 'palatino', 'liberation serif', 'nimbus roman no9 l', 'serif'], ['georgia', 'bitstream vera serif', 'lucida serif', 'liberation serif', 'dejavu serif', 'serif']]";
		$m.__track_lines__[118] = 'pyjsdl.font.py, line 118:\n    def __init__(self, name, size):';
		$m.__track_lines__[135] = 'pyjsdl.font.py, line 135:\n    if not name:';
		$m.__track_lines__[136] = 'pyjsdl.font.py, line 136:\n    font = [Font._font[0]]';
		$m.__track_lines__[138] = "pyjsdl.font.py, line 138:\n    font = [fn.strip().lower() for fn in name.split(',')]";
		$m.__track_lines__[139] = 'pyjsdl.font.py, line 139:\n    load_custom_font = False';
		$m.__track_lines__[140] = 'pyjsdl.font.py, line 140:\n    fallback = None';
		$m.__track_lines__[141] = 'pyjsdl.font.py, line 141:\n    for i, fn in enumerate(font):';
		$m.__track_lines__[142] = "pyjsdl.font.py, line 142:\n    if '.' in fn:";
		$m.__track_lines__[143] = "pyjsdl.font.py, line 143:\n    fn = fn.split('.')[0]";
		$m.__track_lines__[144] = 'pyjsdl.font.py, line 144:\n    font[i] = fn';
		$m.__track_lines__[145] = 'pyjsdl.font.py, line 145:\n    load_custom_font = True';
		$m.__track_lines__[146] = 'pyjsdl.font.py, line 146:\n    if fn in Font._font:';
		$m.__track_lines__[147] = 'pyjsdl.font.py, line 147:\n    if not fallback:';
		$m.__track_lines__[148] = 'pyjsdl.font.py, line 148:\n    fallback = fn';
		$m.__track_lines__[150] = "pyjsdl.font.py, line 150:\n    f = ''.join(c for c in fn if c.isalnum())";
		$m.__track_lines__[151] = 'pyjsdl.font.py, line 151:\n    if f in Font._font_alt:';
		$m.__track_lines__[152] = 'pyjsdl.font.py, line 152:\n    font[i] = Font._font[Font._font_alt[f]]';
		$m.__track_lines__[153] = 'pyjsdl.font.py, line 153:\n    if not fallback:';
		$m.__track_lines__[154] = 'pyjsdl.font.py, line 154:\n    fallback = font[i]';
		$m.__track_lines__[155] = 'pyjsdl.font.py, line 155:\n    if fallback:';
		$m.__track_lines__[156] = 'pyjsdl.font.py, line 156:\n    for ff in Font._font_family:';
		$m.__track_lines__[157] = 'pyjsdl.font.py, line 157:\n    if fallback in ff:';
		$m.__track_lines__[158] = 'pyjsdl.font.py, line 158:\n    font.extend(f for f in ff if f not in font)';
		$m.__track_lines__[159] = 'pyjsdl.font.py, line 159:\n    break';
		$m.__track_lines__[161] = 'pyjsdl.font.py, line 161:\n    font.extend(Font._font_family[0])';
		$m.__track_lines__[162] = "pyjsdl.font.py, line 162:\n    self.fontname = ','.join(font)";
		$m.__track_lines__[163] = 'pyjsdl.font.py, line 163:\n    self.fontsize = size';
		$m.__track_lines__[164] = "pyjsdl.font.py, line 164:\n    self.bold = ''";
		$m.__track_lines__[165] = "pyjsdl.font.py, line 165:\n    self.italic = ''";
		$m.__track_lines__[166] = "pyjsdl.font.py, line 166:\n    self.fontstyle = self.bold + ' ' + self.italic";
		$m.__track_lines__[167] = 'pyjsdl.font.py, line 167:\n    self.underline = False';
		$m.__track_lines__[168] = 'pyjsdl.font.py, line 168:\n    self.char_size = None';
		$m.__track_lines__[169] = 'pyjsdl.font.py, line 169:\n    if load_custom_font:';
		$m.__track_lines__[170] = "pyjsdl.font.py, line 170:\n    self.render('x')";
		$m.__track_lines__[171] = 'pyjsdl.font.py, line 171:\n    self._nonimplemented_methods()';
		$m.__track_lines__[173] = 'pyjsdl.font.py, line 173:\n    def __repr__(self):';
		$m.__track_lines__[177] = 'pyjsdl.font.py, line 177:\n    return "%s(%r)" % (self.__class__, self.__dict__)';
		$m.__track_lines__[179] = 'pyjsdl.font.py, line 179:\n    def render(self, text, antialias=True, color=(0,0,0), background=None, surface=None):      #optional surface for text rendering';
		$m.__track_lines__[184] = 'pyjsdl.font.py, line 184:\n    if not surface:';
		$m.__track_lines__[185] = 'pyjsdl.font.py, line 185:\n    w,h = self.size(text)';
		$m.__track_lines__[186] = 'pyjsdl.font.py, line 186:\n    surf = Surface((w,h))';
		$m.__track_lines__[188] = 'pyjsdl.font.py, line 188:\n    surf = surface';
		$m.__track_lines__[189] = 'pyjsdl.font.py, line 189:\n    w,h = surface.width, surface.height';
		$m.__track_lines__[190] = 'pyjsdl.font.py, line 190:\n    if background:';
		$m.__track_lines__[191] = 'pyjsdl.font.py, line 191:\n    surf.setFillStyle(Color(background))';
		$m.__track_lines__[192] = 'pyjsdl.font.py, line 192:\n    surf.fillRect(0,0,w,h)';
		$m.__track_lines__[193] = "pyjsdl.font.py, line 193:\n    surf.setFont('%s %dpx %s' % (self.fontstyle, self.fontsize, self.fontname))";
		$m.__track_lines__[195] = 'pyjsdl.font.py, line 195:\n    surf.setFillStyle(Color(color))';
		$m.__track_lines__[196] = "pyjsdl.font.py, line 196:\n    surf.setTextAlign('center')";
		$m.__track_lines__[197] = "pyjsdl.font.py, line 197:\n    surf.setTextBaseline('middle')";
		$m.__track_lines__[198] = 'pyjsdl.font.py, line 198:\n    surf.fillText(text,w/2,h/2)';
		$m.__track_lines__[199] = 'pyjsdl.font.py, line 199:\n    if self.underline:';
		$m.__track_lines__[200] = 'pyjsdl.font.py, line 200:\n    surf.setLineWidth(self.fontsize/20)';
		$m.__track_lines__[201] = 'pyjsdl.font.py, line 201:\n    surf.setStrokeStyle(Color(color))';
		$m.__track_lines__[202] = 'pyjsdl.font.py, line 202:\n    surf.beginPath()';
		$m.__track_lines__[203] = 'pyjsdl.font.py, line 203:\n    surf.moveTo(0, h*0.85)';
		$m.__track_lines__[204] = 'pyjsdl.font.py, line 204:\n    surf.lineTo(w, h*0.85)';
		$m.__track_lines__[205] = 'pyjsdl.font.py, line 205:\n    surf.stroke()';
		$m.__track_lines__[206] = 'pyjsdl.font.py, line 206:\n    return surf';
		$m.__track_lines__[208] = 'pyjsdl.font.py, line 208:\n    def size(self, text):';
		$m.__track_lines__[212] = 'pyjsdl.font.py, line 212:\n    if _surf:   #>IE9 - use exception if HTML5Canvas not implemented';
		$m.__track_lines__[213] = "pyjsdl.font.py, line 213:\n    _surf.setFont('%s %dpx %s' % (self.fontstyle, self.fontsize, self.fontname))";
		$m.__track_lines__[214] = 'pyjsdl.font.py, line 214:\n    x = _surf.measureText(text)';
		$m.__track_lines__[216] = 'pyjsdl.font.py, line 216:\n    x = self._size_estimate(text)';
		$m.__track_lines__[217] = 'pyjsdl.font.py, line 217:\n    if x < 1:';
		$m.__track_lines__[218] = 'pyjsdl.font.py, line 218:\n    x = 1';
		$m.__track_lines__[219] = 'pyjsdl.font.py, line 219:\n    y = int(self.fontsize * 1.2)';
		$m.__track_lines__[220] = 'pyjsdl.font.py, line 220:\n    return (x, y)';
		$m.__track_lines__[222] = 'pyjsdl.font.py, line 222:\n    def _size_estimate(self, text=None):   #for browsers HTML5Canvas not implemented';
		$m.__track_lines__[223] = 'pyjsdl.font.py, line 223:\n    if not self.char_size:';
		$m.__track_lines__[224] = 'pyjsdl.font.py, line 224:\n    self.char_size = self._get_char_size()';
		$m.__track_lines__[225] = "pyjsdl.font.py, line 225:\n    self.fontname = ','.join(Font._font_family[0])";
		$m.__track_lines__[226] = "pyjsdl.font.py, line 226:\n    self.fontstyle = ''";
		$m.__track_lines__[227] = 'pyjsdl.font.py, line 227:\n    size = []';
		$m.__track_lines__[228] = 'pyjsdl.font.py, line 228:\n    for char in text:';
		$m.__track_lines__[229] = 'pyjsdl.font.py, line 229:\n    try:';
		$m.__track_lines__[230] = 'pyjsdl.font.py, line 230:\n    size.append(self.char_size[char] * self.fontsize)';
		$m.__track_lines__[232] = "pyjsdl.font.py, line 232:\n    size.append(self.char_size['x'] * self.fontsize)";
		$m.__track_lines__[233] = 'pyjsdl.font.py, line 233:\n    x = _ceil( sum(size) )';
		$m.__track_lines__[234] = 'pyjsdl.font.py, line 234:\n    return x';
		$m.__track_lines__[236] = 'pyjsdl.font.py, line 236:\n    def set_underline(self, setting=True):';
		$m.__track_lines__[241] = 'pyjsdl.font.py, line 241:\n    self.underline = setting';
		$m.__track_lines__[243] = 'pyjsdl.font.py, line 243:\n    def get_underline(self):';
		$m.__track_lines__[247] = 'pyjsdl.font.py, line 247:\n    return self.underline';
		$m.__track_lines__[249] = 'pyjsdl.font.py, line 249:\n    def set_bold(self, setting=True):';
		$m.__track_lines__[254] = "pyjsdl.font.py, line 254:\n    self.bold = {True:'bold', False:''}[setting]";
		$m.__track_lines__[255] = "pyjsdl.font.py, line 255:\n    self.fontstyle = self.bold + ' ' + self.italic";
		$m.__track_lines__[257] = 'pyjsdl.font.py, line 257:\n    def get_bold(self):';
		$m.__track_lines__[261] = 'pyjsdl.font.py, line 261:\n    if self.bold:';
		$m.__track_lines__[262] = 'pyjsdl.font.py, line 262:\n    return True';
		$m.__track_lines__[264] = 'pyjsdl.font.py, line 264:\n    return False';
		$m.__track_lines__[266] = 'pyjsdl.font.py, line 266:\n    def set_italic(self, setting=True):';
		$m.__track_lines__[271] = "pyjsdl.font.py, line 271:\n    self.italic = {True:'italic', False:''}[setting]";
		$m.__track_lines__[272] = "pyjsdl.font.py, line 272:\n    self.fontstyle = self.bold + ' ' + self.italic";
		$m.__track_lines__[274] = 'pyjsdl.font.py, line 274:\n    def get_italic(self):';
		$m.__track_lines__[278] = 'pyjsdl.font.py, line 278:\n    if self.italic:';
		$m.__track_lines__[279] = 'pyjsdl.font.py, line 279:\n    return True';
		$m.__track_lines__[281] = 'pyjsdl.font.py, line 281:\n    return False';
		$m.__track_lines__[283] = 'pyjsdl.font.py, line 283:\n    def get_linesize(self):';
		$m.__track_lines__[287] = 'pyjsdl.font.py, line 287:\n    return int(self.fontsize*1.2)';
		$m.__track_lines__[289] = 'pyjsdl.font.py, line 289:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[293] = 'pyjsdl.font.py, line 293:\n    self.metrics = lambda *arg: []';
		$m.__track_lines__[294] = 'pyjsdl.font.py, line 294:\n    self.get_height = lambda *arg: 0';
		$m.__track_lines__[295] = 'pyjsdl.font.py, line 295:\n    self.get_ascent = lambda *arg: 0';
		$m.__track_lines__[296] = 'pyjsdl.font.py, line 296:\n    self.get_descent = lambda *arg: 0';
		$m.__track_lines__[298] = 'pyjsdl.font.py, line 298:\n    def _get_char_size(self, font=None):    #for browsers HTML5Canvas not implemented';
		$m.__track_lines__[299] = 'pyjsdl.font.py, line 299:\n    if not font:';
		$m.__track_lines__[300] = 'pyjsdl.font.py, line 300:\n    return {\'a\': 0.6, \'b\': 0.6, \'c\': 0.5, \'d\': 0.6, \'e\': 0.6, \'f\': 0.3, \'g\': 0.6, \'h\': 0.6, \'i\': 0.2, \'j\': 0.2, \'k\': 0.5, \'l\': 0.2, \'m\': 0.8, \'n\': 0.6, \'o\': 0.6, \'p\': 0.6, \'q\': 0.6, \'r\': 0.3, \'s\': 0.5, \'t\': 0.3, \'u\': 0.6, \'v\': 0.5, \'w\': 0.7, \'x\': 0.5, \'y\': 0.5, \'z\': 0.5, \'A\': 0.7, \'B\': 0.7, \'C\': 0.7, \'D\': 0.7, \'E\': 0.7, \'F\': 0.6, \'G\': 0.8, \'H\': 0.7, \'I\': 0.3, \'J\': 0.5, \'K\': 0.7, \'L\': 0.6, \'M\': 0.8, \'N\': 0.7, \'O\': 0.8, \'P\': 0.7, \'Q\': 0.8, \'R\': 0.7, \'S\': 0.7, \'T\': 0.6, \'U\': 0.7, \'V\': 0.7, \'W\': 0.9, \'X\': 0.7, \'Y\': 0.7, \'Z\': 0.6, \'0\': 0.6, \'1\': 0.6, \'2\': 0.6, \'3\': 0.6, \'4\': 0.6, \'5\': 0.6, \'6\': 0.6, \'7\': 0.6, \'8\': 0.6, \'9\': 0.6, \'.\': 0.3, \',\': 0.3, \':\': 0.3, \';\': 0.3, \'?\': 0.6, \'~\': 0.6, \'!\': 0.3, \'@\': 1, \'#\': 0.6, \'$\': 0.6, \'%\': 0.9, \'^\': 0.5, \'&\': 0.7, \'=\': 0.6, \'+\': 0.6, \'-\': 0.3, \'*\': 0.4, \'/\': 0.3, \'\\\\\': 0.3, \'_\': 0.6, \'<\': 0.6, \'>\': 0.6, \'(\': 0.3, \')\': 0.3, \'{\': 0.3, \'}\': 0.3, \'[\': 0.3, \']\': 0.3, "\'": 0.2, \'"\': 0.4, \' \': 0.3}';
		$m.__track_lines__[302] = 'pyjsdl.font.py, line 302:\n    fontsize = 10';
		$m.__track_lines__[303] = "pyjsdl.font.py, line 303:\n    _surf.setFont('%dpx %s' % (fontsize, font))     #generated font='arial'";
		$m.__track_lines__[304] = 'pyjsdl.font.py, line 304:\n    char_size = {}';
		$m.__track_lines__[305] = 'pyjsdl.font.py, line 305:\n    for char in \'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;?~!@#$%^&=+-*/\\_<>(){}[]\\\'\\" \':';
		$m.__track_lines__[306] = 'pyjsdl.font.py, line 306:\n    char_size[char] = float(_surf.measureText(char)/fontsize)';
		$m.__track_lines__[307] = 'pyjsdl.font.py, line 307:\n    return char_size';
		$m.__track_lines__[310] = 'pyjsdl.font.py, line 310:\n    class SysFont(Font):';
		$m.__track_lines__[317] = 'pyjsdl.font.py, line 317:\n    def __init__(self, name, size, bold=False, italic=False):';
		$m.__track_lines__[322] = 'pyjsdl.font.py, line 322:\n    Font.__init__(self,name,size)';
		$m.__track_lines__[323] = "pyjsdl.font.py, line 323:\n    self.bold = {True:'bold', False:''}[bold]";
		$m.__track_lines__[324] = "pyjsdl.font.py, line 324:\n    self.italic = {True:'italic', False:''}[bold]";
		$m.__track_lines__[325] = "pyjsdl.font.py, line 325:\n    self.fontstyle = self.bold + ' ' + self.italic";

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
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_13 = new $p['int'](13);
		var $constant_int_14 = new $p['int'](14);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_17 = new $p['int'](17);
		var $constant_int_18 = new $p['int'](18);
		var $constant_int_19 = new $p['int'](19);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_21 = new $p['int'](21);
		var $constant_int_22 = new $p['int'](22);
		var $constant_int_23 = new $p['int'](23);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_25 = new $p['int'](25);
		var $constant_int_26 = new $p['int'](26);
		var $constant_int_27 = new $p['int'](27);
		var $constant_int_28 = new $p['int'](28);
		var $constant_int_29 = new $p['int'](29);
		var $constant_int_30 = new $p['int'](30);
		$pyjs['track']['module']='pyjsdl.font';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_ceil'] = $p['___import___']('math.ceil', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=8;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['HTML5Canvas'] = $p['___import___']('pyjsdl.pyjsobj.HTML5Canvas', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=10;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=13;
		$m['_initialized'] = false;
		$pyjs['track']['lineno']=14;
		$m['_surf'] = null;
		$pyjs['track']['lineno']=17;
		$m['init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $pyjs_try_err;
			$pyjs['track']={'module':'pyjsdl.font','lineno':17};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.font';
			$pyjs['track']['lineno']=17;
			$pyjs['track']['lineno']=23;
			$pyjs['track']['lineno']=24;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($m['_initialized']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
				$pyjs['track']['lineno']=25;
				$pyjs['track']['lineno']=25;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=26;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=27;
					$m['_surf'] = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['HTML5Canvas']($constant_int_1, $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
					$pyjs['track']['lineno']=28;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['_surf']['measureText']('x');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
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
				$pyjs['track']['module']='pyjsdl.font';
				if (true) {
					$pyjs['track']['lineno']=30;
					$m['_surf'] = null;
				}
			}
			$pyjs['track']['lineno']=31;
			$m['_initialized'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null];
		$pyjs['track']['lineno']=32;
		(function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['init']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
		$pyjs['track']['lineno']=35;
		$m['quit'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.font','lineno':35};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.font';
			$pyjs['track']['lineno']=35;
			$pyjs['track']['lineno']=41;
			$pyjs['track']['lineno']=42;
			$m['_surf'] = null;
			$pyjs['track']['lineno']=43;
			$m['_initialized'] = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['quit']['__name__'] = 'quit';

		$m['quit']['__bind_type__'] = 0;
		$m['quit']['__args__'] = [null,null];
		$pyjs['track']['lineno']=46;
		$m['get_init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.font','lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.font';
			$pyjs['track']['lineno']=46;
			$pyjs['track']['lineno']=52;
			$pyjs['track']['lineno']=52;
			var $pyjs__ret = $m['_initialized'];
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['get_init']['__name__'] = 'get_init';

		$m['get_init']['__bind_type__'] = 0;
		$m['get_init']['__args__'] = [null,null];
		$pyjs['track']['lineno']=55;
		$m['get_default_font'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.font','lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.font';
			$pyjs['track']['lineno']=55;
			$pyjs['track']['lineno']=61;
			$pyjs['track']['lineno']=61;
			var $pyjs__ret = $p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font')['__getitem__']($constant_int_0);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['get_default_font']['__name__'] = 'get_default_font';

		$m['get_default_font']['__bind_type__'] = 0;
		$m['get_default_font']['__args__'] = [null,null];
		$pyjs['track']['lineno']=64;
		$m['get_fonts'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.font','lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.font';
			$pyjs['track']['lineno']=64;
			$pyjs['track']['lineno']=70;
			$pyjs['track']['lineno']=70;
			var $pyjs__ret = $p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['get_fonts']['__name__'] = 'get_fonts';

		$m['get_fonts']['__bind_type__'] = 0;
		$m['get_fonts']['__args__'] = [null,null];
		$pyjs['track']['lineno']=73;
		$m['match_font'] = function(name) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var c,$iter2_nextval,$iter2_type,$iter2_iter,$iter3_array,i,$iter3_nextval,$iter3_type,$iter2_idx,$iter3_idx,fn,$pyjs__trackstack_size_1,fallback,font,f,$iter2_array,$iter3_iter;
			$pyjs['track']={'module':'pyjsdl.font','lineno':73};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.font';
			$pyjs['track']['lineno']=73;
			$pyjs['track']['lineno']=80;
			fallback = false;
			$pyjs['track']['lineno']=81;
			font = function(){
				var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,fn,$iter1_array;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return name['$$split'](',');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				fn = $iter1_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp1['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return fn['strip']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.font';

	return $collcomp1;}();
			$pyjs['track']['lineno']=82;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['enumerate'](font);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				i = $tupleassign1[0];
				fn = $tupleassign1[1];
				$pyjs['track']['lineno']=83;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font')['__contains__'](fn));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
					$pyjs['track']['lineno']=84;
					fallback = true;
					$pyjs['track']['lineno']=85;
					continue;
				}
				else {
					$pyjs['track']['lineno']=87;
					f = (function(){try{try{$pyjs['in_try_except'] += 1;
					return ''['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
						var $generator = function () {};
						$generator['next'] = function (noStop) {
						
							var $res;
							$yield_value = $exc = null;
							try {
								$res = $generator['$genfunc']();
								$is_executing=false;
								if (typeof $res == 'undefined') {
									if (noStop === true) {
										$generator_state[0] = -1;
										return;
									}
									throw $p['StopIteration']();
								}
							} catch (e) {
						
								$is_executing=false;
								$generator_state[0] = -1;
								if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
									return;
								}
								throw e;
							}
							return $res;
						};
						$generator['__iter__'] = function () {return $generator;};
						$generator['send'] = function ($val) {
						
							$yield_value = $val;
							$exc = null;
							try {
								var $res = $generator['$genfunc']();
								if (typeof $res == 'undefined') throw $p['StopIteration']();
							} catch (e) {
						
								$generator_state[0] = -1;
								$is_executing=false;
								throw e;
							}
							$is_executing=false;
							return $res;
						};
						$generator['$$throw'] = function ($exc_type, $exc_value) {
						
							$yield_value = null;
							$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																	($p['isinstance']($exc_value, $exc_type)
																	 ? $exc_value : $exc_type($exc_value)));
							try {
								var $res = $generator['$genfunc']();
							} catch (e) {
						
								$generator_state[0] = -1;
								$is_executing=false;
								throw (e);
							}
							$is_executing=false;
							return $res;
						};
						$generator['close'] = function () {
						
							$yield_value = null;
							$exc=$p['GeneratorExit']();
							try {
								var $res = $generator['$genfunc']();
								$is_executing=false;
								if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
							} catch (e) {
						
								$generator_state[0] = -1;
								$is_executing=false;
								if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
								throw (e);
							}
							return null;
						};
						$generator['$genfunc'] = function () {
							var $yielding = false;
							if ($is_executing) throw $p['ValueError']('generator already executing');
							$is_executing = true;
						
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$iter3_iter = fn;
							$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									c = $iter3_nextval['$nextval'];
									$generator_state[3] = 0;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool'](c['isalnum']())))) {
										$generator_state[2]=1;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											$yield_value = c;
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									$generator_state[2]=0;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
								}
							}
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
							$generator_state[0]=4;
						}
						if ($generator_state[0] == 4) {
						}

							return;
						};
						return $generator;
					}()
);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
					$pyjs['track']['lineno']=88;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font_alt')['__contains__'](f));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
						$pyjs['track']['lineno']=89;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return font['__setitem__'](i, $p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font')['__getitem__']($p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font_alt')['__getitem__'](f)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
						$pyjs['track']['lineno']=90;
						fallback = true;
					}
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.font';
			$pyjs['track']['lineno']=91;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](fallback));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs['track']['lineno']=92;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return font['append']($p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font')['__getitem__']($constant_int_0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			}
			$pyjs['track']['lineno']=93;
			font = (function(){try{try{$pyjs['in_try_except'] += 1;
			return ','['join'](font);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['track']['lineno']=94;
			$pyjs['track']['lineno']=94;
			var $pyjs__ret = font;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['match_font']['__name__'] = 'match_font';

		$m['match_font']['__bind_type__'] = 0;
		$m['match_font']['__args__'] = [null,null,['name']];
		$pyjs['track']['lineno']=97;
		$m['Font'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.font';
			$cls_definition['__md5__'] = 'fb1d39f926c51586ab27b384908bcd14';
			$pyjs['track']['lineno']=112;
			$cls_definition['_font'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['arial', 'bitstream vera sans', 'bitstream vera serif', 'book antiqua', 'comic sans ms', 'courier new', 'courier', 'dejavu sans', 'dejavu sans mono', 'dejavu serif', 'freesans', 'garamond', 'georgia', 'helvetica', 'impact', 'liberation sans', 'liberation serif', 'lucida console', 'lucida serif', 'nimbus mono l', 'nimbus roman no9 l', 'nimbus sans l', 'palatino', 'times new roman', 'times', 'tahoma', 'verdana', 'cursive', 'monospace', 'sans-serif', 'serif']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['track']['lineno']=114;
			$cls_definition['_font_alt'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([['arial', $constant_int_0], ['bitstreamverasans', $constant_int_1], ['bitstreamveraserif', $constant_int_2], ['bookantiqua', $constant_int_3], ['comicsansms', $constant_int_4], ['couriernew', $constant_int_5], ['courier', $constant_int_6], ['dejavusans', $constant_int_7], ['dejavusansmono', $constant_int_8], ['dejavuserif', $constant_int_9], ['freesans', $constant_int_10], ['garamond', $constant_int_11], ['georgia', $constant_int_12], ['helvetica', $constant_int_13], ['impact', $constant_int_14], ['liberationsans', $constant_int_15], ['liberationserif', $constant_int_16], ['lucidaconsole', $constant_int_17], ['lucidaserif', $constant_int_18], ['nimbusmonol', $constant_int_19], ['nimbusromanno9l', $constant_int_20], ['nimbussansl', $constant_int_21], ['palatino', $constant_int_22], ['timesnewroman', $constant_int_23], ['times', $constant_int_24], ['tahoma', $constant_int_25], ['verdana', $constant_int_26], ['cursive', $constant_int_27], ['monospace', $constant_int_28], ['sansserif', $constant_int_29], ['serif', $constant_int_30]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['track']['lineno']=116;
			$cls_definition['_font_family'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['arial', 'helvetica', 'liberation sans', 'nimbus sans l', 'freesans', 'tahoma', 'sans-serif']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['verdana', 'bitstream vera sans', 'dejavu sans', 'sans-serif']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['impact', 'sans-serif']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['comic sans ms', 'cursive', 'sans-serif']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['courier new', 'courier', 'lucida console', 'dejavu sans mono', 'monospace']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['times new roman', 'times', 'liberation serif', 'nimbus roman no9 l', 'serif']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['garamond', 'book antiqua', 'palatino', 'liberation serif', 'nimbus roman no9 l', 'serif']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['georgia', 'bitstream vera serif', 'lucida serif', 'liberation serif', 'dejavu serif', 'serif']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['track']['lineno']=118;
			$method = $pyjs__bind_method2('__init__', function(name, size) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					size = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fb1d39f926c51586ab27b384908bcd14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter6_type,$iter5_array,$iter8_iter,$iter5_iter,$iter5_type,$iter6_iter,font,$iter6_nextval,$iter5_idx,$iter8_idx,$iter6_idx,$iter7_iter,$iter8_type,$iter6_array,$iter8_nextval,ff,$iter7_idx,load_custom_font,fn,c,$iter7_type,$iter7_nextval,f,i,$iter7_array,$iter8_array,$add2,$add3,$add1,$add4,$pyjs__trackstack_size_1,fallback;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':118};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=118;
				$pyjs['track']['lineno']=135;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](name));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) {
					$pyjs['track']['lineno']=136;
					font = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([$p['getattr']($m['Font'], '_font')['__getitem__']($constant_int_0)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=138;
					font = function(){
						var $iter4_nextval,$collcomp2,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter,fn;
	$collcomp2 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return name['$$split'](',');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						fn = $iter4_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp2['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return fn['strip']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.font';

	return $collcomp2;}();
				}
				$pyjs['track']['lineno']=139;
				load_custom_font = false;
				$pyjs['track']['lineno']=140;
				fallback = null;
				$pyjs['track']['lineno']=141;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['enumerate'](font);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
					i = $tupleassign2[0];
					fn = $tupleassign2[1];
					$pyjs['track']['lineno']=142;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](fn['__contains__']('.'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()) {
						$pyjs['track']['lineno']=143;
						fn = (function(){try{try{$pyjs['in_try_except'] += 1;
						return fn['$$split']('.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()['__getitem__']($constant_int_0);
						$pyjs['track']['lineno']=144;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return font['__setitem__'](i, fn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
						$pyjs['track']['lineno']=145;
						load_custom_font = true;
					}
					$pyjs['track']['lineno']=146;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr']($m['Font'], '_font')['__contains__'](fn));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
						$pyjs['track']['lineno']=147;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['bool'](fallback));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()) {
							$pyjs['track']['lineno']=148;
							fallback = fn;
						}
					}
					else {
						$pyjs['track']['lineno']=150;
						f = (function(){try{try{$pyjs['in_try_except'] += 1;
						return ''['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
							var $generator = function () {};
							$generator['next'] = function (noStop) {
							
								var $res;
								$yield_value = $exc = null;
								try {
									$res = $generator['$genfunc']();
									$is_executing=false;
									if (typeof $res == 'undefined') {
										if (noStop === true) {
											$generator_state[0] = -1;
											return;
										}
										throw $p['StopIteration']();
									}
								} catch (e) {
							
									$is_executing=false;
									$generator_state[0] = -1;
									if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
										return;
									}
									throw e;
								}
								return $res;
							};
							$generator['__iter__'] = function () {return $generator;};
							$generator['send'] = function ($val) {
							
								$yield_value = $val;
								$exc = null;
								try {
									var $res = $generator['$genfunc']();
									if (typeof $res == 'undefined') throw $p['StopIteration']();
								} catch (e) {
							
									$generator_state[0] = -1;
									$is_executing=false;
									throw e;
								}
								$is_executing=false;
								return $res;
							};
							$generator['$$throw'] = function ($exc_type, $exc_value) {
							
								$yield_value = null;
								$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																		($p['isinstance']($exc_value, $exc_type)
																		 ? $exc_value : $exc_type($exc_value)));
								try {
									var $res = $generator['$genfunc']();
								} catch (e) {
							
									$generator_state[0] = -1;
									$is_executing=false;
									throw (e);
								}
								$is_executing=false;
								return $res;
							};
							$generator['close'] = function () {
							
								$yield_value = null;
								$exc=$p['GeneratorExit']();
								try {
									var $res = $generator['$genfunc']();
									$is_executing=false;
									if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
								} catch (e) {
							
									$generator_state[0] = -1;
									$is_executing=false;
									if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
									throw (e);
								}
								return null;
							};
							$generator['$genfunc'] = function () {
								var $yielding = false;
								if ($is_executing) throw $p['ValueError']('generator already executing');
								$is_executing = true;
							
							if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
								for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[0] = -1;
									throw $exc;
								}
								$iter6_iter = fn;
								$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
								$generator_state[0]=1;
							}
							if ($generator_state[0] == 1) {
								$generator_state[1] = 0;
								$generator_state[0]=2;
							}
							if ($generator_state[0] == 2) {
								for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
									if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
										for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
										c = $iter6_nextval['$nextval'];
										$generator_state[3] = 0;
										$generator_state[1]=1;
									}
									if ($generator_state[1] == 1) {
										if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool'](c['isalnum']())))) {
											$generator_state[2]=1;
											if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
												for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
												$yield_value = c;
												$yielding = true;
												$generator_state[3] = 1;
												return $yield_value;
												$generator_state[3]=1;
											}
											if ($generator_state[3] == 1) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[3] = -1;
													throw $exc;
												}
												$generator_state[3]=2;
											}
											if ($generator_state[3] == 2) {
											}
										}
										$generator_state[2]=0;
										$generator_state[1]=2;
									}
									if ($generator_state[1] == 2) {
									}
								}
								$generator_state[0]=3;
							}
							if ($generator_state[0] == 3) {
								$generator_state[0]=4;
							}
							if ($generator_state[0] == 4) {
							}

								return;
							};
							return $generator;
						}()
);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
						$pyjs['track']['lineno']=151;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['getattr']($m['Font'], '_font_alt')['__contains__'](f));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
							$pyjs['track']['lineno']=152;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return font['__setitem__'](i, $p['getattr']($m['Font'], '_font')['__getitem__']($p['getattr']($m['Font'], '_font_alt')['__getitem__'](f)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
							$pyjs['track']['lineno']=153;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](!$p['bool'](fallback));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
								$pyjs['track']['lineno']=154;
								fallback = font['__getitem__'](i);
							}
						}
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=155;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](fallback);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
					$pyjs['track']['lineno']=156;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($m['Font'], '_font_family');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						ff = $iter7_nextval['$nextval'];
						$pyjs['track']['lineno']=157;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](ff['__contains__'](fallback));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) {
							$pyjs['track']['lineno']=158;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return font['extend'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
								var $generator = function () {};
								$generator['next'] = function (noStop) {
								
									var $res;
									$yield_value = $exc = null;
									try {
										$res = $generator['$genfunc']();
										$is_executing=false;
										if (typeof $res == 'undefined') {
											if (noStop === true) {
												$generator_state[0] = -1;
												return;
											}
											throw $p['StopIteration']();
										}
									} catch (e) {
								
										$is_executing=false;
										$generator_state[0] = -1;
										if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
											return;
										}
										throw e;
									}
									return $res;
								};
								$generator['__iter__'] = function () {return $generator;};
								$generator['send'] = function ($val) {
								
									$yield_value = $val;
									$exc = null;
									try {
										var $res = $generator['$genfunc']();
										if (typeof $res == 'undefined') throw $p['StopIteration']();
									} catch (e) {
								
										$generator_state[0] = -1;
										$is_executing=false;
										throw e;
									}
									$is_executing=false;
									return $res;
								};
								$generator['$$throw'] = function ($exc_type, $exc_value) {
								
									$yield_value = null;
									$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																			($p['isinstance']($exc_value, $exc_type)
																			 ? $exc_value : $exc_type($exc_value)));
									try {
										var $res = $generator['$genfunc']();
									} catch (e) {
								
										$generator_state[0] = -1;
										$is_executing=false;
										throw (e);
									}
									$is_executing=false;
									return $res;
								};
								$generator['close'] = function () {
								
									$yield_value = null;
									$exc=$p['GeneratorExit']();
									try {
										var $res = $generator['$genfunc']();
										$is_executing=false;
										if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
									} catch (e) {
								
										$generator_state[0] = -1;
										$is_executing=false;
										if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
										throw (e);
									}
									return null;
								};
								$generator['$genfunc'] = function () {
									var $yielding = false;
									if ($is_executing) throw $p['ValueError']('generator already executing');
									$is_executing = true;
								
								if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
									for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[0] = -1;
										throw $exc;
									}
									$iter8_iter = ff;
									$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
									$generator_state[0]=1;
								}
								if ($generator_state[0] == 1) {
									$generator_state[1] = 0;
									$generator_state[0]=2;
								}
								if ($generator_state[0] == 2) {
									for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
										if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
											for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
											f = $iter8_nextval['$nextval'];
											$generator_state[3] = 0;
											$generator_state[1]=1;
										}
										if ($generator_state[1] == 1) {
											if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool'](!font['__contains__'](f))))) {
												$generator_state[2]=1;
												if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
													for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
													$yield_value = f;
													$yielding = true;
													$generator_state[3] = 1;
													return $yield_value;
													$generator_state[3]=1;
												}
												if ($generator_state[3] == 1) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[3] = -1;
														throw $exc;
													}
													$generator_state[3]=2;
												}
												if ($generator_state[3] == 2) {
												}
											}
											$generator_state[2]=0;
											$generator_state[1]=2;
										}
										if ($generator_state[1] == 2) {
										}
									}
									$generator_state[0]=3;
								}
								if ($generator_state[0] == 3) {
									$generator_state[0]=4;
								}
								if ($generator_state[0] == 4) {
								}

									return;
								};
								return $generator;
							}()
);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
							$pyjs['track']['lineno']=159;
							break;
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.font';
				}
				else {
					$pyjs['track']['lineno']=161;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return font['extend']($p['getattr']($m['Font'], '_font_family')['__getitem__']($constant_int_0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
				}
				$pyjs['track']['lineno']=162;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontname', (function(){try{try{$pyjs['in_try_except'] += 1;
				return ','['join'](font);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) : $p['setattr'](self, 'fontname', (function(){try{try{$pyjs['in_try_except'] += 1;
				return ','['join'](font);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()); 
				$pyjs['track']['lineno']=163;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontsize', size) : $p['setattr'](self, 'fontsize', size); 
				$pyjs['track']['lineno']=164;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bold', '') : $p['setattr'](self, 'bold', ''); 
				$pyjs['track']['lineno']=165;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('italic', '') : $p['setattr'](self, 'italic', ''); 
				$pyjs['track']['lineno']=166;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontstyle', $p['__op_add']($add3=$p['__op_add']($add1=$p['getattr'](self, 'bold'),$add2=' '),$add4=$p['getattr'](self, 'italic'))) : $p['setattr'](self, 'fontstyle', $p['__op_add']($add3=$p['__op_add']($add1=$p['getattr'](self, 'bold'),$add2=' '),$add4=$p['getattr'](self, 'italic'))); 
				$pyjs['track']['lineno']=167;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('underline', false) : $p['setattr'](self, 'underline', false); 
				$pyjs['track']['lineno']=168;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('char_size', null) : $p['setattr'](self, 'char_size', null); 
				$pyjs['track']['lineno']=169;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](load_custom_font);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
					$pyjs['track']['lineno']=170;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['render']('x');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				}
				$pyjs['track']['lineno']=171;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_nonimplemented_methods']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['name'],['size']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=173;
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
					if (self.prototype['__md5__'] !== 'fb1d39f926c51586ab27b384908bcd14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.font', 'lineno':173};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=173;
				$pyjs['track']['lineno']=177;
				$pyjs['track']['lineno']=177;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s(%r)', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, '__class__'), $p['getattr'](self, '__dict__')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=179;
			$method = $pyjs__bind_method2('render', function(text, antialias, color, background, surface) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					antialias = arguments[2];
					color = arguments[3];
					background = arguments[4];
					surface = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fb1d39f926c51586ab27b384908bcd14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof antialias == 'undefined') antialias=arguments['callee']['__args__'][4][1];
				if (typeof color == 'undefined') color=arguments['callee']['__args__'][5][1];
				if (typeof background == 'undefined') background=arguments['callee']['__args__'][6][1];
				if (typeof surface == 'undefined') surface=arguments['callee']['__args__'][7][1];
				var surf,$mul3,w,$mul1,h,$div2,$div3,$mul4,$div1,$div6,$mul2,$div4,$div5;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':179};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=179;
				$pyjs['track']['lineno']=184;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](surface));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
					$pyjs['track']['lineno']=185;
					var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['size'](text);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
					w = $tupleassign3[0];
					h = $tupleassign3[1];
					$pyjs['track']['lineno']=186;
					surf = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Surface']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([w, h]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=188;
					surf = surface;
					$pyjs['track']['lineno']=189;
					var $tupleassign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](surface, 'width'), $p['getattr'](surface, 'height')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
					w = $tupleassign4[0];
					h = $tupleassign4[1];
				}
				$pyjs['track']['lineno']=190;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](background);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
					$pyjs['track']['lineno']=191;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surf['setFillStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Color'](background);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
					$pyjs['track']['lineno']=192;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surf['fillRect']($constant_int_0, $constant_int_0, w, h);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
				}
				$pyjs['track']['lineno']=193;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['setFont']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s %dpx %s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, 'fontstyle'), $p['getattr'](self, 'fontsize'), $p['getattr'](self, 'fontname')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				$pyjs['track']['lineno']=195;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['setFillStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
				$pyjs['track']['lineno']=196;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['setTextAlign']('center');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				$pyjs['track']['lineno']=197;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['setTextBaseline']('middle');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
				$pyjs['track']['lineno']=198;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['fillText'](text, (typeof ($div1=w)==typeof ($div2=$constant_int_2) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)), (typeof ($div3=h)==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				$pyjs['track']['lineno']=199;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'underline'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
					$pyjs['track']['lineno']=200;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surf['setLineWidth']((typeof ($div5=$p['getattr'](self, 'fontsize'))==typeof ($div6=$constant_int_20) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
					$pyjs['track']['lineno']=201;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surf['setStrokeStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
					$pyjs['track']['lineno']=202;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surf['beginPath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
					$pyjs['track']['lineno']=203;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surf['moveTo']($constant_int_0, (typeof ($mul1=h)==typeof ($mul2=0.85) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
					$pyjs['track']['lineno']=204;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surf['lineTo'](w, (typeof ($mul3=h)==typeof ($mul4=0.85) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
					$pyjs['track']['lineno']=205;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surf['stroke']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				}
				$pyjs['track']['lineno']=206;
				$pyjs['track']['lineno']=206;
				var $pyjs__ret = surf;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['text'],['antialias', true],['color', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()],['background', null],['surface', null]]);
			$cls_definition['render'] = $method;
			$pyjs['track']['lineno']=208;
			$method = $pyjs__bind_method2('size', function(text) {
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
					if (self.prototype['__md5__'] !== 'fb1d39f926c51586ab27b384908bcd14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var x,y,$mul6,$mul5;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':208};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=208;
				$pyjs['track']['lineno']=212;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($m['_surf']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()) {
					$pyjs['track']['lineno']=213;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['_surf']['setFont']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('%s %dpx %s', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](self, 'fontstyle'), $p['getattr'](self, 'fontsize'), $p['getattr'](self, 'fontname')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
					$pyjs['track']['lineno']=214;
					x = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['_surf']['measureText'](text);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=216;
					x = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_size_estimate'](text);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
				}
				$pyjs['track']['lineno']=217;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp'](x, $constant_int_1) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})()) {
					$pyjs['track']['lineno']=218;
					x = $constant_int_1;
				}
				$pyjs['track']['lineno']=219;
				y = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($mul5=$p['getattr'](self, 'fontsize'))==typeof ($mul6=1.2) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
				$pyjs['track']['lineno']=220;
				$pyjs['track']['lineno']=220;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['size'] = $method;
			$pyjs['track']['lineno']=222;
			$method = $pyjs__bind_method2('_size_estimate', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fb1d39f926c51586ab27b384908bcd14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof text == 'undefined') text=arguments['callee']['__args__'][3][1];
				var $mul10,$iter9_iter,$mul8,$iter9_nextval,$iter9_idx,$iter9_array,$$char,$pyjs_try_err,$mul9,$pyjs__trackstack_size_1,$mul7,x,$iter9_type,size;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':222};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=222;
				$pyjs['track']['lineno']=223;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'char_size')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()) {
					$pyjs['track']['lineno']=224;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('char_size', (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_get_char_size']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()) : $p['setattr'](self, 'char_size', (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_get_char_size']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()); 
				}
				$pyjs['track']['lineno']=225;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontname', (function(){try{try{$pyjs['in_try_except'] += 1;
				return ','['join']($p['getattr']($m['Font'], '_font_family')['__getitem__']($constant_int_0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})()) : $p['setattr'](self, 'fontname', (function(){try{try{$pyjs['in_try_except'] += 1;
				return ','['join']($p['getattr']($m['Font'], '_font_family')['__getitem__']($constant_int_0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})()); 
				$pyjs['track']['lineno']=226;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontstyle', '') : $p['setattr'](self, 'fontstyle', ''); 
				$pyjs['track']['lineno']=227;
				size = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
				$pyjs['track']['lineno']=228;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return text;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					$$char = $iter9_nextval['$nextval'];
					$pyjs['track']['lineno']=229;
					var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
					try {
						try {
							$pyjs['in_try_except'] += 1;
							$pyjs['track']['lineno']=230;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return size['append']((typeof ($mul7=$p['getattr'](self, 'char_size')['__getitem__']($$char))==typeof ($mul8=$p['getattr'](self, 'fontsize')) && typeof $mul7=='number'?
								$mul7*$mul8:
								$p['op_mul']($mul7,$mul8)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
						} finally { $pyjs['in_try_except'] -= 1; }
					} catch($pyjs_try_err) {
						$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_2 - 1);
						$pyjs['__active_exception_stack__'] = null;
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.font';
						if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
							$pyjs['track']['lineno']=232;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return size['append']((typeof ($mul9=$p['getattr'](self, 'char_size')['__getitem__']('x'))==typeof ($mul10=$p['getattr'](self, 'fontsize')) && typeof $mul9=='number'?
								$mul9*$mul10:
								$p['op_mul']($mul9,$mul10)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=233;
				x = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['_ceil']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sum'](size);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
				$pyjs['track']['lineno']=234;
				$pyjs['track']['lineno']=234;
				var $pyjs__ret = x;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['text', null]]);
			$cls_definition['_size_estimate'] = $method;
			$pyjs['track']['lineno']=236;
			$method = $pyjs__bind_method2('set_underline', function(setting) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					setting = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fb1d39f926c51586ab27b384908bcd14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof setting == 'undefined') setting=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.font', 'lineno':236};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=236;
				$pyjs['track']['lineno']=241;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('underline', setting) : $p['setattr'](self, 'underline', setting); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['setting', true]]);
			$cls_definition['set_underline'] = $method;
			$pyjs['track']['lineno']=243;
			$method = $pyjs__bind_method2('get_underline', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fb1d39f926c51586ab27b384908bcd14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.font', 'lineno':243};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=243;
				$pyjs['track']['lineno']=247;
				$pyjs['track']['lineno']=247;
				var $pyjs__ret = $p['getattr'](self, 'underline');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_underline'] = $method;
			$pyjs['track']['lineno']=249;
			$method = $pyjs__bind_method2('set_bold', function(setting) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					setting = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fb1d39f926c51586ab27b384908bcd14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof setting == 'undefined') setting=arguments['callee']['__args__'][3][1];
				var $add6,$add7,$add5,$add8;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':249};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=249;
				$pyjs['track']['lineno']=254;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bold', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[true, 'bold'], [false, '']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()['__getitem__'](setting)) : $p['setattr'](self, 'bold', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[true, 'bold'], [false, '']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()['__getitem__'](setting)); 
				$pyjs['track']['lineno']=255;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontstyle', $p['__op_add']($add7=$p['__op_add']($add5=$p['getattr'](self, 'bold'),$add6=' '),$add8=$p['getattr'](self, 'italic'))) : $p['setattr'](self, 'fontstyle', $p['__op_add']($add7=$p['__op_add']($add5=$p['getattr'](self, 'bold'),$add6=' '),$add8=$p['getattr'](self, 'italic'))); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['setting', true]]);
			$cls_definition['set_bold'] = $method;
			$pyjs['track']['lineno']=257;
			$method = $pyjs__bind_method2('get_bold', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fb1d39f926c51586ab27b384908bcd14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.font', 'lineno':257};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=257;
				$pyjs['track']['lineno']=261;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'bold'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()) {
					$pyjs['track']['lineno']=262;
					$pyjs['track']['lineno']=262;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=264;
					$pyjs['track']['lineno']=264;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_bold'] = $method;
			$pyjs['track']['lineno']=266;
			$method = $pyjs__bind_method2('set_italic', function(setting) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					setting = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fb1d39f926c51586ab27b384908bcd14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof setting == 'undefined') setting=arguments['callee']['__args__'][3][1];
				var $add10,$add11,$add12,$add9;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':266};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=266;
				$pyjs['track']['lineno']=271;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('italic', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[true, 'italic'], [false, '']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})()['__getitem__'](setting)) : $p['setattr'](self, 'italic', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[true, 'italic'], [false, '']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})()['__getitem__'](setting)); 
				$pyjs['track']['lineno']=272;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontstyle', $p['__op_add']($add11=$p['__op_add']($add9=$p['getattr'](self, 'bold'),$add10=' '),$add12=$p['getattr'](self, 'italic'))) : $p['setattr'](self, 'fontstyle', $p['__op_add']($add11=$p['__op_add']($add9=$p['getattr'](self, 'bold'),$add10=' '),$add12=$p['getattr'](self, 'italic'))); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['setting', true]]);
			$cls_definition['set_italic'] = $method;
			$pyjs['track']['lineno']=274;
			$method = $pyjs__bind_method2('get_italic', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fb1d39f926c51586ab27b384908bcd14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.font', 'lineno':274};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=274;
				$pyjs['track']['lineno']=278;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'italic'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()) {
					$pyjs['track']['lineno']=279;
					$pyjs['track']['lineno']=279;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=281;
					$pyjs['track']['lineno']=281;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_italic'] = $method;
			$pyjs['track']['lineno']=283;
			$method = $pyjs__bind_method2('get_linesize', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fb1d39f926c51586ab27b384908bcd14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul12,$mul11;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':283};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=283;
				$pyjs['track']['lineno']=287;
				$pyjs['track']['lineno']=287;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($mul11=$p['getattr'](self, 'fontsize'))==typeof ($mul12=1.2) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_linesize'] = $method;
			$pyjs['track']['lineno']=289;
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
					if (self.prototype['__md5__'] !== 'fb1d39f926c51586ab27b384908bcd14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda4,$lambda3,$lambda2,$lambda1;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':289};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=289;
				$pyjs['track']['lineno']=293;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.font','lineno':293};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.font';
					$pyjs['track']['lineno']=293;
					$pyjs['track']['lineno']=293;
					$pyjs['track']['lineno']=293;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('metrics', $lambda1) : $p['setattr'](self, 'metrics', $lambda1); 
				$pyjs['track']['lineno']=294;
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.font','lineno':294};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.font';
					$pyjs['track']['lineno']=294;
					$pyjs['track']['lineno']=294;
					$pyjs['track']['lineno']=294;
					var $pyjs__ret = $constant_int_0;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_height', $lambda2) : $p['setattr'](self, 'get_height', $lambda2); 
				$pyjs['track']['lineno']=295;
				var 				$lambda3 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.font','lineno':295};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.font';
					$pyjs['track']['lineno']=295;
					$pyjs['track']['lineno']=295;
					$pyjs['track']['lineno']=295;
					var $pyjs__ret = $constant_int_0;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda3['__name__'] = '$lambda3';

				$lambda3['__bind_type__'] = 0;
				$lambda3['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_ascent', $lambda3) : $p['setattr'](self, 'get_ascent', $lambda3); 
				$pyjs['track']['lineno']=296;
				var 				$lambda4 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.font','lineno':296};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.font';
					$pyjs['track']['lineno']=296;
					$pyjs['track']['lineno']=296;
					$pyjs['track']['lineno']=296;
					var $pyjs__ret = $constant_int_0;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda4['__name__'] = '$lambda4';

				$lambda4['__bind_type__'] = 0;
				$lambda4['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_descent', $lambda4) : $p['setattr'](self, 'get_descent', $lambda4); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=298;
			$method = $pyjs__bind_method2('_get_char_size', function(font) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					font = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fb1d39f926c51586ab27b384908bcd14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof font == 'undefined') font=arguments['callee']['__args__'][3][1];
				var char_size,$iter10_nextval,$iter10_array,$div7,$$char,$div8,fontsize,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter,$iter10_idx;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':298};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=298;
				$pyjs['track']['lineno']=299;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](font));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})()) {
					$pyjs['track']['lineno']=300;
					$pyjs['track']['lineno']=300;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([['a', 0.6], ['b', 0.6], ['c', 0.5], ['d', 0.6], ['e', 0.6], ['f', 0.3], ['g', 0.6], ['h', 0.6], ['i', 0.2], ['j', 0.2], ['k', 0.5], ['l', 0.2], ['m', 0.8], ['n', 0.6], ['o', 0.6], ['p', 0.6], ['q', 0.6], ['r', 0.3], ['s', 0.5], ['t', 0.3], ['u', 0.6], ['v', 0.5], ['w', 0.7], ['x', 0.5], ['y', 0.5], ['z', 0.5], ['A', 0.7], ['B', 0.7], ['C', 0.7], ['D', 0.7], ['E', 0.7], ['F', 0.6], ['G', 0.8], ['H', 0.7], ['I', 0.3], ['J', 0.5], ['K', 0.7], ['L', 0.6], ['M', 0.8], ['N', 0.7], ['O', 0.8], ['P', 0.7], ['Q', 0.8], ['R', 0.7], ['S', 0.7], ['T', 0.6], ['U', 0.7], ['V', 0.7], ['W', 0.9], ['X', 0.7], ['Y', 0.7], ['Z', 0.6], ['0', 0.6], ['1', 0.6], ['2', 0.6], ['3', 0.6], ['4', 0.6], ['5', 0.6], ['6', 0.6], ['7', 0.6], ['8', 0.6], ['9', 0.6], ['.', 0.3], [',', 0.3], [':', 0.3], [';', 0.3], ['?', 0.6], ['~', 0.6], ['!', 0.3], ['@', $constant_int_1], ['#', 0.6], ['$', 0.6], ['%', 0.9], ['^', 0.5], ['&', 0.7], ['=', 0.6], ['+', 0.6], ['-', 0.3], ['*', 0.4], ['/', 0.3], ['\\', 0.3], ['_', 0.6], ['<', 0.6], ['>', 0.6], ['(', 0.3], [')', 0.3], ['{', 0.3], ['}', 0.3], ['[', 0.3], [']', 0.3], ["'", 0.2], ['"', 0.4], [' ', 0.3]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=302;
					fontsize = $constant_int_10;
					$pyjs['track']['lineno']=303;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['_surf']['setFont']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('%dpx %s', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([fontsize, font]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
					$pyjs['track']['lineno']=304;
					char_size = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
					$pyjs['track']['lineno']=305;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;?~!@#$%^&=+-*/\\_<>(){}[]\'" ';
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
					$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
					while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
						$$char = $iter10_nextval['$nextval'];
						$pyjs['track']['lineno']=306;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return char_size['__setitem__']($$char, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['float']((typeof ($div7=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['_surf']['measureText']($$char);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})())==typeof ($div8=fontsize) && typeof $div7=='number' && $div8 !== 0?
							$div7/$div8:
							$p['op_div']($div7,$div8)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.font';
					$pyjs['track']['lineno']=307;
					$pyjs['track']['lineno']=307;
					var $pyjs__ret = char_size;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['font', null]]);
			$cls_definition['_get_char_size'] = $method;
			$pyjs['track']['lineno']=97;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Font', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=310;
		$m['SysFont'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.font';
			$cls_definition['__md5__'] = '425c7c7079f6343bf10009e3d972f707';
			$pyjs['track']['lineno']=317;
			$method = $pyjs__bind_method2('__init__', function(name, size, bold, italic) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					size = arguments[2];
					bold = arguments[3];
					italic = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '425c7c7079f6343bf10009e3d972f707') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof bold == 'undefined') bold=arguments['callee']['__args__'][5][1];
				if (typeof italic == 'undefined') italic=arguments['callee']['__args__'][6][1];
				var $add14,$add15,$add16,$add13;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':317};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=317;
				$pyjs['track']['lineno']=322;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Font']['__init__'](self, name, size);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
				$pyjs['track']['lineno']=323;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bold', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[true, 'bold'], [false, '']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})()['__getitem__'](bold)) : $p['setattr'](self, 'bold', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[true, 'bold'], [false, '']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})()['__getitem__'](bold)); 
				$pyjs['track']['lineno']=324;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('italic', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[true, 'italic'], [false, '']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()['__getitem__'](bold)) : $p['setattr'](self, 'italic', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[true, 'italic'], [false, '']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()['__getitem__'](bold)); 
				$pyjs['track']['lineno']=325;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontstyle', $p['__op_add']($add15=$p['__op_add']($add13=$p['getattr'](self, 'bold'),$add14=' '),$add16=$p['getattr'](self, 'italic'))) : $p['setattr'](self, 'fontstyle', $p['__op_add']($add15=$p['__op_add']($add13=$p['getattr'](self, 'bold'),$add14=' '),$add16=$p['getattr'](self, 'italic'))); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['name'],['size'],['bold', false],['italic', false]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=310;
			var $bases = new Array($m['Font']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SysFont', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.font */


/* end module: pyjsdl.font */


/*
PYJS_DEPS: ['math.ceil', 'math', 'pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface', 'pyjsdl.color.Color', 'pyjsdl.color', 'pyjsdl.pyjsobj.HTML5Canvas', 'pyjsdl.pyjsobj']
*/
