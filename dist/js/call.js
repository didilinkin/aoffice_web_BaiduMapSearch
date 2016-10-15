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
    if (zoomLevel>=14&&zoomLevel<15){
		map.clearOverlays();    // 清理地图上面所有点
		addRangeOverlay(businessCirclePoint);
		console.log("输出2级地图内容:商圈");		// 商圈自定义覆盖物
    }else if (zoomLevel>=15){
        console.log("输出3级地图内容:详细覆盖");
    }else{
		map.clearOverlays();    // 清理地图上面所有点
		addRangeOverlay(RegionPoint);		// 输出行政区自定义覆盖物
		console.log("输出1级地图内容:行政区");
    }
});
