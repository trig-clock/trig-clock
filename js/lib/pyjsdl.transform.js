/* start module: pyjsdl.transform */
$pyjs['loaded_modules']['pyjsdl.transform'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.transform']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.transform'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.transform'];
	$m['__repr__'] = function() { return '<module: pyjsdl.transform>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.transform';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['transform'] = $pyjs['loaded_modules']['pyjsdl.transform'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.transform.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[5] = 'pyjsdl.transform.py, line 5:\n    from math import pi as _pi, fabs as _fabs, sin as _sin, cos as _cos, ceil as _ceil';
		$m.__track_lines__[6] = 'pyjsdl.transform.py, line 6:\n    from pyjsdl.surface import Surface';
		$m.__track_lines__[8] = "pyjsdl.transform.py, line 8:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[11] = 'pyjsdl.transform.py, line 11:\n    class Transform(object):';
		$m.__track_lines__[23] = 'pyjsdl.transform.py, line 23:\n    def __init__(self):';
		$m.__track_lines__[29] = 'pyjsdl.transform.py, line 29:\n    self.deg_rad = _pi/180.0';
		$m.__track_lines__[31] = 'pyjsdl.transform.py, line 31:\n    def rotate(self, surface, angle):';
		$m.__track_lines__[35] = 'pyjsdl.transform.py, line 35:\n    if not angle:';
		$m.__track_lines__[36] = 'pyjsdl.transform.py, line 36:\n    return surface.copy()';
		$m.__track_lines__[37] = 'pyjsdl.transform.py, line 37:\n    theta = angle*self.deg_rad';
		$m.__track_lines__[38] = 'pyjsdl.transform.py, line 38:\n    width_i = surface.get_width()';
		$m.__track_lines__[39] = 'pyjsdl.transform.py, line 39:\n    height_i = surface.get_height()';
		$m.__track_lines__[40] = 'pyjsdl.transform.py, line 40:\n    cos_theta = _fabs( _cos(theta) )';
		$m.__track_lines__[41] = 'pyjsdl.transform.py, line 41:\n    sin_theta = _fabs( _sin(theta) )';
		$m.__track_lines__[42] = 'pyjsdl.transform.py, line 42:\n    width_f = int( (width_i*cos_theta)+(height_i*sin_theta) )';
		$m.__track_lines__[43] = 'pyjsdl.transform.py, line 43:\n    height_f = int( (width_i*sin_theta)+(height_i*cos_theta) )';
		$m.__track_lines__[44] = 'pyjsdl.transform.py, line 44:\n    surf = Surface((width_f,height_f))';
		$m.__track_lines__[45] = 'pyjsdl.transform.py, line 45:\n    surf.saveContext()';
		$m.__track_lines__[46] = 'pyjsdl.transform.py, line 46:\n    surf.translate(width_f/2.0, height_f/2.0)';
		$m.__track_lines__[47] = 'pyjsdl.transform.py, line 47:\n    surf.rotate(-theta)';
		$m.__track_lines__[48] = 'pyjsdl.transform.py, line 48:\n    surf.drawImage(surface.canvas, -width_i/2, -height_i/2)';
		$m.__track_lines__[49] = 'pyjsdl.transform.py, line 49:\n    surf.restoreContext()';
		$m.__track_lines__[50] = 'pyjsdl.transform.py, line 50:\n    return surf';
		$m.__track_lines__[52] = 'pyjsdl.transform.py, line 52:\n    def rotozoom(self, surface, angle, size):';
		$m.__track_lines__[56] = 'pyjsdl.transform.py, line 56:\n    if not angle:';
		$m.__track_lines__[57] = 'pyjsdl.transform.py, line 57:\n    width = int(surface.get_width()*size)';
		$m.__track_lines__[58] = 'pyjsdl.transform.py, line 58:\n    height = int(surface.get_height()*size)';
		$m.__track_lines__[59] = 'pyjsdl.transform.py, line 59:\n    return self.scale(surface, (width, height))';
		$m.__track_lines__[60] = 'pyjsdl.transform.py, line 60:\n    theta = angle*self.deg_rad';
		$m.__track_lines__[61] = 'pyjsdl.transform.py, line 61:\n    width_i = int(surface.get_width()*size)';
		$m.__track_lines__[62] = 'pyjsdl.transform.py, line 62:\n    height_i = int(surface.get_height()*size)';
		$m.__track_lines__[63] = 'pyjsdl.transform.py, line 63:\n    cos_theta = _fabs( _cos(theta) )';
		$m.__track_lines__[64] = 'pyjsdl.transform.py, line 64:\n    sin_theta = _fabs( _sin(theta) )';
		$m.__track_lines__[65] = 'pyjsdl.transform.py, line 65:\n    width_f = int( _ceil((width_i*cos_theta)+(height_i*sin_theta)) )';
		$m.__track_lines__[66] = 'pyjsdl.transform.py, line 66:\n    if width_f % 2:';
		$m.__track_lines__[67] = 'pyjsdl.transform.py, line 67:\n    width_f += 1';
		$m.__track_lines__[68] = 'pyjsdl.transform.py, line 68:\n    height_f = int( _ceil((width_i*sin_theta)+(height_i*cos_theta)) )';
		$m.__track_lines__[69] = 'pyjsdl.transform.py, line 69:\n    if height_f % 2:';
		$m.__track_lines__[70] = 'pyjsdl.transform.py, line 70:\n    height_f += 1';
		$m.__track_lines__[71] = 'pyjsdl.transform.py, line 71:\n    surf = Surface((width_f,height_f))';
		$m.__track_lines__[72] = 'pyjsdl.transform.py, line 72:\n    surf.saveContext()';
		$m.__track_lines__[73] = 'pyjsdl.transform.py, line 73:\n    surf.translate(width_f/2.0, height_f/2.0)';
		$m.__track_lines__[74] = 'pyjsdl.transform.py, line 74:\n    surf.rotate(-theta)';
		$m.__track_lines__[75] = 'pyjsdl.transform.py, line 75:\n    surf.drawImage(surface.canvas, 0, 0, surface.get_width(), surface.get_height(), -width_i/2, -height_i/2, width_i, height_i)';
		$m.__track_lines__[76] = 'pyjsdl.transform.py, line 76:\n    surf.restoreContext()';
		$m.__track_lines__[77] = 'pyjsdl.transform.py, line 77:\n    return surf';
		$m.__track_lines__[79] = 'pyjsdl.transform.py, line 79:\n    def scale(self, surface, size, dest=None):';
		$m.__track_lines__[84] = 'pyjsdl.transform.py, line 84:\n    if not dest:';
		$m.__track_lines__[85] = 'pyjsdl.transform.py, line 85:\n    surf = Surface(size)';
		$m.__track_lines__[87] = 'pyjsdl.transform.py, line 87:\n    surf = dest';
		$m.__track_lines__[88] = 'pyjsdl.transform.py, line 88:\n    surf.drawImage(surface.canvas, 0, 0, surface.get_width(), surface.get_height(), 0, 0, size[0], size[1])';
		$m.__track_lines__[89] = 'pyjsdl.transform.py, line 89:\n    return surf';
		$m.__track_lines__[91] = 'pyjsdl.transform.py, line 91:\n    def smoothscale(self, surface, size):';
		$m.__track_lines__[96] = 'pyjsdl.transform.py, line 96:\n    return self.scale(surface, size)';
		$m.__track_lines__[98] = 'pyjsdl.transform.py, line 98:\n    def scale2x(self, surface, dest=None):';
		$m.__track_lines__[103] = 'pyjsdl.transform.py, line 103:\n    return self.scale(surface, (surface.get_width()*2,surface.get_height()*2), dest)';
		$m.__track_lines__[105] = 'pyjsdl.transform.py, line 105:\n    def flip(self, surface, xbool=True, ybool=False):';
		$m.__track_lines__[109] = 'pyjsdl.transform.py, line 109:\n    surf = Surface((surface.get_width(),surface.get_height()))';
		$m.__track_lines__[110] = 'pyjsdl.transform.py, line 110:\n    surf.saveContext()';
		$m.__track_lines__[111] = 'pyjsdl.transform.py, line 111:\n    if xbool and ybool:';
		$m.__track_lines__[112] = 'pyjsdl.transform.py, line 112:\n    surf.translate(surface.get_width(), surface.get_height())';
		$m.__track_lines__[113] = 'pyjsdl.transform.py, line 113:\n    surf.scale(-1, -1)';
		$m.__track_lines__[115] = 'pyjsdl.transform.py, line 115:\n    surf.translate(surface.get_width(), 0)';
		$m.__track_lines__[116] = 'pyjsdl.transform.py, line 116:\n    surf.scale(-1, 1)';
		$m.__track_lines__[118] = 'pyjsdl.transform.py, line 118:\n    surf.translate(0, surface.get_height())';
		$m.__track_lines__[119] = 'pyjsdl.transform.py, line 119:\n    surf.scale(1, -1)';
		$m.__track_lines__[120] = 'pyjsdl.transform.py, line 120:\n    surf.drawImage(surface.canvas, 0, 0)';
		$m.__track_lines__[121] = 'pyjsdl.transform.py, line 121:\n    surf.restoreContext()';
		$m.__track_lines__[122] = 'pyjsdl.transform.py, line 122:\n    return surf';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$pyjs['track']['module']='pyjsdl.transform';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_pi'] = $p['___import___']('math.pi', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_fabs'] = $p['___import___']('math.fabs', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_sin'] = $p['___import___']('math.sin', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_cos'] = $p['___import___']('math.cos', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_ceil'] = $p['___import___']('math.ceil', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=8;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=11;
		$m['Transform'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.transform';
			$cls_definition['__md5__'] = 'a74b52768d74379a32f096f41ba3c22b';
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
					if (self.prototype['__md5__'] !== 'a74b52768d74379a32f096f41ba3c22b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div2,$div1;
				$pyjs['track']={'module':'pyjsdl.transform', 'lineno':23};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.transform';
				$pyjs['track']['lineno']=23;
				$pyjs['track']['lineno']=29;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('deg_rad', (typeof ($div1=$m['_pi'])==typeof ($div2=180.0) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))) : $p['setattr'](self, 'deg_rad', (typeof ($div1=$m['_pi'])==typeof ($div2=180.0) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=31;
			$method = $pyjs__bind_method2('rotate', function(surface, angle) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					angle = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a74b52768d74379a32f096f41ba3c22b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var cos_theta,$div3,$div6,$div10,$div7,sin_theta,$div4,theta,surf,$div8,$div9,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$div5,height_f,width_i,width_f,$mul10,height_i,$add2,$add3,$add1,$add4;
				$pyjs['track']={'module':'pyjsdl.transform', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.transform';
				$pyjs['track']['lineno']=31;
				$pyjs['track']['lineno']=35;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](angle));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
					$pyjs['track']['lineno']=36;
					$pyjs['track']['lineno']=36;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=37;
				theta = (typeof ($mul1=angle)==typeof ($mul2=$p['getattr'](self, 'deg_rad')) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2));
				$pyjs['track']['lineno']=38;
				width_i = (function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['get_width']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$pyjs['track']['lineno']=39;
				height_i = (function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['get_height']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs['track']['lineno']=40;
				cos_theta = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['_fabs']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['_cos'](theta);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$pyjs['track']['lineno']=41;
				sin_theta = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['_fabs']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['_sin'](theta);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs['track']['lineno']=42;
				width_f = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']($p['__op_add']($add1=(typeof ($mul3=width_i)==typeof ($mul4=cos_theta) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)),$add2=(typeof ($mul5=height_i)==typeof ($mul6=sin_theta) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$pyjs['track']['lineno']=43;
				height_f = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']($p['__op_add']($add3=(typeof ($mul7=width_i)==typeof ($mul8=sin_theta) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)),$add4=(typeof ($mul9=height_i)==typeof ($mul10=cos_theta) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$pyjs['track']['lineno']=44;
				surf = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Surface']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([width_f, height_f]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs['track']['lineno']=45;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['saveContext']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs['track']['lineno']=46;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['translate']((typeof ($div3=width_f)==typeof ($div4=2.0) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)), (typeof ($div5=height_f)==typeof ($div6=2.0) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs['track']['lineno']=47;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['rotate']((typeof ($usub1=theta)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs['track']['lineno']=48;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['drawImage']($p['getattr'](surface, 'canvas'), (typeof ($div7=(typeof ($usub2=width_i)=='number'?
					-$usub2:
					$p['op_usub']($usub2)))==typeof ($div8=$constant_int_2) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8)), (typeof ($div9=(typeof ($usub3=height_i)=='number'?
					-$usub3:
					$p['op_usub']($usub3)))==typeof ($div10=$constant_int_2) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs['track']['lineno']=49;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['restoreContext']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs['track']['lineno']=50;
				$pyjs['track']['lineno']=50;
				var $pyjs__ret = surf;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['angle']]);
			$cls_definition['rotate'] = $method;
			$pyjs['track']['lineno']=52;
			$method = $pyjs__bind_method2('rotozoom', function(surface, angle, size) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					angle = arguments[2];
					size = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a74b52768d74379a32f096f41ba3c22b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var cos_theta,height,$mod4,$mod1,$mod3,$mod2,$div14,$div15,$div17,$div11,$div12,$div13,width,sin_theta,$mul28,$mul26,theta,$mul24,$mul25,$mul22,$mul23,$mul20,$mul21,surf,height_f,$add10,$add11,$add12,$mul27,$div18,$mul17,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,width_i,width_f,height_i,$mul19,$mul18,$add6,$add7,$add5,$add8,$add9,$div16;
				$pyjs['track']={'module':'pyjsdl.transform', 'lineno':52};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.transform';
				$pyjs['track']['lineno']=52;
				$pyjs['track']['lineno']=56;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](angle));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
					$pyjs['track']['lineno']=57;
					width = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($mul11=(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['get_width']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})())==typeof ($mul12=size) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
					$pyjs['track']['lineno']=58;
					height = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($mul13=(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['get_height']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})())==typeof ($mul14=size) && typeof $mul13=='number'?
						$mul13*$mul14:
						$p['op_mul']($mul13,$mul14)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
					$pyjs['track']['lineno']=59;
					$pyjs['track']['lineno']=59;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['scale'](surface, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([width, height]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=60;
				theta = (typeof ($mul15=angle)==typeof ($mul16=$p['getattr'](self, 'deg_rad')) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16));
				$pyjs['track']['lineno']=61;
				width_i = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($mul17=(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['get_width']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})())==typeof ($mul18=size) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs['track']['lineno']=62;
				height_i = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($mul19=(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['get_height']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})())==typeof ($mul20=size) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs['track']['lineno']=63;
				cos_theta = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['_fabs']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['_cos'](theta);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs['track']['lineno']=64;
				sin_theta = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['_fabs']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['_sin'](theta);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
				$pyjs['track']['lineno']=65;
				width_f = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['_ceil']($p['__op_add']($add5=(typeof ($mul21=width_i)==typeof ($mul22=cos_theta) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22)),$add6=(typeof ($mul23=height_i)==typeof ($mul24=sin_theta) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
				$pyjs['track']['lineno']=66;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((typeof ($mod1=width_f)==typeof ($mod2=$constant_int_2) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
					$pyjs['track']['lineno']=67;
					width_f = $p['__op_add']($add7=width_f,$add8=$constant_int_1);
				}
				$pyjs['track']['lineno']=68;
				height_f = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['_ceil']($p['__op_add']($add9=(typeof ($mul25=width_i)==typeof ($mul26=sin_theta) && typeof $mul25=='number'?
					$mul25*$mul26:
					$p['op_mul']($mul25,$mul26)),$add10=(typeof ($mul27=height_i)==typeof ($mul28=cos_theta) && typeof $mul27=='number'?
					$mul27*$mul28:
					$p['op_mul']($mul27,$mul28))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
				$pyjs['track']['lineno']=69;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((typeof ($mod3=height_f)==typeof ($mod4=$constant_int_2) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()) {
					$pyjs['track']['lineno']=70;
					height_f = $p['__op_add']($add11=height_f,$add12=$constant_int_1);
				}
				$pyjs['track']['lineno']=71;
				surf = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Surface']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([width_f, height_f]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
				$pyjs['track']['lineno']=72;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['saveContext']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
				$pyjs['track']['lineno']=73;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['translate']((typeof ($div11=width_f)==typeof ($div12=2.0) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12)), (typeof ($div13=height_f)==typeof ($div14=2.0) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs['track']['lineno']=74;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['rotate']((typeof ($usub4=theta)=='number'?
					-$usub4:
					$p['op_usub']($usub4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
				$pyjs['track']['lineno']=75;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['drawImage']($p['getattr'](surface, 'canvas'), $constant_int_0, $constant_int_0, (function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['get_width']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['get_height']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})(), (typeof ($div15=(typeof ($usub5=width_i)=='number'?
					-$usub5:
					$p['op_usub']($usub5)))==typeof ($div16=$constant_int_2) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16)), (typeof ($div17=(typeof ($usub6=height_i)=='number'?
					-$usub6:
					$p['op_usub']($usub6)))==typeof ($div18=$constant_int_2) && typeof $div17=='number' && $div18 !== 0?
					$div17/$div18:
					$p['op_div']($div17,$div18)), width_i, height_i);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
				$pyjs['track']['lineno']=76;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['restoreContext']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
				$pyjs['track']['lineno']=77;
				$pyjs['track']['lineno']=77;
				var $pyjs__ret = surf;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['angle'],['size']]);
			$cls_definition['rotozoom'] = $method;
			$pyjs['track']['lineno']=79;
			$method = $pyjs__bind_method2('scale', function(surface, size, dest) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					size = arguments[2];
					dest = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a74b52768d74379a32f096f41ba3c22b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof dest == 'undefined') dest=arguments['callee']['__args__'][5][1];
				var surf;
				$pyjs['track']={'module':'pyjsdl.transform', 'lineno':79};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.transform';
				$pyjs['track']['lineno']=79;
				$pyjs['track']['lineno']=84;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](dest));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})()) {
					$pyjs['track']['lineno']=85;
					surf = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Surface'](size);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=87;
					surf = dest;
				}
				$pyjs['track']['lineno']=88;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['drawImage']($p['getattr'](surface, 'canvas'), $constant_int_0, $constant_int_0, (function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['get_width']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['get_height']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})(), $constant_int_0, $constant_int_0, size['__getitem__']($constant_int_0), size['__getitem__']($constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
				$pyjs['track']['lineno']=89;
				$pyjs['track']['lineno']=89;
				var $pyjs__ret = surf;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['size'],['dest', null]]);
			$cls_definition['scale'] = $method;
			$pyjs['track']['lineno']=91;
			$method = $pyjs__bind_method2('smoothscale', function(surface, size) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					size = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a74b52768d74379a32f096f41ba3c22b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.transform', 'lineno':91};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.transform';
				$pyjs['track']['lineno']=91;
				$pyjs['track']['lineno']=96;
				$pyjs['track']['lineno']=96;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['scale'](surface, size);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['size']]);
			$cls_definition['smoothscale'] = $method;
			$pyjs['track']['lineno']=98;
			$method = $pyjs__bind_method2('scale2x', function(surface, dest) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					dest = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a74b52768d74379a32f096f41ba3c22b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof dest == 'undefined') dest=arguments['callee']['__args__'][4][1];
				var $mul29,$mul31,$mul30,$mul32;
				$pyjs['track']={'module':'pyjsdl.transform', 'lineno':98};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.transform';
				$pyjs['track']['lineno']=98;
				$pyjs['track']['lineno']=103;
				$pyjs['track']['lineno']=103;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['scale'](surface, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([(typeof ($mul29=(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['get_width']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})())==typeof ($mul30=$constant_int_2) && typeof $mul29=='number'?
					$mul29*$mul30:
					$p['op_mul']($mul29,$mul30)), (typeof ($mul31=(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['get_height']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})())==typeof ($mul32=$constant_int_2) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})(), dest);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['dest', null]]);
			$cls_definition['scale2x'] = $method;
			$pyjs['track']['lineno']=105;
			$method = $pyjs__bind_method2('flip', function(surface, xbool, ybool) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					xbool = arguments[2];
					ybool = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a74b52768d74379a32f096f41ba3c22b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof xbool == 'undefined') xbool=arguments['callee']['__args__'][4][1];
				if (typeof ybool == 'undefined') ybool=arguments['callee']['__args__'][5][1];
				var surf,$and1,$and2;
				$pyjs['track']={'module':'pyjsdl.transform', 'lineno':105};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.transform';
				$pyjs['track']['lineno']=105;
				$pyjs['track']['lineno']=109;
				surf = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Surface']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['get_width']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['get_height']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
				$pyjs['track']['lineno']=110;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['saveContext']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
				$pyjs['track']['lineno']=111;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and1=xbool)?ybool:$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()) {
					$pyjs['track']['lineno']=112;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surf['translate']((function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['get_width']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['get_height']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
					$pyjs['track']['lineno']=113;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surf['scale']((typeof ($usub7=$constant_int_1)=='number'?
						-$usub7:
						$p['op_usub']($usub7)), (typeof ($usub8=$constant_int_1)=='number'?
						-$usub8:
						$p['op_usub']($usub8)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](xbool);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
					$pyjs['track']['lineno']=115;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surf['translate']((function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['get_width']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})(), $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
					$pyjs['track']['lineno']=116;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surf['scale']((typeof ($usub9=$constant_int_1)=='number'?
						-$usub9:
						$p['op_usub']($usub9)), $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](ybool);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()) {
					$pyjs['track']['lineno']=118;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surf['translate']($constant_int_0, (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['get_height']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
					$pyjs['track']['lineno']=119;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surf['scale']($constant_int_1, (typeof ($usub10=$constant_int_1)=='number'?
						-$usub10:
						$p['op_usub']($usub10)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
				}
				$pyjs['track']['lineno']=120;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['drawImage']($p['getattr'](surface, 'canvas'), $constant_int_0, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
				$pyjs['track']['lineno']=121;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surf['restoreContext']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				$pyjs['track']['lineno']=122;
				$pyjs['track']['lineno']=122;
				var $pyjs__ret = surf;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['xbool', true],['ybool', false]]);
			$cls_definition['flip'] = $method;
			$pyjs['track']['lineno']=11;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Transform', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.transform */


/* end module: pyjsdl.transform */


/*
PYJS_DEPS: ['math.pi', 'math', 'math.fabs', 'math.sin', 'math.cos', 'math.ceil', 'pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface']
*/
