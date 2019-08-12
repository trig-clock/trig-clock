/* start module: pyjsdl.pyjsarray */
$pyjs['loaded_modules']['pyjsdl.pyjsarray'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.pyjsarray']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.pyjsarray'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.pyjsarray'];
	$m['__repr__'] = function() { return '<module: pyjsdl.pyjsarray>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.pyjsarray';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['pyjsarray'] = $pyjs['loaded_modules']['pyjsdl.pyjsarray'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.pyjsarray.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[28] = 'pyjsdl.pyjsarray.py, line 28:\n    from math import ceil as _ceil';
		$m.__track_lines__[29] = 'pyjsdl.pyjsarray.py, line 29:\n    from __pyjamas__ import JS';
		$m.__track_lines__[32] = 'pyjsdl.pyjsarray.py, line 32:\n    class PyTypedArray:';
		$m.__track_lines__[50] = 'pyjsdl.pyjsarray.py, line 50:\n    def __init__(self, data=None, offset=None, length=None, typedarray=None):';
		$m.__track_lines__[54] = 'pyjsdl.pyjsarray.py, line 54:\n    if data:';
		$m.__track_lines__[55] = 'pyjsdl.pyjsarray.py, line 55:\n    if isinstance(data, int):';
		$m.__track_lines__[56] = 'pyjsdl.pyjsarray.py, line 56:\n    if pyjs_mode.optimized:';
		$m.__track_lines__[57] = 'pyjsdl.pyjsarray.py, line 57:\n    self.__data = JS("""new @{{typedarray}}(@{{data}})""")';
		$m.__track_lines__[59] = 'pyjsdl.pyjsarray.py, line 59:\n    self.__data = JS("""new @{{typedarray}}(@{{data}}[\'valueOf\']())""")';
		$m.__track_lines__[61] = 'pyjsdl.pyjsarray.py, line 61:\n    if pyjs_mode.optimized:';
		$m.__track_lines__[62] = 'pyjsdl.pyjsarray.py, line 62:\n    self.__data = JS("""new @{{typedarray}}(@{{data}}[\'getArray\']())""")';
		$m.__track_lines__[64] = 'pyjsdl.pyjsarray.py, line 64:\n    data = [dat.valueOf() for dat in data]';
		$m.__track_lines__[65] = 'pyjsdl.pyjsarray.py, line 65:\n    self.__data = JS("""new @{{typedarray}}(@{{data}}[\'getArray\']())""")';
		$m.__track_lines__[67] = 'pyjsdl.pyjsarray.py, line 67:\n    self.__data = JS("""new @{{typedarray}}(@{{data}}[\'__data\'])""")';
		$m.__track_lines__[69] = 'pyjsdl.pyjsarray.py, line 69:\n    if offset is None and length is None:';
		$m.__track_lines__[70] = 'pyjsdl.pyjsarray.py, line 70:\n    self.__data = JS("""new @{{typedarray}}(@{{data}})""")';
		$m.__track_lines__[72] = 'pyjsdl.pyjsarray.py, line 72:\n    if offset is None:';
		$m.__track_lines__[73] = 'pyjsdl.pyjsarray.py, line 73:\n    offset = 0';
		$m.__track_lines__[74] = 'pyjsdl.pyjsarray.py, line 74:\n    if length is None:';
		$m.__track_lines__[75] = 'pyjsdl.pyjsarray.py, line 75:\n    self.__data = JS("""new @{{typedarray}}(@{{data}}, @{{offset}})""")';
		$m.__track_lines__[77] = 'pyjsdl.pyjsarray.py, line 77:\n    self.__data = JS("""new @{{typedarray}}(@{{data}}, @{{offset}}, @{{length}})""")';
		$m.__track_lines__[79] = 'pyjsdl.pyjsarray.py, line 79:\n    self.__data = None';
		$m.__track_lines__[81] = 'pyjsdl.pyjsarray.py, line 81:\n    def __str__(self):';
		$m.__track_lines__[85] = 'pyjsdl.pyjsarray.py, line 85:\n    return self.__data.toString()';
		$m.__track_lines__[87] = 'pyjsdl.pyjsarray.py, line 87:\n    def __iter__(self):';
		$m.__track_lines__[91] = 'pyjsdl.pyjsarray.py, line 91:\n    index = 0';
		$m.__track_lines__[92] = 'pyjsdl.pyjsarray.py, line 92:\n    while index < self.__data.length:';
		$m.__track_lines__[93] = 'pyjsdl.pyjsarray.py, line 93:\n    yield self[index]';
		$m.__track_lines__[94] = 'pyjsdl.pyjsarray.py, line 94:\n    index += 1';
		$m.__track_lines__[96] = 'pyjsdl.pyjsarray.py, line 96:\n    def __getitem__(self, index):';
		$m.__track_lines__[100] = 'pyjsdl.pyjsarray.py, line 100:\n    return JS("""@{{int}}(@{{self}}[\'__data\'][@{{index}}]);""")';
		$m.__track_lines__[102] = 'pyjsdl.pyjsarray.py, line 102:\n    def __setitem__(self, index, value):';
		$m.__track_lines__[106] = 'pyjsdl.pyjsarray.py, line 106:\n    if pyjs_mode.optimized:';
		$m.__track_lines__[107] = 'pyjsdl.pyjsarray.py, line 107:\n    JS("""@{{self}}[\'__data\'][@{{index}}]=@{{value}};""")';
		$m.__track_lines__[109] = 'pyjsdl.pyjsarray.py, line 109:\n    value = value.valueOf()';
		$m.__track_lines__[110] = 'pyjsdl.pyjsarray.py, line 110:\n    JS("""@{{self}}[\'__data\'][@{{index}}]=@{{value}};""")';
		$m.__track_lines__[111] = 'pyjsdl.pyjsarray.py, line 111:\n    return None';
		$m.__track_lines__[113] = 'pyjsdl.pyjsarray.py, line 113:\n    def __len__(self):';
		$m.__track_lines__[117] = 'pyjsdl.pyjsarray.py, line 117:\n    return self.__data.length';
		$m.__track_lines__[119] = 'pyjsdl.pyjsarray.py, line 119:\n    def set(self, data, offset=0):';
		$m.__track_lines__[123] = 'pyjsdl.pyjsarray.py, line 123:\n    if isinstance(data, (list,tuple)):';
		$m.__track_lines__[124] = 'pyjsdl.pyjsarray.py, line 124:\n    if pyjs_mode.optimized:';
		$m.__track_lines__[125] = 'pyjsdl.pyjsarray.py, line 125:\n    self.__data.set(data.getArray(), offset)';
		$m.__track_lines__[127] = 'pyjsdl.pyjsarray.py, line 127:\n    data = [dat.valueOf() for dat in data]';
		$m.__track_lines__[128] = 'pyjsdl.pyjsarray.py, line 128:\n    self.__data.set(data.getArray(), offset)';
		$m.__track_lines__[130] = 'pyjsdl.pyjsarray.py, line 130:\n    self.__data.set(data.__data, offset)';
		$m.__track_lines__[132] = 'pyjsdl.pyjsarray.py, line 132:\n    def subarray(self, begin, end=None):';
		$m.__track_lines__[136] = 'pyjsdl.pyjsarray.py, line 136:\n    if end is None:';
		$m.__track_lines__[137] = 'pyjsdl.pyjsarray.py, line 137:\n    end = self.__data.length';
		$m.__track_lines__[138] = 'pyjsdl.pyjsarray.py, line 138:\n    array = self.__data.subarray(begin, end)';
		$m.__track_lines__[139] = 'pyjsdl.pyjsarray.py, line 139:\n    pytypedarray = self.__class__()';
		$m.__track_lines__[140] = 'pyjsdl.pyjsarray.py, line 140:\n    pytypedarray.__data = array';
		$m.__track_lines__[141] = 'pyjsdl.pyjsarray.py, line 141:\n    return pytypedarray';
		$m.__track_lines__[143] = 'pyjsdl.pyjsarray.py, line 143:\n    def getLength(self):';
		$m.__track_lines__[147] = 'pyjsdl.pyjsarray.py, line 147:\n    return self.__data.length';
		$m.__track_lines__[149] = 'pyjsdl.pyjsarray.py, line 149:\n    def getByteLength(self):';
		$m.__track_lines__[153] = 'pyjsdl.pyjsarray.py, line 153:\n    return self.__data.byteLength';
		$m.__track_lines__[155] = 'pyjsdl.pyjsarray.py, line 155:\n    def getBuffer(self):';
		$m.__track_lines__[159] = 'pyjsdl.pyjsarray.py, line 159:\n    return self.__data.buffer';
		$m.__track_lines__[161] = 'pyjsdl.pyjsarray.py, line 161:\n    def getByteOffset(self):';
		$m.__track_lines__[165] = 'pyjsdl.pyjsarray.py, line 165:\n    return self.__data.byteOffset';
		$m.__track_lines__[167] = 'pyjsdl.pyjsarray.py, line 167:\n    def getBytesPerElement(self):';
		$m.__track_lines__[171] = 'pyjsdl.pyjsarray.py, line 171:\n    return self.__data.BYTES_PER_ELEMENT';
		$m.__track_lines__[173] = 'pyjsdl.pyjsarray.py, line 173:\n    def getArray(self):';
		$m.__track_lines__[177] = 'pyjsdl.pyjsarray.py, line 177:\n    return self.__data';
		$m.__track_lines__[179] = 'pyjsdl.pyjsarray.py, line 179:\n    def setArray(self, array):';
		$m.__track_lines__[183] = 'pyjsdl.pyjsarray.py, line 183:\n    self.__data = array';
		$m.__track_lines__[184] = 'pyjsdl.pyjsarray.py, line 184:\n    return None';
		$m.__track_lines__[187] = 'pyjsdl.pyjsarray.py, line 187:\n    class PyUint8ClampedArray(PyTypedArray):';
		$m.__track_lines__[192] = 'pyjsdl.pyjsarray.py, line 192:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[193] = 'pyjsdl.pyjsarray.py, line 193:\n    try:';
		$m.__track_lines__[194] = 'pyjsdl.pyjsarray.py, line 194:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Uint8ClampedArray)';
		$m.__track_lines__[196] = 'pyjsdl.pyjsarray.py, line 196:\n    if isUndefined(typedarray):';
		$m.__track_lines__[197] = 'pyjsdl.pyjsarray.py, line 197:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[199] = 'pyjsdl.pyjsarray.py, line 199:\n    raise';
		$m.__track_lines__[202] = 'pyjsdl.pyjsarray.py, line 202:\n    class PyUint8Array(PyTypedArray):';
		$m.__track_lines__[207] = 'pyjsdl.pyjsarray.py, line 207:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[208] = 'pyjsdl.pyjsarray.py, line 208:\n    try:';
		$m.__track_lines__[209] = 'pyjsdl.pyjsarray.py, line 209:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Uint8Array)';
		$m.__track_lines__[211] = 'pyjsdl.pyjsarray.py, line 211:\n    if isUndefined(typedarray):';
		$m.__track_lines__[212] = 'pyjsdl.pyjsarray.py, line 212:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[214] = 'pyjsdl.pyjsarray.py, line 214:\n    raise';
		$m.__track_lines__[217] = 'pyjsdl.pyjsarray.py, line 217:\n    class PyUint16Array(PyTypedArray):';
		$m.__track_lines__[222] = 'pyjsdl.pyjsarray.py, line 222:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[223] = 'pyjsdl.pyjsarray.py, line 223:\n    try:';
		$m.__track_lines__[224] = 'pyjsdl.pyjsarray.py, line 224:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Uint16Array)';
		$m.__track_lines__[226] = 'pyjsdl.pyjsarray.py, line 226:\n    if isUndefined(typedarray):';
		$m.__track_lines__[227] = 'pyjsdl.pyjsarray.py, line 227:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[229] = 'pyjsdl.pyjsarray.py, line 229:\n    raise';
		$m.__track_lines__[232] = 'pyjsdl.pyjsarray.py, line 232:\n    class PyUint32Array(PyTypedArray):';
		$m.__track_lines__[237] = 'pyjsdl.pyjsarray.py, line 237:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[238] = 'pyjsdl.pyjsarray.py, line 238:\n    try:';
		$m.__track_lines__[239] = 'pyjsdl.pyjsarray.py, line 239:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Uint32Array)';
		$m.__track_lines__[241] = 'pyjsdl.pyjsarray.py, line 241:\n    if isUndefined(typedarray):';
		$m.__track_lines__[242] = 'pyjsdl.pyjsarray.py, line 242:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[244] = 'pyjsdl.pyjsarray.py, line 244:\n    raise';
		$m.__track_lines__[247] = 'pyjsdl.pyjsarray.py, line 247:\n    class PyInt8Array(PyTypedArray):';
		$m.__track_lines__[252] = 'pyjsdl.pyjsarray.py, line 252:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[253] = 'pyjsdl.pyjsarray.py, line 253:\n    try:';
		$m.__track_lines__[254] = 'pyjsdl.pyjsarray.py, line 254:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Int8Array)';
		$m.__track_lines__[256] = 'pyjsdl.pyjsarray.py, line 256:\n    if isUndefined(typedarray):';
		$m.__track_lines__[257] = 'pyjsdl.pyjsarray.py, line 257:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[259] = 'pyjsdl.pyjsarray.py, line 259:\n    raise';
		$m.__track_lines__[262] = 'pyjsdl.pyjsarray.py, line 262:\n    class PyInt16Array(PyTypedArray):';
		$m.__track_lines__[267] = 'pyjsdl.pyjsarray.py, line 267:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[268] = 'pyjsdl.pyjsarray.py, line 268:\n    try:';
		$m.__track_lines__[269] = 'pyjsdl.pyjsarray.py, line 269:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Int16Array)';
		$m.__track_lines__[271] = 'pyjsdl.pyjsarray.py, line 271:\n    if isUndefined(typedarray):';
		$m.__track_lines__[272] = 'pyjsdl.pyjsarray.py, line 272:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[274] = 'pyjsdl.pyjsarray.py, line 274:\n    raise';
		$m.__track_lines__[277] = 'pyjsdl.pyjsarray.py, line 277:\n    class PyInt32Array(PyTypedArray):';
		$m.__track_lines__[282] = 'pyjsdl.pyjsarray.py, line 282:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[283] = 'pyjsdl.pyjsarray.py, line 283:\n    try:';
		$m.__track_lines__[284] = 'pyjsdl.pyjsarray.py, line 284:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Int32Array)';
		$m.__track_lines__[286] = 'pyjsdl.pyjsarray.py, line 286:\n    if isUndefined(typedarray):';
		$m.__track_lines__[287] = 'pyjsdl.pyjsarray.py, line 287:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[289] = 'pyjsdl.pyjsarray.py, line 289:\n    raise';
		$m.__track_lines__[292] = 'pyjsdl.pyjsarray.py, line 292:\n    class PyFloat32Array(PyTypedArray):';
		$m.__track_lines__[297] = 'pyjsdl.pyjsarray.py, line 297:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[298] = 'pyjsdl.pyjsarray.py, line 298:\n    try:';
		$m.__track_lines__[299] = 'pyjsdl.pyjsarray.py, line 299:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Float32Array)';
		$m.__track_lines__[301] = 'pyjsdl.pyjsarray.py, line 301:\n    if isUndefined(typedarray):';
		$m.__track_lines__[302] = 'pyjsdl.pyjsarray.py, line 302:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[304] = 'pyjsdl.pyjsarray.py, line 304:\n    raise';
		$m.__track_lines__[306] = 'pyjsdl.pyjsarray.py, line 306:\n    def __getitem__(self, index):';
		$m.__track_lines__[310] = 'pyjsdl.pyjsarray.py, line 310:\n    return JS("""@{{self}}[\'__data\'][@{{index}}];""")';
		$m.__track_lines__[313] = 'pyjsdl.pyjsarray.py, line 313:\n    class PyFloat64Array(PyTypedArray):';
		$m.__track_lines__[318] = 'pyjsdl.pyjsarray.py, line 318:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[319] = 'pyjsdl.pyjsarray.py, line 319:\n    try:';
		$m.__track_lines__[320] = 'pyjsdl.pyjsarray.py, line 320:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Float64Array)';
		$m.__track_lines__[322] = 'pyjsdl.pyjsarray.py, line 322:\n    if isUndefined(typedarray):';
		$m.__track_lines__[323] = 'pyjsdl.pyjsarray.py, line 323:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[325] = 'pyjsdl.pyjsarray.py, line 325:\n    raise';
		$m.__track_lines__[327] = 'pyjsdl.pyjsarray.py, line 327:\n    def __getitem__(self, index):';
		$m.__track_lines__[331] = 'pyjsdl.pyjsarray.py, line 331:\n    return JS("""@{{self}}[\'__data\'][@{{index}}];""")';
		$m.__track_lines__[334] = 'pyjsdl.pyjsarray.py, line 334:\n    class PyCanvasPixelArray(PyTypedArray):';
		$m.__track_lines__[339] = 'pyjsdl.pyjsarray.py, line 339:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[340] = 'pyjsdl.pyjsarray.py, line 340:\n    PyTypedArray.__init__(self, data, offset, length)';
		$m.__track_lines__[341] = 'pyjsdl.pyjsarray.py, line 341:\n    self._superArray = None';
		$m.__track_lines__[342] = 'pyjsdl.pyjsarray.py, line 342:\n    self._superIndex = (0,0)';
		$m.__track_lines__[344] = 'pyjsdl.pyjsarray.py, line 344:\n    def __iter__(self):';
		$m.__track_lines__[348] = 'pyjsdl.pyjsarray.py, line 348:\n    if not self._superArray:';
		$m.__track_lines__[349] = 'pyjsdl.pyjsarray.py, line 349:\n    PyTypedArray.__iter__(self)';
		$m.__track_lines__[351] = 'pyjsdl.pyjsarray.py, line 351:\n    index = self._superIndex[0]';
		$m.__track_lines__[352] = 'pyjsdl.pyjsarray.py, line 352:\n    while index < self._superIndex[1]:';
		$m.__track_lines__[353] = 'pyjsdl.pyjsarray.py, line 353:\n    yield self._superArray[index]';
		$m.__track_lines__[354] = 'pyjsdl.pyjsarray.py, line 354:\n    index += 1';
		$m.__track_lines__[356] = 'pyjsdl.pyjsarray.py, line 356:\n    def __getitem__(self, index):';
		$m.__track_lines__[360] = 'pyjsdl.pyjsarray.py, line 360:\n    if not self._superArray:';
		$m.__track_lines__[361] = 'pyjsdl.pyjsarray.py, line 361:\n    return PyTypedArray.__getitem__(self, index)';
		$m.__track_lines__[363] = 'pyjsdl.pyjsarray.py, line 363:\n    return self._superArray.__getitem__(index+self._superIndex[0])';
		$m.__track_lines__[365] = 'pyjsdl.pyjsarray.py, line 365:\n    def __setitem__(self, index, value):';
		$m.__track_lines__[369] = 'pyjsdl.pyjsarray.py, line 369:\n    if not self._superArray:';
		$m.__track_lines__[370] = 'pyjsdl.pyjsarray.py, line 370:\n    PyTypedArray.__setitem__(self, index, value)';
		$m.__track_lines__[372] = 'pyjsdl.pyjsarray.py, line 372:\n    self._superArray.__setitem__(index+self._superIndex[0], value)';
		$m.__track_lines__[373] = 'pyjsdl.pyjsarray.py, line 373:\n    return None';
		$m.__track_lines__[375] = 'pyjsdl.pyjsarray.py, line 375:\n    def set(self, data, offset=0):';
		$m.__track_lines__[379] = 'pyjsdl.pyjsarray.py, line 379:\n    if not self._superArray:';
		$m.__track_lines__[380] = 'pyjsdl.pyjsarray.py, line 380:\n    for index in xrange(len(data)):';
		$m.__track_lines__[381] = 'pyjsdl.pyjsarray.py, line 381:\n    self[index+offset] = data[index]';
		$m.__track_lines__[383] = 'pyjsdl.pyjsarray.py, line 383:\n    self._superArray.set(data, offset+self._superIndex[0])';
		$m.__track_lines__[385] = 'pyjsdl.pyjsarray.py, line 385:\n    def subarray(self, begin, end=None):';
		$m.__track_lines__[389] = 'pyjsdl.pyjsarray.py, line 389:\n    if end is None:';
		$m.__track_lines__[390] = 'pyjsdl.pyjsarray.py, line 390:\n    end = self.__data.length';
		$m.__track_lines__[391] = 'pyjsdl.pyjsarray.py, line 391:\n    array = self.__class__()';
		$m.__track_lines__[392] = 'pyjsdl.pyjsarray.py, line 392:\n    array.__data = self.__data';
		$m.__track_lines__[393] = 'pyjsdl.pyjsarray.py, line 393:\n    array._superArray = self';
		$m.__track_lines__[394] = 'pyjsdl.pyjsarray.py, line 394:\n    array._superIndex = (begin,end)';
		$m.__track_lines__[395] = 'pyjsdl.pyjsarray.py, line 395:\n    return array';
		$m.__track_lines__[398] = 'pyjsdl.pyjsarray.py, line 398:\n    class Ndarray:';
		$m.__track_lines__[400] = 'pyjsdl.pyjsarray.py, line 400:\n    __typedarray = {0: PyUint8ClampedArray,';
		$m.__track_lines__[410] = 'pyjsdl.pyjsarray.py, line 410:\n    def __init__(self, dim, dtype=8):';
		$m.__track_lines__[425] = 'pyjsdl.pyjsarray.py, line 425:\n    self._dtype = dtype';
		$m.__track_lines__[426] = 'pyjsdl.pyjsarray.py, line 426:\n    if isinstance(dim, tuple):';
		$m.__track_lines__[427] = 'pyjsdl.pyjsarray.py, line 427:\n    size = 1';
		$m.__track_lines__[428] = 'pyjsdl.pyjsarray.py, line 428:\n    for i in dim:';
		$m.__track_lines__[429] = 'pyjsdl.pyjsarray.py, line 429:\n    size *= i';
		$m.__track_lines__[430] = 'pyjsdl.pyjsarray.py, line 430:\n    self.__data = Ndarray.__typedarray[dtype](size)';
		$m.__track_lines__[431] = 'pyjsdl.pyjsarray.py, line 431:\n    self._shape = dim';
		$m.__track_lines__[432] = 'pyjsdl.pyjsarray.py, line 432:\n    indices = []';
		$m.__track_lines__[433] = 'pyjsdl.pyjsarray.py, line 433:\n    for i in self._shape:';
		$m.__track_lines__[434] = 'pyjsdl.pyjsarray.py, line 434:\n    size /= i';
		$m.__track_lines__[435] = 'pyjsdl.pyjsarray.py, line 435:\n    indices.append(size)';
		$m.__track_lines__[436] = 'pyjsdl.pyjsarray.py, line 436:\n    self._indices = tuple(indices)';
		$m.__track_lines__[438] = 'pyjsdl.pyjsarray.py, line 438:\n    self.__data = Ndarray.__typedarray[dtype](dim)';
		$m.__track_lines__[439] = 'pyjsdl.pyjsarray.py, line 439:\n    self._shape = (dim,)';
		$m.__track_lines__[440] = 'pyjsdl.pyjsarray.py, line 440:\n    self._indices = (self._shape[0],)';
		$m.__track_lines__[442] = 'pyjsdl.pyjsarray.py, line 442:\n    self.__data = Ndarray.__typedarray[dtype](dim)';
		$m.__track_lines__[443] = 'pyjsdl.pyjsarray.py, line 443:\n    self._shape = (len(dim),)';
		$m.__track_lines__[444] = 'pyjsdl.pyjsarray.py, line 444:\n    self._indices = (self._shape[0],)';
		$m.__track_lines__[446] = 'pyjsdl.pyjsarray.py, line 446:\n    self.__data = dim';
		$m.__track_lines__[447] = 'pyjsdl.pyjsarray.py, line 447:\n    self._shape = (len(dim),)';
		$m.__track_lines__[448] = 'pyjsdl.pyjsarray.py, line 448:\n    self._indices = (self._shape[0],)';
		$m.__track_lines__[451] = 'pyjsdl.pyjsarray.py, line 450:\n    @property ... def shape(self):        #not implemented in pyjs -O';
		$m.__track_lines__[456] = 'pyjsdl.pyjsarray.py, line 456:\n    return self._shape';
		$m.__track_lines__[459] = 'pyjsdl.pyjsarray.py, line 458:\n    @shape.setter ... def shape(self, dim):    #not implemented in pyjs -O';
		$m.__track_lines__[466] = 'pyjsdl.pyjsarray.py, line 466:\n    self.setshape(dim)';
		$m.__track_lines__[467] = 'pyjsdl.pyjsarray.py, line 467:\n    return None';
		$m.__track_lines__[469] = 'pyjsdl.pyjsarray.py, line 469:\n    def __getitem__(self, index):';
		$m.__track_lines__[470] = "pyjsdl.pyjsarray.py, line 470:\n    if hasattr(index, '__len__'):";
		$m.__track_lines__[471] = 'pyjsdl.pyjsarray.py, line 471:\n    indexLn, shapeLn = index.__len__(), len(self._shape)';
		$m.__track_lines__[472] = 'pyjsdl.pyjsarray.py, line 472:\n    if indexLn == shapeLn:';
		$m.__track_lines__[473] = 'pyjsdl.pyjsarray.py, line 473:\n    return self.__data[sum([index[i]*self._indices[i] for i in range(indexLn)])]';
		$m.__track_lines__[475] = 'pyjsdl.pyjsarray.py, line 475:\n    begin = sum([index[i]*self._indices[i] for i in range(indexLn)])';
		$m.__track_lines__[476] = 'pyjsdl.pyjsarray.py, line 476:\n    end = begin + self._indices[indexLn-1]';
		$m.__track_lines__[477] = 'pyjsdl.pyjsarray.py, line 477:\n    subarray = self.__data.subarray(begin, end)';
		$m.__track_lines__[478] = 'pyjsdl.pyjsarray.py, line 478:\n    array = Ndarray(subarray, self._dtype)';
		$m.__track_lines__[479] = 'pyjsdl.pyjsarray.py, line 479:\n    array._shape = self._shape[indexLn:]';
		$m.__track_lines__[480] = 'pyjsdl.pyjsarray.py, line 480:\n    array._indices = self._indices[indexLn:]';
		$m.__track_lines__[481] = 'pyjsdl.pyjsarray.py, line 481:\n    return array';
		$m.__track_lines__[483] = 'pyjsdl.pyjsarray.py, line 483:\n    if len(self._shape) == 1:';
		$m.__track_lines__[484] = 'pyjsdl.pyjsarray.py, line 484:\n    return self.__data[index]';
		$m.__track_lines__[486] = 'pyjsdl.pyjsarray.py, line 486:\n    begin = index * self._indices[0]';
		$m.__track_lines__[487] = 'pyjsdl.pyjsarray.py, line 487:\n    end = begin + self._indices[0]';
		$m.__track_lines__[488] = 'pyjsdl.pyjsarray.py, line 488:\n    subarray = self.__data.subarray(begin, end)';
		$m.__track_lines__[489] = 'pyjsdl.pyjsarray.py, line 489:\n    array = Ndarray(subarray, self._dtype)';
		$m.__track_lines__[490] = 'pyjsdl.pyjsarray.py, line 490:\n    array._shape = self._shape[1:]';
		$m.__track_lines__[491] = 'pyjsdl.pyjsarray.py, line 491:\n    array._indices = self._indices[1:]';
		$m.__track_lines__[492] = 'pyjsdl.pyjsarray.py, line 492:\n    return array';
		$m.__track_lines__[494] = 'pyjsdl.pyjsarray.py, line 494:\n    def __setitem__(self, index, value):';
		$m.__track_lines__[495] = 'pyjsdl.pyjsarray.py, line 495:\n    def unpack(obj, lst=None):';
		$m.__track_lines__[496] = 'pyjsdl.pyjsarray.py, line 496:\n    if lst is None:';
		$m.__track_lines__[497] = 'pyjsdl.pyjsarray.py, line 497:\n    lst = []';
		$m.__track_lines__[498] = 'pyjsdl.pyjsarray.py, line 498:\n    for element in obj:';
		$m.__track_lines__[499] = 'pyjsdl.pyjsarray.py, line 499:\n    if isinstance(element, (list,tuple)):';
		$m.__track_lines__[500] = 'pyjsdl.pyjsarray.py, line 500:\n    unpack(element, lst)';
		$m.__track_lines__[502] = 'pyjsdl.pyjsarray.py, line 502:\n    lst.append(element)';
		$m.__track_lines__[503] = 'pyjsdl.pyjsarray.py, line 503:\n    return lst';
		$m.__track_lines__[504] = "pyjsdl.pyjsarray.py, line 504:\n    if hasattr(index, '__len__'):";
		$m.__track_lines__[505] = 'pyjsdl.pyjsarray.py, line 505:\n    indexLn, shapeLn = index.__len__(), len(self._shape)';
		$m.__track_lines__[506] = 'pyjsdl.pyjsarray.py, line 506:\n    if indexLn == shapeLn:';
		$m.__track_lines__[507] = 'pyjsdl.pyjsarray.py, line 507:\n    self.__data[sum([index[i]*self._indices[i] for i in range(indexLn)])] = value';
		$m.__track_lines__[509] = 'pyjsdl.pyjsarray.py, line 509:\n    begin = sum([index[i]*self._indices[i] for i in range(indexLn)])';
		$m.__track_lines__[510] = 'pyjsdl.pyjsarray.py, line 510:\n    end = begin + self._indices[indexLn-1]';
		$m.__track_lines__[511] = 'pyjsdl.pyjsarray.py, line 511:\n    subarray = self.__data.subarray(begin, end)';
		$m.__track_lines__[512] = 'pyjsdl.pyjsarray.py, line 512:\n    if isinstance(value, Ndarray):';
		$m.__track_lines__[513] = 'pyjsdl.pyjsarray.py, line 513:\n    value = value.__data';
		$m.__track_lines__[515] = 'pyjsdl.pyjsarray.py, line 515:\n    if isinstance(value[0], (list,tuple)):';
		$m.__track_lines__[516] = 'pyjsdl.pyjsarray.py, line 516:\n    value = unpack(value)';
		$m.__track_lines__[517] = 'pyjsdl.pyjsarray.py, line 517:\n    subarray.set(value)';
		$m.__track_lines__[519] = 'pyjsdl.pyjsarray.py, line 519:\n    if len(self._shape) == 1:';
		$m.__track_lines__[520] = 'pyjsdl.pyjsarray.py, line 520:\n    self.__data[index] = value';
		$m.__track_lines__[522] = 'pyjsdl.pyjsarray.py, line 522:\n    begin = index * self._indices[0]';
		$m.__track_lines__[523] = 'pyjsdl.pyjsarray.py, line 523:\n    end = begin + self._indices[0]';
		$m.__track_lines__[524] = 'pyjsdl.pyjsarray.py, line 524:\n    subarray = self.__data.subarray(begin, end)';
		$m.__track_lines__[525] = 'pyjsdl.pyjsarray.py, line 525:\n    if isinstance(value, Ndarray):';
		$m.__track_lines__[526] = 'pyjsdl.pyjsarray.py, line 526:\n    value = value.__data';
		$m.__track_lines__[528] = 'pyjsdl.pyjsarray.py, line 528:\n    if isinstance(value[0], (list,tuple)):';
		$m.__track_lines__[529] = 'pyjsdl.pyjsarray.py, line 529:\n    value = unpack(value)';
		$m.__track_lines__[530] = 'pyjsdl.pyjsarray.py, line 530:\n    subarray.set(value)';
		$m.__track_lines__[531] = 'pyjsdl.pyjsarray.py, line 531:\n    return None';
		$m.__track_lines__[533] = 'pyjsdl.pyjsarray.py, line 533:\n    def __getslice__(self, lower, upper):';
		$m.__track_lines__[534] = 'pyjsdl.pyjsarray.py, line 534:\n    subarray = self.__data.subarray(lower, upper)';
		$m.__track_lines__[535] = 'pyjsdl.pyjsarray.py, line 535:\n    return Ndarray(subarray, self._dtype)';
		$m.__track_lines__[537] = 'pyjsdl.pyjsarray.py, line 537:\n    def __setslice__(self, lower, upper, data):';
		$m.__track_lines__[538] = 'pyjsdl.pyjsarray.py, line 538:\n    subarray = self.__data.subarray(lower, upper)';
		$m.__track_lines__[539] = 'pyjsdl.pyjsarray.py, line 539:\n    subarray.set(data)';
		$m.__track_lines__[540] = 'pyjsdl.pyjsarray.py, line 540:\n    return None';
		$m.__track_lines__[542] = 'pyjsdl.pyjsarray.py, line 542:\n    def __iter__(self):';
		$m.__track_lines__[543] = 'pyjsdl.pyjsarray.py, line 543:\n    if len(self._shape) > 1:';
		$m.__track_lines__[544] = 'pyjsdl.pyjsarray.py, line 544:\n    index = 0';
		$m.__track_lines__[545] = 'pyjsdl.pyjsarray.py, line 545:\n    while index < self._shape[0]:';
		$m.__track_lines__[546] = 'pyjsdl.pyjsarray.py, line 546:\n    begin = index * self._indices[0]';
		$m.__track_lines__[547] = 'pyjsdl.pyjsarray.py, line 547:\n    end = begin + self._indices[0]';
		$m.__track_lines__[548] = 'pyjsdl.pyjsarray.py, line 548:\n    subarray = self.__data.subarray(begin, end)';
		$m.__track_lines__[549] = 'pyjsdl.pyjsarray.py, line 549:\n    array = Ndarray(subarray, self._dtype)';
		$m.__track_lines__[550] = 'pyjsdl.pyjsarray.py, line 550:\n    array._shape = self._shape[1:]';
		$m.__track_lines__[551] = 'pyjsdl.pyjsarray.py, line 551:\n    array._indices = self._indices[1:]';
		$m.__track_lines__[552] = 'pyjsdl.pyjsarray.py, line 552:\n    yield array';
		$m.__track_lines__[553] = 'pyjsdl.pyjsarray.py, line 553:\n    index += 1';
		$m.__track_lines__[555] = 'pyjsdl.pyjsarray.py, line 555:\n    index = 0';
		$m.__track_lines__[556] = 'pyjsdl.pyjsarray.py, line 556:\n    while index < self._shape[0]:';
		$m.__track_lines__[557] = 'pyjsdl.pyjsarray.py, line 557:\n    yield self.__data[index]';
		$m.__track_lines__[558] = 'pyjsdl.pyjsarray.py, line 558:\n    index += 1';
		$m.__track_lines__[560] = 'pyjsdl.pyjsarray.py, line 560:\n    def __str__(self):';
		$m.__track_lines__[561] = 'pyjsdl.pyjsarray.py, line 561:\n    def array_str(array, width, strval):';
		$m.__track_lines__[562] = 'pyjsdl.pyjsarray.py, line 562:\n    alst = []';
		$m.__track_lines__[563] = 'pyjsdl.pyjsarray.py, line 563:\n    if len(array._shape) == 1:';
		$m.__track_lines__[564] = "pyjsdl.pyjsarray.py, line 564:\n    alst.append('[')";
		$m.__track_lines__[565] = 'pyjsdl.pyjsarray.py, line 565:\n    alst.extend([strval % (width,val) for val in array])';
		$m.__track_lines__[568] = 'pyjsdl.pyjsarray.py, line 568:\n    alst[-1] = alst[-1].rstrip()';
		$m.__track_lines__[569] = "pyjsdl.pyjsarray.py, line 569:\n    alst.append(']')";
		$m.__track_lines__[571] = "pyjsdl.pyjsarray.py, line 571:\n    alst.append('[')";
		$m.__track_lines__[572] = 'pyjsdl.pyjsarray.py, line 572:\n    for a in array:';
		$m.__track_lines__[573] = 'pyjsdl.pyjsarray.py, line 573:\n    alst.extend( array_str(a,width,strval) )';
		$m.__track_lines__[574] = "pyjsdl.pyjsarray.py, line 574:\n    alst.append(']')";
		$m.__track_lines__[575] = 'pyjsdl.pyjsarray.py, line 575:\n    return alst';
		$m.__track_lines__[576] = 'pyjsdl.pyjsarray.py, line 576:\n    if self._dtype < 7:';
		$m.__track_lines__[577] = 'pyjsdl.pyjsarray.py, line 577:\n    alst = array_str(self, len(str( max([i for i in self.__data]) )), "%*d ")';
		$m.__track_lines__[579] = 'pyjsdl.pyjsarray.py, line 579:\n    alst = array_str(self, len(str( max([i for i in self.__data]) ))+7, "%*f ")';
		$m.__track_lines__[580] = 'pyjsdl.pyjsarray.py, line 580:\n    tab = len(self._shape)';
		$m.__track_lines__[581] = 'pyjsdl.pyjsarray.py, line 581:\n    i = tab';
		$m.__track_lines__[582] = 'pyjsdl.pyjsarray.py, line 582:\n    while True:';
		$m.__track_lines__[583] = 'pyjsdl.pyjsarray.py, line 583:\n    try:';
		$m.__track_lines__[584] = "pyjsdl.pyjsarray.py, line 584:\n    i = alst.index('[', i)";
		$m.__track_lines__[586] = 'pyjsdl.pyjsarray.py, line 586:\n    break';
		$m.__track_lines__[587] = 'pyjsdl.pyjsarray.py, line 587:\n    count = 0';
		$m.__track_lines__[588] = 'pyjsdl.pyjsarray.py, line 588:\n    while True:';
		$m.__track_lines__[589] = "pyjsdl.pyjsarray.py, line 589:\n    if alst[i+count] == '[':";
		$m.__track_lines__[590] = 'pyjsdl.pyjsarray.py, line 590:\n    count += 1';
		$m.__track_lines__[591] = 'pyjsdl.pyjsarray.py, line 591:\n    continue';
		$m.__track_lines__[593] = "pyjsdl.pyjsarray.py, line 593:\n    if count == 1:      #pyjs-O ' '*n > NaN";
		$m.__track_lines__[594] = "pyjsdl.pyjsarray.py, line 594:\n    alst[i] = '\\n'+''.join([' ' for x in range(tab-count)])+alst[i]";
		$m.__track_lines__[596] = "pyjsdl.pyjsarray.py, line 596:\n    alst[i] = '\\n\\n'+''.join([' ' for x in range(tab-count)])+alst[i]";
		$m.__track_lines__[597] = 'pyjsdl.pyjsarray.py, line 597:\n    i += count';
		$m.__track_lines__[598] = 'pyjsdl.pyjsarray.py, line 598:\n    break';
		$m.__track_lines__[599] = "pyjsdl.pyjsarray.py, line 599:\n    return ''.join(alst)";
		$m.__track_lines__[601] = 'pyjsdl.pyjsarray.py, line 601:\n    def __len__(self):';
		$m.__track_lines__[602] = 'pyjsdl.pyjsarray.py, line 602:\n    return self._shape[0]';
		$m.__track_lines__[604] = 'pyjsdl.pyjsarray.py, line 604:\n    def __add__(self, other):';
		$m.__track_lines__[605] = 'pyjsdl.pyjsarray.py, line 605:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[606] = 'pyjsdl.pyjsarray.py, line 606:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[607] = 'pyjsdl.pyjsarray.py, line 607:\n    ndarray._shape = self._shape';
		$m.__track_lines__[608] = 'pyjsdl.pyjsarray.py, line 608:\n    ndarray._indices = self._indices';
		$m.__track_lines__[609] = "pyjsdl.pyjsarray.py, line 609:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[610] = 'pyjsdl.pyjsarray.py, line 610:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[611] = 'pyjsdl.pyjsarray.py, line 611:\n    ndarray.__data[i] = ndarray.__data[i] + other';
		$m.__track_lines__[613] = 'pyjsdl.pyjsarray.py, line 613:\n    if ndarray._shape == other._shape:';
		$m.__track_lines__[614] = 'pyjsdl.pyjsarray.py, line 614:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[615] = 'pyjsdl.pyjsarray.py, line 615:\n    ndarray.__data[i] = ndarray.__data[i] + other.__data[i]';
		$m.__track_lines__[617] = 'pyjsdl.pyjsarray.py, line 617:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[618] = 'pyjsdl.pyjsarray.py, line 618:\n    return ndarray';
		$m.__track_lines__[620] = 'pyjsdl.pyjsarray.py, line 620:\n    def __sub__(self, other):';
		$m.__track_lines__[621] = 'pyjsdl.pyjsarray.py, line 621:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[622] = 'pyjsdl.pyjsarray.py, line 622:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[623] = 'pyjsdl.pyjsarray.py, line 623:\n    ndarray._shape = self._shape';
		$m.__track_lines__[624] = 'pyjsdl.pyjsarray.py, line 624:\n    ndarray._indices = self._indices';
		$m.__track_lines__[625] = "pyjsdl.pyjsarray.py, line 625:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[626] = 'pyjsdl.pyjsarray.py, line 626:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[627] = 'pyjsdl.pyjsarray.py, line 627:\n    ndarray.__data[i] = ndarray.__data[i] - other';
		$m.__track_lines__[629] = 'pyjsdl.pyjsarray.py, line 629:\n    if ndarray._shape == other._shape:';
		$m.__track_lines__[630] = 'pyjsdl.pyjsarray.py, line 630:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[631] = 'pyjsdl.pyjsarray.py, line 631:\n    ndarray.__data[i] = ndarray.__data[i] - other.__data[i]';
		$m.__track_lines__[633] = 'pyjsdl.pyjsarray.py, line 633:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[634] = 'pyjsdl.pyjsarray.py, line 634:\n    return ndarray';
		$m.__track_lines__[636] = 'pyjsdl.pyjsarray.py, line 636:\n    def __mul__(self, other):';
		$m.__track_lines__[637] = 'pyjsdl.pyjsarray.py, line 637:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[638] = 'pyjsdl.pyjsarray.py, line 638:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[639] = 'pyjsdl.pyjsarray.py, line 639:\n    ndarray._shape = self._shape';
		$m.__track_lines__[640] = 'pyjsdl.pyjsarray.py, line 640:\n    ndarray._indices = self._indices';
		$m.__track_lines__[641] = "pyjsdl.pyjsarray.py, line 641:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[642] = 'pyjsdl.pyjsarray.py, line 642:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[643] = 'pyjsdl.pyjsarray.py, line 643:\n    ndarray.__data[i] = ndarray.__data[i] * other';
		$m.__track_lines__[645] = 'pyjsdl.pyjsarray.py, line 645:\n    if ndarray._shape == other._shape:';
		$m.__track_lines__[646] = 'pyjsdl.pyjsarray.py, line 646:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[647] = 'pyjsdl.pyjsarray.py, line 647:\n    ndarray.__data[i] = ndarray.__data[i] * other.__data[i]';
		$m.__track_lines__[649] = 'pyjsdl.pyjsarray.py, line 649:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[650] = 'pyjsdl.pyjsarray.py, line 650:\n    return ndarray';
		$m.__track_lines__[652] = 'pyjsdl.pyjsarray.py, line 652:\n    def __div__(self, other):';
		$m.__track_lines__[653] = 'pyjsdl.pyjsarray.py, line 653:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[654] = 'pyjsdl.pyjsarray.py, line 654:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[655] = 'pyjsdl.pyjsarray.py, line 655:\n    ndarray._shape = self._shape';
		$m.__track_lines__[656] = 'pyjsdl.pyjsarray.py, line 656:\n    ndarray._indices = self._indices';
		$m.__track_lines__[657] = "pyjsdl.pyjsarray.py, line 657:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[658] = 'pyjsdl.pyjsarray.py, line 658:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[659] = 'pyjsdl.pyjsarray.py, line 659:\n    ndarray.__data[i] = ndarray.__data[i] / other';
		$m.__track_lines__[661] = 'pyjsdl.pyjsarray.py, line 661:\n    if ndarray._shape == other._shape:';
		$m.__track_lines__[662] = 'pyjsdl.pyjsarray.py, line 662:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[663] = 'pyjsdl.pyjsarray.py, line 663:\n    ndarray.__data[i] = ndarray.__data[i] / other.__data[i]';
		$m.__track_lines__[665] = 'pyjsdl.pyjsarray.py, line 665:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[666] = 'pyjsdl.pyjsarray.py, line 666:\n    return ndarray';
		$m.__track_lines__[668] = 'pyjsdl.pyjsarray.py, line 668:\n    def add(self, other):';
		$m.__track_lines__[674] = 'pyjsdl.pyjsarray.py, line 674:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[675] = 'pyjsdl.pyjsarray.py, line 675:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[676] = 'pyjsdl.pyjsarray.py, line 676:\n    ndarray._shape = self._shape';
		$m.__track_lines__[677] = 'pyjsdl.pyjsarray.py, line 677:\n    ndarray._indices = self._indices';
		$m.__track_lines__[678] = "pyjsdl.pyjsarray.py, line 678:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[679] = 'pyjsdl.pyjsarray.py, line 679:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[680] = 'pyjsdl.pyjsarray.py, line 680:\n    ndarray.__data[i] = ndarray.__data[i] + other';
		$m.__track_lines__[682] = 'pyjsdl.pyjsarray.py, line 682:\n    if ndarray._shape == other._shape:';
		$m.__track_lines__[683] = 'pyjsdl.pyjsarray.py, line 683:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[684] = 'pyjsdl.pyjsarray.py, line 684:\n    ndarray.__data[i] = ndarray.__data[i] + other.__data[i]';
		$m.__track_lines__[686] = 'pyjsdl.pyjsarray.py, line 686:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[687] = 'pyjsdl.pyjsarray.py, line 687:\n    return ndarray';
		$m.__track_lines__[689] = 'pyjsdl.pyjsarray.py, line 689:\n    def sub(self, other):';
		$m.__track_lines__[695] = 'pyjsdl.pyjsarray.py, line 695:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[696] = 'pyjsdl.pyjsarray.py, line 696:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[697] = 'pyjsdl.pyjsarray.py, line 697:\n    ndarray._shape = self._shape';
		$m.__track_lines__[698] = 'pyjsdl.pyjsarray.py, line 698:\n    ndarray._indices = self._indices';
		$m.__track_lines__[699] = "pyjsdl.pyjsarray.py, line 699:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[700] = 'pyjsdl.pyjsarray.py, line 700:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[701] = 'pyjsdl.pyjsarray.py, line 701:\n    ndarray.__data[i] = ndarray.__data[i] - other';
		$m.__track_lines__[703] = 'pyjsdl.pyjsarray.py, line 703:\n    if ndarray._shape == other._shape:';
		$m.__track_lines__[704] = 'pyjsdl.pyjsarray.py, line 704:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[705] = 'pyjsdl.pyjsarray.py, line 705:\n    ndarray.__data[i] = ndarray.__data[i] - other.__data[i]';
		$m.__track_lines__[707] = 'pyjsdl.pyjsarray.py, line 707:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[708] = 'pyjsdl.pyjsarray.py, line 708:\n    return ndarray';
		$m.__track_lines__[710] = 'pyjsdl.pyjsarray.py, line 710:\n    def mul(self, other):';
		$m.__track_lines__[716] = 'pyjsdl.pyjsarray.py, line 716:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[717] = 'pyjsdl.pyjsarray.py, line 717:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[718] = 'pyjsdl.pyjsarray.py, line 718:\n    ndarray._shape = self._shape';
		$m.__track_lines__[719] = 'pyjsdl.pyjsarray.py, line 719:\n    ndarray._indices = self._indices';
		$m.__track_lines__[720] = "pyjsdl.pyjsarray.py, line 720:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[721] = 'pyjsdl.pyjsarray.py, line 721:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[722] = 'pyjsdl.pyjsarray.py, line 722:\n    ndarray.__data[i] = ndarray.__data[i] * other';
		$m.__track_lines__[724] = 'pyjsdl.pyjsarray.py, line 724:\n    if ndarray._shape == other._shape:';
		$m.__track_lines__[725] = 'pyjsdl.pyjsarray.py, line 725:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[726] = 'pyjsdl.pyjsarray.py, line 726:\n    ndarray.__data[i] = ndarray.__data[i] * other.__data[i]';
		$m.__track_lines__[728] = 'pyjsdl.pyjsarray.py, line 728:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[729] = 'pyjsdl.pyjsarray.py, line 729:\n    return ndarray';
		$m.__track_lines__[731] = 'pyjsdl.pyjsarray.py, line 731:\n    def div(self, other):';
		$m.__track_lines__[737] = 'pyjsdl.pyjsarray.py, line 737:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[738] = 'pyjsdl.pyjsarray.py, line 738:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[739] = 'pyjsdl.pyjsarray.py, line 739:\n    ndarray._shape = self._shape';
		$m.__track_lines__[740] = 'pyjsdl.pyjsarray.py, line 740:\n    ndarray._indices = self._indices';
		$m.__track_lines__[741] = "pyjsdl.pyjsarray.py, line 741:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[742] = 'pyjsdl.pyjsarray.py, line 742:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[743] = 'pyjsdl.pyjsarray.py, line 743:\n    ndarray.__data[i] = ndarray.__data[i] / other';
		$m.__track_lines__[745] = 'pyjsdl.pyjsarray.py, line 745:\n    if ndarray._shape == other._shape:';
		$m.__track_lines__[746] = 'pyjsdl.pyjsarray.py, line 746:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[747] = 'pyjsdl.pyjsarray.py, line 747:\n    ndarray.__data[i] = ndarray.__data[i] / other.__data[i]';
		$m.__track_lines__[749] = 'pyjsdl.pyjsarray.py, line 749:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[750] = 'pyjsdl.pyjsarray.py, line 750:\n    return ndarray';
		$m.__track_lines__[752] = 'pyjsdl.pyjsarray.py, line 752:\n    def iadd(self, other):';
		$m.__track_lines__[757] = "pyjsdl.pyjsarray.py, line 757:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[758] = 'pyjsdl.pyjsarray.py, line 758:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[759] = 'pyjsdl.pyjsarray.py, line 759:\n    self.__data[i] = self.__data[i] + other';
		$m.__track_lines__[761] = 'pyjsdl.pyjsarray.py, line 761:\n    if self._shape == other._shape:';
		$m.__track_lines__[762] = 'pyjsdl.pyjsarray.py, line 762:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[763] = 'pyjsdl.pyjsarray.py, line 763:\n    self.__data[i] = self.__data[i] + other.__data[i]';
		$m.__track_lines__[765] = 'pyjsdl.pyjsarray.py, line 765:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[766] = 'pyjsdl.pyjsarray.py, line 766:\n    return None';
		$m.__track_lines__[768] = 'pyjsdl.pyjsarray.py, line 768:\n    def isub(self, other):';
		$m.__track_lines__[773] = "pyjsdl.pyjsarray.py, line 773:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[774] = 'pyjsdl.pyjsarray.py, line 774:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[775] = 'pyjsdl.pyjsarray.py, line 775:\n    self.__data[i] = self.__data[i] - other';
		$m.__track_lines__[777] = 'pyjsdl.pyjsarray.py, line 777:\n    if self._shape == other._shape:';
		$m.__track_lines__[778] = 'pyjsdl.pyjsarray.py, line 778:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[779] = 'pyjsdl.pyjsarray.py, line 779:\n    self.__data[i] = self.__data[i] - other.__data[i]';
		$m.__track_lines__[781] = 'pyjsdl.pyjsarray.py, line 781:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[782] = 'pyjsdl.pyjsarray.py, line 782:\n    return None';
		$m.__track_lines__[784] = 'pyjsdl.pyjsarray.py, line 784:\n    def imul(self, other):';
		$m.__track_lines__[789] = "pyjsdl.pyjsarray.py, line 789:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[790] = 'pyjsdl.pyjsarray.py, line 790:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[791] = 'pyjsdl.pyjsarray.py, line 791:\n    self.__data[i] = self.__data[i] * other';
		$m.__track_lines__[793] = 'pyjsdl.pyjsarray.py, line 793:\n    if self._shape == other._shape:';
		$m.__track_lines__[794] = 'pyjsdl.pyjsarray.py, line 794:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[795] = 'pyjsdl.pyjsarray.py, line 795:\n    self.__data[i] = self.__data[i] * other.__data[i]';
		$m.__track_lines__[797] = 'pyjsdl.pyjsarray.py, line 797:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[798] = 'pyjsdl.pyjsarray.py, line 798:\n    return None';
		$m.__track_lines__[800] = 'pyjsdl.pyjsarray.py, line 800:\n    def idiv(self, other):';
		$m.__track_lines__[805] = "pyjsdl.pyjsarray.py, line 805:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[806] = 'pyjsdl.pyjsarray.py, line 806:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[807] = 'pyjsdl.pyjsarray.py, line 807:\n    self.__data[i] = self.__data[i] / other';
		$m.__track_lines__[809] = 'pyjsdl.pyjsarray.py, line 809:\n    if self._shape == other._shape:';
		$m.__track_lines__[810] = 'pyjsdl.pyjsarray.py, line 810:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[811] = 'pyjsdl.pyjsarray.py, line 811:\n    self.__data[i] = self.__data[i] / other.__data[i]';
		$m.__track_lines__[813] = 'pyjsdl.pyjsarray.py, line 813:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[814] = 'pyjsdl.pyjsarray.py, line 814:\n    return None';
		$m.__track_lines__[816] = 'pyjsdl.pyjsarray.py, line 816:\n    def bitwise_and(self, other):';
		$m.__track_lines__[822] = 'pyjsdl.pyjsarray.py, line 822:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[823] = 'pyjsdl.pyjsarray.py, line 823:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[824] = 'pyjsdl.pyjsarray.py, line 824:\n    ndarray._shape = self._shape';
		$m.__track_lines__[825] = 'pyjsdl.pyjsarray.py, line 825:\n    ndarray._indices = self._indices';
		$m.__track_lines__[826] = "pyjsdl.pyjsarray.py, line 826:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[827] = 'pyjsdl.pyjsarray.py, line 827:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[828] = 'pyjsdl.pyjsarray.py, line 828:\n    ndarray.__data[i] = ndarray.__data[i] & other';
		$m.__track_lines__[830] = 'pyjsdl.pyjsarray.py, line 830:\n    if ndarray._shape == other._shape:';
		$m.__track_lines__[831] = 'pyjsdl.pyjsarray.py, line 831:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[832] = 'pyjsdl.pyjsarray.py, line 832:\n    ndarray.__data[i] = ndarray.__data[i] & other.__data[i]';
		$m.__track_lines__[834] = 'pyjsdl.pyjsarray.py, line 834:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[835] = 'pyjsdl.pyjsarray.py, line 835:\n    return ndarray';
		$m.__track_lines__[837] = 'pyjsdl.pyjsarray.py, line 837:\n    def bitwise_or(self, other):';
		$m.__track_lines__[843] = 'pyjsdl.pyjsarray.py, line 843:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[844] = 'pyjsdl.pyjsarray.py, line 844:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[845] = 'pyjsdl.pyjsarray.py, line 845:\n    ndarray._shape = self._shape';
		$m.__track_lines__[846] = 'pyjsdl.pyjsarray.py, line 846:\n    ndarray._indices = self._indices';
		$m.__track_lines__[847] = "pyjsdl.pyjsarray.py, line 847:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[848] = 'pyjsdl.pyjsarray.py, line 848:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[849] = 'pyjsdl.pyjsarray.py, line 849:\n    ndarray.__data[i] = ndarray.__data[i] | other';
		$m.__track_lines__[851] = 'pyjsdl.pyjsarray.py, line 851:\n    if ndarray._shape == other._shape:';
		$m.__track_lines__[852] = 'pyjsdl.pyjsarray.py, line 852:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[853] = 'pyjsdl.pyjsarray.py, line 853:\n    ndarray.__data[i] = ndarray.__data[i] | other.__data[i]';
		$m.__track_lines__[855] = 'pyjsdl.pyjsarray.py, line 855:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[856] = 'pyjsdl.pyjsarray.py, line 856:\n    return ndarray';
		$m.__track_lines__[858] = 'pyjsdl.pyjsarray.py, line 858:\n    def bitwise_xor(self, other):';
		$m.__track_lines__[864] = 'pyjsdl.pyjsarray.py, line 864:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[865] = 'pyjsdl.pyjsarray.py, line 865:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[866] = 'pyjsdl.pyjsarray.py, line 866:\n    ndarray._shape = self._shape';
		$m.__track_lines__[867] = 'pyjsdl.pyjsarray.py, line 867:\n    ndarray._indices = self._indices';
		$m.__track_lines__[868] = "pyjsdl.pyjsarray.py, line 868:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[869] = 'pyjsdl.pyjsarray.py, line 869:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[870] = 'pyjsdl.pyjsarray.py, line 870:\n    ndarray.__data[i] = ndarray.__data[i] ^ other';
		$m.__track_lines__[872] = 'pyjsdl.pyjsarray.py, line 872:\n    if ndarray._shape == other._shape:';
		$m.__track_lines__[873] = 'pyjsdl.pyjsarray.py, line 873:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[874] = 'pyjsdl.pyjsarray.py, line 874:\n    ndarray.__data[i] = ndarray.__data[i] ^ other.__data[i]';
		$m.__track_lines__[876] = 'pyjsdl.pyjsarray.py, line 876:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[877] = 'pyjsdl.pyjsarray.py, line 877:\n    return ndarray';
		$m.__track_lines__[879] = 'pyjsdl.pyjsarray.py, line 879:\n    def bitwise_iand(self, other):';
		$m.__track_lines__[884] = "pyjsdl.pyjsarray.py, line 884:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[885] = 'pyjsdl.pyjsarray.py, line 885:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[886] = 'pyjsdl.pyjsarray.py, line 886:\n    self.__data[i] = self.__data[i] & other';
		$m.__track_lines__[888] = 'pyjsdl.pyjsarray.py, line 888:\n    if self._shape == other._shape:';
		$m.__track_lines__[889] = 'pyjsdl.pyjsarray.py, line 889:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[890] = 'pyjsdl.pyjsarray.py, line 890:\n    self.__data[i] = self.__data[i] & other.__data[i]';
		$m.__track_lines__[892] = 'pyjsdl.pyjsarray.py, line 892:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[893] = 'pyjsdl.pyjsarray.py, line 893:\n    return None';
		$m.__track_lines__[895] = 'pyjsdl.pyjsarray.py, line 895:\n    def bitwise_ior(self, other):';
		$m.__track_lines__[900] = "pyjsdl.pyjsarray.py, line 900:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[901] = 'pyjsdl.pyjsarray.py, line 901:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[902] = 'pyjsdl.pyjsarray.py, line 902:\n    self.__data[i] = self.__data[i] | other';
		$m.__track_lines__[904] = 'pyjsdl.pyjsarray.py, line 904:\n    if self._shape == other._shape:';
		$m.__track_lines__[905] = 'pyjsdl.pyjsarray.py, line 905:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[906] = 'pyjsdl.pyjsarray.py, line 906:\n    self.__data[i] = self.__data[i] | other.__data[i]';
		$m.__track_lines__[908] = 'pyjsdl.pyjsarray.py, line 908:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[909] = 'pyjsdl.pyjsarray.py, line 909:\n    return None';
		$m.__track_lines__[911] = 'pyjsdl.pyjsarray.py, line 911:\n    def bitwise_ixor(self, other):';
		$m.__track_lines__[916] = "pyjsdl.pyjsarray.py, line 916:\n    if not hasattr(other, '__iter__'):";
		$m.__track_lines__[917] = 'pyjsdl.pyjsarray.py, line 917:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[918] = 'pyjsdl.pyjsarray.py, line 918:\n    self.__data[i] = self.__data[i] ^ other';
		$m.__track_lines__[920] = 'pyjsdl.pyjsarray.py, line 920:\n    if self._shape == other._shape:';
		$m.__track_lines__[921] = 'pyjsdl.pyjsarray.py, line 921:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[922] = 'pyjsdl.pyjsarray.py, line 922:\n    self.__data[i] = self.__data[i] ^ other.__data[i]';
		$m.__track_lines__[924] = 'pyjsdl.pyjsarray.py, line 924:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[925] = 'pyjsdl.pyjsarray.py, line 925:\n    return None';
		$m.__track_lines__[927] = 'pyjsdl.pyjsarray.py, line 927:\n    def bitwise_not(self):';
		$m.__track_lines__[932] = 'pyjsdl.pyjsarray.py, line 932:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[933] = 'pyjsdl.pyjsarray.py, line 933:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[934] = 'pyjsdl.pyjsarray.py, line 934:\n    ndarray._shape = self._shape';
		$m.__track_lines__[935] = 'pyjsdl.pyjsarray.py, line 935:\n    ndarray._indices = self._indices';
		$m.__track_lines__[936] = 'pyjsdl.pyjsarray.py, line 936:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[937] = 'pyjsdl.pyjsarray.py, line 937:\n    ndarray.__data[i] = ~self.__data[i]';
		$m.__track_lines__[938] = 'pyjsdl.pyjsarray.py, line 938:\n    return ndarray';
		$m.__track_lines__[940] = 'pyjsdl.pyjsarray.py, line 940:\n    def setshape(self, *dim):';
		$m.__track_lines__[947] = 'pyjsdl.pyjsarray.py, line 947:\n    if isinstance(dim[0], tuple):';
		$m.__track_lines__[948] = 'pyjsdl.pyjsarray.py, line 948:\n    dim = dim[0]';
		$m.__track_lines__[949] = 'pyjsdl.pyjsarray.py, line 949:\n    size = 1';
		$m.__track_lines__[950] = 'pyjsdl.pyjsarray.py, line 950:\n    for i in dim:';
		$m.__track_lines__[951] = 'pyjsdl.pyjsarray.py, line 951:\n    size *= i';
		$m.__track_lines__[952] = 'pyjsdl.pyjsarray.py, line 952:\n    array_size = 1';
		$m.__track_lines__[953] = 'pyjsdl.pyjsarray.py, line 953:\n    for i in self._shape:';
		$m.__track_lines__[954] = 'pyjsdl.pyjsarray.py, line 954:\n    array_size *= i';
		$m.__track_lines__[955] = 'pyjsdl.pyjsarray.py, line 955:\n    if size != array_size:';
		$m.__track_lines__[956] = 'pyjsdl.pyjsarray.py, line 956:\n    raise TypeError("array size cannot change")';
		$m.__track_lines__[957] = 'pyjsdl.pyjsarray.py, line 957:\n    self._shape = dim';
		$m.__track_lines__[958] = 'pyjsdl.pyjsarray.py, line 958:\n    indices = []';
		$m.__track_lines__[959] = 'pyjsdl.pyjsarray.py, line 959:\n    for i in self._shape:';
		$m.__track_lines__[960] = 'pyjsdl.pyjsarray.py, line 960:\n    size /= i';
		$m.__track_lines__[961] = 'pyjsdl.pyjsarray.py, line 961:\n    indices.append(size)';
		$m.__track_lines__[962] = 'pyjsdl.pyjsarray.py, line 962:\n    self._indices = tuple(indices)';
		$m.__track_lines__[963] = 'pyjsdl.pyjsarray.py, line 963:\n    return None';
		$m.__track_lines__[965] = 'pyjsdl.pyjsarray.py, line 965:\n    def getshape(self):';
		$m.__track_lines__[970] = 'pyjsdl.pyjsarray.py, line 970:\n    return self._shape';
		$m.__track_lines__[972] = 'pyjsdl.pyjsarray.py, line 972:\n    def reshape(self, dim):';
		$m.__track_lines__[978] = 'pyjsdl.pyjsarray.py, line 978:\n    size = 1';
		$m.__track_lines__[979] = 'pyjsdl.pyjsarray.py, line 979:\n    for i in dim:';
		$m.__track_lines__[980] = 'pyjsdl.pyjsarray.py, line 980:\n    size *= i';
		$m.__track_lines__[981] = 'pyjsdl.pyjsarray.py, line 981:\n    array_size = 1';
		$m.__track_lines__[982] = 'pyjsdl.pyjsarray.py, line 982:\n    for i in self._shape:';
		$m.__track_lines__[983] = 'pyjsdl.pyjsarray.py, line 983:\n    array_size *= i';
		$m.__track_lines__[984] = 'pyjsdl.pyjsarray.py, line 984:\n    if size != array_size:';
		$m.__track_lines__[985] = 'pyjsdl.pyjsarray.py, line 985:\n    raise TypeError("array size cannot change")';
		$m.__track_lines__[986] = 'pyjsdl.pyjsarray.py, line 986:\n    subarray = self.__data.subarray(0)';
		$m.__track_lines__[987] = 'pyjsdl.pyjsarray.py, line 987:\n    array = Ndarray(subarray)';
		$m.__track_lines__[988] = 'pyjsdl.pyjsarray.py, line 988:\n    array._shape = dim';
		$m.__track_lines__[989] = 'pyjsdl.pyjsarray.py, line 989:\n    indices = []';
		$m.__track_lines__[990] = 'pyjsdl.pyjsarray.py, line 990:\n    for i in array._shape:';
		$m.__track_lines__[991] = 'pyjsdl.pyjsarray.py, line 991:\n    size /= i';
		$m.__track_lines__[992] = 'pyjsdl.pyjsarray.py, line 992:\n    indices.append(size)';
		$m.__track_lines__[993] = 'pyjsdl.pyjsarray.py, line 993:\n    array._indices = tuple(indices)';
		$m.__track_lines__[994] = 'pyjsdl.pyjsarray.py, line 994:\n    return array';
		$m.__track_lines__[996] = 'pyjsdl.pyjsarray.py, line 996:\n    def set(self, data):';
		$m.__track_lines__[1001] = 'pyjsdl.pyjsarray.py, line 1001:\n    if isinstance(data, (list,tuple)):';
		$m.__track_lines__[1002] = 'pyjsdl.pyjsarray.py, line 1002:\n    if pyjs_mode.optimized:';
		$m.__track_lines__[1003] = 'pyjsdl.pyjsarray.py, line 1003:\n    if isinstance(data[0], (list,tuple,PyTypedArray)):';
		$m.__track_lines__[1004] = 'pyjsdl.pyjsarray.py, line 1004:\n    data = [value for dat in data for value in dat]';
		$m.__track_lines__[1006] = 'pyjsdl.pyjsarray.py, line 1006:\n    if not isinstance(data[0], (list,tuple,PyTypedArray)):';
		$m.__track_lines__[1007] = 'pyjsdl.pyjsarray.py, line 1007:\n    data = [dat.valueOf() for dat in data]';
		$m.__track_lines__[1009] = 'pyjsdl.pyjsarray.py, line 1009:\n    data = [value.valueOf() for dat in data for value in dat]';
		$m.__track_lines__[1010] = 'pyjsdl.pyjsarray.py, line 1010:\n    dataLn = len(data)';
		$m.__track_lines__[1011] = 'pyjsdl.pyjsarray.py, line 1011:\n    data = data.getArray()';
		$m.__track_lines__[1013] = 'pyjsdl.pyjsarray.py, line 1013:\n    data = data.getArray()';
		$m.__track_lines__[1014] = 'pyjsdl.pyjsarray.py, line 1014:\n    dataLn = data.length';
		$m.__track_lines__[1016] = 'pyjsdl.pyjsarray.py, line 1016:\n    if pyjs_mode.optimized:';
		$m.__track_lines__[1017] = 'pyjsdl.pyjsarray.py, line 1017:\n    for index in xrange(self.__data.__data.length):';
		$m.__track_lines__[1018] = 'pyjsdl.pyjsarray.py, line 1018:\n    JS("""@{{self}}[\'__data\'][\'__data\'][@{{index}}]=@{{data}};""")';
		$m.__track_lines__[1020] = 'pyjsdl.pyjsarray.py, line 1020:\n    data = data.valueOf()';
		$m.__track_lines__[1021] = 'pyjsdl.pyjsarray.py, line 1021:\n    for index in xrange(self.__data.__data.length):';
		$m.__track_lines__[1022] = 'pyjsdl.pyjsarray.py, line 1022:\n    JS("""@{{self}}[\'__data\'][\'__data\'][@{{index}}]=@{{data}};""")';
		$m.__track_lines__[1023] = 'pyjsdl.pyjsarray.py, line 1023:\n    return None';
		$m.__track_lines__[1024] = 'pyjsdl.pyjsarray.py, line 1024:\n    if dataLn == self.__data.__data.length:';
		$m.__track_lines__[1025] = 'pyjsdl.pyjsarray.py, line 1025:\n    for index in xrange(self.__data.__data.length):';
		$m.__track_lines__[1026] = 'pyjsdl.pyjsarray.py, line 1026:\n    JS("""@{{self}}[\'__data\'][\'__data\'][@{{index}}]=@{{data}}[@{{index}}];""")';
		$m.__track_lines__[1028] = 'pyjsdl.pyjsarray.py, line 1028:\n    for index in xrange(self.__data.__data.length):';
		$m.__track_lines__[1029] = 'pyjsdl.pyjsarray.py, line 1029:\n    JS("""@{{self}}[\'__data\'][\'__data\'][@{{index}}]=@{{data}}[@{{index}}%@{{dataLn}}];""")';
		$m.__track_lines__[1030] = 'pyjsdl.pyjsarray.py, line 1030:\n    return None';
		$m.__track_lines__[1032] = 'pyjsdl.pyjsarray.py, line 1032:\n    def fill(self, value):';
		$m.__track_lines__[1036] = 'pyjsdl.pyjsarray.py, line 1036:\n    if pyjs_mode.optimized:';
		$m.__track_lines__[1037] = 'pyjsdl.pyjsarray.py, line 1037:\n    for index in xrange(self.__data.__data.length):';
		$m.__track_lines__[1038] = 'pyjsdl.pyjsarray.py, line 1038:\n    JS("""@{{self}}[\'__data\'][\'__data\'][@{{index}}]=@{{value}};""")';
		$m.__track_lines__[1040] = 'pyjsdl.pyjsarray.py, line 1040:\n    value = value.valueOf()';
		$m.__track_lines__[1041] = 'pyjsdl.pyjsarray.py, line 1041:\n    for index in xrange(self.__data.__data.length):';
		$m.__track_lines__[1042] = 'pyjsdl.pyjsarray.py, line 1042:\n    JS("""@{{self}}[\'__data\'][\'__data\'][@{{index}}]=@{{value}};""")';
		$m.__track_lines__[1043] = 'pyjsdl.pyjsarray.py, line 1043:\n    return None';
		$m.__track_lines__[1045] = 'pyjsdl.pyjsarray.py, line 1045:\n    def copy(self):';
		$m.__track_lines__[1049] = 'pyjsdl.pyjsarray.py, line 1049:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[1050] = 'pyjsdl.pyjsarray.py, line 1050:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[1051] = 'pyjsdl.pyjsarray.py, line 1051:\n    ndarray._shape = self._shape';
		$m.__track_lines__[1052] = 'pyjsdl.pyjsarray.py, line 1052:\n    ndarray._indices = self._indices';
		$m.__track_lines__[1053] = 'pyjsdl.pyjsarray.py, line 1053:\n    return ndarray';
		$m.__track_lines__[1055] = 'pyjsdl.pyjsarray.py, line 1055:\n    def astype(self, dtype):';
		$m.__track_lines__[1060] = 'pyjsdl.pyjsarray.py, line 1060:\n    array = Ndarray.__typedarray[dtype](self.__data)';
		$m.__track_lines__[1061] = 'pyjsdl.pyjsarray.py, line 1061:\n    ndarray = Ndarray(array, dtype)';
		$m.__track_lines__[1062] = 'pyjsdl.pyjsarray.py, line 1062:\n    ndarray._shape = self._shape';
		$m.__track_lines__[1063] = 'pyjsdl.pyjsarray.py, line 1063:\n    ndarray._indices = self._indices';
		$m.__track_lines__[1064] = 'pyjsdl.pyjsarray.py, line 1064:\n    return ndarray';
		$m.__track_lines__[1066] = 'pyjsdl.pyjsarray.py, line 1066:\n    def view(self):';
		$m.__track_lines__[1070] = 'pyjsdl.pyjsarray.py, line 1070:\n    subarray = self.__data.subarray(0)';
		$m.__track_lines__[1071] = 'pyjsdl.pyjsarray.py, line 1071:\n    array = Ndarray(subarray)';
		$m.__track_lines__[1072] = 'pyjsdl.pyjsarray.py, line 1072:\n    array._shape = self._shape';
		$m.__track_lines__[1073] = 'pyjsdl.pyjsarray.py, line 1073:\n    array._indices = self._indices';
		$m.__track_lines__[1074] = 'pyjsdl.pyjsarray.py, line 1074:\n    return array';
		$m.__track_lines__[1076] = 'pyjsdl.pyjsarray.py, line 1076:\n    def swapaxes(self, axis1, axis2):';
		$m.__track_lines__[1082] = 'pyjsdl.pyjsarray.py, line 1082:\n    array = Ndarray(self.__data, self._dtype)';
		$m.__track_lines__[1083] = 'pyjsdl.pyjsarray.py, line 1083:\n    shape = list(self._shape)';
		$m.__track_lines__[1084] = 'pyjsdl.pyjsarray.py, line 1084:\n    shape[axis1], shape[axis2] = shape[axis2], shape[axis1]';
		$m.__track_lines__[1085] = 'pyjsdl.pyjsarray.py, line 1085:\n    array._shape = tuple(shape)';
		$m.__track_lines__[1086] = 'pyjsdl.pyjsarray.py, line 1086:\n    indices = list(self._indices)';
		$m.__track_lines__[1087] = 'pyjsdl.pyjsarray.py, line 1087:\n    indices[axis1], indices[axis2] = indices[axis2], indices[axis1]';
		$m.__track_lines__[1088] = 'pyjsdl.pyjsarray.py, line 1088:\n    array._indices = tuple(indices)';
		$m.__track_lines__[1089] = 'pyjsdl.pyjsarray.py, line 1089:\n    return array';
		$m.__track_lines__[1091] = 'pyjsdl.pyjsarray.py, line 1091:\n    def getArray(self):';
		$m.__track_lines__[1095] = 'pyjsdl.pyjsarray.py, line 1095:\n    return self.__data.getArray()';
		$m.__track_lines__[1098] = 'pyjsdl.pyjsarray.py, line 1098:\n    class NP:';
		$m.__track_lines__[1100] = 'pyjsdl.pyjsarray.py, line 1100:\n    def zeros(self, size, dtype):';
		$m.__track_lines__[1101] = "pyjsdl.pyjsarray.py, line 1101:\n    if dtype == 'i':";
		$m.__track_lines__[1102] = 'pyjsdl.pyjsarray.py, line 1102:\n    dtype = 3';
		$m.__track_lines__[1103] = 'pyjsdl.pyjsarray.py, line 1103:\n    return Ndarray(size, dtype)';
		$m.__track_lines__[1105] = 'pyjsdl.pyjsarray.py, line 1105:\n    def swapaxes(self, array, axis1, axis2):';
		$m.__track_lines__[1106] = 'pyjsdl.pyjsarray.py, line 1106:\n    return array.swapaxes(axis1, axis2)';
		$m.__track_lines__[1108] = 'pyjsdl.pyjsarray.py, line 1108:\n    def append(self, array, values):';
		$m.__track_lines__[1109] = 'pyjsdl.pyjsarray.py, line 1109:\n    if isinstance(values[0], (list,tuple,PyTypedArray)):';
		$m.__track_lines__[1110] = 'pyjsdl.pyjsarray.py, line 1110:\n    values = [value for dat in values for value in dat]';
		$m.__track_lines__[1111] = 'pyjsdl.pyjsarray.py, line 1111:\n    newarray = Ndarray(len(array)+len(values), array._dtype)';
		$m.__track_lines__[1112] = 'pyjsdl.pyjsarray.py, line 1112:\n    newarray.__data.set(array.__data)';
		$m.__track_lines__[1113] = 'pyjsdl.pyjsarray.py, line 1113:\n    newarray.__data.set(values, len(array))';
		$m.__track_lines__[1114] = 'pyjsdl.pyjsarray.py, line 1114:\n    return newarray';
		$m.__track_lines__[1116] = 'pyjsdl.pyjsarray.py, line 1116:\n    np = NP()';
		$m.__track_lines__[1119] = 'pyjsdl.pyjsarray.py, line 1119:\n    class PyImageData:';
		$m.__track_lines__[1121] = 'pyjsdl.pyjsarray.py, line 1121:\n    def __init__(self, imagedata):';
		$m.__track_lines__[1126] = 'pyjsdl.pyjsarray.py, line 1126:\n    self.__imagedata = imagedata';
		$m.__track_lines__[1127] = 'pyjsdl.pyjsarray.py, line 1127:\n    if not isUndefined(Uint8ClampedArray):';
		$m.__track_lines__[1128] = 'pyjsdl.pyjsarray.py, line 1128:\n    self.data = PyUint8ClampedArray()';
		$m.__track_lines__[1130] = 'pyjsdl.pyjsarray.py, line 1130:\n    self.data = PyCanvasPixelArray()';
		$m.__track_lines__[1131] = 'pyjsdl.pyjsarray.py, line 1131:\n    self.data.__data = imagedata.data';
		$m.__track_lines__[1132] = 'pyjsdl.pyjsarray.py, line 1132:\n    self.width = imagedata.width';
		$m.__track_lines__[1133] = 'pyjsdl.pyjsarray.py, line 1133:\n    self.height = imagedata.height';
		$m.__track_lines__[1135] = 'pyjsdl.pyjsarray.py, line 1135:\n    def getImageData(self):';
		$m.__track_lines__[1139] = 'pyjsdl.pyjsarray.py, line 1139:\n    return self.__imagedata';
		$m.__track_lines__[1142] = 'pyjsdl.pyjsarray.py, line 1142:\n    class PyImageMatrix(Ndarray):';
		$m.__track_lines__[1144] = 'pyjsdl.pyjsarray.py, line 1144:\n    def __init__(self, imagedata):';
		$m.__track_lines__[1149] = 'pyjsdl.pyjsarray.py, line 1149:\n    self.__imagedata = PyImageData(imagedata)';
		$m.__track_lines__[1150] = 'pyjsdl.pyjsarray.py, line 1150:\n    if isinstance(self.__imagedata.data, PyUint8ClampedArray):';
		$m.__track_lines__[1151] = 'pyjsdl.pyjsarray.py, line 1151:\n    Ndarray.__init__(self, self.__imagedata.data, 0)';
		$m.__track_lines__[1153] = 'pyjsdl.pyjsarray.py, line 1153:\n    Ndarray.__init__(self, self.__imagedata.data, 1)';
		$m.__track_lines__[1154] = 'pyjsdl.pyjsarray.py, line 1154:\n    self.setshape(self.__imagedata.height,self.__imagedata.width,4)';
		$m.__track_lines__[1156] = 'pyjsdl.pyjsarray.py, line 1156:\n    def getWidth(self):';
		$m.__track_lines__[1160] = 'pyjsdl.pyjsarray.py, line 1160:\n    return self.__imagedata.width';
		$m.__track_lines__[1162] = 'pyjsdl.pyjsarray.py, line 1162:\n    def getHeight(self):';
		$m.__track_lines__[1166] = 'pyjsdl.pyjsarray.py, line 1166:\n    return self.__imagedata.height';
		$m.__track_lines__[1168] = 'pyjsdl.pyjsarray.py, line 1168:\n    def getPixel(self, index):';
		$m.__track_lines__[1173] = 'pyjsdl.pyjsarray.py, line 1173:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1174] = 'pyjsdl.pyjsarray.py, line 1174:\n    return (self.__imagedata.data[i], self.__imagedata.data[i+1], self.__imagedata.data[i+2], self.__imagedata.data[i+3])';
		$m.__track_lines__[1176] = 'pyjsdl.pyjsarray.py, line 1176:\n    def setPixel(self, index, value):';
		$m.__track_lines__[1181] = 'pyjsdl.pyjsarray.py, line 1181:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1182] = 'pyjsdl.pyjsarray.py, line 1182:\n    self.__imagedata.data[i], self.__imagedata.data[i+1], self.__imagedata.data[i+2], self.__imagedata.data[i+3] = value[0], value[1], value[2], value[3]';
		$m.__track_lines__[1183] = 'pyjsdl.pyjsarray.py, line 1183:\n    return None';
		$m.__track_lines__[1185] = 'pyjsdl.pyjsarray.py, line 1185:\n    def getPixelRGB(self, index):';
		$m.__track_lines__[1190] = 'pyjsdl.pyjsarray.py, line 1190:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1191] = 'pyjsdl.pyjsarray.py, line 1191:\n    return (self.__imagedata.data[i], self.__imagedata.data[i+1], self.__imagedata.data[i+2])';
		$m.__track_lines__[1193] = 'pyjsdl.pyjsarray.py, line 1193:\n    def setPixelRGB(self, index, value):';
		$m.__track_lines__[1198] = 'pyjsdl.pyjsarray.py, line 1198:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1199] = 'pyjsdl.pyjsarray.py, line 1199:\n    self.__imagedata.data[i], self.__imagedata.data[i+1], self.__imagedata.data[i+2] = value[0], value[1], value[2]';
		$m.__track_lines__[1200] = 'pyjsdl.pyjsarray.py, line 1200:\n    return None';
		$m.__track_lines__[1202] = 'pyjsdl.pyjsarray.py, line 1202:\n    def getPixelAlpha(self, index):';
		$m.__track_lines__[1207] = 'pyjsdl.pyjsarray.py, line 1207:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1208] = 'pyjsdl.pyjsarray.py, line 1208:\n    return self.__imagedata.data[i+3]';
		$m.__track_lines__[1210] = 'pyjsdl.pyjsarray.py, line 1210:\n    def setPixelAlpha(self, index, value):';
		$m.__track_lines__[1215] = 'pyjsdl.pyjsarray.py, line 1215:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1216] = 'pyjsdl.pyjsarray.py, line 1216:\n    self.__imagedata.data[i+3] = value';
		$m.__track_lines__[1217] = 'pyjsdl.pyjsarray.py, line 1217:\n    return None';
		$m.__track_lines__[1219] = 'pyjsdl.pyjsarray.py, line 1219:\n    def getPixelInteger(self, index):';
		$m.__track_lines__[1224] = 'pyjsdl.pyjsarray.py, line 1224:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1225] = 'pyjsdl.pyjsarray.py, line 1225:\n    return self.__imagedata.data[i]<<16 | self.__imagedata.data[i+1]<<8 | self.__imagedata.data[i+2] | self.imagedata.data[i+3]<<24';
		$m.__track_lines__[1227] = 'pyjsdl.pyjsarray.py, line 1227:\n    def setPixelInteger(self, index, value):';
		$m.__track_lines__[1232] = 'pyjsdl.pyjsarray.py, line 1232:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1233] = 'pyjsdl.pyjsarray.py, line 1233:\n    self.__imagedata.data[i], self.__imagedata.data[i+1], self.__imagedata.data[i+2], self.__imagedata.data[i+3] = value>>16 & 0xff, value>>8 & 0xff, value & 0xff, value>>24 & 0xff';
		$m.__track_lines__[1234] = 'pyjsdl.pyjsarray.py, line 1234:\n    return None';
		$m.__track_lines__[1236] = 'pyjsdl.pyjsarray.py, line 1236:\n    def getImageData(self):';
		$m.__track_lines__[1240] = 'pyjsdl.pyjsarray.py, line 1240:\n    return self.__imagedata.getImageData()';
		$m.__track_lines__[1243] = 'pyjsdl.pyjsarray.py, line 1243:\n    class BitSet:';
		$m.__track_lines__[1249] = 'pyjsdl.pyjsarray.py, line 1249:\n    __bit = 8';
		$m.__track_lines__[1250] = 'pyjsdl.pyjsarray.py, line 1250:\n    __bitmask = None';
		$m.__track_lines__[1251] = 'pyjsdl.pyjsarray.py, line 1251:\n    __typedarray = PyUint8Array';
		$m.__track_lines__[1253] = 'pyjsdl.pyjsarray.py, line 1253:\n    def __init__(self, width=None):';
		$m.__track_lines__[1254] = 'pyjsdl.pyjsarray.py, line 1254:\n    if not self.__class__.__bitmask:';
		$m.__track_lines__[1255] = 'pyjsdl.pyjsarray.py, line 1255:\n    self.__class__.__bitmask = dict([(self.__class__.__bit-i-1,1<<i) for i in range(self.__class__.__bit-1,-1,-1)])';
		$m.__track_lines__[1256] = 'pyjsdl.pyjsarray.py, line 1256:\n    self.__class__.__bitmask[self.__class__.__bit-1] = int(self.__class__.__bitmask[self.__class__.__bit-1])      #pyjs [1<<0] = 1L';
		$m.__track_lines__[1257] = 'pyjsdl.pyjsarray.py, line 1257:\n    if width:';
		$m.__track_lines__[1258] = 'pyjsdl.pyjsarray.py, line 1258:\n    self.__width = abs(width)';
		$m.__track_lines__[1260] = 'pyjsdl.pyjsarray.py, line 1260:\n    self.__width = self.__bit';
		$m.__track_lines__[1261] = 'pyjsdl.pyjsarray.py, line 1261:\n    self.__data = self.__typedarray( _ceil(self.__width/(self.__bit*1.0)) )';
		$m.__track_lines__[1263] = 'pyjsdl.pyjsarray.py, line 1263:\n    def __str__(self):';
		$m.__track_lines__[1267] = 'pyjsdl.pyjsarray.py, line 1267:\n    return "%s" % self.__class__';
		$m.__track_lines__[1269] = 'pyjsdl.pyjsarray.py, line 1269:\n    def __repr__(self):';
		$m.__track_lines__[1273] = 'pyjsdl.pyjsarray.py, line 1273:\n    setBit = []';
		$m.__track_lines__[1274] = 'pyjsdl.pyjsarray.py, line 1274:\n    for index in xrange(self.__width):';
		$m.__track_lines__[1275] = 'pyjsdl.pyjsarray.py, line 1275:\n    if self.get(index):';
		$m.__track_lines__[1276] = 'pyjsdl.pyjsarray.py, line 1276:\n    setBit.append(str(index))';
		$m.__track_lines__[1277] = 'pyjsdl.pyjsarray.py, line 1277:\n    return "{" + ", ".join(setBit) + "}"';
		$m.__track_lines__[1279] = 'pyjsdl.pyjsarray.py, line 1279:\n    def __getitem__(self, index):';
		$m.__track_lines__[1283] = 'pyjsdl.pyjsarray.py, line 1283:\n    return self.get(index)';
		$m.__track_lines__[1285] = 'pyjsdl.pyjsarray.py, line 1285:\n    def __setitem__(self, index, value):';
		$m.__track_lines__[1289] = 'pyjsdl.pyjsarray.py, line 1289:\n    self.set(index, value)';
		$m.__track_lines__[1291] = 'pyjsdl.pyjsarray.py, line 1291:\n    def __len__(self):';
		$m.__track_lines__[1295] = 'pyjsdl.pyjsarray.py, line 1295:\n    for index in xrange(self.__width-1, -1, -1):';
		$m.__track_lines__[1296] = 'pyjsdl.pyjsarray.py, line 1296:\n    if self.get(index):';
		$m.__track_lines__[1297] = 'pyjsdl.pyjsarray.py, line 1297:\n    break';
		$m.__track_lines__[1298] = 'pyjsdl.pyjsarray.py, line 1298:\n    return index+1';
		$m.__track_lines__[1300] = 'pyjsdl.pyjsarray.py, line 1300:\n    def __iter__(self):';
		$m.__track_lines__[1304] = 'pyjsdl.pyjsarray.py, line 1304:\n    index = 0';
		$m.__track_lines__[1305] = 'pyjsdl.pyjsarray.py, line 1305:\n    while index < self.__width:';
		$m.__track_lines__[1306] = 'pyjsdl.pyjsarray.py, line 1306:\n    yield self.get(index)';
		$m.__track_lines__[1307] = 'pyjsdl.pyjsarray.py, line 1307:\n    index += 1';
		$m.__track_lines__[1309] = 'pyjsdl.pyjsarray.py, line 1309:\n    def get(self, index, toIndex=None):';
		$m.__track_lines__[1314] = 'pyjsdl.pyjsarray.py, line 1314:\n    if index > self.__width-1:';
		$m.__track_lines__[1315] = 'pyjsdl.pyjsarray.py, line 1315:\n    if not toIndex:';
		$m.__track_lines__[1316] = 'pyjsdl.pyjsarray.py, line 1316:\n    return False';
		$m.__track_lines__[1318] = 'pyjsdl.pyjsarray.py, line 1318:\n    size = toIndex-index';
		$m.__track_lines__[1319] = 'pyjsdl.pyjsarray.py, line 1319:\n    if size > 0:';
		$m.__track_lines__[1320] = 'pyjsdl.pyjsarray.py, line 1320:\n    return self.__class__(size)';
		$m.__track_lines__[1322] = 'pyjsdl.pyjsarray.py, line 1322:\n    return None';
		$m.__track_lines__[1323] = 'pyjsdl.pyjsarray.py, line 1323:\n    if toIndex is None:';
		$m.__track_lines__[1324] = 'pyjsdl.pyjsarray.py, line 1324:\n    return bool( self.__data[ int(index/self.__bit) ] & self.__bitmask[ index%self.__bit ] )';
		$m.__track_lines__[1326] = 'pyjsdl.pyjsarray.py, line 1326:\n    size = toIndex-index';
		$m.__track_lines__[1327] = 'pyjsdl.pyjsarray.py, line 1327:\n    if size > 0:';
		$m.__track_lines__[1328] = 'pyjsdl.pyjsarray.py, line 1328:\n    bitset = self.__class__(size)';
		$m.__track_lines__[1329] = 'pyjsdl.pyjsarray.py, line 1329:\n    ix = 0';
		$m.__track_lines__[1330] = 'pyjsdl.pyjsarray.py, line 1330:\n    if toIndex > self.__width:';
		$m.__track_lines__[1331] = 'pyjsdl.pyjsarray.py, line 1331:\n    toIndex = self.__width';
		$m.__track_lines__[1332] = 'pyjsdl.pyjsarray.py, line 1332:\n    for i in xrange(index, toIndex):';
		$m.__track_lines__[1333] = 'pyjsdl.pyjsarray.py, line 1333:\n    bitset.set(ix, bool( self.__data[ int(i/self.__bit) ] & self.__bitmask[ i%self.__bit ] ))';
		$m.__track_lines__[1334] = 'pyjsdl.pyjsarray.py, line 1334:\n    ix += 1';
		$m.__track_lines__[1335] = 'pyjsdl.pyjsarray.py, line 1335:\n    return bitset';
		$m.__track_lines__[1337] = 'pyjsdl.pyjsarray.py, line 1337:\n    return None';
		$m.__track_lines__[1339] = 'pyjsdl.pyjsarray.py, line 1339:\n    def set(self, index, value=1):';
		$m.__track_lines__[1344] = 'pyjsdl.pyjsarray.py, line 1344:\n    if index > self.__width-1:';
		$m.__track_lines__[1345] = 'pyjsdl.pyjsarray.py, line 1345:\n    if value:';
		$m.__track_lines__[1346] = 'pyjsdl.pyjsarray.py, line 1346:\n    self.resize(index+1)';
		$m.__track_lines__[1348] = 'pyjsdl.pyjsarray.py, line 1348:\n    return';
		$m.__track_lines__[1349] = 'pyjsdl.pyjsarray.py, line 1349:\n    if value:';
		$m.__track_lines__[1350] = 'pyjsdl.pyjsarray.py, line 1350:\n    self.__data[ int(index/self.__bit) ] = self.__data[ int(index/self.__bit) ] | self.__bitmask[ index%self.__bit ]';
		$m.__track_lines__[1353] = 'pyjsdl.pyjsarray.py, line 1353:\n    self.__data[ int(index/self.__bit) ] = self.__data[ int(index/self.__bit) ] & ~(self.__bitmask[ index%self.__bit ])';
		$m.__track_lines__[1355] = 'pyjsdl.pyjsarray.py, line 1355:\n    return None';
		$m.__track_lines__[1357] = 'pyjsdl.pyjsarray.py, line 1357:\n    def fill(self, index=None, toIndex=None):';
		$m.__track_lines__[1362] = 'pyjsdl.pyjsarray.py, line 1362:\n    if index is None and toIndex is None:';
		$m.__track_lines__[1363] = 'pyjsdl.pyjsarray.py, line 1363:\n    for i in xrange(0, self.__width):';
		$m.__track_lines__[1364] = 'pyjsdl.pyjsarray.py, line 1364:\n    self.set(i, 1)';
		$m.__track_lines__[1366] = 'pyjsdl.pyjsarray.py, line 1366:\n    if toIndex is None:';
		$m.__track_lines__[1367] = 'pyjsdl.pyjsarray.py, line 1367:\n    self.set(index, 1)';
		$m.__track_lines__[1369] = 'pyjsdl.pyjsarray.py, line 1369:\n    for i in xrange(index, toIndex):';
		$m.__track_lines__[1370] = 'pyjsdl.pyjsarray.py, line 1370:\n    self.set(i, 1)';
		$m.__track_lines__[1372] = 'pyjsdl.pyjsarray.py, line 1372:\n    def clear(self, index=None, toIndex=None):';
		$m.__track_lines__[1377] = 'pyjsdl.pyjsarray.py, line 1377:\n    if index is None:';
		$m.__track_lines__[1378] = 'pyjsdl.pyjsarray.py, line 1378:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[1379] = 'pyjsdl.pyjsarray.py, line 1379:\n    self.__data[i] = 0';
		$m.__track_lines__[1381] = 'pyjsdl.pyjsarray.py, line 1381:\n    if toIndex is None:';
		$m.__track_lines__[1382] = 'pyjsdl.pyjsarray.py, line 1382:\n    self.set(index, 0)';
		$m.__track_lines__[1384] = 'pyjsdl.pyjsarray.py, line 1384:\n    if index == 0 and toIndex == self.__width:';
		$m.__track_lines__[1385] = 'pyjsdl.pyjsarray.py, line 1385:\n    for dat in xrange(len(self.__data)):';
		$m.__track_lines__[1386] = 'pyjsdl.pyjsarray.py, line 1386:\n    self.__data[dat] = 0';
		$m.__track_lines__[1388] = 'pyjsdl.pyjsarray.py, line 1388:\n    for i in xrange(index, toIndex):';
		$m.__track_lines__[1389] = 'pyjsdl.pyjsarray.py, line 1389:\n    self.set(i, 0)';
		$m.__track_lines__[1391] = 'pyjsdl.pyjsarray.py, line 1391:\n    def flip(self, index, toIndex=None):';
		$m.__track_lines__[1396] = 'pyjsdl.pyjsarray.py, line 1396:\n    if toIndex is None:';
		$m.__track_lines__[1397] = 'pyjsdl.pyjsarray.py, line 1397:\n    self.set(index, not self.get(index))';
		$m.__track_lines__[1399] = 'pyjsdl.pyjsarray.py, line 1399:\n    if toIndex > self.__width:';
		$m.__track_lines__[1400] = 'pyjsdl.pyjsarray.py, line 1400:\n    self.resize(toIndex)';
		$m.__track_lines__[1401] = 'pyjsdl.pyjsarray.py, line 1401:\n    toIndex = self.__width';
		$m.__track_lines__[1402] = 'pyjsdl.pyjsarray.py, line 1402:\n    if index == 0 and toIndex == self.__width:';
		$m.__track_lines__[1403] = 'pyjsdl.pyjsarray.py, line 1403:\n    for dat in xrange(len(self.__data)):';
		$m.__track_lines__[1404] = 'pyjsdl.pyjsarray.py, line 1404:\n    self.__data[dat] = ~self.__data[dat]';
		$m.__track_lines__[1406] = 'pyjsdl.pyjsarray.py, line 1406:\n    for i in xrange(index, toIndex):';
		$m.__track_lines__[1407] = 'pyjsdl.pyjsarray.py, line 1407:\n    self.set(i, not self.get(i))';
		$m.__track_lines__[1409] = 'pyjsdl.pyjsarray.py, line 1409:\n    def cardinality(self):';
		$m.__track_lines__[1413] = 'pyjsdl.pyjsarray.py, line 1413:\n    count = 0';
		$m.__track_lines__[1414] = 'pyjsdl.pyjsarray.py, line 1414:\n    for bit in xrange(self.__width):';
		$m.__track_lines__[1415] = 'pyjsdl.pyjsarray.py, line 1415:\n    if self.get(bit):';
		$m.__track_lines__[1416] = 'pyjsdl.pyjsarray.py, line 1416:\n    count += 1';
		$m.__track_lines__[1417] = 'pyjsdl.pyjsarray.py, line 1417:\n    return count';
		$m.__track_lines__[1419] = 'pyjsdl.pyjsarray.py, line 1419:\n    def intersects(self, bitset):';
		$m.__track_lines__[1424] = 'pyjsdl.pyjsarray.py, line 1424:\n    for dat in xrange(len(bitset.__data)):';
		$m.__track_lines__[1425] = 'pyjsdl.pyjsarray.py, line 1425:\n    if bitset.__data[dat] & self.__data[dat]:';
		$m.__track_lines__[1426] = 'pyjsdl.pyjsarray.py, line 1426:\n    return True';
		$m.__track_lines__[1427] = 'pyjsdl.pyjsarray.py, line 1427:\n    return False';
		$m.__track_lines__[1429] = 'pyjsdl.pyjsarray.py, line 1429:\n    def andSet(self, bitset):';
		$m.__track_lines__[1433] = 'pyjsdl.pyjsarray.py, line 1433:\n    data = min(len(self.__data), len(bitset.__data))';
		$m.__track_lines__[1434] = 'pyjsdl.pyjsarray.py, line 1434:\n    for dat in xrange(data):';
		$m.__track_lines__[1435] = 'pyjsdl.pyjsarray.py, line 1435:\n    self.__data[dat] = self.__data[dat] & bitset.__data[dat]';
		$m.__track_lines__[1439] = 'pyjsdl.pyjsarray.py, line 1439:\n    def orSet(self, bitset):';
		$m.__track_lines__[1443] = 'pyjsdl.pyjsarray.py, line 1443:\n    data = min(len(self.__data), len(bitset.__data))';
		$m.__track_lines__[1444] = 'pyjsdl.pyjsarray.py, line 1444:\n    for dat in xrange(data):';
		$m.__track_lines__[1445] = 'pyjsdl.pyjsarray.py, line 1445:\n    self.__data[dat] = self.__data[dat] | bitset.__data[dat]';
		$m.__track_lines__[1448] = 'pyjsdl.pyjsarray.py, line 1448:\n    def xorSet(self, bitset):';
		$m.__track_lines__[1452] = 'pyjsdl.pyjsarray.py, line 1452:\n    data = min(len(self.__data), len(bitset.__data))';
		$m.__track_lines__[1453] = 'pyjsdl.pyjsarray.py, line 1453:\n    for dat in xrange(data):';
		$m.__track_lines__[1454] = 'pyjsdl.pyjsarray.py, line 1454:\n    self.__data[dat] = self.__data[dat] ^ bitset.__data[dat]';
		$m.__track_lines__[1457] = 'pyjsdl.pyjsarray.py, line 1457:\n    def resize(self, width):';
		$m.__track_lines__[1461] = 'pyjsdl.pyjsarray.py, line 1461:\n    if width > self.__width:';
		$m.__track_lines__[1462] = 'pyjsdl.pyjsarray.py, line 1462:\n    self.__width = width';
		$m.__track_lines__[1463] = 'pyjsdl.pyjsarray.py, line 1463:\n    if self.__width > len(self.__data) * self.__bit:';
		$m.__track_lines__[1464] = 'pyjsdl.pyjsarray.py, line 1464:\n    array = self.__typedarray( _ceil(self.__width/(self.__bit*1.0)) )';
		$m.__track_lines__[1465] = 'pyjsdl.pyjsarray.py, line 1465:\n    array.set(self.__data)';
		$m.__track_lines__[1466] = 'pyjsdl.pyjsarray.py, line 1466:\n    self.__data = array';
		$m.__track_lines__[1468] = 'pyjsdl.pyjsarray.py, line 1468:\n    if width < len(self):';
		$m.__track_lines__[1469] = 'pyjsdl.pyjsarray.py, line 1469:\n    width = len(self)';
		$m.__track_lines__[1470] = 'pyjsdl.pyjsarray.py, line 1470:\n    self.__width = width';
		$m.__track_lines__[1471] = 'pyjsdl.pyjsarray.py, line 1471:\n    if self.__width <= len(self.__data) * self.__bit - self.__bit:';
		$m.__track_lines__[1472] = 'pyjsdl.pyjsarray.py, line 1472:\n    array = self.__typedarray( _ceil(self.__width/(self.__bit*1.0)) )';
		$m.__track_lines__[1473] = 'pyjsdl.pyjsarray.py, line 1473:\n    array.set(self.__data.subarray(0,_ceil(self.__width/(self.__bit*1.0))))';
		$m.__track_lines__[1474] = 'pyjsdl.pyjsarray.py, line 1474:\n    self.__data = array';
		$m.__track_lines__[1476] = 'pyjsdl.pyjsarray.py, line 1476:\n    def size(self):';
		$m.__track_lines__[1480] = 'pyjsdl.pyjsarray.py, line 1480:\n    return len(self.__data) * self.__bit';
		$m.__track_lines__[1482] = 'pyjsdl.pyjsarray.py, line 1482:\n    def isEmpty(self):';
		$m.__track_lines__[1487] = 'pyjsdl.pyjsarray.py, line 1487:\n    for data in self.__data:';
		$m.__track_lines__[1488] = 'pyjsdl.pyjsarray.py, line 1488:\n    if data:';
		$m.__track_lines__[1489] = 'pyjsdl.pyjsarray.py, line 1489:\n    return False';
		$m.__track_lines__[1490] = 'pyjsdl.pyjsarray.py, line 1490:\n    return True';
		$m.__track_lines__[1492] = 'pyjsdl.pyjsarray.py, line 1492:\n    def clone(self):';
		$m.__track_lines__[1496] = 'pyjsdl.pyjsarray.py, line 1496:\n    new_bitset = self.__class__(1)';
		$m.__track_lines__[1497] = 'pyjsdl.pyjsarray.py, line 1497:\n    data = self.__typedarray(self.__data)';
		$m.__track_lines__[1498] = 'pyjsdl.pyjsarray.py, line 1498:\n    new_bitset.__data = data';
		$m.__track_lines__[1499] = 'pyjsdl.pyjsarray.py, line 1499:\n    new_bitset.__width = self.__width';
		$m.__track_lines__[1500] = 'pyjsdl.pyjsarray.py, line 1500:\n    return new_bitset';
		$m.__track_lines__[1503] = 'pyjsdl.pyjsarray.py, line 1503:\n    class BitSet16(BitSet):';
		$m.__track_lines__[1507] = 'pyjsdl.pyjsarray.py, line 1507:\n    __bit = 16';
		$m.__track_lines__[1508] = 'pyjsdl.pyjsarray.py, line 1508:\n    __bitmask = None';
		$m.__track_lines__[1509] = 'pyjsdl.pyjsarray.py, line 1509:\n    __typedarray = PyUint16Array';
		$m.__track_lines__[1511] = 'pyjsdl.pyjsarray.py, line 1511:\n    def __init__(self, width=None):';
		$m.__track_lines__[1512] = 'pyjsdl.pyjsarray.py, line 1512:\n    BitSet.__init__(self, width)';
		$m.__track_lines__[1515] = 'pyjsdl.pyjsarray.py, line 1515:\n    class BitSet32(BitSet):';
		$m.__track_lines__[1519] = 'pyjsdl.pyjsarray.py, line 1519:\n    __bit = 32';
		$m.__track_lines__[1520] = 'pyjsdl.pyjsarray.py, line 1520:\n    __bitmask = None';
		$m.__track_lines__[1521] = 'pyjsdl.pyjsarray.py, line 1521:\n    __typedarray = PyUint32Array';
		$m.__track_lines__[1523] = 'pyjsdl.pyjsarray.py, line 1523:\n    def __init__(self, width=None):';
		$m.__track_lines__[1524] = 'pyjsdl.pyjsarray.py, line 1524:\n    BitSet.__init__(self, width)';
		$m.__track_lines__[1527] = 'pyjsdl.pyjsarray.py, line 1527:\n    class Pyjs_Mode:';
		$m.__track_lines__[1529] = 'pyjsdl.pyjsarray.py, line 1529:\n    def __init__(self):';
		$m.__track_lines__[1530] = 'pyjsdl.pyjsarray.py, line 1530:\n    self.strict, self.optimized = self._setmode()';
		$m.__track_lines__[1532] = 'pyjsdl.pyjsarray.py, line 1532:\n    def __getattr__(self, attr):';
		$m.__track_lines__[1533] = "pyjsdl.pyjsarray.py, line 1533:\n    if attr == '__strict_mode':";
		$m.__track_lines__[1534] = 'pyjsdl.pyjsarray.py, line 1534:\n    return True';
		$m.__track_lines__[1536] = 'pyjsdl.pyjsarray.py, line 1536:\n    def _setmode(self):';
		$m.__track_lines__[1537] = 'pyjsdl.pyjsarray.py, line 1537:\n    if self.__strict_mode == True:';
		$m.__track_lines__[1538] = 'pyjsdl.pyjsarray.py, line 1538:\n    return True, False';
		$m.__track_lines__[1540] = 'pyjsdl.pyjsarray.py, line 1540:\n    return False, True';
		$m.__track_lines__[1542] = 'pyjsdl.pyjsarray.py, line 1542:\n    pyjs_mode = Pyjs_Mode()';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='pyjsdl.pyjsarray';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=28;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_ceil'] = $p['___import___']('math.ceil', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=29;
		$pyjs['track']['lineno']=32;
		$m['PyTypedArray'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '2e062de533b229c06b8f8edc68008759';
			$pyjs['track']['lineno']=50;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length, typedarray) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					typedarray = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2e062de533b229c06b8f8edc68008759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				if (typeof typedarray == 'undefined') typedarray=arguments['callee']['__args__'][6][1];
				var $and1,$and2;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':50};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=50;
				$pyjs['track']['lineno']=54;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
					$pyjs['track']['lineno']=55;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](data, $p['int']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) {
						$pyjs['track']['lineno']=56;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
							$pyjs['track']['lineno']=57;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data)) : $p['setattr'](self, '__data', new typedarray(data)); 
						}
						else {
							$pyjs['track']['lineno']=59;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data['valueOf']())) : $p['setattr'](self, '__data', new typedarray(data['valueOf']())); 
						}
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](data, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['list'], $p['tuple']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
						$pyjs['track']['lineno']=61;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
							$pyjs['track']['lineno']=62;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data['getArray']())) : $p['setattr'](self, '__data', new typedarray(data['getArray']())); 
						}
						else {
							$pyjs['track']['lineno']=64;
							data = function(){
								var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,dat,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
							$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
							$iter1_iter = data;
							$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
							while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
								dat = $iter1_nextval['$nextval'];
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return $collcomp1['append']((function(){try{try{$pyjs['in_try_except'] += 1;
								return dat['valueOf']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp1;}();
							$pyjs['track']['lineno']=65;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data['getArray']())) : $p['setattr'](self, '__data', new typedarray(data['getArray']())); 
						}
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](data, $m['PyTypedArray']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
						$pyjs['track']['lineno']=67;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data['__data'])) : $p['setattr'](self, '__data', new typedarray(data['__data'])); 
					}
					else {
						$pyjs['track']['lineno']=69;
						if ($p['bool'](($p['bool']($and1=$p['op_is'](offset, null))?$p['op_is'](length, null):$and1))) {
							$pyjs['track']['lineno']=70;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data)) : $p['setattr'](self, '__data', new typedarray(data)); 
						}
						else {
							$pyjs['track']['lineno']=72;
							if ($p['bool']($p['op_is'](offset, null))) {
								$pyjs['track']['lineno']=73;
								offset = $constant_int_0;
							}
							$pyjs['track']['lineno']=74;
							if ($p['bool']($p['op_is'](length, null))) {
								$pyjs['track']['lineno']=75;
								self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data, offset)) : $p['setattr'](self, '__data', new typedarray(data, offset)); 
							}
							else {
								$pyjs['track']['lineno']=77;
								self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data, offset, length)) : $p['setattr'](self, '__data', new typedarray(data, offset, length)); 
							}
						}
					}
				}
				else {
					$pyjs['track']['lineno']=79;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', null) : $p['setattr'](self, '__data', null); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null],['typedarray', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=81;
			$method = $pyjs__bind_method2('__str__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2e062de533b229c06b8f8edc68008759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':81};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=81;
				$pyjs['track']['lineno']=85;
				$pyjs['track']['lineno']=85;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__data']['toString']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs['track']['lineno']=87;
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
					if (self.prototype['__md5__'] !== '2e062de533b229c06b8f8edc68008759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,$add2,$add3,$add1,$add4;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
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
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration']();
					} catch (e) {
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
															($p['isinstance']($exc_value, $exc_type)
															 ? $exc_value : $exc_type($exc_value)));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
					$yield_value = null;
					$exc=$p['GeneratorExit']();
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				
					$pyjs['track']={'module':'pyjsdl.pyjsarray','lineno':87};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=87;
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$pyjs['track']['lineno']=91;
						index = $constant_int_0;
						$pyjs['track']['lineno']=92;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state['splice'](1, $generator_state['length']-1);
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0)||((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['cmp'](index, $p['getattr']($p['getattr'](self, '__data'), 'length')) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								$pyjs['track']['lineno']=93;
								$pyjs['track']['lineno']=93;
								$yield_value = self['__getitem__'](index);
								$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
								$yielding = true;
								$generator_state[1] = 1;
								return $yield_value;
								$generator_state[1]=1;
							}
							if ($generator_state[1] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[1] = -1;
									throw $exc;
								}
								$pyjs['track']['lineno']=94;
								index = $p['__op_add']($add3=index,$add4=$constant_int_1);
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
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=96;
			$method = $pyjs__bind_method2('__getitem__', function(index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2e062de533b229c06b8f8edc68008759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':96};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=96;
				$pyjs['track']['lineno']=100;
				$pyjs['track']['lineno']=100;
				var $pyjs__ret = $p['int'](self['__data'][index]);;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=102;
			$method = $pyjs__bind_method2('__setitem__', function(index, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2e062de533b229c06b8f8edc68008759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':102};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=102;
				$pyjs['track']['lineno']=106;
				if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
					$pyjs['track']['lineno']=107;
self['__data'][index]=value;
				}
				else {
					$pyjs['track']['lineno']=109;
					value = (function(){try{try{$pyjs['in_try_except'] += 1;
					return value['valueOf']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
					$pyjs['track']['lineno']=110;
self['__data'][index]=value;
				}
				$pyjs['track']['lineno']=111;
				$pyjs['track']['lineno']=111;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['__setitem__'] = $method;
			$pyjs['track']['lineno']=113;
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
					if (self.prototype['__md5__'] !== '2e062de533b229c06b8f8edc68008759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':113};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=113;
				$pyjs['track']['lineno']=117;
				$pyjs['track']['lineno']=117;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__data'), 'length');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs['track']['lineno']=119;
			$method = $pyjs__bind_method2('set', function(data, offset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2e062de533b229c06b8f8edc68008759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':119};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=119;
				$pyjs['track']['lineno']=123;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](data, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['list'], $p['tuple']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
					$pyjs['track']['lineno']=124;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
						$pyjs['track']['lineno']=125;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['__data']['set']((function(){try{try{$pyjs['in_try_except'] += 1;
						return data['getArray']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), offset);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=127;
						data = function(){
							var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,dat,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
	$collcomp2 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return data;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
						$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
						while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
							dat = $iter2_nextval['$nextval'];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp2['append']((function(){try{try{$pyjs['in_try_except'] += 1;
							return dat['valueOf']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp2;}();
						$pyjs['track']['lineno']=128;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['__data']['set']((function(){try{try{$pyjs['in_try_except'] += 1;
						return data['getArray']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})(), offset);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
					}
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](data, $m['PyTypedArray']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
					$pyjs['track']['lineno']=130;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__data']['set']($p['getattr'](data, '__data'), offset);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data'],['offset', $constant_int_0]]);
			$cls_definition['set'] = $method;
			$pyjs['track']['lineno']=132;
			$method = $pyjs__bind_method2('subarray', function(begin, end) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					begin = arguments[1];
					end = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2e062de533b229c06b8f8edc68008759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof end == 'undefined') end=arguments['callee']['__args__'][4][1];
				var array,pytypedarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':132};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=132;
				$pyjs['track']['lineno']=136;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_is'](end, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) {
					$pyjs['track']['lineno']=137;
					end = $p['getattr']($p['getattr'](self, '__data'), 'length');
				}
				$pyjs['track']['lineno']=138;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__data']['subarray'](begin, end);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
				$pyjs['track']['lineno']=139;
				pytypedarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__class__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				$pyjs['track']['lineno']=140;
				pytypedarray['__is_instance__'] && typeof pytypedarray['__setattr__'] == 'function' ? pytypedarray['__setattr__']('__data', array) : $p['setattr'](pytypedarray, '__data', array); 
				$pyjs['track']['lineno']=141;
				$pyjs['track']['lineno']=141;
				var $pyjs__ret = pytypedarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['begin'],['end', null]]);
			$cls_definition['subarray'] = $method;
			$pyjs['track']['lineno']=143;
			$method = $pyjs__bind_method2('getLength', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2e062de533b229c06b8f8edc68008759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':143};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=143;
				$pyjs['track']['lineno']=147;
				$pyjs['track']['lineno']=147;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__data'), 'length');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLength'] = $method;
			$pyjs['track']['lineno']=149;
			$method = $pyjs__bind_method2('getByteLength', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2e062de533b229c06b8f8edc68008759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':149};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=149;
				$pyjs['track']['lineno']=153;
				$pyjs['track']['lineno']=153;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__data'), 'byteLength');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getByteLength'] = $method;
			$pyjs['track']['lineno']=155;
			$method = $pyjs__bind_method2('getBuffer', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2e062de533b229c06b8f8edc68008759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':155};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=155;
				$pyjs['track']['lineno']=159;
				$pyjs['track']['lineno']=159;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__data'), 'buffer');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBuffer'] = $method;
			$pyjs['track']['lineno']=161;
			$method = $pyjs__bind_method2('getByteOffset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2e062de533b229c06b8f8edc68008759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':161};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=161;
				$pyjs['track']['lineno']=165;
				$pyjs['track']['lineno']=165;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__data'), 'byteOffset');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getByteOffset'] = $method;
			$pyjs['track']['lineno']=167;
			$method = $pyjs__bind_method2('getBytesPerElement', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2e062de533b229c06b8f8edc68008759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':167};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=167;
				$pyjs['track']['lineno']=171;
				$pyjs['track']['lineno']=171;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__data'), 'BYTES_PER_ELEMENT');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBytesPerElement'] = $method;
			$pyjs['track']['lineno']=173;
			$method = $pyjs__bind_method2('getArray', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2e062de533b229c06b8f8edc68008759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':173};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=173;
				$pyjs['track']['lineno']=177;
				$pyjs['track']['lineno']=177;
				var $pyjs__ret = $p['getattr'](self, '__data');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getArray'] = $method;
			$pyjs['track']['lineno']=179;
			$method = $pyjs__bind_method2('setArray', function(array) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					array = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2e062de533b229c06b8f8edc68008759') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':179};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=179;
				$pyjs['track']['lineno']=183;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', array) : $p['setattr'](self, '__data', array); 
				$pyjs['track']['lineno']=184;
				$pyjs['track']['lineno']=184;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['array']]);
			$cls_definition['setArray'] = $method;
			$pyjs['track']['lineno']=32;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyTypedArray', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=187;
		$m['PyUint8ClampedArray'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = 'ddb54500c59d4cae8aad6f761aead34c';
			$pyjs['track']['lineno']=192;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ddb54500c59d4cae8aad6f761aead34c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':192};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=192;
				$pyjs['track']['lineno']=193;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=194;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint8ClampedArray == "undefined"?$m['Uint8ClampedArray']:Uint8ClampedArray)}, self, data, offset, length]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=196;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
							$pyjs['track']['lineno']=197;
							$pyjs['__active_exception_stack__'] = null;
							throw ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['NotImplementedError']('TypedArray data type not implemented');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
						}
						else {
							$pyjs['track']['lineno']=199;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=187;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyUint8ClampedArray', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=202;
		$m['PyUint8Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = 'c16f0b858c382c1dc47e8bc1b11da411';
			$pyjs['track']['lineno']=207;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c16f0b858c382c1dc47e8bc1b11da411') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':207};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=207;
				$pyjs['track']['lineno']=208;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=209;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint8Array == "undefined"?$m['Uint8Array']:Uint8Array)}, self, data, offset, length]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=211;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()) {
							$pyjs['track']['lineno']=212;
							$pyjs['__active_exception_stack__'] = null;
							throw ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['NotImplementedError']('TypedArray data type not implemented');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
						}
						else {
							$pyjs['track']['lineno']=214;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=202;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyUint8Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=217;
		$m['PyUint16Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = 'ab10dac29de87bf76ad76184e0f4aa66';
			$pyjs['track']['lineno']=222;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ab10dac29de87bf76ad76184e0f4aa66') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':222};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=222;
				$pyjs['track']['lineno']=223;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=224;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint16Array == "undefined"?$m['Uint16Array']:Uint16Array)}, self, data, offset, length]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=226;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
							$pyjs['track']['lineno']=227;
							$pyjs['__active_exception_stack__'] = null;
							throw ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['NotImplementedError']('TypedArray data type not implemented');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})());
						}
						else {
							$pyjs['track']['lineno']=229;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=217;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyUint16Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=232;
		$m['PyUint32Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = 'c51bf2f26ce6075ecae5e066029ba0b7';
			$pyjs['track']['lineno']=237;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c51bf2f26ce6075ecae5e066029ba0b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':237};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=237;
				$pyjs['track']['lineno']=238;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=239;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint32Array == "undefined"?$m['Uint32Array']:Uint32Array)}, self, data, offset, length]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=241;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})()) {
							$pyjs['track']['lineno']=242;
							$pyjs['__active_exception_stack__'] = null;
							throw ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['NotImplementedError']('TypedArray data type not implemented');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})());
						}
						else {
							$pyjs['track']['lineno']=244;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=232;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyUint32Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=247;
		$m['PyInt8Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '737aec302026d36d4c7faec0198cac1b';
			$pyjs['track']['lineno']=252;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '737aec302026d36d4c7faec0198cac1b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':252};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=252;
				$pyjs['track']['lineno']=253;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=254;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Int8Array == "undefined"?$m['Int8Array']:Int8Array)}, self, data, offset, length]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=256;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) {
							$pyjs['track']['lineno']=257;
							$pyjs['__active_exception_stack__'] = null;
							throw ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['NotImplementedError']('TypedArray data type not implemented');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})());
						}
						else {
							$pyjs['track']['lineno']=259;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=247;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyInt8Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=262;
		$m['PyInt16Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '4de678a2ce7067e4b28c8c41d33c2e8f';
			$pyjs['track']['lineno']=267;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4de678a2ce7067e4b28c8c41d33c2e8f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':267};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=267;
				$pyjs['track']['lineno']=268;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=269;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Int16Array == "undefined"?$m['Int16Array']:Int16Array)}, self, data, offset, length]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=271;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
							$pyjs['track']['lineno']=272;
							$pyjs['__active_exception_stack__'] = null;
							throw ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['NotImplementedError']('TypedArray data type not implemented');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})());
						}
						else {
							$pyjs['track']['lineno']=274;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=262;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyInt16Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=277;
		$m['PyInt32Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '5596604da7afb14f62f1642581814134';
			$pyjs['track']['lineno']=282;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5596604da7afb14f62f1642581814134') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':282};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=282;
				$pyjs['track']['lineno']=283;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=284;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Int32Array == "undefined"?$m['Int32Array']:Int32Array)}, self, data, offset, length]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=286;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) {
							$pyjs['track']['lineno']=287;
							$pyjs['__active_exception_stack__'] = null;
							throw ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['NotImplementedError']('TypedArray data type not implemented');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})());
						}
						else {
							$pyjs['track']['lineno']=289;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=277;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyInt32Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=292;
		$m['PyFloat32Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = 'a54199aeb431c38acbbfb15be4b339ff';
			$pyjs['track']['lineno']=297;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a54199aeb431c38acbbfb15be4b339ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':297};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=297;
				$pyjs['track']['lineno']=298;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=299;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Float32Array == "undefined"?$m['Float32Array']:Float32Array)}, self, data, offset, length]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=301;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()) {
							$pyjs['track']['lineno']=302;
							$pyjs['__active_exception_stack__'] = null;
							throw ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['NotImplementedError']('TypedArray data type not implemented');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})());
						}
						else {
							$pyjs['track']['lineno']=304;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=306;
			$method = $pyjs__bind_method2('__getitem__', function(index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a54199aeb431c38acbbfb15be4b339ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':306};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=306;
				$pyjs['track']['lineno']=310;
				$pyjs['track']['lineno']=310;
				var $pyjs__ret = self['__data'][index];;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=292;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyFloat32Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=313;
		$m['PyFloat64Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '2651949a2dc8027453894606c747588b';
			$pyjs['track']['lineno']=318;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2651949a2dc8027453894606c747588b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':318};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=318;
				$pyjs['track']['lineno']=319;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=320;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Float64Array == "undefined"?$m['Float64Array']:Float64Array)}, self, data, offset, length]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=322;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
							$pyjs['track']['lineno']=323;
							$pyjs['__active_exception_stack__'] = null;
							throw ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['NotImplementedError']('TypedArray data type not implemented');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})());
						}
						else {
							$pyjs['track']['lineno']=325;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=327;
			$method = $pyjs__bind_method2('__getitem__', function(index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2651949a2dc8027453894606c747588b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':327};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=327;
				$pyjs['track']['lineno']=331;
				$pyjs['track']['lineno']=331;
				var $pyjs__ret = self['__data'][index];;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=313;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyFloat64Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=334;
		$m['PyCanvasPixelArray'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = 'c1f6205954daf2ec9601c889ff13676a';
			$pyjs['track']['lineno']=339;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c1f6205954daf2ec9601c889ff13676a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':339};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=339;
				$pyjs['track']['lineno']=340;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyTypedArray']['__init__'](self, data, offset, length);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
				$pyjs['track']['lineno']=341;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_superArray', null) : $p['setattr'](self, '_superArray', null); 
				$pyjs['track']['lineno']=342;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_superIndex', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()) : $p['setattr'](self, '_superIndex', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=344;
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
					if (self.prototype['__md5__'] !== 'c1f6205954daf2ec9601c889ff13676a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,$add6,$add7,$add5,$add8;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
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
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration']();
					} catch (e) {
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
															($p['isinstance']($exc_value, $exc_type)
															 ? $exc_value : $exc_type($exc_value)));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
					$yield_value = null;
					$exc=$p['GeneratorExit']();
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				
					$pyjs['track']={'module':'pyjsdl.pyjsarray','lineno':344};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=344;
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$pyjs['track']['lineno']=348;
						$generator_state[2] = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						if(($generator_state[1]==1)||($generator_state[1]<1&&((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['bool']($p['getattr'](self, '_superArray')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()))) {
							$generator_state[1]=1;
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
								$pyjs['track']['lineno']=349;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['PyTypedArray']['__iter__'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
							}
						}
						else if ($generator_state[1]==0||$generator_state[1]==2) {
							$generator_state[1]=2;
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
								$pyjs['track']['lineno']=351;
								index = $p['getattr'](self, '_superIndex')['__getitem__']($constant_int_0);
								$pyjs['track']['lineno']=352;
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
								$generator_state['splice'](3, $generator_state['length']-3);
								$generator_state[2]=2;
							}
							if ($generator_state[2] == 2) {
								for (;($generator_state[3] > 0)||((function(){try{try{$pyjs['in_try_except'] += 1;
									return $p['bool'](($p['cmp'](index, $p['getattr'](self, '_superIndex')['__getitem__']($constant_int_1)) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})());$generator_state[3] = 0) {
									if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
										for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
										$pyjs['track']['lineno']=353;
										$pyjs['track']['lineno']=353;
										$yield_value = $p['getattr'](self, '_superArray')['__getitem__'](index);
										$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
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
										$pyjs['track']['lineno']=354;
										index = $p['__op_add']($add7=index,$add8=$constant_int_1);
										$generator_state[3]=2;
									}
									if ($generator_state[3] == 2) {
									}
								}
								$generator_state[2]=3;
							}
							if ($generator_state[2] == 3) {
								$generator_state[2]=4;
							}
							if ($generator_state[2] == 4) {
							}
						}
						$generator_state[1]=0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
					}

					return;
				};
				return $generator;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=356;
			$method = $pyjs__bind_method2('__getitem__', function(index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c1f6205954daf2ec9601c889ff13676a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add9,$add10;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':356};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=356;
				$pyjs['track']['lineno']=360;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, '_superArray')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
					$pyjs['track']['lineno']=361;
					$pyjs['track']['lineno']=361;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['PyTypedArray']['__getitem__'](self, index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=363;
					$pyjs['track']['lineno']=363;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_superArray']['__getitem__']($p['__op_add']($add9=index,$add10=$p['getattr'](self, '_superIndex')['__getitem__']($constant_int_0)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=365;
			$method = $pyjs__bind_method2('__setitem__', function(index, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c1f6205954daf2ec9601c889ff13676a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add12,$add11;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':365};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=365;
				$pyjs['track']['lineno']=369;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, '_superArray')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()) {
					$pyjs['track']['lineno']=370;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['PyTypedArray']['__setitem__'](self, index, value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=372;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_superArray']['__setitem__']($p['__op_add']($add11=index,$add12=$p['getattr'](self, '_superIndex')['__getitem__']($constant_int_0)), value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
				}
				$pyjs['track']['lineno']=373;
				$pyjs['track']['lineno']=373;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['__setitem__'] = $method;
			$pyjs['track']['lineno']=375;
			$method = $pyjs__bind_method2('set', function(data, offset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c1f6205954daf2ec9601c889ff13676a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				var index,$iter3_idx,$iter3_array,$add16,$add14,$add15,$pyjs__trackstack_size_1,$iter3_iter,$add13,$iter3_type,$iter3_nextval;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':375};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=375;
				$pyjs['track']['lineno']=379;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, '_superArray')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()) {
					$pyjs['track']['lineno']=380;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						index = $iter3_nextval['$nextval'];
						$pyjs['track']['lineno']=381;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['__setitem__']($p['__op_add']($add13=index,$add14=offset), data['__getitem__'](index));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=383;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_superArray']['set'](data, $p['__op_add']($add15=offset,$add16=$p['getattr'](self, '_superIndex')['__getitem__']($constant_int_0)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data'],['offset', $constant_int_0]]);
			$cls_definition['set'] = $method;
			$pyjs['track']['lineno']=385;
			$method = $pyjs__bind_method2('subarray', function(begin, end) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					begin = arguments[1];
					end = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c1f6205954daf2ec9601c889ff13676a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof end == 'undefined') end=arguments['callee']['__args__'][4][1];
				var array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':385};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=385;
				$pyjs['track']['lineno']=389;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_is'](end, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})()) {
					$pyjs['track']['lineno']=390;
					end = $p['getattr']($p['getattr'](self, '__data'), 'length');
				}
				$pyjs['track']['lineno']=391;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__class__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
				$pyjs['track']['lineno']=392;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('__data', $p['getattr'](self, '__data')) : $p['setattr'](array, '__data', $p['getattr'](self, '__data')); 
				$pyjs['track']['lineno']=393;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_superArray', self) : $p['setattr'](array, '_superArray', self); 
				$pyjs['track']['lineno']=394;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_superIndex', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([begin, end]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()) : $p['setattr'](array, '_superIndex', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([begin, end]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()); 
				$pyjs['track']['lineno']=395;
				$pyjs['track']['lineno']=395;
				var $pyjs__ret = array;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['begin'],['end', null]]);
			$cls_definition['subarray'] = $method;
			$pyjs['track']['lineno']=334;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyCanvasPixelArray', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=398;
		$m['Ndarray'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '5c41d7647b9bd6879e143bda4d07b1ca';
			$pyjs['track']['lineno']=400;
			$cls_definition['__typedarray'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([[$constant_int_0, $m['PyUint8ClampedArray']], [$constant_int_1, $m['PyUint8Array']], [$constant_int_2, $m['PyUint16Array']], [$constant_int_3, $m['PyUint32Array']], [$constant_int_4, $m['PyInt8Array']], [$constant_int_5, $m['PyInt16Array']], [$constant_int_6, $m['PyInt32Array']], [$constant_int_7, $m['PyFloat32Array']], [$constant_int_8, $m['PyFloat64Array']]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
			$pyjs['track']['lineno']=410;
			$method = $pyjs__bind_method2('__init__', function(dim, dtype) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					dim = arguments[1];
					dtype = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof dtype == 'undefined') dtype=arguments['callee']['__args__'][4][1];
				var $iter5_nextval,$iter5_idx,$div2,i,$iter4_nextval,$pyjs__trackstack_size_1,$iter5_array,$iter4_idx,indices,$iter5_iter,$iter4_type,$iter4_array,$iter5_type,$div1,$iter4_iter,$mul2,$mul1,size;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':410};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=410;
				$pyjs['track']['lineno']=425;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_dtype', dtype) : $p['setattr'](self, '_dtype', dtype); 
				$pyjs['track']['lineno']=426;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](dim, $p['tuple']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})()) {
					$pyjs['track']['lineno']=427;
					size = $constant_int_1;
					$pyjs['track']['lineno']=428;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return dim;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						i = $iter4_nextval['$nextval'];
						$pyjs['track']['lineno']=429;
						size = (typeof ($mul1=size)==typeof ($mul2=i) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=430;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)(size);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()) : $p['setattr'](self, '__data', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)(size);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()); 
					$pyjs['track']['lineno']=431;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_shape', dim) : $p['setattr'](self, '_shape', dim); 
					$pyjs['track']['lineno']=432;
					indices = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
					$pyjs['track']['lineno']=433;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '_shape');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						i = $iter5_nextval['$nextval'];
						$pyjs['track']['lineno']=434;
						size = (typeof ($div1=size)==typeof ($div2=i) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2));
						$pyjs['track']['lineno']=435;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return indices['append'](size);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=436;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_indices', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple'](indices);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()) : $p['setattr'](self, '_indices', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple'](indices);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()); 
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](dim, $p['int']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})()) {
					$pyjs['track']['lineno']=438;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)(dim);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})()) : $p['setattr'](self, '__data', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)(dim);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})()); 
					$pyjs['track']['lineno']=439;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_shape', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([dim]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()) : $p['setattr'](self, '_shape', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([dim]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()); 
					$pyjs['track']['lineno']=440;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_indices', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](self, '_shape')['__getitem__']($constant_int_0)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()) : $p['setattr'](self, '_indices', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](self, '_shape')['__getitem__']($constant_int_0)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()); 
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](dim, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()) {
					$pyjs['track']['lineno']=442;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)(dim);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})()) : $p['setattr'](self, '__data', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)(dim);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})()); 
					$pyjs['track']['lineno']=443;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_shape', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](dim);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()) : $p['setattr'](self, '_shape', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](dim);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()); 
					$pyjs['track']['lineno']=444;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_indices', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](self, '_shape')['__getitem__']($constant_int_0)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()) : $p['setattr'](self, '_indices', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](self, '_shape')['__getitem__']($constant_int_0)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()); 
				}
				else {
					$pyjs['track']['lineno']=446;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', dim) : $p['setattr'](self, '__data', dim); 
					$pyjs['track']['lineno']=447;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_shape', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](dim);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})()) : $p['setattr'](self, '_shape', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](dim);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})()); 
					$pyjs['track']['lineno']=448;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_indices', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](self, '_shape')['__getitem__']($constant_int_0)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})()) : $p['setattr'](self, '_indices', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](self, '_shape')['__getitem__']($constant_int_0)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})()); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['dim'],['dtype', $constant_int_8]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=451;
			$method = $pyjs__bind_method2('shape', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':451};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=451;
				$pyjs['track']['lineno']=456;
				$pyjs['track']['lineno']=456;
				var $pyjs__ret = $p['getattr'](self, '_shape');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['shape'] = $p['property']($p['staticmethod']($method));
			$pyjs['track']['lineno']=459;
			$method = $pyjs__bind_method2('shape', function(dim) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					dim = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':459};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=459;
				$pyjs['track']['lineno']=466;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setshape'](dim);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
				$pyjs['track']['lineno']=467;
				$pyjs['track']['lineno']=467;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['dim']]);
			$cls_definition['shape'] = $cls_definition['shape']['setter']($p['staticmethod']($method));
			$pyjs['track']['lineno']=469;
			$method = $pyjs__bind_method2('__getitem__', function(index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var begin,end,indexLn,$mul8,$add19,shapeLn,$add17,$add20,subarray,$mul7,$sub2,$sub1,$add18,array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':469};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=469;
				$pyjs['track']['lineno']=470;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](index, '__len__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})()) {
					$pyjs['track']['lineno']=471;
					var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
					return index['__len__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, '_shape'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
					indexLn = $tupleassign1[0];
					shapeLn = $tupleassign1[1];
					$pyjs['track']['lineno']=472;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](indexLn, shapeLn));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})()) {
						$pyjs['track']['lineno']=473;
						$pyjs['track']['lineno']=473;
						var $pyjs__ret = $p['getattr'](self, '__data')['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sum'](function(){
							var $iter6_idx,$iter6_type,$collcomp3,i,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$mul4,$mul3,$iter6_nextval;
	$collcomp3 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['range'](indexLn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
						$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
						while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
							i = $iter6_nextval['$nextval'];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp3['append']((typeof ($mul3=index['__getitem__'](i))==typeof ($mul4=$p['getattr'](self, '_indices')['__getitem__'](i)) && typeof $mul3=='number'?
								$mul3*$mul4:
								$p['op_mul']($mul3,$mul4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp3;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})());
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=475;
						begin = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sum'](function(){
							var $iter7_array,$iter7_nextval,i,$iter7_iter,$collcomp4,$iter7_idx,$mul6,$mul5,$iter7_type,$pyjs__trackstack_size_1;
	$collcomp4 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['range'](indexLn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
						$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
						while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
							i = $iter7_nextval['$nextval'];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp4['append']((typeof ($mul5=index['__getitem__'](i))==typeof ($mul6=$p['getattr'](self, '_indices')['__getitem__'](i)) && typeof $mul5=='number'?
								$mul5*$mul6:
								$p['op_mul']($mul5,$mul6)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp4;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
						$pyjs['track']['lineno']=476;
						end = $p['__op_add']($add17=begin,$add18=$p['getattr'](self, '_indices')['__getitem__']($p['__op_sub']($sub1=indexLn,$sub2=$constant_int_1)));
						$pyjs['track']['lineno']=477;
						subarray = (function(){try{try{$pyjs['in_try_except'] += 1;
						return self['__data']['subarray'](begin, end);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
						$pyjs['track']['lineno']=478;
						array = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['Ndarray'](subarray, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
						$pyjs['track']['lineno']=479;
						array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_shape', $p['__getslice']($p['getattr'](self, '_shape'), indexLn, null)) : $p['setattr'](array, '_shape', $p['__getslice']($p['getattr'](self, '_shape'), indexLn, null)); 
						$pyjs['track']['lineno']=480;
						array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_indices', $p['__getslice']($p['getattr'](self, '_indices'), indexLn, null)) : $p['setattr'](array, '_indices', $p['__getslice']($p['getattr'](self, '_indices'), indexLn, null)); 
						$pyjs['track']['lineno']=481;
						$pyjs['track']['lineno']=481;
						var $pyjs__ret = array;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				else {
					$pyjs['track']['lineno']=483;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, '_shape'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})(), $constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})()) {
						$pyjs['track']['lineno']=484;
						$pyjs['track']['lineno']=484;
						var $pyjs__ret = $p['getattr'](self, '__data')['__getitem__'](index);
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=486;
						begin = (typeof ($mul7=index)==typeof ($mul8=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul7=='number'?
							$mul7*$mul8:
							$p['op_mul']($mul7,$mul8));
						$pyjs['track']['lineno']=487;
						end = $p['__op_add']($add19=begin,$add20=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0));
						$pyjs['track']['lineno']=488;
						subarray = (function(){try{try{$pyjs['in_try_except'] += 1;
						return self['__data']['subarray'](begin, end);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
						$pyjs['track']['lineno']=489;
						array = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['Ndarray'](subarray, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
						$pyjs['track']['lineno']=490;
						array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_shape', $p['__getslice']($p['getattr'](self, '_shape'), $constant_int_1, null)) : $p['setattr'](array, '_shape', $p['__getslice']($p['getattr'](self, '_shape'), $constant_int_1, null)); 
						$pyjs['track']['lineno']=491;
						array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_indices', $p['__getslice']($p['getattr'](self, '_indices'), $constant_int_1, null)) : $p['setattr'](array, '_indices', $p['__getslice']($p['getattr'](self, '_indices'), $constant_int_1, null)); 
						$pyjs['track']['lineno']=492;
						$pyjs['track']['lineno']=492;
						var $pyjs__ret = array;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=494;
			$method = $pyjs__bind_method2('__setitem__', function(index, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var begin,$mul14,end,$mul13,$add21,indexLn,$add22,$add24,shapeLn,$sub3,subarray,unpack,$add23,$sub4;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':494};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=494;
				$pyjs['track']['lineno']=495;
				unpack = function(obj, lst) {
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
					if (typeof lst == 'undefined') lst=arguments['callee']['__args__'][3][1];
					var $iter8_type,$iter8_array,element,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,$iter8_idx;
					$pyjs['track']={'module':'pyjsdl.pyjsarray','lineno':495};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=495;
					$pyjs['track']['lineno']=496;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_is'](lst, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})()) {
						$pyjs['track']['lineno']=497;
						lst = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
					}
					$pyjs['track']['lineno']=498;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return obj;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
					while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
						element = $iter8_nextval['$nextval'];
						$pyjs['track']['lineno']=499;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isinstance'](element, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$p['list'], $p['tuple']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})()) {
							$pyjs['track']['lineno']=500;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return unpack(element, lst);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=502;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return lst['append'](element);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=503;
					$pyjs['track']['lineno']=503;
					var $pyjs__ret = lst;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				unpack['__name__'] = 'unpack';

				unpack['__bind_type__'] = 0;
				unpack['__args__'] = [null,null,['obj'],['lst', null]];
				$pyjs['track']['lineno']=504;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](index, '__len__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})()) {
					$pyjs['track']['lineno']=505;
					var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
					return index['__len__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, '_shape'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
					indexLn = $tupleassign2[0];
					shapeLn = $tupleassign2[1];
					$pyjs['track']['lineno']=506;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](indexLn, shapeLn));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})()) {
						$pyjs['track']['lineno']=507;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, '__data')['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sum'](function(){
							var $iter9_iter,i,$collcomp5,$mul10,$iter9_nextval,$iter9_idx,$iter9_type,$mul9,$pyjs__trackstack_size_1,$iter9_array;
	$collcomp5 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['range'](indexLn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})();
						$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
						while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
							i = $iter9_nextval['$nextval'];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp5['append']((typeof ($mul9=index['__getitem__'](i))==typeof ($mul10=$p['getattr'](self, '_indices')['__getitem__'](i)) && typeof $mul9=='number'?
								$mul9*$mul10:
								$p['op_mul']($mul9,$mul10)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp5;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})(), value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=509;
						begin = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sum'](function(){
							var $iter10_nextval,$mul12,$mul11,i,$collcomp6,$iter10_idx,$iter10_array,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter;
	$collcomp6 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['range'](indexLn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
						$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
						while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
							i = $iter10_nextval['$nextval'];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp6['append']((typeof ($mul11=index['__getitem__'](i))==typeof ($mul12=$p['getattr'](self, '_indices')['__getitem__'](i)) && typeof $mul11=='number'?
								$mul11*$mul12:
								$p['op_mul']($mul11,$mul12)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp6;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
						$pyjs['track']['lineno']=510;
						end = $p['__op_add']($add21=begin,$add22=$p['getattr'](self, '_indices')['__getitem__']($p['__op_sub']($sub3=indexLn,$sub4=$constant_int_1)));
						$pyjs['track']['lineno']=511;
						subarray = (function(){try{try{$pyjs['in_try_except'] += 1;
						return self['__data']['subarray'](begin, end);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
						$pyjs['track']['lineno']=512;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isinstance'](value, $m['Ndarray']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})()) {
							$pyjs['track']['lineno']=513;
							value = $p['getattr'](value, '__data');
						}
						else {
							$pyjs['track']['lineno']=515;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['isinstance'](value['__getitem__']($constant_int_0), (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['tuple']([$p['list'], $p['tuple']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})()) {
								$pyjs['track']['lineno']=516;
								value = (function(){try{try{$pyjs['in_try_except'] += 1;
								return unpack(value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
							}
						}
						$pyjs['track']['lineno']=517;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return subarray['set'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=519;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, '_shape'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})(), $constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})()) {
						$pyjs['track']['lineno']=520;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, '__data')['__setitem__'](index, value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=522;
						begin = (typeof ($mul13=index)==typeof ($mul14=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul13=='number'?
							$mul13*$mul14:
							$p['op_mul']($mul13,$mul14));
						$pyjs['track']['lineno']=523;
						end = $p['__op_add']($add23=begin,$add24=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0));
						$pyjs['track']['lineno']=524;
						subarray = (function(){try{try{$pyjs['in_try_except'] += 1;
						return self['__data']['subarray'](begin, end);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
						$pyjs['track']['lineno']=525;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isinstance'](value, $m['Ndarray']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})()) {
							$pyjs['track']['lineno']=526;
							value = $p['getattr'](value, '__data');
						}
						else {
							$pyjs['track']['lineno']=528;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['isinstance'](value['__getitem__']($constant_int_0), (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['tuple']([$p['list'], $p['tuple']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})()) {
								$pyjs['track']['lineno']=529;
								value = (function(){try{try{$pyjs['in_try_except'] += 1;
								return unpack(value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
							}
						}
						$pyjs['track']['lineno']=530;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return subarray['set'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
					}
				}
				$pyjs['track']['lineno']=531;
				$pyjs['track']['lineno']=531;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['__setitem__'] = $method;
			$pyjs['track']['lineno']=533;
			$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					lower = arguments[1];
					upper = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var subarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':533};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=533;
				$pyjs['track']['lineno']=534;
				subarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__data']['subarray'](lower, upper);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
				$pyjs['track']['lineno']=535;
				$pyjs['track']['lineno']=535;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](subarray, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['lower'],['upper']]);
			$cls_definition['__getslice__'] = $method;
			$pyjs['track']['lineno']=537;
			$method = $pyjs__bind_method2('__setslice__', function(lower, upper, data) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					lower = arguments[1];
					upper = arguments[2];
					data = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var subarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':537};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=537;
				$pyjs['track']['lineno']=538;
				subarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__data']['subarray'](lower, upper);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
				$pyjs['track']['lineno']=539;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return subarray['set'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
				$pyjs['track']['lineno']=540;
				$pyjs['track']['lineno']=540;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['lower'],['upper'],['data']]);
			$cls_definition['__setslice__'] = $method;
			$pyjs['track']['lineno']=542;
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
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var array,$mul18,$add29,index,end,$add25,$add27,$add26,subarray,begin,$add28,$mul17,$mul16,$mul15,$add32,$add33,$add30,$add31,$add36,$add34,$add35;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
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
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration']();
					} catch (e) {
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
															($p['isinstance']($exc_value, $exc_type)
															 ? $exc_value : $exc_type($exc_value)));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
					$yield_value = null;
					$exc=$p['GeneratorExit']();
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				
					$pyjs['track']={'module':'pyjsdl.pyjsarray','lineno':542};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=542;
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$pyjs['track']['lineno']=543;
						$generator_state[2] = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						if(($generator_state[1]==1)||($generator_state[1]<1&&((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](self, '_shape'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})(), $constant_int_1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})()))) {
							$generator_state[1]=1;
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
								$pyjs['track']['lineno']=544;
								index = $constant_int_0;
								$pyjs['track']['lineno']=545;
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
								$generator_state['splice'](3, $generator_state['length']-3);
								$generator_state[2]=2;
							}
							if ($generator_state[2] == 2) {
								for (;($generator_state[3] > 0)||((function(){try{try{$pyjs['in_try_except'] += 1;
									return $p['bool'](($p['cmp'](index, $p['getattr'](self, '_shape')['__getitem__']($constant_int_0)) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})());$generator_state[3] = 0) {
									if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
										for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
										$pyjs['track']['lineno']=546;
										begin = (typeof ($mul17=index)==typeof ($mul18=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul17=='number'?
											$mul17*$mul18:
											$p['op_mul']($mul17,$mul18));
										$pyjs['track']['lineno']=547;
										end = $p['__op_add']($add31=begin,$add32=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0));
										$pyjs['track']['lineno']=548;
										subarray = (function(){try{try{$pyjs['in_try_except'] += 1;
										return self['__data']['subarray'](begin, end);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
										$pyjs['track']['lineno']=549;
										array = (function(){try{try{$pyjs['in_try_except'] += 1;
										return $m['Ndarray'](subarray, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
										$pyjs['track']['lineno']=550;
										array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_shape', $p['__getslice']($p['getattr'](self, '_shape'), $constant_int_1, null)) : $p['setattr'](array, '_shape', $p['__getslice']($p['getattr'](self, '_shape'), $constant_int_1, null)); 
										$pyjs['track']['lineno']=551;
										array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_indices', $p['__getslice']($p['getattr'](self, '_indices'), $constant_int_1, null)) : $p['setattr'](array, '_indices', $p['__getslice']($p['getattr'](self, '_indices'), $constant_int_1, null)); 
										$pyjs['track']['lineno']=552;
										$pyjs['track']['lineno']=552;
										$yield_value = array;
										$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
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
										$pyjs['track']['lineno']=553;
										index = $p['__op_add']($add33=index,$add34=$constant_int_1);
										$generator_state[3]=2;
									}
									if ($generator_state[3] == 2) {
									}
								}
								$generator_state[2]=3;
							}
							if ($generator_state[2] == 3) {
								$generator_state[2]=4;
							}
							if ($generator_state[2] == 4) {
							}
						}
						else if ($generator_state[1]==0||$generator_state[1]==2) {
							$generator_state[1]=2;
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
								$pyjs['track']['lineno']=555;
								index = $constant_int_0;
								$pyjs['track']['lineno']=556;
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
								$generator_state['splice'](3, $generator_state['length']-3);
								$generator_state[2]=2;
							}
							if ($generator_state[2] == 2) {
								for (;($generator_state[3] > 0)||((function(){try{try{$pyjs['in_try_except'] += 1;
									return $p['bool'](($p['cmp'](index, $p['getattr'](self, '_shape')['__getitem__']($constant_int_0)) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})());$generator_state[3] = 0) {
									if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
										for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
										$pyjs['track']['lineno']=557;
										$pyjs['track']['lineno']=557;
										$yield_value = $p['getattr'](self, '__data')['__getitem__'](index);
										$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
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
										$pyjs['track']['lineno']=558;
										index = $p['__op_add']($add35=index,$add36=$constant_int_1);
										$generator_state[3]=2;
									}
									if ($generator_state[3] == 2) {
									}
								}
								$generator_state[2]=3;
							}
							if ($generator_state[2] == 3) {
								$generator_state[2]=4;
							}
							if ($generator_state[2] == 4) {
							}
						}
						$generator_state[1]=0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
					}

					return;
				};
				return $generator;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=560;
			$method = $pyjs__bind_method2('__str__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var alst,tab,$add49,$add48,$add47,$add46,$add44,$add43,$add42,$add41,$add40,$pyjs_try_err,array_str,$add50,$add52,count,$add51,$add38,$add39,i,$add37,$add45;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':560};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=560;
				$pyjs['track']['lineno']=561;
				array_str = function(array, width, strval) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
					var a,$iter12_type,alst,$iter12_array,$iter12_iter,$pyjs__trackstack_size_1,$iter12_idx,$iter12_nextval;
					$pyjs['track']={'module':'pyjsdl.pyjsarray','lineno':561};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=561;
					$pyjs['track']['lineno']=562;
					alst = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
					$pyjs['track']['lineno']=563;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](array, '_shape'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})(), $constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})()) {
						$pyjs['track']['lineno']=564;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return alst['append']('[');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
						$pyjs['track']['lineno']=565;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return alst['extend'](function(){
							var val,$collcomp7,$iter11_iter,$iter11_type,$mod2,$mod1,$iter11_array,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1;
	$collcomp7 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return array;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
						$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
						while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
							val = $iter11_nextval['$nextval'];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp7['append']((typeof ($mod1=strval)==typeof ($mod2=(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['tuple']([width, val]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})()) && typeof $mod1=='number'?
								(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
								$p['op_mod']($mod1,$mod2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp7;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})();
						$pyjs['track']['lineno']=568;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return alst['__setitem__']((typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2)), (function(){try{try{$pyjs['in_try_except'] += 1;
						return alst['__getitem__']((typeof ($usub1=$constant_int_1)=='number'?
							-$usub1:
							$p['op_usub']($usub1)))['rstrip']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
						$pyjs['track']['lineno']=569;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return alst['append'](']');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=571;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return alst['append']('[');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})();
						$pyjs['track']['lineno']=572;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return array;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})();
						$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
						while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
							a = $iter12_nextval['$nextval'];
							$pyjs['track']['lineno']=573;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return alst['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
							return array_str(a, width, strval);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
						$pyjs['track']['lineno']=574;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return alst['append'](']');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})();
					}
					$pyjs['track']['lineno']=575;
					$pyjs['track']['lineno']=575;
					var $pyjs__ret = alst;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				array_str['__name__'] = 'array_str';

				array_str['__bind_type__'] = 0;
				array_str['__args__'] = [null,null,['array'],['width'],['strval']];
				$pyjs['track']['lineno']=576;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp']($p['getattr'](self, '_dtype'), $constant_int_7) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})()) {
					$pyjs['track']['lineno']=577;
					alst = (function(){try{try{$pyjs['in_try_except'] += 1;
					return array_str(self, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['max'](function(){
						var $iter13_nextval,$iter13_iter,i,$collcomp8,$iter13_type,$iter13_idx,$pyjs__trackstack_size_1,$iter13_array;
	$collcomp8 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '__data');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})();
					$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
					while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
						i = $iter13_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp8['append'](i);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp8;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})(), '%*d ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=579;
					alst = (function(){try{try{$pyjs['in_try_except'] += 1;
					return array_str(self, $p['__op_add']($add37=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['max'](function(){
						var $iter14_array,$iter14_type,$collcomp9,i,$iter14_iter,$pyjs__trackstack_size_1,$iter14_idx,$iter14_nextval;
	$collcomp9 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter14_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '__data');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})();
					$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
					while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
						i = $iter14_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp9['append'](i);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp9;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})(),$add38=$constant_int_7), '%*f ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})();
				}
				$pyjs['track']['lineno']=580;
				tab = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, '_shape'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})();
				$pyjs['track']['lineno']=581;
				i = tab;
				$pyjs['track']['lineno']=582;
				while ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})()) {
					$pyjs['track']['lineno']=583;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						try {
							$pyjs['in_try_except'] += 1;
							$pyjs['track']['lineno']=584;
							i = (function(){try{try{$pyjs['in_try_except'] += 1;
							return alst['index']('[', i);
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
						$pyjs['track']['module']='pyjsdl.pyjsarray';
						if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							$pyjs['track']['lineno']=586;
							break;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
					$pyjs['track']['lineno']=587;
					count = $constant_int_0;
					$pyjs['track']['lineno']=588;
					while ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})()) {
						$pyjs['track']['lineno']=589;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['op_eq'](alst['__getitem__']($p['__op_add']($add39=i,$add40=count)), '['));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})()) {
							$pyjs['track']['lineno']=590;
							count = $p['__op_add']($add41=count,$add42=$constant_int_1);
							$pyjs['track']['lineno']=591;
							continue;
						}
						else {
							$pyjs['track']['lineno']=593;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['op_eq'](count, $constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})()) {
								$pyjs['track']['lineno']=594;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return alst['__setitem__'](i, $p['__op_add']($add45=$p['__op_add']($add43='\n',$add44=(function(){try{try{$pyjs['in_try_except'] += 1;
								return ''['join'](function(){
									var $iter15_iter,$sub6,$iter15_array,$iter15_idx,$iter15_nextval,$iter15_type,x,$pyjs__trackstack_size_1,$collcomp10,$sub5;
	$collcomp10 = $p['list']();
								$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
								$iter15_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
								return (function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['range']($p['__op_sub']($sub5=tab,$sub6=count));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})();
								$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
								while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
									x = $iter15_nextval['$nextval'];
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return $collcomp10['append'](' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})();
								}
								if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
									$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
									$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
								}
								$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp10;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})()),$add46=alst['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})();
							}
							else {
								$pyjs['track']['lineno']=596;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return alst['__setitem__'](i, $p['__op_add']($add49=$p['__op_add']($add47='\n\n',$add48=(function(){try{try{$pyjs['in_try_except'] += 1;
								return ''['join'](function(){
									var $iter16_array,$iter16_type,$sub7,$pyjs__trackstack_size_1,$iter16_idx,$sub8,$collcomp11,x,$iter16_nextval,$iter16_iter;
	$collcomp11 = $p['list']();
								$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
								$iter16_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
								return (function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['range']($p['__op_sub']($sub7=tab,$sub8=count));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})();
								$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
								while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
									x = $iter16_nextval['$nextval'];
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return $collcomp11['append'](' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})();
								}
								if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
									$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
									$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
								}
								$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp11;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})()),$add50=alst['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})();
							}
							$pyjs['track']['lineno']=597;
							i = $p['__op_add']($add51=i,$add52=count);
							$pyjs['track']['lineno']=598;
							break;
						}
					}
				}
				$pyjs['track']['lineno']=599;
				$pyjs['track']['lineno']=599;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return ''['join'](alst);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs['track']['lineno']=601;
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
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':601};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=601;
				$pyjs['track']['lineno']=602;
				$pyjs['track']['lineno']=602;
				var $pyjs__ret = $p['getattr'](self, '_shape')['__getitem__']($constant_int_0);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs['track']['lineno']=604;
			$method = $pyjs__bind_method2('__add__', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter17_nextval,$iter18_type,$iter18_iter,$iter17_iter,$add54,$add53,$iter18_array,i,$pyjs__trackstack_size_1,$iter17_array,$iter18_idx,$add56,$iter17_idx,$iter17_type,array,$iter18_nextval,ndarray,$add55;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':604};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=604;
				$pyjs['track']['lineno']=605;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})();
				$pyjs['track']['lineno']=606;
				ndarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})();
				$pyjs['track']['lineno']=607;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=608;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=609;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})()) {
					$pyjs['track']['lineno']=610;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter17_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})();
					$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
					while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
						i = $iter17_nextval['$nextval'];
						$pyjs['track']['lineno']=611;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_add']($add53=$p['getattr'](ndarray, '__data')['__getitem__'](i),$add54=other));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=613;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})()) {
						$pyjs['track']['lineno']=614;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter18_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})();
						$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
						while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
							i = $iter18_nextval['$nextval'];
							$pyjs['track']['lineno']=615;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_add']($add55=$p['getattr'](ndarray, '__data')['__getitem__'](i),$add56=$p['getattr'](other, '__data')['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=617;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})());
					}
				}
				$pyjs['track']['lineno']=618;
				$pyjs['track']['lineno']=618;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__add__'] = $method;
			$pyjs['track']['lineno']=620;
			$method = $pyjs__bind_method2('__sub__', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter20_iter,$iter20_nextval,$iter19_idx,$iter20_type,$iter19_type,i,$sub12,$sub10,$sub9,$iter19_array,$iter19_iter,$iter19_nextval,$pyjs__trackstack_size_1,array,$iter20_idx,$sub11,ndarray,$iter20_array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':620};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=620;
				$pyjs['track']['lineno']=621;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})();
				$pyjs['track']['lineno']=622;
				ndarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})();
				$pyjs['track']['lineno']=623;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=624;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=625;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})()) {
					$pyjs['track']['lineno']=626;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter19_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})();
					$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
					while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
						i = $iter19_nextval['$nextval'];
						$pyjs['track']['lineno']=627;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_sub']($sub9=$p['getattr'](ndarray, '__data')['__getitem__'](i),$sub10=other));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=629;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})()) {
						$pyjs['track']['lineno']=630;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter20_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})();
						$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
						while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
							i = $iter20_nextval['$nextval'];
							$pyjs['track']['lineno']=631;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_sub']($sub11=$p['getattr'](ndarray, '__data')['__getitem__'](i),$sub12=$p['getattr'](other, '__data')['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=633;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})());
					}
				}
				$pyjs['track']['lineno']=634;
				$pyjs['track']['lineno']=634;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__sub__'] = $method;
			$pyjs['track']['lineno']=636;
			$method = $pyjs__bind_method2('__mul__', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter21_idx,$iter22_array,i,$iter21_nextval,$iter22_nextval,$iter22_type,$mul19,$iter22_idx,$iter21_type,$iter21_iter,$mul20,$iter21_array,$pyjs__trackstack_size_1,array,$mul21,$mul22,ndarray,$iter22_iter;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':636};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=636;
				$pyjs['track']['lineno']=637;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})();
				$pyjs['track']['lineno']=638;
				ndarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})();
				$pyjs['track']['lineno']=639;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=640;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=641;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})()) {
					$pyjs['track']['lineno']=642;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter21_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})();
					$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
					while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
						i = $iter21_nextval['$nextval'];
						$pyjs['track']['lineno']=643;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($mul19=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($mul20=other) && typeof $mul19=='number'?
							$mul19*$mul20:
							$p['op_mul']($mul19,$mul20)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=645;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})()) {
						$pyjs['track']['lineno']=646;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter22_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})();
						$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
						while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
							i = $iter22_nextval['$nextval'];
							$pyjs['track']['lineno']=647;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($mul21=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($mul22=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $mul21=='number'?
								$mul21*$mul22:
								$p['op_mul']($mul21,$mul22)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=649;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_284_err){if (!$p['isinstance']($pyjs_dbg_284_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_284_err);}throw $pyjs_dbg_284_err;
}})());
					}
				}
				$pyjs['track']['lineno']=650;
				$pyjs['track']['lineno']=650;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__mul__'] = $method;
			$pyjs['track']['lineno']=652;
			$method = $pyjs__bind_method2('__div__', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter23_type,$iter23_nextval,$iter24_nextval,$iter23_iter,$div6,$iter24_array,$iter24_type,i,$iter23_array,$div4,$pyjs__trackstack_size_1,$iter23_idx,array,$div5,$div3,$iter24_iter,ndarray,$iter24_idx;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':652};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=652;
				$pyjs['track']['lineno']=653;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_285_err){if (!$p['isinstance']($pyjs_dbg_285_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_285_err);}throw $pyjs_dbg_285_err;
}})();
				$pyjs['track']['lineno']=654;
				ndarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_286_err){if (!$p['isinstance']($pyjs_dbg_286_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_286_err);}throw $pyjs_dbg_286_err;
}})();
				$pyjs['track']['lineno']=655;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=656;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=657;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_287_err){if (!$p['isinstance']($pyjs_dbg_287_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_287_err);}throw $pyjs_dbg_287_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_288_err){if (!$p['isinstance']($pyjs_dbg_288_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_288_err);}throw $pyjs_dbg_288_err;
}})()) {
					$pyjs['track']['lineno']=658;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter23_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_289_err){if (!$p['isinstance']($pyjs_dbg_289_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_289_err);}throw $pyjs_dbg_289_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_290_err){if (!$p['isinstance']($pyjs_dbg_290_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_290_err);}throw $pyjs_dbg_290_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_291_err){if (!$p['isinstance']($pyjs_dbg_291_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_291_err);}throw $pyjs_dbg_291_err;
}})();
					$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
					while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
						i = $iter23_nextval['$nextval'];
						$pyjs['track']['lineno']=659;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($div3=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($div4=other) && typeof $div3=='number' && $div4 !== 0?
							$div3/$div4:
							$p['op_div']($div3,$div4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_292_err){if (!$p['isinstance']($pyjs_dbg_292_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_292_err);}throw $pyjs_dbg_292_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=661;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})()) {
						$pyjs['track']['lineno']=662;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter24_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_294_err){if (!$p['isinstance']($pyjs_dbg_294_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_294_err);}throw $pyjs_dbg_294_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})();
						$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
						while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
							i = $iter24_nextval['$nextval'];
							$pyjs['track']['lineno']=663;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($div5=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($div6=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $div5=='number' && $div6 !== 0?
								$div5/$div6:
								$p['op_div']($div5,$div6)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_297_err){if (!$p['isinstance']($pyjs_dbg_297_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_297_err);}throw $pyjs_dbg_297_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=665;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_298_err){if (!$p['isinstance']($pyjs_dbg_298_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_298_err);}throw $pyjs_dbg_298_err;
}})());
					}
				}
				$pyjs['track']['lineno']=666;
				$pyjs['track']['lineno']=666;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__div__'] = $method;
			$pyjs['track']['lineno']=668;
			$method = $pyjs__bind_method2('add', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter26_nextval,$iter26_type,$add60,$iter25_nextval,i,$add59,$add57,$iter25_iter,$add58,$iter26_idx,$iter25_idx,$pyjs__trackstack_size_1,$iter26_array,array,$iter26_iter,$iter25_type,$iter25_array,ndarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':668};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=668;
				$pyjs['track']['lineno']=674;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_299_err){if (!$p['isinstance']($pyjs_dbg_299_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_299_err);}throw $pyjs_dbg_299_err;
}})();
				$pyjs['track']['lineno']=675;
				ndarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_300_err){if (!$p['isinstance']($pyjs_dbg_300_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_300_err);}throw $pyjs_dbg_300_err;
}})();
				$pyjs['track']['lineno']=676;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=677;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=678;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_301_err){if (!$p['isinstance']($pyjs_dbg_301_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_301_err);}throw $pyjs_dbg_301_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_302_err){if (!$p['isinstance']($pyjs_dbg_302_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_302_err);}throw $pyjs_dbg_302_err;
}})()) {
					$pyjs['track']['lineno']=679;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter25_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_303_err){if (!$p['isinstance']($pyjs_dbg_303_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_303_err);}throw $pyjs_dbg_303_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_304_err){if (!$p['isinstance']($pyjs_dbg_304_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_304_err);}throw $pyjs_dbg_304_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_305_err){if (!$p['isinstance']($pyjs_dbg_305_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_305_err);}throw $pyjs_dbg_305_err;
}})();
					$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
					while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
						i = $iter25_nextval['$nextval'];
						$pyjs['track']['lineno']=680;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_add']($add57=$p['getattr'](ndarray, '__data')['__getitem__'](i),$add58=other));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_306_err){if (!$p['isinstance']($pyjs_dbg_306_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_306_err);}throw $pyjs_dbg_306_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=682;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_307_err){if (!$p['isinstance']($pyjs_dbg_307_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_307_err);}throw $pyjs_dbg_307_err;
}})()) {
						$pyjs['track']['lineno']=683;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter26_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_308_err){if (!$p['isinstance']($pyjs_dbg_308_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_308_err);}throw $pyjs_dbg_308_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_309_err){if (!$p['isinstance']($pyjs_dbg_309_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_309_err);}throw $pyjs_dbg_309_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_310_err){if (!$p['isinstance']($pyjs_dbg_310_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_310_err);}throw $pyjs_dbg_310_err;
}})();
						$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
						while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
							i = $iter26_nextval['$nextval'];
							$pyjs['track']['lineno']=684;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_add']($add59=$p['getattr'](ndarray, '__data')['__getitem__'](i),$add60=$p['getattr'](other, '__data')['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_311_err){if (!$p['isinstance']($pyjs_dbg_311_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_311_err);}throw $pyjs_dbg_311_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=686;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_312_err){if (!$p['isinstance']($pyjs_dbg_312_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_312_err);}throw $pyjs_dbg_312_err;
}})());
					}
				}
				$pyjs['track']['lineno']=687;
				$pyjs['track']['lineno']=687;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['add'] = $method;
			$pyjs['track']['lineno']=689;
			$method = $pyjs__bind_method2('sub', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter27_nextval,i,$iter28_array,$iter27_array,$iter28_idx,$sub16,$sub15,$sub14,$iter27_idx,$iter27_iter,$iter27_type,$pyjs__trackstack_size_1,$iter28_iter,array,$iter28_type,$sub13,$iter28_nextval,ndarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':689};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=689;
				$pyjs['track']['lineno']=695;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_313_err){if (!$p['isinstance']($pyjs_dbg_313_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_313_err);}throw $pyjs_dbg_313_err;
}})();
				$pyjs['track']['lineno']=696;
				ndarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_314_err){if (!$p['isinstance']($pyjs_dbg_314_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_314_err);}throw $pyjs_dbg_314_err;
}})();
				$pyjs['track']['lineno']=697;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=698;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=699;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_315_err){if (!$p['isinstance']($pyjs_dbg_315_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_315_err);}throw $pyjs_dbg_315_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_316_err){if (!$p['isinstance']($pyjs_dbg_316_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_316_err);}throw $pyjs_dbg_316_err;
}})()) {
					$pyjs['track']['lineno']=700;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter27_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_317_err){if (!$p['isinstance']($pyjs_dbg_317_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_317_err);}throw $pyjs_dbg_317_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_318_err){if (!$p['isinstance']($pyjs_dbg_318_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_318_err);}throw $pyjs_dbg_318_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_319_err){if (!$p['isinstance']($pyjs_dbg_319_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_319_err);}throw $pyjs_dbg_319_err;
}})();
					$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
					while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
						i = $iter27_nextval['$nextval'];
						$pyjs['track']['lineno']=701;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_sub']($sub13=$p['getattr'](ndarray, '__data')['__getitem__'](i),$sub14=other));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_320_err){if (!$p['isinstance']($pyjs_dbg_320_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_320_err);}throw $pyjs_dbg_320_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=703;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_321_err){if (!$p['isinstance']($pyjs_dbg_321_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_321_err);}throw $pyjs_dbg_321_err;
}})()) {
						$pyjs['track']['lineno']=704;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter28_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_322_err){if (!$p['isinstance']($pyjs_dbg_322_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_322_err);}throw $pyjs_dbg_322_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_323_err){if (!$p['isinstance']($pyjs_dbg_323_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_323_err);}throw $pyjs_dbg_323_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_324_err){if (!$p['isinstance']($pyjs_dbg_324_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_324_err);}throw $pyjs_dbg_324_err;
}})();
						$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
						while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
							i = $iter28_nextval['$nextval'];
							$pyjs['track']['lineno']=705;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_sub']($sub15=$p['getattr'](ndarray, '__data')['__getitem__'](i),$sub16=$p['getattr'](other, '__data')['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_325_err){if (!$p['isinstance']($pyjs_dbg_325_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_325_err);}throw $pyjs_dbg_325_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=707;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_326_err){if (!$p['isinstance']($pyjs_dbg_326_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_326_err);}throw $pyjs_dbg_326_err;
}})());
					}
				}
				$pyjs['track']['lineno']=708;
				$pyjs['track']['lineno']=708;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['sub'] = $method;
			$pyjs['track']['lineno']=710;
			$method = $pyjs__bind_method2('mul', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter30_type,$mul24,$iter30_nextval,$iter29_type,$iter29_iter,$iter29_idx,$mul23,i,$iter29_nextval,$iter30_array,$iter29_array,$pyjs__trackstack_size_1,$mul26,$iter30_idx,array,$mul25,ndarray,$iter30_iter;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':710};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=710;
				$pyjs['track']['lineno']=716;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_327_err){if (!$p['isinstance']($pyjs_dbg_327_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_327_err);}throw $pyjs_dbg_327_err;
}})();
				$pyjs['track']['lineno']=717;
				ndarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_328_err){if (!$p['isinstance']($pyjs_dbg_328_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_328_err);}throw $pyjs_dbg_328_err;
}})();
				$pyjs['track']['lineno']=718;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=719;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=720;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_329_err){if (!$p['isinstance']($pyjs_dbg_329_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_329_err);}throw $pyjs_dbg_329_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_330_err){if (!$p['isinstance']($pyjs_dbg_330_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_330_err);}throw $pyjs_dbg_330_err;
}})()) {
					$pyjs['track']['lineno']=721;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter29_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_331_err){if (!$p['isinstance']($pyjs_dbg_331_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_331_err);}throw $pyjs_dbg_331_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_332_err){if (!$p['isinstance']($pyjs_dbg_332_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_332_err);}throw $pyjs_dbg_332_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_333_err){if (!$p['isinstance']($pyjs_dbg_333_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_333_err);}throw $pyjs_dbg_333_err;
}})();
					$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
					while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
						i = $iter29_nextval['$nextval'];
						$pyjs['track']['lineno']=722;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($mul23=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($mul24=other) && typeof $mul23=='number'?
							$mul23*$mul24:
							$p['op_mul']($mul23,$mul24)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_334_err){if (!$p['isinstance']($pyjs_dbg_334_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_334_err);}throw $pyjs_dbg_334_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=724;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_335_err){if (!$p['isinstance']($pyjs_dbg_335_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_335_err);}throw $pyjs_dbg_335_err;
}})()) {
						$pyjs['track']['lineno']=725;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter30_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_336_err){if (!$p['isinstance']($pyjs_dbg_336_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_336_err);}throw $pyjs_dbg_336_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_337_err){if (!$p['isinstance']($pyjs_dbg_337_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_337_err);}throw $pyjs_dbg_337_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_338_err){if (!$p['isinstance']($pyjs_dbg_338_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_338_err);}throw $pyjs_dbg_338_err;
}})();
						$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
						while (typeof($p['__wrapped_next']($iter30_nextval)['$nextval']) != 'undefined') {
							i = $iter30_nextval['$nextval'];
							$pyjs['track']['lineno']=726;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($mul25=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($mul26=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $mul25=='number'?
								$mul25*$mul26:
								$p['op_mul']($mul25,$mul26)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_339_err){if (!$p['isinstance']($pyjs_dbg_339_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_339_err);}throw $pyjs_dbg_339_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=728;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_340_err){if (!$p['isinstance']($pyjs_dbg_340_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_340_err);}throw $pyjs_dbg_340_err;
}})());
					}
				}
				$pyjs['track']['lineno']=729;
				$pyjs['track']['lineno']=729;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['mul'] = $method;
			$pyjs['track']['lineno']=731;
			$method = $pyjs__bind_method2('div', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter32_idx,$iter31_array,i,$div10,$iter32_nextval,$iter31_nextval,$iter31_idx,$iter32_iter,$iter32_type,$div8,$iter31_type,$iter32_array,$pyjs__trackstack_size_1,$div9,array,$div7,ndarray,$iter31_iter;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':731};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=731;
				$pyjs['track']['lineno']=737;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_341_err){if (!$p['isinstance']($pyjs_dbg_341_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_341_err);}throw $pyjs_dbg_341_err;
}})();
				$pyjs['track']['lineno']=738;
				ndarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_342_err){if (!$p['isinstance']($pyjs_dbg_342_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_342_err);}throw $pyjs_dbg_342_err;
}})();
				$pyjs['track']['lineno']=739;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=740;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=741;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_343_err){if (!$p['isinstance']($pyjs_dbg_343_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_343_err);}throw $pyjs_dbg_343_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_344_err){if (!$p['isinstance']($pyjs_dbg_344_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_344_err);}throw $pyjs_dbg_344_err;
}})()) {
					$pyjs['track']['lineno']=742;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter31_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_345_err){if (!$p['isinstance']($pyjs_dbg_345_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_345_err);}throw $pyjs_dbg_345_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_346_err){if (!$p['isinstance']($pyjs_dbg_346_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_346_err);}throw $pyjs_dbg_346_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_347_err){if (!$p['isinstance']($pyjs_dbg_347_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_347_err);}throw $pyjs_dbg_347_err;
}})();
					$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
					while (typeof($p['__wrapped_next']($iter31_nextval)['$nextval']) != 'undefined') {
						i = $iter31_nextval['$nextval'];
						$pyjs['track']['lineno']=743;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($div7=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($div8=other) && typeof $div7=='number' && $div8 !== 0?
							$div7/$div8:
							$p['op_div']($div7,$div8)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_348_err){if (!$p['isinstance']($pyjs_dbg_348_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_348_err);}throw $pyjs_dbg_348_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=745;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_349_err){if (!$p['isinstance']($pyjs_dbg_349_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_349_err);}throw $pyjs_dbg_349_err;
}})()) {
						$pyjs['track']['lineno']=746;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter32_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_350_err){if (!$p['isinstance']($pyjs_dbg_350_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_350_err);}throw $pyjs_dbg_350_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_351_err){if (!$p['isinstance']($pyjs_dbg_351_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_351_err);}throw $pyjs_dbg_351_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_352_err){if (!$p['isinstance']($pyjs_dbg_352_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_352_err);}throw $pyjs_dbg_352_err;
}})();
						$iter32_nextval=$p['__iter_prepare']($iter32_iter,false);
						while (typeof($p['__wrapped_next']($iter32_nextval)['$nextval']) != 'undefined') {
							i = $iter32_nextval['$nextval'];
							$pyjs['track']['lineno']=747;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($div9=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($div10=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $div9=='number' && $div10 !== 0?
								$div9/$div10:
								$p['op_div']($div9,$div10)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_353_err){if (!$p['isinstance']($pyjs_dbg_353_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_353_err);}throw $pyjs_dbg_353_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=749;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_354_err){if (!$p['isinstance']($pyjs_dbg_354_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_354_err);}throw $pyjs_dbg_354_err;
}})());
					}
				}
				$pyjs['track']['lineno']=750;
				$pyjs['track']['lineno']=750;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['div'] = $method;
			$pyjs['track']['lineno']=752;
			$method = $pyjs__bind_method2('iadd', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter33_iter,$iter33_nextval,$iter33_type,$add61,$add63,$add62,i,$add64,$iter34_nextval,$iter34_array,$iter34_iter,$pyjs__trackstack_size_1,$iter34_idx,$iter33_idx,$iter34_type,$iter33_array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':752};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=752;
				$pyjs['track']['lineno']=757;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_355_err){if (!$p['isinstance']($pyjs_dbg_355_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_355_err);}throw $pyjs_dbg_355_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_356_err){if (!$p['isinstance']($pyjs_dbg_356_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_356_err);}throw $pyjs_dbg_356_err;
}})()) {
					$pyjs['track']['lineno']=758;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter33_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_357_err){if (!$p['isinstance']($pyjs_dbg_357_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_357_err);}throw $pyjs_dbg_357_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_358_err){if (!$p['isinstance']($pyjs_dbg_358_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_358_err);}throw $pyjs_dbg_358_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_359_err){if (!$p['isinstance']($pyjs_dbg_359_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_359_err);}throw $pyjs_dbg_359_err;
}})();
					$iter33_nextval=$p['__iter_prepare']($iter33_iter,false);
					while (typeof($p['__wrapped_next']($iter33_nextval)['$nextval']) != 'undefined') {
						i = $iter33_nextval['$nextval'];
						$pyjs['track']['lineno']=759;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, '__data')['__setitem__'](i, $p['__op_add']($add61=$p['getattr'](self, '__data')['__getitem__'](i),$add62=other));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_360_err){if (!$p['isinstance']($pyjs_dbg_360_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_360_err);}throw $pyjs_dbg_360_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=761;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_361_err){if (!$p['isinstance']($pyjs_dbg_361_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_361_err);}throw $pyjs_dbg_361_err;
}})()) {
						$pyjs['track']['lineno']=762;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter34_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_362_err){if (!$p['isinstance']($pyjs_dbg_362_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_362_err);}throw $pyjs_dbg_362_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_363_err){if (!$p['isinstance']($pyjs_dbg_363_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_363_err);}throw $pyjs_dbg_363_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_364_err){if (!$p['isinstance']($pyjs_dbg_364_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_364_err);}throw $pyjs_dbg_364_err;
}})();
						$iter34_nextval=$p['__iter_prepare']($iter34_iter,false);
						while (typeof($p['__wrapped_next']($iter34_nextval)['$nextval']) != 'undefined') {
							i = $iter34_nextval['$nextval'];
							$pyjs['track']['lineno']=763;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, '__data')['__setitem__'](i, $p['__op_add']($add63=$p['getattr'](self, '__data')['__getitem__'](i),$add64=$p['getattr'](other, '__data')['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_365_err){if (!$p['isinstance']($pyjs_dbg_365_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_365_err);}throw $pyjs_dbg_365_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=765;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_366_err){if (!$p['isinstance']($pyjs_dbg_366_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_366_err);}throw $pyjs_dbg_366_err;
}})());
					}
				}
				$pyjs['track']['lineno']=766;
				$pyjs['track']['lineno']=766;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['iadd'] = $method;
			$pyjs['track']['lineno']=768;
			$method = $pyjs__bind_method2('isub', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub19,$sub18,i,$iter35_idx,$iter35_nextval,$iter36_nextval,$sub17,$sub20,$iter36_iter,$iter35_type,$iter36_idx,$pyjs__trackstack_size_1,$iter35_array,$iter35_iter,$iter36_type,$iter36_array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':768};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=768;
				$pyjs['track']['lineno']=773;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_367_err){if (!$p['isinstance']($pyjs_dbg_367_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_367_err);}throw $pyjs_dbg_367_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_368_err){if (!$p['isinstance']($pyjs_dbg_368_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_368_err);}throw $pyjs_dbg_368_err;
}})()) {
					$pyjs['track']['lineno']=774;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter35_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_369_err){if (!$p['isinstance']($pyjs_dbg_369_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_369_err);}throw $pyjs_dbg_369_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_370_err){if (!$p['isinstance']($pyjs_dbg_370_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_370_err);}throw $pyjs_dbg_370_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_371_err){if (!$p['isinstance']($pyjs_dbg_371_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_371_err);}throw $pyjs_dbg_371_err;
}})();
					$iter35_nextval=$p['__iter_prepare']($iter35_iter,false);
					while (typeof($p['__wrapped_next']($iter35_nextval)['$nextval']) != 'undefined') {
						i = $iter35_nextval['$nextval'];
						$pyjs['track']['lineno']=775;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, '__data')['__setitem__'](i, $p['__op_sub']($sub17=$p['getattr'](self, '__data')['__getitem__'](i),$sub18=other));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_372_err){if (!$p['isinstance']($pyjs_dbg_372_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_372_err);}throw $pyjs_dbg_372_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=777;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_373_err){if (!$p['isinstance']($pyjs_dbg_373_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_373_err);}throw $pyjs_dbg_373_err;
}})()) {
						$pyjs['track']['lineno']=778;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter36_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_374_err){if (!$p['isinstance']($pyjs_dbg_374_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_374_err);}throw $pyjs_dbg_374_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_375_err){if (!$p['isinstance']($pyjs_dbg_375_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_375_err);}throw $pyjs_dbg_375_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_376_err){if (!$p['isinstance']($pyjs_dbg_376_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_376_err);}throw $pyjs_dbg_376_err;
}})();
						$iter36_nextval=$p['__iter_prepare']($iter36_iter,false);
						while (typeof($p['__wrapped_next']($iter36_nextval)['$nextval']) != 'undefined') {
							i = $iter36_nextval['$nextval'];
							$pyjs['track']['lineno']=779;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, '__data')['__setitem__'](i, $p['__op_sub']($sub19=$p['getattr'](self, '__data')['__getitem__'](i),$sub20=$p['getattr'](other, '__data')['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_377_err){if (!$p['isinstance']($pyjs_dbg_377_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_377_err);}throw $pyjs_dbg_377_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=781;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_378_err){if (!$p['isinstance']($pyjs_dbg_378_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_378_err);}throw $pyjs_dbg_378_err;
}})());
					}
				}
				$pyjs['track']['lineno']=782;
				$pyjs['track']['lineno']=782;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['isub'] = $method;
			$pyjs['track']['lineno']=784;
			$method = $pyjs__bind_method2('imul', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter38_iter,$iter37_idx,i,$mul29,$iter38_idx,$iter38_nextval,$iter37_iter,$iter37_array,$mul30,$mul28,$pyjs__trackstack_size_1,$mul27,$iter38_type,$iter37_type,$iter38_array,$iter37_nextval;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':784};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=784;
				$pyjs['track']['lineno']=789;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_379_err){if (!$p['isinstance']($pyjs_dbg_379_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_379_err);}throw $pyjs_dbg_379_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_380_err){if (!$p['isinstance']($pyjs_dbg_380_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_380_err);}throw $pyjs_dbg_380_err;
}})()) {
					$pyjs['track']['lineno']=790;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter37_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_381_err){if (!$p['isinstance']($pyjs_dbg_381_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_381_err);}throw $pyjs_dbg_381_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_382_err){if (!$p['isinstance']($pyjs_dbg_382_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_382_err);}throw $pyjs_dbg_382_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_383_err){if (!$p['isinstance']($pyjs_dbg_383_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_383_err);}throw $pyjs_dbg_383_err;
}})();
					$iter37_nextval=$p['__iter_prepare']($iter37_iter,false);
					while (typeof($p['__wrapped_next']($iter37_nextval)['$nextval']) != 'undefined') {
						i = $iter37_nextval['$nextval'];
						$pyjs['track']['lineno']=791;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, '__data')['__setitem__'](i, (typeof ($mul27=$p['getattr'](self, '__data')['__getitem__'](i))==typeof ($mul28=other) && typeof $mul27=='number'?
							$mul27*$mul28:
							$p['op_mul']($mul27,$mul28)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_384_err){if (!$p['isinstance']($pyjs_dbg_384_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_384_err);}throw $pyjs_dbg_384_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=793;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_385_err){if (!$p['isinstance']($pyjs_dbg_385_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_385_err);}throw $pyjs_dbg_385_err;
}})()) {
						$pyjs['track']['lineno']=794;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter38_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_386_err){if (!$p['isinstance']($pyjs_dbg_386_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_386_err);}throw $pyjs_dbg_386_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_387_err){if (!$p['isinstance']($pyjs_dbg_387_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_387_err);}throw $pyjs_dbg_387_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_388_err){if (!$p['isinstance']($pyjs_dbg_388_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_388_err);}throw $pyjs_dbg_388_err;
}})();
						$iter38_nextval=$p['__iter_prepare']($iter38_iter,false);
						while (typeof($p['__wrapped_next']($iter38_nextval)['$nextval']) != 'undefined') {
							i = $iter38_nextval['$nextval'];
							$pyjs['track']['lineno']=795;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, '__data')['__setitem__'](i, (typeof ($mul29=$p['getattr'](self, '__data')['__getitem__'](i))==typeof ($mul30=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $mul29=='number'?
								$mul29*$mul30:
								$p['op_mul']($mul29,$mul30)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_389_err){if (!$p['isinstance']($pyjs_dbg_389_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_389_err);}throw $pyjs_dbg_389_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=797;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_390_err){if (!$p['isinstance']($pyjs_dbg_390_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_390_err);}throw $pyjs_dbg_390_err;
}})());
					}
				}
				$pyjs['track']['lineno']=798;
				$pyjs['track']['lineno']=798;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['imul'] = $method;
			$pyjs['track']['lineno']=800;
			$method = $pyjs__bind_method2('idiv', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter39_idx,i,$iter40_array,$pyjs__trackstack_size_1,$iter39_array,$div12,$iter39_type,$div13,$iter39_nextval,$div11,$iter39_iter,$iter40_iter,$iter40_nextval,$iter40_idx,$div14,$iter40_type;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':800};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=800;
				$pyjs['track']['lineno']=805;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_391_err){if (!$p['isinstance']($pyjs_dbg_391_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_391_err);}throw $pyjs_dbg_391_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_392_err){if (!$p['isinstance']($pyjs_dbg_392_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_392_err);}throw $pyjs_dbg_392_err;
}})()) {
					$pyjs['track']['lineno']=806;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter39_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_393_err){if (!$p['isinstance']($pyjs_dbg_393_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_393_err);}throw $pyjs_dbg_393_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_394_err){if (!$p['isinstance']($pyjs_dbg_394_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_394_err);}throw $pyjs_dbg_394_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_395_err){if (!$p['isinstance']($pyjs_dbg_395_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_395_err);}throw $pyjs_dbg_395_err;
}})();
					$iter39_nextval=$p['__iter_prepare']($iter39_iter,false);
					while (typeof($p['__wrapped_next']($iter39_nextval)['$nextval']) != 'undefined') {
						i = $iter39_nextval['$nextval'];
						$pyjs['track']['lineno']=807;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, '__data')['__setitem__'](i, (typeof ($div11=$p['getattr'](self, '__data')['__getitem__'](i))==typeof ($div12=other) && typeof $div11=='number' && $div12 !== 0?
							$div11/$div12:
							$p['op_div']($div11,$div12)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_396_err){if (!$p['isinstance']($pyjs_dbg_396_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_396_err);}throw $pyjs_dbg_396_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=809;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_397_err){if (!$p['isinstance']($pyjs_dbg_397_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_397_err);}throw $pyjs_dbg_397_err;
}})()) {
						$pyjs['track']['lineno']=810;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter40_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_398_err){if (!$p['isinstance']($pyjs_dbg_398_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_398_err);}throw $pyjs_dbg_398_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_399_err){if (!$p['isinstance']($pyjs_dbg_399_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_399_err);}throw $pyjs_dbg_399_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_400_err){if (!$p['isinstance']($pyjs_dbg_400_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_400_err);}throw $pyjs_dbg_400_err;
}})();
						$iter40_nextval=$p['__iter_prepare']($iter40_iter,false);
						while (typeof($p['__wrapped_next']($iter40_nextval)['$nextval']) != 'undefined') {
							i = $iter40_nextval['$nextval'];
							$pyjs['track']['lineno']=811;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, '__data')['__setitem__'](i, (typeof ($div13=$p['getattr'](self, '__data')['__getitem__'](i))==typeof ($div14=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $div13=='number' && $div14 !== 0?
								$div13/$div14:
								$p['op_div']($div13,$div14)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_401_err){if (!$p['isinstance']($pyjs_dbg_401_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_401_err);}throw $pyjs_dbg_401_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=813;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_402_err){if (!$p['isinstance']($pyjs_dbg_402_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_402_err);}throw $pyjs_dbg_402_err;
}})());
					}
				}
				$pyjs['track']['lineno']=814;
				$pyjs['track']['lineno']=814;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['idiv'] = $method;
			$pyjs['track']['lineno']=816;
			$method = $pyjs__bind_method2('bitwise_and', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter42_idx,$iter41_array,$iter42_type,i,$iter42_nextval,$iter42_array,$iter42_iter,$iter41_type,$iter41_nextval,$pyjs__trackstack_size_1,$iter41_iter,$iter41_idx,array,ndarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':816};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=816;
				$pyjs['track']['lineno']=822;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_403_err){if (!$p['isinstance']($pyjs_dbg_403_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_403_err);}throw $pyjs_dbg_403_err;
}})();
				$pyjs['track']['lineno']=823;
				ndarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_404_err){if (!$p['isinstance']($pyjs_dbg_404_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_404_err);}throw $pyjs_dbg_404_err;
}})();
				$pyjs['track']['lineno']=824;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=825;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=826;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_405_err){if (!$p['isinstance']($pyjs_dbg_405_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_405_err);}throw $pyjs_dbg_405_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_406_err){if (!$p['isinstance']($pyjs_dbg_406_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_406_err);}throw $pyjs_dbg_406_err;
}})()) {
					$pyjs['track']['lineno']=827;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter41_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_407_err){if (!$p['isinstance']($pyjs_dbg_407_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_407_err);}throw $pyjs_dbg_407_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_408_err){if (!$p['isinstance']($pyjs_dbg_408_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_408_err);}throw $pyjs_dbg_408_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_409_err){if (!$p['isinstance']($pyjs_dbg_409_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_409_err);}throw $pyjs_dbg_409_err;
}})();
					$iter41_nextval=$p['__iter_prepare']($iter41_iter,false);
					while (typeof($p['__wrapped_next']($iter41_nextval)['$nextval']) != 'undefined') {
						i = $iter41_nextval['$nextval'];
						$pyjs['track']['lineno']=828;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](ndarray, '__data')['__setitem__'](i, $p['op_bitand2']($p['getattr'](ndarray, '__data')['__getitem__'](i), other));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_410_err){if (!$p['isinstance']($pyjs_dbg_410_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_410_err);}throw $pyjs_dbg_410_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=830;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_411_err){if (!$p['isinstance']($pyjs_dbg_411_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_411_err);}throw $pyjs_dbg_411_err;
}})()) {
						$pyjs['track']['lineno']=831;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter42_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_412_err){if (!$p['isinstance']($pyjs_dbg_412_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_412_err);}throw $pyjs_dbg_412_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_413_err){if (!$p['isinstance']($pyjs_dbg_413_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_413_err);}throw $pyjs_dbg_413_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_414_err){if (!$p['isinstance']($pyjs_dbg_414_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_414_err);}throw $pyjs_dbg_414_err;
}})();
						$iter42_nextval=$p['__iter_prepare']($iter42_iter,false);
						while (typeof($p['__wrapped_next']($iter42_nextval)['$nextval']) != 'undefined') {
							i = $iter42_nextval['$nextval'];
							$pyjs['track']['lineno']=832;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](ndarray, '__data')['__setitem__'](i, $p['op_bitand2']($p['getattr'](ndarray, '__data')['__getitem__'](i), $p['getattr'](other, '__data')['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_415_err){if (!$p['isinstance']($pyjs_dbg_415_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_415_err);}throw $pyjs_dbg_415_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=834;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_416_err){if (!$p['isinstance']($pyjs_dbg_416_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_416_err);}throw $pyjs_dbg_416_err;
}})());
					}
				}
				$pyjs['track']['lineno']=835;
				$pyjs['track']['lineno']=835;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['bitwise_and'] = $method;
			$pyjs['track']['lineno']=837;
			$method = $pyjs__bind_method2('bitwise_or', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter43_type,$iter44_type,$iter43_iter,$iter43_array,$iter44_idx,i,$iter44_array,$iter44_iter,$iter43_idx,$pyjs__trackstack_size_1,$iter44_nextval,array,$iter43_nextval,ndarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':837};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=837;
				$pyjs['track']['lineno']=843;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_417_err){if (!$p['isinstance']($pyjs_dbg_417_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_417_err);}throw $pyjs_dbg_417_err;
}})();
				$pyjs['track']['lineno']=844;
				ndarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_418_err){if (!$p['isinstance']($pyjs_dbg_418_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_418_err);}throw $pyjs_dbg_418_err;
}})();
				$pyjs['track']['lineno']=845;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=846;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=847;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_419_err){if (!$p['isinstance']($pyjs_dbg_419_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_419_err);}throw $pyjs_dbg_419_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_420_err){if (!$p['isinstance']($pyjs_dbg_420_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_420_err);}throw $pyjs_dbg_420_err;
}})()) {
					$pyjs['track']['lineno']=848;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter43_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_421_err){if (!$p['isinstance']($pyjs_dbg_421_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_421_err);}throw $pyjs_dbg_421_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_422_err){if (!$p['isinstance']($pyjs_dbg_422_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_422_err);}throw $pyjs_dbg_422_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_423_err){if (!$p['isinstance']($pyjs_dbg_423_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_423_err);}throw $pyjs_dbg_423_err;
}})();
					$iter43_nextval=$p['__iter_prepare']($iter43_iter,false);
					while (typeof($p['__wrapped_next']($iter43_nextval)['$nextval']) != 'undefined') {
						i = $iter43_nextval['$nextval'];
						$pyjs['track']['lineno']=849;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](ndarray, '__data')['__setitem__'](i, $p['op_bitor2']($p['getattr'](ndarray, '__data')['__getitem__'](i), other));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_424_err){if (!$p['isinstance']($pyjs_dbg_424_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_424_err);}throw $pyjs_dbg_424_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=851;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_425_err){if (!$p['isinstance']($pyjs_dbg_425_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_425_err);}throw $pyjs_dbg_425_err;
}})()) {
						$pyjs['track']['lineno']=852;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter44_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_426_err){if (!$p['isinstance']($pyjs_dbg_426_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_426_err);}throw $pyjs_dbg_426_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_427_err){if (!$p['isinstance']($pyjs_dbg_427_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_427_err);}throw $pyjs_dbg_427_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_428_err){if (!$p['isinstance']($pyjs_dbg_428_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_428_err);}throw $pyjs_dbg_428_err;
}})();
						$iter44_nextval=$p['__iter_prepare']($iter44_iter,false);
						while (typeof($p['__wrapped_next']($iter44_nextval)['$nextval']) != 'undefined') {
							i = $iter44_nextval['$nextval'];
							$pyjs['track']['lineno']=853;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](ndarray, '__data')['__setitem__'](i, $p['op_bitor2']($p['getattr'](ndarray, '__data')['__getitem__'](i), $p['getattr'](other, '__data')['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_429_err){if (!$p['isinstance']($pyjs_dbg_429_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_429_err);}throw $pyjs_dbg_429_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=855;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_430_err){if (!$p['isinstance']($pyjs_dbg_430_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_430_err);}throw $pyjs_dbg_430_err;
}})());
					}
				}
				$pyjs['track']['lineno']=856;
				$pyjs['track']['lineno']=856;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['bitwise_or'] = $method;
			$pyjs['track']['lineno']=858;
			$method = $pyjs__bind_method2('bitwise_xor', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter46_array,$iter45_iter,i,$iter46_idx,$iter46_iter,$iter45_type,$iter45_nextval,$iter46_nextval,$pyjs__trackstack_size_1,$iter45_array,$iter45_idx,array,ndarray,$iter46_type;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':858};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=858;
				$pyjs['track']['lineno']=864;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_431_err){if (!$p['isinstance']($pyjs_dbg_431_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_431_err);}throw $pyjs_dbg_431_err;
}})();
				$pyjs['track']['lineno']=865;
				ndarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_432_err){if (!$p['isinstance']($pyjs_dbg_432_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_432_err);}throw $pyjs_dbg_432_err;
}})();
				$pyjs['track']['lineno']=866;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=867;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=868;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_433_err){if (!$p['isinstance']($pyjs_dbg_433_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_433_err);}throw $pyjs_dbg_433_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_434_err){if (!$p['isinstance']($pyjs_dbg_434_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_434_err);}throw $pyjs_dbg_434_err;
}})()) {
					$pyjs['track']['lineno']=869;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter45_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_435_err){if (!$p['isinstance']($pyjs_dbg_435_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_435_err);}throw $pyjs_dbg_435_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_436_err){if (!$p['isinstance']($pyjs_dbg_436_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_436_err);}throw $pyjs_dbg_436_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_437_err){if (!$p['isinstance']($pyjs_dbg_437_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_437_err);}throw $pyjs_dbg_437_err;
}})();
					$iter45_nextval=$p['__iter_prepare']($iter45_iter,false);
					while (typeof($p['__wrapped_next']($iter45_nextval)['$nextval']) != 'undefined') {
						i = $iter45_nextval['$nextval'];
						$pyjs['track']['lineno']=870;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](ndarray, '__data')['__setitem__'](i, $p['op_bitxor2']($p['getattr'](ndarray, '__data')['__getitem__'](i), other));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_438_err){if (!$p['isinstance']($pyjs_dbg_438_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_438_err);}throw $pyjs_dbg_438_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=872;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_439_err){if (!$p['isinstance']($pyjs_dbg_439_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_439_err);}throw $pyjs_dbg_439_err;
}})()) {
						$pyjs['track']['lineno']=873;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter46_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_440_err){if (!$p['isinstance']($pyjs_dbg_440_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_440_err);}throw $pyjs_dbg_440_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_441_err){if (!$p['isinstance']($pyjs_dbg_441_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_441_err);}throw $pyjs_dbg_441_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_442_err){if (!$p['isinstance']($pyjs_dbg_442_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_442_err);}throw $pyjs_dbg_442_err;
}})();
						$iter46_nextval=$p['__iter_prepare']($iter46_iter,false);
						while (typeof($p['__wrapped_next']($iter46_nextval)['$nextval']) != 'undefined') {
							i = $iter46_nextval['$nextval'];
							$pyjs['track']['lineno']=874;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](ndarray, '__data')['__setitem__'](i, $p['op_bitxor2']($p['getattr'](ndarray, '__data')['__getitem__'](i), $p['getattr'](other, '__data')['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_443_err){if (!$p['isinstance']($pyjs_dbg_443_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_443_err);}throw $pyjs_dbg_443_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=876;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_444_err){if (!$p['isinstance']($pyjs_dbg_444_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_444_err);}throw $pyjs_dbg_444_err;
}})());
					}
				}
				$pyjs['track']['lineno']=877;
				$pyjs['track']['lineno']=877;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['bitwise_xor'] = $method;
			$pyjs['track']['lineno']=879;
			$method = $pyjs__bind_method2('bitwise_iand', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter48_nextval,$iter47_idx,$iter48_iter,i,$pyjs__trackstack_size_1,$iter47_type,$iter48_array,$iter48_idx,$iter47_nextval,$iter47_array,$iter48_type,$iter47_iter;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':879};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=879;
				$pyjs['track']['lineno']=884;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_445_err){if (!$p['isinstance']($pyjs_dbg_445_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_445_err);}throw $pyjs_dbg_445_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_446_err){if (!$p['isinstance']($pyjs_dbg_446_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_446_err);}throw $pyjs_dbg_446_err;
}})()) {
					$pyjs['track']['lineno']=885;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter47_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_447_err){if (!$p['isinstance']($pyjs_dbg_447_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_447_err);}throw $pyjs_dbg_447_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_448_err){if (!$p['isinstance']($pyjs_dbg_448_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_448_err);}throw $pyjs_dbg_448_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_449_err){if (!$p['isinstance']($pyjs_dbg_449_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_449_err);}throw $pyjs_dbg_449_err;
}})();
					$iter47_nextval=$p['__iter_prepare']($iter47_iter,false);
					while (typeof($p['__wrapped_next']($iter47_nextval)['$nextval']) != 'undefined') {
						i = $iter47_nextval['$nextval'];
						$pyjs['track']['lineno']=886;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, '__data')['__setitem__'](i, $p['op_bitand2']($p['getattr'](self, '__data')['__getitem__'](i), other));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_450_err){if (!$p['isinstance']($pyjs_dbg_450_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_450_err);}throw $pyjs_dbg_450_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=888;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_451_err){if (!$p['isinstance']($pyjs_dbg_451_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_451_err);}throw $pyjs_dbg_451_err;
}})()) {
						$pyjs['track']['lineno']=889;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter48_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_452_err){if (!$p['isinstance']($pyjs_dbg_452_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_452_err);}throw $pyjs_dbg_452_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_453_err){if (!$p['isinstance']($pyjs_dbg_453_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_453_err);}throw $pyjs_dbg_453_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_454_err){if (!$p['isinstance']($pyjs_dbg_454_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_454_err);}throw $pyjs_dbg_454_err;
}})();
						$iter48_nextval=$p['__iter_prepare']($iter48_iter,false);
						while (typeof($p['__wrapped_next']($iter48_nextval)['$nextval']) != 'undefined') {
							i = $iter48_nextval['$nextval'];
							$pyjs['track']['lineno']=890;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, '__data')['__setitem__'](i, $p['op_bitand2']($p['getattr'](self, '__data')['__getitem__'](i), $p['getattr'](other, '__data')['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_455_err){if (!$p['isinstance']($pyjs_dbg_455_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_455_err);}throw $pyjs_dbg_455_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=892;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_456_err){if (!$p['isinstance']($pyjs_dbg_456_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_456_err);}throw $pyjs_dbg_456_err;
}})());
					}
				}
				$pyjs['track']['lineno']=893;
				$pyjs['track']['lineno']=893;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['bitwise_iand'] = $method;
			$pyjs['track']['lineno']=895;
			$method = $pyjs__bind_method2('bitwise_ior', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter50_idx,$iter49_type,i,$iter50_type,$iter50_nextval,$iter49_array,$iter49_iter,$pyjs__trackstack_size_1,$iter50_array,$iter49_idx,$iter49_nextval,$iter50_iter;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':895};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=895;
				$pyjs['track']['lineno']=900;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_457_err){if (!$p['isinstance']($pyjs_dbg_457_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_457_err);}throw $pyjs_dbg_457_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_458_err){if (!$p['isinstance']($pyjs_dbg_458_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_458_err);}throw $pyjs_dbg_458_err;
}})()) {
					$pyjs['track']['lineno']=901;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter49_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_459_err){if (!$p['isinstance']($pyjs_dbg_459_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_459_err);}throw $pyjs_dbg_459_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_460_err){if (!$p['isinstance']($pyjs_dbg_460_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_460_err);}throw $pyjs_dbg_460_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_461_err){if (!$p['isinstance']($pyjs_dbg_461_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_461_err);}throw $pyjs_dbg_461_err;
}})();
					$iter49_nextval=$p['__iter_prepare']($iter49_iter,false);
					while (typeof($p['__wrapped_next']($iter49_nextval)['$nextval']) != 'undefined') {
						i = $iter49_nextval['$nextval'];
						$pyjs['track']['lineno']=902;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, '__data')['__setitem__'](i, $p['op_bitor2']($p['getattr'](self, '__data')['__getitem__'](i), other));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_462_err){if (!$p['isinstance']($pyjs_dbg_462_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_462_err);}throw $pyjs_dbg_462_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=904;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_463_err){if (!$p['isinstance']($pyjs_dbg_463_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_463_err);}throw $pyjs_dbg_463_err;
}})()) {
						$pyjs['track']['lineno']=905;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter50_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_464_err){if (!$p['isinstance']($pyjs_dbg_464_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_464_err);}throw $pyjs_dbg_464_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_465_err){if (!$p['isinstance']($pyjs_dbg_465_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_465_err);}throw $pyjs_dbg_465_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_466_err){if (!$p['isinstance']($pyjs_dbg_466_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_466_err);}throw $pyjs_dbg_466_err;
}})();
						$iter50_nextval=$p['__iter_prepare']($iter50_iter,false);
						while (typeof($p['__wrapped_next']($iter50_nextval)['$nextval']) != 'undefined') {
							i = $iter50_nextval['$nextval'];
							$pyjs['track']['lineno']=906;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, '__data')['__setitem__'](i, $p['op_bitor2']($p['getattr'](self, '__data')['__getitem__'](i), $p['getattr'](other, '__data')['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_467_err){if (!$p['isinstance']($pyjs_dbg_467_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_467_err);}throw $pyjs_dbg_467_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=908;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_468_err){if (!$p['isinstance']($pyjs_dbg_468_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_468_err);}throw $pyjs_dbg_468_err;
}})());
					}
				}
				$pyjs['track']['lineno']=909;
				$pyjs['track']['lineno']=909;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['bitwise_ior'] = $method;
			$pyjs['track']['lineno']=911;
			$method = $pyjs__bind_method2('bitwise_ixor', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter51_array,$iter52_iter,i,$pyjs__trackstack_size_1,$iter52_idx,$iter51_iter,$iter51_nextval,$iter52_nextval,$iter52_type,$iter51_idx,$iter52_array,$iter51_type;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':911};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=911;
				$pyjs['track']['lineno']=916;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, '__iter__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_469_err){if (!$p['isinstance']($pyjs_dbg_469_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_469_err);}throw $pyjs_dbg_469_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_470_err){if (!$p['isinstance']($pyjs_dbg_470_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_470_err);}throw $pyjs_dbg_470_err;
}})()) {
					$pyjs['track']['lineno']=917;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter51_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_471_err){if (!$p['isinstance']($pyjs_dbg_471_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_471_err);}throw $pyjs_dbg_471_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_472_err){if (!$p['isinstance']($pyjs_dbg_472_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_472_err);}throw $pyjs_dbg_472_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_473_err){if (!$p['isinstance']($pyjs_dbg_473_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_473_err);}throw $pyjs_dbg_473_err;
}})();
					$iter51_nextval=$p['__iter_prepare']($iter51_iter,false);
					while (typeof($p['__wrapped_next']($iter51_nextval)['$nextval']) != 'undefined') {
						i = $iter51_nextval['$nextval'];
						$pyjs['track']['lineno']=918;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, '__data')['__setitem__'](i, $p['op_bitxor2']($p['getattr'](self, '__data')['__getitem__'](i), other));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_474_err){if (!$p['isinstance']($pyjs_dbg_474_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_474_err);}throw $pyjs_dbg_474_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=920;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_475_err){if (!$p['isinstance']($pyjs_dbg_475_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_475_err);}throw $pyjs_dbg_475_err;
}})()) {
						$pyjs['track']['lineno']=921;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter52_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_476_err){if (!$p['isinstance']($pyjs_dbg_476_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_476_err);}throw $pyjs_dbg_476_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_477_err){if (!$p['isinstance']($pyjs_dbg_477_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_477_err);}throw $pyjs_dbg_477_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_478_err){if (!$p['isinstance']($pyjs_dbg_478_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_478_err);}throw $pyjs_dbg_478_err;
}})();
						$iter52_nextval=$p['__iter_prepare']($iter52_iter,false);
						while (typeof($p['__wrapped_next']($iter52_nextval)['$nextval']) != 'undefined') {
							i = $iter52_nextval['$nextval'];
							$pyjs['track']['lineno']=922;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, '__data')['__setitem__'](i, $p['op_bitxor2']($p['getattr'](self, '__data')['__getitem__'](i), $p['getattr'](other, '__data')['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_479_err){if (!$p['isinstance']($pyjs_dbg_479_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_479_err);}throw $pyjs_dbg_479_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=924;
						$pyjs['__active_exception_stack__'] = null;
						throw ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['TypeError']('array shapes are not compatible');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_480_err){if (!$p['isinstance']($pyjs_dbg_480_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_480_err);}throw $pyjs_dbg_480_err;
}})());
					}
				}
				$pyjs['track']['lineno']=925;
				$pyjs['track']['lineno']=925;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['bitwise_ixor'] = $method;
			$pyjs['track']['lineno']=927;
			$method = $pyjs__bind_method2('bitwise_not', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter53_type,$iter53_idx,i,$iter53_array,$iter53_iter,$pyjs__trackstack_size_1,$iter53_nextval,array,ndarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':927};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=927;
				$pyjs['track']['lineno']=932;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_481_err){if (!$p['isinstance']($pyjs_dbg_481_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_481_err);}throw $pyjs_dbg_481_err;
}})();
				$pyjs['track']['lineno']=933;
				ndarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_482_err){if (!$p['isinstance']($pyjs_dbg_482_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_482_err);}throw $pyjs_dbg_482_err;
}})();
				$pyjs['track']['lineno']=934;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=935;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=936;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter53_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](ndarray, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_483_err){if (!$p['isinstance']($pyjs_dbg_483_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_483_err);}throw $pyjs_dbg_483_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_484_err){if (!$p['isinstance']($pyjs_dbg_484_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_484_err);}throw $pyjs_dbg_484_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_485_err){if (!$p['isinstance']($pyjs_dbg_485_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_485_err);}throw $pyjs_dbg_485_err;
}})();
				$iter53_nextval=$p['__iter_prepare']($iter53_iter,false);
				while (typeof($p['__wrapped_next']($iter53_nextval)['$nextval']) != 'undefined') {
					i = $iter53_nextval['$nextval'];
					$pyjs['track']['lineno']=937;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](ndarray, '__data')['__setitem__'](i, $p['op_invert']($p['getattr'](self, '__data')['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_486_err){if (!$p['isinstance']($pyjs_dbg_486_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_486_err);}throw $pyjs_dbg_486_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=938;
				$pyjs['track']['lineno']=938;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['bitwise_not'] = $method;
			$pyjs['track']['lineno']=940;
			$method = $pyjs__bind_method2('setshape', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var dim = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var dim = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter56_array,size,$div15,$iter54_idx,$iter55_iter,$iter55_nextval,$iter54_nextval,$iter54_type,$iter54_iter,$iter56_idx,$iter55_array,$iter56_type,$iter56_nextval,$iter56_iter,$iter55_idx,$iter54_array,array_size,i,$iter55_type,$pyjs__trackstack_size_1,indices,$mul34,$mul31,$div16,$mul33,$mul32;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':940};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=940;
				$pyjs['track']['lineno']=947;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](dim['__getitem__']($constant_int_0), $p['tuple']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_487_err){if (!$p['isinstance']($pyjs_dbg_487_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_487_err);}throw $pyjs_dbg_487_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_488_err){if (!$p['isinstance']($pyjs_dbg_488_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_488_err);}throw $pyjs_dbg_488_err;
}})()) {
					$pyjs['track']['lineno']=948;
					dim = dim['__getitem__']($constant_int_0);
				}
				$pyjs['track']['lineno']=949;
				size = $constant_int_1;
				$pyjs['track']['lineno']=950;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter54_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return dim;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_489_err){if (!$p['isinstance']($pyjs_dbg_489_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_489_err);}throw $pyjs_dbg_489_err;
}})();
				$iter54_nextval=$p['__iter_prepare']($iter54_iter,false);
				while (typeof($p['__wrapped_next']($iter54_nextval)['$nextval']) != 'undefined') {
					i = $iter54_nextval['$nextval'];
					$pyjs['track']['lineno']=951;
					size = (typeof ($mul31=size)==typeof ($mul32=i) && typeof $mul31=='number'?
						$mul31*$mul32:
						$p['op_mul']($mul31,$mul32));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=952;
				array_size = $constant_int_1;
				$pyjs['track']['lineno']=953;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter55_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_shape');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_490_err){if (!$p['isinstance']($pyjs_dbg_490_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_490_err);}throw $pyjs_dbg_490_err;
}})();
				$iter55_nextval=$p['__iter_prepare']($iter55_iter,false);
				while (typeof($p['__wrapped_next']($iter55_nextval)['$nextval']) != 'undefined') {
					i = $iter55_nextval['$nextval'];
					$pyjs['track']['lineno']=954;
					array_size = (typeof ($mul33=array_size)==typeof ($mul34=i) && typeof $mul33=='number'?
						$mul33*$mul34:
						$p['op_mul']($mul33,$mul34));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=955;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['op_eq'](size, array_size));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_491_err){if (!$p['isinstance']($pyjs_dbg_491_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_491_err);}throw $pyjs_dbg_491_err;
}})()) {
					$pyjs['track']['lineno']=956;
					$pyjs['__active_exception_stack__'] = null;
					throw ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['TypeError']('array size cannot change');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_492_err){if (!$p['isinstance']($pyjs_dbg_492_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_492_err);}throw $pyjs_dbg_492_err;
}})());
				}
				$pyjs['track']['lineno']=957;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_shape', dim) : $p['setattr'](self, '_shape', dim); 
				$pyjs['track']['lineno']=958;
				indices = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_493_err){if (!$p['isinstance']($pyjs_dbg_493_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_493_err);}throw $pyjs_dbg_493_err;
}})();
				$pyjs['track']['lineno']=959;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter56_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_shape');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_494_err){if (!$p['isinstance']($pyjs_dbg_494_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_494_err);}throw $pyjs_dbg_494_err;
}})();
				$iter56_nextval=$p['__iter_prepare']($iter56_iter,false);
				while (typeof($p['__wrapped_next']($iter56_nextval)['$nextval']) != 'undefined') {
					i = $iter56_nextval['$nextval'];
					$pyjs['track']['lineno']=960;
					size = (typeof ($div15=size)==typeof ($div16=i) && typeof $div15=='number' && $div16 !== 0?
						$div15/$div16:
						$p['op_div']($div15,$div16));
					$pyjs['track']['lineno']=961;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return indices['append'](size);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_495_err){if (!$p['isinstance']($pyjs_dbg_495_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_495_err);}throw $pyjs_dbg_495_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=962;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_indices', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](indices);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_496_err){if (!$p['isinstance']($pyjs_dbg_496_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_496_err);}throw $pyjs_dbg_496_err;
}})()) : $p['setattr'](self, '_indices', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](indices);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_496_err){if (!$p['isinstance']($pyjs_dbg_496_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_496_err);}throw $pyjs_dbg_496_err;
}})()); 
				$pyjs['track']['lineno']=963;
				$pyjs['track']['lineno']=963;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['dim',null,['self']]);
			$cls_definition['setshape'] = $method;
			$pyjs['track']['lineno']=965;
			$method = $pyjs__bind_method2('getshape', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':965};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=965;
				$pyjs['track']['lineno']=970;
				$pyjs['track']['lineno']=970;
				var $pyjs__ret = $p['getattr'](self, '_shape');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getshape'] = $method;
			$pyjs['track']['lineno']=972;
			$method = $pyjs__bind_method2('reshape', function(dim) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					dim = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var array,$iter57_idx,size,$div18,$iter59_iter,$div17,$iter57_iter,subarray,$iter57_array,$iter58_array,$iter59_array,$iter58_type,$iter59_type,indices,$iter58_iter,$iter58_idx,$iter58_nextval,$iter57_type,array_size,i,$iter59_idx,$mul38,$iter59_nextval,$pyjs__trackstack_size_1,$mul35,$mul37,$mul36,$iter57_nextval;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':972};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=972;
				$pyjs['track']['lineno']=978;
				size = $constant_int_1;
				$pyjs['track']['lineno']=979;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter57_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return dim;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_497_err){if (!$p['isinstance']($pyjs_dbg_497_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_497_err);}throw $pyjs_dbg_497_err;
}})();
				$iter57_nextval=$p['__iter_prepare']($iter57_iter,false);
				while (typeof($p['__wrapped_next']($iter57_nextval)['$nextval']) != 'undefined') {
					i = $iter57_nextval['$nextval'];
					$pyjs['track']['lineno']=980;
					size = (typeof ($mul35=size)==typeof ($mul36=i) && typeof $mul35=='number'?
						$mul35*$mul36:
						$p['op_mul']($mul35,$mul36));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=981;
				array_size = $constant_int_1;
				$pyjs['track']['lineno']=982;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter58_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_shape');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_498_err){if (!$p['isinstance']($pyjs_dbg_498_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_498_err);}throw $pyjs_dbg_498_err;
}})();
				$iter58_nextval=$p['__iter_prepare']($iter58_iter,false);
				while (typeof($p['__wrapped_next']($iter58_nextval)['$nextval']) != 'undefined') {
					i = $iter58_nextval['$nextval'];
					$pyjs['track']['lineno']=983;
					array_size = (typeof ($mul37=array_size)==typeof ($mul38=i) && typeof $mul37=='number'?
						$mul37*$mul38:
						$p['op_mul']($mul37,$mul38));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=984;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['op_eq'](size, array_size));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_499_err){if (!$p['isinstance']($pyjs_dbg_499_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_499_err);}throw $pyjs_dbg_499_err;
}})()) {
					$pyjs['track']['lineno']=985;
					$pyjs['__active_exception_stack__'] = null;
					throw ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['TypeError']('array size cannot change');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_500_err){if (!$p['isinstance']($pyjs_dbg_500_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_500_err);}throw $pyjs_dbg_500_err;
}})());
				}
				$pyjs['track']['lineno']=986;
				subarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__data']['subarray']($constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_501_err){if (!$p['isinstance']($pyjs_dbg_501_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_501_err);}throw $pyjs_dbg_501_err;
}})();
				$pyjs['track']['lineno']=987;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](subarray);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_502_err){if (!$p['isinstance']($pyjs_dbg_502_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_502_err);}throw $pyjs_dbg_502_err;
}})();
				$pyjs['track']['lineno']=988;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_shape', dim) : $p['setattr'](array, '_shape', dim); 
				$pyjs['track']['lineno']=989;
				indices = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_503_err){if (!$p['isinstance']($pyjs_dbg_503_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_503_err);}throw $pyjs_dbg_503_err;
}})();
				$pyjs['track']['lineno']=990;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter59_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](array, '_shape');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_504_err){if (!$p['isinstance']($pyjs_dbg_504_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_504_err);}throw $pyjs_dbg_504_err;
}})();
				$iter59_nextval=$p['__iter_prepare']($iter59_iter,false);
				while (typeof($p['__wrapped_next']($iter59_nextval)['$nextval']) != 'undefined') {
					i = $iter59_nextval['$nextval'];
					$pyjs['track']['lineno']=991;
					size = (typeof ($div17=size)==typeof ($div18=i) && typeof $div17=='number' && $div18 !== 0?
						$div17/$div18:
						$p['op_div']($div17,$div18));
					$pyjs['track']['lineno']=992;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return indices['append'](size);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_505_err){if (!$p['isinstance']($pyjs_dbg_505_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_505_err);}throw $pyjs_dbg_505_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=993;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_indices', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](indices);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_506_err){if (!$p['isinstance']($pyjs_dbg_506_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_506_err);}throw $pyjs_dbg_506_err;
}})()) : $p['setattr'](array, '_indices', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](indices);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_506_err){if (!$p['isinstance']($pyjs_dbg_506_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_506_err);}throw $pyjs_dbg_506_err;
}})()); 
				$pyjs['track']['lineno']=994;
				$pyjs['track']['lineno']=994;
				var $pyjs__ret = array;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['dim']]);
			$cls_definition['reshape'] = $method;
			$pyjs['track']['lineno']=996;
			$method = $pyjs__bind_method2('set', function(data) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter67_array,$iter68_idx,index,dataLn,$iter66_iter,$iter67_type,$iter65_array,$iter67_iter,$iter65_type,$iter67_idx,$iter67_nextval,$iter68_type,$iter65_nextval,$iter66_idx,$iter66_nextval,$iter65_iter,$iter68_array,$iter65_idx,$iter68_iter,$iter68_nextval,$iter66_type,$pyjs__trackstack_size_1,$iter66_array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':996};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=996;
				$pyjs['track']['lineno']=1001;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](data, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['list'], $p['tuple']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_507_err){if (!$p['isinstance']($pyjs_dbg_507_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_507_err);}throw $pyjs_dbg_507_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_508_err){if (!$p['isinstance']($pyjs_dbg_508_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_508_err);}throw $pyjs_dbg_508_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_509_err){if (!$p['isinstance']($pyjs_dbg_509_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_509_err);}throw $pyjs_dbg_509_err;
}})()) {
					$pyjs['track']['lineno']=1002;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_510_err){if (!$p['isinstance']($pyjs_dbg_510_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_510_err);}throw $pyjs_dbg_510_err;
}})()) {
						$pyjs['track']['lineno']=1003;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isinstance'](data['__getitem__']($constant_int_0), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$p['list'], $p['tuple'], $m['PyTypedArray']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_511_err){if (!$p['isinstance']($pyjs_dbg_511_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_511_err);}throw $pyjs_dbg_511_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_512_err){if (!$p['isinstance']($pyjs_dbg_512_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_512_err);}throw $pyjs_dbg_512_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_513_err){if (!$p['isinstance']($pyjs_dbg_513_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_513_err);}throw $pyjs_dbg_513_err;
}})()) {
							$pyjs['track']['lineno']=1004;
							data = function(){
								var $iter61_array,$iter61_type,$iter60_iter,$iter60_array,value,$iter60_idx,dat,$pyjs__trackstack_size_2,$collcomp12,$iter60_nextval,$iter60_type,$iter61_iter,$pyjs__trackstack_size_1,$iter61_idx,$iter61_nextval;
	$collcomp12 = $p['list']();
							$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
							$iter60_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
							return data;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_514_err){if (!$p['isinstance']($pyjs_dbg_514_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_514_err);}throw $pyjs_dbg_514_err;
}})();
							$iter60_nextval=$p['__iter_prepare']($iter60_iter,false);
							while (typeof($p['__wrapped_next']($iter60_nextval)['$nextval']) != 'undefined') {
								dat = $iter60_nextval['$nextval'];
								$pyjs['track']['lineno']=1004;
								$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
								$iter61_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
								return dat;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_515_err){if (!$p['isinstance']($pyjs_dbg_515_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_515_err);}throw $pyjs_dbg_515_err;
}})();
								$iter61_nextval=$p['__iter_prepare']($iter61_iter,false);
								while (typeof($p['__wrapped_next']($iter61_nextval)['$nextval']) != 'undefined') {
									value = $iter61_nextval['$nextval'];
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return $collcomp12['append'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_516_err){if (!$p['isinstance']($pyjs_dbg_516_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_516_err);}throw $pyjs_dbg_516_err;
}})();
								}
								if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
									$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
									$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
								}
								$pyjs['track']['module']='pyjsdl.pyjsarray';
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp12;}();
						}
					}
					else {
						$pyjs['track']['lineno']=1006;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isinstance'](data['__getitem__']($constant_int_0), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$p['list'], $p['tuple'], $m['PyTypedArray']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_517_err){if (!$p['isinstance']($pyjs_dbg_517_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_517_err);}throw $pyjs_dbg_517_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_518_err){if (!$p['isinstance']($pyjs_dbg_518_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_518_err);}throw $pyjs_dbg_518_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_519_err){if (!$p['isinstance']($pyjs_dbg_519_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_519_err);}throw $pyjs_dbg_519_err;
}})()) {
							$pyjs['track']['lineno']=1007;
							data = function(){
								var $iter62_nextval,$iter62_iter,$pyjs__trackstack_size_1,dat,$iter62_array,$collcomp13,$iter62_idx,$iter62_type;
	$collcomp13 = $p['list']();
							$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
							$iter62_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
							return data;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_520_err){if (!$p['isinstance']($pyjs_dbg_520_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_520_err);}throw $pyjs_dbg_520_err;
}})();
							$iter62_nextval=$p['__iter_prepare']($iter62_iter,false);
							while (typeof($p['__wrapped_next']($iter62_nextval)['$nextval']) != 'undefined') {
								dat = $iter62_nextval['$nextval'];
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return $collcomp13['append']((function(){try{try{$pyjs['in_try_except'] += 1;
								return dat['valueOf']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_521_err){if (!$p['isinstance']($pyjs_dbg_521_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_521_err);}throw $pyjs_dbg_521_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_522_err){if (!$p['isinstance']($pyjs_dbg_522_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_522_err);}throw $pyjs_dbg_522_err;
}})();
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp13;}();
						}
						else {
							$pyjs['track']['lineno']=1009;
							data = function(){
								var $iter63_array,dat,$iter63_type,$iter64_iter,$iter64_type,value,$iter63_idx,$pyjs__trackstack_size_2,$collcomp14,$iter64_array,$pyjs__trackstack_size_1,$iter63_nextval,$iter64_nextval,$iter64_idx,$iter63_iter;
	$collcomp14 = $p['list']();
							$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
							$iter63_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
							return data;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_523_err){if (!$p['isinstance']($pyjs_dbg_523_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_523_err);}throw $pyjs_dbg_523_err;
}})();
							$iter63_nextval=$p['__iter_prepare']($iter63_iter,false);
							while (typeof($p['__wrapped_next']($iter63_nextval)['$nextval']) != 'undefined') {
								dat = $iter63_nextval['$nextval'];
								$pyjs['track']['lineno']=1009;
								$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
								$iter64_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
								return dat;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_524_err){if (!$p['isinstance']($pyjs_dbg_524_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_524_err);}throw $pyjs_dbg_524_err;
}})();
								$iter64_nextval=$p['__iter_prepare']($iter64_iter,false);
								while (typeof($p['__wrapped_next']($iter64_nextval)['$nextval']) != 'undefined') {
									value = $iter64_nextval['$nextval'];
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return $collcomp14['append']((function(){try{try{$pyjs['in_try_except'] += 1;
									return value['valueOf']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_525_err){if (!$p['isinstance']($pyjs_dbg_525_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_525_err);}throw $pyjs_dbg_525_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_526_err){if (!$p['isinstance']($pyjs_dbg_526_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_526_err);}throw $pyjs_dbg_526_err;
}})();
								}
								if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
									$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
									$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
								}
								$pyjs['track']['module']='pyjsdl.pyjsarray';
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp14;}();
						}
					}
					$pyjs['track']['lineno']=1010;
					dataLn = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_527_err){if (!$p['isinstance']($pyjs_dbg_527_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_527_err);}throw $pyjs_dbg_527_err;
}})();
					$pyjs['track']['lineno']=1011;
					data = (function(){try{try{$pyjs['in_try_except'] += 1;
					return data['getArray']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_528_err){if (!$p['isinstance']($pyjs_dbg_528_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_528_err);}throw $pyjs_dbg_528_err;
}})();
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](data, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$m['Ndarray'], $m['PyTypedArray']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_529_err){if (!$p['isinstance']($pyjs_dbg_529_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_529_err);}throw $pyjs_dbg_529_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_530_err){if (!$p['isinstance']($pyjs_dbg_530_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_530_err);}throw $pyjs_dbg_530_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_531_err){if (!$p['isinstance']($pyjs_dbg_531_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_531_err);}throw $pyjs_dbg_531_err;
}})()) {
					$pyjs['track']['lineno']=1013;
					data = (function(){try{try{$pyjs['in_try_except'] += 1;
					return data['getArray']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_532_err){if (!$p['isinstance']($pyjs_dbg_532_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_532_err);}throw $pyjs_dbg_532_err;
}})();
					$pyjs['track']['lineno']=1014;
					dataLn = $p['getattr'](data, 'length');
				}
				else {
					$pyjs['track']['lineno']=1016;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_533_err){if (!$p['isinstance']($pyjs_dbg_533_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_533_err);}throw $pyjs_dbg_533_err;
}})()) {
						$pyjs['track']['lineno']=1017;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter65_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_534_err){if (!$p['isinstance']($pyjs_dbg_534_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_534_err);}throw $pyjs_dbg_534_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_535_err){if (!$p['isinstance']($pyjs_dbg_535_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_535_err);}throw $pyjs_dbg_535_err;
}})();
						$iter65_nextval=$p['__iter_prepare']($iter65_iter,false);
						while (typeof($p['__wrapped_next']($iter65_nextval)['$nextval']) != 'undefined') {
							index = $iter65_nextval['$nextval'];
							$pyjs['track']['lineno']=1018;
self['__data']['__data'][index]=data;
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=1020;
						data = (function(){try{try{$pyjs['in_try_except'] += 1;
						return data['valueOf']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_536_err){if (!$p['isinstance']($pyjs_dbg_536_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_536_err);}throw $pyjs_dbg_536_err;
}})();
						$pyjs['track']['lineno']=1021;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter66_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_537_err){if (!$p['isinstance']($pyjs_dbg_537_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_537_err);}throw $pyjs_dbg_537_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_538_err){if (!$p['isinstance']($pyjs_dbg_538_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_538_err);}throw $pyjs_dbg_538_err;
}})();
						$iter66_nextval=$p['__iter_prepare']($iter66_iter,false);
						while (typeof($p['__wrapped_next']($iter66_nextval)['$nextval']) != 'undefined') {
							index = $iter66_nextval['$nextval'];
							$pyjs['track']['lineno']=1022;
self['__data']['__data'][index]=data;
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					$pyjs['track']['lineno']=1023;
					$pyjs['track']['lineno']=1023;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=1024;
				if ($p['bool']($p['op_eq'](dataLn, $p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length')))) {
					$pyjs['track']['lineno']=1025;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter67_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_539_err){if (!$p['isinstance']($pyjs_dbg_539_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_539_err);}throw $pyjs_dbg_539_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_540_err){if (!$p['isinstance']($pyjs_dbg_540_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_540_err);}throw $pyjs_dbg_540_err;
}})();
					$iter67_nextval=$p['__iter_prepare']($iter67_iter,false);
					while (typeof($p['__wrapped_next']($iter67_nextval)['$nextval']) != 'undefined') {
						index = $iter67_nextval['$nextval'];
						$pyjs['track']['lineno']=1026;
self['__data']['__data'][index]=data[index];
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=1028;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter68_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_541_err){if (!$p['isinstance']($pyjs_dbg_541_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_541_err);}throw $pyjs_dbg_541_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_542_err){if (!$p['isinstance']($pyjs_dbg_542_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_542_err);}throw $pyjs_dbg_542_err;
}})();
					$iter68_nextval=$p['__iter_prepare']($iter68_iter,false);
					while (typeof($p['__wrapped_next']($iter68_nextval)['$nextval']) != 'undefined') {
						index = $iter68_nextval['$nextval'];
						$pyjs['track']['lineno']=1029;
self['__data']['__data'][index]=data[index%dataLn];
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				$pyjs['track']['lineno']=1030;
				$pyjs['track']['lineno']=1030;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['data']]);
			$cls_definition['set'] = $method;
			$pyjs['track']['lineno']=1032;
			$method = $pyjs__bind_method2('fill', function(value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					value = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter70_array,index,$iter70_type,$iter69_idx,$pyjs__trackstack_size_1,$iter69_type,$iter70_idx,$iter69_nextval,$iter70_nextval,$iter69_array,$iter70_iter,$iter69_iter;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1032};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1032;
				$pyjs['track']['lineno']=1036;
				if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
					$pyjs['track']['lineno']=1037;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter69_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_543_err){if (!$p['isinstance']($pyjs_dbg_543_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_543_err);}throw $pyjs_dbg_543_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_544_err){if (!$p['isinstance']($pyjs_dbg_544_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_544_err);}throw $pyjs_dbg_544_err;
}})();
					$iter69_nextval=$p['__iter_prepare']($iter69_iter,false);
					while (typeof($p['__wrapped_next']($iter69_nextval)['$nextval']) != 'undefined') {
						index = $iter69_nextval['$nextval'];
						$pyjs['track']['lineno']=1038;
self['__data']['__data'][index]=value;
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=1040;
					value = (function(){try{try{$pyjs['in_try_except'] += 1;
					return value['valueOf']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_545_err){if (!$p['isinstance']($pyjs_dbg_545_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_545_err);}throw $pyjs_dbg_545_err;
}})();
					$pyjs['track']['lineno']=1041;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter70_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_546_err){if (!$p['isinstance']($pyjs_dbg_546_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_546_err);}throw $pyjs_dbg_546_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_547_err){if (!$p['isinstance']($pyjs_dbg_547_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_547_err);}throw $pyjs_dbg_547_err;
}})();
					$iter70_nextval=$p['__iter_prepare']($iter70_iter,false);
					while (typeof($p['__wrapped_next']($iter70_nextval)['$nextval']) != 'undefined') {
						index = $iter70_nextval['$nextval'];
						$pyjs['track']['lineno']=1042;
self['__data']['__data'][index]=value;
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				$pyjs['track']['lineno']=1043;
				$pyjs['track']['lineno']=1043;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['fill'] = $method;
			$pyjs['track']['lineno']=1045;
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
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var array,ndarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1045};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1045;
				$pyjs['track']['lineno']=1049;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_548_err){if (!$p['isinstance']($pyjs_dbg_548_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_548_err);}throw $pyjs_dbg_548_err;
}})();
				$pyjs['track']['lineno']=1050;
				ndarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_549_err){if (!$p['isinstance']($pyjs_dbg_549_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_549_err);}throw $pyjs_dbg_549_err;
}})();
				$pyjs['track']['lineno']=1051;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=1052;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=1053;
				$pyjs['track']['lineno']=1053;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['copy'] = $method;
			$pyjs['track']['lineno']=1055;
			$method = $pyjs__bind_method2('astype', function(dtype) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					dtype = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var array,ndarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1055};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1055;
				$pyjs['track']['lineno']=1060;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_550_err){if (!$p['isinstance']($pyjs_dbg_550_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_550_err);}throw $pyjs_dbg_550_err;
}})();
				$pyjs['track']['lineno']=1061;
				ndarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](array, dtype);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_551_err){if (!$p['isinstance']($pyjs_dbg_551_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_551_err);}throw $pyjs_dbg_551_err;
}})();
				$pyjs['track']['lineno']=1062;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=1063;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=1064;
				$pyjs['track']['lineno']=1064;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['dtype']]);
			$cls_definition['astype'] = $method;
			$pyjs['track']['lineno']=1066;
			$method = $pyjs__bind_method2('view', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var subarray,array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1066};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1066;
				$pyjs['track']['lineno']=1070;
				subarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__data']['subarray']($constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_552_err){if (!$p['isinstance']($pyjs_dbg_552_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_552_err);}throw $pyjs_dbg_552_err;
}})();
				$pyjs['track']['lineno']=1071;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](subarray);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_553_err){if (!$p['isinstance']($pyjs_dbg_553_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_553_err);}throw $pyjs_dbg_553_err;
}})();
				$pyjs['track']['lineno']=1072;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](array, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=1073;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](array, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=1074;
				$pyjs['track']['lineno']=1074;
				var $pyjs__ret = array;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['view'] = $method;
			$pyjs['track']['lineno']=1076;
			$method = $pyjs__bind_method2('swapaxes', function(axis1, axis2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					axis1 = arguments[1];
					axis2 = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var shape,indices,array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1076};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1076;
				$pyjs['track']['lineno']=1082;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray']($p['getattr'](self, '__data'), $p['getattr'](self, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_554_err){if (!$p['isinstance']($pyjs_dbg_554_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_554_err);}throw $pyjs_dbg_554_err;
}})();
				$pyjs['track']['lineno']=1083;
				shape = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']($p['getattr'](self, '_shape'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_555_err){if (!$p['isinstance']($pyjs_dbg_555_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_555_err);}throw $pyjs_dbg_555_err;
}})();
				$pyjs['track']['lineno']=1084;
				var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([shape['__getitem__'](axis2), shape['__getitem__'](axis1)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_556_err){if (!$p['isinstance']($pyjs_dbg_556_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_556_err);}throw $pyjs_dbg_556_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_557_err){if (!$p['isinstance']($pyjs_dbg_557_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_557_err);}throw $pyjs_dbg_557_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shape['__setitem__'](axis1, $tupleassign3[0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_558_err){if (!$p['isinstance']($pyjs_dbg_558_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_558_err);}throw $pyjs_dbg_558_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shape['__setitem__'](axis2, $tupleassign3[1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_559_err){if (!$p['isinstance']($pyjs_dbg_559_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_559_err);}throw $pyjs_dbg_559_err;
}})();
				$pyjs['track']['lineno']=1085;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_shape', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](shape);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_560_err){if (!$p['isinstance']($pyjs_dbg_560_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_560_err);}throw $pyjs_dbg_560_err;
}})()) : $p['setattr'](array, '_shape', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](shape);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_560_err){if (!$p['isinstance']($pyjs_dbg_560_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_560_err);}throw $pyjs_dbg_560_err;
}})()); 
				$pyjs['track']['lineno']=1086;
				indices = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']($p['getattr'](self, '_indices'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_561_err){if (!$p['isinstance']($pyjs_dbg_561_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_561_err);}throw $pyjs_dbg_561_err;
}})();
				$pyjs['track']['lineno']=1087;
				var $tupleassign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([indices['__getitem__'](axis2), indices['__getitem__'](axis1)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_562_err){if (!$p['isinstance']($pyjs_dbg_562_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_562_err);}throw $pyjs_dbg_562_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_563_err){if (!$p['isinstance']($pyjs_dbg_563_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_563_err);}throw $pyjs_dbg_563_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return indices['__setitem__'](axis1, $tupleassign4[0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_564_err){if (!$p['isinstance']($pyjs_dbg_564_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_564_err);}throw $pyjs_dbg_564_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return indices['__setitem__'](axis2, $tupleassign4[1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_565_err){if (!$p['isinstance']($pyjs_dbg_565_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_565_err);}throw $pyjs_dbg_565_err;
}})();
				$pyjs['track']['lineno']=1088;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_indices', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](indices);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_566_err){if (!$p['isinstance']($pyjs_dbg_566_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_566_err);}throw $pyjs_dbg_566_err;
}})()) : $p['setattr'](array, '_indices', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](indices);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_566_err){if (!$p['isinstance']($pyjs_dbg_566_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_566_err);}throw $pyjs_dbg_566_err;
}})()); 
				$pyjs['track']['lineno']=1089;
				$pyjs['track']['lineno']=1089;
				var $pyjs__ret = array;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['axis1'],['axis2']]);
			$cls_definition['swapaxes'] = $method;
			$pyjs['track']['lineno']=1091;
			$method = $pyjs__bind_method2('getArray', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c41d7647b9bd6879e143bda4d07b1ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1091};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1091;
				$pyjs['track']['lineno']=1095;
				$pyjs['track']['lineno']=1095;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__data']['getArray']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_567_err){if (!$p['isinstance']($pyjs_dbg_567_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_567_err);}throw $pyjs_dbg_567_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getArray'] = $method;
			$pyjs['track']['lineno']=398;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Ndarray', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=1098;
		$m['NP'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = 'f759646422da751226ebec46742a8234';
			$pyjs['track']['lineno']=1100;
			$method = $pyjs__bind_method2('zeros', function(size, dtype) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					dtype = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f759646422da751226ebec46742a8234') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1100};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1100;
				$pyjs['track']['lineno']=1101;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](dtype, 'i'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_568_err){if (!$p['isinstance']($pyjs_dbg_568_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_568_err);}throw $pyjs_dbg_568_err;
}})()) {
					$pyjs['track']['lineno']=1102;
					dtype = $constant_int_3;
				}
				$pyjs['track']['lineno']=1103;
				$pyjs['track']['lineno']=1103;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray'](size, dtype);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_569_err){if (!$p['isinstance']($pyjs_dbg_569_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_569_err);}throw $pyjs_dbg_569_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['size'],['dtype']]);
			$cls_definition['zeros'] = $method;
			$pyjs['track']['lineno']=1105;
			$method = $pyjs__bind_method2('swapaxes', function(array, axis1, axis2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					array = arguments[1];
					axis1 = arguments[2];
					axis2 = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f759646422da751226ebec46742a8234') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1105};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1105;
				$pyjs['track']['lineno']=1106;
				$pyjs['track']['lineno']=1106;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return array['swapaxes'](axis1, axis2);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_570_err){if (!$p['isinstance']($pyjs_dbg_570_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_570_err);}throw $pyjs_dbg_570_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['array'],['axis1'],['axis2']]);
			$cls_definition['swapaxes'] = $method;
			$pyjs['track']['lineno']=1108;
			$method = $pyjs__bind_method2('append', function(array, values) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					array = arguments[1];
					values = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f759646422da751226ebec46742a8234') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add65,$add66,newarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1108};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1108;
				$pyjs['track']['lineno']=1109;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](values['__getitem__']($constant_int_0), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['list'], $p['tuple'], $m['PyTypedArray']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_571_err){if (!$p['isinstance']($pyjs_dbg_571_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_571_err);}throw $pyjs_dbg_571_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_572_err){if (!$p['isinstance']($pyjs_dbg_572_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_572_err);}throw $pyjs_dbg_572_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_573_err){if (!$p['isinstance']($pyjs_dbg_573_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_573_err);}throw $pyjs_dbg_573_err;
}})()) {
					$pyjs['track']['lineno']=1110;
					values = function(){
						var $iter71_nextval,$iter72_array,$iter71_iter,$iter72_type,$pyjs__trackstack_size_1,value,dat,$iter71_array,$collcomp15,$pyjs__trackstack_size_2,$iter72_iter,$iter71_idx,$iter71_type,$iter72_idx,$iter72_nextval;
	$collcomp15 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter71_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return values;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_574_err){if (!$p['isinstance']($pyjs_dbg_574_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_574_err);}throw $pyjs_dbg_574_err;
}})();
					$iter71_nextval=$p['__iter_prepare']($iter71_iter,false);
					while (typeof($p['__wrapped_next']($iter71_nextval)['$nextval']) != 'undefined') {
						dat = $iter71_nextval['$nextval'];
						$pyjs['track']['lineno']=1110;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter72_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return dat;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_575_err){if (!$p['isinstance']($pyjs_dbg_575_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_575_err);}throw $pyjs_dbg_575_err;
}})();
						$iter72_nextval=$p['__iter_prepare']($iter72_iter,false);
						while (typeof($p['__wrapped_next']($iter72_nextval)['$nextval']) != 'undefined') {
							value = $iter72_nextval['$nextval'];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp15['append'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_576_err){if (!$p['isinstance']($pyjs_dbg_576_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_576_err);}throw $pyjs_dbg_576_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp15;}();
				}
				$pyjs['track']['lineno']=1111;
				newarray = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray']($p['__op_add']($add65=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](array);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_577_err){if (!$p['isinstance']($pyjs_dbg_577_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_577_err);}throw $pyjs_dbg_577_err;
}})(),$add66=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](values);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_578_err){if (!$p['isinstance']($pyjs_dbg_578_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_578_err);}throw $pyjs_dbg_578_err;
}})()), $p['getattr'](array, '_dtype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_579_err){if (!$p['isinstance']($pyjs_dbg_579_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_579_err);}throw $pyjs_dbg_579_err;
}})();
				$pyjs['track']['lineno']=1112;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return newarray['__data']['set']($p['getattr'](array, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_580_err){if (!$p['isinstance']($pyjs_dbg_580_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_580_err);}throw $pyjs_dbg_580_err;
}})();
				$pyjs['track']['lineno']=1113;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return newarray['__data']['set'](values, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](array);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_581_err){if (!$p['isinstance']($pyjs_dbg_581_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_581_err);}throw $pyjs_dbg_581_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_582_err){if (!$p['isinstance']($pyjs_dbg_582_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_582_err);}throw $pyjs_dbg_582_err;
}})();
				$pyjs['track']['lineno']=1114;
				$pyjs['track']['lineno']=1114;
				var $pyjs__ret = newarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['array'],['values']]);
			$cls_definition['append'] = $method;
			$pyjs['track']['lineno']=1098;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('NP', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=1116;
		$m['np'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['NP']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_583_err){if (!$p['isinstance']($pyjs_dbg_583_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_583_err);}throw $pyjs_dbg_583_err;
}})();
		$pyjs['track']['lineno']=1119;
		$m['PyImageData'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '97750f0aa8a9d301629276b361a8cb0d';
			$pyjs['track']['lineno']=1121;
			$method = $pyjs__bind_method2('__init__', function(imagedata) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					imagedata = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '97750f0aa8a9d301629276b361a8cb0d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1121};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1121;
				$pyjs['track']['lineno']=1126;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__imagedata', imagedata) : $p['setattr'](self, '__imagedata', imagedata); 
				$pyjs['track']['lineno']=1127;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isUndefined']((typeof Uint8ClampedArray == "undefined"?$m['Uint8ClampedArray']:Uint8ClampedArray));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_584_err){if (!$p['isinstance']($pyjs_dbg_584_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_584_err);}throw $pyjs_dbg_584_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_585_err){if (!$p['isinstance']($pyjs_dbg_585_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_585_err);}throw $pyjs_dbg_585_err;
}})()) {
					$pyjs['track']['lineno']=1128;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['PyUint8ClampedArray']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_586_err){if (!$p['isinstance']($pyjs_dbg_586_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_586_err);}throw $pyjs_dbg_586_err;
}})()) : $p['setattr'](self, 'data', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['PyUint8ClampedArray']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_586_err){if (!$p['isinstance']($pyjs_dbg_586_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_586_err);}throw $pyjs_dbg_586_err;
}})()); 
				}
				else {
					$pyjs['track']['lineno']=1130;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['PyCanvasPixelArray']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_587_err){if (!$p['isinstance']($pyjs_dbg_587_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_587_err);}throw $pyjs_dbg_587_err;
}})()) : $p['setattr'](self, 'data', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['PyCanvasPixelArray']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_587_err){if (!$p['isinstance']($pyjs_dbg_587_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_587_err);}throw $pyjs_dbg_587_err;
}})()); 
				}
				$pyjs['track']['lineno']=1131;
				$p['getattr'](self, 'data')['__is_instance__'] && typeof $p['getattr'](self, 'data')['__setattr__'] == 'function' ? $p['getattr'](self, 'data')['__setattr__']('__data', $p['getattr'](imagedata, 'data')) : $p['setattr']($p['getattr'](self, 'data'), '__data', $p['getattr'](imagedata, 'data')); 
				$pyjs['track']['lineno']=1132;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $p['getattr'](imagedata, 'width')) : $p['setattr'](self, 'width', $p['getattr'](imagedata, 'width')); 
				$pyjs['track']['lineno']=1133;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $p['getattr'](imagedata, 'height')) : $p['setattr'](self, 'height', $p['getattr'](imagedata, 'height')); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['imagedata']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=1135;
			$method = $pyjs__bind_method2('getImageData', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '97750f0aa8a9d301629276b361a8cb0d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1135};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1135;
				$pyjs['track']['lineno']=1139;
				$pyjs['track']['lineno']=1139;
				var $pyjs__ret = $p['getattr'](self, '__imagedata');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getImageData'] = $method;
			$pyjs['track']['lineno']=1119;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyImageData', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=1142;
		$m['PyImageMatrix'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '829668659c4c08701bbe577941963a9a';
			$pyjs['track']['lineno']=1144;
			$method = $pyjs__bind_method2('__init__', function(imagedata) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					imagedata = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '829668659c4c08701bbe577941963a9a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1144};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1144;
				$pyjs['track']['lineno']=1149;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__imagedata', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyImageData'](imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_588_err){if (!$p['isinstance']($pyjs_dbg_588_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_588_err);}throw $pyjs_dbg_588_err;
}})()) : $p['setattr'](self, '__imagedata', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyImageData'](imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_588_err){if (!$p['isinstance']($pyjs_dbg_588_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_588_err);}throw $pyjs_dbg_588_err;
}})()); 
				$pyjs['track']['lineno']=1150;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance']($p['getattr']($p['getattr'](self, '__imagedata'), 'data'), $m['PyUint8ClampedArray']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_589_err){if (!$p['isinstance']($pyjs_dbg_589_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_589_err);}throw $pyjs_dbg_589_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_590_err){if (!$p['isinstance']($pyjs_dbg_590_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_590_err);}throw $pyjs_dbg_590_err;
}})()) {
					$pyjs['track']['lineno']=1151;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Ndarray']['__init__'](self, $p['getattr']($p['getattr'](self, '__imagedata'), 'data'), $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_591_err){if (!$p['isinstance']($pyjs_dbg_591_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_591_err);}throw $pyjs_dbg_591_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=1153;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Ndarray']['__init__'](self, $p['getattr']($p['getattr'](self, '__imagedata'), 'data'), $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_592_err){if (!$p['isinstance']($pyjs_dbg_592_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_592_err);}throw $pyjs_dbg_592_err;
}})();
				}
				$pyjs['track']['lineno']=1154;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setshape']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'), $p['getattr']($p['getattr'](self, '__imagedata'), 'width'), $constant_int_4);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_593_err){if (!$p['isinstance']($pyjs_dbg_593_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_593_err);}throw $pyjs_dbg_593_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['imagedata']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=1156;
			$method = $pyjs__bind_method2('getWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '829668659c4c08701bbe577941963a9a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1156};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1156;
				$pyjs['track']['lineno']=1160;
				$pyjs['track']['lineno']=1160;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__imagedata'), 'width');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getWidth'] = $method;
			$pyjs['track']['lineno']=1162;
			$method = $pyjs__bind_method2('getHeight', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '829668659c4c08701bbe577941963a9a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1162};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1162;
				$pyjs['track']['lineno']=1166;
				$pyjs['track']['lineno']=1166;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__imagedata'), 'height');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHeight'] = $method;
			$pyjs['track']['lineno']=1168;
			$method = $pyjs__bind_method2('getPixel', function(index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '829668659c4c08701bbe577941963a9a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add67,$add72,$add73,$add70,$add71,i,$add69,$mul40,$mul41,$mul42,$add68,$mul39,$add74;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1168};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1168;
				$pyjs['track']['lineno']=1173;
				i = $p['__op_add']($add67=(typeof ($mul39=index['__getitem__']($constant_int_0))==typeof ($mul40=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul39=='number'?
					$mul39*$mul40:
					$p['op_mul']($mul39,$mul40)),$add68=(typeof ($mul41=index['__getitem__']($constant_int_1))==typeof ($mul42=$constant_int_4) && typeof $mul41=='number'?
					$mul41*$mul42:
					$p['op_mul']($mul41,$mul42)));
				$pyjs['track']['lineno']=1174;
				$pyjs['track']['lineno']=1174;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__'](i), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add69=i,$add70=$constant_int_1)), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add71=i,$add72=$constant_int_2)), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add73=i,$add74=$constant_int_3))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_594_err){if (!$p['isinstance']($pyjs_dbg_594_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_594_err);}throw $pyjs_dbg_594_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getPixel'] = $method;
			$pyjs['track']['lineno']=1176;
			$method = $pyjs__bind_method2('setPixel', function(index, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '829668659c4c08701bbe577941963a9a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add76,$add75,$add77,$mul44,$mul45,$add80,$mul43,i,$add81,$add78,$add82,$add79,$mul46;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1176};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1176;
				$pyjs['track']['lineno']=1181;
				i = $p['__op_add']($add75=(typeof ($mul43=index['__getitem__']($constant_int_0))==typeof ($mul44=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul43=='number'?
					$mul43*$mul44:
					$p['op_mul']($mul43,$mul44)),$add76=(typeof ($mul45=index['__getitem__']($constant_int_1))==typeof ($mul46=$constant_int_4) && typeof $mul45=='number'?
					$mul45*$mul46:
					$p['op_mul']($mul45,$mul46)));
				$pyjs['track']['lineno']=1182;
				var $tupleassign5 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([value['__getitem__']($constant_int_0), value['__getitem__']($constant_int_1), value['__getitem__']($constant_int_2), value['__getitem__']($constant_int_3)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_595_err){if (!$p['isinstance']($pyjs_dbg_595_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_595_err);}throw $pyjs_dbg_595_err;
}})(), 4, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_596_err){if (!$p['isinstance']($pyjs_dbg_596_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_596_err);}throw $pyjs_dbg_596_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__'](i, $tupleassign5[0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_597_err){if (!$p['isinstance']($pyjs_dbg_597_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_597_err);}throw $pyjs_dbg_597_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add77=i,$add78=$constant_int_1), $tupleassign5[1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_598_err){if (!$p['isinstance']($pyjs_dbg_598_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_598_err);}throw $pyjs_dbg_598_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add79=i,$add80=$constant_int_2), $tupleassign5[2]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_599_err){if (!$p['isinstance']($pyjs_dbg_599_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_599_err);}throw $pyjs_dbg_599_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add81=i,$add82=$constant_int_3), $tupleassign5[3]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_600_err){if (!$p['isinstance']($pyjs_dbg_600_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_600_err);}throw $pyjs_dbg_600_err;
}})();
				$pyjs['track']['lineno']=1183;
				$pyjs['track']['lineno']=1183;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['setPixel'] = $method;
			$pyjs['track']['lineno']=1185;
			$method = $pyjs__bind_method2('getPixelRGB', function(index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '829668659c4c08701bbe577941963a9a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul50,$mul48,$mul49,$add83,$mul47,$add87,$add86,$add85,$add84,i,$add88;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1185};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1185;
				$pyjs['track']['lineno']=1190;
				i = $p['__op_add']($add83=(typeof ($mul47=index['__getitem__']($constant_int_0))==typeof ($mul48=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul47=='number'?
					$mul47*$mul48:
					$p['op_mul']($mul47,$mul48)),$add84=(typeof ($mul49=index['__getitem__']($constant_int_1))==typeof ($mul50=$constant_int_4) && typeof $mul49=='number'?
					$mul49*$mul50:
					$p['op_mul']($mul49,$mul50)));
				$pyjs['track']['lineno']=1191;
				$pyjs['track']['lineno']=1191;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__'](i), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add85=i,$add86=$constant_int_1)), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add87=i,$add88=$constant_int_2))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_601_err){if (!$p['isinstance']($pyjs_dbg_601_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_601_err);}throw $pyjs_dbg_601_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getPixelRGB'] = $method;
			$pyjs['track']['lineno']=1193;
			$method = $pyjs__bind_method2('setPixelRGB', function(index, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '829668659c4c08701bbe577941963a9a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add89,$add94,$mul53,$mul52,$add90,$add91,$mul54,i,$add92,$add93,$mul51;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1193};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1193;
				$pyjs['track']['lineno']=1198;
				i = $p['__op_add']($add89=(typeof ($mul51=index['__getitem__']($constant_int_0))==typeof ($mul52=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul51=='number'?
					$mul51*$mul52:
					$p['op_mul']($mul51,$mul52)),$add90=(typeof ($mul53=index['__getitem__']($constant_int_1))==typeof ($mul54=$constant_int_4) && typeof $mul53=='number'?
					$mul53*$mul54:
					$p['op_mul']($mul53,$mul54)));
				$pyjs['track']['lineno']=1199;
				var $tupleassign6 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([value['__getitem__']($constant_int_0), value['__getitem__']($constant_int_1), value['__getitem__']($constant_int_2)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_602_err){if (!$p['isinstance']($pyjs_dbg_602_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_602_err);}throw $pyjs_dbg_602_err;
}})(), 3, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_603_err){if (!$p['isinstance']($pyjs_dbg_603_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_603_err);}throw $pyjs_dbg_603_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__'](i, $tupleassign6[0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_604_err){if (!$p['isinstance']($pyjs_dbg_604_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_604_err);}throw $pyjs_dbg_604_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add91=i,$add92=$constant_int_1), $tupleassign6[1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_605_err){if (!$p['isinstance']($pyjs_dbg_605_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_605_err);}throw $pyjs_dbg_605_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add93=i,$add94=$constant_int_2), $tupleassign6[2]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_606_err){if (!$p['isinstance']($pyjs_dbg_606_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_606_err);}throw $pyjs_dbg_606_err;
}})();
				$pyjs['track']['lineno']=1200;
				$pyjs['track']['lineno']=1200;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['setPixelRGB'] = $method;
			$pyjs['track']['lineno']=1202;
			$method = $pyjs__bind_method2('getPixelAlpha', function(index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '829668659c4c08701bbe577941963a9a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul58,$add98,i,$add95,$add97,$mul57,$mul56,$mul55,$add96;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1202};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1202;
				$pyjs['track']['lineno']=1207;
				i = $p['__op_add']($add95=(typeof ($mul55=index['__getitem__']($constant_int_0))==typeof ($mul56=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul55=='number'?
					$mul55*$mul56:
					$p['op_mul']($mul55,$mul56)),$add96=(typeof ($mul57=index['__getitem__']($constant_int_1))==typeof ($mul58=$constant_int_4) && typeof $mul57=='number'?
					$mul57*$mul58:
					$p['op_mul']($mul57,$mul58)));
				$pyjs['track']['lineno']=1208;
				$pyjs['track']['lineno']=1208;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add97=i,$add98=$constant_int_3));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getPixelAlpha'] = $method;
			$pyjs['track']['lineno']=1210;
			$method = $pyjs__bind_method2('setPixelAlpha', function(index, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '829668659c4c08701bbe577941963a9a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul62,$mul60,$mul61,$add101,$add99,$add100,i,$mul59,$add102;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1210};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1210;
				$pyjs['track']['lineno']=1215;
				i = $p['__op_add']($add99=(typeof ($mul59=index['__getitem__']($constant_int_0))==typeof ($mul60=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul59=='number'?
					$mul59*$mul60:
					$p['op_mul']($mul59,$mul60)),$add100=(typeof ($mul61=index['__getitem__']($constant_int_1))==typeof ($mul62=$constant_int_4) && typeof $mul61=='number'?
					$mul61*$mul62:
					$p['op_mul']($mul61,$mul62)));
				$pyjs['track']['lineno']=1216;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add101=i,$add102=$constant_int_3), value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_607_err){if (!$p['isinstance']($pyjs_dbg_607_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_607_err);}throw $pyjs_dbg_607_err;
}})();
				$pyjs['track']['lineno']=1217;
				$pyjs['track']['lineno']=1217;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['setPixelAlpha'] = $method;
			$pyjs['track']['lineno']=1219;
			$method = $pyjs__bind_method2('getPixelInteger', function(index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '829668659c4c08701bbe577941963a9a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add103,$mul66,$add104,$mul64,$mul65,i,$add108,$add106,$add110,$add109,$add107,$add105,$mul63;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1219};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1219;
				$pyjs['track']['lineno']=1224;
				i = $p['__op_add']($add103=(typeof ($mul63=index['__getitem__']($constant_int_0))==typeof ($mul64=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul63=='number'?
					$mul63*$mul64:
					$p['op_mul']($mul63,$mul64)),$add104=(typeof ($mul65=index['__getitem__']($constant_int_1))==typeof ($mul66=$constant_int_4) && typeof $mul65=='number'?
					$mul65*$mul66:
					$p['op_mul']($mul65,$mul66)));
				$pyjs['track']['lineno']=1225;
				$pyjs['track']['lineno']=1225;
				var $pyjs__ret = $p['op_bitor']([$p['op_bitshiftleft']($p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__'](i),$constant_int_16), $p['op_bitshiftleft']($p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add105=i,$add106=$constant_int_1)),$constant_int_8), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add107=i,$add108=$constant_int_2)), $p['op_bitshiftleft']($p['getattr']($p['getattr'](self, 'imagedata'), 'data')['__getitem__']($p['__op_add']($add109=i,$add110=$constant_int_3)),$constant_int_24)]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getPixelInteger'] = $method;
			$pyjs['track']['lineno']=1227;
			$method = $pyjs__bind_method2('setPixelInteger', function(index, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '829668659c4c08701bbe577941963a9a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add114,$add115,$mul67,$add118,$mul70,i,$add117,$mul69,$add112,$add113,$add111,$add116,$mul68;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1227};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1227;
				$pyjs['track']['lineno']=1232;
				i = $p['__op_add']($add111=(typeof ($mul67=index['__getitem__']($constant_int_0))==typeof ($mul68=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul67=='number'?
					$mul67*$mul68:
					$p['op_mul']($mul67,$mul68)),$add112=(typeof ($mul69=index['__getitem__']($constant_int_1))==typeof ($mul70=$constant_int_4) && typeof $mul69=='number'?
					$mul69*$mul70:
					$p['op_mul']($mul69,$mul70)));
				$pyjs['track']['lineno']=1233;
				var $tupleassign7 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['op_bitand2']($p['op_bitshiftright'](value,$constant_int_16), $constant_int_255), $p['op_bitand2']($p['op_bitshiftright'](value,$constant_int_8), $constant_int_255), $p['op_bitand2'](value, $constant_int_255), $p['op_bitand2']($p['op_bitshiftright'](value,$constant_int_24), $constant_int_255)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_608_err){if (!$p['isinstance']($pyjs_dbg_608_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_608_err);}throw $pyjs_dbg_608_err;
}})(), 4, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_609_err){if (!$p['isinstance']($pyjs_dbg_609_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_609_err);}throw $pyjs_dbg_609_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__'](i, $tupleassign7[0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_610_err){if (!$p['isinstance']($pyjs_dbg_610_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_610_err);}throw $pyjs_dbg_610_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add113=i,$add114=$constant_int_1), $tupleassign7[1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_611_err){if (!$p['isinstance']($pyjs_dbg_611_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_611_err);}throw $pyjs_dbg_611_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add115=i,$add116=$constant_int_2), $tupleassign7[2]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_612_err){if (!$p['isinstance']($pyjs_dbg_612_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_612_err);}throw $pyjs_dbg_612_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add117=i,$add118=$constant_int_3), $tupleassign7[3]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_613_err){if (!$p['isinstance']($pyjs_dbg_613_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_613_err);}throw $pyjs_dbg_613_err;
}})();
				$pyjs['track']['lineno']=1234;
				$pyjs['track']['lineno']=1234;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['setPixelInteger'] = $method;
			$pyjs['track']['lineno']=1236;
			$method = $pyjs__bind_method2('getImageData', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '829668659c4c08701bbe577941963a9a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1236};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1236;
				$pyjs['track']['lineno']=1240;
				$pyjs['track']['lineno']=1240;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__imagedata']['getImageData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_614_err){if (!$p['isinstance']($pyjs_dbg_614_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_614_err);}throw $pyjs_dbg_614_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getImageData'] = $method;
			$pyjs['track']['lineno']=1142;
			var $bases = new Array($m['Ndarray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyImageMatrix', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=1243;
		$m['BitSet'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '9a6bddf4a0aa317bb7cb4a4b6a244067';
			$pyjs['track']['lineno']=1249;
			$cls_definition['__bit'] = $constant_int_8;
			$pyjs['track']['lineno']=1250;
			$cls_definition['__bitmask'] = null;
			$pyjs['track']['lineno']=1251;
			$cls_definition['__typedarray'] = $m['PyUint8Array'];
			$pyjs['track']['lineno']=1253;
			$method = $pyjs__bind_method2('__init__', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
				var $mul71,$sub30,$mul72,$sub27,$div20,$sub29,$sub28,$div19;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1253};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1253;
				$pyjs['track']['lineno']=1254;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, '__class__'), '__bitmask')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_615_err){if (!$p['isinstance']($pyjs_dbg_615_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_615_err);}throw $pyjs_dbg_615_err;
}})()) {
					$pyjs['track']['lineno']=1255;
					$p['getattr'](self, '__class__')['__is_instance__'] && typeof $p['getattr'](self, '__class__')['__setattr__'] == 'function' ? $p['getattr'](self, '__class__')['__setattr__']('__bitmask', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict'](function(){
						var $sub22,$sub23,$sub21,$sub26,$iter73_iter,$sub24,$sub25,i,$iter73_array,$iter73_idx,$collcomp16,$iter73_nextval,$iter73_type,$pyjs__trackstack_size_1;
	$collcomp16 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter73_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['range']($p['__op_sub']($sub21=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub22=$constant_int_1), (typeof ($usub3=$constant_int_1)=='number'?
						-$usub3:
						$p['op_usub']($usub3)), (typeof ($usub4=$constant_int_1)=='number'?
						-$usub4:
						$p['op_usub']($usub4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_616_err){if (!$p['isinstance']($pyjs_dbg_616_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_616_err);}throw $pyjs_dbg_616_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_617_err){if (!$p['isinstance']($pyjs_dbg_617_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_617_err);}throw $pyjs_dbg_617_err;
}})();
					$iter73_nextval=$p['__iter_prepare']($iter73_iter,false);
					while (typeof($p['__wrapped_next']($iter73_nextval)['$nextval']) != 'undefined') {
						i = $iter73_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp16['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$p['__op_sub']($sub25=$p['__op_sub']($sub23=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub24=i),$sub26=$constant_int_1), $p['op_bitshiftleft']($constant_int_1,i)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_618_err){if (!$p['isinstance']($pyjs_dbg_618_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_618_err);}throw $pyjs_dbg_618_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_619_err){if (!$p['isinstance']($pyjs_dbg_619_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_619_err);}throw $pyjs_dbg_619_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp16;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_620_err){if (!$p['isinstance']($pyjs_dbg_620_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_620_err);}throw $pyjs_dbg_620_err;
}})()) : $p['setattr']($p['getattr'](self, '__class__'), '__bitmask', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict'](function(){
						var $sub22,$sub23,$sub21,$sub26,$iter73_iter,$sub24,$sub25,i,$iter73_array,$iter73_idx,$collcomp16,$iter73_nextval,$iter73_type,$pyjs__trackstack_size_1;
	$collcomp16 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter73_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['range']($p['__op_sub']($sub21=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub22=$constant_int_1), (typeof ($usub3=$constant_int_1)=='number'?
						-$usub3:
						$p['op_usub']($usub3)), (typeof ($usub4=$constant_int_1)=='number'?
						-$usub4:
						$p['op_usub']($usub4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_616_err){if (!$p['isinstance']($pyjs_dbg_616_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_616_err);}throw $pyjs_dbg_616_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_617_err){if (!$p['isinstance']($pyjs_dbg_617_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_617_err);}throw $pyjs_dbg_617_err;
}})();
					$iter73_nextval=$p['__iter_prepare']($iter73_iter,false);
					while (typeof($p['__wrapped_next']($iter73_nextval)['$nextval']) != 'undefined') {
						i = $iter73_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp16['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$p['__op_sub']($sub25=$p['__op_sub']($sub23=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub24=i),$sub26=$constant_int_1), $p['op_bitshiftleft']($constant_int_1,i)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_618_err){if (!$p['isinstance']($pyjs_dbg_618_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_618_err);}throw $pyjs_dbg_618_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_619_err){if (!$p['isinstance']($pyjs_dbg_619_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_619_err);}throw $pyjs_dbg_619_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp16;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_620_err){if (!$p['isinstance']($pyjs_dbg_620_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_620_err);}throw $pyjs_dbg_620_err;
}})()); 
					$pyjs['track']['lineno']=1256;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($p['getattr'](self, '__class__'), '__bitmask')['__setitem__']($p['__op_sub']($sub29=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub30=$constant_int_1), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']($p['getattr']($p['getattr'](self, '__class__'), '__bitmask')['__getitem__']($p['__op_sub']($sub27=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub28=$constant_int_1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_621_err){if (!$p['isinstance']($pyjs_dbg_621_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_621_err);}throw $pyjs_dbg_621_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_622_err){if (!$p['isinstance']($pyjs_dbg_622_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_622_err);}throw $pyjs_dbg_622_err;
}})();
				}
				$pyjs['track']['lineno']=1257;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_623_err){if (!$p['isinstance']($pyjs_dbg_623_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_623_err);}throw $pyjs_dbg_623_err;
}})()) {
					$pyjs['track']['lineno']=1258;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__width', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['abs'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_624_err){if (!$p['isinstance']($pyjs_dbg_624_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_624_err);}throw $pyjs_dbg_624_err;
}})()) : $p['setattr'](self, '__width', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['abs'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_624_err){if (!$p['isinstance']($pyjs_dbg_624_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_624_err);}throw $pyjs_dbg_624_err;
}})()); 
				}
				else {
					$pyjs['track']['lineno']=1260;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__width', $p['getattr'](self, '__bit')) : $p['setattr'](self, '__width', $p['getattr'](self, '__bit')); 
				}
				$pyjs['track']['lineno']=1261;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__typedarray']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['_ceil']((typeof ($div19=$p['getattr'](self, '__width'))==typeof ($div20=(typeof ($mul71=$p['getattr'](self, '__bit'))==typeof ($mul72=1.0) && typeof $mul71=='number'?
					$mul71*$mul72:
					$p['op_mul']($mul71,$mul72))) && typeof $div19=='number' && $div20 !== 0?
					$div19/$div20:
					$p['op_div']($div19,$div20)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_625_err){if (!$p['isinstance']($pyjs_dbg_625_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_625_err);}throw $pyjs_dbg_625_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_626_err){if (!$p['isinstance']($pyjs_dbg_626_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_626_err);}throw $pyjs_dbg_626_err;
}})()) : $p['setattr'](self, '__data', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__typedarray']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['_ceil']((typeof ($div19=$p['getattr'](self, '__width'))==typeof ($div20=(typeof ($mul71=$p['getattr'](self, '__bit'))==typeof ($mul72=1.0) && typeof $mul71=='number'?
					$mul71*$mul72:
					$p['op_mul']($mul71,$mul72))) && typeof $div19=='number' && $div20 !== 0?
					$div19/$div20:
					$p['op_div']($div19,$div20)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_625_err){if (!$p['isinstance']($pyjs_dbg_625_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_625_err);}throw $pyjs_dbg_625_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_626_err){if (!$p['isinstance']($pyjs_dbg_626_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_626_err);}throw $pyjs_dbg_626_err;
}})()); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=1263;
			$method = $pyjs__bind_method2('__str__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1263};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1263;
				$pyjs['track']['lineno']=1267;
				$pyjs['track']['lineno']=1267;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s', $p['getattr'](self, '__class__'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_627_err){if (!$p['isinstance']($pyjs_dbg_627_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_627_err);}throw $pyjs_dbg_627_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs['track']['lineno']=1269;
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
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,$add122,$add121,$add119,$add120,$iter74_array,$iter74_nextval,$iter74_iter,$pyjs__trackstack_size_1,$iter74_idx,$iter74_type,setBit;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1269};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1269;
				$pyjs['track']['lineno']=1273;
				setBit = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_628_err){if (!$p['isinstance']($pyjs_dbg_628_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_628_err);}throw $pyjs_dbg_628_err;
}})();
				$pyjs['track']['lineno']=1274;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter74_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($p['getattr'](self, '__width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_629_err){if (!$p['isinstance']($pyjs_dbg_629_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_629_err);}throw $pyjs_dbg_629_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_630_err){if (!$p['isinstance']($pyjs_dbg_630_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_630_err);}throw $pyjs_dbg_630_err;
}})();
				$iter74_nextval=$p['__iter_prepare']($iter74_iter,false);
				while (typeof($p['__wrapped_next']($iter74_nextval)['$nextval']) != 'undefined') {
					index = $iter74_nextval['$nextval'];
					$pyjs['track']['lineno']=1275;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['get'](index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_631_err){if (!$p['isinstance']($pyjs_dbg_631_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_631_err);}throw $pyjs_dbg_631_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_632_err){if (!$p['isinstance']($pyjs_dbg_632_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_632_err);}throw $pyjs_dbg_632_err;
}})()) {
						$pyjs['track']['lineno']=1276;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return setBit['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['str'](index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_633_err){if (!$p['isinstance']($pyjs_dbg_633_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_633_err);}throw $pyjs_dbg_633_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_634_err){if (!$p['isinstance']($pyjs_dbg_634_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_634_err);}throw $pyjs_dbg_634_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1277;
				$pyjs['track']['lineno']=1277;
				var $pyjs__ret = $p['__op_add']($add121=$p['__op_add']($add119='{',$add120=(function(){try{try{$pyjs['in_try_except'] += 1;
				return ', '['join'](setBit);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_635_err){if (!$p['isinstance']($pyjs_dbg_635_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_635_err);}throw $pyjs_dbg_635_err;
}})()),$add122='}');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=1279;
			$method = $pyjs__bind_method2('__getitem__', function(index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1279};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1279;
				$pyjs['track']['lineno']=1283;
				$pyjs['track']['lineno']=1283;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['get'](index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_636_err){if (!$p['isinstance']($pyjs_dbg_636_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_636_err);}throw $pyjs_dbg_636_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=1285;
			$method = $pyjs__bind_method2('__setitem__', function(index, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1285};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1285;
				$pyjs['track']['lineno']=1289;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['set'](index, value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_637_err){if (!$p['isinstance']($pyjs_dbg_637_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_637_err);}throw $pyjs_dbg_637_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['__setitem__'] = $method;
			$pyjs['track']['lineno']=1291;
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
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub31,index,$sub32,$iter75_nextval,$iter75_iter,$iter75_type,$add124,$iter75_idx,$pyjs__trackstack_size_1,$add123,$iter75_array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1291};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1291;
				$pyjs['track']['lineno']=1295;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter75_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($p['__op_sub']($sub31=$p['getattr'](self, '__width'),$sub32=$constant_int_1), (typeof ($usub5=$constant_int_1)=='number'?
					-$usub5:
					$p['op_usub']($usub5)), (typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_638_err){if (!$p['isinstance']($pyjs_dbg_638_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_638_err);}throw $pyjs_dbg_638_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_639_err){if (!$p['isinstance']($pyjs_dbg_639_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_639_err);}throw $pyjs_dbg_639_err;
}})();
				$iter75_nextval=$p['__iter_prepare']($iter75_iter,false);
				while (typeof($p['__wrapped_next']($iter75_nextval)['$nextval']) != 'undefined') {
					index = $iter75_nextval['$nextval'];
					$pyjs['track']['lineno']=1296;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['get'](index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_640_err){if (!$p['isinstance']($pyjs_dbg_640_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_640_err);}throw $pyjs_dbg_640_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_641_err){if (!$p['isinstance']($pyjs_dbg_641_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_641_err);}throw $pyjs_dbg_641_err;
}})()) {
						$pyjs['track']['lineno']=1297;
						break;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1298;
				$pyjs['track']['lineno']=1298;
				var $pyjs__ret = $p['__op_add']($add123=index,$add124=$constant_int_1);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs['track']['lineno']=1300;
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
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add127,index,$add125,$add126,$add128;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
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
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration']();
					} catch (e) {
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
															($p['isinstance']($exc_value, $exc_type)
															 ? $exc_value : $exc_type($exc_value)));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
					$yield_value = null;
					$exc=$p['GeneratorExit']();
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				
					$pyjs['track']={'module':'pyjsdl.pyjsarray','lineno':1300};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=1300;
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$pyjs['track']['lineno']=1304;
						index = $constant_int_0;
						$pyjs['track']['lineno']=1305;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state['splice'](1, $generator_state['length']-1);
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0)||((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['cmp'](index, $p['getattr'](self, '__width')) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_644_err){if (!$p['isinstance']($pyjs_dbg_644_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_644_err);}throw $pyjs_dbg_644_err;
}})());$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								$pyjs['track']['lineno']=1306;
								$pyjs['track']['lineno']=1306;
								$yield_value = (function(){try{try{$pyjs['in_try_except'] += 1;
								return self['get'](index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_645_err){if (!$p['isinstance']($pyjs_dbg_645_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_645_err);}throw $pyjs_dbg_645_err;
}})();
								$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
								$yielding = true;
								$generator_state[1] = 1;
								return $yield_value;
								$generator_state[1]=1;
							}
							if ($generator_state[1] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[1] = -1;
									throw $exc;
								}
								$pyjs['track']['lineno']=1307;
								index = $p['__op_add']($add127=index,$add128=$constant_int_1);
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
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=1309;
			$method = $pyjs__bind_method2('get', function(index, toIndex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					toIndex = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
				var ix,$iter76_nextval,$add130,$mod5,$mod4,$mod6,$mod3,$iter76_iter,size,$sub33,$sub35,$sub34,$sub37,$sub36,$sub38,$div23,$add129,bitset,$div21,$div22,$div24,i,$iter76_array,$pyjs__trackstack_size_1,$iter76_type,$iter76_idx;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1309};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1309;
				$pyjs['track']['lineno']=1314;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp'](index, $p['__op_sub']($sub33=$p['getattr'](self, '__width'),$sub34=$constant_int_1)) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_646_err){if (!$p['isinstance']($pyjs_dbg_646_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_646_err);}throw $pyjs_dbg_646_err;
}})()) {
					$pyjs['track']['lineno']=1315;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool'](toIndex));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_647_err){if (!$p['isinstance']($pyjs_dbg_647_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_647_err);}throw $pyjs_dbg_647_err;
}})()) {
						$pyjs['track']['lineno']=1316;
						$pyjs['track']['lineno']=1316;
						var $pyjs__ret = false;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=1318;
						size = $p['__op_sub']($sub35=toIndex,$sub36=index);
						$pyjs['track']['lineno']=1319;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['cmp'](size, $constant_int_0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_648_err){if (!$p['isinstance']($pyjs_dbg_648_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_648_err);}throw $pyjs_dbg_648_err;
}})()) {
							$pyjs['track']['lineno']=1320;
							$pyjs['track']['lineno']=1320;
							var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
							return self['__class__'](size);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_649_err){if (!$p['isinstance']($pyjs_dbg_649_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_649_err);}throw $pyjs_dbg_649_err;
}})();
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
						else {
							$pyjs['track']['lineno']=1322;
							$pyjs['track']['lineno']=1322;
							var $pyjs__ret = null;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
				}
				$pyjs['track']['lineno']=1323;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_is'](toIndex, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_650_err){if (!$p['isinstance']($pyjs_dbg_650_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_650_err);}throw $pyjs_dbg_650_err;
}})()) {
					$pyjs['track']['lineno']=1324;
					$pyjs['track']['lineno']=1324;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_bitand2']($p['getattr'](self, '__data')['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div21=index)==typeof ($div22=$p['getattr'](self, '__bit')) && typeof $div21=='number' && $div22 !== 0?
						$div21/$div22:
						$p['op_div']($div21,$div22)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_651_err){if (!$p['isinstance']($pyjs_dbg_651_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_651_err);}throw $pyjs_dbg_651_err;
}})()), $p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod3=index)==typeof ($mod4=$p['getattr'](self, '__bit')) && typeof $mod3=='number'?
						(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
						$p['op_mod']($mod3,$mod4)))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_652_err){if (!$p['isinstance']($pyjs_dbg_652_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_652_err);}throw $pyjs_dbg_652_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=1326;
					size = $p['__op_sub']($sub37=toIndex,$sub38=index);
					$pyjs['track']['lineno']=1327;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp'](size, $constant_int_0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_653_err){if (!$p['isinstance']($pyjs_dbg_653_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_653_err);}throw $pyjs_dbg_653_err;
}})()) {
						$pyjs['track']['lineno']=1328;
						bitset = (function(){try{try{$pyjs['in_try_except'] += 1;
						return self['__class__'](size);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_654_err){if (!$p['isinstance']($pyjs_dbg_654_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_654_err);}throw $pyjs_dbg_654_err;
}})();
						$pyjs['track']['lineno']=1329;
						ix = $constant_int_0;
						$pyjs['track']['lineno']=1330;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['cmp'](toIndex, $p['getattr'](self, '__width')) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_655_err){if (!$p['isinstance']($pyjs_dbg_655_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_655_err);}throw $pyjs_dbg_655_err;
}})()) {
							$pyjs['track']['lineno']=1331;
							toIndex = $p['getattr'](self, '__width');
						}
						$pyjs['track']['lineno']=1332;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter76_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange'](index, toIndex);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_656_err){if (!$p['isinstance']($pyjs_dbg_656_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_656_err);}throw $pyjs_dbg_656_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_657_err){if (!$p['isinstance']($pyjs_dbg_657_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_657_err);}throw $pyjs_dbg_657_err;
}})();
						$iter76_nextval=$p['__iter_prepare']($iter76_iter,false);
						while (typeof($p['__wrapped_next']($iter76_nextval)['$nextval']) != 'undefined') {
							i = $iter76_nextval['$nextval'];
							$pyjs['track']['lineno']=1333;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return bitset['set'](ix, (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['op_bitand2']($p['getattr'](self, '__data')['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['int']((typeof ($div23=i)==typeof ($div24=$p['getattr'](self, '__bit')) && typeof $div23=='number' && $div24 !== 0?
								$div23/$div24:
								$p['op_div']($div23,$div24)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_658_err){if (!$p['isinstance']($pyjs_dbg_658_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_658_err);}throw $pyjs_dbg_658_err;
}})()), $p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod5=i)==typeof ($mod6=$p['getattr'](self, '__bit')) && typeof $mod5=='number'?
								(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
								$p['op_mod']($mod5,$mod6)))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_659_err){if (!$p['isinstance']($pyjs_dbg_659_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_659_err);}throw $pyjs_dbg_659_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_660_err){if (!$p['isinstance']($pyjs_dbg_660_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_660_err);}throw $pyjs_dbg_660_err;
}})();
							$pyjs['track']['lineno']=1334;
							ix = $p['__op_add']($add129=ix,$add130=$constant_int_1);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
						$pyjs['track']['lineno']=1335;
						$pyjs['track']['lineno']=1335;
						var $pyjs__ret = bitset;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=1337;
						$pyjs['track']['lineno']=1337;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index'],['toIndex', null]]);
			$cls_definition['get'] = $method;
			$pyjs['track']['lineno']=1339;
			$method = $pyjs__bind_method2('set', function(index, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof value == 'undefined') value=arguments['callee']['__args__'][4][1];
				var $div32,$div30,$div31,$div25,$add131,$add132,$div26,$sub39,$div28,$div29,$div27,$mod7,$sub40,$mod9,$mod8,$mod10;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1339};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1339;
				$pyjs['track']['lineno']=1344;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp'](index, $p['__op_sub']($sub39=$p['getattr'](self, '__width'),$sub40=$constant_int_1)) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_661_err){if (!$p['isinstance']($pyjs_dbg_661_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_661_err);}throw $pyjs_dbg_661_err;
}})()) {
					$pyjs['track']['lineno']=1345;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_662_err){if (!$p['isinstance']($pyjs_dbg_662_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_662_err);}throw $pyjs_dbg_662_err;
}})()) {
						$pyjs['track']['lineno']=1346;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['resize']($p['__op_add']($add131=index,$add132=$constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_663_err){if (!$p['isinstance']($pyjs_dbg_663_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_663_err);}throw $pyjs_dbg_663_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=1348;
						$pyjs['track']['lineno']=1348;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['track']['lineno']=1349;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_664_err){if (!$p['isinstance']($pyjs_dbg_664_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_664_err);}throw $pyjs_dbg_664_err;
}})()) {
					$pyjs['track']['lineno']=1350;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '__data')['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div27=index)==typeof ($div28=$p['getattr'](self, '__bit')) && typeof $div27=='number' && $div28 !== 0?
						$div27/$div28:
						$p['op_div']($div27,$div28)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_666_err){if (!$p['isinstance']($pyjs_dbg_666_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_666_err);}throw $pyjs_dbg_666_err;
}})(), $p['op_bitor2']($p['getattr'](self, '__data')['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div25=index)==typeof ($div26=$p['getattr'](self, '__bit')) && typeof $div25=='number' && $div26 !== 0?
						$div25/$div26:
						$p['op_div']($div25,$div26)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_665_err){if (!$p['isinstance']($pyjs_dbg_665_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_665_err);}throw $pyjs_dbg_665_err;
}})()), $p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod7=index)==typeof ($mod8=$p['getattr'](self, '__bit')) && typeof $mod7=='number'?
						(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
						$p['op_mod']($mod7,$mod8)))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_667_err){if (!$p['isinstance']($pyjs_dbg_667_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_667_err);}throw $pyjs_dbg_667_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=1353;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '__data')['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div31=index)==typeof ($div32=$p['getattr'](self, '__bit')) && typeof $div31=='number' && $div32 !== 0?
						$div31/$div32:
						$p['op_div']($div31,$div32)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_669_err){if (!$p['isinstance']($pyjs_dbg_669_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_669_err);}throw $pyjs_dbg_669_err;
}})(), $p['op_bitand2']($p['getattr'](self, '__data')['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div29=index)==typeof ($div30=$p['getattr'](self, '__bit')) && typeof $div29=='number' && $div30 !== 0?
						$div29/$div30:
						$p['op_div']($div29,$div30)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_668_err){if (!$p['isinstance']($pyjs_dbg_668_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_668_err);}throw $pyjs_dbg_668_err;
}})()), $p['op_invert']($p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod9=index)==typeof ($mod10=$p['getattr'](self, '__bit')) && typeof $mod9=='number'?
						(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
						$p['op_mod']($mod9,$mod10))))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_670_err){if (!$p['isinstance']($pyjs_dbg_670_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_670_err);}throw $pyjs_dbg_670_err;
}})();
				}
				$pyjs['track']['lineno']=1355;
				$pyjs['track']['lineno']=1355;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value', $constant_int_1]]);
			$cls_definition['set'] = $method;
			$pyjs['track']['lineno']=1357;
			$method = $pyjs__bind_method2('fill', function(index, toIndex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					toIndex = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof index == 'undefined') index=arguments['callee']['__args__'][3][1];
				if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
				var $iter77_type,$iter78_iter,i,$iter77_iter,$and3,$and4,$iter78_type,$iter78_nextval,$iter78_idx,$iter77_array,$iter78_array,$iter77_nextval,$iter77_idx,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1357};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1357;
				$pyjs['track']['lineno']=1362;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and3=$p['op_is'](index, null))?$p['op_is'](toIndex, null):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_671_err){if (!$p['isinstance']($pyjs_dbg_671_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_671_err);}throw $pyjs_dbg_671_err;
}})()) {
					$pyjs['track']['lineno']=1363;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter77_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']($constant_int_0, $p['getattr'](self, '__width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_672_err){if (!$p['isinstance']($pyjs_dbg_672_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_672_err);}throw $pyjs_dbg_672_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_673_err){if (!$p['isinstance']($pyjs_dbg_673_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_673_err);}throw $pyjs_dbg_673_err;
}})();
					$iter77_nextval=$p['__iter_prepare']($iter77_iter,false);
					while (typeof($p['__wrapped_next']($iter77_nextval)['$nextval']) != 'undefined') {
						i = $iter77_nextval['$nextval'];
						$pyjs['track']['lineno']=1364;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['set'](i, $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_674_err){if (!$p['isinstance']($pyjs_dbg_674_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_674_err);}throw $pyjs_dbg_674_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=1366;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_is'](toIndex, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_675_err){if (!$p['isinstance']($pyjs_dbg_675_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_675_err);}throw $pyjs_dbg_675_err;
}})()) {
						$pyjs['track']['lineno']=1367;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['set'](index, $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_676_err){if (!$p['isinstance']($pyjs_dbg_676_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_676_err);}throw $pyjs_dbg_676_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=1369;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter78_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange'](index, toIndex);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_677_err){if (!$p['isinstance']($pyjs_dbg_677_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_677_err);}throw $pyjs_dbg_677_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_678_err){if (!$p['isinstance']($pyjs_dbg_678_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_678_err);}throw $pyjs_dbg_678_err;
}})();
						$iter78_nextval=$p['__iter_prepare']($iter78_iter,false);
						while (typeof($p['__wrapped_next']($iter78_nextval)['$nextval']) != 'undefined') {
							i = $iter78_nextval['$nextval'];
							$pyjs['track']['lineno']=1370;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['set'](i, $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_679_err){if (!$p['isinstance']($pyjs_dbg_679_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_679_err);}throw $pyjs_dbg_679_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index', null],['toIndex', null]]);
			$cls_definition['fill'] = $method;
			$pyjs['track']['lineno']=1372;
			$method = $pyjs__bind_method2('clear', function(index, toIndex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					toIndex = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof index == 'undefined') index=arguments['callee']['__args__'][3][1];
				if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
				var $iter81_array,$iter79_idx,$iter80_idx,$iter81_idx,$iter79_nextval,$iter80_type,$iter81_iter,$iter79_type,$iter80_iter,$iter81_type,$iter79_array,$and5,$and6,dat,$iter81_nextval,$iter80_nextval,i,$iter79_iter,$iter80_array,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1372};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1372;
				$pyjs['track']['lineno']=1377;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_is'](index, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_680_err){if (!$p['isinstance']($pyjs_dbg_680_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_680_err);}throw $pyjs_dbg_680_err;
}})()) {
					$pyjs['track']['lineno']=1378;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter79_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_681_err){if (!$p['isinstance']($pyjs_dbg_681_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_681_err);}throw $pyjs_dbg_681_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_682_err){if (!$p['isinstance']($pyjs_dbg_682_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_682_err);}throw $pyjs_dbg_682_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_683_err){if (!$p['isinstance']($pyjs_dbg_683_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_683_err);}throw $pyjs_dbg_683_err;
}})();
					$iter79_nextval=$p['__iter_prepare']($iter79_iter,false);
					while (typeof($p['__wrapped_next']($iter79_nextval)['$nextval']) != 'undefined') {
						i = $iter79_nextval['$nextval'];
						$pyjs['track']['lineno']=1379;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, '__data')['__setitem__'](i, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_684_err){if (!$p['isinstance']($pyjs_dbg_684_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_684_err);}throw $pyjs_dbg_684_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=1381;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_is'](toIndex, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_685_err){if (!$p['isinstance']($pyjs_dbg_685_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_685_err);}throw $pyjs_dbg_685_err;
}})()) {
						$pyjs['track']['lineno']=1382;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['set'](index, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_686_err){if (!$p['isinstance']($pyjs_dbg_686_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_686_err);}throw $pyjs_dbg_686_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=1384;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($and5=$p['op_eq'](index, $constant_int_0))?$p['op_eq'](toIndex, $p['getattr'](self, '__width')):$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_687_err){if (!$p['isinstance']($pyjs_dbg_687_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_687_err);}throw $pyjs_dbg_687_err;
}})()) {
							$pyjs['track']['lineno']=1385;
							$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
							$iter80_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
							return (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_688_err){if (!$p['isinstance']($pyjs_dbg_688_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_688_err);}throw $pyjs_dbg_688_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_689_err){if (!$p['isinstance']($pyjs_dbg_689_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_689_err);}throw $pyjs_dbg_689_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_690_err){if (!$p['isinstance']($pyjs_dbg_690_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_690_err);}throw $pyjs_dbg_690_err;
}})();
							$iter80_nextval=$p['__iter_prepare']($iter80_iter,false);
							while (typeof($p['__wrapped_next']($iter80_nextval)['$nextval']) != 'undefined') {
								dat = $iter80_nextval['$nextval'];
								$pyjs['track']['lineno']=1386;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['getattr'](self, '__data')['__setitem__'](dat, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_691_err){if (!$p['isinstance']($pyjs_dbg_691_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_691_err);}throw $pyjs_dbg_691_err;
}})();
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
						else {
							$pyjs['track']['lineno']=1388;
							$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
							$iter81_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
							return (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['xrange'](index, toIndex);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_692_err){if (!$p['isinstance']($pyjs_dbg_692_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_692_err);}throw $pyjs_dbg_692_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_693_err){if (!$p['isinstance']($pyjs_dbg_693_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_693_err);}throw $pyjs_dbg_693_err;
}})();
							$iter81_nextval=$p['__iter_prepare']($iter81_iter,false);
							while (typeof($p['__wrapped_next']($iter81_nextval)['$nextval']) != 'undefined') {
								i = $iter81_nextval['$nextval'];
								$pyjs['track']['lineno']=1389;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return self['set'](i, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_694_err){if (!$p['isinstance']($pyjs_dbg_694_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_694_err);}throw $pyjs_dbg_694_err;
}})();
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index', null],['toIndex', null]]);
			$cls_definition['clear'] = $method;
			$pyjs['track']['lineno']=1391;
			$method = $pyjs__bind_method2('flip', function(index, toIndex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					toIndex = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
				var $and8,$iter83_type,$iter82_iter,i,$iter82_array,$iter83_iter,$iter83_array,$and7,dat,$iter82_nextval,$iter82_type,$iter82_idx,$pyjs__trackstack_size_1,$iter83_idx,$iter83_nextval;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1391};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1391;
				$pyjs['track']['lineno']=1396;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_is'](toIndex, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_695_err){if (!$p['isinstance']($pyjs_dbg_695_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_695_err);}throw $pyjs_dbg_695_err;
}})()) {
					$pyjs['track']['lineno']=1397;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['set'](index, !$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['get'](index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_696_err){if (!$p['isinstance']($pyjs_dbg_696_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_696_err);}throw $pyjs_dbg_696_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_697_err){if (!$p['isinstance']($pyjs_dbg_697_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_697_err);}throw $pyjs_dbg_697_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=1399;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp'](toIndex, $p['getattr'](self, '__width')) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_698_err){if (!$p['isinstance']($pyjs_dbg_698_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_698_err);}throw $pyjs_dbg_698_err;
}})()) {
						$pyjs['track']['lineno']=1400;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['resize'](toIndex);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_699_err){if (!$p['isinstance']($pyjs_dbg_699_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_699_err);}throw $pyjs_dbg_699_err;
}})();
						$pyjs['track']['lineno']=1401;
						toIndex = $p['getattr'](self, '__width');
					}
					$pyjs['track']['lineno']=1402;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and7=$p['op_eq'](index, $constant_int_0))?$p['op_eq'](toIndex, $p['getattr'](self, '__width')):$and7));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_700_err){if (!$p['isinstance']($pyjs_dbg_700_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_700_err);}throw $pyjs_dbg_700_err;
}})()) {
						$pyjs['track']['lineno']=1403;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter82_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_701_err){if (!$p['isinstance']($pyjs_dbg_701_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_701_err);}throw $pyjs_dbg_701_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_702_err){if (!$p['isinstance']($pyjs_dbg_702_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_702_err);}throw $pyjs_dbg_702_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_703_err){if (!$p['isinstance']($pyjs_dbg_703_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_703_err);}throw $pyjs_dbg_703_err;
}})();
						$iter82_nextval=$p['__iter_prepare']($iter82_iter,false);
						while (typeof($p['__wrapped_next']($iter82_nextval)['$nextval']) != 'undefined') {
							dat = $iter82_nextval['$nextval'];
							$pyjs['track']['lineno']=1404;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, '__data')['__setitem__'](dat, $p['op_invert']($p['getattr'](self, '__data')['__getitem__'](dat)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_704_err){if (!$p['isinstance']($pyjs_dbg_704_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_704_err);}throw $pyjs_dbg_704_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=1406;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter83_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange'](index, toIndex);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_705_err){if (!$p['isinstance']($pyjs_dbg_705_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_705_err);}throw $pyjs_dbg_705_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_706_err){if (!$p['isinstance']($pyjs_dbg_706_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_706_err);}throw $pyjs_dbg_706_err;
}})();
						$iter83_nextval=$p['__iter_prepare']($iter83_iter,false);
						while (typeof($p['__wrapped_next']($iter83_nextval)['$nextval']) != 'undefined') {
							i = $iter83_nextval['$nextval'];
							$pyjs['track']['lineno']=1407;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['set'](i, !$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return self['get'](i);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_707_err){if (!$p['isinstance']($pyjs_dbg_707_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_707_err);}throw $pyjs_dbg_707_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_708_err){if (!$p['isinstance']($pyjs_dbg_708_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_708_err);}throw $pyjs_dbg_708_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index'],['toIndex', null]]);
			$cls_definition['flip'] = $method;
			$pyjs['track']['lineno']=1409;
			$method = $pyjs__bind_method2('cardinality', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var count,$add134,$iter84_nextval,$iter84_iter,$add133,$iter84_array,$iter84_idx,$pyjs__trackstack_size_1,bit,$iter84_type;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1409};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1409;
				$pyjs['track']['lineno']=1413;
				count = $constant_int_0;
				$pyjs['track']['lineno']=1414;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter84_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($p['getattr'](self, '__width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_709_err){if (!$p['isinstance']($pyjs_dbg_709_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_709_err);}throw $pyjs_dbg_709_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_710_err){if (!$p['isinstance']($pyjs_dbg_710_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_710_err);}throw $pyjs_dbg_710_err;
}})();
				$iter84_nextval=$p['__iter_prepare']($iter84_iter,false);
				while (typeof($p['__wrapped_next']($iter84_nextval)['$nextval']) != 'undefined') {
					bit = $iter84_nextval['$nextval'];
					$pyjs['track']['lineno']=1415;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['get'](bit);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_711_err){if (!$p['isinstance']($pyjs_dbg_711_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_711_err);}throw $pyjs_dbg_711_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_712_err){if (!$p['isinstance']($pyjs_dbg_712_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_712_err);}throw $pyjs_dbg_712_err;
}})()) {
						$pyjs['track']['lineno']=1416;
						count = $p['__op_add']($add133=count,$add134=$constant_int_1);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1417;
				$pyjs['track']['lineno']=1417;
				var $pyjs__ret = count;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['cardinality'] = $method;
			$pyjs['track']['lineno']=1419;
			$method = $pyjs__bind_method2('intersects', function(bitset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					bitset = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dat,$iter85_array,$iter85_nextval,$iter85_iter,$pyjs__trackstack_size_1,$iter85_idx,$iter85_type;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1419};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1419;
				$pyjs['track']['lineno']=1424;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter85_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](bitset, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_713_err){if (!$p['isinstance']($pyjs_dbg_713_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_713_err);}throw $pyjs_dbg_713_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_714_err){if (!$p['isinstance']($pyjs_dbg_714_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_714_err);}throw $pyjs_dbg_714_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_715_err){if (!$p['isinstance']($pyjs_dbg_715_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_715_err);}throw $pyjs_dbg_715_err;
}})();
				$iter85_nextval=$p['__iter_prepare']($iter85_iter,false);
				while (typeof($p['__wrapped_next']($iter85_nextval)['$nextval']) != 'undefined') {
					dat = $iter85_nextval['$nextval'];
					$pyjs['track']['lineno']=1425;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_bitand2']($p['getattr'](bitset, '__data')['__getitem__'](dat), $p['getattr'](self, '__data')['__getitem__'](dat)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_716_err){if (!$p['isinstance']($pyjs_dbg_716_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_716_err);}throw $pyjs_dbg_716_err;
}})()) {
						$pyjs['track']['lineno']=1426;
						$pyjs['track']['lineno']=1426;
						var $pyjs__ret = true;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1427;
				$pyjs['track']['lineno']=1427;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['bitset']]);
			$cls_definition['intersects'] = $method;
			$pyjs['track']['lineno']=1429;
			$method = $pyjs__bind_method2('andSet', function(bitset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					bitset = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter86_iter,$iter86_type,dat,$pyjs__trackstack_size_1,$iter86_array,$iter86_nextval,$iter86_idx,data;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1429};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1429;
				$pyjs['track']['lineno']=1433;
				data = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['min']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_717_err){if (!$p['isinstance']($pyjs_dbg_717_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_717_err);}throw $pyjs_dbg_717_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](bitset, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_718_err){if (!$p['isinstance']($pyjs_dbg_718_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_718_err);}throw $pyjs_dbg_718_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_719_err){if (!$p['isinstance']($pyjs_dbg_719_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_719_err);}throw $pyjs_dbg_719_err;
}})();
				$pyjs['track']['lineno']=1434;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter86_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_720_err){if (!$p['isinstance']($pyjs_dbg_720_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_720_err);}throw $pyjs_dbg_720_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_721_err){if (!$p['isinstance']($pyjs_dbg_721_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_721_err);}throw $pyjs_dbg_721_err;
}})();
				$iter86_nextval=$p['__iter_prepare']($iter86_iter,false);
				while (typeof($p['__wrapped_next']($iter86_nextval)['$nextval']) != 'undefined') {
					dat = $iter86_nextval['$nextval'];
					$pyjs['track']['lineno']=1435;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '__data')['__setitem__'](dat, $p['op_bitand2']($p['getattr'](self, '__data')['__getitem__'](dat), $p['getattr'](bitset, '__data')['__getitem__'](dat)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_722_err){if (!$p['isinstance']($pyjs_dbg_722_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_722_err);}throw $pyjs_dbg_722_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['bitset']]);
			$cls_definition['andSet'] = $method;
			$pyjs['track']['lineno']=1439;
			$method = $pyjs__bind_method2('orSet', function(bitset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					bitset = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter87_nextval,$iter87_array,dat,$pyjs__trackstack_size_1,$iter87_type,$iter87_iter,data,$iter87_idx;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1439};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1439;
				$pyjs['track']['lineno']=1443;
				data = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['min']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_723_err){if (!$p['isinstance']($pyjs_dbg_723_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_723_err);}throw $pyjs_dbg_723_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](bitset, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_724_err){if (!$p['isinstance']($pyjs_dbg_724_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_724_err);}throw $pyjs_dbg_724_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_725_err){if (!$p['isinstance']($pyjs_dbg_725_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_725_err);}throw $pyjs_dbg_725_err;
}})();
				$pyjs['track']['lineno']=1444;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter87_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_726_err){if (!$p['isinstance']($pyjs_dbg_726_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_726_err);}throw $pyjs_dbg_726_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_727_err){if (!$p['isinstance']($pyjs_dbg_727_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_727_err);}throw $pyjs_dbg_727_err;
}})();
				$iter87_nextval=$p['__iter_prepare']($iter87_iter,false);
				while (typeof($p['__wrapped_next']($iter87_nextval)['$nextval']) != 'undefined') {
					dat = $iter87_nextval['$nextval'];
					$pyjs['track']['lineno']=1445;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '__data')['__setitem__'](dat, $p['op_bitor2']($p['getattr'](self, '__data')['__getitem__'](dat), $p['getattr'](bitset, '__data')['__getitem__'](dat)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_728_err){if (!$p['isinstance']($pyjs_dbg_728_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_728_err);}throw $pyjs_dbg_728_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['bitset']]);
			$cls_definition['orSet'] = $method;
			$pyjs['track']['lineno']=1448;
			$method = $pyjs__bind_method2('xorSet', function(bitset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					bitset = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter88_type,$iter88_idx,$iter88_array,$iter88_iter,dat,$pyjs__trackstack_size_1,$iter88_nextval,data;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1448};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1448;
				$pyjs['track']['lineno']=1452;
				data = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['min']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_729_err){if (!$p['isinstance']($pyjs_dbg_729_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_729_err);}throw $pyjs_dbg_729_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](bitset, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_730_err){if (!$p['isinstance']($pyjs_dbg_730_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_730_err);}throw $pyjs_dbg_730_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_731_err){if (!$p['isinstance']($pyjs_dbg_731_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_731_err);}throw $pyjs_dbg_731_err;
}})();
				$pyjs['track']['lineno']=1453;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter88_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_732_err){if (!$p['isinstance']($pyjs_dbg_732_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_732_err);}throw $pyjs_dbg_732_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_733_err){if (!$p['isinstance']($pyjs_dbg_733_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_733_err);}throw $pyjs_dbg_733_err;
}})();
				$iter88_nextval=$p['__iter_prepare']($iter88_iter,false);
				while (typeof($p['__wrapped_next']($iter88_nextval)['$nextval']) != 'undefined') {
					dat = $iter88_nextval['$nextval'];
					$pyjs['track']['lineno']=1454;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '__data')['__setitem__'](dat, $p['op_bitxor2']($p['getattr'](self, '__data')['__getitem__'](dat), $p['getattr'](bitset, '__data')['__getitem__'](dat)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_734_err){if (!$p['isinstance']($pyjs_dbg_734_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_734_err);}throw $pyjs_dbg_734_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['bitset']]);
			$cls_definition['xorSet'] = $method;
			$pyjs['track']['lineno']=1457;
			$method = $pyjs__bind_method2('resize', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul80,$div33,$mul73,$div36,$mul75,$mul74,$div34,$mul76,$mul79,$mul78,$mul77,$mul82,$div35,$div38,$mul81,$sub41,array,$sub42,$div37;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1457};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1457;
				$pyjs['track']['lineno']=1461;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp'](width, $p['getattr'](self, '__width')) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_735_err){if (!$p['isinstance']($pyjs_dbg_735_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_735_err);}throw $pyjs_dbg_735_err;
}})()) {
					$pyjs['track']['lineno']=1462;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__width', width) : $p['setattr'](self, '__width', width); 
					$pyjs['track']['lineno']=1463;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp']($p['getattr'](self, '__width'), (typeof ($mul73=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_736_err){if (!$p['isinstance']($pyjs_dbg_736_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_736_err);}throw $pyjs_dbg_736_err;
}})())==typeof ($mul74=$p['getattr'](self, '__bit')) && typeof $mul73=='number'?
						$mul73*$mul74:
						$p['op_mul']($mul73,$mul74))) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_737_err){if (!$p['isinstance']($pyjs_dbg_737_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_737_err);}throw $pyjs_dbg_737_err;
}})()) {
						$pyjs['track']['lineno']=1464;
						array = (function(){try{try{$pyjs['in_try_except'] += 1;
						return self['__typedarray']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['_ceil']((typeof ($div33=$p['getattr'](self, '__width'))==typeof ($div34=(typeof ($mul75=$p['getattr'](self, '__bit'))==typeof ($mul76=1.0) && typeof $mul75=='number'?
							$mul75*$mul76:
							$p['op_mul']($mul75,$mul76))) && typeof $div33=='number' && $div34 !== 0?
							$div33/$div34:
							$p['op_div']($div33,$div34)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_738_err){if (!$p['isinstance']($pyjs_dbg_738_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_738_err);}throw $pyjs_dbg_738_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_739_err){if (!$p['isinstance']($pyjs_dbg_739_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_739_err);}throw $pyjs_dbg_739_err;
}})();
						$pyjs['track']['lineno']=1465;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return array['set']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_740_err){if (!$p['isinstance']($pyjs_dbg_740_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_740_err);}throw $pyjs_dbg_740_err;
}})();
						$pyjs['track']['lineno']=1466;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', array) : $p['setattr'](self, '__data', array); 
					}
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp'](width, $p['getattr'](self, '__width')) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_741_err){if (!$p['isinstance']($pyjs_dbg_741_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_741_err);}throw $pyjs_dbg_741_err;
}})()) {
					$pyjs['track']['lineno']=1468;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp'](width, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_742_err){if (!$p['isinstance']($pyjs_dbg_742_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_742_err);}throw $pyjs_dbg_742_err;
}})()) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_743_err){if (!$p['isinstance']($pyjs_dbg_743_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_743_err);}throw $pyjs_dbg_743_err;
}})()) {
						$pyjs['track']['lineno']=1469;
						width = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_744_err){if (!$p['isinstance']($pyjs_dbg_744_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_744_err);}throw $pyjs_dbg_744_err;
}})();
					}
					$pyjs['track']['lineno']=1470;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__width', width) : $p['setattr'](self, '__width', width); 
					$pyjs['track']['lineno']=1471;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp']($p['getattr'](self, '__width'), $p['__op_sub']($sub41=(typeof ($mul77=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_745_err){if (!$p['isinstance']($pyjs_dbg_745_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_745_err);}throw $pyjs_dbg_745_err;
}})())==typeof ($mul78=$p['getattr'](self, '__bit')) && typeof $mul77=='number'?
						$mul77*$mul78:
						$p['op_mul']($mul77,$mul78)),$sub42=$p['getattr'](self, '__bit'))) < 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_746_err){if (!$p['isinstance']($pyjs_dbg_746_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_746_err);}throw $pyjs_dbg_746_err;
}})()) {
						$pyjs['track']['lineno']=1472;
						array = (function(){try{try{$pyjs['in_try_except'] += 1;
						return self['__typedarray']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['_ceil']((typeof ($div35=$p['getattr'](self, '__width'))==typeof ($div36=(typeof ($mul79=$p['getattr'](self, '__bit'))==typeof ($mul80=1.0) && typeof $mul79=='number'?
							$mul79*$mul80:
							$p['op_mul']($mul79,$mul80))) && typeof $div35=='number' && $div36 !== 0?
							$div35/$div36:
							$p['op_div']($div35,$div36)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_747_err){if (!$p['isinstance']($pyjs_dbg_747_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_747_err);}throw $pyjs_dbg_747_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_748_err){if (!$p['isinstance']($pyjs_dbg_748_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_748_err);}throw $pyjs_dbg_748_err;
}})();
						$pyjs['track']['lineno']=1473;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return array['set']((function(){try{try{$pyjs['in_try_except'] += 1;
						return self['__data']['subarray']($constant_int_0, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['_ceil']((typeof ($div37=$p['getattr'](self, '__width'))==typeof ($div38=(typeof ($mul81=$p['getattr'](self, '__bit'))==typeof ($mul82=1.0) && typeof $mul81=='number'?
							$mul81*$mul82:
							$p['op_mul']($mul81,$mul82))) && typeof $div37=='number' && $div38 !== 0?
							$div37/$div38:
							$p['op_div']($div37,$div38)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_749_err){if (!$p['isinstance']($pyjs_dbg_749_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_749_err);}throw $pyjs_dbg_749_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_750_err){if (!$p['isinstance']($pyjs_dbg_750_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_750_err);}throw $pyjs_dbg_750_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_751_err){if (!$p['isinstance']($pyjs_dbg_751_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_751_err);}throw $pyjs_dbg_751_err;
}})();
						$pyjs['track']['lineno']=1474;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', array) : $p['setattr'](self, '__data', array); 
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['resize'] = $method;
			$pyjs['track']['lineno']=1476;
			$method = $pyjs__bind_method2('size', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul83,$mul84;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1476};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1476;
				$pyjs['track']['lineno']=1480;
				$pyjs['track']['lineno']=1480;
				var $pyjs__ret = (typeof ($mul83=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_752_err){if (!$p['isinstance']($pyjs_dbg_752_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_752_err);}throw $pyjs_dbg_752_err;
}})())==typeof ($mul84=$p['getattr'](self, '__bit')) && typeof $mul83=='number'?
					$mul83*$mul84:
					$p['op_mul']($mul83,$mul84));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['size'] = $method;
			$pyjs['track']['lineno']=1482;
			$method = $pyjs__bind_method2('isEmpty', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter89_iter,$iter89_type,$iter89_nextval,$pyjs__trackstack_size_1,$iter89_array,data,$iter89_idx;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1482};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1482;
				$pyjs['track']['lineno']=1487;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter89_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '__data');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_753_err){if (!$p['isinstance']($pyjs_dbg_753_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_753_err);}throw $pyjs_dbg_753_err;
}})();
				$iter89_nextval=$p['__iter_prepare']($iter89_iter,false);
				while (typeof($p['__wrapped_next']($iter89_nextval)['$nextval']) != 'undefined') {
					data = $iter89_nextval['$nextval'];
					$pyjs['track']['lineno']=1488;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_754_err){if (!$p['isinstance']($pyjs_dbg_754_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_754_err);}throw $pyjs_dbg_754_err;
}})()) {
						$pyjs['track']['lineno']=1489;
						$pyjs['track']['lineno']=1489;
						var $pyjs__ret = false;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1490;
				$pyjs['track']['lineno']=1490;
				var $pyjs__ret = true;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isEmpty'] = $method;
			$pyjs['track']['lineno']=1492;
			$method = $pyjs__bind_method2('clone', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9a6bddf4a0aa317bb7cb4a4b6a244067') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var new_bitset,data;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1492};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1492;
				$pyjs['track']['lineno']=1496;
				new_bitset = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__class__']($constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_755_err){if (!$p['isinstance']($pyjs_dbg_755_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_755_err);}throw $pyjs_dbg_755_err;
}})();
				$pyjs['track']['lineno']=1497;
				data = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__typedarray']($p['getattr'](self, '__data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_756_err){if (!$p['isinstance']($pyjs_dbg_756_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_756_err);}throw $pyjs_dbg_756_err;
}})();
				$pyjs['track']['lineno']=1498;
				new_bitset['__is_instance__'] && typeof new_bitset['__setattr__'] == 'function' ? new_bitset['__setattr__']('__data', data) : $p['setattr'](new_bitset, '__data', data); 
				$pyjs['track']['lineno']=1499;
				new_bitset['__is_instance__'] && typeof new_bitset['__setattr__'] == 'function' ? new_bitset['__setattr__']('__width', $p['getattr'](self, '__width')) : $p['setattr'](new_bitset, '__width', $p['getattr'](self, '__width')); 
				$pyjs['track']['lineno']=1500;
				$pyjs['track']['lineno']=1500;
				var $pyjs__ret = new_bitset;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clone'] = $method;
			$pyjs['track']['lineno']=1243;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('BitSet', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=1503;
		$m['BitSet16'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '29c6a1e09029d41203c84e965c121849';
			$pyjs['track']['lineno']=1507;
			$cls_definition['__bit'] = $constant_int_16;
			$pyjs['track']['lineno']=1508;
			$cls_definition['__bitmask'] = null;
			$pyjs['track']['lineno']=1509;
			$cls_definition['__typedarray'] = $m['PyUint16Array'];
			$pyjs['track']['lineno']=1511;
			$method = $pyjs__bind_method2('__init__', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '29c6a1e09029d41203c84e965c121849') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1511};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1511;
				$pyjs['track']['lineno']=1512;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['BitSet']['__init__'](self, width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_757_err){if (!$p['isinstance']($pyjs_dbg_757_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_757_err);}throw $pyjs_dbg_757_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=1503;
			var $bases = new Array($m['BitSet']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('BitSet16', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=1515;
		$m['BitSet32'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = 'c0a0cd98bcd124fa6ec38b5d7a6321c2';
			$pyjs['track']['lineno']=1519;
			$cls_definition['__bit'] = $constant_int_32;
			$pyjs['track']['lineno']=1520;
			$cls_definition['__bitmask'] = null;
			$pyjs['track']['lineno']=1521;
			$cls_definition['__typedarray'] = $m['PyUint32Array'];
			$pyjs['track']['lineno']=1523;
			$method = $pyjs__bind_method2('__init__', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c0a0cd98bcd124fa6ec38b5d7a6321c2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1523};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1523;
				$pyjs['track']['lineno']=1524;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['BitSet']['__init__'](self, width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_758_err){if (!$p['isinstance']($pyjs_dbg_758_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_758_err);}throw $pyjs_dbg_758_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=1515;
			var $bases = new Array($m['BitSet']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('BitSet32', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=1527;
		$m['Pyjs_Mode'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '80e1a3274589c9fcad8dd8e0f29759b8';
			$pyjs['track']['lineno']=1529;
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
					if (self.prototype['__md5__'] !== '80e1a3274589c9fcad8dd8e0f29759b8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1529};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1529;
				$pyjs['track']['lineno']=1530;
				var $tupleassign8 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_setmode']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_759_err){if (!$p['isinstance']($pyjs_dbg_759_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_759_err);}throw $pyjs_dbg_759_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_760_err){if (!$p['isinstance']($pyjs_dbg_760_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_760_err);}throw $pyjs_dbg_760_err;
}})();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('strict', $tupleassign8[0]) : $p['setattr'](self, 'strict', $tupleassign8[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('optimized', $tupleassign8[1]) : $p['setattr'](self, 'optimized', $tupleassign8[1]); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=1532;
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
					if (self.prototype['__md5__'] !== '80e1a3274589c9fcad8dd8e0f29759b8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1532};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1532;
				$pyjs['track']['lineno']=1533;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](attr, '__strict_mode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_761_err){if (!$p['isinstance']($pyjs_dbg_761_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_761_err);}throw $pyjs_dbg_761_err;
}})()) {
					$pyjs['track']['lineno']=1534;
					$pyjs['track']['lineno']=1534;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['attr']]);
			$cls_definition['__getattr__'] = $method;
			$pyjs['track']['lineno']=1536;
			$method = $pyjs__bind_method2('_setmode', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '80e1a3274589c9fcad8dd8e0f29759b8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1536};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1536;
				$pyjs['track']['lineno']=1537;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](self, '__strict_mode'), true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_762_err){if (!$p['isinstance']($pyjs_dbg_762_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_762_err);}throw $pyjs_dbg_762_err;
}})()) {
					$pyjs['track']['lineno']=1538;
					$pyjs['track']['lineno']=1538;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([true, false]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_763_err){if (!$p['isinstance']($pyjs_dbg_763_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_763_err);}throw $pyjs_dbg_763_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=1540;
					$pyjs['track']['lineno']=1540;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([false, true]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_764_err){if (!$p['isinstance']($pyjs_dbg_764_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_764_err);}throw $pyjs_dbg_764_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_setmode'] = $method;
			$pyjs['track']['lineno']=1527;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Pyjs_Mode', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=1542;
		$m['pyjs_mode'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['Pyjs_Mode']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_765_err){if (!$p['isinstance']($pyjs_dbg_765_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_765_err);}throw $pyjs_dbg_765_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.pyjsarray */


/* end module: pyjsdl.pyjsarray */


/*
PYJS_DEPS: ['math.ceil', 'math']
*/
