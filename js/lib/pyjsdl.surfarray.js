/* start module: pyjsdl.surfarray */
$pyjs['loaded_modules']['pyjsdl.surfarray'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.surfarray']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.surfarray'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.surfarray'];
	$m['__repr__'] = function() { return '<module: pyjsdl.surfarray>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.surfarray';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['surfarray'] = $pyjs['loaded_modules']['pyjsdl.surfarray'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.surfarray.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[5] = 'pyjsdl.surfarray.py, line 5:\n    from pyjsdl.surface import Surface';
		$m.__track_lines__[6] = 'pyjsdl.surfarray.py, line 6:\n    from pyjsdl.pyjsarray import PyUint8ClampedArray, PyUint8Array, PyUint32Array, Ndarray, PyImageData, PyImageMatrix';
		$m.__track_lines__[8] = "pyjsdl.surfarray.py, line 8:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[11] = 'pyjsdl.surfarray.py, line 11:\n    class Surfarray(object):';
		$m.__track_lines__[23] = 'pyjsdl.surfarray.py, line 23:\n    def __init__(self):';
		$m.__track_lines__[31] = 'pyjsdl.surfarray.py, line 31:\n    self.initialized = False';
		$m.__track_lines__[32] = 'pyjsdl.surfarray.py, line 32:\n    self._nonimplemented_methods()';
		$m.__track_lines__[34] = 'pyjsdl.surfarray.py, line 34:\n    def array(self, surface):';
		$m.__track_lines__[40] = 'pyjsdl.surfarray.py, line 40:\n    imagedata = surface.impl.getImageData(0, 0, surface.width, surface.height)';
		$m.__track_lines__[41] = 'pyjsdl.surfarray.py, line 41:\n    return PyImageMatrix(imagedata)';
		$m.__track_lines__[43] = 'pyjsdl.surfarray.py, line 43:\n    def array2d(self, surface, copydata=False):';
		$m.__track_lines__[50] = 'pyjsdl.surfarray.py, line 50:\n    imagedata = surface.impl.getImageData(0, 0, surface.width, surface.height)';
		$m.__track_lines__[51] = 'pyjsdl.surfarray.py, line 51:\n    if not copydata:';
		$m.__track_lines__[52] = 'pyjsdl.surfarray.py, line 52:\n    return PyImageMatrixInteger(imagedata)';
		$m.__track_lines__[54] = 'pyjsdl.surfarray.py, line 54:\n    return PyImageInteger(imagedata)';
		$m.__track_lines__[56] = 'pyjsdl.surfarray.py, line 56:\n    def array3d(self, surface, copydata=False):';
		$m.__track_lines__[63] = 'pyjsdl.surfarray.py, line 63:\n    imagedata = surface.impl.getImageData(0, 0, surface.width, surface.height)';
		$m.__track_lines__[64] = 'pyjsdl.surfarray.py, line 64:\n    if not copydata:';
		$m.__track_lines__[65] = 'pyjsdl.surfarray.py, line 65:\n    return PyImageMatrixRGB(imagedata)';
		$m.__track_lines__[67] = 'pyjsdl.surfarray.py, line 67:\n    return PyImageRGB(imagedata)';
		$m.__track_lines__[69] = 'pyjsdl.surfarray.py, line 69:\n    def array_alpha(self, surface, copydata=False):';
		$m.__track_lines__[76] = 'pyjsdl.surfarray.py, line 76:\n    imagedata = surface.impl.getImageData(0, 0, surface.width, surface.height)';
		$m.__track_lines__[77] = 'pyjsdl.surfarray.py, line 77:\n    if not copydata:';
		$m.__track_lines__[78] = 'pyjsdl.surfarray.py, line 78:\n    return PyImageMatrixAlpha(imagedata)';
		$m.__track_lines__[80] = 'pyjsdl.surfarray.py, line 80:\n    return PyImageAlpha(imagedata)';
		$m.__track_lines__[82] = 'pyjsdl.surfarray.py, line 82:\n    def make_surface(self, array):';
		$m.__track_lines__[88] = 'pyjsdl.surfarray.py, line 88:\n    surface = Surface((array.__imagedata.width,array.__imagedata.height))';
		$m.__track_lines__[89] = 'pyjsdl.surfarray.py, line 89:\n    self.blit_array(surface, array)';
		$m.__track_lines__[90] = 'pyjsdl.surfarray.py, line 90:\n    return surface';
		$m.__track_lines__[92] = 'pyjsdl.surfarray.py, line 92:\n    def blit_array(self, surface, array):';
		$m.__track_lines__[97] = 'pyjsdl.surfarray.py, line 97:\n    try:';
		$m.__track_lines__[98] = 'pyjsdl.surfarray.py, line 98:\n    imagedata = array.getImageData()';
		$m.__track_lines__[100] = 'pyjsdl.surfarray.py, line 100:\n    imagedata = surface.impl.getImageData(0, 0, surface.width, surface.height)';
		$m.__track_lines__[101] = 'pyjsdl.surfarray.py, line 101:\n    if len(array._shape) == 2:';
		$m.__track_lines__[102] = 'pyjsdl.surfarray.py, line 102:\n    array2d = PyImageMatrix(imagedata)';
		$m.__track_lines__[103] = 'pyjsdl.surfarray.py, line 103:\n    for y in xrange(array2d.getHeight()):';
		$m.__track_lines__[104] = 'pyjsdl.surfarray.py, line 104:\n    for x in xrange(array2d.getWidth()):';
		$m.__track_lines__[105] = 'pyjsdl.surfarray.py, line 105:\n    value = array[x,y]';
		$m.__track_lines__[106] = 'pyjsdl.surfarray.py, line 106:\n    array2d[y,x] = (value>>16 & 0xff, value>>8 & 0xff, value & 0xff, 255)';
		$m.__track_lines__[107] = 'pyjsdl.surfarray.py, line 107:\n    imagedata = array2d.getImageData()';
		$m.__track_lines__[109] = 'pyjsdl.surfarray.py, line 109:\n    imagedata.data.set(array.getArray())';
		$m.__track_lines__[110] = 'pyjsdl.surfarray.py, line 110:\n    surface.impl.putImageData(imagedata, 0, 0, 0, 0, surface.width, surface.height)';
		$m.__track_lines__[111] = 'pyjsdl.surfarray.py, line 111:\n    return None';
		$m.__track_lines__[113] = 'pyjsdl.surfarray.py, line 113:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[117] = 'pyjsdl.surfarray.py, line 117:\n    self.use_arraytype = lambda *arg: None';
		$m.__track_lines__[120] = 'pyjsdl.surfarray.py, line 120:\n    class PyImageMatrixRGB(PyImageMatrix):';
		$m.__track_lines__[126] = 'pyjsdl.surfarray.py, line 126:\n    def __getitem__(self, index):';
		$m.__track_lines__[127] = 'pyjsdl.surfarray.py, line 127:\n    index = list(index)';
		$m.__track_lines__[128] = 'pyjsdl.surfarray.py, line 128:\n    index[0], index[1] = index[1], index[0]';
		$m.__track_lines__[129] = 'pyjsdl.surfarray.py, line 129:\n    index = tuple(index)';
		$m.__track_lines__[130] = 'pyjsdl.surfarray.py, line 130:\n    return PyImageMatrix.__getitem__(self, index)';
		$m.__track_lines__[132] = 'pyjsdl.surfarray.py, line 132:\n    def __setitem__(self, index, value):';
		$m.__track_lines__[133] = 'pyjsdl.surfarray.py, line 133:\n    index = list(index)';
		$m.__track_lines__[134] = 'pyjsdl.surfarray.py, line 134:\n    index[0], index[1] = index[1], index[0]';
		$m.__track_lines__[135] = 'pyjsdl.surfarray.py, line 135:\n    index = tuple(index)';
		$m.__track_lines__[136] = 'pyjsdl.surfarray.py, line 136:\n    return PyImageMatrix.__setitem__(self, index, value)';
		$m.__track_lines__[139] = 'pyjsdl.surfarray.py, line 139:\n    class PyImageRGB(Ndarray):';
		$m.__track_lines__[145] = 'pyjsdl.surfarray.py, line 145:\n    def __init__(self, imagedata):';
		$m.__track_lines__[146] = 'pyjsdl.surfarray.py, line 146:\n    self.__imagedata = PyImageData(imagedata)';
		$m.__track_lines__[147] = 'pyjsdl.surfarray.py, line 147:\n    array = Ndarray(self.__imagedata.data)';
		$m.__track_lines__[148] = 'pyjsdl.surfarray.py, line 148:\n    array.setshape(self.__imagedata.height,self.__imagedata.width,4)';
		$m.__track_lines__[149] = 'pyjsdl.surfarray.py, line 149:\n    try:';
		$m.__track_lines__[150] = 'pyjsdl.surfarray.py, line 150:\n    data = PyUint8ClampedArray(self.__imagedata.height*self.__imagedata.width*3)';
		$m.__track_lines__[152] = 'pyjsdl.surfarray.py, line 152:\n    data = PyUint8Array(self.__imagedata.height*self.__imagedata.width*3)';
		$m.__track_lines__[153] = 'pyjsdl.surfarray.py, line 153:\n    index = 0';
		$m.__track_lines__[154] = 'pyjsdl.surfarray.py, line 154:\n    for x in xrange(self.__imagedata.width):';
		$m.__track_lines__[155] = 'pyjsdl.surfarray.py, line 155:\n    for y in xrange(self.__imagedata.height):';
		$m.__track_lines__[156] = 'pyjsdl.surfarray.py, line 156:\n    for i in xrange(3):';
		$m.__track_lines__[157] = 'pyjsdl.surfarray.py, line 157:\n    data[index] = array[y,x,i]';
		$m.__track_lines__[158] = 'pyjsdl.surfarray.py, line 158:\n    index += 1';
		$m.__track_lines__[159] = 'pyjsdl.surfarray.py, line 159:\n    try:';
		$m.__track_lines__[160] = 'pyjsdl.surfarray.py, line 160:\n    Ndarray.__init__(self, data, 0)';
		$m.__track_lines__[162] = 'pyjsdl.surfarray.py, line 162:\n    Ndarray.__init__(self, data, 1)';
		$m.__track_lines__[163] = 'pyjsdl.surfarray.py, line 163:\n    self.setshape(self.__imagedata.width,self.__imagedata.height,3)';
		$m.__track_lines__[165] = 'pyjsdl.surfarray.py, line 165:\n    def getImageData(self):';
		$m.__track_lines__[166] = 'pyjsdl.surfarray.py, line 166:\n    index = 0';
		$m.__track_lines__[167] = 'pyjsdl.surfarray.py, line 167:\n    for x in xrange(self.__imagedata.height):';
		$m.__track_lines__[168] = 'pyjsdl.surfarray.py, line 168:\n    for y in xrange(self.__imagedata.width):';
		$m.__track_lines__[169] = 'pyjsdl.surfarray.py, line 169:\n    for i in xrange(3):';
		$m.__track_lines__[170] = 'pyjsdl.surfarray.py, line 170:\n    self.__imagedata.data[index+i] = self[y,x,i]';
		$m.__track_lines__[171] = 'pyjsdl.surfarray.py, line 171:\n    index += 4';
		$m.__track_lines__[172] = 'pyjsdl.surfarray.py, line 172:\n    return self.__imagedata.getImageData()';
		$m.__track_lines__[175] = 'pyjsdl.surfarray.py, line 175:\n    class PyImageMatrixAlpha(PyImageMatrix):';
		$m.__track_lines__[181] = 'pyjsdl.surfarray.py, line 181:\n    def __getitem__(self, index):';
		$m.__track_lines__[182] = 'pyjsdl.surfarray.py, line 182:\n    return PyImageMatrix.__getitem__(self, (index[1],index[0],3))';
		$m.__track_lines__[184] = 'pyjsdl.surfarray.py, line 184:\n    def __setitem__(self, index, value):';
		$m.__track_lines__[185] = 'pyjsdl.surfarray.py, line 185:\n    return PyImageMatrix.__setitem__(self, (index[1],index[0],3), value)';
		$m.__track_lines__[188] = 'pyjsdl.surfarray.py, line 188:\n    class PyImageAlpha(Ndarray):';
		$m.__track_lines__[194] = 'pyjsdl.surfarray.py, line 194:\n    def __init__(self, imagedata):';
		$m.__track_lines__[195] = 'pyjsdl.surfarray.py, line 195:\n    self.__imagedata = PyImageData(imagedata)';
		$m.__track_lines__[196] = 'pyjsdl.surfarray.py, line 196:\n    array = Ndarray(self.__imagedata.data)';
		$m.__track_lines__[197] = 'pyjsdl.surfarray.py, line 197:\n    array.setshape(self.__imagedata.height,self.__imagedata.width,4)';
		$m.__track_lines__[198] = 'pyjsdl.surfarray.py, line 198:\n    try:';
		$m.__track_lines__[199] = 'pyjsdl.surfarray.py, line 199:\n    data = PyUint8ClampedArray(self.__imagedata.height*self.__imagedata.width)';
		$m.__track_lines__[201] = 'pyjsdl.surfarray.py, line 201:\n    data = PyUint8Array(self.__imagedata.height*self.__imagedata.width)';
		$m.__track_lines__[202] = 'pyjsdl.surfarray.py, line 202:\n    index = 0';
		$m.__track_lines__[203] = 'pyjsdl.surfarray.py, line 203:\n    for x in xrange(self.__imagedata.width):';
		$m.__track_lines__[204] = 'pyjsdl.surfarray.py, line 204:\n    for y in xrange(self.__imagedata.height):';
		$m.__track_lines__[205] = 'pyjsdl.surfarray.py, line 205:\n    data[index] = array[y,x,3]';
		$m.__track_lines__[206] = 'pyjsdl.surfarray.py, line 206:\n    index += 1';
		$m.__track_lines__[207] = 'pyjsdl.surfarray.py, line 207:\n    try:';
		$m.__track_lines__[208] = 'pyjsdl.surfarray.py, line 208:\n    Ndarray.__init__(self, data, 0)';
		$m.__track_lines__[210] = 'pyjsdl.surfarray.py, line 210:\n    Ndarray.__init__(self, data, 1)';
		$m.__track_lines__[211] = 'pyjsdl.surfarray.py, line 211:\n    self.setshape(self.__imagedata.width,self.__imagedata.height)';
		$m.__track_lines__[213] = 'pyjsdl.surfarray.py, line 213:\n    def getImageData(self):';
		$m.__track_lines__[214] = 'pyjsdl.surfarray.py, line 214:\n    index = 0';
		$m.__track_lines__[215] = 'pyjsdl.surfarray.py, line 215:\n    for x in xrange(self.__imagedata.height):';
		$m.__track_lines__[216] = 'pyjsdl.surfarray.py, line 216:\n    for y in xrange(self.__imagedata.width):';
		$m.__track_lines__[217] = 'pyjsdl.surfarray.py, line 217:\n    self.__imagedata.data[index+3] = self[y,x]';
		$m.__track_lines__[218] = 'pyjsdl.surfarray.py, line 218:\n    index += 4';
		$m.__track_lines__[219] = 'pyjsdl.surfarray.py, line 219:\n    return self.__imagedata.getImageData()';
		$m.__track_lines__[222] = 'pyjsdl.surfarray.py, line 222:\n    class PyImageMatrixInteger(PyImageMatrix):';
		$m.__track_lines__[228] = 'pyjsdl.surfarray.py, line 228:\n    def __getitem__(self, index):';
		$m.__track_lines__[229] = 'pyjsdl.surfarray.py, line 229:\n    value = PyImageMatrix.__getitem__(self, (index[1],index[0]))';
		$m.__track_lines__[230] = 'pyjsdl.surfarray.py, line 230:\n    return value[0]<<16 | value[1]<<8 | value[2] | value[3]<<24';
		$m.__track_lines__[232] = 'pyjsdl.surfarray.py, line 232:\n    def __setitem__(self, index, value):';
		$m.__track_lines__[233] = 'pyjsdl.surfarray.py, line 233:\n    return PyImageMatrix.__setitem__(self, (index[1],index[0]), (value>>16 & 0xff, value>>8 & 0xff, value & 0xff, value>>24 & 0xff))';
		$m.__track_lines__[236] = 'pyjsdl.surfarray.py, line 236:\n    class PyImageInteger(Ndarray):';
		$m.__track_lines__[242] = 'pyjsdl.surfarray.py, line 242:\n    def __init__(self, imagedata):';
		$m.__track_lines__[243] = 'pyjsdl.surfarray.py, line 243:\n    self.__imagedata = PyImageData(imagedata)';
		$m.__track_lines__[244] = 'pyjsdl.surfarray.py, line 244:\n    array = Ndarray(self.__imagedata.data)';
		$m.__track_lines__[245] = 'pyjsdl.surfarray.py, line 245:\n    array.setshape(self.__imagedata.height,self.__imagedata.width,4)';
		$m.__track_lines__[246] = 'pyjsdl.surfarray.py, line 246:\n    data = PyUint32Array(self.__imagedata.height*self.__imagedata.width)';
		$m.__track_lines__[247] = 'pyjsdl.surfarray.py, line 247:\n    index = 0';
		$m.__track_lines__[248] = 'pyjsdl.surfarray.py, line 248:\n    for x in xrange(self.__imagedata.width):';
		$m.__track_lines__[249] = 'pyjsdl.surfarray.py, line 249:\n    for y in xrange(self.__imagedata.height):';
		$m.__track_lines__[250] = 'pyjsdl.surfarray.py, line 250:\n    data[index] = array[y,x,0]<<16 | array[y,x,1]<<8 | array[y,x,2] | array[y,x,3]<<24';
		$m.__track_lines__[251] = 'pyjsdl.surfarray.py, line 251:\n    index += 1';
		$m.__track_lines__[252] = 'pyjsdl.surfarray.py, line 252:\n    Ndarray.__init__(self, data, 3)';
		$m.__track_lines__[253] = 'pyjsdl.surfarray.py, line 253:\n    self.setshape(self.__imagedata.width,self.__imagedata.height)';
		$m.__track_lines__[255] = 'pyjsdl.surfarray.py, line 255:\n    def getImageData(self):';
		$m.__track_lines__[256] = 'pyjsdl.surfarray.py, line 256:\n    index = 0';
		$m.__track_lines__[257] = 'pyjsdl.surfarray.py, line 257:\n    for x in xrange(self.__imagedata.height):';
		$m.__track_lines__[258] = 'pyjsdl.surfarray.py, line 258:\n    for y in xrange(self.__imagedata.width):';
		$m.__track_lines__[259] = 'pyjsdl.surfarray.py, line 259:\n    self.__imagedata.data[index], self.__imagedata.data[index+1], self.__imagedata.data[index+2], self.__imagedata.data[index+3] = self[y,x]>>16 & 0xff, self[y,x]>>8 & 0xff, self[y,x] & 0xff, self[y,x]>>24 & 0xff';
		$m.__track_lines__[260] = 'pyjsdl.surfarray.py, line 260:\n    index += 4';
		$m.__track_lines__[261] = 'pyjsdl.surfarray.py, line 261:\n    return self.__imagedata.getImageData()';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='pyjsdl.surfarray';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['PyUint8ClampedArray'] = $p['___import___']('pyjsdl.pyjsarray.PyUint8ClampedArray', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['PyUint8Array'] = $p['___import___']('pyjsdl.pyjsarray.PyUint8Array', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['PyUint32Array'] = $p['___import___']('pyjsdl.pyjsarray.PyUint32Array', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Ndarray'] = $p['___import___']('pyjsdl.pyjsarray.Ndarray', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['PyImageData'] = $p['___import___']('pyjsdl.pyjsarray.PyImageData', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['PyImageMatrix'] = $p['___import___']('pyjsdl.pyjsarray.PyImageMatrix', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=8;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=11;
		$m['Surfarray'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.surfarray';
			$cls_definition['__md5__'] = '8aff3532e778a6fedc48b397dbc734dc';
			$pyjs['track']['lineno']=23;
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
					if (self.prototype['__md5__'] !== '8aff3532e778a6fedc48b397dbc734dc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':23};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=23;
				$pyjs['track']['lineno']=31;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('initialized', false) : $p['setattr'](self, 'initialized', false); 
				$pyjs['track']['lineno']=32;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_nonimplemented_methods']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=34;
			$method = $pyjs__bind_method2('array', function(surface) {
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
					if (self.prototype['__md5__'] !== '8aff3532e778a6fedc48b397dbc734dc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var imagedata;
				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=34;
				$pyjs['track']['lineno']=40;
				imagedata = (function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['impl']['getImageData']($constant_int_0, $constant_int_0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
				$pyjs['track']['lineno']=41;
				$pyjs['track']['lineno']=41;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyImageMatrix'](imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface']]);
			$cls_definition['array'] = $method;
			$pyjs['track']['lineno']=43;
			$method = $pyjs__bind_method2('array2d', function(surface, copydata) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					copydata = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8aff3532e778a6fedc48b397dbc734dc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof copydata == 'undefined') copydata=arguments['callee']['__args__'][4][1];
				var imagedata;
				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':43};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=43;
				$pyjs['track']['lineno']=50;
				imagedata = (function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['impl']['getImageData']($constant_int_0, $constant_int_0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs['track']['lineno']=51;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](copydata));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
					$pyjs['track']['lineno']=52;
					$pyjs['track']['lineno']=52;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof PyImageMatrixInteger == "undefined"?$m['PyImageMatrixInteger']:PyImageMatrixInteger)(imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=54;
					$pyjs['track']['lineno']=54;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof PyImageInteger == "undefined"?$m['PyImageInteger']:PyImageInteger)(imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['copydata', false]]);
			$cls_definition['array2d'] = $method;
			$pyjs['track']['lineno']=56;
			$method = $pyjs__bind_method2('array3d', function(surface, copydata) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					copydata = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8aff3532e778a6fedc48b397dbc734dc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof copydata == 'undefined') copydata=arguments['callee']['__args__'][4][1];
				var imagedata;
				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':56};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=56;
				$pyjs['track']['lineno']=63;
				imagedata = (function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['impl']['getImageData']($constant_int_0, $constant_int_0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs['track']['lineno']=64;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](copydata));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
					$pyjs['track']['lineno']=65;
					$pyjs['track']['lineno']=65;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof PyImageMatrixRGB == "undefined"?$m['PyImageMatrixRGB']:PyImageMatrixRGB)(imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=67;
					$pyjs['track']['lineno']=67;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof PyImageRGB == "undefined"?$m['PyImageRGB']:PyImageRGB)(imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['copydata', false]]);
			$cls_definition['array3d'] = $method;
			$pyjs['track']['lineno']=69;
			$method = $pyjs__bind_method2('array_alpha', function(surface, copydata) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					copydata = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8aff3532e778a6fedc48b397dbc734dc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof copydata == 'undefined') copydata=arguments['callee']['__args__'][4][1];
				var imagedata;
				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':69};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=69;
				$pyjs['track']['lineno']=76;
				imagedata = (function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['impl']['getImageData']($constant_int_0, $constant_int_0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs['track']['lineno']=77;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](copydata));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
					$pyjs['track']['lineno']=78;
					$pyjs['track']['lineno']=78;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof PyImageMatrixAlpha == "undefined"?$m['PyImageMatrixAlpha']:PyImageMatrixAlpha)(imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=80;
					$pyjs['track']['lineno']=80;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof PyImageAlpha == "undefined"?$m['PyImageAlpha']:PyImageAlpha)(imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['copydata', false]]);
			$cls_definition['array_alpha'] = $method;
			$pyjs['track']['lineno']=82;
			$method = $pyjs__bind_method2('make_surface', function(array) {
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
					if (self.prototype['__md5__'] !== '8aff3532e778a6fedc48b397dbc734dc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var surface;
				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':82};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=82;
				$pyjs['track']['lineno']=88;
				surface = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Surface']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr']($p['getattr'](array, '__imagedata'), 'width'), $p['getattr']($p['getattr'](array, '__imagedata'), 'height')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs['track']['lineno']=89;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['blit_array'](surface, array);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs['track']['lineno']=90;
				$pyjs['track']['lineno']=90;
				var $pyjs__ret = surface;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['array']]);
			$cls_definition['make_surface'] = $method;
			$pyjs['track']['lineno']=92;
			$method = $pyjs__bind_method2('blit_array', function(surface, array) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					array = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8aff3532e778a6fedc48b397dbc734dc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_iter,$iter2_nextval,$iter1_nextval,$iter1_type,imagedata,$iter1_idx,array2d,$iter1_iter,$pyjs__trackstack_size_3,$iter2_idx,$pyjs_try_err,$pyjs__trackstack_size_2,x,y,$iter2_type,value,$iter2_array,$iter1_array;
				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':92};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=92;
				$pyjs['track']['lineno']=97;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=98;
						imagedata = (function(){try{try{$pyjs['in_try_except'] += 1;
						return array['getImageData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
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
					$pyjs['track']['module']='pyjsdl.surfarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=100;
						imagedata = (function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['impl']['getImageData']($constant_int_0, $constant_int_0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
						$pyjs['track']['lineno']=101;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](array, '_shape'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), $constant_int_2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()) {
							$pyjs['track']['lineno']=102;
							array2d = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['PyImageMatrix'](imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
							$pyjs['track']['lineno']=103;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
							return (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
							return array2d['getHeight']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
							$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
							while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
								y = $iter1_nextval['$nextval'];
								$pyjs['track']['lineno']=104;
								$pyjs__trackstack_size_3=$pyjs['trackstack']['length'];
								$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
								return (function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['xrange']((function(){try{try{$pyjs['in_try_except'] += 1;
								return array2d['getWidth']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
								$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
								while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
									x = $iter2_nextval['$nextval'];
									$pyjs['track']['lineno']=105;
									value = array['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
									return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
									$pyjs['track']['lineno']=106;
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return array2d['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
									return $p['tuple']([y, x]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
									return $p['tuple']([$p['op_bitand2']($p['op_bitshiftright'](value,$constant_int_16), $constant_int_255), $p['op_bitand2']($p['op_bitshiftright'](value,$constant_int_8), $constant_int_255), $p['op_bitand2'](value, $constant_int_255), $constant_int_255]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
								}
								if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_3) {
									$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_3);
									$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
								}
								$pyjs['track']['module']='pyjsdl.surfarray';
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.surfarray';
							$pyjs['track']['lineno']=107;
							imagedata = (function(){try{try{$pyjs['in_try_except'] += 1;
							return array2d['getImageData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=109;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return imagedata['data']['set']((function(){try{try{$pyjs['in_try_except'] += 1;
							return array['getArray']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=110;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['impl']['putImageData'](imagedata, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
				$pyjs['track']['lineno']=111;
				$pyjs['track']['lineno']=111;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['array']]);
			$cls_definition['blit_array'] = $method;
			$pyjs['track']['lineno']=113;
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
					if (self.prototype['__md5__'] !== '8aff3532e778a6fedc48b397dbc734dc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda1;
				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':113};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=113;
				$pyjs['track']['lineno']=117;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surfarray','lineno':117};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surfarray';
					$pyjs['track']['lineno']=117;
					$pyjs['track']['lineno']=117;
					$pyjs['track']['lineno']=117;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('use_arraytype', $lambda1) : $p['setattr'](self, 'use_arraytype', $lambda1); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=11;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Surfarray', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=120;
		$m['PyImageMatrixRGB'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.surfarray';
			$cls_definition['__md5__'] = 'd177f654e79778ce3b901f91067cb24d';
			$pyjs['track']['lineno']=126;
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
					if (self.prototype['__md5__'] !== 'd177f654e79778ce3b901f91067cb24d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':126};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=126;
				$pyjs['track']['lineno']=127;
				index = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				$pyjs['track']['lineno']=128;
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([index['__getitem__']($constant_int_1), index['__getitem__']($constant_int_0)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return index['__setitem__']($constant_int_0, $tupleassign1[0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return index['__setitem__']($constant_int_1, $tupleassign1[1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs['track']['lineno']=129;
				index = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
				$pyjs['track']['lineno']=130;
				$pyjs['track']['lineno']=130;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyImageMatrix']['__getitem__'](self, index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=132;
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
					if (self.prototype['__md5__'] !== 'd177f654e79778ce3b901f91067cb24d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':132};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=132;
				$pyjs['track']['lineno']=133;
				index = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				$pyjs['track']['lineno']=134;
				var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([index['__getitem__']($constant_int_1), index['__getitem__']($constant_int_0)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return index['__setitem__']($constant_int_0, $tupleassign2[0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return index['__setitem__']($constant_int_1, $tupleassign2[1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
				$pyjs['track']['lineno']=135;
				index = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				$pyjs['track']['lineno']=136;
				$pyjs['track']['lineno']=136;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyImageMatrix']['__setitem__'](self, index, value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['__setitem__'] = $method;
			$pyjs['track']['lineno']=120;
			var $bases = new Array($m['PyImageMatrix']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyImageMatrixRGB', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=139;
		$m['PyImageRGB'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.surfarray';
			$cls_definition['__md5__'] = '32753ee4dc4e50e20cc2d3121f173958';
			$pyjs['track']['lineno']=145;
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
					if (self.prototype['__md5__'] !== '32753ee4dc4e50e20cc2d3121f173958') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter5_array,$iter3_array,$add2,$iter5_iter,$iter4_type,$iter5_type,array,$iter4_iter,index,$iter3_idx,$mul3,$iter3_nextval,$pyjs_try_err,$iter3_iter,$iter5_idx,$mul8,y,$iter3_type,$mul7,$mul6,$mul5,$mul4,data,$mul2,$mul1,i,$iter4_nextval,$iter4_idx,$add1,$pyjs__trackstack_size_2,$pyjs__trackstack_size_3,$pyjs__trackstack_size_1,$iter4_array,x;
				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':145};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=145;
				$pyjs['track']['lineno']=146;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__imagedata', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyImageData'](imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) : $p['setattr'](self, '__imagedata', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyImageData'](imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()); 
				$pyjs['track']['lineno']=147;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray']($p['getattr']($p['getattr'](self, '__imagedata'), 'data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				$pyjs['track']['lineno']=148;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return array['setshape']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'), $p['getattr']($p['getattr'](self, '__imagedata'), 'width'), $constant_int_4);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
				$pyjs['track']['lineno']=149;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=150;
						data = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['PyUint8ClampedArray']((typeof ($mul3=(typeof ($mul1=$p['getattr']($p['getattr'](self, '__imagedata'), 'height'))==typeof ($mul2=$p['getattr']($p['getattr'](self, '__imagedata'), 'width')) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2)))==typeof ($mul4=$constant_int_3) && typeof $mul3=='number'?
							$mul3*$mul4:
							$p['op_mul']($mul3,$mul4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
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
					$pyjs['track']['module']='pyjsdl.surfarray';
					if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
						$pyjs['track']['lineno']=152;
						data = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['PyUint8Array']((typeof ($mul7=(typeof ($mul5=$p['getattr']($p['getattr'](self, '__imagedata'), 'height'))==typeof ($mul6=$p['getattr']($p['getattr'](self, '__imagedata'), 'width')) && typeof $mul5=='number'?
							$mul5*$mul6:
							$p['op_mul']($mul5,$mul6)))==typeof ($mul8=$constant_int_3) && typeof $mul7=='number'?
							$mul7*$mul8:
							$p['op_mul']($mul7,$mul8)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=153;
				index = $constant_int_0;
				$pyjs['track']['lineno']=154;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					x = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=155;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						y = $iter4_nextval['$nextval'];
						$pyjs['track']['lineno']=156;
						$pyjs__trackstack_size_3=$pyjs['trackstack']['length'];
						$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']($constant_int_3);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
						$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
						while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
							i = $iter5_nextval['$nextval'];
							$pyjs['track']['lineno']=157;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return data['__setitem__'](index, array['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['tuple']([y, x, i]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
							$pyjs['track']['lineno']=158;
							index = $p['__op_add']($add1=index,$add2=$constant_int_1);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_3) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_3);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.surfarray';
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.surfarray';
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=159;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=160;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['Ndarray']['__init__'](self, data, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
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
					$pyjs['track']['module']='pyjsdl.surfarray';
					if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
						$pyjs['track']['lineno']=162;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['Ndarray']['__init__'](self, data, $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=163;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setshape']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'), $p['getattr']($p['getattr'](self, '__imagedata'), 'height'), $constant_int_3);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['imagedata']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=165;
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
					if (self.prototype['__md5__'] !== '32753ee4dc4e50e20cc2d3121f173958') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_type,$iter8_iter,$iter6_iter,$iter6_nextval,index,$add6,$iter7_type,$iter8_idx,$iter6_idx,$iter7_iter,$iter8_type,$add5,$iter6_array,$iter8_nextval,$iter7_idx,$iter7_nextval,i,$iter7_array,$iter8_array,$add3,$pyjs__trackstack_size_2,$pyjs__trackstack_size_3,$add4,$pyjs__trackstack_size_1,y,x;
				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':165};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=165;
				$pyjs['track']['lineno']=166;
				index = $constant_int_0;
				$pyjs['track']['lineno']=167;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					x = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=168;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						y = $iter7_nextval['$nextval'];
						$pyjs['track']['lineno']=169;
						$pyjs__trackstack_size_3=$pyjs['trackstack']['length'];
						$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['xrange']($constant_int_3);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
						$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
						while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
							i = $iter8_nextval['$nextval'];
							$pyjs['track']['lineno']=170;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add3=index,$add4=i), self['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['tuple']([y, x, i]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_3) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_3);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.surfarray';
						$pyjs['track']['lineno']=171;
						index = $p['__op_add']($add5=index,$add6=$constant_int_4);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.surfarray';
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=172;
				$pyjs['track']['lineno']=172;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__imagedata']['getImageData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getImageData'] = $method;
			$pyjs['track']['lineno']=139;
			var $bases = new Array($m['Ndarray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyImageRGB', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=175;
		$m['PyImageMatrixAlpha'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.surfarray';
			$cls_definition['__md5__'] = 'c7455b772cfd9f4c1280c456de3183da';
			$pyjs['track']['lineno']=181;
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
					if (self.prototype['__md5__'] !== 'c7455b772cfd9f4c1280c456de3183da') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':181};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=181;
				$pyjs['track']['lineno']=182;
				$pyjs['track']['lineno']=182;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyImageMatrix']['__getitem__'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([index['__getitem__']($constant_int_1), index['__getitem__']($constant_int_0), $constant_int_3]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=184;
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
					if (self.prototype['__md5__'] !== 'c7455b772cfd9f4c1280c456de3183da') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':184};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=184;
				$pyjs['track']['lineno']=185;
				$pyjs['track']['lineno']=185;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyImageMatrix']['__setitem__'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([index['__getitem__']($constant_int_1), index['__getitem__']($constant_int_0), $constant_int_3]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})(), value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['__setitem__'] = $method;
			$pyjs['track']['lineno']=175;
			var $bases = new Array($m['PyImageMatrix']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyImageMatrixAlpha', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=188;
		$m['PyImageAlpha'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.surfarray';
			$cls_definition['__md5__'] = '1dc490f7d222f899d260f942f4d1f9e8';
			$pyjs['track']['lineno']=194;
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
					if (self.prototype['__md5__'] !== '1dc490f7d222f899d260f942f4d1f9e8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter10_nextval,$iter10_iter,array,index,$iter9_iter,$iter9_nextval,$iter9_idx,$pyjs_try_err,$iter9_type,$iter10_idx,y,$mul9,data,$mul12,$mul11,$mul10,$iter10_array,$pyjs__trackstack_size_2,$add7,$pyjs__trackstack_size_1,$iter10_type,x,$add8,$iter9_array;
				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':194};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=194;
				$pyjs['track']['lineno']=195;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__imagedata', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyImageData'](imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()) : $p['setattr'](self, '__imagedata', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyImageData'](imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()); 
				$pyjs['track']['lineno']=196;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray']($p['getattr']($p['getattr'](self, '__imagedata'), 'data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				$pyjs['track']['lineno']=197;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return array['setshape']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'), $p['getattr']($p['getattr'](self, '__imagedata'), 'width'), $constant_int_4);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
				$pyjs['track']['lineno']=198;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=199;
						data = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['PyUint8ClampedArray']((typeof ($mul9=$p['getattr']($p['getattr'](self, '__imagedata'), 'height'))==typeof ($mul10=$p['getattr']($p['getattr'](self, '__imagedata'), 'width')) && typeof $mul9=='number'?
							$mul9*$mul10:
							$p['op_mul']($mul9,$mul10)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
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
					$pyjs['track']['module']='pyjsdl.surfarray';
					if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
						$pyjs['track']['lineno']=201;
						data = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['PyUint8Array']((typeof ($mul11=$p['getattr']($p['getattr'](self, '__imagedata'), 'height'))==typeof ($mul12=$p['getattr']($p['getattr'](self, '__imagedata'), 'width')) && typeof $mul11=='number'?
							$mul11*$mul12:
							$p['op_mul']($mul11,$mul12)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=202;
				index = $constant_int_0;
				$pyjs['track']['lineno']=203;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					x = $iter9_nextval['$nextval'];
					$pyjs['track']['lineno']=204;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
					$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
					while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
						y = $iter10_nextval['$nextval'];
						$pyjs['track']['lineno']=205;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return data['__setitem__'](index, array['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([y, x, $constant_int_3]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
						$pyjs['track']['lineno']=206;
						index = $p['__op_add']($add7=index,$add8=$constant_int_1);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.surfarray';
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=207;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=208;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['Ndarray']['__init__'](self, data, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
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
					$pyjs['track']['module']='pyjsdl.surfarray';
					if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
						$pyjs['track']['lineno']=210;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['Ndarray']['__init__'](self, data, $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=211;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setshape']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'), $p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['imagedata']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=213;
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
					if (self.prototype['__md5__'] !== '1dc490f7d222f899d260f942f4d1f9e8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,$add9,$iter12_idx,$iter11_iter,$iter11_type,$iter12_array,$add10,$iter12_iter,$pyjs__trackstack_size_2,$add11,$add12,$iter11_array,y,x,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1,$iter12_nextval,$iter12_type;
				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':213};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=213;
				$pyjs['track']['lineno']=214;
				index = $constant_int_0;
				$pyjs['track']['lineno']=215;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					x = $iter11_nextval['$nextval'];
					$pyjs['track']['lineno']=216;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
					$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
					while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
						y = $iter12_nextval['$nextval'];
						$pyjs['track']['lineno']=217;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add9=index,$add10=$constant_int_3), self['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([y, x]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
						$pyjs['track']['lineno']=218;
						index = $p['__op_add']($add11=index,$add12=$constant_int_4);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.surfarray';
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=219;
				$pyjs['track']['lineno']=219;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__imagedata']['getImageData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getImageData'] = $method;
			$pyjs['track']['lineno']=188;
			var $bases = new Array($m['Ndarray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyImageAlpha', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=222;
		$m['PyImageMatrixInteger'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.surfarray';
			$cls_definition['__md5__'] = '4e46dcb57fc4df6791c837037ac41dcd';
			$pyjs['track']['lineno']=228;
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
					if (self.prototype['__md5__'] !== '4e46dcb57fc4df6791c837037ac41dcd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var value;
				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':228};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=228;
				$pyjs['track']['lineno']=229;
				value = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyImageMatrix']['__getitem__'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([index['__getitem__']($constant_int_1), index['__getitem__']($constant_int_0)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
				$pyjs['track']['lineno']=230;
				$pyjs['track']['lineno']=230;
				var $pyjs__ret = $p['op_bitor']([$p['op_bitshiftleft'](value['__getitem__']($constant_int_0),$constant_int_16), $p['op_bitshiftleft'](value['__getitem__']($constant_int_1),$constant_int_8), value['__getitem__']($constant_int_2), $p['op_bitshiftleft'](value['__getitem__']($constant_int_3),$constant_int_24)]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=232;
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
					if (self.prototype['__md5__'] !== '4e46dcb57fc4df6791c837037ac41dcd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':232};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=232;
				$pyjs['track']['lineno']=233;
				$pyjs['track']['lineno']=233;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyImageMatrix']['__setitem__'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([index['__getitem__']($constant_int_1), index['__getitem__']($constant_int_0)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['op_bitand2']($p['op_bitshiftright'](value,$constant_int_16), $constant_int_255), $p['op_bitand2']($p['op_bitshiftright'](value,$constant_int_8), $constant_int_255), $p['op_bitand2'](value, $constant_int_255), $p['op_bitand2']($p['op_bitshiftright'](value,$constant_int_24), $constant_int_255)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['__setitem__'] = $method;
			$pyjs['track']['lineno']=222;
			var $bases = new Array($m['PyImageMatrix']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyImageMatrixInteger', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=236;
		$m['PyImageInteger'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.surfarray';
			$cls_definition['__md5__'] = '1d4308553fa0bf7d59a1809fe0fd8bfe';
			$pyjs['track']['lineno']=242;
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
					if (self.prototype['__md5__'] !== '1d4308553fa0bf7d59a1809fe0fd8bfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter13_idx,array,index,$iter13_array,$iter14_array,$iter14_type,$add14,$iter14_iter,$add13,$iter13_nextval,data,$iter14_idx,$iter14_nextval,$mul14,$mul13,$iter13_iter,$iter13_type,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,y,x;
				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':242};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=242;
				$pyjs['track']['lineno']=243;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__imagedata', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyImageData'](imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()) : $p['setattr'](self, '__imagedata', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyImageData'](imagedata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()); 
				$pyjs['track']['lineno']=244;
				array = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray']($p['getattr']($p['getattr'](self, '__imagedata'), 'data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
				$pyjs['track']['lineno']=245;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return array['setshape']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'), $p['getattr']($p['getattr'](self, '__imagedata'), 'width'), $constant_int_4);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
				$pyjs['track']['lineno']=246;
				data = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PyUint32Array']((typeof ($mul13=$p['getattr']($p['getattr'](self, '__imagedata'), 'height'))==typeof ($mul14=$p['getattr']($p['getattr'](self, '__imagedata'), 'width')) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
				$pyjs['track']['lineno']=247;
				index = $constant_int_0;
				$pyjs['track']['lineno']=248;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
				$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
				while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
					x = $iter13_nextval['$nextval'];
					$pyjs['track']['lineno']=249;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter14_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
					$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
					while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
						y = $iter14_nextval['$nextval'];
						$pyjs['track']['lineno']=250;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return data['__setitem__'](index, $p['op_bitor']([$p['op_bitshiftleft'](array['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([y, x, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})()),$constant_int_16), $p['op_bitshiftleft'](array['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([y, x, $constant_int_1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})()),$constant_int_8), array['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([y, x, $constant_int_2]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})()), $p['op_bitshiftleft'](array['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([y, x, $constant_int_3]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})()),$constant_int_24)]));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
						$pyjs['track']['lineno']=251;
						index = $p['__op_add']($add13=index,$add14=$constant_int_1);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.surfarray';
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=252;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Ndarray']['__init__'](self, data, $constant_int_3);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
				$pyjs['track']['lineno']=253;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setshape']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'), $p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['imagedata']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=255;
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
					if (self.prototype['__md5__'] !== '1d4308553fa0bf7d59a1809fe0fd8bfe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs__trackstack_size_1,$iter16_idx,$iter16_iter,index,$iter15_iter,$iter16_type,$add21,$add20,$add22,$iter16_nextval,$iter15_array,$add15,$add16,$add17,$add18,$add19,$iter16_array,$iter15_idx,$pyjs__trackstack_size_2,$iter15_nextval,$iter15_type,y,x;
				$pyjs['track']={'module':'pyjsdl.surfarray', 'lineno':255};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=255;
				$pyjs['track']['lineno']=256;
				index = $constant_int_0;
				$pyjs['track']['lineno']=257;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter15_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
				$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
				while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
					x = $iter15_nextval['$nextval'];
					$pyjs['track']['lineno']=258;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter16_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
					$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
					while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
						y = $iter16_nextval['$nextval'];
						$pyjs['track']['lineno']=259;
						var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$p['op_bitand2']($p['op_bitshiftright'](self['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([y, x]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})()),$constant_int_16), $constant_int_255), $p['op_bitand2']($p['op_bitshiftright'](self['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([y, x]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()),$constant_int_8), $constant_int_255), $p['op_bitand2'](self['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([y, x]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()), $constant_int_255), $p['op_bitand2']($p['op_bitshiftright'](self['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([y, x]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})()),$constant_int_24), $constant_int_255)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})(), 4, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__'](index, $tupleassign3[0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add15=index,$add16=$constant_int_1), $tupleassign3[1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add17=index,$add18=$constant_int_2), $tupleassign3[2]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add19=index,$add20=$constant_int_3), $tupleassign3[3]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
						$pyjs['track']['lineno']=260;
						index = $p['__op_add']($add21=index,$add22=$constant_int_4);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.surfarray';
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surfarray';
				$pyjs['track']['lineno']=261;
				$pyjs['track']['lineno']=261;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__imagedata']['getImageData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getImageData'] = $method;
			$pyjs['track']['lineno']=236;
			var $bases = new Array($m['Ndarray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyImageInteger', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.surfarray */


/* end module: pyjsdl.surfarray */


/*
PYJS_DEPS: ['pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface', 'pyjsdl.pyjsarray.PyUint8ClampedArray', 'pyjsdl.pyjsarray', 'pyjsdl.pyjsarray.PyUint8Array', 'pyjsdl.pyjsarray.PyUint32Array', 'pyjsdl.pyjsarray.Ndarray', 'pyjsdl.pyjsarray.PyImageData', 'pyjsdl.pyjsarray.PyImageMatrix']
*/
