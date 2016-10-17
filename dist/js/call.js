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
		console.log("输出3级地图内容:详细覆盖");
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
function rangeOverlay(point,text,mouseoverTxt,code,url,zoom){
	this._point = point;
	this._text = text;
	this._mouseoverTxt = mouseoverTxt;
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
    div.onmouseover = function(){
        this.style.zIndex = "9";
    }
    div.onmouseout = function(){
        this.style.zIndex = "1";
    }
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
// 建筑物具体覆盖物——3级用
function buildingOverlay(point,text,mouseoverTxt,code,zoom){
	this._point = point;
	this._text = text;
	this._mouseoverTxt = mouseoverTxt;
	this._code = code;
	this._zoom = zoom;
}
buildingOverlay.prototype = new BMap.Overlay();
buildingOverlay.prototype.initialize = function(map){
    this._map = map;
    var div = this._div = document.createElement("div");
    div.style.position = "absolute";
    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    div.style.backgroundColor = "#EE5D5B";
    div.style.border = "1px solid #BC3B3A";
    div.style.color = "white";
    div.style.height = "18px";
    div.style.padding = "2px";
    div.style.lineHeight = "18px";
    div.style.whiteSpace = "nowrap";
    div.style.MozUserSelect = "none";
    // 保存code
    var code = this.code
    div.onclick = function(){
        console.log(code);　　// 成功打印code
    }
    div.style.fontSize = "12px"
    var span = this._span = document.createElement("span");
    div.appendChild(span);
    span.appendChild(document.createTextNode(this._text));
    var that = this;
    var arrow = this._arrow = document.createElement("div");
    arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
    arrow.style.position = "absolute";
    arrow.style.width = "11px";
    arrow.style.height = "10px";
    arrow.style.top = "22px";
    arrow.style.left = "10px";
    arrow.style.overflow = "hidden";
    div.appendChild(arrow);
    div.onmouseover = function(){
        this.style.backgroundColor = "#6BADCA";
        this.style.borderColor = "#0000ff";
        this.getElementsByTagName("span")[0].innerHTML = that._mouseoverTxt;
        arrow.style.backgroundPosition = "0px -20px";
    }
    div.onmouseout = function(){
        this.style.backgroundColor = "#EE5D5B";
        this.style.borderColor = "#BC3B3A";
        this.style.cursor = "pointer";
        this.getElementsByTagName("span")[0].innerHTML = that._text;
        arrow.style.backgroundPosition = "0px 0px";
    }
    map.getPanes().labelPane.appendChild(div);
    return div;
}
buildingOverlay.prototype.draw = function(){
    var map = this._map;
    var pixel = map.pointToOverlayPixel(this._point);
    this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
    this._div.style.top  = pixel.y - 30 + "px";
}
