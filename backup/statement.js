/*
 *声明——具体是怎样做的(具体实现)
 */
 // 添加范围自定义覆盖物（1.2级通用）
function addRangeOverlay(ObjGroup,setZoom){
    for (var i = 0; i < ObjGroup.length; i++) {
        var arr = new Object();
        arr = ObjGroup[i];
        var code = arr.code,
            url = arr.url,
            regionName = arr.regionName,
            text = arr.name + "<br />" + arr.resourceAmount + "套"; // 拼接字符串
        var zoom = setZoom; // 获取地图层级
        var myCompOverlay = new rangeOverlay(
            new BMap.Point(arr.latitude,arr.longitude),text,code,url,regionName,zoom
        );
        map.addOverlay(myCompOverlay);
    }
};
