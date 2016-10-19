var num = this._NO;
this._map = map;
var div = this._div = document.createElement("div"); // 父级元素
	divChildOverlay = this._divChildOverlay = document.createElement("div"); // 第三级覆盖物div
div.setAttribute("class","parentDiv");
// 第三级覆盖物属性控制
divChildOverlay.setAttribute("class","building-overlay");
divChildOverlay.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
divChildOverlay.onclick = function () {
	var buildingOverlayObj = BuildingModel[num];
	// 信息窗口实例　三级建筑物覆盖物点击弹出的DIV     <div class="pointdetail clearfix">
	var buildingContent =
		"<h2>" + buildingOverlayObj.name + " </h2>" +
		"<p><a href=\"#\" target=\"_blank\"><img id=\"imgDemo\" src=\"" + buildingOverlayObj.picUrl + "\" width=\"420\" height=\"235\" alt=\"\"></a></p>" +
		"<ul><li><a href=\"#\"><span>" + buildingOverlayObj.areaMin + "m2</span><span class=\"w110\">¥ " + buildingOverlayObj.dayBeginning + "元/天</span><span>" + buildingOverlayObj.decoration + "</span><img src=\"" + buildingOverlayObj.childPic + "\" width=\"56\" height=\"35\" alt=\"\"></a></li><li class=\"more\"><a href=\"#\">查看更多（" + buildingOverlayObj.areaMin + "~" + buildingOverlayObj.areaMax + "㎡）</a></li></ul>" +
		"</div>";
	var infoWindow = new BMap.InfoWindow(buildingContent);  // 创建信息窗口对象
	var point = new BMap.Point(buildingOverlayObj.latitude,buildingOverlayObj.longitude + 0.001);
	// this.openInfoWindow(infoWindow);  无法实现在覆盖物对象上面弹出,只能靠坐标弹出
	map.openInfoWindow(infoWindow,point); //开启信息窗口
}
// // 保存code
// var code = this.code
divChildOverlay.style.fontSize = "12px"
var span = divChildOverlay._span = document.createElement("span");
divChildOverlay.appendChild(span);
span.appendChild(document.createTextNode(this._text));
// var that = this.divChildOverlay;
// var arrow = this._arrow = document.createElement("div");
//     arrow.setAttribute("class","arrow");
//     arrow.style.position = "absolute";
//     arrow.style.top = "22px";
//     arrow.style.left = "10px";
// div.appendChild(arrow);
divChildOverlay.onmouseover = function(){
	this.getElementsByTagName("span")[0].innerHTML = that._mouseoverTxt;
}
divChildOverlay.onmouseout = function(){
	this.getElementsByTagName("span")[0].innerHTML = that._text;
}
map.getPanes().labelPane.appendChild(divChildOverlay);
return div;



















this._map = map;
var div = this._div = document.createElement("div");
div.setAttribute("class","building-overlay");
div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
div.setAttribute("onclick","buildingOverlayClick(" +  this._NO　+ ")");
// // 保存code
// var code = this.code
// div.onclick = function(){
//     console.log(code);　　// 成功打印code
// }
div.style.fontSize = "12px"
var span = this._span = document.createElement("span");
div.appendChild(span);
span.appendChild(document.createTextNode(this._text));
var that = this;
// var arrow = this._arrow = document.createElement("div");
//     arrow.setAttribute("class","arrow");
//     arrow.style.position = "absolute";
//     arrow.style.top = "22px";
//     arrow.style.left = "10px";
// div.appendChild(arrow);
div.onmouseover = function(){
    this.getElementsByTagName("span")[0].innerHTML = that._mouseoverTxt;
}
div.onmouseout = function(){
    this.getElementsByTagName("span")[0].innerHTML = that._text;
}
map.getPanes().labelPane.appendChild(div);
return div;
