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
