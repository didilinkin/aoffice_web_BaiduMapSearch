/*
 *调用——页面加载中按顺序做的内容
 */
var map = new BMap.Map("mapbox", {enableMapClick:false});  // 创建Map实例(关闭底图可点功能)
	map.centerAndZoom("青岛",11);      // 初始化地图,用城市名设置地图中心点
// 添加 缩放 与 平移控件
var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
map.addControl(top_left_control);   // 添加比例尺
map.addControl(top_left_navigation);    // 默认缩放平移控件
map.enableScrollWheelZoom(true);
// 地图缩放监听
map.addEventListener("zoomend", function(){
    var zoomLevel = this.getZoom(),     //　当前地图级别
        centerPoint = this.getCenter(); //  当前中心点坐标
    if ( zoomLevel>=14&&zoomLevel<15 ){
		map.clearOverlays();    // 清理地图上面所有点
		addRangeOverlay(businessCirclePoint,16);
		// console.log("输出2级地图内容:商圈");		// 商圈自定义覆盖物
    }else if ( zoomLevel>=15 ){
        // console.log("输出3级地图内容:详细覆盖");
    }else {
		map.clearOverlays();    // 清理地图上面所有点
		addRangeOverlay(RegionPoint,14);		// 输出行政区自定义覆盖物
		// console.log("输出1级地图内容:行政区");
    }
});
// 行政区＋商圈范围覆盖物——１.2级通用
function rangeOverlay(point,text,code,url,regionName,zoom){
    this._point = point;
    this._text = text;
    this._code = code;
    this._url = url;
	this._regionName = regionName;
    this._zoom = zoom;
}
rangeOverlay.prototype = new BMap.Overlay();
rangeOverlay.prototype.initialize = function(map){
    this._map = map;
    var div = this._div = document.createElement("div");
    div.setAttribute("id",this._code);
    div.setAttribute("class","'range-overlay' + ");
	div.setAttribute("data-regionName",this._regionName);
    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    // 保存code
    var code = this._code,   //　区域代码
        url = this._url,
        point = this._point,
        zoom = this._zoom;
    div.onclick = function circlePoint(){
        // Ajax上传code，并改变中心点
        map.setZoom(zoom);      // 根据坐标点进行跳转,改变层级
		// map.setViewport(points); // 将目标点集合集中展示
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
