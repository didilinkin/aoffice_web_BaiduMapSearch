/*
 *调用——页面加载中按顺序做的内容
 */
var map = new BMap.Map("mapbox", {enableMapClick:false});  // 创建Map实例(关闭底图可点功能)
	map.centerAndZoom("上海",15);      // 初始化地图,用城市名设置地图中心点

    
var myIcon = new BMap.Icon("./images/map-select-postion.png", new BMap.Size(65,80));    // 自定义标注样式
var customMarker = new BMap.Marker(mPoint,{icon:myIcon});  // 创建自定义标注(将样式加入)
    customMarker.setAnimation(BMAP_ANIMATION_BOUNCE);     // 设置自定义标注 跳动
map.centerAndZoom(mPoint,15);   // 创建地图中心点,层级15级（并不显示标记）
map.disableDragging();  //禁止拖拽
// 添加 缩放 与 平移控件
map.addControl(new BMap.NavigationControl({
    anchor: BMAP_ANCHOR_TOP_RIGHT,
    type: BMAP_NAVIGATION_CONTROL_SMALL
}));
// 自定义控件(右上角 筛选)
var controlLiId = ["周边房源","公交","快餐","餐厅","银行","酒店"];      // 检索关键词
function ulListControl(){
 this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;      // 默认停靠位置和偏移量
 this.defaultOffset = new BMap.Size(10, 10);
}
ulListControl.prototype = new BMap.Control();
// 自定义控件必须实现自己的initialize（初始化）方法,并且将控件的DOM元素返回
ulListControl.prototype.initialize = function(map){
    var ul = document.createElement("ul");      // 创建一个DOM元素
    ul.id="ulList";
    var li = null;      // 创建一个节点
    var aText = ["周边房源", "交通","快餐","餐厅","银行","酒店"];     // 将li内容创建为数组
    var aIdName = ["housing", "traffic", "snack", "restaurant", "bank","hotel"];
    // 循环li标签
    for (var i=0; i < controlLiId.length; i++){
        li = document.createElement("li");
        a = document.createElement("a");
        li.setAttribute("onclick","controlLiOnclick("+ "\"" + controlLiId[i] + "\"" + "," + i +")");     // 给li控件添加点击事件
        a.setAttribute("herf","#");     // 给a标签添加属性
        a.appendChild(document.createTextNode(aText[i]));
        a.id=("search-" + aIdName[i]);
        ul.appendChild(li);
        li.appendChild(a);
    }
    map.getContainer().appendChild(ul);     // 添加DOM元素到地图中
    return ul;      // 将DOM元素返回
}
var myUlListControl = new ulListControl();
map.addControl(myUlListControl);    // 将控件重新添加到地图中
// 两秒后开启拖拽
setTimeout(function(){
    map.enableDragging();
}, 3500);
// 圆形检索填充
var circle = new BMap.Circle(mPoint,1000,{
    fillColor:"#FF2725",						// 填充色
    strokeWeight: 2,							// 画笔宽度
    strokeColor: "#FF2725",
    fillOpacity: 0.07, 							// 填充透明度
    strokeOpacity: 1							// 画笔透明度
});
var infoWindowMarker = new BMap.Marker(mPoint);
var oneMarker = new BMap.Marker(mPoint);
// 输出list列表内容
reloadList();
// 将自定义标注、自定义控件添加到地图中
defaultCallLoad();
