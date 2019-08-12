/* start module: pyjamas.ui.TextBox */
$pyjs['loaded_modules']['pyjamas.ui.TextBox'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.TextBox']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.TextBox'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.TextBox'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.TextBox>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TextBox';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.ui']['TextBox'] = $pyjs['loaded_modules']['pyjamas.ui.TextBox'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.TextBox.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[16] = 'pyjamas.ui.TextBox.py, line 16:\n    from pyjamas import DOM';
		$m.__track_lines__[17] = 'pyjamas.ui.TextBox.py, line 17:\n    from pyjamas import Factory';
		$m.__track_lines__[19] = 'pyjamas.ui.TextBox.py, line 19:\n    from pyjamas.ui.TextBoxBase import TextBoxBase';
		$m.__track_lines__[21] = 'pyjamas.ui.TextBox.py, line 21:\n    class TextBox(TextBoxBase):';
		$m.__track_lines__[37] = 'pyjamas.ui.TextBox.py, line 37:\n    _props = [("kind", "Kind", "Kind", None),';
		$m.__track_lines__[46] = 'pyjamas.ui.TextBox.py, line 46:\n    def __init__(self, **ka):';
		$m.__track_lines__[47] = 'pyjamas.ui.TextBox.py, line 47:\n    ka[\'StyleName\'] = ka.get(\'StyleName\', "gwt-TextBox")';
		$m.__track_lines__[48] = "pyjamas.ui.TextBox.py, line 48:\n    element = ka.pop('Element', None) or DOM.createInputText()";
		$m.__track_lines__[49] = 'pyjamas.ui.TextBox.py, line 49:\n    TextBoxBase.__init__(self, element, **ka)';
		$m.__track_lines__[52] = 'pyjamas.ui.TextBox.py, line 51:\n    @classmethod ... def _getProps(self):';
		$m.__track_lines__[53] = 'pyjamas.ui.TextBox.py, line 53:\n    return TextBoxBase._getProps() + self._props';
		$m.__track_lines__[55] = 'pyjamas.ui.TextBox.py, line 55:\n    def getMaxLength(self):';
		$m.__track_lines__[56] = 'pyjamas.ui.TextBox.py, line 56:\n    return DOM.getIntAttribute(self.getElement(), "maxLength")';
		$m.__track_lines__[58] = 'pyjamas.ui.TextBox.py, line 58:\n    def getKind(self):';
		$m.__track_lines__[59] = 'pyjamas.ui.TextBox.py, line 59:\n    return DOM.getAttribute(self.getElement(), "type")';
		$m.__track_lines__[61] = 'pyjamas.ui.TextBox.py, line 61:\n    def getMin(self):';
		$m.__track_lines__[62] = 'pyjamas.ui.TextBox.py, line 62:\n    return DOM.getAttribute(self.getElement(), "min")';
		$m.__track_lines__[64] = 'pyjamas.ui.TextBox.py, line 64:\n    def getMax(self):';
		$m.__track_lines__[65] = 'pyjamas.ui.TextBox.py, line 65:\n    return DOM.getAttribute(self.getElement(), "max")';
		$m.__track_lines__[67] = 'pyjamas.ui.TextBox.py, line 67:\n    def getPlaceholder(self):';
		$m.__track_lines__[68] = 'pyjamas.ui.TextBox.py, line 68:\n    return DOM.getAttribute(self.getElement(), "placeholder")';
		$m.__track_lines__[70] = 'pyjamas.ui.TextBox.py, line 70:\n    def getStep(self):';
		$m.__track_lines__[71] = 'pyjamas.ui.TextBox.py, line 71:\n    return DOM.getAttribute(self.getElement(), "step")';
		$m.__track_lines__[73] = 'pyjamas.ui.TextBox.py, line 73:\n    def getVisibleLength(self):';
		$m.__track_lines__[74] = 'pyjamas.ui.TextBox.py, line 74:\n    return DOM.getIntAttribute(self.getElement(), "size")';
		$m.__track_lines__[76] = 'pyjamas.ui.TextBox.py, line 76:\n    def setMaxLength(self, length):';
		$m.__track_lines__[77] = 'pyjamas.ui.TextBox.py, line 77:\n    DOM.setIntAttribute(self.getElement(), "maxLength", length)';
		$m.__track_lines__[79] = 'pyjamas.ui.TextBox.py, line 79:\n    def setKind(self, kind):';
		$m.__track_lines__[80] = 'pyjamas.ui.TextBox.py, line 80:\n    DOM.setAttribute(self.getElement(), "type", kind)';
		$m.__track_lines__[82] = 'pyjamas.ui.TextBox.py, line 82:\n    def setMin(self, min):';
		$m.__track_lines__[83] = 'pyjamas.ui.TextBox.py, line 83:\n    DOM.setAttribute(self.getElement(), "min", min)';
		$m.__track_lines__[85] = 'pyjamas.ui.TextBox.py, line 85:\n    def setMax(self, max):';
		$m.__track_lines__[86] = 'pyjamas.ui.TextBox.py, line 86:\n    DOM.setAttribute(self.getElement(), "max", max)';
		$m.__track_lines__[88] = 'pyjamas.ui.TextBox.py, line 88:\n    def setPlaceholder(self, placeholder):';
		$m.__track_lines__[89] = 'pyjamas.ui.TextBox.py, line 89:\n    DOM.setAttribute(self.getElement(), "placeholder", placeholder)';
		$m.__track_lines__[91] = 'pyjamas.ui.TextBox.py, line 91:\n    def setStep(self, step):';
		$m.__track_lines__[92] = 'pyjamas.ui.TextBox.py, line 92:\n    DOM.setAttribute(self.getElement(), "step", step)';
		$m.__track_lines__[94] = 'pyjamas.ui.TextBox.py, line 94:\n    def setVisibleLength(self, length):';
		$m.__track_lines__[95] = 'pyjamas.ui.TextBox.py, line 95:\n    DOM.setIntAttribute(self.getElement(), "size", length)';
		$m.__track_lines__[98] = "pyjamas.ui.TextBox.py, line 98:\n    Factory.registerClass('pyjamas.ui.TextBox', 'TextBox', TextBox)";


		$pyjs['track']['module']='pyjamas.ui.TextBox';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=16;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=17;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=19;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['TextBoxBase'] = $p['___import___']('pyjamas.ui.TextBoxBase.TextBoxBase', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=21;
		$m['TextBox'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.TextBox';
			$cls_definition['__md5__'] = '2f362dc3585d960a21e952cc034bf92f';
			$pyjs['track']['lineno']=37;
			$cls_definition['_props'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['kind', 'Kind', 'Kind', null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['maxLength', 'Max Length', 'MaxLength', null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['min', 'Min', 'Min', null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['max', 'Max', 'Max', null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['placeholder', 'Place Holder', 'PlaceHolder', null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['step', 'Step', 'Step', null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['visibleLength', 'Visible Length', 'VisibleLength', null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['track']['lineno']=46;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var ka = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
						var ka = arguments[arguments['length']+1];
					} else {
						delete ka['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var ka = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
						ka = arguments[arguments['length']+1];
					} else {
						delete ka['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f362dc3585d960a21e952cc034bf92f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof ka == 'undefined') {
					ka = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							ka = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var element,$or1,$or2;
				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=46;
				$pyjs['track']['lineno']=47;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return ka['__setitem__']('StyleName', (function(){try{try{$pyjs['in_try_except'] += 1;
				return ka['get']('StyleName', 'gwt-TextBox');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$pyjs['track']['lineno']=48;
				element = ($p['bool']($or1=(function(){try{try{$pyjs['in_try_except'] += 1;
				return ka['pop']('Element', null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})())?$or1:(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['createInputText']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})());
				$pyjs['track']['lineno']=49;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['TextBoxBase'], '__init__', null, ka, [{}, self, element]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,['ka'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=52;
			$method = $pyjs__bind_method2('_getProps', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 0, arguments['length']);
    var self = this['prototype'];
				var $add2,$add1;
				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':52};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=52;
				$pyjs['track']['lineno']=53;
				$pyjs['track']['lineno']=53;
				var $pyjs__ret = $p['__op_add']($add1=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['TextBoxBase']['_getProps']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})(),$add2=$p['getattr'](self, '_props'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getProps'] = $method;
			$pyjs['track']['lineno']=55;
			$method = $pyjs__bind_method2('getMaxLength', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f362dc3585d960a21e952cc034bf92f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=55;
				$pyjs['track']['lineno']=56;
				$pyjs['track']['lineno']=56;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getIntAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})(), 'maxLength');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMaxLength'] = $method;
			$pyjs['track']['lineno']=58;
			$method = $pyjs__bind_method2('getKind', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f362dc3585d960a21e952cc034bf92f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=58;
				$pyjs['track']['lineno']=59;
				$pyjs['track']['lineno']=59;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})(), 'type');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getKind'] = $method;
			$pyjs['track']['lineno']=61;
			$method = $pyjs__bind_method2('getMin', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f362dc3585d960a21e952cc034bf92f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':61};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=61;
				$pyjs['track']['lineno']=62;
				$pyjs['track']['lineno']=62;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})(), 'min');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMin'] = $method;
			$pyjs['track']['lineno']=64;
			$method = $pyjs__bind_method2('getMax', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f362dc3585d960a21e952cc034bf92f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=64;
				$pyjs['track']['lineno']=65;
				$pyjs['track']['lineno']=65;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), 'max');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMax'] = $method;
			$pyjs['track']['lineno']=67;
			$method = $pyjs__bind_method2('getPlaceholder', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f362dc3585d960a21e952cc034bf92f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':67};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=67;
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=68;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})(), 'placeholder');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPlaceholder'] = $method;
			$pyjs['track']['lineno']=70;
			$method = $pyjs__bind_method2('getStep', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f362dc3585d960a21e952cc034bf92f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':70};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=70;
				$pyjs['track']['lineno']=71;
				$pyjs['track']['lineno']=71;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})(), 'step');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getStep'] = $method;
			$pyjs['track']['lineno']=73;
			$method = $pyjs__bind_method2('getVisibleLength', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f362dc3585d960a21e952cc034bf92f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':73};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=73;
				$pyjs['track']['lineno']=74;
				$pyjs['track']['lineno']=74;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getIntAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})(), 'size');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getVisibleLength'] = $method;
			$pyjs['track']['lineno']=76;
			$method = $pyjs__bind_method2('setMaxLength', function(length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					length = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f362dc3585d960a21e952cc034bf92f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':76};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=76;
				$pyjs['track']['lineno']=77;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setIntAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})(), 'maxLength', length);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['length']]);
			$cls_definition['setMaxLength'] = $method;
			$pyjs['track']['lineno']=79;
			$method = $pyjs__bind_method2('setKind', function(kind) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					kind = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f362dc3585d960a21e952cc034bf92f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':79};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=79;
				$pyjs['track']['lineno']=80;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})(), 'type', kind);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['kind']]);
			$cls_definition['setKind'] = $method;
			$pyjs['track']['lineno']=82;
			$method = $pyjs__bind_method2('setMin', function(min) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					min = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f362dc3585d960a21e952cc034bf92f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':82};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=82;
				$pyjs['track']['lineno']=83;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})(), 'min', min);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['min']]);
			$cls_definition['setMin'] = $method;
			$pyjs['track']['lineno']=85;
			$method = $pyjs__bind_method2('setMax', function(max) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					max = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f362dc3585d960a21e952cc034bf92f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':85};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=85;
				$pyjs['track']['lineno']=86;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})(), 'max', max);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['max']]);
			$cls_definition['setMax'] = $method;
			$pyjs['track']['lineno']=88;
			$method = $pyjs__bind_method2('setPlaceholder', function(placeholder) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					placeholder = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f362dc3585d960a21e952cc034bf92f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':88};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=88;
				$pyjs['track']['lineno']=89;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})(), 'placeholder', placeholder);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['placeholder']]);
			$cls_definition['setPlaceholder'] = $method;
			$pyjs['track']['lineno']=91;
			$method = $pyjs__bind_method2('setStep', function(step) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					step = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f362dc3585d960a21e952cc034bf92f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':91};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=91;
				$pyjs['track']['lineno']=92;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})(), 'step', step);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['step']]);
			$cls_definition['setStep'] = $method;
			$pyjs['track']['lineno']=94;
			$method = $pyjs__bind_method2('setVisibleLength', function(length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					length = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2f362dc3585d960a21e952cc034bf92f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBox', 'lineno':94};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBox';
				$pyjs['track']['lineno']=94;
				$pyjs['track']['lineno']=95;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setIntAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})(), 'size', length);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['length']]);
			$cls_definition['setVisibleLength'] = $method;
			$pyjs['track']['lineno']=21;
			var $bases = new Array($m['TextBoxBase']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextBox', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=98;
		(function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.TextBox', 'TextBox', $m['TextBox']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.TextBox */


/* end module: pyjamas.ui.TextBox */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.TextBoxBase.TextBoxBase', 'pyjamas.ui', 'pyjamas.ui.TextBoxBase']
*/
