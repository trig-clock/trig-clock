/* start module: pyjamas.Canvas.GWTCanvas */
$pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvas'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvas']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvas'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvas'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.GWTCanvas>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.GWTCanvas';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['GWTCanvas'] = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvas'];
	try {
		$m.__track_lines__[512] = 'pyjamas.Canvas.GWTCanvas.py, line 512:\n    """*';
		$m.__track_lines__[1] = 'pyjamas.Canvas.GWTCanvas.py, line 1:\n    """';
		$m.__track_lines__[4] = 'pyjamas.Canvas.GWTCanvas.py, line 4:\n    * Licensed under the Apache License, Version 2.0 (the "License"); you may not';
		$m.__track_lines__[517] = 'pyjamas.Canvas.GWTCanvas.py, line 517:\n    def setGlobalAlpha(self, alpha):';
		$m.__track_lines__[6] = 'pyjamas.Canvas.GWTCanvas.py, line 6:\n    * the License at';
		$m.__track_lines__[8] = 'pyjamas.Canvas.GWTCanvas.py, line 8:\n    * http:#www.apache.org/licenses/LICENSE-2.0';
		$m.__track_lines__[525] = 'pyjamas.Canvas.GWTCanvas.py, line 525:\n    def setFont(self, font):';
		$m.__track_lines__[526] = 'pyjamas.Canvas.GWTCanvas.py, line 526:\n    self.impl.setFont(font)';
		$m.__track_lines__[17] = 'pyjamas.Canvas.GWTCanvas.py, line 17:\n    from pyjamas import DOM';
		$m.__track_lines__[19] = 'pyjamas.Canvas.GWTCanvas.py, line 19:\n    from pyjamas.ui.FocusWidget import FocusWidget';
		$m.__track_lines__[20] = 'pyjamas.Canvas.GWTCanvas.py, line 20:\n    from pyjamas.ui.Widget import Widget';
		$m.__track_lines__[21] = 'pyjamas.Canvas.GWTCanvas.py, line 21:\n    from pyjamas.ui import Focus';
		$m.__track_lines__[22] = 'pyjamas.Canvas.GWTCanvas.py, line 22:\n    from pyjamas.Canvas.Color import Color';
		$m.__track_lines__[24] = 'pyjamas.Canvas.GWTCanvas.py, line 24:\n    from pyjamas.Canvas.LinearGradientImplDefault import LinearGradientImplDefault';
		$m.__track_lines__[25] = 'pyjamas.Canvas.GWTCanvas.py, line 25:\n    from pyjamas.Canvas.RadialGradientImplDefault import RadialGradientImplDefault';
		$m.__track_lines__[26] = 'pyjamas.Canvas.GWTCanvas.py, line 26:\n    from pyjamas.Canvas.GWTCanvasImplDefault import GWTCanvasImplDefault';
		$m.__track_lines__[28] = 'pyjamas.Canvas.GWTCanvas.py, line 28:\n    from pyjamas.Canvas.LinearGradientImplIE6 import LinearGradientImplIE6';
		$m.__track_lines__[29] = 'pyjamas.Canvas.GWTCanvas.py, line 29:\n    from pyjamas.Canvas.RadialGradientImplIE6 import RadialGradientImplIE6';
		$m.__track_lines__[30] = 'pyjamas.Canvas.GWTCanvas.py, line 30:\n    from pyjamas.Canvas.GWTCanvasImplIE6 import GWTCanvasImplIE6';
		$m.__track_lines__[544] = 'pyjamas.Canvas.GWTCanvas.py, line 544:\n    def setGlobalCompositeOperation(self, globalCompositeOperation):';
		$m.__track_lines__[545] = 'pyjamas.Canvas.GWTCanvas.py, line 545:\n    self.impl.setGlobalCompositeOperation(globalCompositeOperation)';
		$m.__track_lines__[34] = 'pyjamas.Canvas.GWTCanvas.py, line 34:\n    """*';
		$m.__track_lines__[548] = 'pyjamas.Canvas.GWTCanvas.py, line 548:\n    """*';
		$m.__track_lines__[518] = 'pyjamas.Canvas.GWTCanvas.py, line 518:\n    self.impl.setGlobalAlpha(alpha)';
		$m.__track_lines__[44] = 'pyjamas.Canvas.GWTCanvas.py, line 4:\n    * Licensed under the Apache License, Version 2.0 (the "License"); you may not ... class GWTCanvas(FocusWidget):';
		$m.__track_lines__[558] = 'pyjamas.Canvas.GWTCanvas.py, line 558:\n    def setLineCap(self, lineCap):';
		$m.__track_lines__[559] = 'pyjamas.Canvas.GWTCanvas.py, line 559:\n    self.impl.setLineCap(lineCap)';
		$m.__track_lines__[520] = 'pyjamas.Canvas.GWTCanvas.py, line 520:\n    """*';
		$m.__track_lines__[562] = 'pyjamas.Canvas.GWTCanvas.py, line 562:\n    """*';
		$m.__track_lines__[572] = 'pyjamas.Canvas.GWTCanvas.py, line 572:\n    def setLineJoin(self, lineJoin):';
		$m.__track_lines__[61] = 'pyjamas.Canvas.GWTCanvas.py, line 61:\n    def __init__(self, coordX=300, coordY=150, pixelX=300, pixelY=150,';
		$m.__track_lines__[576] = 'pyjamas.Canvas.GWTCanvas.py, line 576:\n    """*';
		$m.__track_lines__[68] = 'pyjamas.Canvas.GWTCanvas.py, line 68:\n    self.impl = self.getCanvasImpl()';
		$m.__track_lines__[70] = 'pyjamas.Canvas.GWTCanvas.py, line 70:\n    self.coordHeight = 0';
		$m.__track_lines__[71] = 'pyjamas.Canvas.GWTCanvas.py, line 71:\n    self.coordWidth = 0';
		$m.__track_lines__[72] = 'pyjamas.Canvas.GWTCanvas.py, line 72:\n    focusable = Focus.createFocusable()';
		$m.__track_lines__[73] = 'pyjamas.Canvas.GWTCanvas.py, line 73:\n    self.canvas = self.impl.createElement()';
		$m.__track_lines__[74] = 'pyjamas.Canvas.GWTCanvas.py, line 74:\n    DOM.appendChild(focusable, self.canvas)';
		$m.__track_lines__[75] = 'pyjamas.Canvas.GWTCanvas.py, line 75:\n    FocusWidget.__init__(self, focusable, **kwargs)';
		$m.__track_lines__[582] = 'pyjamas.Canvas.GWTCanvas.py, line 582:\n    def setLineWidth(self, width):';
		$m.__track_lines__[77] = 'pyjamas.Canvas.GWTCanvas.py, line 77:\n    self.setPixelWidth(pixelX)';
		$m.__track_lines__[78] = 'pyjamas.Canvas.GWTCanvas.py, line 78:\n    self.setPixelHeight(pixelY)';
		$m.__track_lines__[79] = 'pyjamas.Canvas.GWTCanvas.py, line 79:\n    self.setCoordSize(coordX, coordY)';
		$m.__track_lines__[81] = 'pyjamas.Canvas.GWTCanvas.py, line 81:\n    def getCanvasElement(self):';
		$m.__track_lines__[82] = 'pyjamas.Canvas.GWTCanvas.py, line 82:\n    return self.canvas';
		$m.__track_lines__[84] = 'pyjamas.Canvas.GWTCanvas.py, line 4:\n    * Licensed under the Apache License, Version 2.0 (the "License"); you may not ... def getCanvasImpl(self):';
		$m.__track_lines__[597] = 'pyjamas.Canvas.GWTCanvas.py, line 597:\n    def setMiterLimit(self, miterLimit):';
		$m.__track_lines__[598] = 'pyjamas.Canvas.GWTCanvas.py, line 598:\n    self.impl.setMiterLimit(miterLimit)';
		$m.__track_lines__[87] = 'pyjamas.Canvas.GWTCanvas.py, line 87:\n    def setWidth(self, width):';
		$m.__track_lines__[88] = 'pyjamas.Canvas.GWTCanvas.py, line 88:\n    self.setPixelWidth(width)';
		$m.__track_lines__[601] = 'pyjamas.Canvas.GWTCanvas.py, line 601:\n    """*';
		$m.__track_lines__[90] = 'pyjamas.Canvas.GWTCanvas.py, line 90:\n    def setHeight(self, height):';
		$m.__track_lines__[91] = 'pyjamas.Canvas.GWTCanvas.py, line 91:\n    self.setPixelHeight(height)';
		$m.__track_lines__[93] = 'pyjamas.Canvas.GWTCanvas.py, line 93:\n    """*';
		$m.__track_lines__[606] = 'pyjamas.Canvas.GWTCanvas.py, line 606:\n    def setPixelHeight(self, height):';
		$m.__track_lines__[607] = 'pyjamas.Canvas.GWTCanvas.py, line 607:\n    FocusWidget.setHeight(self, str(height) + "px")';
		$m.__track_lines__[608] = 'pyjamas.Canvas.GWTCanvas.py, line 608:\n    self.impl.setPixelHeight(self.getCanvasElement(), height)';
		$m.__track_lines__[611] = 'pyjamas.Canvas.GWTCanvas.py, line 611:\n    """*';
		$m.__track_lines__[634] = 'pyjamas.Canvas.GWTCanvas.py, line 634:\n    self.impl.stroke()';
		$m.__track_lines__[529] = 'pyjamas.Canvas.GWTCanvas.py, line 529:\n    """*';
		$m.__track_lines__[616] = 'pyjamas.Canvas.GWTCanvas.py, line 616:\n    def setPixelWidth(self, width):';
		$m.__track_lines__[105] = 'pyjamas.Canvas.GWTCanvas.py, line 105:\n    def arc(self, x, y, radius, startAngle, endAngle, antiClockwise):';
		$m.__track_lines__[106] = 'pyjamas.Canvas.GWTCanvas.py, line 106:\n    self.impl.arc(x, y, radius, startAngle, endAngle, antiClockwise)';
		$m.__track_lines__[109] = 'pyjamas.Canvas.GWTCanvas.py, line 109:\n    """*';
		$m.__track_lines__[112] = 'pyjamas.Canvas.GWTCanvas.py, line 112:\n    def beginPath(self):';
		$m.__track_lines__[113] = 'pyjamas.Canvas.GWTCanvas.py, line 113:\n    self.impl.beginPath()';
		$m.__track_lines__[626] = 'pyjamas.Canvas.GWTCanvas.py, line 626:\n    def setStrokeStyle(self, grad):';
		$m.__track_lines__[627] = 'pyjamas.Canvas.GWTCanvas.py, line 627:\n    self.impl.setStrokeStyle(grad)';
		$m.__track_lines__[116] = 'pyjamas.Canvas.GWTCanvas.py, line 116:\n    """*';
		$m.__track_lines__[630] = 'pyjamas.Canvas.GWTCanvas.py, line 630:\n    """*';
		$m.__track_lines__[119] = 'pyjamas.Canvas.GWTCanvas.py, line 119:\n    def clear(self):';
		$m.__track_lines__[633] = 'pyjamas.Canvas.GWTCanvas.py, line 633:\n    def stroke(self):';
		$m.__track_lines__[122] = 'pyjamas.Canvas.GWTCanvas.py, line 122:\n    self.impl.clear(self.coordWidth, self.coordHeight)';
		$m.__track_lines__[125] = 'pyjamas.Canvas.GWTCanvas.py, line 125:\n    """*';
		$m.__track_lines__[129] = 'pyjamas.Canvas.GWTCanvas.py, line 129:\n    def closePath(self):';
		$m.__track_lines__[130] = 'pyjamas.Canvas.GWTCanvas.py, line 130:\n    self.impl.closePath()';
		$m.__track_lines__[133] = 'pyjamas.Canvas.GWTCanvas.py, line 133:\n    """*';
		$m.__track_lines__[646] = 'pyjamas.Canvas.GWTCanvas.py, line 646:\n    self.impl.strokeRect(startX, startY, width, height)';
		$m.__track_lines__[649] = 'pyjamas.Canvas.GWTCanvas.py, line 649:\n    """*';
		$m.__track_lines__[143] = 'pyjamas.Canvas.GWTCanvas.py, line 6:\n    * the License at ... def createLinearGradient(self, x0, y0, x1, y1):';
		$m.__track_lines__[147] = 'pyjamas.Canvas.GWTCanvas.py, line 147:\n    """*';
		$m.__track_lines__[618] = 'pyjamas.Canvas.GWTCanvas.py, line 618:\n    self.impl.setPixelWidth(self.getCanvasElement(), width)';
		$m.__track_lines__[667] = 'pyjamas.Canvas.GWTCanvas.py, line 667:\n    def transform(self, m11, m12, m21, m22, dx, dy):';
		$m.__track_lines__[668] = 'pyjamas.Canvas.GWTCanvas.py, line 668:\n    self.impl.transform(m11, m12, m21, m22, dx, dy)';
		$m.__track_lines__[159] = 'pyjamas.Canvas.GWTCanvas.py, line 8:\n    * http:#www.apache.org/licenses/LICENSE-2.0 ... def createRadialGradient(self, x0, y0, r0, x1, y1, r1):';
		$m.__track_lines__[164] = 'pyjamas.Canvas.GWTCanvas.py, line 164:\n    """*';
		$m.__track_lines__[678] = 'pyjamas.Canvas.GWTCanvas.py, line 678:\n    def translate(self, x, y):';
		$m.__track_lines__[679] = 'pyjamas.Canvas.GWTCanvas.py, line 679:\n    self.impl.translate(x, y)';
		$m.__track_lines__[182] = 'pyjamas.Canvas.GWTCanvas.py, line 182:\n    def cubicCurveTo(self, cp1x, cp1y, cp2x, cp2y, x, y):';
		$m.__track_lines__[183] = 'pyjamas.Canvas.GWTCanvas.py, line 183:\n    self.impl.cubicCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)';
		$m.__track_lines__[186] = 'pyjamas.Canvas.GWTCanvas.py, line 186:\n    """*';
		$m.__track_lines__[219] = 'pyjamas.Canvas.GWTCanvas.py, line 219:\n    def drawImage(self, img, *args):';
		$m.__track_lines__[220] = 'pyjamas.Canvas.GWTCanvas.py, line 220:\n    if isinstance(img, Widget):';
		$m.__track_lines__[221] = 'pyjamas.Canvas.GWTCanvas.py, line 221:\n    img_width = img.getWidth()';
		$m.__track_lines__[222] = 'pyjamas.Canvas.GWTCanvas.py, line 222:\n    img_height = img.getHeight()';
		$m.__track_lines__[621] = 'pyjamas.Canvas.GWTCanvas.py, line 621:\n    """*';
		$m.__track_lines__[224] = 'pyjamas.Canvas.GWTCanvas.py, line 224:\n    img_width = DOM.getIntAttribute(img, "offsetWidth")';
		$m.__track_lines__[225] = 'pyjamas.Canvas.GWTCanvas.py, line 225:\n    img_height = DOM.getIntAttribute(img, "offsetHeight")';
		$m.__track_lines__[226] = 'pyjamas.Canvas.GWTCanvas.py, line 226:\n    if len(args) == 8:';
		$m.__track_lines__[227] = 'pyjamas.Canvas.GWTCanvas.py, line 227:\n    self.impl.drawImage(img, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7])';
		$m.__track_lines__[229] = 'pyjamas.Canvas.GWTCanvas.py, line 229:\n    sourceX = 0';
		$m.__track_lines__[230] = 'pyjamas.Canvas.GWTCanvas.py, line 230:\n    sourceY = 0';
		$m.__track_lines__[231] = 'pyjamas.Canvas.GWTCanvas.py, line 231:\n    sourceWidth = img_width';
		$m.__track_lines__[232] = 'pyjamas.Canvas.GWTCanvas.py, line 232:\n    sourceHeight = img_height';
		$m.__track_lines__[233] = 'pyjamas.Canvas.GWTCanvas.py, line 233:\n    destX = args[0]';
		$m.__track_lines__[234] = 'pyjamas.Canvas.GWTCanvas.py, line 234:\n    destY = args[1]';
		$m.__track_lines__[235] = 'pyjamas.Canvas.GWTCanvas.py, line 235:\n    destWidth = args[2]';
		$m.__track_lines__[236] = 'pyjamas.Canvas.GWTCanvas.py, line 236:\n    destHeight = args[3]';
		$m.__track_lines__[237] = 'pyjamas.Canvas.GWTCanvas.py, line 237:\n    self.impl.drawImage(img, sourceX, sourceY,';
		$m.__track_lines__[637] = 'pyjamas.Canvas.GWTCanvas.py, line 637:\n    """*';
		$m.__track_lines__[241] = 'pyjamas.Canvas.GWTCanvas.py, line 241:\n    self.impl.drawImage(img, args[0], args[1])';
		$m.__track_lines__[244] = 'pyjamas.Canvas.GWTCanvas.py, line 244:\n    """*';
		$m.__track_lines__[247] = 'pyjamas.Canvas.GWTCanvas.py, line 247:\n    def fill(self):';
		$m.__track_lines__[248] = 'pyjamas.Canvas.GWTCanvas.py, line 248:\n    self.impl.fill()';
		$m.__track_lines__[251] = 'pyjamas.Canvas.GWTCanvas.py, line 251:\n    """*';
		$m.__track_lines__[260] = 'pyjamas.Canvas.GWTCanvas.py, line 260:\n    def fillRect(self, startX, startY, width, height):';
		$m.__track_lines__[261] = 'pyjamas.Canvas.GWTCanvas.py, line 261:\n    self.impl.fillRect(startX, startY, width, height)';
		$m.__track_lines__[263] = 'pyjamas.Canvas.GWTCanvas.py, line 263:\n    """*';
		$m.__track_lines__[271] = 'pyjamas.Canvas.GWTCanvas.py, line 271:\n    def fillText(self, text, startX, startY, maxWidth=None):';
		$m.__track_lines__[272] = 'pyjamas.Canvas.GWTCanvas.py, line 272:\n    self.impl.fillText(text, startX, startY, maxWidth)';
		$m.__track_lines__[275] = 'pyjamas.Canvas.GWTCanvas.py, line 275:\n    """*';
		$m.__track_lines__[280] = 'pyjamas.Canvas.GWTCanvas.py, line 280:\n    def getCoordHeight(self):';
		$m.__track_lines__[281] = 'pyjamas.Canvas.GWTCanvas.py, line 281:\n    return self.coordHeight';
		$m.__track_lines__[284] = 'pyjamas.Canvas.GWTCanvas.py, line 284:\n    """*';
		$m.__track_lines__[645] = 'pyjamas.Canvas.GWTCanvas.py, line 645:\n    def strokeRect(self, startX, startY, width, height):';
		$m.__track_lines__[290] = 'pyjamas.Canvas.GWTCanvas.py, line 290:\n    def getCoordWidth(self):';
		$m.__track_lines__[291] = 'pyjamas.Canvas.GWTCanvas.py, line 291:\n    return self.coordWidth';
		$m.__track_lines__[294] = 'pyjamas.Canvas.GWTCanvas.py, line 294:\n    """*';
		$m.__track_lines__[300] = 'pyjamas.Canvas.GWTCanvas.py, line 300:\n    def getGlobalAlpha(self):';
		$m.__track_lines__[301] = 'pyjamas.Canvas.GWTCanvas.py, line 301:\n    return self.impl.getGlobalAlpha()';
		$m.__track_lines__[304] = 'pyjamas.Canvas.GWTCanvas.py, line 304:\n    """*';
		$m.__track_lines__[310] = 'pyjamas.Canvas.GWTCanvas.py, line 310:\n    def getGlobalCompositeOperation(self):';
		$m.__track_lines__[311] = 'pyjamas.Canvas.GWTCanvas.py, line 311:\n    return self.impl.getGlobalCompositeOperation()';
		$m.__track_lines__[314] = 'pyjamas.Canvas.GWTCanvas.py, line 314:\n    """*';
		$m.__track_lines__[320] = 'pyjamas.Canvas.GWTCanvas.py, line 320:\n    def getLineCap(self):';
		$m.__track_lines__[321] = 'pyjamas.Canvas.GWTCanvas.py, line 321:\n    return self.impl.getLineCap()';
		$m.__track_lines__[324] = 'pyjamas.Canvas.GWTCanvas.py, line 324:\n    """*';
		$m.__track_lines__[330] = 'pyjamas.Canvas.GWTCanvas.py, line 330:\n    def getLineJoin(self):';
		$m.__track_lines__[331] = 'pyjamas.Canvas.GWTCanvas.py, line 331:\n    return self.impl.getLineJoin()';
		$m.__track_lines__[334] = 'pyjamas.Canvas.GWTCanvas.py, line 334:\n    """*';
		$m.__track_lines__[340] = 'pyjamas.Canvas.GWTCanvas.py, line 340:\n    def getLineWidth(self):';
		$m.__track_lines__[341] = 'pyjamas.Canvas.GWTCanvas.py, line 341:\n    return self.impl.getLineWidth()';
		$m.__track_lines__[344] = 'pyjamas.Canvas.GWTCanvas.py, line 344:\n    """*';
		$m.__track_lines__[350] = 'pyjamas.Canvas.GWTCanvas.py, line 350:\n    def getMiterLimit(self):';
		$m.__track_lines__[351] = 'pyjamas.Canvas.GWTCanvas.py, line 351:\n    return self.impl.getMiterLimit()';
		$m.__track_lines__[354] = 'pyjamas.Canvas.GWTCanvas.py, line 354:\n    """*';
		$m.__track_lines__[361] = 'pyjamas.Canvas.GWTCanvas.py, line 361:\n    def lineTo(self, x, y):';
		$m.__track_lines__[362] = 'pyjamas.Canvas.GWTCanvas.py, line 362:\n    self.impl.lineTo(x, y)';
		$m.__track_lines__[365] = 'pyjamas.Canvas.GWTCanvas.py, line 365:\n    """*';
		$m.__track_lines__[573] = 'pyjamas.Canvas.GWTCanvas.py, line 573:\n    self.impl.setLineJoin(lineJoin)';
		$m.__track_lines__[371] = 'pyjamas.Canvas.GWTCanvas.py, line 371:\n    def moveTo(self, x, y):';
		$m.__track_lines__[372] = 'pyjamas.Canvas.GWTCanvas.py, line 372:\n    self.impl.moveTo(x, y)';
		$m.__track_lines__[375] = 'pyjamas.Canvas.GWTCanvas.py, line 375:\n    """*';
		$m.__track_lines__[386] = 'pyjamas.Canvas.GWTCanvas.py, line 386:\n    def quadraticCurveTo(self, cpx, cpy, x, y):';
		$m.__track_lines__[387] = 'pyjamas.Canvas.GWTCanvas.py, line 387:\n    self.impl.quadraticCurveTo(cpx, cpy, x, y)';
		$m.__track_lines__[390] = 'pyjamas.Canvas.GWTCanvas.py, line 390:\n    """*';
		$m.__track_lines__[398] = 'pyjamas.Canvas.GWTCanvas.py, line 398:\n    def rect(self, startX, startY, width, height):';
		$m.__track_lines__[399] = 'pyjamas.Canvas.GWTCanvas.py, line 399:\n    self.impl.rect(startX, startY, width, height)';
		$m.__track_lines__[402] = 'pyjamas.Canvas.GWTCanvas.py, line 402:\n    """*';
		$m.__track_lines__[415] = 'pyjamas.Canvas.GWTCanvas.py, line 415:\n    def resize(self, width, height):';
		$m.__track_lines__[416] = 'pyjamas.Canvas.GWTCanvas.py, line 416:\n    self.setCoordSize(width, height)';
		$m.__track_lines__[417] = 'pyjamas.Canvas.GWTCanvas.py, line 417:\n    self.setPixelHeight(height)';
		$m.__track_lines__[418] = 'pyjamas.Canvas.GWTCanvas.py, line 418:\n    self.setPixelWidth(width)';
		$m.__track_lines__[421] = 'pyjamas.Canvas.GWTCanvas.py, line 421:\n    """*';
		$m.__track_lines__[424] = 'pyjamas.Canvas.GWTCanvas.py, line 424:\n    def restoreContext(self):';
		$m.__track_lines__[425] = 'pyjamas.Canvas.GWTCanvas.py, line 425:\n    self.impl.restoreContext()';
		$m.__track_lines__[583] = 'pyjamas.Canvas.GWTCanvas.py, line 583:\n    self.impl.setLineWidth(width)';
		$m.__track_lines__[428] = 'pyjamas.Canvas.GWTCanvas.py, line 428:\n    """*';
		$m.__track_lines__[433] = 'pyjamas.Canvas.GWTCanvas.py, line 433:\n    def rotate(self, angle):';
		$m.__track_lines__[434] = 'pyjamas.Canvas.GWTCanvas.py, line 434:\n    self.impl.rotate(angle)';
		$m.__track_lines__[437] = 'pyjamas.Canvas.GWTCanvas.py, line 437:\n    """*';
		$m.__track_lines__[440] = 'pyjamas.Canvas.GWTCanvas.py, line 440:\n    def saveContext(self):';
		$m.__track_lines__[441] = 'pyjamas.Canvas.GWTCanvas.py, line 441:\n    self.impl.saveContext()';
		$m.__track_lines__[671] = 'pyjamas.Canvas.GWTCanvas.py, line 671:\n    """*';
		$m.__track_lines__[444] = 'pyjamas.Canvas.GWTCanvas.py, line 444:\n    """*';
		$m.__track_lines__[586] = 'pyjamas.Canvas.GWTCanvas.py, line 586:\n    """*';
		$m.__track_lines__[450] = 'pyjamas.Canvas.GWTCanvas.py, line 450:\n    def scale(self, x, y):';
		$m.__track_lines__[451] = 'pyjamas.Canvas.GWTCanvas.py, line 451:\n    self.impl.scale(x, y)';
		$m.__track_lines__[454] = 'pyjamas.Canvas.GWTCanvas.py, line 454:\n    """*';
		$m.__track_lines__[459] = 'pyjamas.Canvas.GWTCanvas.py, line 459:\n    def setBackgroundColor(self, color):';
		$m.__track_lines__[460] = 'pyjamas.Canvas.GWTCanvas.py, line 460:\n    self.impl.setBackgroundColor(self.getCanvasElement(), str(color))';
		$m.__track_lines__[463] = 'pyjamas.Canvas.GWTCanvas.py, line 463:\n    """*';
		$m.__track_lines__[471] = 'pyjamas.Canvas.GWTCanvas.py, line 471:\n    def setCoordHeight(self, height):';
		$m.__track_lines__[472] = 'pyjamas.Canvas.GWTCanvas.py, line 472:\n    self.impl.setCoordHeight(self.getCanvasElement(), height)';
		$m.__track_lines__[473] = 'pyjamas.Canvas.GWTCanvas.py, line 473:\n    self.coordHeight = height';
		$m.__track_lines__[476] = 'pyjamas.Canvas.GWTCanvas.py, line 476:\n    """*';
		$m.__track_lines__[617] = 'pyjamas.Canvas.GWTCanvas.py, line 617:\n    FocusWidget.setWidth(self, str(width) + "px")';
		$m.__track_lines__[485] = 'pyjamas.Canvas.GWTCanvas.py, line 485:\n    def setCoordSize(self, width, height):';
		$m.__track_lines__[486] = 'pyjamas.Canvas.GWTCanvas.py, line 486:\n    self.setCoordWidth(width)';
		$m.__track_lines__[487] = 'pyjamas.Canvas.GWTCanvas.py, line 487:\n    self.setCoordHeight(height)';
		$m.__track_lines__[490] = 'pyjamas.Canvas.GWTCanvas.py, line 490:\n    """*';
		$m.__track_lines__[498] = 'pyjamas.Canvas.GWTCanvas.py, line 498:\n    def setCoordWidth(self, width):';
		$m.__track_lines__[499] = 'pyjamas.Canvas.GWTCanvas.py, line 499:\n    self.impl.setCoordWidth(self.getCanvasElement(), width)';
		$m.__track_lines__[500] = 'pyjamas.Canvas.GWTCanvas.py, line 500:\n    self.coordWidth = width';
		$m.__track_lines__[503] = 'pyjamas.Canvas.GWTCanvas.py, line 503:\n    """*';
		$m.__track_lines__[508] = 'pyjamas.Canvas.GWTCanvas.py, line 508:\n    def setFillStyle(self, grad):';
		$m.__track_lines__[509] = 'pyjamas.Canvas.GWTCanvas.py, line 509:\n    self.impl.setFillStyle(grad)';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_150 = new $p['int'](150);
		$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=17;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=19;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=20;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=21;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=22;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=24;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['LinearGradientImplDefault'] = $p['___import___']('pyjamas.Canvas.LinearGradientImplDefault.LinearGradientImplDefault', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=25;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['RadialGradientImplDefault'] = $p['___import___']('pyjamas.Canvas.RadialGradientImplDefault.RadialGradientImplDefault', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=26;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['GWTCanvasImplDefault'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplDefault.GWTCanvasImplDefault', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=28;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['LinearGradientImplIE6'] = $p['___import___']('pyjamas.Canvas.LinearGradientImplIE6.LinearGradientImplIE6', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=29;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['RadialGradientImplIE6'] = $p['___import___']('pyjamas.Canvas.RadialGradientImplIE6.RadialGradientImplIE6', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=30;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['GWTCanvasImplIE6'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIE6.GWTCanvasImplIE6', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=34;
		$pyjs['track']['lineno']=44;
		$m['GWTCanvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.GWTCanvas';
			$cls_definition['__md5__'] = '01981e247d36dc0ed7dbe450f5120bbd';
			$pyjs['track']['lineno']=61;
			$method = $pyjs__bind_method2('__init__', function(coordX, coordY, pixelX, pixelY) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					coordX = arguments[1];
					coordY = arguments[2];
					pixelX = arguments[3];
					pixelY = arguments[4];
					var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof pixelY != 'undefined') {
						if (pixelY !== null && typeof pixelY['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = pixelY;
							pixelY = arguments[5];
						}
					} else 					if (typeof pixelX != 'undefined') {
						if (pixelX !== null && typeof pixelX['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = pixelX;
							pixelX = arguments[5];
						}
					} else 					if (typeof coordY != 'undefined') {
						if (coordY !== null && typeof coordY['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = coordY;
							coordY = arguments[5];
						}
					} else 					if (typeof coordX != 'undefined') {
						if (coordX !== null && typeof coordX['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = coordX;
							coordX = arguments[5];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[5];
						}
					} else {
					}
				}
				if (typeof coordX == 'undefined') coordX=arguments['callee']['__args__'][3][1];
				if (typeof coordY == 'undefined') coordY=arguments['callee']['__args__'][4][1];
				if (typeof pixelX == 'undefined') pixelX=arguments['callee']['__args__'][5][1];
				if (typeof pixelY == 'undefined') pixelY=arguments['callee']['__args__'][6][1];
				var focusable;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':61};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=61;
				$pyjs['track']['lineno']=68;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('impl', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getCanvasImpl']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) : $p['setattr'](self, 'impl', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getCanvasImpl']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()); 
				$pyjs['track']['lineno']=70;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('coordHeight', $constant_int_0) : $p['setattr'](self, 'coordHeight', $constant_int_0); 
				$pyjs['track']['lineno']=71;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('coordWidth', $constant_int_0) : $p['setattr'](self, 'coordWidth', $constant_int_0); 
				$pyjs['track']['lineno']=72;
				focusable = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Focus']['createFocusable']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
				$pyjs['track']['lineno']=73;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('canvas', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['createElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) : $p['setattr'](self, 'canvas', (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['createElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()); 
				$pyjs['track']['lineno']=74;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['appendChild'](focusable, $p['getattr'](self, 'canvas'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs['track']['lineno']=75;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['FocusWidget'], '__init__', null, kwargs, [{}, self, focusable]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$pyjs['track']['lineno']=77;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setPixelWidth'](pixelX);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$pyjs['track']['lineno']=78;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setPixelHeight'](pixelY);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$pyjs['track']['lineno']=79;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setCoordSize'](coordX, coordY);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['coordX', $constant_int_300],['coordY', $constant_int_150],['pixelX', $constant_int_300],['pixelY', $constant_int_150]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=81;
			$method = $pyjs__bind_method2('getCanvasElement', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':81};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=81;
				$pyjs['track']['lineno']=82;
				$pyjs['track']['lineno']=82;
				var $pyjs__ret = $p['getattr'](self, 'canvas');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCanvasElement'] = $method;
			$pyjs['track']['lineno']=84;
			$method = $pyjs__bind_method2('getCanvasImpl', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':84};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=84;
				$pyjs['track']['lineno']=4;
				$pyjs['track']['lineno']=4;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['GWTCanvasImplIE6']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCanvasImpl'] = $method;
			$pyjs['track']['lineno']=87;
			$method = $pyjs__bind_method2('setWidth', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':87};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=87;
				$pyjs['track']['lineno']=88;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setPixelWidth'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setWidth'] = $method;
			$pyjs['track']['lineno']=90;
			$method = $pyjs__bind_method2('setHeight', function(height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					height = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=90;
				$pyjs['track']['lineno']=91;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setPixelHeight'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['height']]);
			$cls_definition['setHeight'] = $method;
			$pyjs['track']['lineno']=93;
			$pyjs['track']['lineno']=105;
			$method = $pyjs__bind_method2('arc', function(x, y, radius, startAngle, endAngle, antiClockwise) {
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
					antiClockwise = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':105};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=105;
				$pyjs['track']['lineno']=106;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['arc'](x, y, radius, startAngle, endAngle, antiClockwise);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['radius'],['startAngle'],['endAngle'],['antiClockwise']]);
			$cls_definition['arc'] = $method;
			$pyjs['track']['lineno']=109;
			$pyjs['track']['lineno']=112;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':112};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=112;
				$pyjs['track']['lineno']=113;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['beginPath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['beginPath'] = $method;
			$pyjs['track']['lineno']=116;
			$pyjs['track']['lineno']=119;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':119};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=119;
				$pyjs['track']['lineno']=122;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['clear']($p['getattr'](self, 'coordWidth'), $p['getattr'](self, 'coordHeight'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear'] = $method;
			$pyjs['track']['lineno']=125;
			$pyjs['track']['lineno']=129;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':129};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=129;
				$pyjs['track']['lineno']=130;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['closePath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['closePath'] = $method;
			$pyjs['track']['lineno']=133;
			$pyjs['track']['lineno']=143;
			$method = $pyjs__bind_method2('createLinearGradient', function(x0, y0, x1, y1) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x0 = arguments[1];
					y0 = arguments[2];
					x1 = arguments[3];
					y1 = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':143};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=143;
				$pyjs['track']['lineno']=6;
				$pyjs['track']['lineno']=6;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['LinearGradientImplIE6'](x0, y0, x1, y1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x0'],['y0'],['x1'],['y1']]);
			$cls_definition['createLinearGradient'] = $method;
			$pyjs['track']['lineno']=147;
			$pyjs['track']['lineno']=159;
			$method = $pyjs__bind_method2('createRadialGradient', function(x0, y0, r0, x1, y1, r1) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					x0 = arguments[1];
					y0 = arguments[2];
					r0 = arguments[3];
					x1 = arguments[4];
					y1 = arguments[5];
					r1 = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':159};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=159;
				$pyjs['track']['lineno']=8;
				$pyjs['track']['lineno']=8;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['RadialGradientImplIE6'](x0, y0, r0, x1, y1, r1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x0'],['y0'],['r0'],['x1'],['y1'],['r1']]);
			$cls_definition['createRadialGradient'] = $method;
			$pyjs['track']['lineno']=164;
			$pyjs['track']['lineno']=182;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':182};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=182;
				$pyjs['track']['lineno']=183;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['cubicCurveTo'](cp1x, cp1y, cp2x, cp2y, x, y);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['cp1x'],['cp1y'],['cp2x'],['cp2y'],['x'],['y']]);
			$cls_definition['cubicCurveTo'] = $method;
			$pyjs['track']['lineno']=186;
			$pyjs['track']['lineno']=219;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var destHeight,img_width,img_height,destWidth,destY,destX,sourceX,sourceY,sourceHeight,sourceWidth;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':219};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=219;
				$pyjs['track']['lineno']=220;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](img, $m['Widget']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
					$pyjs['track']['lineno']=221;
					img_width = (function(){try{try{$pyjs['in_try_except'] += 1;
					return img['getWidth']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
					$pyjs['track']['lineno']=222;
					img_height = (function(){try{try{$pyjs['in_try_except'] += 1;
					return img['getHeight']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=224;
					img_width = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['getIntAttribute'](img, 'offsetWidth');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
					$pyjs['track']['lineno']=225;
					img_height = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['getIntAttribute'](img, 'offsetHeight');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				}
				$pyjs['track']['lineno']=226;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](args);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})(), $constant_int_8));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
					$pyjs['track']['lineno']=227;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['impl']['drawImage'](img, args['__getitem__']($constant_int_0), args['__getitem__']($constant_int_1), args['__getitem__']($constant_int_2), args['__getitem__']($constant_int_3), args['__getitem__']($constant_int_4), args['__getitem__']($constant_int_5), args['__getitem__']($constant_int_6), args['__getitem__']($constant_int_7));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](args);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})(), $constant_int_4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
					$pyjs['track']['lineno']=229;
					sourceX = $constant_int_0;
					$pyjs['track']['lineno']=230;
					sourceY = $constant_int_0;
					$pyjs['track']['lineno']=231;
					sourceWidth = img_width;
					$pyjs['track']['lineno']=232;
					sourceHeight = img_height;
					$pyjs['track']['lineno']=233;
					destX = args['__getitem__']($constant_int_0);
					$pyjs['track']['lineno']=234;
					destY = args['__getitem__']($constant_int_1);
					$pyjs['track']['lineno']=235;
					destWidth = args['__getitem__']($constant_int_2);
					$pyjs['track']['lineno']=236;
					destHeight = args['__getitem__']($constant_int_3);
					$pyjs['track']['lineno']=237;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['impl']['drawImage'](img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](args);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})(), $constant_int_2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()) {
					$pyjs['track']['lineno']=241;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['impl']['drawImage'](img, args['__getitem__']($constant_int_0), args['__getitem__']($constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',null,['self'],['img']]);
			$cls_definition['drawImage'] = $method;
			$pyjs['track']['lineno']=244;
			$pyjs['track']['lineno']=247;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':247};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=247;
				$pyjs['track']['lineno']=248;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['fill']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['fill'] = $method;
			$pyjs['track']['lineno']=251;
			$pyjs['track']['lineno']=260;
			$method = $pyjs__bind_method2('fillRect', function(startX, startY, width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					startX = arguments[1];
					startY = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':260};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=260;
				$pyjs['track']['lineno']=261;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['fillRect'](startX, startY, width, height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['startX'],['startY'],['width'],['height']]);
			$cls_definition['fillRect'] = $method;
			$pyjs['track']['lineno']=263;
			$pyjs['track']['lineno']=271;
			$method = $pyjs__bind_method2('fillText', function(text, startX, startY, maxWidth) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					startX = arguments[2];
					startY = arguments[3];
					maxWidth = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof maxWidth == 'undefined') maxWidth=arguments['callee']['__args__'][6][1];

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':271};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=271;
				$pyjs['track']['lineno']=272;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['fillText'](text, startX, startY, maxWidth);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['text'],['startX'],['startY'],['maxWidth', null]]);
			$cls_definition['fillText'] = $method;
			$pyjs['track']['lineno']=275;
			$pyjs['track']['lineno']=280;
			$method = $pyjs__bind_method2('getCoordHeight', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':280};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=280;
				$pyjs['track']['lineno']=281;
				$pyjs['track']['lineno']=281;
				var $pyjs__ret = $p['getattr'](self, 'coordHeight');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCoordHeight'] = $method;
			$pyjs['track']['lineno']=284;
			$pyjs['track']['lineno']=290;
			$method = $pyjs__bind_method2('getCoordWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':290};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=290;
				$pyjs['track']['lineno']=291;
				$pyjs['track']['lineno']=291;
				var $pyjs__ret = $p['getattr'](self, 'coordWidth');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCoordWidth'] = $method;
			$pyjs['track']['lineno']=294;
			$pyjs['track']['lineno']=300;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':300};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=300;
				$pyjs['track']['lineno']=301;
				$pyjs['track']['lineno']=301;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['getGlobalAlpha']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getGlobalAlpha'] = $method;
			$pyjs['track']['lineno']=304;
			$pyjs['track']['lineno']=310;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':310};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=310;
				$pyjs['track']['lineno']=311;
				$pyjs['track']['lineno']=311;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['getGlobalCompositeOperation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getGlobalCompositeOperation'] = $method;
			$pyjs['track']['lineno']=314;
			$pyjs['track']['lineno']=320;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':320};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=320;
				$pyjs['track']['lineno']=321;
				$pyjs['track']['lineno']=321;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['getLineCap']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLineCap'] = $method;
			$pyjs['track']['lineno']=324;
			$pyjs['track']['lineno']=330;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':330};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=330;
				$pyjs['track']['lineno']=331;
				$pyjs['track']['lineno']=331;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['getLineJoin']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLineJoin'] = $method;
			$pyjs['track']['lineno']=334;
			$pyjs['track']['lineno']=340;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':340};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=340;
				$pyjs['track']['lineno']=341;
				$pyjs['track']['lineno']=341;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['getLineWidth']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLineWidth'] = $method;
			$pyjs['track']['lineno']=344;
			$pyjs['track']['lineno']=350;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':350};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=350;
				$pyjs['track']['lineno']=351;
				$pyjs['track']['lineno']=351;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['getMiterLimit']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMiterLimit'] = $method;
			$pyjs['track']['lineno']=354;
			$pyjs['track']['lineno']=361;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':361};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=361;
				$pyjs['track']['lineno']=362;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['lineTo'](x, y);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['lineTo'] = $method;
			$pyjs['track']['lineno']=365;
			$pyjs['track']['lineno']=371;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':371};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=371;
				$pyjs['track']['lineno']=372;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['moveTo'](x, y);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['moveTo'] = $method;
			$pyjs['track']['lineno']=375;
			$pyjs['track']['lineno']=386;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':386};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=386;
				$pyjs['track']['lineno']=387;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['quadraticCurveTo'](cpx, cpy, x, y);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['cpx'],['cpy'],['x'],['y']]);
			$cls_definition['quadraticCurveTo'] = $method;
			$pyjs['track']['lineno']=390;
			$pyjs['track']['lineno']=398;
			$method = $pyjs__bind_method2('rect', function(startX, startY, width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					startX = arguments[1];
					startY = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':398};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=398;
				$pyjs['track']['lineno']=399;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['rect'](startX, startY, width, height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['startX'],['startY'],['width'],['height']]);
			$cls_definition['rect'] = $method;
			$pyjs['track']['lineno']=402;
			$pyjs['track']['lineno']=415;
			$method = $pyjs__bind_method2('resize', function(width, height) {
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':415};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=415;
				$pyjs['track']['lineno']=416;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setCoordSize'](width, height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
				$pyjs['track']['lineno']=417;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setPixelHeight'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				$pyjs['track']['lineno']=418;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setPixelWidth'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['resize'] = $method;
			$pyjs['track']['lineno']=421;
			$pyjs['track']['lineno']=424;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':424};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=424;
				$pyjs['track']['lineno']=425;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['restoreContext']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['restoreContext'] = $method;
			$pyjs['track']['lineno']=428;
			$pyjs['track']['lineno']=433;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':433};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=433;
				$pyjs['track']['lineno']=434;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['rotate'](angle);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['angle']]);
			$cls_definition['rotate'] = $method;
			$pyjs['track']['lineno']=437;
			$pyjs['track']['lineno']=440;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':440};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=440;
				$pyjs['track']['lineno']=441;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['saveContext']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['saveContext'] = $method;
			$pyjs['track']['lineno']=444;
			$pyjs['track']['lineno']=450;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':450};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=450;
				$pyjs['track']['lineno']=451;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['scale'](x, y);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['scale'] = $method;
			$pyjs['track']['lineno']=454;
			$pyjs['track']['lineno']=459;
			$method = $pyjs__bind_method2('setBackgroundColor', function(color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					color = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':459};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=459;
				$pyjs['track']['lineno']=460;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['setBackgroundColor']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getCanvasElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](color);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['color']]);
			$cls_definition['setBackgroundColor'] = $method;
			$pyjs['track']['lineno']=463;
			$pyjs['track']['lineno']=471;
			$method = $pyjs__bind_method2('setCoordHeight', function(height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					height = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':471};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=471;
				$pyjs['track']['lineno']=472;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['setCoordHeight']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getCanvasElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})(), height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
				$pyjs['track']['lineno']=473;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('coordHeight', height) : $p['setattr'](self, 'coordHeight', height); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['height']]);
			$cls_definition['setCoordHeight'] = $method;
			$pyjs['track']['lineno']=476;
			$pyjs['track']['lineno']=485;
			$method = $pyjs__bind_method2('setCoordSize', function(width, height) {
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':485};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=485;
				$pyjs['track']['lineno']=486;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setCoordWidth'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
				$pyjs['track']['lineno']=487;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setCoordHeight'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['setCoordSize'] = $method;
			$pyjs['track']['lineno']=490;
			$pyjs['track']['lineno']=498;
			$method = $pyjs__bind_method2('setCoordWidth', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':498};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=498;
				$pyjs['track']['lineno']=499;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['setCoordWidth']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getCanvasElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})(), width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
				$pyjs['track']['lineno']=500;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('coordWidth', width) : $p['setattr'](self, 'coordWidth', width); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setCoordWidth'] = $method;
			$pyjs['track']['lineno']=503;
			$pyjs['track']['lineno']=508;
			$method = $pyjs__bind_method2('setFillStyle', function(grad) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					grad = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':508};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=508;
				$pyjs['track']['lineno']=509;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['setFillStyle'](grad);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['grad']]);
			$cls_definition['setFillStyle'] = $method;
			$pyjs['track']['lineno']=512;
			$pyjs['track']['lineno']=517;
			$method = $pyjs__bind_method2('setGlobalAlpha', function(alpha) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					alpha = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':517};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=517;
				$pyjs['track']['lineno']=518;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['setGlobalAlpha'](alpha);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['alpha']]);
			$cls_definition['setGlobalAlpha'] = $method;
			$pyjs['track']['lineno']=520;
			$pyjs['track']['lineno']=525;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':525};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=525;
				$pyjs['track']['lineno']=526;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['setFont'](font);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['font']]);
			$cls_definition['setFont'] = $method;
			$pyjs['track']['lineno']=529;
			$pyjs['track']['lineno']=544;
			$method = $pyjs__bind_method2('setGlobalCompositeOperation', function(globalCompositeOperation) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					globalCompositeOperation = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':544};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=544;
				$pyjs['track']['lineno']=545;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['setGlobalCompositeOperation'](globalCompositeOperation);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['globalCompositeOperation']]);
			$cls_definition['setGlobalCompositeOperation'] = $method;
			$pyjs['track']['lineno']=548;
			$pyjs['track']['lineno']=558;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':558};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=558;
				$pyjs['track']['lineno']=559;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['setLineCap'](lineCap);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['lineCap']]);
			$cls_definition['setLineCap'] = $method;
			$pyjs['track']['lineno']=562;
			$pyjs['track']['lineno']=572;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':572};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=572;
				$pyjs['track']['lineno']=573;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['setLineJoin'](lineJoin);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['lineJoin']]);
			$cls_definition['setLineJoin'] = $method;
			$pyjs['track']['lineno']=576;
			$pyjs['track']['lineno']=582;
			$method = $pyjs__bind_method2('setLineWidth', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':582};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=582;
				$pyjs['track']['lineno']=583;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['setLineWidth'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setLineWidth'] = $method;
			$pyjs['track']['lineno']=586;
			$pyjs['track']['lineno']=597;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':597};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=597;
				$pyjs['track']['lineno']=598;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['setMiterLimit'](miterLimit);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['miterLimit']]);
			$cls_definition['setMiterLimit'] = $method;
			$pyjs['track']['lineno']=601;
			$pyjs['track']['lineno']=606;
			$method = $pyjs__bind_method2('setPixelHeight', function(height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					height = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':606};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=606;
				$pyjs['track']['lineno']=607;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['FocusWidget']['setHeight'](self, $p['__op_add']($add1=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})(),$add2='px'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				$pyjs['track']['lineno']=608;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['setPixelHeight']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getCanvasElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})(), height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['height']]);
			$cls_definition['setPixelHeight'] = $method;
			$pyjs['track']['lineno']=611;
			$pyjs['track']['lineno']=616;
			$method = $pyjs__bind_method2('setPixelWidth', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add4,$add3;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':616};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=616;
				$pyjs['track']['lineno']=617;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['FocusWidget']['setWidth'](self, $p['__op_add']($add3=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})(),$add4='px'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
				$pyjs['track']['lineno']=618;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['setPixelWidth']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getCanvasElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})(), width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setPixelWidth'] = $method;
			$pyjs['track']['lineno']=621;
			$pyjs['track']['lineno']=626;
			$method = $pyjs__bind_method2('setStrokeStyle', function(grad) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					grad = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':626};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=626;
				$pyjs['track']['lineno']=627;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['setStrokeStyle'](grad);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['grad']]);
			$cls_definition['setStrokeStyle'] = $method;
			$pyjs['track']['lineno']=630;
			$pyjs['track']['lineno']=633;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':633};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=633;
				$pyjs['track']['lineno']=634;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['stroke']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['stroke'] = $method;
			$pyjs['track']['lineno']=637;
			$pyjs['track']['lineno']=645;
			$method = $pyjs__bind_method2('strokeRect', function(startX, startY, width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					startX = arguments[1];
					startY = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':645};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=645;
				$pyjs['track']['lineno']=646;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['strokeRect'](startX, startY, width, height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['startX'],['startY'],['width'],['height']]);
			$cls_definition['strokeRect'] = $method;
			$pyjs['track']['lineno']=649;
			$pyjs['track']['lineno']=667;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':667};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=667;
				$pyjs['track']['lineno']=668;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['transform'](m11, m12, m21, m22, dx, dy);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['m11'],['m12'],['m21'],['m22'],['dx'],['dy']]);
			$cls_definition['transform'] = $method;
			$pyjs['track']['lineno']=671;
			$pyjs['track']['lineno']=678;
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
					if (self.prototype['__md5__'] !== '01981e247d36dc0ed7dbe450f5120bbd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvas', 'lineno':678};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvas';
				$pyjs['track']['lineno']=678;
				$pyjs['track']['lineno']=679;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['impl']['translate'](x, y);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['translate'] = $method;
			$pyjs['track']['lineno']=44;
			var $bases = new Array($m['FocusWidget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GWTCanvas', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.GWTCanvas */


/* end module: pyjamas.Canvas.GWTCanvas */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.Focus', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', 'pyjamas.Canvas.Color', 'pyjamas.Canvas.LinearGradientImplDefault.LinearGradientImplDefault', 'pyjamas.Canvas.LinearGradientImplDefault', 'pyjamas.Canvas.RadialGradientImplDefault.RadialGradientImplDefault', 'pyjamas.Canvas.RadialGradientImplDefault', 'pyjamas.Canvas.GWTCanvasImplDefault.GWTCanvasImplDefault', 'pyjamas.Canvas.GWTCanvasImplDefault', 'pyjamas.Canvas.LinearGradientImplIE6.LinearGradientImplIE6', 'pyjamas.Canvas.LinearGradientImplIE6', 'pyjamas.Canvas.RadialGradientImplIE6.RadialGradientImplIE6', 'pyjamas.Canvas.RadialGradientImplIE6', 'pyjamas.Canvas.GWTCanvasImplIE6.GWTCanvasImplIE6', 'pyjamas.Canvas.GWTCanvasImplIE6']
*/
