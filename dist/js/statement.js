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
        var myCompOverlay = new rangeOverlay(
            new BMap.Point(arr.latitude,arr.longitude),text,code,url,zoom
        );
        map.addOverlay(myCompOverlay);
    }
};
function addBuilding(ObjGroup,setZoom){
    for (var i = 0; i < ObjGroup.length; i++) {
        var Arr = new Object();
        Arr = ObjGroup[i];
        // 拼接属性文字内容
        var text = "￥" + Arr.priceBeginning +  "起",
            mouseoverTxt = Arr.name + " " + Arr.resourceAmount + "套" ;
        var myCompOverlay = new ComplexCustomOverlay(
            new BMap.Point(Arr.longitude,Arr.latitude),text,mouseoverTxt,Arr.code
        );
        map.addOverlay(myCompOverlay);
    }
};
