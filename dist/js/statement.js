/*
 *声明——具体是怎样做的(具体实现)
 */
 // 添加范围自定义覆盖物（1.2级通用）
 function addRangeOverlay(ObjGroup){
     for (var i = 0; i < ObjGroup.length; i++) {
         var arr = new Object();
         arr = ObjGroup[i];
         var code = arr.code,
             url = arr.url,
             text = arr.name + "<br />" + arr.resourceAmount + "套"; // 拼接字符串
         var myCompOverlay = new rangeOverlay(
             new BMap.Point(arr.latitude,arr.longitude),text,code,url
         );
         map.addOverlay(myCompOverlay);
     }
 };
// 行政区＋商圈范围覆盖物——１.2级通用
function rangeOverlay(point,text,code,url){
    this._point = point;
    this._text = text;
    this._code = code;
    this._url = url;
}
rangeOverlay.prototype = new BMap.Overlay();
rangeOverlay.prototype.initialize = function(map){
    this._map = map;
    var div = this._div = document.createElement("div");
    div.setAttribute("id",this._code);
    div.setAttribute("class","range-overlay");
    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    // 保存code
    var code = this._code;   //　区域代码
    var url = this._url;
    div.onclick = function businessCirclePoint(){
        // Ajax上传code，并改变中心点
        console.log(code);
        console.log("跳转链接" + url);
    }
    var span = this._span = document.createElement("span");
    div.appendChild(span);
    div.getElementsByTagName("span")[0].innerHTML =  this._text;
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
    this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
    this._div.style.top  = pixel.y - 30 + "px";
}
