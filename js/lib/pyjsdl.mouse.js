/* start module: pyjsdl.mouse */
$pyjs['loaded_modules']['pyjsdl.mouse'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.mouse']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.mouse'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.mouse'];
	$m['__repr__'] = function() { return '<module: pyjsdl.mouse>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.mouse';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['mouse'] = $pyjs['loaded_modules']['pyjsdl.mouse'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.mouse.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[130] = 'pyjsdl.mouse.py, line 130:\n    self.get_focused = lambda *arg: True';
		$m.__track_lines__[5] = 'pyjsdl.mouse.py, line 5:\n    import pyjsdl.event';
		$m.__track_lines__[6] = 'pyjsdl.mouse.py, line 6:\n    from pyjsdl.pyjsobj import DOM';
		$m.__track_lines__[7] = 'pyjsdl.mouse.py, line 7:\n    from pyjsdl import cursors, env';
		$m.__track_lines__[9] = "pyjsdl.mouse.py, line 9:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[12] = 'pyjsdl.mouse.py, line 12:\n    class Mouse(object):';
		$m.__track_lines__[24] = 'pyjsdl.mouse.py, line 24:\n    def __init__(self):';
		$m.__track_lines__[30] = 'pyjsdl.mouse.py, line 30:\n    self.mousePress = pyjsdl.event.mousePress';
		$m.__track_lines__[31] = 'pyjsdl.mouse.py, line 31:\n    self.mouseMove = pyjsdl.event.mouseMove';
		$m.__track_lines__[32] = 'pyjsdl.mouse.py, line 32:\n    self.mouseMoveRel = pyjsdl.event.mouseMoveRel';
		$m.__track_lines__[33] = 'pyjsdl.mouse.py, line 33:\n    self._cursorVisible = True';
		$m.__track_lines__[34] = "pyjsdl.mouse.py, line 34:\n    self._cursor = 'default'";
		$m.__track_lines__[35] = 'pyjsdl.mouse.py, line 35:\n    self._nonimplemented_methods()';
		$m.__track_lines__[37] = 'pyjsdl.mouse.py, line 37:\n    def get_pressed(self):';
		$m.__track_lines__[129] = 'pyjsdl.mouse.py, line 129:\n    self.set_pos = lambda *arg: None';
		$m.__track_lines__[41] = 'pyjsdl.mouse.py, line 41:\n    return (self.mousePress[0], self.mousePress[1], self.mousePress[2])';
		$m.__track_lines__[43] = 'pyjsdl.mouse.py, line 43:\n    def get_pos(self):';
		$m.__track_lines__[48] = "pyjsdl.mouse.py, line 48:\n    if self.mouseMove['x'] != -1:";
		$m.__track_lines__[49] = "pyjsdl.mouse.py, line 49:\n    return (self.mouseMove['x']+env.frame.scrollLeft, self.mouseMove['y']+env.frame.scrollTop)";
		$m.__track_lines__[51] = "pyjsdl.mouse.py, line 51:\n    return (self.mouseMove['x'],  self.mouseMove['y'])";
		$m.__track_lines__[53] = 'pyjsdl.mouse.py, line 53:\n    def get_rel(self):';
		$m.__track_lines__[57] = 'pyjsdl.mouse.py, line 57:\n    try:';
		$m.__track_lines__[58] = "pyjsdl.mouse.py, line 58:\n    rel = (self.mouseMove['x']-self.mouseMoveRel['x'], self.mouseMove['y']-self.mouseMoveRel['y'])";
		$m.__track_lines__[59] = "pyjsdl.mouse.py, line 59:\n    self.mouseMoveRel['x'], self.mouseMoveRel['y'] = self.mouseMove['x'], self.mouseMove['y']";
		$m.__track_lines__[61] = 'pyjsdl.mouse.py, line 61:\n    rel = (0, 0)';
		$m.__track_lines__[62] = "pyjsdl.mouse.py, line 62:\n    if self.mouseMove['x'] != -1:";
		$m.__track_lines__[63] = "pyjsdl.mouse.py, line 63:\n    self.mouseMoveRel['x'], self.mouseMoveRel['y'] = self.mouseMove['x'], self.mouseMove['y']";
		$m.__track_lines__[64] = 'pyjsdl.mouse.py, line 64:\n    return rel';
		$m.__track_lines__[66] = 'pyjsdl.mouse.py, line 66:\n    def set_visible(self, visible):';
		$m.__track_lines__[70] = 'pyjsdl.mouse.py, line 70:\n    visible_pre = self._cursorVisible';
		$m.__track_lines__[71] = 'pyjsdl.mouse.py, line 71:\n    if visible:';
		$m.__track_lines__[72] = "pyjsdl.mouse.py, line 72:\n    DOM.setStyleAttribute(env.canvas.getElement(), 'cursor', self._cursor)";
		$m.__track_lines__[73] = 'pyjsdl.mouse.py, line 73:\n    self._cursorVisible = True';
		$m.__track_lines__[75] = "pyjsdl.mouse.py, line 75:\n    DOM.setStyleAttribute(env.canvas.getElement(), 'cursor', 'none')";
		$m.__track_lines__[76] = 'pyjsdl.mouse.py, line 76:\n    self._cursorVisible = False';
		$m.__track_lines__[77] = 'pyjsdl.mouse.py, line 77:\n    return visible_pre';
		$m.__track_lines__[79] = 'pyjsdl.mouse.py, line 79:\n    def set_cursor(self, *cursor):';
		$m.__track_lines__[88] = 'pyjsdl.mouse.py, line 88:\n    args = len(cursor)';
		$m.__track_lines__[89] = 'pyjsdl.mouse.py, line 89:\n    if args == 1:';
		$m.__track_lines__[90] = 'pyjsdl.mouse.py, line 90:\n    self._cursor = cursor[0]';
		$m.__track_lines__[92] = 'pyjsdl.mouse.py, line 92:\n    if isinstance(cursor[0], str):';
		$m.__track_lines__[93] = 'pyjsdl.mouse.py, line 93:\n    url = cursor[0]';
		$m.__track_lines__[95] = 'pyjsdl.mouse.py, line 95:\n    url = cursor[0].toDataURL()';
		$m.__track_lines__[96] = 'pyjsdl.mouse.py, line 96:\n    hotspot = cursor[1]';
		$m.__track_lines__[97] = 'pyjsdl.mouse.py, line 97:\n    if args == 2:';
		$m.__track_lines__[98] = "pyjsdl.mouse.py, line 98:\n    fallback = 'default'";
		$m.__track_lines__[100] = 'pyjsdl.mouse.py, line 100:\n    fallback = cursor[2]';
		$m.__track_lines__[101] = 'pyjsdl.mouse.py, line 101:\n    self._cursor = \'url("%s") %d %d, %s\' % (url, hotspot[0], hotspot[1], fallback)';
		$m.__track_lines__[103] = 'pyjsdl.mouse.py, line 103:\n    size = cursor[0]';
		$m.__track_lines__[104] = 'pyjsdl.mouse.py, line 104:\n    hotspot = cursor[1]';
		$m.__track_lines__[105] = 'pyjsdl.mouse.py, line 105:\n    data = cursor[2]';
		$m.__track_lines__[106] = 'pyjsdl.mouse.py, line 106:\n    mask = cursor[3]';
		$m.__track_lines__[107] = 'pyjsdl.mouse.py, line 107:\n    if args == 4:';
		$m.__track_lines__[108] = "pyjsdl.mouse.py, line 108:\n    fallback = 'default'";
		$m.__track_lines__[110] = 'pyjsdl.mouse.py, line 110:\n    fallback = cursor[4]';
		$m.__track_lines__[111] = 'pyjsdl.mouse.py, line 111:\n    surface = cursors.create_cursor(size, data, mask)';
		$m.__track_lines__[112] = 'pyjsdl.mouse.py, line 112:\n    url = surface.toDataURL()';
		$m.__track_lines__[113] = 'pyjsdl.mouse.py, line 113:\n    self._cursor = \'url("%s") %d %d, %s\' % (url, hotspot[0], hotspot[1], fallback)';
		$m.__track_lines__[115] = "pyjsdl.mouse.py, line 115:\n    self._cursor = 'default'";
		$m.__track_lines__[116] = 'pyjsdl.mouse.py, line 116:\n    if self._cursorVisible:';
		$m.__track_lines__[117] = "pyjsdl.mouse.py, line 117:\n    DOM.setStyleAttribute(env.canvas.getElement(), 'cursor', self._cursor)";
		$m.__track_lines__[119] = 'pyjsdl.mouse.py, line 119:\n    def get_cursor(self):';
		$m.__track_lines__[123] = 'pyjsdl.mouse.py, line 123:\n    return self._cursor';
		$m.__track_lines__[125] = 'pyjsdl.mouse.py, line 125:\n    def _nonimplemented_methods(self):';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		$pyjs['track']['module']='pyjsdl.mouse';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pyjsdl'] = $p['___import___']('pyjsdl.event', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjsdl.pyjsobj.DOM', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['cursors'] = $p['___import___']('pyjsdl.cursors', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=9;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=12;
		$m['Mouse'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.mouse';
			$cls_definition['__md5__'] = 'd904fb4a4994c51b1186565b737ea4f8';
			$pyjs['track']['lineno']=24;
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
					if (self.prototype['__md5__'] !== 'd904fb4a4994c51b1186565b737ea4f8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mouse', 'lineno':24};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mouse';
				$pyjs['track']['lineno']=24;
				$pyjs['track']['lineno']=30;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mousePress', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mousePress')) : $p['setattr'](self, 'mousePress', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mousePress')); 
				$pyjs['track']['lineno']=31;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mouseMove', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mouseMove')) : $p['setattr'](self, 'mouseMove', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mouseMove')); 
				$pyjs['track']['lineno']=32;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mouseMoveRel', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mouseMoveRel')) : $p['setattr'](self, 'mouseMoveRel', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mouseMoveRel')); 
				$pyjs['track']['lineno']=33;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_cursorVisible', true) : $p['setattr'](self, '_cursorVisible', true); 
				$pyjs['track']['lineno']=34;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_cursor', 'default') : $p['setattr'](self, '_cursor', 'default'); 
				$pyjs['track']['lineno']=35;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_nonimplemented_methods']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=37;
			$method = $pyjs__bind_method2('get_pressed', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd904fb4a4994c51b1186565b737ea4f8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mouse', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mouse';
				$pyjs['track']['lineno']=37;
				$pyjs['track']['lineno']=41;
				$pyjs['track']['lineno']=41;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, 'mousePress')['__getitem__']($constant_int_0), $p['getattr'](self, 'mousePress')['__getitem__']($constant_int_1), $p['getattr'](self, 'mousePress')['__getitem__']($constant_int_2)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_pressed'] = $method;
			$pyjs['track']['lineno']=43;
			$method = $pyjs__bind_method2('get_pos', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd904fb4a4994c51b1186565b737ea4f8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add3,$add1,$add4;
				$pyjs['track']={'module':'pyjsdl.mouse', 'lineno':43};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mouse';
				$pyjs['track']['lineno']=43;
				$pyjs['track']['lineno']=48;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['op_eq']($p['getattr'](self, 'mouseMove')['__getitem__']('x'), (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) {
					$pyjs['track']['lineno']=49;
					$pyjs['track']['lineno']=49;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__op_add']($add1=$p['getattr'](self, 'mouseMove')['__getitem__']('x'),$add2=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add3=$p['getattr'](self, 'mouseMove')['__getitem__']('y'),$add4=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=51;
					$pyjs['track']['lineno']=51;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](self, 'mouseMove')['__getitem__']('x'), $p['getattr'](self, 'mouseMove')['__getitem__']('y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_pos'] = $method;
			$pyjs['track']['lineno']=53;
			$method = $pyjs__bind_method2('get_rel', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd904fb4a4994c51b1186565b737ea4f8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,rel,$sub3,$sub2,$sub1,$sub4;
				$pyjs['track']={'module':'pyjsdl.mouse', 'lineno':53};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mouse';
				$pyjs['track']['lineno']=53;
				$pyjs['track']['lineno']=57;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=58;
						rel = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$p['__op_sub']($sub1=$p['getattr'](self, 'mouseMove')['__getitem__']('x'),$sub2=$p['getattr'](self, 'mouseMoveRel')['__getitem__']('x')), $p['__op_sub']($sub3=$p['getattr'](self, 'mouseMove')['__getitem__']('y'),$sub4=$p['getattr'](self, 'mouseMoveRel')['__getitem__']('y'))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
						$pyjs['track']['lineno']=59;
						var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$p['getattr'](self, 'mouseMove')['__getitem__']('x'), $p['getattr'](self, 'mouseMove')['__getitem__']('y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'mouseMoveRel')['__setitem__']('x', $tupleassign1[0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'mouseMoveRel')['__setitem__']('y', $tupleassign1[1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
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
					$pyjs['track']['module']='pyjsdl.mouse';
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						$pyjs['track']['lineno']=61;
						rel = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$constant_int_0, $constant_int_0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
						$pyjs['track']['lineno']=62;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['op_eq']($p['getattr'](self, 'mouseMove')['__getitem__']('x'), (typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
							$pyjs['track']['lineno']=63;
							var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['tuple']([$p['getattr'](self, 'mouseMove')['__getitem__']('x'), $p['getattr'](self, 'mouseMove')['__getitem__']('y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'mouseMoveRel')['__setitem__']('x', $tupleassign2[0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'mouseMoveRel')['__setitem__']('y', $tupleassign2[1]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=64;
				$pyjs['track']['lineno']=64;
				var $pyjs__ret = rel;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_rel'] = $method;
			$pyjs['track']['lineno']=66;
			$method = $pyjs__bind_method2('set_visible', function(visible) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					visible = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd904fb4a4994c51b1186565b737ea4f8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var visible_pre;
				$pyjs['track']={'module':'pyjsdl.mouse', 'lineno':66};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mouse';
				$pyjs['track']['lineno']=66;
				$pyjs['track']['lineno']=70;
				visible_pre = $p['getattr'](self, '_cursorVisible');
				$pyjs['track']['lineno']=71;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](visible);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
					$pyjs['track']['lineno']=72;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['setStyleAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['env']['canvas']['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})(), 'cursor', $p['getattr'](self, '_cursor'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
					$pyjs['track']['lineno']=73;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_cursorVisible', true) : $p['setattr'](self, '_cursorVisible', true); 
				}
				else {
					$pyjs['track']['lineno']=75;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['setStyleAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['env']['canvas']['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})(), 'cursor', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
					$pyjs['track']['lineno']=76;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_cursorVisible', false) : $p['setattr'](self, '_cursorVisible', false); 
				}
				$pyjs['track']['lineno']=77;
				$pyjs['track']['lineno']=77;
				var $pyjs__ret = visible_pre;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['visible']]);
			$cls_definition['set_visible'] = $method;
			$pyjs['track']['lineno']=79;
			$method = $pyjs__bind_method2('set_cursor', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var cursor = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var cursor = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd904fb4a4994c51b1186565b737ea4f8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var url,args,mask,hotspot,surface,fallback,data,size;
				$pyjs['track']={'module':'pyjsdl.mouse', 'lineno':79};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mouse';
				$pyjs['track']['lineno']=79;
				$pyjs['track']['lineno']=88;
				args = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](cursor);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs['track']['lineno']=89;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](args, $constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()) {
					$pyjs['track']['lineno']=90;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_cursor', cursor['__getitem__']($constant_int_0)) : $p['setattr'](self, '_cursor', cursor['__getitem__']($constant_int_0)); 
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_2, $constant_int_3]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()['__contains__'](args));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()) {
					$pyjs['track']['lineno']=92;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](cursor['__getitem__']($constant_int_0), $p['str']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) {
						$pyjs['track']['lineno']=93;
						url = cursor['__getitem__']($constant_int_0);
					}
					else {
						$pyjs['track']['lineno']=95;
						url = (function(){try{try{$pyjs['in_try_except'] += 1;
						return cursor['__getitem__']($constant_int_0)['toDataURL']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
					}
					$pyjs['track']['lineno']=96;
					hotspot = cursor['__getitem__']($constant_int_1);
					$pyjs['track']['lineno']=97;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](args, $constant_int_2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
						$pyjs['track']['lineno']=98;
						fallback = 'default';
					}
					else {
						$pyjs['track']['lineno']=100;
						fallback = cursor['__getitem__']($constant_int_2);
					}
					$pyjs['track']['lineno']=101;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_cursor', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('url("%s") %d %d, %s', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([url, hotspot['__getitem__']($constant_int_0), hotspot['__getitem__']($constant_int_1), fallback]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) : $p['setattr'](self, '_cursor', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('url("%s") %d %d, %s', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([url, hotspot['__getitem__']($constant_int_0), hotspot['__getitem__']($constant_int_1), fallback]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()); 
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$constant_int_4, $constant_int_5]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()['__contains__'](args));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
					$pyjs['track']['lineno']=103;
					size = cursor['__getitem__']($constant_int_0);
					$pyjs['track']['lineno']=104;
					hotspot = cursor['__getitem__']($constant_int_1);
					$pyjs['track']['lineno']=105;
					data = cursor['__getitem__']($constant_int_2);
					$pyjs['track']['lineno']=106;
					mask = cursor['__getitem__']($constant_int_3);
					$pyjs['track']['lineno']=107;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](args, $constant_int_4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()) {
						$pyjs['track']['lineno']=108;
						fallback = 'default';
					}
					else {
						$pyjs['track']['lineno']=110;
						fallback = cursor['__getitem__']($constant_int_4);
					}
					$pyjs['track']['lineno']=111;
					surface = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['cursors']['create_cursor'](size, data, mask);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
					$pyjs['track']['lineno']=112;
					url = (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['toDataURL']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
					$pyjs['track']['lineno']=113;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_cursor', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('url("%s") %d %d, %s', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([url, hotspot['__getitem__']($constant_int_0), hotspot['__getitem__']($constant_int_1), fallback]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()) : $p['setattr'](self, '_cursor', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('url("%s") %d %d, %s', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([url, hotspot['__getitem__']($constant_int_0), hotspot['__getitem__']($constant_int_1), fallback]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()); 
				}
				else {
					$pyjs['track']['lineno']=115;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_cursor', 'default') : $p['setattr'](self, '_cursor', 'default'); 
				}
				$pyjs['track']['lineno']=116;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, '_cursorVisible'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()) {
					$pyjs['track']['lineno']=117;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['setStyleAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['env']['canvas']['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})(), 'cursor', $p['getattr'](self, '_cursor'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['cursor',null,['self']]);
			$cls_definition['set_cursor'] = $method;
			$pyjs['track']['lineno']=119;
			$method = $pyjs__bind_method2('get_cursor', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd904fb4a4994c51b1186565b737ea4f8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mouse', 'lineno':119};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mouse';
				$pyjs['track']['lineno']=119;
				$pyjs['track']['lineno']=123;
				$pyjs['track']['lineno']=123;
				var $pyjs__ret = $p['getattr'](self, '_cursor');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_cursor'] = $method;
			$pyjs['track']['lineno']=125;
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
					if (self.prototype['__md5__'] !== 'd904fb4a4994c51b1186565b737ea4f8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda2,$lambda1;
				$pyjs['track']={'module':'pyjsdl.mouse', 'lineno':125};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mouse';
				$pyjs['track']['lineno']=125;
				$pyjs['track']['lineno']=129;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.mouse','lineno':129};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.mouse';
					$pyjs['track']['lineno']=129;
					$pyjs['track']['lineno']=129;
					$pyjs['track']['lineno']=129;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set_pos', $lambda1) : $p['setattr'](self, 'set_pos', $lambda1); 
				$pyjs['track']['lineno']=130;
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.mouse','lineno':130};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.mouse';
					$pyjs['track']['lineno']=130;
					$pyjs['track']['lineno']=130;
					$pyjs['track']['lineno']=130;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_focused', $lambda2) : $p['setattr'](self, 'get_focused', $lambda2); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=12;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Mouse', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.mouse */


/* end module: pyjsdl.mouse */


/*
PYJS_DEPS: ['pyjsdl.event', 'pyjsdl', 'pyjsdl.pyjsobj.DOM', 'pyjsdl.pyjsobj', 'pyjsdl.cursors', 'pyjsdl.env']
*/
