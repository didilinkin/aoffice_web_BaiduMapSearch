/*
 *调用——页面加载中按顺序做的内容
 */
var map = new BMap.Map("mapbox", {enableMapClick:false});  // 创建Map实例(关闭底图可点功能)
    map.centerAndZoom("青岛",12);      // 初始化地图,用城市名设置地图中心点
// 添加 缩放 与 平移控件
var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
map.addControl(top_left_control);   // 添加比例尺
map.addControl(top_left_navigation);    // 默认缩放平移控件
map.enableScrollWheelZoom(true);
// 地图缩放监听
var lastLevel;
map.addEventListener("zoomstart",function(){
	lastLevel = this.getZoom();
});
map.addEventListener("zoomend", function(){
	var zoomLevel = this.getZoom();     //　当前地图级别
	if (zoomLevel >= 15){
		// if (!lastLevel >= 14) {
		// 	addBuilding(BuildingModel,17);
		// 	console.log("输出3级地图内容:详细覆盖");
		// }
		addBuilding(BuildingModel,17);
		// console.log("输出3级地图内容:详细覆盖");
	}else if (zoomLevel >= 14){
		addRangeOverlay(businessCirclePoint,16);
		// console.log("输出2级地图内容:商圈");                // 商圈自定义覆盖物
	}else{
		if (!lastLevel < 14) {
			addRangeOverlay(RegionPoint,14);                // 输出行政区自定义覆盖物
			// console.log("输出1级地图内容:行政区");
		}
	}
});
// 行政区＋商圈范围覆盖物——１.2级通用
function rangeOverlay(point,text,code,url,zoom){
	this._point = point;
	this._text = text;
	this._code = code;
	this._url = url;
	this._zoom = zoom;
}
rangeOverlay.prototype = new BMap.Overlay();
rangeOverlay.prototype.initialize = function(map){
    this._map = map;
    var div = this._div = document.createElement("div");
    div.setAttribute("id",this._code);
    div.setAttribute("class","range-overlay");
    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    // 保存code
    var code = this._code,   //　区域代码
        url = this._url,
        point = this._point,
        zoom = this._zoom;
    div.onclick = function businessCirclePoint(){
        // Ajax上传code，并改变中心点
        map.setZoom(zoom);      // 根据坐标点进行跳转,改变层级
        // console.log("跳转链接" + url);
    }
    var span = this._span = document.createElement("span");
    div.appendChild(span);
    div.getElementsByTagName("span")[0].innerHTML =  this._text;
    div.onmouseover = function(){ this.style.zIndex = "9"; }
    div.onmouseout = function(){ this.style.zIndex = "1"; }
    map.getPanes().labelPane.appendChild(div);
    return div;
}
rangeOverlay.prototype.draw = function(){
    var map = this._map;
    var pixel = map.pointToOverlayPixel(this._point);
    // this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
    this._div.style.left = pixel.x - 30 + "px";
    this._div.style.top  = pixel.y - 30 + "px";
}
// 建筑物具体覆盖物——3级用(NO.是序号)
function buildingOverlay(point,text,mouseoverTxt,code,NO,zoom){
	this._point = point;
	this._text = text;
	this._mouseoverTxt = mouseoverTxt;
	this._code = code;
    this._NO = NO;
	this._zoom = zoom;
}
buildingOverlay.prototype = new BMap.Overlay();
buildingOverlay.prototype.initialize = function(map){
    var num = this._NO,
        buildingText = this._text;
    this._map = map;
    var div = this._div = document.createElement("div"); // 父级元素
    var childOverlay = document.createElement("div"); // 第三级覆盖物div
        div.setAttribute("class","building-parent");
        div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
        childOverlay.setAttribute("class","building-overlay");
        childOverlay.setAttribute("id",this._NO);
        childOverlay.onclick = function(){
            var childInfoWindow = document.createElement("div");
            childInfoWindow.id = "building-infoWindow-" + num;
            childInfoWindow.className = "building-infoWindow";
            var buildingOverlayObj = BuildingModel[num];
            // 拼接字符串内容
            var childInfoWindow_Content =
                "<h2>" +
                    "<span class=\"price\">" +
                        "<img src=\"images/cross1.png\">" +
                    "</span>" +
                    buildingOverlayObj.name +
                "</h2>" +
                "<p><a href=\"" + buildingOverlayObj.code + "\" target=\"_blank\">" +
                    "<img src=\"" + buildingOverlayObj.picUrl + "\" alt=\"\">" +
                "</a></p>" +
                "<ul>" +
                    "<li>" +
                        "<a href=\"" + buildingOverlayObj.code + "\">" +
                            "<span>" + buildingOverlayObj.areaMin + "㎡</span>" +
                            "<span class=\"w110\">¥ " + buildingOverlayObj.dayBeginning + " 元/天</span>" +
                            "<span>" + buildingOverlayObj.decoration + "</span>" +
                            "<img src=\"" + buildingOverlayObj.childPic[0] + "\" alt=\"\">" +
                        "</a>" +
                    "</li>" +
                    "<li class=\"more\"><a href=\"" + buildingOverlayObj.code + "\">查看更多（" + buildingOverlayObj.areaMin + "~" + buildingOverlayObj.areaMax + "㎡）</a></li>" +
                "</ul>"
            childInfoWindow.innerHTML =  childInfoWindow_Content;   // 信息窗口　加入内容结构；
            childOverlay.parentNode.insertBefore(childInfoWindow,childOverlay);
            // 获取所有信息窗口
            var allInfoWindow = document.getElementsByClassName("building-infoWindow");
        };
        div.appendChild(childOverlay);
    var span = this._span = document.createElement("span");
        span.appendChild(document.createTextNode(this._text));
        // span.setAttribute("class","building-overlay__span")
        childOverlay.appendChild(span);
        // console.log(span.offsetWidth);
    var that = this;
    var arrow = this._arrow = document.createElement("div");    // 箭头
        arrow.setAttribute("class","arrow");
        childOverlay.appendChild(arrow);
    childOverlay.onmouseover = function(){ this.getElementsByTagName("span")[0].innerHTML = that._mouseoverTxt; }
    childOverlay.onmouseout = function(){ this.getElementsByTagName("span")[0].innerHTML = that._text; }
    map.getPanes().labelPane.appendChild(div);
    return div;
}
buildingOverlay.prototype.draw = function(){
    var map = this._map;
    var pixel = map.pointToOverlayPixel(this._point);
    this._div.style.left = pixel.x - 30 + "px";
    this._div.style.top  = pixel.y - 30 + "px";
}
