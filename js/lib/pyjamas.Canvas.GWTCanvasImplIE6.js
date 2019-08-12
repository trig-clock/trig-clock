/* start module: pyjamas.Canvas.GWTCanvasImplIE6 */
$pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.GWTCanvasImplIE6>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.GWTCanvasImplIE6';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['GWTCanvasImplIE6'] = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 1:\n    """';
		$m.__track_lines__[18] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 18:\n    import math';
		$m.__track_lines__[20] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 20:\n    from pyjamas import DOM';
		$m.__track_lines__[21] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 21:\n    from __pyjamas__ import JS, doc';
		$m.__track_lines__[22] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 22:\n    from pyjamas.ui.Widget import Widget';
		$m.__track_lines__[24] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 24:\n    from pyjamas import Window';
		$m.__track_lines__[27] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 27:\n    from pyjamas.Canvas.GWTCanvasImplIEConsts import BUTT, DESTINATION_OVER, SOURCE_OVER';
		$m.__track_lines__[28] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 28:\n    from pyjamas.Canvas import GWTCanvasConsts';
		$m.__track_lines__[29] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 29:\n    from pyjamas.Canvas.JSOStack import JSOStack';
		$m.__track_lines__[30] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 30:\n    from pyjamas.Canvas import PathElement';
		$m.__track_lines__[31] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 31:\n    from pyjamas.Canvas.VMLContext import VMLContext';
		$m.__track_lines__[32] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 32:\n    from pyjamas.Canvas.VMLContext import VMLStyle';
		$m.__track_lines__[33] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 33:\n    from pyjamas.Canvas.Color import Color';
		$m.__track_lines__[34] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 34:\n    from pyjamas.Canvas.CanvasGradientImplIE6 import CanvasGradientImplIE6';
		$m.__track_lines__[36] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 36:\n    def addNamespace():';
		$m.__track_lines__[37] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 37:\n    JS("""';
		$m.__track_lines__[45] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 45:\n    """*';
		$m.__track_lines__[49] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 49:\n    class GWTCanvasImplIE6:';
		$m.__track_lines__[51] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 51:\n    def __init__(self):';
		$m.__track_lines__[52] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 52:\n    try:';
		$m.__track_lines__[53] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 53:\n    ns = doc().namespaces.item("v")';
		$m.__track_lines__[55] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 55:\n    doc().namespaces.add("v", "urn:schemas-microsoft-com:vml")';
		$m.__track_lines__[56] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 56:\n    doc().createStyleSheet().cssText = "v\\\\:*{behavior:url(#default#VML);}"';
		$m.__track_lines__[60] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 60:\n    """*';
		$m.__track_lines__[65] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 65:\n    self.pathStr = JSOStack()';
		$m.__track_lines__[67] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 67:\n    """*';
		$m.__track_lines__[71] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 71:\n    self.contextStack = []';
		$m.__track_lines__[73] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 73:\n    self.currentX = 0';
		$m.__track_lines__[75] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 75:\n    self.currentY = 0';
		$m.__track_lines__[77] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 77:\n    self.parentElement = None';
		$m.__track_lines__[79] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 79:\n    self.parentHeight = 0';
		$m.__track_lines__[81] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 81:\n    self.parentWidth = 0';
		$m.__track_lines__[85] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 85:\n    def arc(self, x, y, radius, startAngle, endAngle, anticlockwise):';
		$m.__track_lines__[86] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 86:\n    self.pathStr.append(PathElement.arc(x, y, radius, startAngle, endAngle,';
		$m.__track_lines__[90] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 90:\n    def beginPath(self):';
		$m.__track_lines__[91] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 91:\n    self.pathStr.clear()';
		$m.__track_lines__[94] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 94:\n    def clear(self, width=0, height=0):';
		$m.__track_lines__[95] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 95:\n    self.pathStr.clear()';
		$m.__track_lines__[96] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 96:\n    DOM.setInnerHTML(self.parentElement, "")';
		$m.__track_lines__[98] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 98:\n    def closePath(self):';
		$m.__track_lines__[99] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 99:\n    self.pathStr.append(PathElement.closePath())';
		$m.__track_lines__[102] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 102:\n    def createElement(self):';
		$m.__track_lines__[103] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 103:\n    self.context = VMLContext()';
		$m.__track_lines__[104] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 104:\n    self.matrix = self.context.matrix';
		$m.__track_lines__[105] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 105:\n    return self.createParentElement()';
		$m.__track_lines__[108] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 108:\n    def createParentElement(self):';
		$m.__track_lines__[109] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 109:\n    self.parentElement = DOM.createElement("div")';
		$m.__track_lines__[110] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 110:\n    DOM.setStyleAttribute(self.parentElement, "overflow", "hidden")';
		$m.__track_lines__[111] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 111:\n    return self.parentElement';
		$m.__track_lines__[113] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 113:\n    def setFont(self, font):';
		$m.__track_lines__[114] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 114:\n    pass';
		$m.__track_lines__[118] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 118:\n    def cubicCurveTo(self, cp1x, cp1y, cp2x, cp2y, x, y):';
		$m.__track_lines__[119] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 119:\n    self.pathStr.append(PathElement.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y, self))';
		$m.__track_lines__[120] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 120:\n    self.currentX = x';
		$m.__track_lines__[121] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 121:\n    self.currentY = y';
		$m.__track_lines__[124] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 124:\n    def drawImage(self, img, *args):';
		$m.__track_lines__[126] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 126:\n    if isinstance(img, Widget):';
		$m.__track_lines__[127] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 127:\n    img = img.getElement()';
		$m.__track_lines__[128] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 128:\n    fullWidth = img.width';
		$m.__track_lines__[129] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 129:\n    fullHeight = img.height';
		$m.__track_lines__[131] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 131:\n    if len(args) == 8:';
		$m.__track_lines__[132] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 132:\n    sourceX = args[0]';
		$m.__track_lines__[133] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 133:\n    sourceY = args[1]';
		$m.__track_lines__[134] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 134:\n    sourceWidth = args[2]';
		$m.__track_lines__[135] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 135:\n    sourceHeight = args[3]';
		$m.__track_lines__[136] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 136:\n    destX = args[4]';
		$m.__track_lines__[137] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 137:\n    destY = args[5]';
		$m.__track_lines__[138] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 138:\n    destWidth = args[6]';
		$m.__track_lines__[139] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 139:\n    destHeight = args[7]';
		$m.__track_lines__[141] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 141:\n    sourceX = 0';
		$m.__track_lines__[142] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 142:\n    sourceY = 0';
		$m.__track_lines__[143] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 143:\n    sourceWidth = fullWidth';
		$m.__track_lines__[144] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 144:\n    sourceHeight = fullHeight';
		$m.__track_lines__[145] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 145:\n    destX = args[0]';
		$m.__track_lines__[146] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 146:\n    destY = args[1]';
		$m.__track_lines__[147] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 147:\n    destWidth = args[2]';
		$m.__track_lines__[148] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 148:\n    destHeight = args[3]';
		$m.__track_lines__[150] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 150:\n    sourceX = 0';
		$m.__track_lines__[151] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 151:\n    sourceY = 0';
		$m.__track_lines__[152] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 152:\n    sourceWidth = fullWidth';
		$m.__track_lines__[153] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 153:\n    sourceHeight = fullHeight';
		$m.__track_lines__[154] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 154:\n    destX = args[0]';
		$m.__track_lines__[155] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 155:\n    destY = args[1]';
		$m.__track_lines__[156] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 156:\n    destWidth = fullWidth';
		$m.__track_lines__[157] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 157:\n    destHeight = fullHeight';
		$m.__track_lines__[159] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 159:\n    vmlStr = [] # JSOStack.getScratchArray()';
		$m.__track_lines__[161] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 161:\n    vmlStr.append("<v:group style=\\"position:absolute;width:10;height:10;")';
		$m.__track_lines__[162] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 162:\n    dX = self.getCoordX(self.matrix, destX, destY)';
		$m.__track_lines__[163] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 163:\n    dY = self.getCoordY(self.matrix, destX, destY)';
		$m.__track_lines__[167] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 167:\n    if self.context.matrix[0] != 1  or  self.context.matrix[1] != 0:';
		$m.__track_lines__[170] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 170:\n    vmlStr.append("padding-right:")';
		$m.__track_lines__[171] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 171:\n    vmlStr.append(str(self.parentWidth) + "px;")';
		$m.__track_lines__[172] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 172:\n    vmlStr.append("padding-bottom:")';
		$m.__track_lines__[173] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 173:\n    vmlStr.append(str(self.parentHeight) + "px;")';
		$m.__track_lines__[174] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 174:\n    vmlStr.append("filter:progid:DXImageTransform.Microsoft.Matrix(M11=\'")';
		$m.__track_lines__[175] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 175:\n    vmlStr.append("" + str(self.matrix[0]))';
		$m.__track_lines__[176] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 176:\n    vmlStr.append("\',")';
		$m.__track_lines__[177] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 177:\n    vmlStr.append("M12=\'")';
		$m.__track_lines__[178] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 178:\n    vmlStr.append("" + str(self.matrix[1]))';
		$m.__track_lines__[179] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 179:\n    vmlStr.append("\',")';
		$m.__track_lines__[180] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 180:\n    vmlStr.append("M21=\'")';
		$m.__track_lines__[181] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 181:\n    vmlStr.append(str(self.matrix[3]))';
		$m.__track_lines__[182] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 182:\n    vmlStr.append("\',")';
		$m.__track_lines__[183] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 183:\n    vmlStr.append("M22=\'")';
		$m.__track_lines__[184] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 184:\n    vmlStr.append(str(self.matrix[4]))';
		$m.__track_lines__[185] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 185:\n    vmlStr.append("\',")';
		$m.__track_lines__[186] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 186:\n    vmlStr.append("Dx=\'")';
		$m.__track_lines__[187] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 187:\n    vmlStr.append(str(math.floor(((dX / 10)))))';
		$m.__track_lines__[188] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 188:\n    vmlStr.append("\',")';
		$m.__track_lines__[189] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 189:\n    vmlStr.append("Dy=\'")';
		$m.__track_lines__[190] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 190:\n    vmlStr.append(str(math.floor(((dY / 10)))))';
		$m.__track_lines__[191] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 191:\n    vmlStr.append("\', SizingMethod=\'clip\');")';
		$m.__track_lines__[194] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 194:\n    vmlStr.append("left:")';
		$m.__track_lines__[195] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 195:\n    vmlStr.append("%dpx;" % int(dX / 10))';
		$m.__track_lines__[196] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 196:\n    vmlStr.append("top:")';
		$m.__track_lines__[197] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 197:\n    vmlStr.append("%dpx" % int(dY / 10))';
		$m.__track_lines__[200] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 200:\n    vmlStr.append("\\" coordsize=\\"100,100\\" coordorigin=\\"0,0\\"><v:image src=\\"")';
		$m.__track_lines__[201] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 201:\n    vmlStr.append(DOM.getAttribute(img, "src"))';
		$m.__track_lines__[202] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 202:\n    vmlStr.append("\\" style=\\"")';
		$m.__track_lines__[204] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 204:\n    vmlStr.append("width:")';
		$m.__track_lines__[205] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 205:\n    vmlStr.append(str(int(destWidth * 10)))';
		$m.__track_lines__[206] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 206:\n    vmlStr.append(";height:")';
		$m.__track_lines__[207] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 207:\n    vmlStr.append(str(int(destHeight * 10)))';
		$m.__track_lines__[208] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 208:\n    vmlStr.append(";\\" cropleft=\\"")';
		$m.__track_lines__[209] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 209:\n    vmlStr.append(str(sourceX / fullWidth))';
		$m.__track_lines__[210] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 210:\n    vmlStr.append("\\" croptop=\\"")';
		$m.__track_lines__[211] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 211:\n    vmlStr.append(str(sourceY / fullHeight))';
		$m.__track_lines__[212] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 212:\n    vmlStr.append("\\" cropright=\\"")';
		$m.__track_lines__[213] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 213:\n    vmlStr.append(str((fullWidth - sourceX - sourceWidth) / fullWidth))';
		$m.__track_lines__[214] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 214:\n    vmlStr.append("\\" cropbottom=\\"")';
		$m.__track_lines__[215] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 215:\n    vmlStr.append(str((fullHeight - sourceY - sourceHeight) / fullHeight))';
		$m.__track_lines__[216] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 216:\n    vmlStr.append("\\"/></v:group>")';
		$m.__track_lines__[218] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 218:\n    self.insert("BeforeEnd", \'\'.join(vmlStr))';
		$m.__track_lines__[220] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 220:\n    def appendGradient(self, style, shapeStr):';
		$m.__track_lines__[221] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 221:\n    colorStops = style.gradient.colorStops';
		$m.__track_lines__[222] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 222:\n    length = len(colorStops)';
		$m.__track_lines__[224] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 224:\n    shapeStr.append("\\" color=\\"")';
		$m.__track_lines__[225] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 225:\n    shapeStr.append(str(colorStops[0].color))';
		$m.__track_lines__[226] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 226:\n    shapeStr.append("\\" color2=\\"")';
		$m.__track_lines__[227] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 227:\n    shapeStr.append(str(colorStops[length - 1].color))';
		$m.__track_lines__[228] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 228:\n    shapeStr.append("\\" type=\\"")';
		$m.__track_lines__[229] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 229:\n    shapeStr.append(style.gradient.type)';
		$m.__track_lines__[231] = "pyjamas.Canvas.GWTCanvasImplIE6.py, line 231:\n    if style.gradient.type == 'gradient':";
		$m.__track_lines__[237] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 237:\n    colors = ""';
		$m.__track_lines__[238] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 238:\n    for i in range(1, len(colorStops)):';
		$m.__track_lines__[239] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 239:\n    cs = colorStops[i]';
		$m.__track_lines__[241] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 241:\n    stopPosn = cs.offset';
		$m.__track_lines__[242] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 242:\n    colors += "%d%%" % (int(stopPosn * 100 ))';
		$m.__track_lines__[243] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 243:\n    colors += str(cs.color) + ","';
		$m.__track_lines__[245] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 245:\n    shapeStr.append("\\" colors=\\"")';
		$m.__track_lines__[246] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 246:\n    shapeStr.append(colors)';
		$m.__track_lines__[249] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 249:\n    """';
		$m.__track_lines__[255] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 255:\n    minX = self.pathStr.getMinCoordX()';
		$m.__track_lines__[256] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 256:\n    maxX = self.pathStr.getMaxCoordX()';
		$m.__track_lines__[257] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 257:\n    minY = self.pathStr.getMinCoordY()';
		$m.__track_lines__[258] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 258:\n    maxY = self.pathStr.getMaxCoordY()';
		$m.__track_lines__[260] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 260:\n    dx = maxX - minX';
		$m.__track_lines__[261] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 261:\n    dy = maxY - minY';
		$m.__track_lines__[263] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 263:\n    fillLength = math.sqrt((dx * dx) + (dy * dy))';
		$m.__track_lines__[274] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 274:\n    focusX = 50';
		$m.__track_lines__[275] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 275:\n    focusY = 50';
		$m.__track_lines__[278] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 278:\n    colors = ""';
		$m.__track_lines__[279] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 279:\n    for i in range(1, len(colorStops)):';
		$m.__track_lines__[280] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 280:\n    cs = colorStops[i]';
		$m.__track_lines__[282] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 282:\n    stopPosn = cs.offset';
		$m.__track_lines__[284] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 284:\n    colors += "%d%%" % (int(stopPosn * 100 ))';
		$m.__track_lines__[285] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 285:\n    colors += str(cs.color) + ","';
		$m.__track_lines__[287] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 287:\n    shapeStr.append("\\" colors=\\"")';
		$m.__track_lines__[288] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 288:\n    shapeStr.append(colors)';
		$m.__track_lines__[290] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 290:\n    shapeStr.append("\\" focusposition=\\"")';
		$m.__track_lines__[291] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 291:\n    shapeStr.append(str(focusX))';
		$m.__track_lines__[292] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 292:\n    shapeStr.append("%,")';
		$m.__track_lines__[293] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 293:\n    shapeStr.append(str(focusY))';
		$m.__track_lines__[294] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 294:\n    shapeStr.append("%,")';
		$m.__track_lines__[296] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 296:\n    shapeStr.append("\\" angle=\\"")';
		$m.__track_lines__[297] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 297:\n    shapeStr.append(str(style.gradient.angle))';
		$m.__track_lines__[299] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 299:\n    def appendStroke(self, shapeStr):';
		$m.__track_lines__[301] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 301:\n    shapeStr.append("<v:stroke opacity=\\"")';
		$m.__track_lines__[302] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 302:\n    shapeStr.append(str(self.context.globalAlpha *';
		$m.__track_lines__[304] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 304:\n    shapeStr.append("\\"")';
		$m.__track_lines__[306] = "pyjamas.Canvas.GWTCanvasImplIE6.py, line 306:\n    if (self.context.strokeStyle.type == 'Gradient'):";
		$m.__track_lines__[307] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 307:\n    if len(self.context.strokeStyle.gradient.colorStops) > 0:';
		$m.__track_lines__[308] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 308:\n    self.appendGradient(self.context.strokeStyle, shapeStr)';
		$m.__track_lines__[310] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 310:\n    shapeStr.append(" color=\\"")';
		$m.__track_lines__[311] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 311:\n    shapeStr.append(str(self.context.strokeStyle.color))';
		$m.__track_lines__[313] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 313:\n    shapeStr.append("\\" miterlimit=\\"")';
		$m.__track_lines__[314] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 314:\n    shapeStr.append(str(self.context.miterLimit))';
		$m.__track_lines__[315] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 315:\n    shapeStr.append("\\" joinstyle=\\"")';
		$m.__track_lines__[316] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 316:\n    shapeStr.append(self.context.lineJoin)';
		$m.__track_lines__[317] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 317:\n    shapeStr.append("\\" endcap=\\"")';
		$m.__track_lines__[318] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 318:\n    shapeStr.append(self.context.lineCap)';
		$m.__track_lines__[320] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 320:\n    shapeStr.append("\\"></v:stroke>")';
		$m.__track_lines__[323] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 323:\n    def appendFill(self, shapeStr):';
		$m.__track_lines__[325] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 325:\n    shapeStr.append("<v:fill opacity=\\"")';
		$m.__track_lines__[326] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 326:\n    shapeStr.append(str(self.context.globalAlpha *';
		$m.__track_lines__[328] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 328:\n    shapeStr.append("\\"")';
		$m.__track_lines__[330] = "pyjamas.Canvas.GWTCanvasImplIE6.py, line 330:\n    if (self.context.fillStyle.type == 'Gradient'):";
		$m.__track_lines__[331] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 331:\n    if len(self.context.fillStyle.gradient.colorStops) > 0:';
		$m.__track_lines__[332] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 332:\n    self.appendGradient(self.context.fillStyle, shapeStr)';
		$m.__track_lines__[334] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 334:\n    shapeStr.append(" color=\\"")';
		$m.__track_lines__[335] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 335:\n    shapeStr.append(str(self.context.fillStyle.color))';
		$m.__track_lines__[337] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 337:\n    shapeStr.append("\\"></v:fill>")';
		$m.__track_lines__[340] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 340:\n    def fill(self):';
		$m.__track_lines__[341] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 341:\n    if len(self.pathStr) == 0:';
		$m.__track_lines__[342] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 342:\n    return';
		$m.__track_lines__[344] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 344:\n    shapeStr = [] #JSOStack.getScratchArray()';
		$m.__track_lines__[345] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 345:\n    shapeStr.append("<v:shape style=\\"position:absolute;width:10;height:10;\\" coordsize=\\"100,100")';
		$m.__track_lines__[347] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 347:\n    shapeStr.append("\\" stroked=\\"f\\" path=\\"")';
		$m.__track_lines__[348] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 348:\n    shapeStr.append(self.pathStr.join())';
		$m.__track_lines__[349] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 349:\n    shapeStr.append(" e\\">")';
		$m.__track_lines__[351] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 351:\n    self.appendFill(shapeStr)';
		$m.__track_lines__[353] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 353:\n    shapeStr.append("</v:shape>")';
		$m.__track_lines__[355] = "pyjamas.Canvas.GWTCanvasImplIE6.py, line 355:\n    daStr = ''.join(shapeStr)";
		$m.__track_lines__[357] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 357:\n    self.insert(self.context.globalCompositeOperation, daStr)';
		$m.__track_lines__[359] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 359:\n    def stroke(self):';
		$m.__track_lines__[360] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 360:\n    if len(self.pathStr) == 0:';
		$m.__track_lines__[361] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 361:\n    return';
		$m.__track_lines__[363] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 363:\n    shapeStr = [] #JSOStack.getScratchArray()';
		$m.__track_lines__[364] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 364:\n    shapeStr.append("<v:shape style=\\"position:absolute;")';
		$m.__track_lines__[365] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 365:\n    shapeStr.append("width:10; height:10;")';
		$m.__track_lines__[366] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 366:\n    shapeStr.append("\\" coordsize=\\"100,100")';
		$m.__track_lines__[367] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 367:\n    shapeStr.append("\\" filled=\\"f")';
		$m.__track_lines__[368] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 368:\n    shapeStr.append("\\" stroked=\\"t")';
		$m.__track_lines__[369] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 369:\n    shapeStr.append("\\" strokeweight=\\"")';
		$m.__track_lines__[370] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 370:\n    shapeStr.append(str(self.context.lineWidth))';
		$m.__track_lines__[371] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 371:\n    shapeStr.append("px\\" path=\\"")';
		$m.__track_lines__[372] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 372:\n    shapeStr.append(self.pathStr.join())';
		$m.__track_lines__[373] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 373:\n    shapeStr.append(" e\\">")';
		$m.__track_lines__[375] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 375:\n    self.appendStroke(shapeStr)';
		$m.__track_lines__[377] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 377:\n    shapeStr.append("<v:shape>")';
		$m.__track_lines__[379] = "pyjamas.Canvas.GWTCanvasImplIE6.py, line 379:\n    daStr = ''.join(shapeStr)";
		$m.__track_lines__[381] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 381:\n    self.insert(self.context.globalCompositeOperation, daStr)';
		$m.__track_lines__[383] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 383:\n    def fillRect(self, x, y, w, h):';
		$m.__track_lines__[384] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 384:\n    w += x';
		$m.__track_lines__[385] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 385:\n    h += y';
		$m.__track_lines__[386] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 386:\n    self.beginPath()';
		$m.__track_lines__[387] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 387:\n    self.moveTo(x, y)';
		$m.__track_lines__[388] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 388:\n    self.lineTo(x, h)';
		$m.__track_lines__[389] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 389:\n    self.lineTo(w, h)';
		$m.__track_lines__[390] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 390:\n    self.lineTo(w, y)';
		$m.__track_lines__[391] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 391:\n    self.closePath()';
		$m.__track_lines__[392] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 392:\n    self.fill()';
		$m.__track_lines__[393] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 393:\n    self.pathStr.clear()';
		$m.__track_lines__[396] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 396:\n    def getContext(self):';
		$m.__track_lines__[397] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 397:\n    return self.context';
		$m.__track_lines__[400] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 400:\n    def getCoordX(self, matrix, x, y):';
		$m.__track_lines__[401] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 401:\n    coordX = int(math.floor((math.floor(10 * (matrix[0] * x + matrix[1]';
		$m.__track_lines__[404] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 404:\n    self.pathStr.logCoordX(coordX / 10)';
		$m.__track_lines__[405] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 405:\n    return coordX';
		$m.__track_lines__[408] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 408:\n    def getCoordY(self, matrix, x, y):';
		$m.__track_lines__[409] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 409:\n    coordY = int(math.floor((math.floor(10 * (matrix[3] * x + matrix[4]';
		$m.__track_lines__[412] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 412:\n    self.pathStr.logCoordY(coordY / 10)';
		$m.__track_lines__[413] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 413:\n    return coordY';
		$m.__track_lines__[416] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 416:\n    def getFillStyle(self):';
		$m.__track_lines__[417] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 417:\n    return self.context.fillStyle';
		$m.__track_lines__[420] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 420:\n    def getGlobalAlpha(self):';
		$m.__track_lines__[421] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 421:\n    return self.context.globalAlpha';
		$m.__track_lines__[424] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 424:\n    def getGlobalCompositeOperation(self):';
		$m.__track_lines__[425] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 425:\n    if self.context.globalCompositeOperation == DESTINATION_OVER:';
		$m.__track_lines__[426] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 426:\n    return GWTCanvasConsts.DESTINATION_OVER';
		$m.__track_lines__[428] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 428:\n    return GWTCanvasConsts.SOURCE_OVER';
		$m.__track_lines__[432] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 432:\n    def getLineCap(self):';
		$m.__track_lines__[433] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 433:\n    if self.context.lineCap == BUTT:';
		$m.__track_lines__[434] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 434:\n    return GWTCanvasConsts.BUTT';
		$m.__track_lines__[436] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 436:\n    return self.context.lineCap';
		$m.__track_lines__[439] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 439:\n    def getLineJoin(self):';
		$m.__track_lines__[440] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 440:\n    return self.context.lineJoin';
		$m.__track_lines__[443] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 443:\n    def getLineWidth(self):';
		$m.__track_lines__[444] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 444:\n    return self.context.lineWidth';
		$m.__track_lines__[447] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 447:\n    def getMiterLimit(self):';
		$m.__track_lines__[448] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 448:\n    return self.context.miterLimit';
		$m.__track_lines__[451] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 451:\n    def getStrokeStyle(self):';
		$m.__track_lines__[452] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 452:\n    return self.context.strokeStyle';
		$m.__track_lines__[455] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 455:\n    def lineTo(self, x, y):';
		$m.__track_lines__[456] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 456:\n    self.pathStr.append(PathElement.lineTo(x, y, self))';
		$m.__track_lines__[457] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 457:\n    self.currentX = x';
		$m.__track_lines__[458] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 458:\n    self.currentY = y';
		$m.__track_lines__[461] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 461:\n    def moveTo(self, x, y):';
		$m.__track_lines__[462] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 462:\n    self.pathStr.append(PathElement.moveTo(x, y, self))';
		$m.__track_lines__[463] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 463:\n    self.currentX = x';
		$m.__track_lines__[464] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 464:\n    self.currentY = y';
		$m.__track_lines__[467] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 467:\n    def quadraticCurveTo(self, cpx, cpy, x, y):';
		$m.__track_lines__[468] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 468:\n    cp1x = (self.currentX + 2.0 / 3.0 * (cpx - self.currentX))';
		$m.__track_lines__[469] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 469:\n    cp1y = (self.currentY + 2.0 / 3.0 * (cpy - self.currentY))';
		$m.__track_lines__[470] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 470:\n    cp2x = (cp1x + (x - self.currentX) / 3.0)';
		$m.__track_lines__[471] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 471:\n    cp2y = (cp1y + (y - self.currentY) / 3.0)';
		$m.__track_lines__[472] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 472:\n    self.pathStr.append(PathElement.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y, self))';
		$m.__track_lines__[473] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 473:\n    self.currentX = x';
		$m.__track_lines__[474] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 474:\n    self.currentY = y';
		$m.__track_lines__[477] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 477:\n    def rect(self, x, y, w, h):';
		$m.__track_lines__[478] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 478:\n    self.pathStr.append(PathElement.moveTo(x, y, self))';
		$m.__track_lines__[479] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 479:\n    self.pathStr.append(PathElement.lineTo(x + w, y, self))';
		$m.__track_lines__[480] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 480:\n    self.pathStr.append(PathElement.lineTo(x + w, y + h, self))';
		$m.__track_lines__[481] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 481:\n    self.pathStr.append(PathElement.lineTo(x, y + h, self))';
		$m.__track_lines__[482] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 482:\n    self.pathStr.append(PathElement.closePath())';
		$m.__track_lines__[483] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 483:\n    self.currentX = x';
		$m.__track_lines__[484] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 484:\n    self.currentY = y + h';
		$m.__track_lines__[487] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 487:\n    def restoreContext(self):';
		$m.__track_lines__[488] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 488:\n    if len(self.contextStack) > 0:';
		$m.__track_lines__[489] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 489:\n    self.context = self.contextStack.pop()';
		$m.__track_lines__[490] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 490:\n    self.matrix = self.context.matrix';
		$m.__track_lines__[494] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 494:\n    def rotate(self, angle):';
		$m.__track_lines__[495] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 495:\n    s = math.sin(-angle)';
		$m.__track_lines__[496] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 496:\n    c = math.cos(-angle)';
		$m.__track_lines__[497] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 497:\n    a = self.matrix[0]';
		$m.__track_lines__[498] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 498:\n    b = self.matrix[1]';
		$m.__track_lines__[499] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 499:\n    m1 = a * c';
		$m.__track_lines__[500] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 500:\n    m2 = b * s';
		$m.__track_lines__[501] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 501:\n    self.matrix[0] = m1 - m2';
		$m.__track_lines__[502] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 502:\n    m1 = a * s';
		$m.__track_lines__[503] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 503:\n    m2 = b * c';
		$m.__track_lines__[504] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 504:\n    self.matrix[1] = m1 + m2';
		$m.__track_lines__[505] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 505:\n    a = self.matrix[3]';
		$m.__track_lines__[506] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 506:\n    b = self.matrix[4]';
		$m.__track_lines__[507] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 507:\n    m1 = a * c';
		$m.__track_lines__[508] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 508:\n    m2 = b * s';
		$m.__track_lines__[509] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 509:\n    self.matrix[3] = m1 - m2';
		$m.__track_lines__[510] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 510:\n    m1 = a * s';
		$m.__track_lines__[511] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 511:\n    m2 = b * c';
		$m.__track_lines__[512] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 512:\n    self.matrix[4] = m1 + m2';
		$m.__track_lines__[515] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 515:\n    def saveContext(self):';
		$m.__track_lines__[516] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 516:\n    self.contextStack.append(self.context)';
		$m.__track_lines__[517] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 517:\n    self.context = VMLContext(self.context)';
		$m.__track_lines__[518] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 518:\n    self.matrix = self.context.matrix';
		$m.__track_lines__[521] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 521:\n    def scale(self, x, y):';
		$m.__track_lines__[522] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 522:\n    self.context.arcScaleX *= x';
		$m.__track_lines__[523] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 523:\n    self.context.arcScaleY *= y';
		$m.__track_lines__[524] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 524:\n    self.matrix[0] *= x';
		$m.__track_lines__[525] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 525:\n    self.matrix[1] *= y';
		$m.__track_lines__[526] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 526:\n    self.matrix[3] *= x';
		$m.__track_lines__[527] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 527:\n    self.matrix[4] *= y';
		$m.__track_lines__[530] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 530:\n    def setBackgroundColor(self, element, color):';
		$m.__track_lines__[531] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 531:\n    DOM.setStyleAttribute(element, "backgroundColor", color)';
		$m.__track_lines__[534] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 534:\n    def setCoordHeight(self, elem, height):';
		$m.__track_lines__[535] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 535:\n    DOM.setElemAttribute(elem, "width", int(height))';
		$m.__track_lines__[536] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 536:\n    self.clear(0, 0)';
		$m.__track_lines__[539] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 539:\n    def setCoordWidth(self, elem, width):';
		$m.__track_lines__[540] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 540:\n    DOM.setElemAttribute(elem, "width", int(width))';
		$m.__track_lines__[541] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 541:\n    self.clear(0, 0)';
		$m.__track_lines__[544] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 544:\n    def setCurrentX(self, currentX):';
		$m.__track_lines__[545] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 545:\n    self.currentX = currentX';
		$m.__track_lines__[548] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 548:\n    def setCurrentY(self, currentY):';
		$m.__track_lines__[549] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 549:\n    self.currentY = currentY';
		$m.__track_lines__[557] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 557:\n    def setFillStyle(self, fillStyle):';
		$m.__track_lines__[560] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 560:\n    self.context.fillStyle = VMLStyle()';
		$m.__track_lines__[562] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 562:\n    if isinstance(fillStyle, CanvasGradientImplIE6):';
		$m.__track_lines__[563] = "pyjamas.Canvas.GWTCanvasImplIE6.py, line 563:\n    self.context.fillStyle.type = 'Gradient'";
		$m.__track_lines__[564] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 564:\n    self.context.fillStyle.gradient = fillStyle';
		$m.__track_lines__[568] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 568:\n    fillStyle = str(fillStyle).strip()';
		$m.__track_lines__[569] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 569:\n    if fillStyle.startswith("rgba("):';
		$m.__track_lines__[570] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 570:\n    end = fillStyle.find(")", 12)';
		$m.__track_lines__[571] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 571:\n    if end > -1:';
		$m.__track_lines__[572] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 572:\n    guts = fillStyle[5:end].split(",")';
		$m.__track_lines__[573] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 573:\n    if len(guts) == 4:';
		$m.__track_lines__[574] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 574:\n    self.context.fillStyle.alpha = float(guts[3])';
		$m.__track_lines__[575] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 575:\n    self.context.fillStyle.color = \\';
		$m.__track_lines__[578] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 578:\n    self.context.fillStyle.color = fillStyle';
		$m.__track_lines__[585] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 585:\n    def setStrokeStyle(self, strokeStyle):';
		$m.__track_lines__[586] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 586:\n    self.context.strokeStyle = VMLStyle()';
		$m.__track_lines__[588] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 588:\n    if isinstance(strokeStyle, CanvasGradientImplIE6):';
		$m.__track_lines__[589] = "pyjamas.Canvas.GWTCanvasImplIE6.py, line 589:\n    self.context.strokeStyle.type = 'Gradient'";
		$m.__track_lines__[590] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 590:\n    self.context.strokeStyle.gradient = strokeStyle';
		$m.__track_lines__[592] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 592:\n    strokeStyle = str(strokeStyle).strip()';
		$m.__track_lines__[593] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 593:\n    if strokeStyle.startswith("rgba("):';
		$m.__track_lines__[594] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 594:\n    end = strokeStyle.find(")", 12)';
		$m.__track_lines__[595] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 595:\n    if end > -1:';
		$m.__track_lines__[596] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 596:\n    guts = strokeStyle[5:end].split(",")';
		$m.__track_lines__[597] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 597:\n    if len(guts) == 4:';
		$m.__track_lines__[598] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 598:\n    self.context.stokeStyle.alpha = float(guts[3])';
		$m.__track_lines__[599] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 599:\n    self.context.strokeStyle.color = \\';
		$m.__track_lines__[602] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 602:\n    self.context.strokeStyle.color = strokeStyle';
		$m.__track_lines__[605] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 605:\n    def setGlobalAlpha(self, globalAlpha):';
		$m.__track_lines__[606] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 606:\n    self.context.globalAlpha = globalAlpha';
		$m.__track_lines__[609] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 609:\n    def setGlobalCompositeOperation(self, gco):';
		$m.__track_lines__[610] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 610:\n    gco = gco.strip()';
		$m.__track_lines__[611] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 611:\n    if gco.lower == GWTCanvasConsts.SOURCE_OVER:';
		$m.__track_lines__[612] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 612:\n    self.context.globalCompositeOperation = SOURCE_OVER';
		$m.__track_lines__[614] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 614:\n    self.context.globalCompositeOperation = DESTINATION_OVER';
		$m.__track_lines__[618] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 618:\n    def setLineCap(self, lineCap):';
		$m.__track_lines__[619] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 619:\n    if lineCap.strip().lower == GWTCanvasConsts.BUTT:';
		$m.__track_lines__[620] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 620:\n    self.context.lineCap = BUTT';
		$m.__track_lines__[622] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 622:\n    self.context.lineCap = lineCap';
		$m.__track_lines__[626] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 626:\n    def setLineJoin(self, lineJoin):';
		$m.__track_lines__[627] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 627:\n    self.context.lineJoin = lineJoin';
		$m.__track_lines__[630] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 630:\n    def setLineWidth(self, lineWidth):';
		$m.__track_lines__[631] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 631:\n    self.context.lineWidth = lineWidth';
		$m.__track_lines__[634] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 634:\n    def setMiterLimit(self, miterLimit):';
		$m.__track_lines__[635] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 635:\n    self.context.miterLimit = miterLimit';
		$m.__track_lines__[637] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 637:\n    def setParentElement(self, g):';
		$m.__track_lines__[638] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 638:\n    self.parentElement = g';
		$m.__track_lines__[641] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 641:\n    def setPixelHeight(self, elem, height):';
		$m.__track_lines__[642] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 642:\n    DOM.setStyleAttribute(elem, "height", str(height) + "px")';
		$m.__track_lines__[643] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 643:\n    self.parentHeight = height';
		$m.__track_lines__[646] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 646:\n    def setPixelWidth(self, elem, width):';
		$m.__track_lines__[647] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 647:\n    DOM.setStyleAttribute(elem, "width", str(width) + "px")';
		$m.__track_lines__[648] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 648:\n    self.parentWidth = width';
		$m.__track_lines__[651] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 651:\n    def strokeRect(self, x, y, w, h):';
		$m.__track_lines__[652] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 652:\n    w += x';
		$m.__track_lines__[653] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 653:\n    h += y';
		$m.__track_lines__[654] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 654:\n    self.beginPath()';
		$m.__track_lines__[655] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 655:\n    self.moveTo(x, y)';
		$m.__track_lines__[656] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 656:\n    self.lineTo(x, h)';
		$m.__track_lines__[657] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 657:\n    self.lineTo(w, h)';
		$m.__track_lines__[658] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 658:\n    self.lineTo(w, y)';
		$m.__track_lines__[659] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 659:\n    self.closePath()';
		$m.__track_lines__[660] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 660:\n    self.stroke()';
		$m.__track_lines__[661] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 661:\n    self.pathStr.clear()';
		$m.__track_lines__[664] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 664:\n    def transform(self, m11, m12, m21, m22, dx, dy):';
		$m.__track_lines__[665] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 665:\n    a = self.matrix[0]';
		$m.__track_lines__[666] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 666:\n    b = self.matrix[1]';
		$m.__track_lines__[667] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 667:\n    self.matrix[0] = a * m11 + b * m12';
		$m.__track_lines__[668] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 668:\n    self.matrix[1] = a * m21 + b * m22';
		$m.__track_lines__[669] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 669:\n    self.matrix[2] += a * dx + b * dy';
		$m.__track_lines__[670] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 670:\n    a = self.matrix[3]';
		$m.__track_lines__[671] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 671:\n    b = self.matrix[4]';
		$m.__track_lines__[672] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 672:\n    self.matrix[3] = a * m11 + b * m12';
		$m.__track_lines__[673] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 673:\n    self.matrix[4] = a * m21 + b * m22';
		$m.__track_lines__[674] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 674:\n    self.matrix[5] += a * dx + b * dy';
		$m.__track_lines__[677] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 677:\n    def translate(self, x, y):';
		$m.__track_lines__[678] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 678:\n    self.matrix[2] += self.matrix[0] * x + self.matrix[1] * y';
		$m.__track_lines__[679] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 679:\n    self.matrix[5] += self.matrix[3] * x + self.matrix[4] * y';
		$m.__track_lines__[682] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 682:\n    def insert(self, gco, html):';
		$m.__track_lines__[683] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 683:\n    self.parentElement.insertAdjacentHTML(gco, html)';
		$m.__track_lines__[686] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 686:\n    """';
		$m.__track_lines__[742] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 742:\n    def buildStyleString(self, style):';
		$m.__track_lines__[743] = "pyjamas.Canvas.GWTCanvasImplIE6.py, line 743:\n    return style['style'] + ' ' + style['variant'] + ' ' + \\";
		$m.__track_lines__[747] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 747:\n    def encodeHtmlAttribute(self, s):';
		$m.__track_lines__[748] = "pyjamas.Canvas.GWTCanvasImplIE6.py, line 748:\n    e = s.replace('&', '&amp;')";
		$m.__track_lines__[749] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 749:\n    return e.replace(\'"\', \'&quot;\')';
		$m.__track_lines__[751] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 751:\n    def drawText_(self, text, x, y, maxWidth, stroke):';
		$m.__track_lines__[752] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 752:\n    delta = 1000';
		$m.__track_lines__[753] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 753:\n    left = 0';
		$m.__track_lines__[754] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 754:\n    right = delta';
		$m.__track_lines__[755] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 755:\n    offsetX = 0';
		$m.__track_lines__[756] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 756:\n    offsetY = 0';
		$m.__track_lines__[758] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 758:\n    DEFAULT_STYLE = {';
		$m.__track_lines__[765] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 765:\n    """';
		$m.__track_lines__[809] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 809:\n    fontStyleString = self.buildStyleString(DEFAULT_STYLE)';
		$m.__track_lines__[810] = "pyjamas.Canvas.GWTCanvasImplIE6.py, line 810:\n    textAlign = 'left'";
		$m.__track_lines__[812] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 812:\n    dX = self.getCoordX(self.matrix, x + offsetX, y + offsetY)';
		$m.__track_lines__[813] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 813:\n    dY = self.getCoordY(self.matrix, x + offsetX, y + offsetY)';
		$m.__track_lines__[817] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 817:\n    lineStr = [] #JSOStack.getScratchArray()';
		$m.__track_lines__[819] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 819:\n    lineStr.append(\'<v:line from="\')';
		$m.__track_lines__[820] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 820:\n    lineStr.append(str(-left))';
		$m.__track_lines__[821] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 821:\n    lineStr.append(\' 0" to="\',)';
		$m.__track_lines__[822] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 822:\n    lineStr.append(str(right))';
		$m.__track_lines__[823] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 823:\n    lineStr.append(\' 0" \')';
		$m.__track_lines__[824] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 824:\n    lineStr.append(\' coordsize="100 100" coordorigin="0 0"\')';
		$m.__track_lines__[825] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 825:\n    lineStr.append(\'" style="position:absolute;width:1px;height:1px"\')';
		$m.__track_lines__[826] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 826:\n    if stroke:';
		$m.__track_lines__[827] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 827:\n    lineStr.append(\' filled="f" stroked="t">\')';
		$m.__track_lines__[828] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 828:\n    self.appendStroke(lineStr)';
		$m.__track_lines__[830] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 830:\n    lineStr.append(\' filled="t" stroked="f">\')';
		$m.__track_lines__[831] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 831:\n    self.appendFill(lineStr)';
		$m.__track_lines__[833] = "pyjamas.Canvas.GWTCanvasImplIE6.py, line 833:\n    skewM = str(self.matrix[0]) + ',' + str(self.matrix[1]) + ',' + \\";
		$m.__track_lines__[837] = "pyjamas.Canvas.GWTCanvasImplIE6.py, line 837:\n    skewOffset = str(math.floor(dX / 10)) + ',' + \\";
		$m.__track_lines__[840] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 840:\n    lineStr.append(\'<v:skew on="t" matrix="\')';
		$m.__track_lines__[841] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 841:\n    lineStr.append(skewM)';
		$m.__track_lines__[842] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 842:\n    lineStr.append(\'" \')';
		$m.__track_lines__[843] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 843:\n    lineStr.append(\' offset="\')';
		$m.__track_lines__[844] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 844:\n    lineStr.append(skewOffset)';
		$m.__track_lines__[845] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 845:\n    lineStr.append(\'" origin="\')';
		$m.__track_lines__[846] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 846:\n    lineStr.append(str(left))';
		$m.__track_lines__[847] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 847:\n    lineStr.append(\' 0" />\')';
		$m.__track_lines__[849] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 849:\n    lineStr.append(\'<v:path textpathok="true" />\')';
		$m.__track_lines__[850] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 850:\n    lineStr.append(\'<v:textpath on="true" string="\')';
		$m.__track_lines__[851] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 851:\n    lineStr.append(self.encodeHtmlAttribute(text))';
		$m.__track_lines__[852] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 852:\n    lineStr.append(\'" style="v-text-align:\')';
		$m.__track_lines__[853] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 853:\n    lineStr.append(textAlign)';
		$m.__track_lines__[854] = "pyjamas.Canvas.GWTCanvasImplIE6.py, line 854:\n    lineStr.append(';font:')";
		$m.__track_lines__[855] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 855:\n    lineStr.append(self.encodeHtmlAttribute(fontStyleString))';
		$m.__track_lines__[856] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 856:\n    lineStr.append(\'" /></v:line>\')';
		$m.__track_lines__[858] = "pyjamas.Canvas.GWTCanvasImplIE6.py, line 858:\n    daStr = ''.join(lineStr)";
		$m.__track_lines__[860] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 860:\n    self.insert(self.context.globalCompositeOperation, daStr)';
		$m.__track_lines__[862] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 862:\n    def fillText(self, text, x, y, maxWidth=None):';
		$m.__track_lines__[863] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 863:\n    self.drawText_(text, x, y, maxWidth, False)';
		$m.__track_lines__[865] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 865:\n    def strokeText(self, text, x, y, maxWidth=None):';
		$m.__track_lines__[866] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 866:\n    self.drawText_(text, x, y, maxWidth, True)';
		$m.__track_lines__[868] = 'pyjamas.Canvas.GWTCanvasImplIE6.py, line 868:\n    """';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_100 = new $p['int'](100);
		$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=18;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['math'] = $p['___import___']('math', 'pyjamas.Canvas');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=20;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=21;
		$pyjs['track']['lineno']=22;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=24;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=27;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['BUTT'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts.BUTT', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DESTINATION_OVER'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts.DESTINATION_OVER', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['SOURCE_OVER'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts.SOURCE_OVER', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=28;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['GWTCanvasConsts'] = $p['___import___']('pyjamas.Canvas.GWTCanvasConsts', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=29;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['JSOStack'] = $p['___import___']('pyjamas.Canvas.JSOStack.JSOStack', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=30;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['PathElement'] = $p['___import___']('pyjamas.Canvas.PathElement', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=31;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['VMLContext'] = $p['___import___']('pyjamas.Canvas.VMLContext.VMLContext', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=32;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['VMLStyle'] = $p['___import___']('pyjamas.Canvas.VMLContext.VMLStyle', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=33;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=34;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['CanvasGradientImplIE6'] = $p['___import___']('pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=36;
		$m['addNamespace'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6','lineno':36};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
			$pyjs['track']['lineno']=36;
			$pyjs['track']['lineno']=37;

    if (!$doc['namespaces']["v"]) {
        $doc['namespaces']['add']("v", "urn:schemas-microsoft-com:vml");
        $doc['createStyleSheet']()['cssText'] = "v\:*{behavior:url(#default#VML);}";
    }
    
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		};
		$m['addNamespace']['__name__'] = 'addNamespace';

		$m['addNamespace']['__bind_type__'] = 0;
		$m['addNamespace']['__args__'] = [null,null];
		$pyjs['track']['lineno']=45;
		$pyjs['track']['lineno']=49;
		$m['GWTCanvasImplIE6'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.GWTCanvasImplIE6';
			$cls_definition['__md5__'] = '9d71e080921187c65bc45f6dfa5ea70a';
			$pyjs['track']['lineno']=51;
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
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ns,$pyjs_try_err;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=51;
				$pyjs['track']['lineno']=52;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=53;
					ns = $doc['namespaces']['item']('v');
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
					$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
					if (true) {
						$pyjs['track']['lineno']=55;
						$doc['namespaces']['add']('v', 'urn:schemas-microsoft-com:vml');
						$pyjs['track']['lineno']=56;
						$doc['createStyleSheet']()['__is_instance__'] && typeof $doc['createStyleSheet']()['__setattr__'] == 'function' ? $doc['createStyleSheet']()['__setattr__']('cssText', 'v\\:*{behavior:url(#default#VML);}') : $p['setattr']($doc['createStyleSheet'](), 'cssText', 'v\\:*{behavior:url(#default#VML);}'); 
					}
				}
				$pyjs['track']['lineno']=60;
				$pyjs['track']['lineno']=65;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pathStr', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['JSOStack']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) : $p['setattr'](self, 'pathStr', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['JSOStack']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()); 
				$pyjs['track']['lineno']=67;
				$pyjs['track']['lineno']=71;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('contextStack', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) : $p['setattr'](self, 'contextStack', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()); 
				$pyjs['track']['lineno']=73;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentX', $constant_int_0) : $p['setattr'](self, 'currentX', $constant_int_0); 
				$pyjs['track']['lineno']=75;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentY', $constant_int_0) : $p['setattr'](self, 'currentY', $constant_int_0); 
				$pyjs['track']['lineno']=77;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentElement', null) : $p['setattr'](self, 'parentElement', null); 
				$pyjs['track']['lineno']=79;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentHeight', $constant_int_0) : $p['setattr'](self, 'parentHeight', $constant_int_0); 
				$pyjs['track']['lineno']=81;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentWidth', $constant_int_0) : $p['setattr'](self, 'parentWidth', $constant_int_0); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=85;
			$method = $pyjs__bind_method2('arc', function(x, y, radius, startAngle, endAngle, anticlockwise) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					radius = arguments[3];
					startAngle = arguments[4];
					endAngle = arguments[5];
					anticlockwise = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':85};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=85;
				$pyjs['track']['lineno']=86;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PathElement']['arc'](x, y, radius, startAngle, endAngle, anticlockwise, self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['radius'],['startAngle'],['endAngle'],['anticlockwise']]);
			$cls_definition['arc'] = $method;
			$pyjs['track']['lineno']=90;
			$method = $pyjs__bind_method2('beginPath', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=90;
				$pyjs['track']['lineno']=91;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['beginPath'] = $method;
			$pyjs['track']['lineno']=94;
			$method = $pyjs__bind_method2('clear', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
				if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':94};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=94;
				$pyjs['track']['lineno']=95;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$pyjs['track']['lineno']=96;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setInnerHTML']($p['getattr'](self, 'parentElement'), '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width', $constant_int_0],['height', $constant_int_0]]);
			$cls_definition['clear'] = $method;
			$pyjs['track']['lineno']=98;
			$method = $pyjs__bind_method2('closePath', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':98};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=98;
				$pyjs['track']['lineno']=99;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PathElement']['closePath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['closePath'] = $method;
			$pyjs['track']['lineno']=102;
			$method = $pyjs__bind_method2('createElement', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':102};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=102;
				$pyjs['track']['lineno']=103;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['VMLContext']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) : $p['setattr'](self, 'context', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['VMLContext']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()); 
				$pyjs['track']['lineno']=104;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix', $p['getattr']($p['getattr'](self, 'context'), 'matrix')) : $p['setattr'](self, 'matrix', $p['getattr']($p['getattr'](self, 'context'), 'matrix')); 
				$pyjs['track']['lineno']=105;
				$pyjs['track']['lineno']=105;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['createParentElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['createElement'] = $method;
			$pyjs['track']['lineno']=108;
			$method = $pyjs__bind_method2('createParentElement', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':108};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=108;
				$pyjs['track']['lineno']=109;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentElement', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['createElement']('div');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) : $p['setattr'](self, 'parentElement', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['createElement']('div');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()); 
				$pyjs['track']['lineno']=110;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setStyleAttribute']($p['getattr'](self, 'parentElement'), 'overflow', 'hidden');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs['track']['lineno']=111;
				$pyjs['track']['lineno']=111;
				var $pyjs__ret = $p['getattr'](self, 'parentElement');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['createParentElement'] = $method;
			$pyjs['track']['lineno']=113;
			$method = $pyjs__bind_method2('setFont', function(font) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					font = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':113};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=113;
				$pyjs['track']['lineno']=114;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['font']]);
			$cls_definition['setFont'] = $method;
			$pyjs['track']['lineno']=118;
			$method = $pyjs__bind_method2('cubicCurveTo', function(cp1x, cp1y, cp2x, cp2y, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					cp1x = arguments[1];
					cp1y = arguments[2];
					cp2x = arguments[3];
					cp2y = arguments[4];
					x = arguments[5];
					y = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':118};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=118;
				$pyjs['track']['lineno']=119;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PathElement']['bezierCurveTo'](cp1x, cp1y, cp2x, cp2y, x, y, self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs['track']['lineno']=120;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentX', x) : $p['setattr'](self, 'currentX', x); 
				$pyjs['track']['lineno']=121;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentY', y) : $p['setattr'](self, 'currentY', y); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['cp1x'],['cp1y'],['cp2x'],['cp2y'],['x'],['y']]);
			$cls_definition['cubicCurveTo'] = $method;
			$pyjs['track']['lineno']=124;
			$method = $pyjs__bind_method2('drawImage', function(img) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					img = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add5,destWidth,sourceHeight,$div13,$sub8,sourceWidth,$mul4,$div14,$mul3,$div10,$div11,$div12,$mul2,$sub3,$mul1,vmlStr,destX,sourceX,sourceY,$sub7,$sub6,$sub5,$sub4,$or1,dX,$or2,fullHeight,dY,fullWidth,destY,$div8,$div9,$sub2,$div2,$div3,$div1,$div6,$div7,$div4,$div5,$div16,$sub1,$add2,$add3,$add1,$add6,$add7,$add4,destHeight,$add8,$div15;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':124};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=124;
				$pyjs['track']['lineno']=126;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](img, $m['Widget']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
					$pyjs['track']['lineno']=127;
					img = (function(){try{try{$pyjs['in_try_except'] += 1;
					return img['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				}
				$pyjs['track']['lineno']=128;
				fullWidth = $p['getattr'](img, 'width');
				$pyjs['track']['lineno']=129;
				fullHeight = $p['getattr'](img, 'height');
				$pyjs['track']['lineno']=131;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](args);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})(), $constant_int_8));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
					$pyjs['track']['lineno']=132;
					sourceX = args['__getitem__']($constant_int_0);
					$pyjs['track']['lineno']=133;
					sourceY = args['__getitem__']($constant_int_1);
					$pyjs['track']['lineno']=134;
					sourceWidth = args['__getitem__']($constant_int_2);
					$pyjs['track']['lineno']=135;
					sourceHeight = args['__getitem__']($constant_int_3);
					$pyjs['track']['lineno']=136;
					destX = args['__getitem__']($constant_int_4);
					$pyjs['track']['lineno']=137;
					destY = args['__getitem__']($constant_int_5);
					$pyjs['track']['lineno']=138;
					destWidth = args['__getitem__']($constant_int_6);
					$pyjs['track']['lineno']=139;
					destHeight = args['__getitem__']($constant_int_7);
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](args);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), $constant_int_4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()) {
					$pyjs['track']['lineno']=141;
					sourceX = $constant_int_0;
					$pyjs['track']['lineno']=142;
					sourceY = $constant_int_0;
					$pyjs['track']['lineno']=143;
					sourceWidth = fullWidth;
					$pyjs['track']['lineno']=144;
					sourceHeight = fullHeight;
					$pyjs['track']['lineno']=145;
					destX = args['__getitem__']($constant_int_0);
					$pyjs['track']['lineno']=146;
					destY = args['__getitem__']($constant_int_1);
					$pyjs['track']['lineno']=147;
					destWidth = args['__getitem__']($constant_int_2);
					$pyjs['track']['lineno']=148;
					destHeight = args['__getitem__']($constant_int_3);
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](args);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})(), $constant_int_2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
					$pyjs['track']['lineno']=150;
					sourceX = $constant_int_0;
					$pyjs['track']['lineno']=151;
					sourceY = $constant_int_0;
					$pyjs['track']['lineno']=152;
					sourceWidth = fullWidth;
					$pyjs['track']['lineno']=153;
					sourceHeight = fullHeight;
					$pyjs['track']['lineno']=154;
					destX = args['__getitem__']($constant_int_0);
					$pyjs['track']['lineno']=155;
					destY = args['__getitem__']($constant_int_1);
					$pyjs['track']['lineno']=156;
					destWidth = fullWidth;
					$pyjs['track']['lineno']=157;
					destHeight = fullHeight;
				}
				$pyjs['track']['lineno']=159;
				vmlStr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$pyjs['track']['lineno']=161;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append']('<v:group style="position:absolute;width:10;height:10;');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs['track']['lineno']=162;
				dX = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getCoordX']($p['getattr'](self, 'matrix'), destX, destY);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$pyjs['track']['lineno']=163;
				dY = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getCoordY']($p['getattr'](self, 'matrix'), destX, destY);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs['track']['lineno']=167;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($or1=!$p['op_eq']($p['getattr']($p['getattr'](self, 'context'), 'matrix')['__getitem__']($constant_int_0), $constant_int_1))?$or1:!$p['op_eq']($p['getattr']($p['getattr'](self, 'context'), 'matrix')['__getitem__']($constant_int_1), $constant_int_0)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
					$pyjs['track']['lineno']=170;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']('padding-right:');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
					$pyjs['track']['lineno']=171;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']($p['__op_add']($add1=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']($p['getattr'](self, 'parentWidth'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})(),$add2='px;'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
					$pyjs['track']['lineno']=172;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']('padding-bottom:');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
					$pyjs['track']['lineno']=173;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']($p['__op_add']($add3=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']($p['getattr'](self, 'parentHeight'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})(),$add4='px;'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
					$pyjs['track']['lineno']=174;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']("filter:progid:DXImageTransform.Microsoft.Matrix(M11='");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
					$pyjs['track']['lineno']=175;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']($p['__op_add']($add5='',$add6=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']($p['getattr'](self, 'matrix')['__getitem__']($constant_int_0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
					$pyjs['track']['lineno']=176;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']("',");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
					$pyjs['track']['lineno']=177;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']("M12='");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
					$pyjs['track']['lineno']=178;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']($p['__op_add']($add7='',$add8=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']($p['getattr'](self, 'matrix')['__getitem__']($constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
					$pyjs['track']['lineno']=179;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']("',");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
					$pyjs['track']['lineno']=180;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']("M21='");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
					$pyjs['track']['lineno']=181;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']($p['getattr'](self, 'matrix')['__getitem__']($constant_int_3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
					$pyjs['track']['lineno']=182;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']("',");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
					$pyjs['track']['lineno']=183;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']("M22='");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
					$pyjs['track']['lineno']=184;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']($p['getattr'](self, 'matrix')['__getitem__']($constant_int_4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
					$pyjs['track']['lineno']=185;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']("',");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
					$pyjs['track']['lineno']=186;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']("Dx='");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
					$pyjs['track']['lineno']=187;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['math']['floor']((typeof ($div1=dX)==typeof ($div2=$constant_int_10) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
					$pyjs['track']['lineno']=188;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']("',");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
					$pyjs['track']['lineno']=189;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']("Dy='");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
					$pyjs['track']['lineno']=190;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['math']['floor']((typeof ($div3=dY)==typeof ($div4=$constant_int_10) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
					$pyjs['track']['lineno']=191;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']("', SizingMethod='clip');");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=194;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']('left:');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
					$pyjs['track']['lineno']=195;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('%dpx;', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div5=dX)==typeof ($div6=$constant_int_10) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
					$pyjs['track']['lineno']=196;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']('top:');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
					$pyjs['track']['lineno']=197;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return vmlStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('%dpx', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['int']((typeof ($div7=dY)==typeof ($div8=$constant_int_10) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
				}
				$pyjs['track']['lineno']=200;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append']('" coordsize="100,100" coordorigin="0,0"><v:image src="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
				$pyjs['track']['lineno']=201;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getAttribute'](img, 'src');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				$pyjs['track']['lineno']=202;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append']('" style="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
				$pyjs['track']['lineno']=204;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append']('width:');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				$pyjs['track']['lineno']=205;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($mul1=destWidth)==typeof ($mul2=$constant_int_10) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				$pyjs['track']['lineno']=206;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append'](';height:');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
				$pyjs['track']['lineno']=207;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((typeof ($mul3=destHeight)==typeof ($mul4=$constant_int_10) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
				$pyjs['track']['lineno']=208;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append'](';" cropleft="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				$pyjs['track']['lineno']=209;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']((typeof ($div9=sourceX)==typeof ($div10=fullWidth) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
				$pyjs['track']['lineno']=210;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append']('" croptop="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
				$pyjs['track']['lineno']=211;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']((typeof ($div11=sourceY)==typeof ($div12=fullHeight) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				$pyjs['track']['lineno']=212;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append']('" cropright="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
				$pyjs['track']['lineno']=213;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']((typeof ($div13=$p['__op_sub']($sub3=$p['__op_sub']($sub1=fullWidth,$sub2=sourceX),$sub4=sourceWidth))==typeof ($div14=fullWidth) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
				$pyjs['track']['lineno']=214;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append']('" cropbottom="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
				$pyjs['track']['lineno']=215;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']((typeof ($div15=$p['__op_sub']($sub7=$p['__op_sub']($sub5=fullHeight,$sub6=sourceY),$sub8=sourceHeight))==typeof ($div16=fullHeight) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				$pyjs['track']['lineno']=216;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return vmlStr['append']('"/></v:group>');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
				$pyjs['track']['lineno']=218;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['insert']('BeforeEnd', (function(){try{try{$pyjs['in_try_except'] += 1;
				return ''['join'](vmlStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',null,['self'],['img']]);
			$cls_definition['drawImage'] = $method;
			$pyjs['track']['lineno']=220;
			$method = $pyjs__bind_method2('appendGradient', function(style, shapeStr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					style = arguments[1];
					shapeStr = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var maxX,maxY,dx,dy,$iter1_iter,colors,cs,$iter2_type,$mul9,colorStops,$add21,$add20,$add22,minX,minY,$sub9,$iter1_array,$mul8,$iter1_nextval,focusX,focusY,$sub13,$sub12,$sub11,$sub10,$sub14,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$mul7,$mul6,$mul5,$add18,$add19,$mul12,$iter2_nextval,stopPosn,$iter1_type,$mul11,$mul10,i,fillLength,$iter2_idx,$iter2_iter,length,$iter1_idx,$pyjs__trackstack_size_1,$add9,$iter2_array;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':220};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=220;
				$pyjs['track']['lineno']=221;
				colorStops = $p['getattr']($p['getattr'](style, 'gradient'), 'colorStops');
				$pyjs['track']['lineno']=222;
				length = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](colorStops);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
				$pyjs['track']['lineno']=224;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('" color="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
				$pyjs['track']['lineno']=225;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr'](colorStops['__getitem__']($constant_int_0), 'color'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
				$pyjs['track']['lineno']=226;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('" color2="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
				$pyjs['track']['lineno']=227;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr'](colorStops['__getitem__']($p['__op_sub']($sub9=length,$sub10=$constant_int_1)), 'color'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
				$pyjs['track']['lineno']=228;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('" type="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
				$pyjs['track']['lineno']=229;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']($p['getattr']($p['getattr'](style, 'gradient'), 'type'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
				$pyjs['track']['lineno']=231;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr']($p['getattr'](style, 'gradient'), 'type'), 'gradient'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()) {
					$pyjs['track']['lineno']=237;
					colors = '';
					$pyjs['track']['lineno']=238;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['range']($constant_int_1, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](colorStops);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						i = $iter1_nextval['$nextval'];
						$pyjs['track']['lineno']=239;
						cs = colorStops['__getitem__'](i);
						$pyjs['track']['lineno']=241;
						stopPosn = $p['getattr'](cs, 'offset');
						$pyjs['track']['lineno']=242;
						colors = $p['__op_add']($add9=colors,$add10=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sprintf']('%d%%', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['int']((typeof ($mul5=stopPosn)==typeof ($mul6=$constant_int_100) && typeof $mul5=='number'?
							$mul5*$mul6:
							$p['op_mul']($mul5,$mul6)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})());
						$pyjs['track']['lineno']=243;
						colors = $p['__op_add']($add13=colors,$add14=$p['__op_add']($add11=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['str']($p['getattr'](cs, 'color'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})(),$add12=','));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
					$pyjs['track']['lineno']=245;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return shapeStr['append']('" colors="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
					$pyjs['track']['lineno']=246;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return shapeStr['append'](colors);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=249;
					$pyjs['track']['lineno']=255;
					minX = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['pathStr']['getMinCoordX']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
					$pyjs['track']['lineno']=256;
					maxX = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['pathStr']['getMaxCoordX']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
					$pyjs['track']['lineno']=257;
					minY = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['pathStr']['getMinCoordY']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
					$pyjs['track']['lineno']=258;
					maxY = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['pathStr']['getMaxCoordY']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
					$pyjs['track']['lineno']=260;
					dx = $p['__op_sub']($sub11=maxX,$sub12=minX);
					$pyjs['track']['lineno']=261;
					dy = $p['__op_sub']($sub13=maxY,$sub14=minY);
					$pyjs['track']['lineno']=263;
					fillLength = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['math']['sqrt']($p['__op_add']($add15=(typeof ($mul7=dx)==typeof ($mul8=dx) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8)),$add16=(typeof ($mul9=dy)==typeof ($mul10=dy) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
					$pyjs['track']['lineno']=274;
					focusX = $constant_int_50;
					$pyjs['track']['lineno']=275;
					focusY = $constant_int_50;
					$pyjs['track']['lineno']=278;
					colors = '';
					$pyjs['track']['lineno']=279;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['range']($constant_int_1, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](colorStops);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						i = $iter2_nextval['$nextval'];
						$pyjs['track']['lineno']=280;
						cs = colorStops['__getitem__'](i);
						$pyjs['track']['lineno']=282;
						stopPosn = $p['getattr'](cs, 'offset');
						$pyjs['track']['lineno']=284;
						colors = $p['__op_add']($add17=colors,$add18=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sprintf']('%d%%', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['int']((typeof ($mul11=stopPosn)==typeof ($mul12=$constant_int_100) && typeof $mul11=='number'?
							$mul11*$mul12:
							$p['op_mul']($mul11,$mul12)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})());
						$pyjs['track']['lineno']=285;
						colors = $p['__op_add']($add21=colors,$add22=$p['__op_add']($add19=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['str']($p['getattr'](cs, 'color'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})(),$add20=','));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
					$pyjs['track']['lineno']=287;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return shapeStr['append']('" colors="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
					$pyjs['track']['lineno']=288;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return shapeStr['append'](colors);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
					$pyjs['track']['lineno']=290;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return shapeStr['append']('" focusposition="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
					$pyjs['track']['lineno']=291;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return shapeStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str'](focusX);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
					$pyjs['track']['lineno']=292;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return shapeStr['append']('%,');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
					$pyjs['track']['lineno']=293;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return shapeStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str'](focusY);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
					$pyjs['track']['lineno']=294;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return shapeStr['append']('%,');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
				}
				$pyjs['track']['lineno']=296;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('" angle="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
				$pyjs['track']['lineno']=297;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr']($p['getattr'](style, 'gradient'), 'angle'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['style'],['shapeStr']]);
			$cls_definition['appendGradient'] = $method;
			$pyjs['track']['lineno']=299;
			$method = $pyjs__bind_method2('appendStroke', function(shapeStr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					shapeStr = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul14,$mul13;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':299};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=299;
				$pyjs['track']['lineno']=301;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('<v:stroke opacity="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
				$pyjs['track']['lineno']=302;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']((typeof ($mul13=$p['getattr']($p['getattr'](self, 'context'), 'globalAlpha'))==typeof ($mul14=$p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'alpha')) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
				$pyjs['track']['lineno']=304;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('"');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
				$pyjs['track']['lineno']=306;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'type'), 'Gradient'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})()) {
					$pyjs['track']['lineno']=307;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'gradient'), 'colorStops'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})(), $constant_int_0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})()) {
						$pyjs['track']['lineno']=308;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['appendGradient']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), shapeStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=310;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return shapeStr['append'](' color="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
					$pyjs['track']['lineno']=311;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return shapeStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'color'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})();
				}
				$pyjs['track']['lineno']=313;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('" miterlimit="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
				$pyjs['track']['lineno']=314;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr']($p['getattr'](self, 'context'), 'miterLimit'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
				$pyjs['track']['lineno']=315;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('" joinstyle="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
				$pyjs['track']['lineno']=316;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']($p['getattr']($p['getattr'](self, 'context'), 'lineJoin'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
				$pyjs['track']['lineno']=317;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('" endcap="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})();
				$pyjs['track']['lineno']=318;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']($p['getattr']($p['getattr'](self, 'context'), 'lineCap'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
				$pyjs['track']['lineno']=320;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('"></v:stroke>');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['shapeStr']]);
			$cls_definition['appendStroke'] = $method;
			$pyjs['track']['lineno']=323;
			$method = $pyjs__bind_method2('appendFill', function(shapeStr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					shapeStr = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul16,$mul15;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':323};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=323;
				$pyjs['track']['lineno']=325;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('<v:fill opacity="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
				$pyjs['track']['lineno']=326;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']((typeof ($mul15=$p['getattr']($p['getattr'](self, 'context'), 'globalAlpha'))==typeof ($mul16=$p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'alpha')) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
				$pyjs['track']['lineno']=328;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('"');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
				$pyjs['track']['lineno']=330;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'type'), 'Gradient'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})()) {
					$pyjs['track']['lineno']=331;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'gradient'), 'colorStops'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})(), $constant_int_0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})()) {
						$pyjs['track']['lineno']=332;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['appendGradient']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), shapeStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=334;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return shapeStr['append'](' color="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
					$pyjs['track']['lineno']=335;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return shapeStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'color'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})();
				}
				$pyjs['track']['lineno']=337;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('"></v:fill>');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['shapeStr']]);
			$cls_definition['appendFill'] = $method;
			$pyjs['track']['lineno']=340;
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
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var shapeStr,daStr;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':340};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=340;
				$pyjs['track']['lineno']=341;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, 'pathStr'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})(), $constant_int_0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})()) {
					$pyjs['track']['lineno']=342;
					$pyjs['track']['lineno']=342;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=344;
				shapeStr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
				$pyjs['track']['lineno']=345;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('<v:shape style="position:absolute;width:10;height:10;" coordsize="100,100');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
				$pyjs['track']['lineno']=347;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('" stroked="f" path="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
				$pyjs['track']['lineno']=348;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['join']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})();
				$pyjs['track']['lineno']=349;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append'](' e">');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
				$pyjs['track']['lineno']=351;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendFill'](shapeStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
				$pyjs['track']['lineno']=353;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('</v:shape>');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})();
				$pyjs['track']['lineno']=355;
				daStr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return ''['join'](shapeStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
				$pyjs['track']['lineno']=357;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['insert']($p['getattr']($p['getattr'](self, 'context'), 'globalCompositeOperation'), daStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['fill'] = $method;
			$pyjs['track']['lineno']=359;
			$method = $pyjs__bind_method2('stroke', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var shapeStr,daStr;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':359};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=359;
				$pyjs['track']['lineno']=360;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, 'pathStr'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})(), $constant_int_0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})()) {
					$pyjs['track']['lineno']=361;
					$pyjs['track']['lineno']=361;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=363;
				shapeStr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
				$pyjs['track']['lineno']=364;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('<v:shape style="position:absolute;');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
				$pyjs['track']['lineno']=365;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('width:10; height:10;');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})();
				$pyjs['track']['lineno']=366;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('" coordsize="100,100');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})();
				$pyjs['track']['lineno']=367;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('" filled="f');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
				$pyjs['track']['lineno']=368;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('" stroked="t');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})();
				$pyjs['track']['lineno']=369;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('" strokeweight="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})();
				$pyjs['track']['lineno']=370;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr']($p['getattr'](self, 'context'), 'lineWidth'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
				$pyjs['track']['lineno']=371;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('px" path="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
				$pyjs['track']['lineno']=372;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['join']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
				$pyjs['track']['lineno']=373;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append'](' e">');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
				$pyjs['track']['lineno']=375;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendStroke'](shapeStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})();
				$pyjs['track']['lineno']=377;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return shapeStr['append']('<v:shape>');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
				$pyjs['track']['lineno']=379;
				daStr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return ''['join'](shapeStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})();
				$pyjs['track']['lineno']=381;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['insert']($p['getattr']($p['getattr'](self, 'context'), 'globalCompositeOperation'), daStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['stroke'] = $method;
			$pyjs['track']['lineno']=383;
			$method = $pyjs__bind_method2('fillRect', function(x, y, w, h) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					w = arguments[3];
					h = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add25,$add24,$add26,$add23;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':383};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=383;
				$pyjs['track']['lineno']=384;
				w = $p['__op_add']($add23=w,$add24=x);
				$pyjs['track']['lineno']=385;
				h = $p['__op_add']($add25=h,$add26=y);
				$pyjs['track']['lineno']=386;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['beginPath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
				$pyjs['track']['lineno']=387;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['moveTo'](x, y);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
				$pyjs['track']['lineno']=388;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['lineTo'](x, h);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})();
				$pyjs['track']['lineno']=389;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['lineTo'](w, h);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})();
				$pyjs['track']['lineno']=390;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['lineTo'](w, y);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})();
				$pyjs['track']['lineno']=391;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['closePath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})();
				$pyjs['track']['lineno']=392;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['fill']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
				$pyjs['track']['lineno']=393;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
			$cls_definition['fillRect'] = $method;
			$pyjs['track']['lineno']=396;
			$method = $pyjs__bind_method2('getContext', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':396};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=396;
				$pyjs['track']['lineno']=397;
				$pyjs['track']['lineno']=397;
				var $pyjs__ret = $p['getattr'](self, 'context');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getContext'] = $method;
			$pyjs['track']['lineno']=400;
			$method = $pyjs__bind_method2('getCoordX', function(matrix, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					matrix = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul17,$add28,$div18,$div17,$sub16,$mul19,$mul18,$sub15,$add29,$add27,coordX,$mul22,$add30,$mul20,$mul21;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':400};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=400;
				$pyjs['track']['lineno']=401;
				coordX = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['math']['floor']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['math']['floor']($p['__op_sub']($sub15=(typeof ($mul21=$constant_int_10)==typeof ($mul22=$p['__op_add']($add29=$p['__op_add']($add27=(typeof ($mul17=matrix['__getitem__']($constant_int_0))==typeof ($mul18=x) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)),$add28=(typeof ($mul19=matrix['__getitem__']($constant_int_1))==typeof ($mul20=y) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20))),$add30=matrix['__getitem__']($constant_int_2))) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22)),$sub16=4.5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})();
				$pyjs['track']['lineno']=404;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['logCoordX']((typeof ($div17=coordX)==typeof ($div18=$constant_int_10) && typeof $div17=='number' && $div18 !== 0?
					$div17/$div18:
					$p['op_div']($div17,$div18)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})();
				$pyjs['track']['lineno']=405;
				$pyjs['track']['lineno']=405;
				var $pyjs__ret = coordX;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['matrix'],['x'],['y']]);
			$cls_definition['getCoordX'] = $method;
			$pyjs['track']['lineno']=408;
			$method = $pyjs__bind_method2('getCoordY', function(matrix, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					matrix = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div20,$sub18,$add32,$add33,$add31,$sub17,$add34,$mul26,$mul28,$mul27,$mul24,$mul25,$mul23,coordY,$div19;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':408};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=408;
				$pyjs['track']['lineno']=409;
				coordY = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['math']['floor']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['math']['floor']($p['__op_sub']($sub17=(typeof ($mul27=$constant_int_10)==typeof ($mul28=$p['__op_add']($add33=$p['__op_add']($add31=(typeof ($mul23=matrix['__getitem__']($constant_int_3))==typeof ($mul24=x) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24)),$add32=(typeof ($mul25=matrix['__getitem__']($constant_int_4))==typeof ($mul26=y) && typeof $mul25=='number'?
					$mul25*$mul26:
					$p['op_mul']($mul25,$mul26))),$add34=matrix['__getitem__']($constant_int_5))) && typeof $mul27=='number'?
					$mul27*$mul28:
					$p['op_mul']($mul27,$mul28)),$sub18=4.5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})();
				$pyjs['track']['lineno']=412;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['logCoordY']((typeof ($div19=coordY)==typeof ($div20=$constant_int_10) && typeof $div19=='number' && $div20 !== 0?
					$div19/$div20:
					$p['op_div']($div19,$div20)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})();
				$pyjs['track']['lineno']=413;
				$pyjs['track']['lineno']=413;
				var $pyjs__ret = coordY;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['matrix'],['x'],['y']]);
			$cls_definition['getCoordY'] = $method;
			$pyjs['track']['lineno']=416;
			$method = $pyjs__bind_method2('getFillStyle', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':416};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=416;
				$pyjs['track']['lineno']=417;
				$pyjs['track']['lineno']=417;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'context'), 'fillStyle');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFillStyle'] = $method;
			$pyjs['track']['lineno']=420;
			$method = $pyjs__bind_method2('getGlobalAlpha', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':420};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=420;
				$pyjs['track']['lineno']=421;
				$pyjs['track']['lineno']=421;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'context'), 'globalAlpha');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getGlobalAlpha'] = $method;
			$pyjs['track']['lineno']=424;
			$method = $pyjs__bind_method2('getGlobalCompositeOperation', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':424};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=424;
				$pyjs['track']['lineno']=425;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'context'), 'globalCompositeOperation'), $m['DESTINATION_OVER']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})()) {
					$pyjs['track']['lineno']=426;
					$pyjs['track']['lineno']=426;
					var $pyjs__ret = $p['getattr']($m['GWTCanvasConsts'], 'DESTINATION_OVER');
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=428;
					$pyjs['track']['lineno']=428;
					var $pyjs__ret = $p['getattr']($m['GWTCanvasConsts'], 'SOURCE_OVER');
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getGlobalCompositeOperation'] = $method;
			$pyjs['track']['lineno']=432;
			$method = $pyjs__bind_method2('getLineCap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':432};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=432;
				$pyjs['track']['lineno']=433;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'context'), 'lineCap'), $m['BUTT']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})()) {
					$pyjs['track']['lineno']=434;
					$pyjs['track']['lineno']=434;
					var $pyjs__ret = $p['getattr']($m['GWTCanvasConsts'], 'BUTT');
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=436;
				$pyjs['track']['lineno']=436;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'context'), 'lineCap');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLineCap'] = $method;
			$pyjs['track']['lineno']=439;
			$method = $pyjs__bind_method2('getLineJoin', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':439};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=439;
				$pyjs['track']['lineno']=440;
				$pyjs['track']['lineno']=440;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'context'), 'lineJoin');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLineJoin'] = $method;
			$pyjs['track']['lineno']=443;
			$method = $pyjs__bind_method2('getLineWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':443};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=443;
				$pyjs['track']['lineno']=444;
				$pyjs['track']['lineno']=444;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'context'), 'lineWidth');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLineWidth'] = $method;
			$pyjs['track']['lineno']=447;
			$method = $pyjs__bind_method2('getMiterLimit', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':447};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=447;
				$pyjs['track']['lineno']=448;
				$pyjs['track']['lineno']=448;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'context'), 'miterLimit');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMiterLimit'] = $method;
			$pyjs['track']['lineno']=451;
			$method = $pyjs__bind_method2('getStrokeStyle', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':451};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=451;
				$pyjs['track']['lineno']=452;
				$pyjs['track']['lineno']=452;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getStrokeStyle'] = $method;
			$pyjs['track']['lineno']=455;
			$method = $pyjs__bind_method2('lineTo', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':455};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=455;
				$pyjs['track']['lineno']=456;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PathElement']['lineTo'](x, y, self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})();
				$pyjs['track']['lineno']=457;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentX', x) : $p['setattr'](self, 'currentX', x); 
				$pyjs['track']['lineno']=458;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentY', y) : $p['setattr'](self, 'currentY', y); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['lineTo'] = $method;
			$pyjs['track']['lineno']=461;
			$method = $pyjs__bind_method2('moveTo', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':461};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=461;
				$pyjs['track']['lineno']=462;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PathElement']['moveTo'](x, y, self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})();
				$pyjs['track']['lineno']=463;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentX', x) : $p['setattr'](self, 'currentX', x); 
				$pyjs['track']['lineno']=464;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentY', y) : $p['setattr'](self, 'currentY', y); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['moveTo'] = $method;
			$pyjs['track']['lineno']=467;
			$method = $pyjs__bind_method2('quadraticCurveTo', function(cpx, cpy, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					cpx = arguments[1];
					cpy = arguments[2];
					x = arguments[3];
					y = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub22,$sub23,$sub20,$sub21,$sub26,$sub24,$sub25,cp2y,cp2x,$add42,$add41,$add40,$mul29,$add39,$sub19,$add38,cp1x,cp1y,$div21,$div23,$div22,$div25,$div24,$div27,$div26,$div28,$add36,$add37,$add35,$mul31,$mul30,$mul32;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':467};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=467;
				$pyjs['track']['lineno']=468;
				cp1x = $p['__op_add']($add35=$p['getattr'](self, 'currentX'),$add36=(typeof ($mul29=(typeof ($div21=2.0)==typeof ($div22=3.0) && typeof $div21=='number' && $div22 !== 0?
					$div21/$div22:
					$p['op_div']($div21,$div22)))==typeof ($mul30=$p['__op_sub']($sub19=cpx,$sub20=$p['getattr'](self, 'currentX'))) && typeof $mul29=='number'?
					$mul29*$mul30:
					$p['op_mul']($mul29,$mul30)));
				$pyjs['track']['lineno']=469;
				cp1y = $p['__op_add']($add37=$p['getattr'](self, 'currentY'),$add38=(typeof ($mul31=(typeof ($div23=2.0)==typeof ($div24=3.0) && typeof $div23=='number' && $div24 !== 0?
					$div23/$div24:
					$p['op_div']($div23,$div24)))==typeof ($mul32=$p['__op_sub']($sub21=cpy,$sub22=$p['getattr'](self, 'currentY'))) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32)));
				$pyjs['track']['lineno']=470;
				cp2x = $p['__op_add']($add39=cp1x,$add40=(typeof ($div25=$p['__op_sub']($sub23=x,$sub24=$p['getattr'](self, 'currentX')))==typeof ($div26=3.0) && typeof $div25=='number' && $div26 !== 0?
					$div25/$div26:
					$p['op_div']($div25,$div26)));
				$pyjs['track']['lineno']=471;
				cp2y = $p['__op_add']($add41=cp1y,$add42=(typeof ($div27=$p['__op_sub']($sub25=y,$sub26=$p['getattr'](self, 'currentY')))==typeof ($div28=3.0) && typeof $div27=='number' && $div28 !== 0?
					$div27/$div28:
					$p['op_div']($div27,$div28)));
				$pyjs['track']['lineno']=472;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PathElement']['bezierCurveTo'](cp1x, cp1y, cp2x, cp2y, x, y, self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})();
				$pyjs['track']['lineno']=473;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentX', x) : $p['setattr'](self, 'currentX', x); 
				$pyjs['track']['lineno']=474;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentY', y) : $p['setattr'](self, 'currentY', y); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['cpx'],['cpy'],['x'],['y']]);
			$cls_definition['quadraticCurveTo'] = $method;
			$pyjs['track']['lineno']=477;
			$method = $pyjs__bind_method2('rect', function(x, y, w, h) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					w = arguments[3];
					h = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add50,$add51,$add52,$add49,$add48,$add47,$add44,$add43,$add46,$add45;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':477};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=477;
				$pyjs['track']['lineno']=478;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PathElement']['moveTo'](x, y, self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})();
				$pyjs['track']['lineno']=479;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PathElement']['lineTo']($p['__op_add']($add43=x,$add44=w), y, self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})();
				$pyjs['track']['lineno']=480;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PathElement']['lineTo']($p['__op_add']($add45=x,$add46=w), $p['__op_add']($add47=y,$add48=h), self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})();
				$pyjs['track']['lineno']=481;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PathElement']['lineTo'](x, $p['__op_add']($add49=y,$add50=h), self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})();
				$pyjs['track']['lineno']=482;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['PathElement']['closePath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})();
				$pyjs['track']['lineno']=483;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentX', x) : $p['setattr'](self, 'currentX', x); 
				$pyjs['track']['lineno']=484;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentY', $p['__op_add']($add51=y,$add52=h)) : $p['setattr'](self, 'currentY', $p['__op_add']($add51=y,$add52=h)); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
			$cls_definition['rect'] = $method;
			$pyjs['track']['lineno']=487;
			$method = $pyjs__bind_method2('restoreContext', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':487};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=487;
				$pyjs['track']['lineno']=488;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, 'contextStack'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})(), $constant_int_0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})()) {
					$pyjs['track']['lineno']=489;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['contextStack']['pop']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})()) : $p['setattr'](self, 'context', (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['contextStack']['pop']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})()); 
					$pyjs['track']['lineno']=490;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix', $p['getattr']($p['getattr'](self, 'context'), 'matrix')) : $p['setattr'](self, 'matrix', $p['getattr']($p['getattr'](self, 'context'), 'matrix')); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['restoreContext'] = $method;
			$pyjs['track']['lineno']=494;
			$method = $pyjs__bind_method2('rotate', function(angle) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					angle = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub27,$sub28,$sub29,$mul44,$mul45,$mul47,$mul40,$mul41,$mul42,$mul43,m1,m2,$sub30,$add53,$mul48,a,c,b,$add54,$add55,$add56,s,$mul39,$mul38,$mul35,$mul34,$mul37,$mul36,$mul46,$mul33;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':494};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=494;
				$pyjs['track']['lineno']=495;
				s = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['math']['sin']((typeof ($usub1=angle)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})();
				$pyjs['track']['lineno']=496;
				c = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['math']['cos']((typeof ($usub2=angle)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})();
				$pyjs['track']['lineno']=497;
				a = $p['getattr'](self, 'matrix')['__getitem__']($constant_int_0);
				$pyjs['track']['lineno']=498;
				b = $p['getattr'](self, 'matrix')['__getitem__']($constant_int_1);
				$pyjs['track']['lineno']=499;
				m1 = (typeof ($mul33=a)==typeof ($mul34=c) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34));
				$pyjs['track']['lineno']=500;
				m2 = (typeof ($mul35=b)==typeof ($mul36=s) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36));
				$pyjs['track']['lineno']=501;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'matrix')['__setitem__']($constant_int_0, $p['__op_sub']($sub27=m1,$sub28=m2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})();
				$pyjs['track']['lineno']=502;
				m1 = (typeof ($mul37=a)==typeof ($mul38=s) && typeof $mul37=='number'?
					$mul37*$mul38:
					$p['op_mul']($mul37,$mul38));
				$pyjs['track']['lineno']=503;
				m2 = (typeof ($mul39=b)==typeof ($mul40=c) && typeof $mul39=='number'?
					$mul39*$mul40:
					$p['op_mul']($mul39,$mul40));
				$pyjs['track']['lineno']=504;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'matrix')['__setitem__']($constant_int_1, $p['__op_add']($add53=m1,$add54=m2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})();
				$pyjs['track']['lineno']=505;
				a = $p['getattr'](self, 'matrix')['__getitem__']($constant_int_3);
				$pyjs['track']['lineno']=506;
				b = $p['getattr'](self, 'matrix')['__getitem__']($constant_int_4);
				$pyjs['track']['lineno']=507;
				m1 = (typeof ($mul41=a)==typeof ($mul42=c) && typeof $mul41=='number'?
					$mul41*$mul42:
					$p['op_mul']($mul41,$mul42));
				$pyjs['track']['lineno']=508;
				m2 = (typeof ($mul43=b)==typeof ($mul44=s) && typeof $mul43=='number'?
					$mul43*$mul44:
					$p['op_mul']($mul43,$mul44));
				$pyjs['track']['lineno']=509;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'matrix')['__setitem__']($constant_int_3, $p['__op_sub']($sub29=m1,$sub30=m2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})();
				$pyjs['track']['lineno']=510;
				m1 = (typeof ($mul45=a)==typeof ($mul46=s) && typeof $mul45=='number'?
					$mul45*$mul46:
					$p['op_mul']($mul45,$mul46));
				$pyjs['track']['lineno']=511;
				m2 = (typeof ($mul47=b)==typeof ($mul48=c) && typeof $mul47=='number'?
					$mul47*$mul48:
					$p['op_mul']($mul47,$mul48));
				$pyjs['track']['lineno']=512;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'matrix')['__setitem__']($constant_int_4, $p['__op_add']($add55=m1,$add56=m2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['angle']]);
			$cls_definition['rotate'] = $method;
			$pyjs['track']['lineno']=515;
			$method = $pyjs__bind_method2('saveContext', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':515};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=515;
				$pyjs['track']['lineno']=516;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['contextStack']['append']($p['getattr'](self, 'context'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})();
				$pyjs['track']['lineno']=517;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['VMLContext']($p['getattr'](self, 'context'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})()) : $p['setattr'](self, 'context', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['VMLContext']($p['getattr'](self, 'context'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})()); 
				$pyjs['track']['lineno']=518;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix', $p['getattr']($p['getattr'](self, 'context'), 'matrix')) : $p['setattr'](self, 'matrix', $p['getattr']($p['getattr'](self, 'context'), 'matrix')); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['saveContext'] = $method;
			$pyjs['track']['lineno']=521;
			$method = $pyjs__bind_method2('scale', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul60,$mul49,$augexpr1,$augexpr3,$augexpr2,$augexpr4,$augsub4,$augsub3,$augsub2,$augsub1,$mul59,$mul58,$mul53,$mul52,$mul51,$mul50,$mul57,$mul56,$mul55,$mul54;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':521};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=521;
				$pyjs['track']['lineno']=522;
				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('arcScaleX', (typeof ($mul49=$p['getattr']($p['getattr'](self, 'context'), 'arcScaleX'))==typeof ($mul50=x) && typeof $mul49=='number'?
					$mul49*$mul50:
					$p['op_mul']($mul49,$mul50))) : $p['setattr']($p['getattr'](self, 'context'), 'arcScaleX', (typeof ($mul49=$p['getattr']($p['getattr'](self, 'context'), 'arcScaleX'))==typeof ($mul50=x) && typeof $mul49=='number'?
					$mul49*$mul50:
					$p['op_mul']($mul49,$mul50))); 
				$pyjs['track']['lineno']=523;
				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('arcScaleY', (typeof ($mul51=$p['getattr']($p['getattr'](self, 'context'), 'arcScaleY'))==typeof ($mul52=y) && typeof $mul51=='number'?
					$mul51*$mul52:
					$p['op_mul']($mul51,$mul52))) : $p['setattr']($p['getattr'](self, 'context'), 'arcScaleY', (typeof ($mul51=$p['getattr']($p['getattr'](self, 'context'), 'arcScaleY'))==typeof ($mul52=y) && typeof $mul51=='number'?
					$mul51*$mul52:
					$p['op_mul']($mul51,$mul52))); 
				$pyjs['track']['lineno']=524;
				var $augsub1 = $constant_int_0;
				var $augexpr1 = $p['getattr'](self, 'matrix');
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $augexpr1['__setitem__']($augsub1, (typeof ($mul53=$augexpr1['__getitem__']($augsub1))==typeof ($mul54=x) && typeof $mul53=='number'?
					$mul53*$mul54:
					$p['op_mul']($mul53,$mul54)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})();
				$pyjs['track']['lineno']=525;
				var $augsub2 = $constant_int_1;
				var $augexpr2 = $p['getattr'](self, 'matrix');
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $augexpr2['__setitem__']($augsub2, (typeof ($mul55=$augexpr2['__getitem__']($augsub2))==typeof ($mul56=y) && typeof $mul55=='number'?
					$mul55*$mul56:
					$p['op_mul']($mul55,$mul56)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})();
				$pyjs['track']['lineno']=526;
				var $augsub3 = $constant_int_3;
				var $augexpr3 = $p['getattr'](self, 'matrix');
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $augexpr3['__setitem__']($augsub3, (typeof ($mul57=$augexpr3['__getitem__']($augsub3))==typeof ($mul58=x) && typeof $mul57=='number'?
					$mul57*$mul58:
					$p['op_mul']($mul57,$mul58)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})();
				$pyjs['track']['lineno']=527;
				var $augsub4 = $constant_int_4;
				var $augexpr4 = $p['getattr'](self, 'matrix');
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $augexpr4['__setitem__']($augsub4, (typeof ($mul59=$augexpr4['__getitem__']($augsub4))==typeof ($mul60=y) && typeof $mul59=='number'?
					$mul59*$mul60:
					$p['op_mul']($mul59,$mul60)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['scale'] = $method;
			$pyjs['track']['lineno']=530;
			$method = $pyjs__bind_method2('setBackgroundColor', function(element, color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					color = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':530};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=530;
				$pyjs['track']['lineno']=531;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setStyleAttribute'](element, 'backgroundColor', color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['element'],['color']]);
			$cls_definition['setBackgroundColor'] = $method;
			$pyjs['track']['lineno']=534;
			$method = $pyjs__bind_method2('setCoordHeight', function(elem, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':534};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=534;
				$pyjs['track']['lineno']=535;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setElemAttribute'](elem, 'width', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})();
				$pyjs['track']['lineno']=536;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['clear']($constant_int_0, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['elem'],['height']]);
			$cls_definition['setCoordHeight'] = $method;
			$pyjs['track']['lineno']=539;
			$method = $pyjs__bind_method2('setCoordWidth', function(elem, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					width = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':539};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=539;
				$pyjs['track']['lineno']=540;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setElemAttribute'](elem, 'width', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['int'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})();
				$pyjs['track']['lineno']=541;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['clear']($constant_int_0, $constant_int_0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['elem'],['width']]);
			$cls_definition['setCoordWidth'] = $method;
			$pyjs['track']['lineno']=544;
			$method = $pyjs__bind_method2('setCurrentX', function(currentX) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					currentX = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':544};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=544;
				$pyjs['track']['lineno']=545;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentX', currentX) : $p['setattr'](self, 'currentX', currentX); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['currentX']]);
			$cls_definition['setCurrentX'] = $method;
			$pyjs['track']['lineno']=548;
			$method = $pyjs__bind_method2('setCurrentY', function(currentY) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					currentY = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':548};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=548;
				$pyjs['track']['lineno']=549;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentY', currentY) : $p['setattr'](self, 'currentY', currentY); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['currentY']]);
			$cls_definition['setCurrentY'] = $method;
			$pyjs['track']['lineno']=557;
			$method = $pyjs__bind_method2('setFillStyle', function(fillStyle) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					fillStyle = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add65,$add64,$add67,$add66,end,$add60,$add63,$add57,$add58,$add59,guts,$add68,$add61,$add62;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':557};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=557;
				$pyjs['track']['lineno']=560;
				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('fillStyle', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['VMLStyle']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})()) : $p['setattr']($p['getattr'](self, 'context'), 'fillStyle', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['VMLStyle']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})()); 
				$pyjs['track']['lineno']=562;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](fillStyle, $m['CanvasGradientImplIE6']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})()) {
					$pyjs['track']['lineno']=563;
					$p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__']('type', 'Gradient') : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'type', 'Gradient'); 
					$pyjs['track']['lineno']=564;
					$p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__']('gradient', fillStyle) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'gradient', fillStyle); 
				}
				else {
					$pyjs['track']['lineno']=568;
					fillStyle = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str'](fillStyle);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})()['strip']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})();
					$pyjs['track']['lineno']=569;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return fillStyle['startswith']('rgba(');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})()) {
						$pyjs['track']['lineno']=570;
						end = (function(){try{try{$pyjs['in_try_except'] += 1;
						return fillStyle['find'](')', $constant_int_12);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})();
						$pyjs['track']['lineno']=571;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['cmp'](end, (typeof ($usub3=$constant_int_1)=='number'?
							-$usub3:
							$p['op_usub']($usub3))) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})()) {
							$pyjs['track']['lineno']=572;
							guts = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['__getslice'](fillStyle, $constant_int_5, end)['$$split'](',');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})();
							$pyjs['track']['lineno']=573;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['len'](guts);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})(), $constant_int_4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})()) {
								$pyjs['track']['lineno']=574;
								$p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__']('alpha', (function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['float'](guts['__getitem__']($constant_int_3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})()) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'alpha', (function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['float'](guts['__getitem__']($constant_int_3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})()); 
								$pyjs['track']['lineno']=575;
								$p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__']('color', $p['__op_add']($add67=$p['__op_add']($add65=$p['__op_add']($add63=$p['__op_add']($add61=$p['__op_add']($add59=$p['__op_add']($add57='rgb(',$add58=guts['__getitem__']($constant_int_0)),$add60=','),$add62=guts['__getitem__']($constant_int_1)),$add64=','),$add66=guts['__getitem__']($constant_int_2)),$add68=')')) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'color', $p['__op_add']($add67=$p['__op_add']($add65=$p['__op_add']($add63=$p['__op_add']($add61=$p['__op_add']($add59=$p['__op_add']($add57='rgb(',$add58=guts['__getitem__']($constant_int_0)),$add60=','),$add62=guts['__getitem__']($constant_int_1)),$add64=','),$add66=guts['__getitem__']($constant_int_2)),$add68=')')); 
							}
						}
					}
					else {
						$pyjs['track']['lineno']=578;
						$p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__']('color', fillStyle) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'color', fillStyle); 
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['fillStyle']]);
			$cls_definition['setFillStyle'] = $method;
			$pyjs['track']['lineno']=585;
			$method = $pyjs__bind_method2('setStrokeStyle', function(strokeStyle) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					strokeStyle = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add76,$add74,$add75,end,$add73,$add70,$add71,guts,$add69,$add78,$add79,$add80,$add77,$add72;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':585};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=585;
				$pyjs['track']['lineno']=586;
				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('strokeStyle', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['VMLStyle']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})()) : $p['setattr']($p['getattr'](self, 'context'), 'strokeStyle', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['VMLStyle']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})()); 
				$pyjs['track']['lineno']=588;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](strokeStyle, $m['CanvasGradientImplIE6']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})()) {
					$pyjs['track']['lineno']=589;
					$p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__']('type', 'Gradient') : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'type', 'Gradient'); 
					$pyjs['track']['lineno']=590;
					$p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__']('gradient', strokeStyle) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'gradient', strokeStyle); 
				}
				else {
					$pyjs['track']['lineno']=592;
					strokeStyle = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str'](strokeStyle);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})()['strip']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})();
					$pyjs['track']['lineno']=593;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return strokeStyle['startswith']('rgba(');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})()) {
						$pyjs['track']['lineno']=594;
						end = (function(){try{try{$pyjs['in_try_except'] += 1;
						return strokeStyle['find'](')', $constant_int_12);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})();
						$pyjs['track']['lineno']=595;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['cmp'](end, (typeof ($usub4=$constant_int_1)=='number'?
							-$usub4:
							$p['op_usub']($usub4))) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})()) {
							$pyjs['track']['lineno']=596;
							guts = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['__getslice'](strokeStyle, $constant_int_5, end)['$$split'](',');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})();
							$pyjs['track']['lineno']=597;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['len'](guts);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})(), $constant_int_4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})()) {
								$pyjs['track']['lineno']=598;
								$p['getattr']($p['getattr'](self, 'context'), 'stokeStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'stokeStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'stokeStyle')['__setattr__']('alpha', (function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['float'](guts['__getitem__']($constant_int_3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})()) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'stokeStyle'), 'alpha', (function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['float'](guts['__getitem__']($constant_int_3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})()); 
								$pyjs['track']['lineno']=599;
								$p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__']('color', $p['__op_add']($add79=$p['__op_add']($add77=$p['__op_add']($add75=$p['__op_add']($add73=$p['__op_add']($add71=$p['__op_add']($add69='rgb(',$add70=guts['__getitem__']($constant_int_0)),$add72=','),$add74=guts['__getitem__']($constant_int_1)),$add76=','),$add78=guts['__getitem__']($constant_int_2)),$add80=')')) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'color', $p['__op_add']($add79=$p['__op_add']($add77=$p['__op_add']($add75=$p['__op_add']($add73=$p['__op_add']($add71=$p['__op_add']($add69='rgb(',$add70=guts['__getitem__']($constant_int_0)),$add72=','),$add74=guts['__getitem__']($constant_int_1)),$add76=','),$add78=guts['__getitem__']($constant_int_2)),$add80=')')); 
							}
						}
					}
					else {
						$pyjs['track']['lineno']=602;
						$p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__']('color', strokeStyle) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'color', strokeStyle); 
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['strokeStyle']]);
			$cls_definition['setStrokeStyle'] = $method;
			$pyjs['track']['lineno']=605;
			$method = $pyjs__bind_method2('setGlobalAlpha', function(globalAlpha) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					globalAlpha = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':605};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=605;
				$pyjs['track']['lineno']=606;
				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('globalAlpha', globalAlpha) : $p['setattr']($p['getattr'](self, 'context'), 'globalAlpha', globalAlpha); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['globalAlpha']]);
			$cls_definition['setGlobalAlpha'] = $method;
			$pyjs['track']['lineno']=609;
			$method = $pyjs__bind_method2('setGlobalCompositeOperation', function(gco) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					gco = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':609};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=609;
				$pyjs['track']['lineno']=610;
				gco = (function(){try{try{$pyjs['in_try_except'] += 1;
				return gco['strip']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})();
				$pyjs['track']['lineno']=611;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](gco, 'lower'), $p['getattr']($m['GWTCanvasConsts'], 'SOURCE_OVER')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})()) {
					$pyjs['track']['lineno']=612;
					$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('globalCompositeOperation', $m['SOURCE_OVER']) : $p['setattr']($p['getattr'](self, 'context'), 'globalCompositeOperation', $m['SOURCE_OVER']); 
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](gco, 'lower'), $p['getattr']($m['GWTCanvasConsts'], 'DESTINATION_OVER')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_284_err){if (!$p['isinstance']($pyjs_dbg_284_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_284_err);}throw $pyjs_dbg_284_err;
}})()) {
					$pyjs['track']['lineno']=614;
					$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('globalCompositeOperation', $m['DESTINATION_OVER']) : $p['setattr']($p['getattr'](self, 'context'), 'globalCompositeOperation', $m['DESTINATION_OVER']); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['gco']]);
			$cls_definition['setGlobalCompositeOperation'] = $method;
			$pyjs['track']['lineno']=618;
			$method = $pyjs__bind_method2('setLineCap', function(lineCap) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lineCap = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':618};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=618;
				$pyjs['track']['lineno']=619;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return lineCap['strip']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_285_err){if (!$p['isinstance']($pyjs_dbg_285_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_285_err);}throw $pyjs_dbg_285_err;
}})(), 'lower'), $p['getattr']($m['GWTCanvasConsts'], 'BUTT')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_286_err){if (!$p['isinstance']($pyjs_dbg_286_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_286_err);}throw $pyjs_dbg_286_err;
}})()) {
					$pyjs['track']['lineno']=620;
					$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('lineCap', $m['BUTT']) : $p['setattr']($p['getattr'](self, 'context'), 'lineCap', $m['BUTT']); 
				}
				else {
					$pyjs['track']['lineno']=622;
					$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('lineCap', lineCap) : $p['setattr']($p['getattr'](self, 'context'), 'lineCap', lineCap); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['lineCap']]);
			$cls_definition['setLineCap'] = $method;
			$pyjs['track']['lineno']=626;
			$method = $pyjs__bind_method2('setLineJoin', function(lineJoin) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lineJoin = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':626};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=626;
				$pyjs['track']['lineno']=627;
				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('lineJoin', lineJoin) : $p['setattr']($p['getattr'](self, 'context'), 'lineJoin', lineJoin); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['lineJoin']]);
			$cls_definition['setLineJoin'] = $method;
			$pyjs['track']['lineno']=630;
			$method = $pyjs__bind_method2('setLineWidth', function(lineWidth) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lineWidth = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':630};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=630;
				$pyjs['track']['lineno']=631;
				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('lineWidth', lineWidth) : $p['setattr']($p['getattr'](self, 'context'), 'lineWidth', lineWidth); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['lineWidth']]);
			$cls_definition['setLineWidth'] = $method;
			$pyjs['track']['lineno']=634;
			$method = $pyjs__bind_method2('setMiterLimit', function(miterLimit) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					miterLimit = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':634};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=634;
				$pyjs['track']['lineno']=635;
				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('miterLimit', miterLimit) : $p['setattr']($p['getattr'](self, 'context'), 'miterLimit', miterLimit); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['miterLimit']]);
			$cls_definition['setMiterLimit'] = $method;
			$pyjs['track']['lineno']=637;
			$method = $pyjs__bind_method2('setParentElement', function(g) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					g = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':637};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=637;
				$pyjs['track']['lineno']=638;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentElement', g) : $p['setattr'](self, 'parentElement', g); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['g']]);
			$cls_definition['setParentElement'] = $method;
			$pyjs['track']['lineno']=641;
			$method = $pyjs__bind_method2('setPixelHeight', function(elem, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add82,$add81;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':641};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=641;
				$pyjs['track']['lineno']=642;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setStyleAttribute'](elem, 'height', $p['__op_add']($add81=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_287_err){if (!$p['isinstance']($pyjs_dbg_287_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_287_err);}throw $pyjs_dbg_287_err;
}})(),$add82='px'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_288_err){if (!$p['isinstance']($pyjs_dbg_288_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_288_err);}throw $pyjs_dbg_288_err;
}})();
				$pyjs['track']['lineno']=643;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentHeight', height) : $p['setattr'](self, 'parentHeight', height); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['elem'],['height']]);
			$cls_definition['setPixelHeight'] = $method;
			$pyjs['track']['lineno']=646;
			$method = $pyjs__bind_method2('setPixelWidth', function(elem, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					width = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add83,$add84;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':646};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=646;
				$pyjs['track']['lineno']=647;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setStyleAttribute'](elem, 'width', $p['__op_add']($add83=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_289_err){if (!$p['isinstance']($pyjs_dbg_289_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_289_err);}throw $pyjs_dbg_289_err;
}})(),$add84='px'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_290_err){if (!$p['isinstance']($pyjs_dbg_290_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_290_err);}throw $pyjs_dbg_290_err;
}})();
				$pyjs['track']['lineno']=648;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentWidth', width) : $p['setattr'](self, 'parentWidth', width); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['elem'],['width']]);
			$cls_definition['setPixelWidth'] = $method;
			$pyjs['track']['lineno']=651;
			$method = $pyjs__bind_method2('strokeRect', function(x, y, w, h) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					w = arguments[3];
					h = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add88,$add87,$add86,$add85;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':651};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=651;
				$pyjs['track']['lineno']=652;
				w = $p['__op_add']($add85=w,$add86=x);
				$pyjs['track']['lineno']=653;
				h = $p['__op_add']($add87=h,$add88=y);
				$pyjs['track']['lineno']=654;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['beginPath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_291_err){if (!$p['isinstance']($pyjs_dbg_291_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_291_err);}throw $pyjs_dbg_291_err;
}})();
				$pyjs['track']['lineno']=655;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['moveTo'](x, y);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_292_err){if (!$p['isinstance']($pyjs_dbg_292_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_292_err);}throw $pyjs_dbg_292_err;
}})();
				$pyjs['track']['lineno']=656;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['lineTo'](x, h);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})();
				$pyjs['track']['lineno']=657;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['lineTo'](w, h);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_294_err){if (!$p['isinstance']($pyjs_dbg_294_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_294_err);}throw $pyjs_dbg_294_err;
}})();
				$pyjs['track']['lineno']=658;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['lineTo'](w, y);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})();
				$pyjs['track']['lineno']=659;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['closePath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})();
				$pyjs['track']['lineno']=660;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['stroke']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_297_err){if (!$p['isinstance']($pyjs_dbg_297_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_297_err);}throw $pyjs_dbg_297_err;
}})();
				$pyjs['track']['lineno']=661;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathStr']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_298_err){if (!$p['isinstance']($pyjs_dbg_298_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_298_err);}throw $pyjs_dbg_298_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
			$cls_definition['strokeRect'] = $method;
			$pyjs['track']['lineno']=664;
			$method = $pyjs__bind_method2('transform', function(m11, m12, m21, m22, dx, dy) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					m11 = arguments[1];
					m12 = arguments[2];
					m21 = arguments[3];
					m22 = arguments[4];
					dx = arguments[5];
					dy = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add101,$add89,$mul81,$add100,$add103,$add98,$add104,$mul62,$mul63,$mul61,$mul66,$mul67,$mul64,$mul65,$mul69,$augsub6,$add96,$mul80,$mul71,$mul82,$mul83,$augexpr5,$add99,$augexpr6,$add94,$add95,$augsub5,$add97,$add90,$add91,$add92,$add93,$mul72,$mul84,$add102,a,$mul70,$mul73,b,$mul75,$mul74,$mul77,$mul76,$mul79,$mul78,$mul68;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':664};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=664;
				$pyjs['track']['lineno']=665;
				a = $p['getattr'](self, 'matrix')['__getitem__']($constant_int_0);
				$pyjs['track']['lineno']=666;
				b = $p['getattr'](self, 'matrix')['__getitem__']($constant_int_1);
				$pyjs['track']['lineno']=667;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'matrix')['__setitem__']($constant_int_0, $p['__op_add']($add89=(typeof ($mul61=a)==typeof ($mul62=m11) && typeof $mul61=='number'?
					$mul61*$mul62:
					$p['op_mul']($mul61,$mul62)),$add90=(typeof ($mul63=b)==typeof ($mul64=m12) && typeof $mul63=='number'?
					$mul63*$mul64:
					$p['op_mul']($mul63,$mul64))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_299_err){if (!$p['isinstance']($pyjs_dbg_299_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_299_err);}throw $pyjs_dbg_299_err;
}})();
				$pyjs['track']['lineno']=668;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'matrix')['__setitem__']($constant_int_1, $p['__op_add']($add91=(typeof ($mul65=a)==typeof ($mul66=m21) && typeof $mul65=='number'?
					$mul65*$mul66:
					$p['op_mul']($mul65,$mul66)),$add92=(typeof ($mul67=b)==typeof ($mul68=m22) && typeof $mul67=='number'?
					$mul67*$mul68:
					$p['op_mul']($mul67,$mul68))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_300_err){if (!$p['isinstance']($pyjs_dbg_300_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_300_err);}throw $pyjs_dbg_300_err;
}})();
				$pyjs['track']['lineno']=669;
				var $augsub5 = $constant_int_2;
				var $augexpr5 = $p['getattr'](self, 'matrix');
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $augexpr5['__setitem__']($augsub5, $p['__op_add']($add95=$augexpr5['__getitem__']($augsub5),$add96=$p['__op_add']($add93=(typeof ($mul69=a)==typeof ($mul70=dx) && typeof $mul69=='number'?
					$mul69*$mul70:
					$p['op_mul']($mul69,$mul70)),$add94=(typeof ($mul71=b)==typeof ($mul72=dy) && typeof $mul71=='number'?
					$mul71*$mul72:
					$p['op_mul']($mul71,$mul72)))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_301_err){if (!$p['isinstance']($pyjs_dbg_301_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_301_err);}throw $pyjs_dbg_301_err;
}})();
				$pyjs['track']['lineno']=670;
				a = $p['getattr'](self, 'matrix')['__getitem__']($constant_int_3);
				$pyjs['track']['lineno']=671;
				b = $p['getattr'](self, 'matrix')['__getitem__']($constant_int_4);
				$pyjs['track']['lineno']=672;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'matrix')['__setitem__']($constant_int_3, $p['__op_add']($add97=(typeof ($mul73=a)==typeof ($mul74=m11) && typeof $mul73=='number'?
					$mul73*$mul74:
					$p['op_mul']($mul73,$mul74)),$add98=(typeof ($mul75=b)==typeof ($mul76=m12) && typeof $mul75=='number'?
					$mul75*$mul76:
					$p['op_mul']($mul75,$mul76))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_302_err){if (!$p['isinstance']($pyjs_dbg_302_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_302_err);}throw $pyjs_dbg_302_err;
}})();
				$pyjs['track']['lineno']=673;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'matrix')['__setitem__']($constant_int_4, $p['__op_add']($add99=(typeof ($mul77=a)==typeof ($mul78=m21) && typeof $mul77=='number'?
					$mul77*$mul78:
					$p['op_mul']($mul77,$mul78)),$add100=(typeof ($mul79=b)==typeof ($mul80=m22) && typeof $mul79=='number'?
					$mul79*$mul80:
					$p['op_mul']($mul79,$mul80))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_303_err){if (!$p['isinstance']($pyjs_dbg_303_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_303_err);}throw $pyjs_dbg_303_err;
}})();
				$pyjs['track']['lineno']=674;
				var $augsub6 = $constant_int_5;
				var $augexpr6 = $p['getattr'](self, 'matrix');
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $augexpr6['__setitem__']($augsub6, $p['__op_add']($add103=$augexpr6['__getitem__']($augsub6),$add104=$p['__op_add']($add101=(typeof ($mul81=a)==typeof ($mul82=dx) && typeof $mul81=='number'?
					$mul81*$mul82:
					$p['op_mul']($mul81,$mul82)),$add102=(typeof ($mul83=b)==typeof ($mul84=dy) && typeof $mul83=='number'?
					$mul83*$mul84:
					$p['op_mul']($mul83,$mul84)))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_304_err){if (!$p['isinstance']($pyjs_dbg_304_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_304_err);}throw $pyjs_dbg_304_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['m11'],['m12'],['m21'],['m22'],['dx'],['dy']]);
			$cls_definition['transform'] = $method;
			$pyjs['track']['lineno']=677;
			$method = $pyjs__bind_method2('translate', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add112,$mul92,$mul91,$mul90,$mul86,$add106,$mul88,$mul89,$add107,$add105,$mul85,$augexpr7,$mul87,$augsub7,$add108,$add110,$add111,$augexpr8,$add109,$augsub8;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':677};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=677;
				$pyjs['track']['lineno']=678;
				var $augsub7 = $constant_int_2;
				var $augexpr7 = $p['getattr'](self, 'matrix');
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $augexpr7['__setitem__']($augsub7, $p['__op_add']($add107=$augexpr7['__getitem__']($augsub7),$add108=$p['__op_add']($add105=(typeof ($mul85=$p['getattr'](self, 'matrix')['__getitem__']($constant_int_0))==typeof ($mul86=x) && typeof $mul85=='number'?
					$mul85*$mul86:
					$p['op_mul']($mul85,$mul86)),$add106=(typeof ($mul87=$p['getattr'](self, 'matrix')['__getitem__']($constant_int_1))==typeof ($mul88=y) && typeof $mul87=='number'?
					$mul87*$mul88:
					$p['op_mul']($mul87,$mul88)))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_305_err){if (!$p['isinstance']($pyjs_dbg_305_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_305_err);}throw $pyjs_dbg_305_err;
}})();
				$pyjs['track']['lineno']=679;
				var $augsub8 = $constant_int_5;
				var $augexpr8 = $p['getattr'](self, 'matrix');
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $augexpr8['__setitem__']($augsub8, $p['__op_add']($add111=$augexpr8['__getitem__']($augsub8),$add112=$p['__op_add']($add109=(typeof ($mul89=$p['getattr'](self, 'matrix')['__getitem__']($constant_int_3))==typeof ($mul90=x) && typeof $mul89=='number'?
					$mul89*$mul90:
					$p['op_mul']($mul89,$mul90)),$add110=(typeof ($mul91=$p['getattr'](self, 'matrix')['__getitem__']($constant_int_4))==typeof ($mul92=y) && typeof $mul91=='number'?
					$mul91*$mul92:
					$p['op_mul']($mul91,$mul92)))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_306_err){if (!$p['isinstance']($pyjs_dbg_306_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_306_err);}throw $pyjs_dbg_306_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['translate'] = $method;
			$pyjs['track']['lineno']=682;
			$method = $pyjs__bind_method2('insert', function(gco, html) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					gco = arguments[1];
					html = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':682};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=682;
				$pyjs['track']['lineno']=683;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parentElement']['insertAdjacentHTML'](gco, html);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_307_err){if (!$p['isinstance']($pyjs_dbg_307_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_307_err);}throw $pyjs_dbg_307_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['gco'],['html']]);
			$cls_definition['insert'] = $method;
			$pyjs['track']['lineno']=686;
			$pyjs['track']['lineno']=742;
			$method = $pyjs__bind_method2('buildStyleString', function(style) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					style = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add127,$add126,$add124,$add123,$add121,$add118,$add119,$add116,$add117,$add114,$add115,$add113,$add128,$add120,$add125,$add122;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':742};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=742;
				$pyjs['track']['lineno']=743;
				$pyjs['track']['lineno']=743;
				var $pyjs__ret = $p['__op_add']($add127=$p['__op_add']($add125=$p['__op_add']($add123=$p['__op_add']($add121=$p['__op_add']($add119=$p['__op_add']($add117=$p['__op_add']($add115=$p['__op_add']($add113=style['__getitem__']('style'),$add114=' '),$add116=style['__getitem__']('variant')),$add118=' '),$add120=style['__getitem__']('weight')),$add122=' '),$add124=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](style['__getitem__']('size'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_308_err){if (!$p['isinstance']($pyjs_dbg_308_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_308_err);}throw $pyjs_dbg_308_err;
}})()),$add126='px '),$add128=style['__getitem__']('family'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['style']]);
			$cls_definition['buildStyleString'] = $method;
			$pyjs['track']['lineno']=747;
			$method = $pyjs__bind_method2('encodeHtmlAttribute', function(s) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					s = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':747};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=747;
				$pyjs['track']['lineno']=748;
				e = (function(){try{try{$pyjs['in_try_except'] += 1;
				return s['$$replace']('&', '&amp;');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_309_err){if (!$p['isinstance']($pyjs_dbg_309_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_309_err);}throw $pyjs_dbg_309_err;
}})();
				$pyjs['track']['lineno']=749;
				$pyjs['track']['lineno']=749;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return e['$$replace']('"', '&quot;');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_310_err){if (!$p['isinstance']($pyjs_dbg_310_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_310_err);}throw $pyjs_dbg_310_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['s']]);
			$cls_definition['encodeHtmlAttribute'] = $method;
			$pyjs['track']['lineno']=751;
			$method = $pyjs__bind_method2('drawText_', function(text, x, y, maxWidth, stroke) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					x = arguments[2];
					y = arguments[3];
					maxWidth = arguments[4];
					stroke = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add134,$add135,$add136,right,$add130,$add131,$add133,$add138,$add139,daStr,$add137,$div32,$div30,$div31,$add132,$add145,$add144,$add147,$add146,DEFAULT_STYLE,$add140,$add143,$add142,$add141,$add149,$add148,skewM,$add154,$add129,lineStr,delta,textAlign,skewOffset,$div29,fontStyleString,offsetX,offsetY,$add152,$add153,$add150,$add151,dX,dY,left;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':751};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=751;
				$pyjs['track']['lineno']=752;
				delta = $constant_int_1000;
				$pyjs['track']['lineno']=753;
				left = $constant_int_0;
				$pyjs['track']['lineno']=754;
				right = delta;
				$pyjs['track']['lineno']=755;
				offsetX = $constant_int_0;
				$pyjs['track']['lineno']=756;
				offsetY = $constant_int_0;
				$pyjs['track']['lineno']=758;
				DEFAULT_STYLE = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['style', 'normal'], ['variant', 'normal'], ['weight', 'normal'], ['size', $constant_int_10], ['family', 'sans-serif']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_311_err){if (!$p['isinstance']($pyjs_dbg_311_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_311_err);}throw $pyjs_dbg_311_err;
}})();
				$pyjs['track']['lineno']=765;
				$pyjs['track']['lineno']=809;
				fontStyleString = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['buildStyleString'](DEFAULT_STYLE);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_312_err){if (!$p['isinstance']($pyjs_dbg_312_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_312_err);}throw $pyjs_dbg_312_err;
}})();
				$pyjs['track']['lineno']=810;
				textAlign = 'left';
				$pyjs['track']['lineno']=812;
				dX = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getCoordX']($p['getattr'](self, 'matrix'), $p['__op_add']($add129=x,$add130=offsetX), $p['__op_add']($add131=y,$add132=offsetY));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_313_err){if (!$p['isinstance']($pyjs_dbg_313_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_313_err);}throw $pyjs_dbg_313_err;
}})();
				$pyjs['track']['lineno']=813;
				dY = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getCoordY']($p['getattr'](self, 'matrix'), $p['__op_add']($add133=x,$add134=offsetX), $p['__op_add']($add135=y,$add136=offsetY));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_314_err){if (!$p['isinstance']($pyjs_dbg_314_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_314_err);}throw $pyjs_dbg_314_err;
}})();
				$pyjs['track']['lineno']=817;
				lineStr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_315_err){if (!$p['isinstance']($pyjs_dbg_315_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_315_err);}throw $pyjs_dbg_315_err;
}})();
				$pyjs['track']['lineno']=819;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append']('<v:line from="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_316_err){if (!$p['isinstance']($pyjs_dbg_316_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_316_err);}throw $pyjs_dbg_316_err;
}})();
				$pyjs['track']['lineno']=820;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']((typeof ($usub5=left)=='number'?
					-$usub5:
					$p['op_usub']($usub5)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_317_err){if (!$p['isinstance']($pyjs_dbg_317_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_317_err);}throw $pyjs_dbg_317_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_318_err){if (!$p['isinstance']($pyjs_dbg_318_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_318_err);}throw $pyjs_dbg_318_err;
}})();
				$pyjs['track']['lineno']=821;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append'](' 0" to="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_319_err){if (!$p['isinstance']($pyjs_dbg_319_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_319_err);}throw $pyjs_dbg_319_err;
}})();
				$pyjs['track']['lineno']=822;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](right);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_320_err){if (!$p['isinstance']($pyjs_dbg_320_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_320_err);}throw $pyjs_dbg_320_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_321_err){if (!$p['isinstance']($pyjs_dbg_321_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_321_err);}throw $pyjs_dbg_321_err;
}})();
				$pyjs['track']['lineno']=823;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append'](' 0" ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_322_err){if (!$p['isinstance']($pyjs_dbg_322_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_322_err);}throw $pyjs_dbg_322_err;
}})();
				$pyjs['track']['lineno']=824;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append'](' coordsize="100 100" coordorigin="0 0"');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_323_err){if (!$p['isinstance']($pyjs_dbg_323_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_323_err);}throw $pyjs_dbg_323_err;
}})();
				$pyjs['track']['lineno']=825;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append']('" style="position:absolute;width:1px;height:1px"');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_324_err){if (!$p['isinstance']($pyjs_dbg_324_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_324_err);}throw $pyjs_dbg_324_err;
}})();
				$pyjs['track']['lineno']=826;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](stroke);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_325_err){if (!$p['isinstance']($pyjs_dbg_325_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_325_err);}throw $pyjs_dbg_325_err;
}})()) {
					$pyjs['track']['lineno']=827;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return lineStr['append'](' filled="f" stroked="t">');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_326_err){if (!$p['isinstance']($pyjs_dbg_326_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_326_err);}throw $pyjs_dbg_326_err;
}})();
					$pyjs['track']['lineno']=828;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['appendStroke'](lineStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_327_err){if (!$p['isinstance']($pyjs_dbg_327_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_327_err);}throw $pyjs_dbg_327_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=830;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return lineStr['append'](' filled="t" stroked="f">');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_328_err){if (!$p['isinstance']($pyjs_dbg_328_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_328_err);}throw $pyjs_dbg_328_err;
}})();
					$pyjs['track']['lineno']=831;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['appendFill'](lineStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_329_err){if (!$p['isinstance']($pyjs_dbg_329_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_329_err);}throw $pyjs_dbg_329_err;
}})();
				}
				$pyjs['track']['lineno']=833;
				skewM = $p['__op_add']($add149=$p['__op_add']($add147=$p['__op_add']($add145=$p['__op_add']($add143=$p['__op_add']($add141=$p['__op_add']($add139=$p['__op_add']($add137=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr'](self, 'matrix')['__getitem__']($constant_int_0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_330_err){if (!$p['isinstance']($pyjs_dbg_330_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_330_err);}throw $pyjs_dbg_330_err;
}})(),$add138=','),$add140=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr'](self, 'matrix')['__getitem__']($constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_331_err){if (!$p['isinstance']($pyjs_dbg_331_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_331_err);}throw $pyjs_dbg_331_err;
}})()),$add142=','),$add144=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr'](self, 'matrix')['__getitem__']($constant_int_3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_332_err){if (!$p['isinstance']($pyjs_dbg_332_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_332_err);}throw $pyjs_dbg_332_err;
}})()),$add146=','),$add148=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr'](self, 'matrix')['__getitem__']($constant_int_4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_333_err){if (!$p['isinstance']($pyjs_dbg_333_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_333_err);}throw $pyjs_dbg_333_err;
}})()),$add150=',0,0');
				$pyjs['track']['lineno']=837;
				skewOffset = $p['__op_add']($add153=$p['__op_add']($add151=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['math']['floor']((typeof ($div29=dX)==typeof ($div30=$constant_int_10) && typeof $div29=='number' && $div30 !== 0?
					$div29/$div30:
					$p['op_div']($div29,$div30)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_334_err){if (!$p['isinstance']($pyjs_dbg_334_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_334_err);}throw $pyjs_dbg_334_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_335_err){if (!$p['isinstance']($pyjs_dbg_335_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_335_err);}throw $pyjs_dbg_335_err;
}})(),$add152=','),$add154=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['math']['floor']((typeof ($div31=dY)==typeof ($div32=$constant_int_10) && typeof $div31=='number' && $div32 !== 0?
					$div31/$div32:
					$p['op_div']($div31,$div32)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_336_err){if (!$p['isinstance']($pyjs_dbg_336_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_336_err);}throw $pyjs_dbg_336_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_337_err){if (!$p['isinstance']($pyjs_dbg_337_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_337_err);}throw $pyjs_dbg_337_err;
}})());
				$pyjs['track']['lineno']=840;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append']('<v:skew on="t" matrix="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_338_err){if (!$p['isinstance']($pyjs_dbg_338_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_338_err);}throw $pyjs_dbg_338_err;
}})();
				$pyjs['track']['lineno']=841;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append'](skewM);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_339_err){if (!$p['isinstance']($pyjs_dbg_339_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_339_err);}throw $pyjs_dbg_339_err;
}})();
				$pyjs['track']['lineno']=842;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append']('" ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_340_err){if (!$p['isinstance']($pyjs_dbg_340_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_340_err);}throw $pyjs_dbg_340_err;
}})();
				$pyjs['track']['lineno']=843;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append'](' offset="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_341_err){if (!$p['isinstance']($pyjs_dbg_341_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_341_err);}throw $pyjs_dbg_341_err;
}})();
				$pyjs['track']['lineno']=844;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append'](skewOffset);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_342_err){if (!$p['isinstance']($pyjs_dbg_342_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_342_err);}throw $pyjs_dbg_342_err;
}})();
				$pyjs['track']['lineno']=845;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append']('" origin="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_343_err){if (!$p['isinstance']($pyjs_dbg_343_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_343_err);}throw $pyjs_dbg_343_err;
}})();
				$pyjs['track']['lineno']=846;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](left);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_344_err){if (!$p['isinstance']($pyjs_dbg_344_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_344_err);}throw $pyjs_dbg_344_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_345_err){if (!$p['isinstance']($pyjs_dbg_345_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_345_err);}throw $pyjs_dbg_345_err;
}})();
				$pyjs['track']['lineno']=847;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append'](' 0" />');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_346_err){if (!$p['isinstance']($pyjs_dbg_346_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_346_err);}throw $pyjs_dbg_346_err;
}})();
				$pyjs['track']['lineno']=849;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append']('<v:path textpathok="true" />');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_347_err){if (!$p['isinstance']($pyjs_dbg_347_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_347_err);}throw $pyjs_dbg_347_err;
}})();
				$pyjs['track']['lineno']=850;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append']('<v:textpath on="true" string="');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_348_err){if (!$p['isinstance']($pyjs_dbg_348_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_348_err);}throw $pyjs_dbg_348_err;
}})();
				$pyjs['track']['lineno']=851;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['encodeHtmlAttribute'](text);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_349_err){if (!$p['isinstance']($pyjs_dbg_349_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_349_err);}throw $pyjs_dbg_349_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_350_err){if (!$p['isinstance']($pyjs_dbg_350_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_350_err);}throw $pyjs_dbg_350_err;
}})();
				$pyjs['track']['lineno']=852;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append']('" style="v-text-align:');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_351_err){if (!$p['isinstance']($pyjs_dbg_351_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_351_err);}throw $pyjs_dbg_351_err;
}})();
				$pyjs['track']['lineno']=853;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append'](textAlign);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_352_err){if (!$p['isinstance']($pyjs_dbg_352_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_352_err);}throw $pyjs_dbg_352_err;
}})();
				$pyjs['track']['lineno']=854;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append'](';font:');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_353_err){if (!$p['isinstance']($pyjs_dbg_353_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_353_err);}throw $pyjs_dbg_353_err;
}})();
				$pyjs['track']['lineno']=855;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['encodeHtmlAttribute'](fontStyleString);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_354_err){if (!$p['isinstance']($pyjs_dbg_354_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_354_err);}throw $pyjs_dbg_354_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_355_err){if (!$p['isinstance']($pyjs_dbg_355_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_355_err);}throw $pyjs_dbg_355_err;
}})();
				$pyjs['track']['lineno']=856;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lineStr['append']('" /></v:line>');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_356_err){if (!$p['isinstance']($pyjs_dbg_356_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_356_err);}throw $pyjs_dbg_356_err;
}})();
				$pyjs['track']['lineno']=858;
				daStr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return ''['join'](lineStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_357_err){if (!$p['isinstance']($pyjs_dbg_357_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_357_err);}throw $pyjs_dbg_357_err;
}})();
				$pyjs['track']['lineno']=860;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['insert']($p['getattr']($p['getattr'](self, 'context'), 'globalCompositeOperation'), daStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_358_err){if (!$p['isinstance']($pyjs_dbg_358_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_358_err);}throw $pyjs_dbg_358_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['text'],['x'],['y'],['maxWidth'],['stroke']]);
			$cls_definition['drawText_'] = $method;
			$pyjs['track']['lineno']=862;
			$method = $pyjs__bind_method2('fillText', function(text, x, y, maxWidth) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					x = arguments[2];
					y = arguments[3];
					maxWidth = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof maxWidth == 'undefined') maxWidth=arguments['callee']['__args__'][6][1];

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':862};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=862;
				$pyjs['track']['lineno']=863;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['drawText_'](text, x, y, maxWidth, false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_359_err){if (!$p['isinstance']($pyjs_dbg_359_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_359_err);}throw $pyjs_dbg_359_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['text'],['x'],['y'],['maxWidth', null]]);
			$cls_definition['fillText'] = $method;
			$pyjs['track']['lineno']=865;
			$method = $pyjs__bind_method2('strokeText', function(text, x, y, maxWidth) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					x = arguments[2];
					y = arguments[3];
					maxWidth = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof maxWidth == 'undefined') maxWidth=arguments['callee']['__args__'][6][1];

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplIE6', 'lineno':865};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplIE6';
				$pyjs['track']['lineno']=865;
				$pyjs['track']['lineno']=866;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['drawText_'](text, x, y, maxWidth, true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_360_err){if (!$p['isinstance']($pyjs_dbg_360_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_360_err);}throw $pyjs_dbg_360_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['text'],['x'],['y'],['maxWidth', null]]);
			$cls_definition['strokeText'] = $method;
			$pyjs['track']['lineno']=868;
			$pyjs['track']['lineno']=49;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GWTCanvasImplIE6', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.GWTCanvasImplIE6 */


/* end module: pyjamas.Canvas.GWTCanvasImplIE6 */


/*
PYJS_DEPS: ['math', 'pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.Window', 'pyjamas.Canvas.GWTCanvasImplIEConsts.BUTT', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvasImplIEConsts', 'pyjamas.Canvas.GWTCanvasImplIEConsts.DESTINATION_OVER', 'pyjamas.Canvas.GWTCanvasImplIEConsts.SOURCE_OVER', 'pyjamas.Canvas.GWTCanvasConsts', 'pyjamas.Canvas.JSOStack.JSOStack', 'pyjamas.Canvas.JSOStack', 'pyjamas.Canvas.PathElement', 'pyjamas.Canvas.VMLContext.VMLContext', 'pyjamas.Canvas.VMLContext', 'pyjamas.Canvas.VMLContext.VMLStyle', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas.Color', 'pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas.Canvas.CanvasGradientImplIE6']
*/
