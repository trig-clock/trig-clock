/* start module: pyjsdl.mask */
$pyjs['loaded_modules']['pyjsdl.mask'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.mask']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.mask'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.mask'];
	$m['__repr__'] = function() { return '<module: pyjsdl.mask>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.mask';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['mask'] = $pyjs['loaded_modules']['pyjsdl.mask'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.mask.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[5] = 'pyjsdl.mask.py, line 5:\n    from pyjsdl.pyjsarray import BitSet';
		$m.__track_lines__[6] = 'pyjsdl.mask.py, line 6:\n    from pyjsdl.color import Color';
		$m.__track_lines__[8] = "pyjsdl.mask.py, line 8:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[11] = 'pyjsdl.mask.py, line 11:\n    def from_surface(surface, threshold=127):';
		$m.__track_lines__[18] = 'pyjsdl.mask.py, line 18:\n    mask = Mask(surface.width, surface.height)';
		$m.__track_lines__[19] = 'pyjsdl.mask.py, line 19:\n    if not mask.bit:';
		$m.__track_lines__[20] = 'pyjsdl.mask.py, line 20:\n    return None';
		$m.__track_lines__[21] = 'pyjsdl.mask.py, line 21:\n    pixels = surface.impl.getImageData(0, 0, surface.width, surface.height)';
		$m.__track_lines__[22] = 'pyjsdl.mask.py, line 22:\n    width, height = surface.width*4, surface.height';
		$m.__track_lines__[23] = 'pyjsdl.mask.py, line 23:\n    for y in xrange(0, height):';
		$m.__track_lines__[24] = 'pyjsdl.mask.py, line 24:\n    xpix = 0';
		$m.__track_lines__[25] = 'pyjsdl.mask.py, line 25:\n    i = (y*width)+3';
		$m.__track_lines__[26] = 'pyjsdl.mask.py, line 26:\n    for x in xrange(0, width, 4):';
		$m.__track_lines__[27] = 'pyjsdl.mask.py, line 27:\n    if surface._getPixel(pixels, i+x) > threshold:';
		$m.__track_lines__[28] = 'pyjsdl.mask.py, line 28:\n    mask.set_at((xpix,y))';
		$m.__track_lines__[29] = 'pyjsdl.mask.py, line 29:\n    xpix += 1';
		$m.__track_lines__[30] = 'pyjsdl.mask.py, line 30:\n    return mask';
		$m.__track_lines__[33] = 'pyjsdl.mask.py, line 33:\n    def from_threshold(surface, color, threshold=(0,0,0,255)):';
		$m.__track_lines__[40] = 'pyjsdl.mask.py, line 40:\n    mask = Mask(surface.width, surface.height)';
		$m.__track_lines__[41] = 'pyjsdl.mask.py, line 41:\n    if not mask.bit:';
		$m.__track_lines__[42] = 'pyjsdl.mask.py, line 42:\n    return None';
		$m.__track_lines__[43] = 'pyjsdl.mask.py, line 43:\n    pixels = surface.impl.getImageData(0, 0, surface.width, surface.height)';
		$m.__track_lines__[44] = 'pyjsdl.mask.py, line 44:\n    if threshold == (0,0,0,255):';
		$m.__track_lines__[45] = 'pyjsdl.mask.py, line 45:\n    color = Color(color)';
		$m.__track_lines__[46] = 'pyjsdl.mask.py, line 46:\n    color = (color.r,color.g,color.b)';
		$m.__track_lines__[47] = 'pyjsdl.mask.py, line 47:\n    width, height = surface.width*4, surface.height';
		$m.__track_lines__[48] = 'pyjsdl.mask.py, line 48:\n    for y in xrange(0, height):';
		$m.__track_lines__[49] = 'pyjsdl.mask.py, line 49:\n    xpix = 0';
		$m.__track_lines__[50] = 'pyjsdl.mask.py, line 50:\n    i = y*width';
		$m.__track_lines__[51] = 'pyjsdl.mask.py, line 51:\n    for x in xrange(0, width, 4):';
		$m.__track_lines__[52] = 'pyjsdl.mask.py, line 52:\n    ix = i+x';
		$m.__track_lines__[53] = 'pyjsdl.mask.py, line 53:\n    if surface._getPixel(pixels, ix) == color[0] and surface._getPixel(pixels, ix+1) == color[1] and surface._getPixel(pixels, ix+2) == color[2] and surface._getPixel(pixels, ix+3) >= threshold[3]:';
		$m.__track_lines__[54] = 'pyjsdl.mask.py, line 54:\n    mask.set_at((xpix,y))';
		$m.__track_lines__[55] = 'pyjsdl.mask.py, line 55:\n    xpix += 1';
		$m.__track_lines__[57] = 'pyjsdl.mask.py, line 57:\n    color = Color(color)';
		$m.__track_lines__[58] = 'pyjsdl.mask.py, line 58:\n    col = {}';
		$m.__track_lines__[59] = "pyjsdl.mask.py, line 59:\n    for i, c in enumerate(('r','g','b')):";
		$m.__track_lines__[60] = 'pyjsdl.mask.py, line 60:\n    if threshold[i]:';
		$m.__track_lines__[61] = "pyjsdl.mask.py, line 61:\n    col[c+'1'] = color[i] - threshold[i] - 1";
		$m.__track_lines__[62] = "pyjsdl.mask.py, line 62:\n    col[c+'2'] = color[i] + threshold[i] + 1";
		$m.__track_lines__[64] = "pyjsdl.mask.py, line 64:\n    col[c+'1'] = color[i] - 1";
		$m.__track_lines__[65] = "pyjsdl.mask.py, line 65:\n    col[c+'2'] = color[i] + 1";
		$m.__track_lines__[66] = "pyjsdl.mask.py, line 66:\n    col['a'] = threshold[3] - 1";
		$m.__track_lines__[67] = 'pyjsdl.mask.py, line 67:\n    width, height = surface.width*4, surface.height';
		$m.__track_lines__[68] = 'pyjsdl.mask.py, line 68:\n    for y in xrange(0, height):';
		$m.__track_lines__[69] = 'pyjsdl.mask.py, line 69:\n    xpix = 0';
		$m.__track_lines__[70] = 'pyjsdl.mask.py, line 70:\n    i = y*width';
		$m.__track_lines__[71] = 'pyjsdl.mask.py, line 71:\n    for x in xrange(0, width, 4):';
		$m.__track_lines__[72] = 'pyjsdl.mask.py, line 72:\n    ix = i+x';
		$m.__track_lines__[73] = "pyjsdl.mask.py, line 73:\n    if (col['r1'] < surface._getPixel(pixels, ix) < col['r2']) and (col['g1'] < surface._getPixel(pixels, ix+1) < col['g2']) and (col['b1'] < surface._getPixel(pixels, ix+2) < col['b2']) and (surface._getPixel(pixels, ix+3) > col['a']):";
		$m.__track_lines__[74] = 'pyjsdl.mask.py, line 74:\n    mask.set_at((xpix,y))';
		$m.__track_lines__[75] = 'pyjsdl.mask.py, line 75:\n    xpix += 1';
		$m.__track_lines__[76] = 'pyjsdl.mask.py, line 76:\n    return mask';
		$m.__track_lines__[79] = 'pyjsdl.mask.py, line 79:\n    class Mask(object):';
		$m.__track_lines__[94] = 'pyjsdl.mask.py, line 94:\n    def __init__(self, width, height):';
		$m.__track_lines__[100] = 'pyjsdl.mask.py, line 100:\n    self.width = int(width)';
		$m.__track_lines__[101] = 'pyjsdl.mask.py, line 101:\n    self.height = int(height)';
		$m.__track_lines__[102] = 'pyjsdl.mask.py, line 102:\n    self.bit = []';
		$m.__track_lines__[103] = 'pyjsdl.mask.py, line 103:\n    for bitset in range(self.height):';
		$m.__track_lines__[104] = 'pyjsdl.mask.py, line 104:\n    self.bit.append(BitSet(self.width))';
		$m.__track_lines__[106] = 'pyjsdl.mask.py, line 106:\n    def __repr__(self):';
		$m.__track_lines__[110] = 'pyjsdl.mask.py, line 110:\n    return "%s(%r)" % (self.__class__, self.__dict__)';
		$m.__track_lines__[112] = 'pyjsdl.mask.py, line 112:\n    def get_size(self):';
		$m.__track_lines__[116] = 'pyjsdl.mask.py, line 116:\n    return (self.width, self.height)';
		$m.__track_lines__[118] = 'pyjsdl.mask.py, line 118:\n    def get_at(self, pos):';
		$m.__track_lines__[122] = 'pyjsdl.mask.py, line 122:\n    return self.bit[pos[1]].get(pos[0])';
		$m.__track_lines__[124] = 'pyjsdl.mask.py, line 124:\n    def set_at(self, pos, value=1):';
		$m.__track_lines__[129] = 'pyjsdl.mask.py, line 129:\n    self.bit[pos[1]].set(pos[0], value)';
		$m.__track_lines__[130] = 'pyjsdl.mask.py, line 130:\n    return None';
		$m.__track_lines__[132] = 'pyjsdl.mask.py, line 132:\n    def fill(self):';
		$m.__track_lines__[136] = 'pyjsdl.mask.py, line 136:\n    for bitset in self.bit:';
		$m.__track_lines__[137] = 'pyjsdl.mask.py, line 137:\n    bitset.fill()';
		$m.__track_lines__[138] = 'pyjsdl.mask.py, line 138:\n    return None';
		$m.__track_lines__[140] = 'pyjsdl.mask.py, line 140:\n    def clear(self):';
		$m.__track_lines__[144] = 'pyjsdl.mask.py, line 144:\n    for bitset in self.bit:';
		$m.__track_lines__[145] = 'pyjsdl.mask.py, line 145:\n    bitset.clear()';
		$m.__track_lines__[146] = 'pyjsdl.mask.py, line 146:\n    return None';
		$m.__track_lines__[148] = 'pyjsdl.mask.py, line 148:\n    def invert(self):';
		$m.__track_lines__[152] = 'pyjsdl.mask.py, line 152:\n    for bitset in self.bit:';
		$m.__track_lines__[153] = 'pyjsdl.mask.py, line 153:\n    bitset.flip(0,self.width)';
		$m.__track_lines__[154] = 'pyjsdl.mask.py, line 154:\n    return None';
		$m.__track_lines__[156] = 'pyjsdl.mask.py, line 156:\n    def count(self):';
		$m.__track_lines__[160] = 'pyjsdl.mask.py, line 160:\n    true_bits = 0';
		$m.__track_lines__[161] = 'pyjsdl.mask.py, line 161:\n    for bitset in self.bit:';
		$m.__track_lines__[162] = 'pyjsdl.mask.py, line 162:\n    true_bits += bitset.cardinality()';
		$m.__track_lines__[163] = 'pyjsdl.mask.py, line 163:\n    return true_bits';
		$m.__track_lines__[165] = 'pyjsdl.mask.py, line 165:\n    def overlap(self, mask, offset):';
		$m.__track_lines__[169] = 'pyjsdl.mask.py, line 169:\n    if offset[0] > 0:';
		$m.__track_lines__[170] = 'pyjsdl.mask.py, line 170:\n    x1 = offset[0]';
		$m.__track_lines__[171] = 'pyjsdl.mask.py, line 171:\n    x2 = 0';
		$m.__track_lines__[173] = 'pyjsdl.mask.py, line 173:\n    x1 = 0';
		$m.__track_lines__[174] = 'pyjsdl.mask.py, line 174:\n    x2 = -offset[0]';
		$m.__track_lines__[175] = 'pyjsdl.mask.py, line 175:\n    if offset[1] > 0:';
		$m.__track_lines__[176] = 'pyjsdl.mask.py, line 176:\n    y1 = offset[1]';
		$m.__track_lines__[177] = 'pyjsdl.mask.py, line 177:\n    y2 = 0';
		$m.__track_lines__[179] = 'pyjsdl.mask.py, line 179:\n    y1 = 0';
		$m.__track_lines__[180] = 'pyjsdl.mask.py, line 180:\n    y2 = -offset[1]';
		$m.__track_lines__[181] = 'pyjsdl.mask.py, line 181:\n    w = min(self.width-x1, mask.width-x2)';
		$m.__track_lines__[182] = 'pyjsdl.mask.py, line 182:\n    h = min(self.height-y1, mask.height-y2)';
		$m.__track_lines__[183] = 'pyjsdl.mask.py, line 183:\n    if w > 0 and h > 0:';
		$m.__track_lines__[184] = 'pyjsdl.mask.py, line 184:\n    for y in range(h):';
		$m.__track_lines__[185] = 'pyjsdl.mask.py, line 185:\n    if self.bit[y1+y].get(x1, x1+w).intersects(mask.bit[y2+y].get(x2, x2+w)):';
		$m.__track_lines__[186] = 'pyjsdl.mask.py, line 186:\n    return True';
		$m.__track_lines__[187] = 'pyjsdl.mask.py, line 187:\n    return None';
		$m.__track_lines__[189] = "pyjsdl.mask.py, line 189:\n    def toString(self, bit=('1','0')):";
		$m.__track_lines__[194] = 'pyjsdl.mask.py, line 194:\n    cbit = {True:bit[0], False:bit[1]}';
		$m.__track_lines__[195] = 'pyjsdl.mask.py, line 195:\n    cbitset = []';
		$m.__track_lines__[196] = 'pyjsdl.mask.py, line 196:\n    for bitset in self.bit:';
		$m.__track_lines__[197] = "pyjsdl.mask.py, line 197:\n    cbitset.append('\\n')";
		$m.__track_lines__[198] = 'pyjsdl.mask.py, line 198:\n    cbitset.extend([cbit[bitset.get(i)] for i in range(self.width)])';
		$m.__track_lines__[199] = "pyjsdl.mask.py, line 199:\n    bitstr = ''.join(cbitset)";
		$m.__track_lines__[200] = 'pyjsdl.mask.py, line 200:\n    return bitstr';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_127 = new $p['int'](127);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='pyjsdl.mask';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['BitSet'] = $p['___import___']('pyjsdl.pyjsarray.BitSet', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=8;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=11;
		$m['from_surface'] = function(surface, threshold) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof threshold == 'undefined') threshold=arguments['callee']['__args__'][3][1];
			var height,$iter1_iter,$iter2_type,$iter2_iter,pixels,width,$iter1_array,$add6,$iter1_nextval,$add5,$iter2_idx,$mul4,$mul3,$mul2,$mul1,xpix,$iter2_nextval,$iter1_type,i,mask,$add2,$add3,$add1,$pyjs__trackstack_size_2,$iter1_idx,$add4,$pyjs__trackstack_size_1,y,x,$iter2_array;
			$pyjs['track']={'module':'pyjsdl.mask','lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.mask';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=18;
			mask = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof Mask == "undefined"?$m['Mask']:Mask)($p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs['track']['lineno']=19;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](mask, 'bit')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
				$pyjs['track']['lineno']=20;
				$pyjs['track']['lineno']=20;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=21;
			pixels = (function(){try{try{$pyjs['in_try_except'] += 1;
			return surface['impl']['getImageData']($constant_int_0, $constant_int_0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=22;
			var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([(typeof ($mul1=$p['getattr'](surface, 'width'))==typeof ($mul2=$constant_int_4) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)), $p['getattr'](surface, 'height')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			width = $tupleassign1[0];
			height = $tupleassign1[1];
			$pyjs['track']['lineno']=23;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['xrange']($constant_int_0, height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				y = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=24;
				xpix = $constant_int_0;
				$pyjs['track']['lineno']=25;
				i = $p['__op_add']($add1=(typeof ($mul3=y)==typeof ($mul4=width) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)),$add2=$constant_int_3);
				$pyjs['track']['lineno']=26;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($constant_int_0, width, $constant_int_4);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					x = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=27;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['_getPixel'](pixels, $p['__op_add']($add3=i,$add4=x));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})(), threshold) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
						$pyjs['track']['lineno']=28;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return mask['set_at']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([xpix, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
					}
					$pyjs['track']['lineno']=29;
					xpix = $p['__op_add']($add5=xpix,$add6=$constant_int_1);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mask';
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.mask';
			$pyjs['track']['lineno']=30;
			$pyjs['track']['lineno']=30;
			var $pyjs__ret = mask;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['from_surface']['__name__'] = 'from_surface';

		$m['from_surface']['__bind_type__'] = 0;
		$m['from_surface']['__args__'] = [null,null,['surface'],['threshold', $constant_int_127]];
		$pyjs['track']['lineno']=33;
		$m['from_threshold'] = function(surface, color, threshold) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			if (typeof threshold == 'undefined') threshold=arguments['callee']['__args__'][4][1];
			var $iter5_idx,$iter4_type,$iter6_type,$iter3_iter,$iter7_type,$and8,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$iter6_array,$iter7_nextval,$iter4_nextval,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,x,$iter5_nextval,$iter5_array,$iter6_iter,$iter6_idx,pixels,c,$mul12,$mul11,$mul10,col,$iter7_idx,height,$iter5_type,$iter4_iter,$iter3_array,$iter3_nextval,$add40,width,$iter7_iter,$mul9,$mul8,$mul7,$mul6,$mul5,$add38,$add39,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$add7,$add13,$iter4_array,$add8,$add9,ix,$iter5_iter,$iter6_nextval,$add29,$add28,$iter3_idx,$add21,$add20,$add23,$add22,$add25,$add24,$add27,$add26,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$iter3_type,$add18,$add19,xpix,i,$iter7_array,mask,$iter4_idx,y;
			$pyjs['track']={'module':'pyjsdl.mask','lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.mask';
			$pyjs['track']['lineno']=33;
			$pyjs['track']['lineno']=40;
			mask = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof Mask == "undefined"?$m['Mask']:Mask)($p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['track']['lineno']=41;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](mask, 'bit')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
				$pyjs['track']['lineno']=42;
				$pyjs['track']['lineno']=42;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=43;
			pixels = (function(){try{try{$pyjs['in_try_except'] += 1;
			return surface['impl']['getImageData']($constant_int_0, $constant_int_0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['track']['lineno']=44;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](threshold, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0, $constant_int_255]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
				$pyjs['track']['lineno']=45;
				color = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs['track']['lineno']=46;
				color = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](color, 'r'), $p['getattr'](color, 'g'), $p['getattr'](color, 'b')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs['track']['lineno']=47;
				var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([(typeof ($mul5=$p['getattr'](surface, 'width'))==typeof ($mul6=$constant_int_4) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)), $p['getattr'](surface, 'height')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				width = $tupleassign2[0];
				height = $tupleassign2[1];
				$pyjs['track']['lineno']=48;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($constant_int_0, height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					y = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=49;
					xpix = $constant_int_0;
					$pyjs['track']['lineno']=50;
					i = (typeof ($mul7=y)==typeof ($mul8=width) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8));
					$pyjs['track']['lineno']=51;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']($constant_int_0, width, $constant_int_4);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						x = $iter4_nextval['$nextval'];
						$pyjs['track']['lineno']=52;
						ix = $p['__op_add']($add7=i,$add8=x);
						$pyjs['track']['lineno']=53;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($and1=$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['_getPixel'](pixels, ix);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})(), color['__getitem__']($constant_int_0)))?($p['bool']($and2=$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['_getPixel'](pixels, $p['__op_add']($add9=ix,$add10=$constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})(), color['__getitem__']($constant_int_1)))?($p['bool']($and3=$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['_getPixel'](pixels, $p['__op_add']($add11=ix,$add12=$constant_int_2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})(), color['__getitem__']($constant_int_2)))?((($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['_getPixel'](pixels, $p['__op_add']($add13=ix,$add14=$constant_int_3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})(), threshold['__getitem__']($constant_int_3)))|1) == 1):$and3):$and2):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) {
							$pyjs['track']['lineno']=54;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return mask['set_at']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['tuple']([xpix, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
						}
						$pyjs['track']['lineno']=55;
						xpix = $p['__op_add']($add15=xpix,$add16=$constant_int_1);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.mask';
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mask';
			}
			else {
				$pyjs['track']['lineno']=57;
				color = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
				$pyjs['track']['lineno']=58;
				col = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
				$pyjs['track']['lineno']=59;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['enumerate']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](['r', 'g', 'b']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
					i = $tupleassign3[0];
					c = $tupleassign3[1];
					$pyjs['track']['lineno']=60;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](threshold['__getitem__'](i));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()) {
						$pyjs['track']['lineno']=61;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return col['__setitem__']($p['__op_add']($add17=c,$add18='1'), $p['__op_sub']($sub3=$p['__op_sub']($sub1=color['__getitem__'](i),$sub2=threshold['__getitem__'](i)),$sub4=$constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
						$pyjs['track']['lineno']=62;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return col['__setitem__']($p['__op_add']($add23=c,$add24='2'), $p['__op_add']($add21=$p['__op_add']($add19=color['__getitem__'](i),$add20=threshold['__getitem__'](i)),$add22=$constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=64;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return col['__setitem__']($p['__op_add']($add25=c,$add26='1'), $p['__op_sub']($sub5=color['__getitem__'](i),$sub6=$constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
						$pyjs['track']['lineno']=65;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return col['__setitem__']($p['__op_add']($add29=c,$add30='2'), $p['__op_add']($add27=color['__getitem__'](i),$add28=$constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=66;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return col['__setitem__']('a', $p['__op_sub']($sub7=threshold['__getitem__']($constant_int_3),$sub8=$constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				$pyjs['track']['lineno']=67;
				var $tupleassign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([(typeof ($mul9=$p['getattr'](surface, 'width'))==typeof ($mul10=$constant_int_4) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)), $p['getattr'](surface, 'height')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
				width = $tupleassign4[0];
				height = $tupleassign4[1];
				$pyjs['track']['lineno']=68;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['xrange']($constant_int_0, height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					y = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=69;
					xpix = $constant_int_0;
					$pyjs['track']['lineno']=70;
					i = (typeof ($mul11=y)==typeof ($mul12=width) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12));
					$pyjs['track']['lineno']=71;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['xrange']($constant_int_0, width, $constant_int_4);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						x = $iter7_nextval['$nextval'];
						$pyjs['track']['lineno']=72;
						ix = $p['__op_add']($add31=i,$add32=x);
						$pyjs['track']['lineno']=73;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($and5=(($p['cmp'](col['__getitem__']('r1'), ($compare1 = (function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['_getPixel'](pixels, ix);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})())) == -1)&&($p['cmp']($compare1, ($compare2 = col['__getitem__']('r2'))) == -1)))?($p['bool']($and6=(($p['cmp'](col['__getitem__']('g1'), ($compare3 = (function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['_getPixel'](pixels, $p['__op_add']($add33=ix,$add34=$constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})())) == -1)&&($p['cmp']($compare3, ($compare4 = col['__getitem__']('g2'))) == -1)))?($p['bool']($and7=(($p['cmp'](col['__getitem__']('b1'), ($compare5 = (function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['_getPixel'](pixels, $p['__op_add']($add35=ix,$add36=$constant_int_2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})())) == -1)&&($p['cmp']($compare5, ($compare6 = col['__getitem__']('b2'))) == -1)))?($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['_getPixel'](pixels, $p['__op_add']($add37=ix,$add38=$constant_int_3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})(), col['__getitem__']('a')) == 1):$and7):$and6):$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
							$pyjs['track']['lineno']=74;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return mask['set_at']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['tuple']([xpix, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
						}
						$pyjs['track']['lineno']=75;
						xpix = $p['__op_add']($add39=xpix,$add40=$constant_int_1);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.mask';
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mask';
			}
			$pyjs['track']['lineno']=76;
			$pyjs['track']['lineno']=76;
			var $pyjs__ret = mask;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['from_threshold']['__name__'] = 'from_threshold';

		$m['from_threshold']['__bind_type__'] = 0;
		$m['from_threshold']['__args__'] = [null,null,['surface'],['color'],['threshold', (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0, $constant_int_255]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()]];
		$pyjs['track']['lineno']=79;
		$m['Mask'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.mask';
			$cls_definition['__md5__'] = 'e06855ecc87d5c82f7603304b10e5ca2';
			$pyjs['track']['lineno']=94;
			$method = $pyjs__bind_method2('__init__', function(width, height) {
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
					if (self.prototype['__md5__'] !== 'e06855ecc87d5c82f7603304b10e5ca2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter8_idx,$iter8_array,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,$iter8_type,bitset;
				$pyjs['track']={'module':'pyjsdl.mask', 'lineno':94};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=94;
				$pyjs['track']['lineno']=100;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) : $p['setattr'](self, 'width', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()); 
				$pyjs['track']['lineno']=101;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) : $p['setattr'](self, 'height', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()); 
				$pyjs['track']['lineno']=102;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bit', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) : $p['setattr'](self, 'bit', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()); 
				$pyjs['track']['lineno']=103;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range']($p['getattr'](self, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					bitset = $iter8_nextval['$nextval'];
					$pyjs['track']['lineno']=104;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['bit']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['BitSet']($p['getattr'](self, 'width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=106;
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
					if (self.prototype['__md5__'] !== 'e06855ecc87d5c82f7603304b10e5ca2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mask', 'lineno':106};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=106;
				$pyjs['track']['lineno']=110;
				$pyjs['track']['lineno']=110;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s(%r)', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, '__class__'), $p['getattr'](self, '__dict__')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=112;
			$method = $pyjs__bind_method2('get_size', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e06855ecc87d5c82f7603304b10e5ca2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mask', 'lineno':112};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=112;
				$pyjs['track']['lineno']=116;
				$pyjs['track']['lineno']=116;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, 'width'), $p['getattr'](self, 'height')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_size'] = $method;
			$pyjs['track']['lineno']=118;
			$method = $pyjs__bind_method2('get_at', function(pos) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pos = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e06855ecc87d5c82f7603304b10e5ca2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mask', 'lineno':118};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=118;
				$pyjs['track']['lineno']=122;
				$pyjs['track']['lineno']=122;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'bit')['__getitem__'](pos['__getitem__']($constant_int_1))['get'](pos['__getitem__']($constant_int_0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['pos']]);
			$cls_definition['get_at'] = $method;
			$pyjs['track']['lineno']=124;
			$method = $pyjs__bind_method2('set_at', function(pos, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					pos = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e06855ecc87d5c82f7603304b10e5ca2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof value == 'undefined') value=arguments['callee']['__args__'][4][1];

				$pyjs['track']={'module':'pyjsdl.mask', 'lineno':124};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=124;
				$pyjs['track']['lineno']=129;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'bit')['__getitem__'](pos['__getitem__']($constant_int_1))['set'](pos['__getitem__']($constant_int_0), value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
				$pyjs['track']['lineno']=130;
				$pyjs['track']['lineno']=130;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['pos'],['value', $constant_int_1]]);
			$cls_definition['set_at'] = $method;
			$pyjs['track']['lineno']=132;
			$method = $pyjs__bind_method2('fill', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e06855ecc87d5c82f7603304b10e5ca2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter9_iter,$iter9_nextval,$iter9_idx,$iter9_type,bitset,$pyjs__trackstack_size_1,$iter9_array;
				$pyjs['track']={'module':'pyjsdl.mask', 'lineno':132};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=132;
				$pyjs['track']['lineno']=136;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'bit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					bitset = $iter9_nextval['$nextval'];
					$pyjs['track']['lineno']=137;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return bitset['fill']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=138;
				$pyjs['track']['lineno']=138;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['fill'] = $method;
			$pyjs['track']['lineno']=140;
			$method = $pyjs__bind_method2('clear', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e06855ecc87d5c82f7603304b10e5ca2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter10_nextval,$iter10_array,bitset,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter,$iter10_idx;
				$pyjs['track']={'module':'pyjsdl.mask', 'lineno':140};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=140;
				$pyjs['track']['lineno']=144;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'bit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					bitset = $iter10_nextval['$nextval'];
					$pyjs['track']['lineno']=145;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return bitset['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=146;
				$pyjs['track']['lineno']=146;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear'] = $method;
			$pyjs['track']['lineno']=148;
			$method = $pyjs__bind_method2('invert', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e06855ecc87d5c82f7603304b10e5ca2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter11_iter,$iter11_type,bitset,$iter11_array,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjsdl.mask', 'lineno':148};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=148;
				$pyjs['track']['lineno']=152;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'bit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					bitset = $iter11_nextval['$nextval'];
					$pyjs['track']['lineno']=153;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return bitset['flip']($constant_int_0, $p['getattr'](self, 'width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=154;
				$pyjs['track']['lineno']=154;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['invert'] = $method;
			$pyjs['track']['lineno']=156;
			$method = $pyjs__bind_method2('count', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e06855ecc87d5c82f7603304b10e5ca2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter12_type,$iter12_array,$add42,$add41,$iter12_nextval,$iter12_iter,bitset,$pyjs__trackstack_size_1,true_bits,$iter12_idx;
				$pyjs['track']={'module':'pyjsdl.mask', 'lineno':156};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=156;
				$pyjs['track']['lineno']=160;
				true_bits = $constant_int_0;
				$pyjs['track']['lineno']=161;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'bit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					bitset = $iter12_nextval['$nextval'];
					$pyjs['track']['lineno']=162;
					true_bits = $p['__op_add']($add41=true_bits,$add42=(function(){try{try{$pyjs['in_try_except'] += 1;
					return bitset['cardinality']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})());
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=163;
				$pyjs['track']['lineno']=163;
				var $pyjs__ret = true_bits;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['count'] = $method;
			$pyjs['track']['lineno']=165;
			$method = $pyjs__bind_method2('overlap', function(mask, offset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					mask = arguments[1];
					offset = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e06855ecc87d5c82f7603304b10e5ca2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter13_idx,y1,y2,$add49,$add48,$add47,$add46,$add44,$add43,$sub9,$iter13_type,$and9,$sub13,$sub12,$sub11,$sub10,$sub16,$sub15,$sub14,$and10,x2,x1,$add50,$iter13_nextval,$iter13_iter,h,$iter13_array,w,$pyjs__trackstack_size_1,y,$add45;
				$pyjs['track']={'module':'pyjsdl.mask', 'lineno':165};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=165;
				$pyjs['track']['lineno']=169;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp'](offset['__getitem__']($constant_int_0), $constant_int_0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
					$pyjs['track']['lineno']=170;
					x1 = offset['__getitem__']($constant_int_0);
					$pyjs['track']['lineno']=171;
					x2 = $constant_int_0;
				}
				else {
					$pyjs['track']['lineno']=173;
					x1 = $constant_int_0;
					$pyjs['track']['lineno']=174;
					x2 = (typeof ($usub1=offset['__getitem__']($constant_int_0))=='number'?
						-$usub1:
						$p['op_usub']($usub1));
				}
				$pyjs['track']['lineno']=175;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp'](offset['__getitem__']($constant_int_1), $constant_int_0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()) {
					$pyjs['track']['lineno']=176;
					y1 = offset['__getitem__']($constant_int_1);
					$pyjs['track']['lineno']=177;
					y2 = $constant_int_0;
				}
				else {
					$pyjs['track']['lineno']=179;
					y1 = $constant_int_0;
					$pyjs['track']['lineno']=180;
					y2 = (typeof ($usub2=offset['__getitem__']($constant_int_1))=='number'?
						-$usub2:
						$p['op_usub']($usub2));
				}
				$pyjs['track']['lineno']=181;
				w = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['min']($p['__op_sub']($sub9=$p['getattr'](self, 'width'),$sub10=x1), $p['__op_sub']($sub11=$p['getattr'](mask, 'width'),$sub12=x2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				$pyjs['track']['lineno']=182;
				h = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['min']($p['__op_sub']($sub13=$p['getattr'](self, 'height'),$sub14=y1), $p['__op_sub']($sub15=$p['getattr'](mask, 'height'),$sub16=y2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
				$pyjs['track']['lineno']=183;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and9=($p['cmp'](w, $constant_int_0) == 1))?($p['cmp'](h, $constant_int_0) == 1):$and9));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()) {
					$pyjs['track']['lineno']=184;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['range'](h);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
					$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
					while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
						y = $iter13_nextval['$nextval'];
						$pyjs['track']['lineno']=185;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'bit')['__getitem__']($p['__op_add']($add43=y1,$add44=y))['get'](x1, $p['__op_add']($add45=x1,$add46=w));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})()['intersects']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](mask, 'bit')['__getitem__']($p['__op_add']($add47=y2,$add48=y))['get'](x2, $p['__op_add']($add49=x2,$add50=w));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})()) {
							$pyjs['track']['lineno']=186;
							$pyjs['track']['lineno']=186;
							var $pyjs__ret = true;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.mask';
				}
				$pyjs['track']['lineno']=187;
				$pyjs['track']['lineno']=187;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['mask'],['offset']]);
			$cls_definition['overlap'] = $method;
			$pyjs['track']['lineno']=189;
			$method = $pyjs__bind_method2('toString', function(bit) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					bit = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e06855ecc87d5c82f7603304b10e5ca2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof bit == 'undefined') bit=arguments['callee']['__args__'][3][1];
				var bitstr,$iter14_array,$iter14_type,cbit,cbitset,bitset,$iter14_iter,$pyjs__trackstack_size_1,$iter14_idx,$iter14_nextval;
				$pyjs['track']={'module':'pyjsdl.mask', 'lineno':189};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=189;
				$pyjs['track']['lineno']=194;
				cbit = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[true, bit['__getitem__']($constant_int_0)], [false, bit['__getitem__']($constant_int_1)]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
				$pyjs['track']['lineno']=195;
				cbitset = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
				$pyjs['track']['lineno']=196;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter14_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'bit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					bitset = $iter14_nextval['$nextval'];
					$pyjs['track']['lineno']=197;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return cbitset['append']('\n');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
					$pyjs['track']['lineno']=198;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return cbitset['extend'](function(){
						var $iter15_iter,i,$iter15_array,$collcomp1,$iter15_idx,$pyjs__trackstack_size_2,$iter15_nextval,$iter15_type;
	$collcomp1 = $p['list']();
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter15_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['range']($p['getattr'](self, 'width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
					$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
					while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
						i = $iter15_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp1['append'](cbit['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return bitset['get'](i);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.mask';

	return $collcomp1;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mask';
				$pyjs['track']['lineno']=199;
				bitstr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return ''['join'](cbitset);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
				$pyjs['track']['lineno']=200;
				$pyjs['track']['lineno']=200;
				var $pyjs__ret = bitstr;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['bit', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['1', '0']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()]]);
			$cls_definition['toString'] = $method;
			$pyjs['track']['lineno']=79;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Mask', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.mask */


/* end module: pyjsdl.mask */


/*
PYJS_DEPS: ['pyjsdl.pyjsarray.BitSet', 'pyjsdl', 'pyjsdl.pyjsarray', 'pyjsdl.color.Color', 'pyjsdl.color']
*/
