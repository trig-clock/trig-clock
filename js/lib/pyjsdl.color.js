/* start module: pyjsdl.color */
$pyjs['loaded_modules']['pyjsdl.color'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.color']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.color'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.color'];
	$m['__repr__'] = function() { return '<module: pyjsdl.color>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.color';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['color'] = $pyjs['loaded_modules']['pyjsdl.color'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.color.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.color.py, line 4:\n    from pyjsdl.pyjsobj import Color as _Color';
		$m.__track_lines__[6] = "pyjsdl.color.py, line 6:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[9] = 'pyjsdl.color.py, line 9:\n    class Color(_Color):';
		$m.__track_lines__[11] = 'pyjsdl.color.py, line 11:\n    def __init__(self, *color):';
		$m.__track_lines__[30] = 'pyjsdl.color.py, line 30:\n    ln = len(color)';
		$m.__track_lines__[31] = 'pyjsdl.color.py, line 31:\n    if ln == 1:';
		$m.__track_lines__[32] = 'pyjsdl.color.py, line 32:\n    _color = color[0]';
		$m.__track_lines__[33] = "pyjsdl.color.py, line 33:\n    if hasattr(_color, '__len__'):";
		$m.__track_lines__[34] = 'pyjsdl.color.py, line 34:\n    ln = len(_color)';
		$m.__track_lines__[36] = 'pyjsdl.color.py, line 36:\n    _color = color';
		$m.__track_lines__[37] = 'pyjsdl.color.py, line 37:\n    if ln == 4:';
		$m.__track_lines__[38] = 'pyjsdl.color.py, line 38:\n    self.r,self.g,self.b,self.a = _color[0],_color[1],_color[2],_color[3]';
		$m.__track_lines__[40] = 'pyjsdl.color.py, line 40:\n    self.r,self.g,self.b,self.a = _color[0],_color[1],_color[2],255';
		$m.__track_lines__[42] = "pyjsdl.color.py, line 42:\n    if hasattr(_color, 'startswith') and _color.startswith('#'):";
		$m.__track_lines__[43] = "pyjsdl.color.py, line 43:\n    _color = '0x' + _color[1:]";
		$m.__track_lines__[44] = 'pyjsdl.color.py, line 44:\n    self.r,self.g,self.b,self.a = (_color>>16) & 0xff, (_color>>8) & 0xff, _color & 0xff, (_color>>24) & 0xff';
		$m.__track_lines__[46] = 'pyjsdl.color.py, line 46:\n    def __repr__(self):';
		$m.__track_lines__[50] = 'pyjsdl.color.py, line 50:\n    return "(%d,%d,%d,%d)" % (self.r, self.g, self.b, self.a)';
		$m.__track_lines__[52] = 'pyjsdl.color.py, line 52:\n    def __str__(self):';
		$m.__track_lines__[56] = 'pyjsdl.color.py, line 56:\n    return "rgba(%d,%d,%d,%f)" % (self.r, self.g, self.b, self.a/255.0)';
		$m.__track_lines__[58] = 'pyjsdl.color.py, line 58:\n    def __getitem__(self, index):';
		$m.__track_lines__[62] = 'pyjsdl.color.py, line 62:\n    return {0:self.r, 1:self.g, 2:self.b, 3:self.a}[index]';
		$m.__track_lines__[64] = 'pyjsdl.color.py, line 64:\n    def __setitem__(self, index, val):';
		$m.__track_lines__[65] = "pyjsdl.color.py, line 65:\n    self.__setattr__({0:'r', 1:'g', 2:'b', 3:'a'}[index], val)";
		$m.__track_lines__[67] = 'pyjsdl.color.py, line 67:\n    def __iter__(self):';
		$m.__track_lines__[68] = 'pyjsdl.color.py, line 68:\n    return iter([self.r, self.g, self.b, self.a])';
		$m.__track_lines__[70] = 'pyjsdl.color.py, line 70:\n    def __len__(self):';
		$m.__track_lines__[71] = 'pyjsdl.color.py, line 71:\n    return 4';
		$m.__track_lines__[73] = 'pyjsdl.color.py, line 73:\n    def __eq__(self, other):';
		$m.__track_lines__[74] = "pyjsdl.color.py, line 74:\n    if hasattr(other, 'a'):";
		$m.__track_lines__[75] = 'pyjsdl.color.py, line 75:\n    return self.r==other.r and self.g==other.g and self.b==other.b and self.a==other.a';
		$m.__track_lines__[77] = 'pyjsdl.color.py, line 77:\n    if len(other) == 4:';
		$m.__track_lines__[78] = 'pyjsdl.color.py, line 78:\n    return self.a==other[3] and self.r==other[0] and self.g==other[1] and self.b==other[2]';
		$m.__track_lines__[80] = 'pyjsdl.color.py, line 80:\n    return self.r==other[0] and self.g==other[1] and self.b==other[2]';
		$m.__track_lines__[82] = 'pyjsdl.color.py, line 82:\n    def __ne__(self, other):';
		$m.__track_lines__[83] = "pyjsdl.color.py, line 83:\n    if hasattr(other, 'a'):";
		$m.__track_lines__[84] = 'pyjsdl.color.py, line 84:\n    return self.r!=other.r or self.g!=other.g or self.b!=other.b or self.a!=other.a';
		$m.__track_lines__[86] = 'pyjsdl.color.py, line 86:\n    if len(other) == 4:';
		$m.__track_lines__[87] = 'pyjsdl.color.py, line 87:\n    return self.a!=other[3] or self.r!=other[0] or self.g!=other[1] or self.b!=other[2]';
		$m.__track_lines__[89] = 'pyjsdl.color.py, line 89:\n    return self.r!=other[0] or self.g!=other[1] or self.b!=other[2]';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='pyjsdl.color';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_Color'] = $p['___import___']('pyjsdl.pyjsobj.Color', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=9;
		$m['Color'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.color';
			$cls_definition['__md5__'] = '87b0c6efeb836629ae6518bcc929c0f2';
			$pyjs['track']['lineno']=11;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var color = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var color = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '87b0c6efeb836629ae6518bcc929c0f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and1,$add2,ln,$add1,_color,$and2;
				$pyjs['track']={'module':'pyjsdl.color', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=11;
				$pyjs['track']['lineno']=30;
				ln = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
				$pyjs['track']['lineno']=31;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](ln, $constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
					$pyjs['track']['lineno']=32;
					_color = color['__getitem__']($constant_int_0);
					$pyjs['track']['lineno']=33;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['hasattr'](_color, '__len__');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
						$pyjs['track']['lineno']=34;
						ln = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len'](_color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=36;
					_color = color;
				}
				$pyjs['track']['lineno']=37;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](ln, $constant_int_4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
					$pyjs['track']['lineno']=38;
					var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([_color['__getitem__']($constant_int_0), _color['__getitem__']($constant_int_1), _color['__getitem__']($constant_int_2), _color['__getitem__']($constant_int_3)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})(), 4, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('r', $tupleassign1[0]) : $p['setattr'](self, 'r', $tupleassign1[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('g', $tupleassign1[1]) : $p['setattr'](self, 'g', $tupleassign1[1]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', $tupleassign1[2]) : $p['setattr'](self, 'b', $tupleassign1[2]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('a', $tupleassign1[3]) : $p['setattr'](self, 'a', $tupleassign1[3]); 
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](ln, $constant_int_3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
					$pyjs['track']['lineno']=40;
					var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([_color['__getitem__']($constant_int_0), _color['__getitem__']($constant_int_1), _color['__getitem__']($constant_int_2), $constant_int_255]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})(), 4, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('r', $tupleassign2[0]) : $p['setattr'](self, 'r', $tupleassign2[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('g', $tupleassign2[1]) : $p['setattr'](self, 'g', $tupleassign2[1]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', $tupleassign2[2]) : $p['setattr'](self, 'b', $tupleassign2[2]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('a', $tupleassign2[3]) : $p['setattr'](self, 'a', $tupleassign2[3]); 
				}
				else {
					$pyjs['track']['lineno']=42;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['hasattr'](_color, 'startswith');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})())?(function(){try{try{$pyjs['in_try_except'] += 1;
					return _color['startswith']('#');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})():$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
						$pyjs['track']['lineno']=43;
						_color = $p['__op_add']($add1='0x',$add2=$p['__getslice'](_color, $constant_int_1, null));
					}
					$pyjs['track']['lineno']=44;
					var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['op_bitand2']($p['op_bitshiftright'](_color,$constant_int_16), $constant_int_255), $p['op_bitand2']($p['op_bitshiftright'](_color,$constant_int_8), $constant_int_255), $p['op_bitand2'](_color, $constant_int_255), $p['op_bitand2']($p['op_bitshiftright'](_color,$constant_int_24), $constant_int_255)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})(), 4, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('r', $tupleassign3[0]) : $p['setattr'](self, 'r', $tupleassign3[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('g', $tupleassign3[1]) : $p['setattr'](self, 'g', $tupleassign3[1]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', $tupleassign3[2]) : $p['setattr'](self, 'b', $tupleassign3[2]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('a', $tupleassign3[3]) : $p['setattr'](self, 'a', $tupleassign3[3]); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['color',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=46;
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
					if (self.prototype['__md5__'] !== '87b0c6efeb836629ae6518bcc929c0f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.color', 'lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=46;
				$pyjs['track']['lineno']=50;
				$pyjs['track']['lineno']=50;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('(%d,%d,%d,%d)', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, 'r'), $p['getattr'](self, 'g'), $p['getattr'](self, 'b'), $p['getattr'](self, 'a')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=52;
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
					if (self.prototype['__md5__'] !== '87b0c6efeb836629ae6518bcc929c0f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div2,$div1;
				$pyjs['track']={'module':'pyjsdl.color', 'lineno':52};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=52;
				$pyjs['track']['lineno']=56;
				$pyjs['track']['lineno']=56;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('rgba(%d,%d,%d,%f)', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, 'r'), $p['getattr'](self, 'g'), $p['getattr'](self, 'b'), (typeof ($div1=$p['getattr'](self, 'a'))==typeof ($div2=255.0) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs['track']['lineno']=58;
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
					if (self.prototype['__md5__'] !== '87b0c6efeb836629ae6518bcc929c0f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.color', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=58;
				$pyjs['track']['lineno']=62;
				$pyjs['track']['lineno']=62;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$constant_int_0, $p['getattr'](self, 'r')], [$constant_int_1, $p['getattr'](self, 'g')], [$constant_int_2, $p['getattr'](self, 'b')], [$constant_int_3, $p['getattr'](self, 'a')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()['__getitem__'](index);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=64;
			$method = $pyjs__bind_method2('__setitem__', function(index, val) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					val = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '87b0c6efeb836629ae6518bcc929c0f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.color', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=64;
				$pyjs['track']['lineno']=65;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setattr__']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$constant_int_0, 'r'], [$constant_int_1, 'g'], [$constant_int_2, 'b'], [$constant_int_3, 'a']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()['__getitem__'](index), val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index'],['val']]);
			$cls_definition['__setitem__'] = $method;
			$pyjs['track']['lineno']=67;
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
					if (self.prototype['__md5__'] !== '87b0c6efeb836629ae6518bcc929c0f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.color', 'lineno':67};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=67;
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=68;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['iter']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([$p['getattr'](self, 'r'), $p['getattr'](self, 'g'), $p['getattr'](self, 'b'), $p['getattr'](self, 'a')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=70;
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
					if (self.prototype['__md5__'] !== '87b0c6efeb836629ae6518bcc929c0f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.color', 'lineno':70};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=70;
				$pyjs['track']['lineno']=71;
				$pyjs['track']['lineno']=71;
				var $pyjs__ret = $constant_int_4;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs['track']['lineno']=73;
			$method = $pyjs__bind_method2('__eq__', function(other) {
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
					if (self.prototype['__md5__'] !== '87b0c6efeb836629ae6518bcc929c0f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and8,$and9,$and3,$and4,$and5,$and6,$and7,$and12,$and13,$and10,$and11;
				$pyjs['track']={'module':'pyjsdl.color', 'lineno':73};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=73;
				$pyjs['track']['lineno']=74;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) {
					$pyjs['track']['lineno']=75;
					$pyjs['track']['lineno']=75;
					var $pyjs__ret = ($p['bool']($and3=$p['op_eq']($p['getattr'](self, 'r'), $p['getattr'](other, 'r')))?($p['bool']($and4=$p['op_eq']($p['getattr'](self, 'g'), $p['getattr'](other, 'g')))?($p['bool']($and5=$p['op_eq']($p['getattr'](self, 'b'), $p['getattr'](other, 'b')))?$p['op_eq']($p['getattr'](self, 'a'), $p['getattr'](other, 'a')):$and5):$and4):$and3);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=77;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](other);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})(), $constant_int_4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
						$pyjs['track']['lineno']=78;
						$pyjs['track']['lineno']=78;
						var $pyjs__ret = ($p['bool']($and7=$p['op_eq']($p['getattr'](self, 'a'), other['__getitem__']($constant_int_3)))?($p['bool']($and8=$p['op_eq']($p['getattr'](self, 'r'), other['__getitem__']($constant_int_0)))?($p['bool']($and9=$p['op_eq']($p['getattr'](self, 'g'), other['__getitem__']($constant_int_1)))?$p['op_eq']($p['getattr'](self, 'b'), other['__getitem__']($constant_int_2)):$and9):$and8):$and7);
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=80;
						$pyjs['track']['lineno']=80;
						var $pyjs__ret = ($p['bool']($and11=$p['op_eq']($p['getattr'](self, 'r'), other['__getitem__']($constant_int_0)))?($p['bool']($and12=$p['op_eq']($p['getattr'](self, 'g'), other['__getitem__']($constant_int_1)))?$p['op_eq']($p['getattr'](self, 'b'), other['__getitem__']($constant_int_2)):$and12):$and11);
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__eq__'] = $method;
			$pyjs['track']['lineno']=82;
			$method = $pyjs__bind_method2('__ne__', function(other) {
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
					if (self.prototype['__md5__'] !== '87b0c6efeb836629ae6518bcc929c0f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or5,$or4,$or7,$or6,$or1,$or3,$or2,$or9,$or8,$or11,$or10;
				$pyjs['track']={'module':'pyjsdl.color', 'lineno':82};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=82;
				$pyjs['track']['lineno']=83;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](other, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) {
					$pyjs['track']['lineno']=84;
					$pyjs['track']['lineno']=84;
					var $pyjs__ret = ($p['bool']($or1=!$p['op_eq']($p['getattr'](self, 'r'), $p['getattr'](other, 'r')))?$or1:($p['bool']($or2=!$p['op_eq']($p['getattr'](self, 'g'), $p['getattr'](other, 'g')))?$or2:($p['bool']($or3=!$p['op_eq']($p['getattr'](self, 'b'), $p['getattr'](other, 'b')))?$or3:!$p['op_eq']($p['getattr'](self, 'a'), $p['getattr'](other, 'a')))));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=86;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](other);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})(), $constant_int_4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
						$pyjs['track']['lineno']=87;
						$pyjs['track']['lineno']=87;
						var $pyjs__ret = ($p['bool']($or5=!$p['op_eq']($p['getattr'](self, 'a'), other['__getitem__']($constant_int_3)))?$or5:($p['bool']($or6=!$p['op_eq']($p['getattr'](self, 'r'), other['__getitem__']($constant_int_0)))?$or6:($p['bool']($or7=!$p['op_eq']($p['getattr'](self, 'g'), other['__getitem__']($constant_int_1)))?$or7:!$p['op_eq']($p['getattr'](self, 'b'), other['__getitem__']($constant_int_2)))));
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=89;
						$pyjs['track']['lineno']=89;
						var $pyjs__ret = ($p['bool']($or9=!$p['op_eq']($p['getattr'](self, 'r'), other['__getitem__']($constant_int_0)))?$or9:($p['bool']($or10=!$p['op_eq']($p['getattr'](self, 'g'), other['__getitem__']($constant_int_1)))?$or10:!$p['op_eq']($p['getattr'](self, 'b'), other['__getitem__']($constant_int_2))));
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__ne__'] = $method;
			$pyjs['track']['lineno']=9;
			var $bases = new Array($m['_Color']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Color', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.color */


/* end module: pyjsdl.color */


/*
PYJS_DEPS: ['pyjsdl.pyjsobj.Color', 'pyjsdl', 'pyjsdl.pyjsobj']
*/
