/* start module: pyjamas.media.Audio */
$pyjs['loaded_modules']['pyjamas.media.Audio'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.media.Audio']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.media.Audio'];
	if(typeof $pyjs['loaded_modules']['pyjamas.media'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.media']['__was_initialized__']) $p['___import___']('pyjamas.media', null);
	var $m = $pyjs['loaded_modules']['pyjamas.media.Audio'];
	$m['__repr__'] = function() { return '<module: pyjamas.media.Audio>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.media.Audio';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.media']['Audio'] = $pyjs['loaded_modules']['pyjamas.media.Audio'];
	try {
		$m.__track_lines__[1] = 'pyjamas.media.Audio.py, line 1:\n    """';
		$m.__track_lines__[4] = 'pyjamas.media.Audio.py, line 4:\n    * Licensed under the Apache License, Version 2.0 (the "License"); you may not';
		$m.__track_lines__[5] = 'pyjamas.media.Audio.py, line 5:\n    * use this file except in compliance with the License. You may obtain a copy of';
		$m.__track_lines__[6] = 'pyjamas.media.Audio.py, line 6:\n    * the License at';
		$m.__track_lines__[7] = 'pyjamas.media.Audio.py, line 7:\n    *';
		$m.__track_lines__[9] = 'pyjamas.media.Audio.py, line 9:\n    *';
		$m.__track_lines__[10] = 'pyjamas.media.Audio.py, line 10:\n    * Unless required by applicable law or agreed to in writing, software';
		$m.__track_lines__[12] = 'pyjamas.media.Audio.py, line 12:\n    * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the';
		$m.__track_lines__[13] = 'pyjamas.media.Audio.py, line 13:\n    * License for the specific language governing permissions and limitations under';
		$m.__track_lines__[15] = 'pyjamas.media.Audio.py, line 15:\n    """';
		$m.__track_lines__[16] = 'pyjamas.media.Audio.py, line 16:\n    ';
		$m.__track_lines__[17] = 'pyjamas.media.Audio.py, line 17:\n    from pyjamas.media.Media import Media';
		$m.__track_lines__[18] = 'pyjamas.media.Audio.py, line 18:\n    from pyjamas import DOM';
		$m.__track_lines__[19] = 'pyjamas.media.Audio.py, line 19:\n    ';
		$m.__track_lines__[20] = 'pyjamas.media.Audio.py, line 20:\n    """*';
		$m.__track_lines__[21] = 'pyjamas.media.Audio.py, line 21:\n    * An HTML5 AUDIO element';
		$m.__track_lines__[22] = 'pyjamas.media.Audio.py, line 22:\n    """';
		$m.__track_lines__[23] = 'pyjamas.media.Audio.py, line 3:\n    * ... class Audio(Media):';
		$m.__track_lines__[25] = 'pyjamas.media.Audio.py, line 3:\n    * ... def __init__(self, src=None, **kwargs):';


		$pyjs['track']['module']='pyjamas.media.Audio';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=17;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Media'] = $p['___import___']('pyjamas.media.Media.Media', 'pyjamas.media', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=18;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.media', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=20;
		$pyjs['track']['lineno']=23;
		$m['Audio'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.media.Audio';
			$cls_definition['__md5__'] = 'b90b0ef3316b600e97f104f52dd53bfa';
			$pyjs['track']['lineno']=25;
			$method = $pyjs__bind_method2('__init__', function(src) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					src = arguments[1];
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b90b0ef3316b600e97f104f52dd53bfa') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof src != 'undefined') {
						if (src !== null && typeof src['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = src;
							src = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof src == 'undefined') src=arguments['callee']['__args__'][3][1];
				var obj;
				$pyjs['track']={'module':'pyjamas.media.Audio', 'lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Audio';
				$pyjs['track']['lineno']=25;
				$pyjs['track']['lineno']=4;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc'](['create object'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
				$pyjs['track']['lineno']=5;
				obj = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['createElement']('OBJECT');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
				$pyjs['track']['lineno']=6;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setAttribute'](obj, 'TYPE', 'application/x-mplayer2');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$pyjs['track']['lineno']=7;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setAttribute'](obj, 'classid', 'CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs['track']['lineno']=9;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc'](['set element'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$pyjs['track']['lineno']=10;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setElement'](obj);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$pyjs['track']['lineno']=12;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc'](['widget init'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$pyjs['track']['lineno']=13;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['Media'], '__init__', null, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs['track']['lineno']=15;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc'](['setSrc'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$pyjs['track']['lineno']=16;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](src);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
					$pyjs['track']['lineno']=17;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['setSrc'](src);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				}
				$pyjs['track']['lineno']=19;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dispparam', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['createElement']('PARAM');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) : $p['setattr'](self, 'dispparam', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['createElement']('PARAM');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()); 
				$pyjs['track']['lineno']=20;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setAttribute']($p['getattr'](self, 'dispparam'), 'name', 'ShowDisplay');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs['track']['lineno']=21;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setBooleanAttribute']($p['getattr'](self, 'dispparam'), 'VALUE', 'false');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs['track']['lineno']=22;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()['appendChild']($p['getattr'](self, 'dispparam'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['src', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=23;
			var $bases = new Array($m['Media']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Audio', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.media.Audio */


/* end module: pyjamas.media.Audio */


/*
PYJS_DEPS: ['pyjamas.media.Media.Media', 'pyjamas', 'pyjamas.media', 'pyjamas.media.Media', 'pyjamas.DOM']
*/
