/*
 *声明——具体是怎样做的(具体实现)
 */
// 模拟数据（一级）
var SearchModel = [
    // 行政区1-市南区-
    {
        cityCode: "青岛",                       // 城市编码
        regionCode: "市南区",                   // 区域编码
        regionLongitude: 36.081759,            // 行政区地理经度，修正样式　经度+0.012
        regionLatitude: 120.389053,            // 行政区地理纬度
        resourceAmount: 300,                   // 套数
        url: "市南区#"                          // 链接
    },
    // 行政区２-市北区-
    {
        cityCode: "青岛",                        // 城市编码
        regionCode: "市北区",                    // 区域编码
        regionLongitude: 36.121754,             // 行政区地理经度 ，修正样式　经度+0.012
        regionLatitude: 120.362834,             // 行政区地理纬度
        resourceAmount: 310,                    // 套数
        url: "市北区#"                           // 链接
    },
    // 行政区3-李沧区-
    {
        cityCode: "青岛",                        // 城市编码
        regionCode: "李沧区",                    // 区域编码
        regionLongitude: 36.185967,            // 行政区地理经度，修正样式　经度+0.012
        regionLatitude: 120.38975,              // 行政区地理纬度
        resourceAmount: 320,                    // 套数
        url: "李沧区#"                           // 链接
    },
    // 行政区4-崂山区
    {
        cityCode: "青岛",                        // 城市编码
        regionCode: "崂山区",                    // 区域编码
        regionLongitude: 36.125422,            // 行政区地理经度，修正样式　经度+0.012
        regionLatitude: 120.455682,              // 行政区地理纬度
        resourceAmount: 330,                    // 套数
        url: "崂山区#"                                // 链接
    },
    // 行政区5-黄岛区
    {
        cityCode: "青岛",                        // 城市编码
        regionCode: "黄岛区",                    // 区域编码
        regionLongitude: 35.976332,            // 行政区地理经度
        regionLatitude: 120.194897,              // 行政区地理纬度
        resourceAmount: 340,                    // 套数
        url: "黄岛区#"                                // 链接
    }
]

// 添加单个自定义覆盖物（SearchModel对象）
function addBuilding(ObjGroup){
    for (var i = 0; i < ObjGroup.length; i++) {
        var Arr = new Object();
        Arr = ObjGroup[i];
        var regionCode = Arr.regionCode,     // 行政区
            url = Arr.url;                   // 链接
        var num = Arr.resourceAmount+ "套";   // 拼接下面字符串
        var myCompOverlay = new ComplexCustomOverlay(
            new BMap.Point(Arr.regionLatitude,Arr.regionLongitude),num,regionCode,url
        );
        map.addOverlay(myCompOverlay);
    }
};
// 复杂的自定义覆盖物
function ComplexCustomOverlay(point,num,regionCode,url){
    this._point = point;
    this._num = num;
    this.regionCode = regionCode;               // 城市编码
    this.url = url;                             // 链接
}
ComplexCustomOverlay.prototype = new BMap.Overlay();
ComplexCustomOverlay.prototype.initialize = function(map){
    this._map = map;
    var div = this._div = document.createElement("div");
    div.style.position = "absolute";
    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    div.style.backgroundColor = "#EE5D5B";
    div.style.color = "white";
    // 圆形自定义覆盖物
    div.style.width = "70px";
    div.style.height = "70px";
    div.style.borderRadius = "50%";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.setAttribute("id",this.regionCode);
    // 圆形自定义覆盖物 end
    div.style.padding = "2px";
    div.style.lineHeight = "18px";
    div.style.whiteSpace = "nowrap";
    div.style.MozUserSelect = "none";
    div.style.fontSize = "12px"
    // 保存code
    var regionCode = this.regionCode;   //　区域代码
    var url = this.url;
    div.onclick = function businessCirclePoint(){
        // Ajax上传regionCode，并改变中心点
        console.log(regionCode);
        console.log("跳转链接" + url);
    }
    var ul = this._ul = document.createElement("ul");
    div.appendChild(ul);
    var regionCodeLi = document.createElement("li"),
        numLi = document.createElement("li"),
        regionCodeTextNode=document.createTextNode(this.regionCode),
        numTextNode=document.createTextNode(this._num);
    regionCodeLi.appendChild(regionCodeTextNode);
    numLi.appendChild(numTextNode);
    ul.appendChild(regionCodeLi);
    ul.appendChild(numLi);
    var that = this;
    var arrow = this._arrow = document.createElement("div");
        arrow.style.position = "absolute";
        arrow.style.width = "11px";
        arrow.style.height = "10px";
        arrow.style.top = "22px";
        arrow.style.left = "10px";
        arrow.style.overflow = "hidden";
    div.appendChild(arrow);
    div.onmouseover = function(){
        this.style.backgroundColor = "#6BADCA";
        this.style.cursor = "pointer";
        this.style.zIndex = "9";
        arrow.style.backgroundPosition = "0px -20px";
    }
    div.onmouseout = function(){
        this.style.backgroundColor = "#EE5D5B";
        this.style.zIndex = "1";
        arrow.style.backgroundPosition = "0px 0px";
    }
    map.getPanes().labelPane.appendChild(div);
    return div;
}
ComplexCustomOverlay.prototype.draw = function(){
    var map = this._map;
    var pixel = map.pointToOverlayPixel(this._point);
    this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
    this._div.style.top  = pixel.y - 30 + "px";
}
// 输出自定义覆盖物
addBuilding(SearchModel);
