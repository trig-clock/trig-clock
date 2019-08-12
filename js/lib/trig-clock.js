/* start module: trig-clock */
$pyjs['loaded_modules']['trig-clock'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['trig-clock']['__was_initialized__']) return $pyjs['loaded_modules']['trig-clock'];
	var $m = $pyjs['loaded_modules']['trig-clock'];
	$m['__repr__'] = function() { return '<module: trig-clock>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'trig-clock';
	$m['__name__'] = __mod_name__;
	var $eq3,$eq4,$bool2;

	$m['pyjsdl'] = $p['___import___']('pyjsdl', null);
	$m['math'] = $p['___import___']('math', null);
	$m['time'] = $p['___import___']('time', null);
	$m['WIDTH'] = 800;
	$m['HEIGHT'] = 600;
	$m['CENTER'] = $p['tuple']([($m['WIDTH'])/(2), ($m['HEIGHT'])/(2)]);
	var $tupleassign1 = $p['__ass_unpack']($p['tuple']([null, null, null, null]), 4, null);
	$m['screen'] = $tupleassign1[0];
	$m['big_font'] = $tupleassign1[1];
	$m['small_font'] = $tupleassign1[2];
	$m['clk'] = $tupleassign1[3];
	$m['setup'] = function() {
		var screen,small_font,big_font,clk;
		$m['pyjsdl']['display']['init']();
		screen = $m['pyjsdl']['display']['set_mode']($p['tuple']([$m['WIDTH'], $m['HEIGHT']]));
		$m['pyjsdl']['display']['set_caption']('trig-clock');
		$m['pyjsdl']['font']['init']();
		big_font = $m['pyjsdl']['font']['SysFont']('Noto Sans', 30);
		small_font = $m['pyjsdl']['font']['SysFont']('Noto Sans', 20);
		clk = $m['pyjsdl']['time']['Clock']();
		$m['pyjsdl']['display']['setup']((typeof run == "undefined"?$m['run']:run));
		return $p['tuple']([screen, big_font, small_font, clk]);
	};
	$m['setup']['__name__'] = 'setup';

	$m['setup']['__bind_type__'] = 0;
	$m['setup']['__args__'] = [null,null];
	$m['main'] = function() {

		var $tupleassign2 = $p['__ass_unpack']($m['setup'](), 4, null);
		$m['screen'] = $tupleassign2[0];
		$m['big_font'] = $tupleassign2[1];
		$m['small_font'] = $tupleassign2[2];
		$m['clk'] = $tupleassign2[3];
		$m['pyjsdl']['display']['setup']((typeof run == "undefined"?$m['run']:run));
		return null;
	};
	$m['main']['__name__'] = 'main';

	$m['main']['__bind_type__'] = 0;
	$m['main']['__args__'] = [null,null];
	$m['run'] = function() {

		(typeof loop == "undefined"?$m['loop']:loop)($m['screen'], $m['big_font'], $m['small_font'], $m['clk']);
		return null;
	};
	$m['run']['__name__'] = 'run';

	$m['run']['__bind_type__'] = 0;
	$m['run']['__args__'] = [null,null];
	$m['loop'] = function(screen, big_font, small_font, clk) {
		var pp_y,pp_x,pm_x,pm_y,$iter3_type,$18,$mod2,$iter1_iter,$6,$mod1,$7,$iter2_type,$iter1_type,ps_x,ps_y,$iter3_idx,txt,$iter2_iter,$21,$20,$iter3_nextval,$22,$iter3_iter,$eq2,t_x,tm,$iter1_array,$24,$attr3,$iter3_array,t,$eq1,$iter1_nextval,$15,$attr1,$attr2,$attr5,$attr4,$attr6,$iter2_idx,$bool1,t_y,$8,$9,ph_y,ph_x,$4,$5,$2,$3,hd,$1,$14,md,$16,$iter2_nextval,$10,$11,$12,$13,h,m,$19,p,s,$iter1_idx,$17,$23,$iter2_array,sd;
		tm = $m['time']['localtime']();
		screen['fill']($p['tuple']([0, 0, 0]));
		h = tm['tm_hour'];
		m = tm['tm_min'];
		s = tm['tm_sec'];
		hd = $m['math']['radians']((-(((h)+((m)/(60)))+((s)/(3600))))*(15));
		md = $m['math']['radians']((-((m)+((s)/(60))))*(6));
		sd = $m['math']['radians']((-(s))*(6));
		ph_x = ((typeof ($1=$m['CENTER'])['__array'] != 'undefined'?
			((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
				$1['__getitem__']($2)):
				$1['__getitem__'](0)))+(($m['math']['cos'](hd))*(100));
		ph_y = ((typeof ($3=$m['CENTER'])['__array'] != 'undefined'?
			((typeof $3['__array'][$4=1]) != 'undefined'?$3['__array'][$4]:
				$3['__getitem__']($4)):
				$3['__getitem__'](1)))+(($m['math']['sin'](hd))*(100));
		pm_x = ((typeof ($5=$m['CENTER'])['__array'] != 'undefined'?
			((typeof $5['__array'][$6=0]) != 'undefined'?$5['__array'][$6]:
				$5['__getitem__']($6)):
				$5['__getitem__'](0)))+(($m['math']['cos'](md))*(150));
		pm_y = ((typeof ($7=$m['CENTER'])['__array'] != 'undefined'?
			((typeof $7['__array'][$8=1]) != 'undefined'?$7['__array'][$8]:
				$7['__getitem__']($8)):
				$7['__getitem__'](1)))+(($m['math']['sin'](md))*(150));
		ps_x = ((typeof ($9=$m['CENTER'])['__array'] != 'undefined'?
			((typeof $9['__array'][$10=0]) != 'undefined'?$9['__array'][$10]:
				$9['__getitem__']($10)):
				$9['__getitem__'](0)))+(($m['math']['cos'](sd))*(200));
		ps_y = ((typeof ($11=$m['CENTER'])['__array'] != 'undefined'?
			((typeof $11['__array'][$12=1]) != 'undefined'?$11['__array'][$12]:
				$11['__getitem__']($12)):
				$11['__getitem__'](1)))+(($m['math']['sin'](sd))*(200));
		$iter1_iter = $p['range'](0, 60);
		if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter['__iter__']();
			$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			p = $iter1_nextval;
			pp_x = $p['float_int'](((typeof ($13=$m['CENTER'])['__array'] != 'undefined'?
				((typeof $13['__array'][$14=0]) != 'undefined'?$13['__array'][$14]:
					$13['__getitem__']($14)):
					$13['__getitem__'](0)))+(($m['math']['cos']($m['math']['radians']((p)*(6))))*(215)));
			pp_y = $p['float_int'](((typeof ($15=$m['CENTER'])['__array'] != 'undefined'?
				((typeof $15['__array'][$16=1]) != 'undefined'?$15['__array'][$16]:
					$15['__getitem__']($16)):
					$15['__getitem__'](1)))+(($m['math']['sin']($m['math']['radians']((p)*(6))))*(215)));
			if ((($bool1=!(($eq1=(($mod1=p)!=null && ($mod2=5)!=null && typeof $mod1=='string'?
				$p['sprintf']($mod1,$mod2):
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1)))===($eq2=0)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1['__nonzero__']=='function'?
							$bool1['__nonzero__']() :
							(typeof $bool1['__len__']=='function'?
								($bool1['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['pyjsdl']['draw']['circle'](screen, $p['tuple']([255, 255, 255]), $p['tuple']([pp_x, pp_y]), 3);
			}
			else {
				$m['pyjsdl']['draw']['circle'](screen, $p['tuple']([255, 255, 255]), $p['tuple']([pp_x, pp_y]), 7);
			}
		}
		$iter2_iter = $p['range'](0, 24);
		if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter['__iter__']();
			$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			t = $iter2_nextval;
			txt = big_font['render']($p['str'](t), false, $p['tuple']([255, 255, 255]));
			t_x = $p['float_int'](((typeof ($17=$m['CENTER'])['__array'] != 'undefined'?
				((typeof $17['__array'][$18=0]) != 'undefined'?$17['__array'][$18]:
					$17['__getitem__']($18)):
					$17['__getitem__'](0)))+(($m['math']['cos']($m['math']['radians']((-(t))*(15))))*(245)));
			t_y = $p['float_int'](((typeof ($19=$m['CENTER'])['__array'] != 'undefined'?
				((typeof $19['__array'][$20=1]) != 'undefined'?$19['__array'][$20]:
					$19['__getitem__']($20)):
					$19['__getitem__'](1)))+(($m['math']['sin']($m['math']['radians']((-(t))*(15))))*(245)));
			screen['blit'](txt, $p['tuple']([(t_x)-((txt['get_width']())/(2)), (t_y)-((txt['get_height']())/(2))]));
		}
		$iter3_iter = $p['range'](0, 60, 5);
		if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
			$iter3_type = 0;
		} else {
			$iter3_iter = $iter3_iter['__iter__']();
			$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter3_idx = 0;
		while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
			m = $iter3_nextval;
			txt = small_font['render']($p['str'](m), false, $p['tuple']([255, 255, 255]));
			t_x = $p['float_int'](((typeof ($21=$m['CENTER'])['__array'] != 'undefined'?
				((typeof $21['__array'][$22=0]) != 'undefined'?$21['__array'][$22]:
					$21['__getitem__']($22)):
					$21['__getitem__'](0)))+(($m['math']['cos']($m['math']['radians']((-(m))*(6))))*(185)));
			t_y = $p['float_int'](((typeof ($23=$m['CENTER'])['__array'] != 'undefined'?
				((typeof $23['__array'][$24=1]) != 'undefined'?$23['__array'][$24]:
					$23['__getitem__']($24)):
					$23['__getitem__'](1)))+(($m['math']['sin']($m['math']['radians']((-(m))*(6))))*(185)));
			screen['blit'](txt, $p['tuple']([(t_x)-((txt['get_width']())/(2)), (t_y)-((txt['get_height']())/(2))]));
		}
		$m['pyjsdl']['draw']['line'](screen, $p['tuple']([0, 255, 0]), $m['CENTER'], $p['tuple']([ph_x, ph_y]), 5);
		$m['pyjsdl']['draw']['line'](screen, $p['tuple']([0, 0, 255]), $m['CENTER'], $p['tuple']([pm_x, pm_y]), 3);
		$m['pyjsdl']['draw']['line'](screen, $p['tuple']([0, 255, 255]), $m['CENTER'], $p['tuple']([ps_x, ps_y]));
		$m['pyjsdl']['display']['flip']();
		clk['tick'](1);
		return null;
	};
	$m['loop']['__name__'] = 'loop';

	$m['loop']['__bind_type__'] = 0;
	$m['loop']['__args__'] = [null,null,['screen'],['big_font'],['small_font'],['clk']];
	if ((($bool2=(($eq3=(typeof __name__ == "undefined"?$m['__name__']:__name__))===($eq4='__main__')&&$eq3===null?true:
		($eq3===null?false:($eq4===null?false:
			((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
				((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
					$eq3==$eq4)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
			false :
			(typeof $bool2=='object'?
				(typeof $bool2['__nonzero__']=='function'?
					$bool2['__nonzero__']() :
					(typeof $bool2['__len__']=='function'?
						($bool2['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
		$m['main']();
	}
	return this;
}; /* end trig-clock */


/* end module: trig-clock */


/*
PYJS_DEPS: ['pyjsdl', 'math', 'time']
*/
