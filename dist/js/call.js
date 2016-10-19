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








    this._map = map;
    var div = this._div = document.createElement("div"); // 父级元素
        // divChildOverlay =
    div.setAttribute("class","building-overlay");
    var num = this._NO;
    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    div.onclick = function () {
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
    div.style.fontSize = "12px"
    var span = this._span = document.createElement("span");
    div.appendChild(span);
    span.appendChild(document.createTextNode(this._text));
    var that = this;
    var arrow = this._arrow = document.createElement("div");
        arrow.setAttribute("class","arrow");
        arrow.style.position = "absolute";
        arrow.style.top = "22px";
        arrow.style.left = "10px";
    div.appendChild(arrow);
    div.onmouseover = function(){
        this.getElementsByTagName("span")[0].innerHTML = that._mouseoverTxt;
    }
    div.onmouseout = function(){
        this.getElementsByTagName("span")[0].innerHTML = that._text;
    }
    map.getPanes().labelPane.appendChild(div);
    return div;















}
buildingOverlay.prototype.draw = function(){
    var map = this._map;
    var pixel = map.pointToOverlayPixel(this._point);
    this._div.style.left = pixel.x - 30 + "px";
    this._div.style.top  = pixel.y - 30 + "px";
}
