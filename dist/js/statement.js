/*
 *声明——具体是怎样做的(具体实现)
 */
 // 添加范围自定义覆盖物（1.2级通用）
function addRangeOverlay(ObjGroup,setZoom){
    map.clearOverlays();    // 清理地图上面所有点
    for (var i = 0; i < ObjGroup.length; i++) {
        var arr = new Object();
        arr = ObjGroup[i];
        var code = arr.code,
            url = arr.url,
            text = arr.name + "<br />" + arr.resourceAmount + "套"; // 拼接字符串
        var zoom = setZoom; // 获取地图层级
        var RangeOverlay = new rangeOverlay(
            new BMap.Point(arr.latitude,arr.longitude),text,code,url,zoom
        );
        map.addOverlay(RangeOverlay);
    }
};
var buildingOverlayArr = [];
function addBuilding(ObjGroup,setZoom){
    map.clearOverlays();    // 清理地图上面所有点
    for (var i = 0; i < ObjGroup.length; i++) {
        var buildingArr = new Object();
        buildingArr = ObjGroup[i];
        // buildingName = ObjGroup[i].name;
        var zoom = setZoom; // 获取地图层级
        // 拼接属性文字内容
        var text = "￥" + buildingArr.priceBeginning +  " 起",
            mouseoverTxt = buildingArr.name + " " + buildingArr.resourceAmount + "套" ;
        var BuildingOverlay = new buildingOverlay(
            new BMap.Point(buildingArr.latitude,buildingArr.longitude),text,mouseoverTxt,buildingArr.code,i,zoom    // i = 序号
        );
        map.addOverlay(BuildingOverlay);
        buildingOverlayArr[i] = BuildingOverlay;
    }
};
function buildingOverlayClick(NO) {
    var buildingOverlayObj = BuildingModel[NO];
    console.log(buildingOverlayObj.longitude + 0.09);
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
