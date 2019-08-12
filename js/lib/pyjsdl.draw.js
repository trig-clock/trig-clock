/* start module: pyjsdl.draw */
$pyjs['loaded_modules']['pyjsdl.draw'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.draw']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.draw'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.draw'];
	$m['__repr__'] = function() { return '<module: pyjsdl.draw>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.draw';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['draw'] = $pyjs['loaded_modules']['pyjsdl.draw'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.draw.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.draw.py, line 4:\n    from math import pi as _pi';
		$m.__track_lines__[5] = 'pyjsdl.draw.py, line 5:\n    from pyjsdl.rect import Rect';
		$m.__track_lines__[6] = 'pyjsdl.draw.py, line 6:\n    from pyjsdl.surface import Surface';
		$m.__track_lines__[7] = 'pyjsdl.draw.py, line 7:\n    from pyjsdl.color import Color';
		$m.__track_lines__[9] = "pyjsdl.draw.py, line 9:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[12] = 'pyjsdl.draw.py, line 12:\n    class Draw(object):';
		$m.__track_lines__[28] = 'pyjsdl.draw.py, line 28:\n    def __init__(self):';
		$m.__track_lines__[34] = 'pyjsdl.draw.py, line 34:\n    self.rad_deg = 180.0/_pi';
		$m.__track_lines__[35] = 'pyjsdl.draw.py, line 35:\n    self._return_rect = True';
		$m.__track_lines__[37] = 'pyjsdl.draw.py, line 37:\n    def rect(self, surface, color, rect, width=0):';
		$m.__track_lines__[43] = "pyjsdl.draw.py, line 43:\n    if hasattr(rect, 'width'):";
		$m.__track_lines__[44] = 'pyjsdl.draw.py, line 44:\n    _rect = rect';
		$m.__track_lines__[46] = 'pyjsdl.draw.py, line 46:\n    _rect = Rect(rect)';
		$m.__track_lines__[47] = 'pyjsdl.draw.py, line 47:\n    if width:';
		$m.__track_lines__[48] = 'pyjsdl.draw.py, line 48:\n    surface.setLineWidth(width)';
		$m.__track_lines__[49] = 'pyjsdl.draw.py, line 49:\n    if surface._stroke_style != color:';
		$m.__track_lines__[50] = 'pyjsdl.draw.py, line 50:\n    surface._stroke_style = color';
		$m.__track_lines__[51] = "pyjsdl.draw.py, line 51:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[52] = 'pyjsdl.draw.py, line 52:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[54] = 'pyjsdl.draw.py, line 54:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[55] = 'pyjsdl.draw.py, line 55:\n    surface.strokeRect(_rect.x, _rect.y, _rect.width, _rect.height)';
		$m.__track_lines__[57] = 'pyjsdl.draw.py, line 57:\n    if surface._fill_style != color:';
		$m.__track_lines__[58] = 'pyjsdl.draw.py, line 58:\n    surface._fill_style = color';
		$m.__track_lines__[59] = "pyjsdl.draw.py, line 59:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[60] = 'pyjsdl.draw.py, line 60:\n    surface.setFillStyle(color)';
		$m.__track_lines__[62] = 'pyjsdl.draw.py, line 62:\n    surface.setFillStyle(Color(color))';
		$m.__track_lines__[63] = 'pyjsdl.draw.py, line 63:\n    surface.fillRect(_rect.x, _rect.y, _rect.width, _rect.height)';
		$m.__track_lines__[64] = 'pyjsdl.draw.py, line 64:\n    if not self._return_rect:';
		$m.__track_lines__[65] = 'pyjsdl.draw.py, line 65:\n    return None';
		$m.__track_lines__[66] = 'pyjsdl.draw.py, line 66:\n    if surface._display:';
		$m.__track_lines__[67] = 'pyjsdl.draw.py, line 67:\n    return surface._display._surface_rect.clip(_rect)';
		$m.__track_lines__[69] = 'pyjsdl.draw.py, line 69:\n    return surface.get_rect().clip(_rect)';
		$m.__track_lines__[71] = 'pyjsdl.draw.py, line 71:\n    def circle(self, surface, color, position, radius, width=0):';
		$m.__track_lines__[77] = 'pyjsdl.draw.py, line 77:\n    surface.beginPath()';
		$m.__track_lines__[78] = 'pyjsdl.draw.py, line 78:\n    surface.arc(position[0], position[1], radius, 0, 2*_pi, False)';
		$m.__track_lines__[79] = 'pyjsdl.draw.py, line 79:\n    if width:';
		$m.__track_lines__[80] = 'pyjsdl.draw.py, line 80:\n    surface.setLineWidth(width)';
		$m.__track_lines__[81] = 'pyjsdl.draw.py, line 81:\n    if surface._stroke_style != color:';
		$m.__track_lines__[82] = 'pyjsdl.draw.py, line 82:\n    surface._stroke_style = color';
		$m.__track_lines__[83] = "pyjsdl.draw.py, line 83:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[84] = 'pyjsdl.draw.py, line 84:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[86] = 'pyjsdl.draw.py, line 86:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[87] = 'pyjsdl.draw.py, line 87:\n    surface.stroke()';
		$m.__track_lines__[89] = 'pyjsdl.draw.py, line 89:\n    if surface._fill_style != color:';
		$m.__track_lines__[90] = 'pyjsdl.draw.py, line 90:\n    surface._fill_style = color';
		$m.__track_lines__[91] = "pyjsdl.draw.py, line 91:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[92] = 'pyjsdl.draw.py, line 92:\n    surface.setFillStyle(color)';
		$m.__track_lines__[94] = 'pyjsdl.draw.py, line 94:\n    surface.setFillStyle(Color(color))';
		$m.__track_lines__[95] = 'pyjsdl.draw.py, line 95:\n    surface.fill()';
		$m.__track_lines__[96] = 'pyjsdl.draw.py, line 96:\n    if not self._return_rect:';
		$m.__track_lines__[97] = 'pyjsdl.draw.py, line 97:\n    return None';
		$m.__track_lines__[98] = 'pyjsdl.draw.py, line 98:\n    if surface._display:';
		$m.__track_lines__[99] = 'pyjsdl.draw.py, line 99:\n    return surface._display._surface_rect.clip( Rect(position[0]-radius, position[1]-radius, 2*radius, 2*radius) )';
		$m.__track_lines__[101] = 'pyjsdl.draw.py, line 101:\n    return surface.get_rect().clip( Rect(position[0]-radius, position[1]-radius, 2*radius, 2*radius) )';
		$m.__track_lines__[103] = 'pyjsdl.draw.py, line 103:\n    def ellipse(self, surface, color, rect, width=0):';
		$m.__track_lines__[109] = "pyjsdl.draw.py, line 109:\n    if hasattr(rect, 'width'):";
		$m.__track_lines__[110] = 'pyjsdl.draw.py, line 110:\n    _rect = rect';
		$m.__track_lines__[112] = 'pyjsdl.draw.py, line 112:\n    _rect = Rect(rect)';
		$m.__track_lines__[113] = 'pyjsdl.draw.py, line 113:\n    surface.saveContext()';
		$m.__track_lines__[114] = 'pyjsdl.draw.py, line 114:\n    surface.translate(_rect.x+int(_rect.width/2), _rect.y+int(_rect.height/2))';
		$m.__track_lines__[115] = 'pyjsdl.draw.py, line 115:\n    if _rect.width >= _rect.height:';
		$m.__track_lines__[116] = 'pyjsdl.draw.py, line 116:\n    surface.scale(_rect.width/(_rect.height*1.0), 1)';
		$m.__track_lines__[117] = 'pyjsdl.draw.py, line 117:\n    radius = int(_rect.height/2)';
		$m.__track_lines__[119] = 'pyjsdl.draw.py, line 119:\n    surface.scale(1, _rect.height/(_rect.width*1.0))';
		$m.__track_lines__[120] = 'pyjsdl.draw.py, line 120:\n    radius = int(_rect.width/2)';
		$m.__track_lines__[121] = 'pyjsdl.draw.py, line 121:\n    surface.beginPath()';
		$m.__track_lines__[122] = 'pyjsdl.draw.py, line 122:\n    surface.arc(0, 0, radius, 0, 2*_pi, False)';
		$m.__track_lines__[123] = 'pyjsdl.draw.py, line 123:\n    if width:';
		$m.__track_lines__[124] = 'pyjsdl.draw.py, line 124:\n    surface.setLineWidth(width)';
		$m.__track_lines__[125] = 'pyjsdl.draw.py, line 125:\n    if surface._stroke_style != color:';
		$m.__track_lines__[126] = 'pyjsdl.draw.py, line 126:\n    surface._stroke_style = color';
		$m.__track_lines__[127] = "pyjsdl.draw.py, line 127:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[128] = 'pyjsdl.draw.py, line 128:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[130] = 'pyjsdl.draw.py, line 130:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[131] = 'pyjsdl.draw.py, line 131:\n    surface.stroke()';
		$m.__track_lines__[133] = 'pyjsdl.draw.py, line 133:\n    if surface._fill_style != color:';
		$m.__track_lines__[134] = 'pyjsdl.draw.py, line 134:\n    surface._fill_style = color';
		$m.__track_lines__[135] = "pyjsdl.draw.py, line 135:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[136] = 'pyjsdl.draw.py, line 136:\n    surface.setFillStyle(color)';
		$m.__track_lines__[138] = 'pyjsdl.draw.py, line 138:\n    surface.setFillStyle(Color(color))';
		$m.__track_lines__[139] = 'pyjsdl.draw.py, line 139:\n    surface.fill()';
		$m.__track_lines__[140] = 'pyjsdl.draw.py, line 140:\n    surface.restoreContext()';
		$m.__track_lines__[141] = 'pyjsdl.draw.py, line 141:\n    if not self._return_rect:';
		$m.__track_lines__[142] = 'pyjsdl.draw.py, line 142:\n    return None';
		$m.__track_lines__[143] = 'pyjsdl.draw.py, line 143:\n    if surface._display:';
		$m.__track_lines__[144] = 'pyjsdl.draw.py, line 144:\n    return surface._display._surface_rect.clip(_rect)';
		$m.__track_lines__[146] = 'pyjsdl.draw.py, line 146:\n    return surface.get_rect().clip(_rect)';
		$m.__track_lines__[148] = 'pyjsdl.draw.py, line 148:\n    def arc(self, surface, color, rect, start_angle, stop_angle, width=1):';
		$m.__track_lines__[154] = "pyjsdl.draw.py, line 154:\n    if hasattr(rect, 'width'):";
		$m.__track_lines__[155] = 'pyjsdl.draw.py, line 155:\n    _rect = rect';
		$m.__track_lines__[157] = 'pyjsdl.draw.py, line 157:\n    _rect = Rect(rect)';
		$m.__track_lines__[158] = 'pyjsdl.draw.py, line 158:\n    if _rect.width == _rect.height:';
		$m.__track_lines__[159] = 'pyjsdl.draw.py, line 159:\n    surface.beginPath()';
		$m.__track_lines__[160] = 'pyjsdl.draw.py, line 160:\n    surface.arc(_rect.x+int(_rect.width/2), _rect.y+int(_rect.height/2), int(_rect.width/2), -start_angle, -stop_angle, True)';
		$m.__track_lines__[161] = 'pyjsdl.draw.py, line 161:\n    if width:';
		$m.__track_lines__[162] = 'pyjsdl.draw.py, line 162:\n    surface.setLineWidth(width)';
		$m.__track_lines__[163] = 'pyjsdl.draw.py, line 163:\n    if surface._stroke_style != color:';
		$m.__track_lines__[164] = 'pyjsdl.draw.py, line 164:\n    surface._stroke_style = color';
		$m.__track_lines__[165] = "pyjsdl.draw.py, line 165:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[166] = 'pyjsdl.draw.py, line 166:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[168] = 'pyjsdl.draw.py, line 168:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[169] = 'pyjsdl.draw.py, line 169:\n    surface.stroke()';
		$m.__track_lines__[171] = 'pyjsdl.draw.py, line 171:\n    surface.closePath()';
		$m.__track_lines__[172] = 'pyjsdl.draw.py, line 172:\n    if surface._fill_style != color:';
		$m.__track_lines__[173] = 'pyjsdl.draw.py, line 173:\n    surface._fill_style = color';
		$m.__track_lines__[174] = "pyjsdl.draw.py, line 174:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[175] = 'pyjsdl.draw.py, line 175:\n    surface.setFillStyle(color)';
		$m.__track_lines__[177] = 'pyjsdl.draw.py, line 177:\n    surface.setFillStyle(Color(color))';
		$m.__track_lines__[178] = 'pyjsdl.draw.py, line 178:\n    surface.fill()';
		$m.__track_lines__[180] = 'pyjsdl.draw.py, line 180:\n    surface.saveContext()';
		$m.__track_lines__[181] = 'pyjsdl.draw.py, line 181:\n    surface.translate(_rect.x+int(_rect.width/2), _rect.y+int(_rect.height/2))';
		$m.__track_lines__[182] = 'pyjsdl.draw.py, line 182:\n    if _rect.width >= _rect.height:';
		$m.__track_lines__[183] = 'pyjsdl.draw.py, line 183:\n    surface.scale(_rect.width/(_rect.height*1.0), 1)';
		$m.__track_lines__[184] = 'pyjsdl.draw.py, line 184:\n    radius = int(_rect.height/2)';
		$m.__track_lines__[186] = 'pyjsdl.draw.py, line 186:\n    surface.scale(1, _rect.height/(_rect.width*1.0))';
		$m.__track_lines__[187] = 'pyjsdl.draw.py, line 187:\n    radius = int(_rect.width/2)';
		$m.__track_lines__[188] = 'pyjsdl.draw.py, line 188:\n    surface.beginPath()';
		$m.__track_lines__[189] = 'pyjsdl.draw.py, line 189:\n    surface.arc(0, 0, radius, -start_angle, -stop_angle, True)';
		$m.__track_lines__[190] = 'pyjsdl.draw.py, line 190:\n    if width:';
		$m.__track_lines__[191] = 'pyjsdl.draw.py, line 191:\n    surface.setLineWidth(width)';
		$m.__track_lines__[192] = 'pyjsdl.draw.py, line 192:\n    if surface._stroke_style != color:';
		$m.__track_lines__[193] = 'pyjsdl.draw.py, line 193:\n    surface._stroke_style = color';
		$m.__track_lines__[194] = "pyjsdl.draw.py, line 194:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[195] = 'pyjsdl.draw.py, line 195:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[197] = 'pyjsdl.draw.py, line 197:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[198] = 'pyjsdl.draw.py, line 198:\n    surface.stroke()';
		$m.__track_lines__[200] = 'pyjsdl.draw.py, line 200:\n    surface.closePath()';
		$m.__track_lines__[201] = 'pyjsdl.draw.py, line 201:\n    if surface._fill_style != color:';
		$m.__track_lines__[202] = 'pyjsdl.draw.py, line 202:\n    surface._fill_style = color';
		$m.__track_lines__[203] = "pyjsdl.draw.py, line 203:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[204] = 'pyjsdl.draw.py, line 204:\n    surface.setFillStyle(color)';
		$m.__track_lines__[206] = 'pyjsdl.draw.py, line 206:\n    surface.setFillStyle(Color(color))';
		$m.__track_lines__[207] = 'pyjsdl.draw.py, line 207:\n    surface.fill()';
		$m.__track_lines__[208] = 'pyjsdl.draw.py, line 208:\n    surface.restoreContext()';
		$m.__track_lines__[209] = 'pyjsdl.draw.py, line 209:\n    if not self._return_rect:';
		$m.__track_lines__[210] = 'pyjsdl.draw.py, line 210:\n    return None';
		$m.__track_lines__[211] = 'pyjsdl.draw.py, line 211:\n    if surface._display:';
		$m.__track_lines__[212] = 'pyjsdl.draw.py, line 212:\n    return surface._display._surface_rect.clip(_rect)';
		$m.__track_lines__[214] = 'pyjsdl.draw.py, line 214:\n    return surface.get_rect().clip(_rect)';
		$m.__track_lines__[216] = 'pyjsdl.draw.py, line 216:\n    def polygon(self, surface, color, pointlist, width=0):';
		$m.__track_lines__[222] = 'pyjsdl.draw.py, line 222:\n    surface.beginPath()';
		$m.__track_lines__[223] = 'pyjsdl.draw.py, line 223:\n    surface.moveTo(*pointlist[0])';
		$m.__track_lines__[224] = 'pyjsdl.draw.py, line 224:\n    for point in pointlist[1:]:';
		$m.__track_lines__[225] = 'pyjsdl.draw.py, line 225:\n    surface.lineTo(*point)';
		$m.__track_lines__[226] = 'pyjsdl.draw.py, line 226:\n    surface.closePath()';
		$m.__track_lines__[227] = 'pyjsdl.draw.py, line 227:\n    if width:';
		$m.__track_lines__[228] = 'pyjsdl.draw.py, line 228:\n    surface.setLineWidth(width)';
		$m.__track_lines__[229] = 'pyjsdl.draw.py, line 229:\n    if surface._stroke_style != color:';
		$m.__track_lines__[230] = 'pyjsdl.draw.py, line 230:\n    surface._stroke_style = color';
		$m.__track_lines__[231] = "pyjsdl.draw.py, line 231:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[232] = 'pyjsdl.draw.py, line 232:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[234] = 'pyjsdl.draw.py, line 234:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[235] = 'pyjsdl.draw.py, line 235:\n    surface.stroke()';
		$m.__track_lines__[237] = 'pyjsdl.draw.py, line 237:\n    if surface._fill_style != color:';
		$m.__track_lines__[238] = 'pyjsdl.draw.py, line 238:\n    surface._fill_style = color';
		$m.__track_lines__[239] = "pyjsdl.draw.py, line 239:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[240] = 'pyjsdl.draw.py, line 240:\n    surface.setFillStyle(color)';
		$m.__track_lines__[242] = 'pyjsdl.draw.py, line 242:\n    surface.setFillStyle(Color(color))';
		$m.__track_lines__[243] = 'pyjsdl.draw.py, line 243:\n    surface.fill()';
		$m.__track_lines__[244] = 'pyjsdl.draw.py, line 244:\n    if not self._return_rect:';
		$m.__track_lines__[245] = 'pyjsdl.draw.py, line 245:\n    return None';
		$m.__track_lines__[246] = 'pyjsdl.draw.py, line 246:\n    xpts = [pt[0] for pt in pointlist]';
		$m.__track_lines__[247] = 'pyjsdl.draw.py, line 247:\n    ypts = [pt[1] for pt in pointlist]';
		$m.__track_lines__[248] = 'pyjsdl.draw.py, line 248:\n    xmin, xmax = min(xpts), max(xpts)';
		$m.__track_lines__[249] = 'pyjsdl.draw.py, line 249:\n    ymin, ymax = min(ypts), max(ypts)';
		$m.__track_lines__[250] = 'pyjsdl.draw.py, line 250:\n    if surface._display:';
		$m.__track_lines__[251] = 'pyjsdl.draw.py, line 251:\n    return surface._display._surface_rect.clip( Rect(xmin, ymin, xmax-xmin+1, ymax-ymin+1) )';
		$m.__track_lines__[253] = 'pyjsdl.draw.py, line 253:\n    return surface.get_rect().clip( Rect(xmin, ymin, xmax-xmin+1, ymax-ymin+1) )';
		$m.__track_lines__[255] = 'pyjsdl.draw.py, line 255:\n    def line(self, surface, color, point1, point2, width=1):';
		$m.__track_lines__[261] = 'pyjsdl.draw.py, line 261:\n    surface.beginPath()';
		$m.__track_lines__[262] = 'pyjsdl.draw.py, line 262:\n    surface.moveTo(*point1)';
		$m.__track_lines__[263] = 'pyjsdl.draw.py, line 263:\n    surface.lineTo(*point2)';
		$m.__track_lines__[264] = 'pyjsdl.draw.py, line 264:\n    surface.setLineWidth(width)';
		$m.__track_lines__[265] = 'pyjsdl.draw.py, line 265:\n    if surface._stroke_style != color:';
		$m.__track_lines__[266] = 'pyjsdl.draw.py, line 266:\n    surface._stroke_style = color';
		$m.__track_lines__[267] = "pyjsdl.draw.py, line 267:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[268] = 'pyjsdl.draw.py, line 268:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[270] = 'pyjsdl.draw.py, line 270:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[271] = 'pyjsdl.draw.py, line 271:\n    surface.stroke()';
		$m.__track_lines__[272] = 'pyjsdl.draw.py, line 272:\n    if not self._return_rect:';
		$m.__track_lines__[273] = 'pyjsdl.draw.py, line 273:\n    return None';
		$m.__track_lines__[274] = 'pyjsdl.draw.py, line 274:\n    xpts = [pt[0] for pt in (point1,point2)]';
		$m.__track_lines__[275] = 'pyjsdl.draw.py, line 275:\n    ypts = [pt[1] for pt in (point1,point2)]';
		$m.__track_lines__[276] = 'pyjsdl.draw.py, line 276:\n    xmin, xmax = min(xpts), max(xpts)';
		$m.__track_lines__[277] = 'pyjsdl.draw.py, line 277:\n    ymin, ymax = min(ypts), max(ypts)';
		$m.__track_lines__[278] = 'pyjsdl.draw.py, line 278:\n    if surface._display:';
		$m.__track_lines__[279] = 'pyjsdl.draw.py, line 279:\n    return surface._display._surface_rect.clip( Rect(xmin, ymin, xmax-xmin+1, ymax-ymin+1) )';
		$m.__track_lines__[281] = 'pyjsdl.draw.py, line 281:\n    return surface.get_rect().clip( Rect(xmin, ymin, xmax-xmin+1, ymax-ymin+1) )';
		$m.__track_lines__[283] = 'pyjsdl.draw.py, line 283:\n    def lines(self, surface, color, closed, pointlist, width=1):';
		$m.__track_lines__[289] = 'pyjsdl.draw.py, line 289:\n    surface.beginPath()';
		$m.__track_lines__[290] = 'pyjsdl.draw.py, line 290:\n    surface.moveTo(*pointlist[0])';
		$m.__track_lines__[291] = 'pyjsdl.draw.py, line 291:\n    for point in pointlist[1:]:';
		$m.__track_lines__[292] = 'pyjsdl.draw.py, line 292:\n    surface.lineTo(*point)';
		$m.__track_lines__[293] = 'pyjsdl.draw.py, line 293:\n    if closed:';
		$m.__track_lines__[294] = 'pyjsdl.draw.py, line 294:\n    surface.closePath()';
		$m.__track_lines__[295] = 'pyjsdl.draw.py, line 295:\n    surface.setLineWidth(width)';
		$m.__track_lines__[296] = 'pyjsdl.draw.py, line 296:\n    if surface._stroke_style != color:';
		$m.__track_lines__[297] = 'pyjsdl.draw.py, line 297:\n    surface._stroke_style = color';
		$m.__track_lines__[298] = "pyjsdl.draw.py, line 298:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[299] = 'pyjsdl.draw.py, line 299:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[301] = 'pyjsdl.draw.py, line 301:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[302] = 'pyjsdl.draw.py, line 302:\n    surface.stroke()';
		$m.__track_lines__[303] = 'pyjsdl.draw.py, line 303:\n    if not self._return_rect:';
		$m.__track_lines__[304] = 'pyjsdl.draw.py, line 304:\n    return None';
		$m.__track_lines__[305] = 'pyjsdl.draw.py, line 305:\n    xpts = [pt[0] for pt in pointlist]';
		$m.__track_lines__[306] = 'pyjsdl.draw.py, line 306:\n    ypts = [pt[1] for pt in pointlist]';
		$m.__track_lines__[307] = 'pyjsdl.draw.py, line 307:\n    xmin, xmax = min(xpts), max(xpts)';
		$m.__track_lines__[308] = 'pyjsdl.draw.py, line 308:\n    ymin, ymax = min(ypts), max(ypts)';
		$m.__track_lines__[309] = 'pyjsdl.draw.py, line 309:\n    if surface._display:';
		$m.__track_lines__[310] = 'pyjsdl.draw.py, line 310:\n    return surface._display._surface_rect.clip( Rect(xmin, ymin, xmax-xmin+1, ymax-ymin+1) )';
		$m.__track_lines__[312] = 'pyjsdl.draw.py, line 312:\n    return surface.get_rect().clip( Rect(xmin, ymin, xmax-xmin+1, ymax-ymin+1) )';
		$m.__track_lines__[314] = 'pyjsdl.draw.py, line 314:\n    def aaline(self, surface, color, point1, point2, blend=1):';
		$m.__track_lines__[318] = 'pyjsdl.draw.py, line 318:\n    rect = self.line(surface, color, point1, point2, blend)';
		$m.__track_lines__[319] = 'pyjsdl.draw.py, line 319:\n    return rect';
		$m.__track_lines__[321] = 'pyjsdl.draw.py, line 321:\n    def aalines(self, surface, color, closed, pointlist, blend=1):';
		$m.__track_lines__[325] = 'pyjsdl.draw.py, line 325:\n    rect = self.lines(surface, color, closed, pointlist, blend)';
		$m.__track_lines__[326] = 'pyjsdl.draw.py, line 326:\n    return rect';
		$m.__track_lines__[328] = 'pyjsdl.draw.py, line 328:\n    def set_return(self, setting):';
		$m.__track_lines__[332] = 'pyjsdl.draw.py, line 332:\n    self._return_rect = setting';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$pyjs['track']['module']='pyjsdl.draw';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_pi'] = $p['___import___']('math.pi', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Rect'] = $p['___import___']('pyjsdl.rect.Rect', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=9;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=12;
		$m['Draw'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.draw';
			$cls_definition['__md5__'] = 'fa4171862edef59f3832df8015485bdf';
			$pyjs['track']['lineno']=28;
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
					if (self.prototype['__md5__'] !== 'fa4171862edef59f3832df8015485bdf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div2,$div1;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':28};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=28;
				$pyjs['track']['lineno']=34;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rad_deg', (typeof ($div1=180.0)==typeof ($div2=$m['_pi']) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))) : $p['setattr'](self, 'rad_deg', (typeof ($div1=180.0)==typeof ($div2=$m['_pi']) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))); 
				$pyjs['track']['lineno']=35;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_return_rect', true) : $p['setattr'](self, '_return_rect', true); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=37;
			$method = $pyjs__bind_method2('rect', function(surface, color, rect, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					rect = arguments[3];
					width = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fa4171862edef59f3832df8015485bdf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][6][1];
				var _rect;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=37;
				$pyjs['track']['lineno']=43;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](rect, 'width');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
					$pyjs['track']['lineno']=44;
					_rect = rect;
				}
				else {
					$pyjs['track']['lineno']=46;
					_rect = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Rect'](rect);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				}
				$pyjs['track']['lineno']=47;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
					$pyjs['track']['lineno']=48;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['setLineWidth'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
					$pyjs['track']['lineno']=49;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['op_eq']($p['getattr'](surface, '_stroke_style'), color));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
						$pyjs['track']['lineno']=50;
						surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_stroke_style', color) : $p['setattr'](surface, '_stroke_style', color); 
						$pyjs['track']['lineno']=51;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['hasattr'](color, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
							$pyjs['track']['lineno']=52;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setStrokeStyle'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=54;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setStrokeStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
						}
					}
					$pyjs['track']['lineno']=55;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['strokeRect']($p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y'), $p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=57;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['op_eq']($p['getattr'](surface, '_fill_style'), color));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
						$pyjs['track']['lineno']=58;
						surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_fill_style', color) : $p['setattr'](surface, '_fill_style', color); 
						$pyjs['track']['lineno']=59;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['hasattr'](color, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
							$pyjs['track']['lineno']=60;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setFillStyle'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=62;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setFillStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
						}
					}
					$pyjs['track']['lineno']=63;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['fillRect']($p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y'), $p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				}
				$pyjs['track']['lineno']=64;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, '_return_rect')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
					$pyjs['track']['lineno']=65;
					$pyjs['track']['lineno']=65;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=66;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](surface, '_display'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
					$pyjs['track']['lineno']=67;
					$pyjs['track']['lineno']=67;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['_display']['_surface_rect']['clip'](_rect);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=69;
					$pyjs['track']['lineno']=69;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['get_rect']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()['clip'](_rect);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['color'],['rect'],['width', $constant_int_0]]);
			$cls_definition['rect'] = $method;
			$pyjs['track']['lineno']=71;
			$method = $pyjs__bind_method2('circle', function(surface, color, position, radius, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					position = arguments[3];
					radius = arguments[4];
					width = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 5 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fa4171862edef59f3832df8015485bdf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][7][1];
				var $sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$mul10;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=71;
				$pyjs['track']['lineno']=77;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['beginPath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$pyjs['track']['lineno']=78;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['arc'](position['__getitem__']($constant_int_0), position['__getitem__']($constant_int_1), radius, $constant_int_0, (typeof ($mul1=$constant_int_2)==typeof ($mul2=$m['_pi']) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)), false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs['track']['lineno']=79;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) {
					$pyjs['track']['lineno']=80;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['setLineWidth'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
					$pyjs['track']['lineno']=81;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['op_eq']($p['getattr'](surface, '_stroke_style'), color));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
						$pyjs['track']['lineno']=82;
						surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_stroke_style', color) : $p['setattr'](surface, '_stroke_style', color); 
						$pyjs['track']['lineno']=83;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['hasattr'](color, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) {
							$pyjs['track']['lineno']=84;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setStrokeStyle'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=86;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setStrokeStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
						}
					}
					$pyjs['track']['lineno']=87;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['stroke']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=89;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['op_eq']($p['getattr'](surface, '_fill_style'), color));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
						$pyjs['track']['lineno']=90;
						surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_fill_style', color) : $p['setattr'](surface, '_fill_style', color); 
						$pyjs['track']['lineno']=91;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['hasattr'](color, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()) {
							$pyjs['track']['lineno']=92;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setFillStyle'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=94;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setFillStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
						}
					}
					$pyjs['track']['lineno']=95;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['fill']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				}
				$pyjs['track']['lineno']=96;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, '_return_rect')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()) {
					$pyjs['track']['lineno']=97;
					$pyjs['track']['lineno']=97;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=98;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](surface, '_display'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
					$pyjs['track']['lineno']=99;
					$pyjs['track']['lineno']=99;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['_display']['_surface_rect']['clip']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Rect']($p['__op_sub']($sub1=position['__getitem__']($constant_int_0),$sub2=radius), $p['__op_sub']($sub3=position['__getitem__']($constant_int_1),$sub4=radius), (typeof ($mul3=$constant_int_2)==typeof ($mul4=radius) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4)), (typeof ($mul5=$constant_int_2)==typeof ($mul6=radius) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=101;
					$pyjs['track']['lineno']=101;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['get_rect']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()['clip']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Rect']($p['__op_sub']($sub5=position['__getitem__']($constant_int_0),$sub6=radius), $p['__op_sub']($sub7=position['__getitem__']($constant_int_1),$sub8=radius), (typeof ($mul7=$constant_int_2)==typeof ($mul8=radius) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8)), (typeof ($mul9=$constant_int_2)==typeof ($mul10=radius) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['color'],['position'],['radius'],['width', $constant_int_0]]);
			$cls_definition['circle'] = $method;
			$pyjs['track']['lineno']=103;
			$method = $pyjs__bind_method2('ellipse', function(surface, color, rect, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					rect = arguments[3];
					width = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fa4171862edef59f3832df8015485bdf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][6][1];
				var radius,$div14,$div10,$div11,$div12,$div13,$div8,$div9,$div3,$div6,$div7,$div4,$div5,_rect,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,$add2,$add3,$add1,$add4;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':103};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=103;
				$pyjs['track']['lineno']=109;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](rect, 'width');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
					$pyjs['track']['lineno']=110;
					_rect = rect;
				}
				else {
					$pyjs['track']['lineno']=112;
					_rect = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Rect'](rect);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
				}
				$pyjs['track']['lineno']=113;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['saveContext']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				$pyjs['track']['lineno']=114;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['translate']($p['__op_add']($add1=$p['getattr'](_rect, 'x'),$add2=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($div3=$p['getattr'](_rect, 'width'))==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()), $p['__op_add']($add3=$p['getattr'](_rect, 'y'),$add4=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($div5=$p['getattr'](_rect, 'height'))==typeof ($div6=$constant_int_2) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				$pyjs['track']['lineno']=115;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](((($p['cmp']($p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height')))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()) {
					$pyjs['track']['lineno']=116;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['scale']((typeof ($div7=$p['getattr'](_rect, 'width'))==typeof ($div8=(typeof ($mul11=$p['getattr'](_rect, 'height'))==typeof ($mul12=1.0) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12))) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8)), $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
					$pyjs['track']['lineno']=117;
					radius = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div9=$p['getattr'](_rect, 'height'))==typeof ($div10=$constant_int_2) && typeof $div9=='number' && $div10 !== 0?
						$div9/$div10:
						$p['op_div']($div9,$div10)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=119;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['scale']($constant_int_1, (typeof ($div11=$p['getattr'](_rect, 'height'))==typeof ($div12=(typeof ($mul13=$p['getattr'](_rect, 'width'))==typeof ($mul14=1.0) && typeof $mul13=='number'?
						$mul13*$mul14:
						$p['op_mul']($mul13,$mul14))) && typeof $div11=='number' && $div12 !== 0?
						$div11/$div12:
						$p['op_div']($div11,$div12)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
					$pyjs['track']['lineno']=120;
					radius = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div13=$p['getattr'](_rect, 'width'))==typeof ($div14=$constant_int_2) && typeof $div13=='number' && $div14 !== 0?
						$div13/$div14:
						$p['op_div']($div13,$div14)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
				}
				$pyjs['track']['lineno']=121;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['beginPath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
				$pyjs['track']['lineno']=122;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['arc']($constant_int_0, $constant_int_0, radius, $constant_int_0, (typeof ($mul15=$constant_int_2)==typeof ($mul16=$m['_pi']) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)), false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
				$pyjs['track']['lineno']=123;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()) {
					$pyjs['track']['lineno']=124;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['setLineWidth'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
					$pyjs['track']['lineno']=125;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['op_eq']($p['getattr'](surface, '_stroke_style'), color));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()) {
						$pyjs['track']['lineno']=126;
						surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_stroke_style', color) : $p['setattr'](surface, '_stroke_style', color); 
						$pyjs['track']['lineno']=127;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['hasattr'](color, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
							$pyjs['track']['lineno']=128;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setStrokeStyle'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=130;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setStrokeStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
						}
					}
					$pyjs['track']['lineno']=131;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['stroke']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=133;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['op_eq']($p['getattr'](surface, '_fill_style'), color));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
						$pyjs['track']['lineno']=134;
						surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_fill_style', color) : $p['setattr'](surface, '_fill_style', color); 
						$pyjs['track']['lineno']=135;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['hasattr'](color, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()) {
							$pyjs['track']['lineno']=136;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setFillStyle'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=138;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setFillStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
						}
					}
					$pyjs['track']['lineno']=139;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['fill']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				}
				$pyjs['track']['lineno']=140;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['restoreContext']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
				$pyjs['track']['lineno']=141;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, '_return_rect')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()) {
					$pyjs['track']['lineno']=142;
					$pyjs['track']['lineno']=142;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=143;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](surface, '_display'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()) {
					$pyjs['track']['lineno']=144;
					$pyjs['track']['lineno']=144;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['_display']['_surface_rect']['clip'](_rect);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=146;
					$pyjs['track']['lineno']=146;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['get_rect']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()['clip'](_rect);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['color'],['rect'],['width', $constant_int_0]]);
			$cls_definition['ellipse'] = $method;
			$pyjs['track']['lineno']=148;
			$method = $pyjs__bind_method2('arc', function(surface, color, rect, start_angle, stop_angle, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 5 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					rect = arguments[3];
					start_angle = arguments[4];
					stop_angle = arguments[5];
					width = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 6 || arguments['length'] > 7)) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fa4171862edef59f3832df8015485bdf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][8][1];
				var radius,$div32,$div30,$div31,$div18,$div19,$div15,$div17,$mul20,$div21,$mul17,$add10,$add11,$add12,_rect,$div20,$div23,$div22,$div25,$div24,$div27,$div26,$div29,$div28,$mul19,$mul18,$add6,$add7,$add5,$add8,$add9,$div16;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':148};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=148;
				$pyjs['track']['lineno']=154;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['hasattr'](rect, 'width');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})()) {
					$pyjs['track']['lineno']=155;
					_rect = rect;
				}
				else {
					$pyjs['track']['lineno']=157;
					_rect = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Rect'](rect);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
				}
				$pyjs['track']['lineno']=158;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()) {
					$pyjs['track']['lineno']=159;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['beginPath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
					$pyjs['track']['lineno']=160;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['arc']($p['__op_add']($add5=$p['getattr'](_rect, 'x'),$add6=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div15=$p['getattr'](_rect, 'width'))==typeof ($div16=$constant_int_2) && typeof $div15=='number' && $div16 !== 0?
						$div15/$div16:
						$p['op_div']($div15,$div16)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})()), $p['__op_add']($add7=$p['getattr'](_rect, 'y'),$add8=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div17=$p['getattr'](_rect, 'height'))==typeof ($div18=$constant_int_2) && typeof $div17=='number' && $div18 !== 0?
						$div17/$div18:
						$p['op_div']($div17,$div18)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div19=$p['getattr'](_rect, 'width'))==typeof ($div20=$constant_int_2) && typeof $div19=='number' && $div20 !== 0?
						$div19/$div20:
						$p['op_div']($div19,$div20)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})(), (typeof ($usub1=start_angle)=='number'?
						-$usub1:
						$p['op_usub']($usub1)), (typeof ($usub2=stop_angle)=='number'?
						-$usub2:
						$p['op_usub']($usub2)), true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
					$pyjs['track']['lineno']=161;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})()) {
						$pyjs['track']['lineno']=162;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['setLineWidth'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
						$pyjs['track']['lineno']=163;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['op_eq']($p['getattr'](surface, '_stroke_style'), color));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()) {
							$pyjs['track']['lineno']=164;
							surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_stroke_style', color) : $p['setattr'](surface, '_stroke_style', color); 
							$pyjs['track']['lineno']=165;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['hasattr'](color, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()) {
								$pyjs['track']['lineno']=166;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return surface['setStrokeStyle'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
							}
							else {
								$pyjs['track']['lineno']=168;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return surface['setStrokeStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
							}
						}
						$pyjs['track']['lineno']=169;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['stroke']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=171;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['closePath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
						$pyjs['track']['lineno']=172;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['op_eq']($p['getattr'](surface, '_fill_style'), color));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()) {
							$pyjs['track']['lineno']=173;
							surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_fill_style', color) : $p['setattr'](surface, '_fill_style', color); 
							$pyjs['track']['lineno']=174;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['hasattr'](color, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()) {
								$pyjs['track']['lineno']=175;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return surface['setFillStyle'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
							}
							else {
								$pyjs['track']['lineno']=177;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return surface['setFillStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
							}
						}
						$pyjs['track']['lineno']=178;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['fill']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=180;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['saveContext']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
					$pyjs['track']['lineno']=181;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['translate']($p['__op_add']($add9=$p['getattr'](_rect, 'x'),$add10=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div21=$p['getattr'](_rect, 'width'))==typeof ($div22=$constant_int_2) && typeof $div21=='number' && $div22 !== 0?
						$div21/$div22:
						$p['op_div']($div21,$div22)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})()), $p['__op_add']($add11=$p['getattr'](_rect, 'y'),$add12=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div23=$p['getattr'](_rect, 'height'))==typeof ($div24=$constant_int_2) && typeof $div23=='number' && $div24 !== 0?
						$div23/$div24:
						$p['op_div']($div23,$div24)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
					$pyjs['track']['lineno']=182;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](((($p['cmp']($p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height')))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})()) {
						$pyjs['track']['lineno']=183;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['scale']((typeof ($div25=$p['getattr'](_rect, 'width'))==typeof ($div26=(typeof ($mul17=$p['getattr'](_rect, 'height'))==typeof ($mul18=1.0) && typeof $mul17=='number'?
							$mul17*$mul18:
							$p['op_mul']($mul17,$mul18))) && typeof $div25=='number' && $div26 !== 0?
							$div25/$div26:
							$p['op_div']($div25,$div26)), $constant_int_1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
						$pyjs['track']['lineno']=184;
						radius = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['int']((typeof ($div27=$p['getattr'](_rect, 'height'))==typeof ($div28=$constant_int_2) && typeof $div27=='number' && $div28 !== 0?
							$div27/$div28:
							$p['op_div']($div27,$div28)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=186;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['scale']($constant_int_1, (typeof ($div29=$p['getattr'](_rect, 'height'))==typeof ($div30=(typeof ($mul19=$p['getattr'](_rect, 'width'))==typeof ($mul20=1.0) && typeof $mul19=='number'?
							$mul19*$mul20:
							$p['op_mul']($mul19,$mul20))) && typeof $div29=='number' && $div30 !== 0?
							$div29/$div30:
							$p['op_div']($div29,$div30)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
						$pyjs['track']['lineno']=187;
						radius = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['int']((typeof ($div31=$p['getattr'](_rect, 'width'))==typeof ($div32=$constant_int_2) && typeof $div31=='number' && $div32 !== 0?
							$div31/$div32:
							$p['op_div']($div31,$div32)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
					}
					$pyjs['track']['lineno']=188;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['beginPath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
					$pyjs['track']['lineno']=189;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['arc']($constant_int_0, $constant_int_0, radius, (typeof ($usub3=start_angle)=='number'?
						-$usub3:
						$p['op_usub']($usub3)), (typeof ($usub4=stop_angle)=='number'?
						-$usub4:
						$p['op_usub']($usub4)), true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
					$pyjs['track']['lineno']=190;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})()) {
						$pyjs['track']['lineno']=191;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['setLineWidth'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
						$pyjs['track']['lineno']=192;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['op_eq']($p['getattr'](surface, '_stroke_style'), color));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()) {
							$pyjs['track']['lineno']=193;
							surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_stroke_style', color) : $p['setattr'](surface, '_stroke_style', color); 
							$pyjs['track']['lineno']=194;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['hasattr'](color, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()) {
								$pyjs['track']['lineno']=195;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return surface['setStrokeStyle'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
							}
							else {
								$pyjs['track']['lineno']=197;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return surface['setStrokeStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
							}
						}
						$pyjs['track']['lineno']=198;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['stroke']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=200;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['closePath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
						$pyjs['track']['lineno']=201;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['op_eq']($p['getattr'](surface, '_fill_style'), color));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})()) {
							$pyjs['track']['lineno']=202;
							surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_fill_style', color) : $p['setattr'](surface, '_fill_style', color); 
							$pyjs['track']['lineno']=203;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['hasattr'](color, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})()) {
								$pyjs['track']['lineno']=204;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return surface['setFillStyle'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
							}
							else {
								$pyjs['track']['lineno']=206;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return surface['setFillStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
							}
						}
						$pyjs['track']['lineno']=207;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['fill']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
					}
					$pyjs['track']['lineno']=208;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['restoreContext']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
				}
				$pyjs['track']['lineno']=209;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, '_return_rect')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})()) {
					$pyjs['track']['lineno']=210;
					$pyjs['track']['lineno']=210;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=211;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](surface, '_display'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})()) {
					$pyjs['track']['lineno']=212;
					$pyjs['track']['lineno']=212;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['_display']['_surface_rect']['clip'](_rect);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=214;
					$pyjs['track']['lineno']=214;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['get_rect']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})()['clip'](_rect);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['color'],['rect'],['start_angle'],['stop_angle'],['width', $constant_int_1]]);
			$cls_definition['arc'] = $method;
			$pyjs['track']['lineno']=216;
			$method = $pyjs__bind_method2('polygon', function(surface, color, pointlist, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					pointlist = arguments[3];
					width = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fa4171862edef59f3832df8015485bdf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][6][1];
				var point,$iter1_iter,xmin,ymin,ymax,$add20,$sub9,$iter1_array,xpts,$iter1_nextval,$sub13,$sub12,$sub11,$sub10,$sub16,$sub15,$sub14,$add14,$add15,$add16,$add17,$add13,ypts,$add18,$add19,$iter1_type,$iter1_idx,xmax,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':216};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=216;
				$pyjs['track']['lineno']=222;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['beginPath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
				$pyjs['track']['lineno']=223;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(surface, 'moveTo', pointlist['__getitem__']($constant_int_0), null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
				$pyjs['track']['lineno']=224;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__getslice'](pointlist, $constant_int_1, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					point = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=225;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(surface, 'lineTo', point, null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=226;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['closePath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
				$pyjs['track']['lineno']=227;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})()) {
					$pyjs['track']['lineno']=228;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['setLineWidth'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
					$pyjs['track']['lineno']=229;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['op_eq']($p['getattr'](surface, '_stroke_style'), color));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()) {
						$pyjs['track']['lineno']=230;
						surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_stroke_style', color) : $p['setattr'](surface, '_stroke_style', color); 
						$pyjs['track']['lineno']=231;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['hasattr'](color, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})()) {
							$pyjs['track']['lineno']=232;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setStrokeStyle'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=234;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setStrokeStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})();
						}
					}
					$pyjs['track']['lineno']=235;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['stroke']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=237;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['op_eq']($p['getattr'](surface, '_fill_style'), color));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})()) {
						$pyjs['track']['lineno']=238;
						surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_fill_style', color) : $p['setattr'](surface, '_fill_style', color); 
						$pyjs['track']['lineno']=239;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['hasattr'](color, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})()) {
							$pyjs['track']['lineno']=240;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setFillStyle'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=242;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return surface['setFillStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
						}
					}
					$pyjs['track']['lineno']=243;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['fill']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
				}
				$pyjs['track']['lineno']=244;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, '_return_rect')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})()) {
					$pyjs['track']['lineno']=245;
					$pyjs['track']['lineno']=245;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=246;
				xpts = function(){
					var $iter2_nextval,$iter2_type,pt,$iter2_iter,$collcomp1,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return pointlist;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					pt = $iter2_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp1['append'](pt['__getitem__']($constant_int_0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';

	return $collcomp1;}();
				$pyjs['track']['lineno']=247;
				ypts = function(){
					var $iter3_idx,pt,$iter3_nextval,$iter3_array,$collcomp2,$iter3_iter,$iter3_type,$pyjs__trackstack_size_1;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return pointlist;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					pt = $iter3_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp2['append'](pt['__getitem__']($constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';

	return $collcomp2;}();
				$pyjs['track']['lineno']=248;
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['min'](xpts);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['max'](xpts);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})();
				xmin = $tupleassign1[0];
				xmax = $tupleassign1[1];
				$pyjs['track']['lineno']=249;
				var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['min'](ypts);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['max'](ypts);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
				ymin = $tupleassign2[0];
				ymax = $tupleassign2[1];
				$pyjs['track']['lineno']=250;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](surface, '_display'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})()) {
					$pyjs['track']['lineno']=251;
					$pyjs['track']['lineno']=251;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['_display']['_surface_rect']['clip']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Rect'](xmin, ymin, $p['__op_add']($add13=$p['__op_sub']($sub9=xmax,$sub10=xmin),$add14=$constant_int_1), $p['__op_add']($add15=$p['__op_sub']($sub11=ymax,$sub12=ymin),$add16=$constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=253;
					$pyjs['track']['lineno']=253;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['get_rect']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})()['clip']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Rect'](xmin, ymin, $p['__op_add']($add17=$p['__op_sub']($sub13=xmax,$sub14=xmin),$add18=$constant_int_1), $p['__op_add']($add19=$p['__op_sub']($sub15=ymax,$sub16=ymin),$add20=$constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['color'],['pointlist'],['width', $constant_int_0]]);
			$cls_definition['polygon'] = $method;
			$pyjs['track']['lineno']=255;
			$method = $pyjs__bind_method2('line', function(surface, color, point1, point2, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					point1 = arguments[3];
					point2 = arguments[4];
					width = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 5 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fa4171862edef59f3832df8015485bdf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][7][1];
				var $sub22,$sub23,$sub20,$sub21,$sub24,$sub18,xmin,ymin,$add28,ymax,$add21,$add22,$add25,$add24,$add27,$add26,$sub19,xpts,$sub17,ypts,xmax,$add23;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':255};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=255;
				$pyjs['track']['lineno']=261;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['beginPath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})();
				$pyjs['track']['lineno']=262;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(surface, 'moveTo', point1, null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
				$pyjs['track']['lineno']=263;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(surface, 'lineTo', point2, null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})();
				$pyjs['track']['lineno']=264;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['setLineWidth'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})();
				$pyjs['track']['lineno']=265;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['op_eq']($p['getattr'](surface, '_stroke_style'), color));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})()) {
					$pyjs['track']['lineno']=266;
					surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_stroke_style', color) : $p['setattr'](surface, '_stroke_style', color); 
					$pyjs['track']['lineno']=267;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['hasattr'](color, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})()) {
						$pyjs['track']['lineno']=268;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['setStrokeStyle'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=270;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['setStrokeStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
					}
				}
				$pyjs['track']['lineno']=271;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['stroke']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})();
				$pyjs['track']['lineno']=272;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, '_return_rect')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})()) {
					$pyjs['track']['lineno']=273;
					$pyjs['track']['lineno']=273;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=274;
				xpts = function(){
					var pt,$iter4_nextval,$collcomp3,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
	$collcomp3 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([point1, point2]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					pt = $iter4_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp3['append'](pt['__getitem__']($constant_int_0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';

	return $collcomp3;}();
				$pyjs['track']['lineno']=275;
				ypts = function(){
					var $iter5_nextval,pt,$iter5_idx,$collcomp4,$iter5_iter,$iter5_array,$iter5_type,$pyjs__trackstack_size_1;
	$collcomp4 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([point1, point2]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					pt = $iter5_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp4['append'](pt['__getitem__']($constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';

	return $collcomp4;}();
				$pyjs['track']['lineno']=276;
				var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['min'](xpts);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['max'](xpts);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
				xmin = $tupleassign3[0];
				xmax = $tupleassign3[1];
				$pyjs['track']['lineno']=277;
				var $tupleassign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['min'](ypts);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['max'](ypts);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})();
				ymin = $tupleassign4[0];
				ymax = $tupleassign4[1];
				$pyjs['track']['lineno']=278;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](surface, '_display'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})()) {
					$pyjs['track']['lineno']=279;
					$pyjs['track']['lineno']=279;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['_display']['_surface_rect']['clip']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Rect'](xmin, ymin, $p['__op_add']($add21=$p['__op_sub']($sub17=xmax,$sub18=xmin),$add22=$constant_int_1), $p['__op_add']($add23=$p['__op_sub']($sub19=ymax,$sub20=ymin),$add24=$constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=281;
					$pyjs['track']['lineno']=281;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['get_rect']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})()['clip']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Rect'](xmin, ymin, $p['__op_add']($add25=$p['__op_sub']($sub21=xmax,$sub22=xmin),$add26=$constant_int_1), $p['__op_add']($add27=$p['__op_sub']($sub23=ymax,$sub24=ymin),$add28=$constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['color'],['point1'],['point2'],['width', $constant_int_1]]);
			$cls_definition['line'] = $method;
			$pyjs['track']['lineno']=283;
			$method = $pyjs__bind_method2('lines', function(surface, color, closed, pointlist, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					closed = arguments[3];
					pointlist = arguments[4];
					width = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 5 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fa4171862edef59f3832df8015485bdf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][7][1];
				var $sub26,$sub27,point,$sub28,$sub29,$sub32,xmin,$iter6_iter,ymin,$iter6_nextval,$add29,ymax,$sub25,$iter6_type,$sub31,$sub30,xpts,$iter6_idx,$iter6_array,ypts,$add32,$add33,$add30,$add31,$add36,$add34,$add35,xmax,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':283};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=283;
				$pyjs['track']['lineno']=289;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['beginPath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})();
				$pyjs['track']['lineno']=290;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(surface, 'moveTo', pointlist['__getitem__']($constant_int_0), null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})();
				$pyjs['track']['lineno']=291;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__getslice'](pointlist, $constant_int_1, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					point = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=292;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(surface, 'lineTo', point, null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=293;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](closed);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})()) {
					$pyjs['track']['lineno']=294;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['closePath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})();
				}
				$pyjs['track']['lineno']=295;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['setLineWidth'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})();
				$pyjs['track']['lineno']=296;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['op_eq']($p['getattr'](surface, '_stroke_style'), color));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})()) {
					$pyjs['track']['lineno']=297;
					surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_stroke_style', color) : $p['setattr'](surface, '_stroke_style', color); 
					$pyjs['track']['lineno']=298;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['hasattr'](color, 'a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})()) {
						$pyjs['track']['lineno']=299;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['setStrokeStyle'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=301;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return surface['setStrokeStyle']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['Color'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})();
					}
				}
				$pyjs['track']['lineno']=302;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return surface['stroke']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})();
				$pyjs['track']['lineno']=303;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, '_return_rect')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})()) {
					$pyjs['track']['lineno']=304;
					$pyjs['track']['lineno']=304;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=305;
				xpts = function(){
					var pt,$iter7_nextval,$iter7_iter,$collcomp5,$iter7_array,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
	$collcomp5 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return pointlist;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})();
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					pt = $iter7_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp5['append'](pt['__getitem__']($constant_int_0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';

	return $collcomp5;}();
				$pyjs['track']['lineno']=306;
				ypts = function(){
					var $iter8_idx,pt,$collcomp6,$iter8_type,$iter8_array,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1;
	$collcomp6 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return pointlist;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})();
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					pt = $iter8_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp6['append'](pt['__getitem__']($constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';

	return $collcomp6;}();
				$pyjs['track']['lineno']=307;
				var $tupleassign5 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['min'](xpts);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['max'](xpts);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})();
				xmin = $tupleassign5[0];
				xmax = $tupleassign5[1];
				$pyjs['track']['lineno']=308;
				var $tupleassign6 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['min'](ypts);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['max'](ypts);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})();
				ymin = $tupleassign6[0];
				ymax = $tupleassign6[1];
				$pyjs['track']['lineno']=309;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](surface, '_display'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})()) {
					$pyjs['track']['lineno']=310;
					$pyjs['track']['lineno']=310;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['_display']['_surface_rect']['clip']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Rect'](xmin, ymin, $p['__op_add']($add29=$p['__op_sub']($sub25=xmax,$sub26=xmin),$add30=$constant_int_1), $p['__op_add']($add31=$p['__op_sub']($sub27=ymax,$sub28=ymin),$add32=$constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=312;
					$pyjs['track']['lineno']=312;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return surface['get_rect']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})()['clip']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Rect'](xmin, ymin, $p['__op_add']($add33=$p['__op_sub']($sub29=xmax,$sub30=xmin),$add34=$constant_int_1), $p['__op_add']($add35=$p['__op_sub']($sub31=ymax,$sub32=ymin),$add36=$constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['color'],['closed'],['pointlist'],['width', $constant_int_1]]);
			$cls_definition['lines'] = $method;
			$pyjs['track']['lineno']=314;
			$method = $pyjs__bind_method2('aaline', function(surface, color, point1, point2, blend) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					point1 = arguments[3];
					point2 = arguments[4];
					blend = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 5 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fa4171862edef59f3832df8015485bdf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof blend == 'undefined') blend=arguments['callee']['__args__'][7][1];
				var rect;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':314};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=314;
				$pyjs['track']['lineno']=318;
				rect = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['line'](surface, color, point1, point2, blend);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})();
				$pyjs['track']['lineno']=319;
				$pyjs['track']['lineno']=319;
				var $pyjs__ret = rect;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['color'],['point1'],['point2'],['blend', $constant_int_1]]);
			$cls_definition['aaline'] = $method;
			$pyjs['track']['lineno']=321;
			$method = $pyjs__bind_method2('aalines', function(surface, color, closed, pointlist, blend) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					closed = arguments[3];
					pointlist = arguments[4];
					blend = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 5 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fa4171862edef59f3832df8015485bdf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof blend == 'undefined') blend=arguments['callee']['__args__'][7][1];
				var rect;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':321};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=321;
				$pyjs['track']['lineno']=325;
				rect = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['lines'](surface, color, closed, pointlist, blend);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})();
				$pyjs['track']['lineno']=326;
				$pyjs['track']['lineno']=326;
				var $pyjs__ret = rect;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['color'],['closed'],['pointlist'],['blend', $constant_int_1]]);
			$cls_definition['aalines'] = $method;
			$pyjs['track']['lineno']=328;
			$method = $pyjs__bind_method2('set_return', function(setting) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					setting = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fa4171862edef59f3832df8015485bdf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':328};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=328;
				$pyjs['track']['lineno']=332;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_return_rect', setting) : $p['setattr'](self, '_return_rect', setting); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['setting']]);
			$cls_definition['set_return'] = $method;
			$pyjs['track']['lineno']=12;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Draw', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.draw */


/* end module: pyjsdl.draw */


/*
PYJS_DEPS: ['math.pi', 'math', 'pyjsdl.rect.Rect', 'pyjsdl', 'pyjsdl.rect', 'pyjsdl.surface.Surface', 'pyjsdl.surface', 'pyjsdl.color.Color', 'pyjsdl.color']
*/
