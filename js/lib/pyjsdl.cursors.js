/* start module: pyjsdl.cursors */
$pyjs['loaded_modules']['pyjsdl.cursors'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.cursors']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.cursors'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.cursors'];
	$m['__repr__'] = function() { return '<module: pyjsdl.cursors>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.cursors';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['cursors'] = $pyjs['loaded_modules']['pyjsdl.cursors'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.cursors.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[16] = 'pyjsdl.cursors.py, line 16:\n    from pyjsdl.surface import Surface';
		$m.__track_lines__[17] = 'pyjsdl.cursors.py, line 17:\n    from pyjsdl.color import Color';
		$m.__track_lines__[18] = 'pyjsdl.cursors.py, line 18:\n    from pyjsdl import locals as Const';
		$m.__track_lines__[22] = 'pyjsdl.cursors.py, line 22:\n    arrow = diamond = broken_x = tri_left = tri_right = ()';
		$m.__track_lines__[25] = "pyjsdl.cursors.py, line 25:\n    def compile(strings, black='X', white='.', xor='o'):";
		$m.__track_lines__[33] = 'pyjsdl.cursors.py, line 33:\n    data = []';
		$m.__track_lines__[34] = 'pyjsdl.cursors.py, line 34:\n    mask = []';
		$m.__track_lines__[35] = 'pyjsdl.cursors.py, line 35:\n    dbit = {black:1, white:0, xor:1}';
		$m.__track_lines__[36] = 'pyjsdl.cursors.py, line 36:\n    mbit = {black:1, white:1, xor:0}';
		$m.__track_lines__[37] = "pyjsdl.cursors.py, line 37:\n    string = ''.join(strings)";
		$m.__track_lines__[38] = 'pyjsdl.cursors.py, line 38:\n    rang = range(8)';
		$m.__track_lines__[39] = "pyjsdl.cursors.py, line 39:\n    blank = '        '";
		$m.__track_lines__[40] = 'pyjsdl.cursors.py, line 40:\n    for i in range(0,len(string),8):';
		$m.__track_lines__[41] = 'pyjsdl.cursors.py, line 41:\n    s = string[i:i+8]';
		$m.__track_lines__[42] = 'pyjsdl.cursors.py, line 42:\n    db = mb = 0';
		$m.__track_lines__[43] = 'pyjsdl.cursors.py, line 43:\n    if s != blank:';
		$m.__track_lines__[44] = 'pyjsdl.cursors.py, line 44:\n    for j in rang:';
		$m.__track_lines__[45] = 'pyjsdl.cursors.py, line 45:\n    c = s[j]';
		$m.__track_lines__[46] = "pyjsdl.cursors.py, line 46:\n    if c == ' ':";
		$m.__track_lines__[47] = 'pyjsdl.cursors.py, line 47:\n    continue';
		$m.__track_lines__[48] = 'pyjsdl.cursors.py, line 48:\n    if dbit[c]:';
		$m.__track_lines__[49] = 'pyjsdl.cursors.py, line 49:\n    db |= 0x01<<7-j';
		$m.__track_lines__[50] = 'pyjsdl.cursors.py, line 50:\n    if mbit[c]:';
		$m.__track_lines__[51] = 'pyjsdl.cursors.py, line 51:\n    mb |= 0x01<<7-j';
		$m.__track_lines__[52] = 'pyjsdl.cursors.py, line 52:\n    data.append(int(db))';
		$m.__track_lines__[53] = 'pyjsdl.cursors.py, line 53:\n    mask.append(int(mb))';
		$m.__track_lines__[54] = 'pyjsdl.cursors.py, line 54:\n    return tuple(data), tuple(mask)';
		$m.__track_lines__[57] = 'pyjsdl.cursors.py, line 57:\n    def create_cursor(size, data, mask):';
		$m.__track_lines__[63] = 'pyjsdl.cursors.py, line 63:\n    surface = Surface(size, Const.SRCALPHA)';
		$m.__track_lines__[64] = 'pyjsdl.cursors.py, line 64:\n    black = Color(0,0,0,255)';
		$m.__track_lines__[65] = 'pyjsdl.cursors.py, line 65:\n    white = Color(255,255,255,255)';
		$m.__track_lines__[66] = 'pyjsdl.cursors.py, line 66:\n    x = y = 0';
		$m.__track_lines__[67] = 'pyjsdl.cursors.py, line 67:\n    rang = range(8)';
		$m.__track_lines__[68] = 'pyjsdl.cursors.py, line 68:\n    for i in range(len(data)):';
		$m.__track_lines__[69] = 'pyjsdl.cursors.py, line 69:\n    if data[i] or mask[i]:';
		$m.__track_lines__[70] = 'pyjsdl.cursors.py, line 70:\n    for j in rang:';
		$m.__track_lines__[71] = 'pyjsdl.cursors.py, line 71:\n    if data[i] & 0x01<<7-j:';
		$m.__track_lines__[72] = 'pyjsdl.cursors.py, line 72:\n    surface.setFillStyle(black)';
		$m.__track_lines__[73] = 'pyjsdl.cursors.py, line 73:\n    surface.fillRect(x+j, y, 1, 1)';
		$m.__track_lines__[75] = 'pyjsdl.cursors.py, line 75:\n    surface.setFillStyle(white)';
		$m.__track_lines__[76] = 'pyjsdl.cursors.py, line 76:\n    surface.fillRect(x+j, y, 1, 1)';
		$m.__track_lines__[77] = 'pyjsdl.cursors.py, line 77:\n    x += 8';
		$m.__track_lines__[78] = 'pyjsdl.cursors.py, line 78:\n    if x >= size[0]:';
		$m.__track_lines__[79] = 'pyjsdl.cursors.py, line 79:\n    x = 0';
		$m.__track_lines__[80] = 'pyjsdl.cursors.py, line 80:\n    y += 1';
		$m.__track_lines__[81] = 'pyjsdl.cursors.py, line 81:\n    return surface';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_255 = new $p['int'](255);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_7 = new $p['int'](7);
		$pyjs['track']['module']='pyjsdl.cursors';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=16;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=17;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=18;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Const'] = $p['___import___']('pyjsdl.locals', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=22;
		$m['$assign1'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['tuple']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
		$m['arrow'] = $m['$assign1'];
		$m['diamond'] = $m['$assign1'];
		$m['broken_x'] = $m['$assign1'];
		$m['tri_left'] = $m['$assign1'];
		$m['tri_right'] = $m['$assign1'];
		$pyjs['track']['lineno']=25;
		$m['compile'] = function(strings, black, white, xor) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
			if (typeof black == 'undefined') black=arguments['callee']['__args__'][3][1];
			if (typeof white == 'undefined') white=arguments['callee']['__args__'][4][1];
			if (typeof xor == 'undefined') xor=arguments['callee']['__args__'][5][1];
			var rang,$iter1_iter,blank,$iter2_type,$iter2_iter,$iter1_array,$sub3,dbit,$sub4,$iter1_nextval,string,$pyjs__trackstack_size_1,db,c,$iter2_idx,$sub2,data,$sub1,mbit,$iter2_nextval,$iter1_type,mb,i,j,mask,$add2,s,$add1,$pyjs__trackstack_size_2,$iter1_idx,$assign2,$iter2_array;
			$pyjs['track']={'module':'pyjsdl.cursors','lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.cursors';
			$pyjs['track']['lineno']=25;
			$pyjs['track']['lineno']=33;
			data = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=34;
			mask = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=35;
			dbit = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([[black, $constant_int_1], [white, $constant_int_0], [xor, $constant_int_1]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=36;
			mbit = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([[black, $constant_int_1], [white, $constant_int_1], [xor, $constant_int_0]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=37;
			string = (function(){try{try{$pyjs['in_try_except'] += 1;
			return ''['join'](strings);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=38;
			rang = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range']($constant_int_8);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=39;
			blank = '        ';
			$pyjs['track']['lineno']=40;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range']($constant_int_0, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](string);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})(), $constant_int_8);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				i = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=41;
				s = $p['__getslice'](string, i, $p['__op_add']($add1=i,$add2=$constant_int_8));
				$pyjs['track']['lineno']=42;
				$assign2 = $constant_int_0;
				db = $assign2;
				mb = $assign2;
				$pyjs['track']['lineno']=43;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['op_eq'](s, blank));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
					$pyjs['track']['lineno']=44;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return rang;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						j = $iter2_nextval['$nextval'];
						$pyjs['track']['lineno']=45;
						c = s['__getitem__'](j);
						$pyjs['track']['lineno']=46;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['op_eq'](c, ' '));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
							$pyjs['track']['lineno']=47;
							continue;
						}
						$pyjs['track']['lineno']=48;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](dbit['__getitem__'](c));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
							$pyjs['track']['lineno']=49;
							db = $p['op_bitor2'](db, $p['op_bitshiftleft']($constant_int_1,$p['__op_sub']($sub1=$constant_int_7,$sub2=j)));
						}
						$pyjs['track']['lineno']=50;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](mbit['__getitem__'](c));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
							$pyjs['track']['lineno']=51;
							mb = $p['op_bitor2'](mb, $p['op_bitshiftleft']($constant_int_1,$p['__op_sub']($sub3=$constant_int_7,$sub4=j)));
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.cursors';
				}
				$pyjs['track']['lineno']=52;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return data['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int'](db);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs['track']['lineno']=53;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return mask['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int'](mb);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.cursors';
			$pyjs['track']['lineno']=54;
			$pyjs['track']['lineno']=54;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](mask);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['compile']['__name__'] = 'compile';

		$m['compile']['__bind_type__'] = 0;
		$m['compile']['__args__'] = [null,null,['strings'],['black', 'X'],['white', '.'],['xor', 'o']];
		$pyjs['track']['lineno']=57;
		$m['create_cursor'] = function(size, data, mask) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var rang,$iter3_type,surface,$iter4_type,$iter4_iter,$iter3_idx,$iter3_nextval,$sub8,black,$iter3_iter,$add6,white,$sub7,$sub6,$sub5,$or1,$add4,$or2,$add5,$iter4_array,$add10,$iter3_array,i,$iter4_nextval,j,$iter4_idx,$add3,$pyjs__trackstack_size_2,$add7,$assign3,$pyjs__trackstack_size_1,y,x,$add8,$add9;
			$pyjs['track']={'module':'pyjsdl.cursors','lineno':57};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.cursors';
			$pyjs['track']['lineno']=57;
			$pyjs['track']['lineno']=63;
			surface = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Surface'](size, $p['getattr']($m['Const'], 'SRCALPHA'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['track']['lineno']=64;
			black = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Color']($constant_int_0, $constant_int_0, $constant_int_0, $constant_int_255);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs['track']['lineno']=65;
			white = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Color']($constant_int_255, $constant_int_255, $constant_int_255, $constant_int_255);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['track']['lineno']=66;
			$assign3 = $constant_int_0;
			x = $assign3;
			y = $assign3;
			$pyjs['track']['lineno']=67;
			rang = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range']($constant_int_8);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs['track']['lineno']=68;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				i = $iter3_nextval['$nextval'];
				$pyjs['track']['lineno']=69;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($or1=data['__getitem__'](i))?$or1:mask['__getitem__'](i)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()) {
					$pyjs['track']['lineno']=70;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return rang;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						j = $iter4_nextval['$nextval'];
						$pyjs['track']['lineno']=71;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['op_bitand2'](data['__getitem__'](i), $p['op_bitshiftleft']($constant_int_1,$p['__op_sub']($sub5=$constant_int_7,$sub6=j))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()) {
							$pyjs['track']['lineno']=72;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setFillStyle'](black);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
							$pyjs['track']['lineno']=73;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['fillRect']($p['__op_add']($add3=x,$add4=j), y, $constant_int_1, $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
						}
						else if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['op_bitand2'](mask['__getitem__'](i), $p['op_bitshiftleft']($constant_int_1,$p['__op_sub']($sub7=$constant_int_7,$sub8=j))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
							$pyjs['track']['lineno']=75;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setFillStyle'](white);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
							$pyjs['track']['lineno']=76;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['fillRect']($p['__op_add']($add5=x,$add6=j), y, $constant_int_1, $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.cursors';
				}
				$pyjs['track']['lineno']=77;
				x = $p['__op_add']($add7=x,$add8=$constant_int_8);
				$pyjs['track']['lineno']=78;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](((($p['cmp'](x, size['__getitem__']($constant_int_0)))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()) {
					$pyjs['track']['lineno']=79;
					x = $constant_int_0;
					$pyjs['track']['lineno']=80;
					y = $p['__op_add']($add9=y,$add10=$constant_int_1);
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.cursors';
			$pyjs['track']['lineno']=81;
			$pyjs['track']['lineno']=81;
			var $pyjs__ret = surface;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['create_cursor']['__name__'] = 'create_cursor';

		$m['create_cursor']['__bind_type__'] = 0;
		$m['create_cursor']['__args__'] = [null,null,['size'],['data'],['mask']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.cursors */


/* end module: pyjsdl.cursors */


/*
PYJS_DEPS: ['pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface', 'pyjsdl.color.Color', 'pyjsdl.color', 'pyjsdl.locals']
*/
