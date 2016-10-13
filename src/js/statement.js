/*
 *声明——具体是怎样做的(具体实现)
 */
// 页面打开时执行的任务,输出list列表内容
function reloadList() {
    var allListId = [
        // 检索标题,列表ulID位置,列表pID输出位置
        {title: "公交",ulId: "List-traffic",pId: "Num-traffic"},
        {title: "快餐",ulId: "List-snack",pId: "Num-snack"},
        {title: "餐厅",ulId: "List-restaurant",pId: "Num-restaurant"},
        {title: "银行",ulId: "List-bank",pId: "Num-bank"},
        {title: "酒店",ulId: "List-hotel",pId: "Num-hotel"}
    ];
    for (var i = 0; i < 5; i++) {
        // 输出list内容(只输出 不打点)
        outputListContent(allListId[i].title,allListId[i].ulId,allListId[i].pId);
    }
    function outputListContent(listTile,listUlId,listP){
        var options = {
            onSearchComplete: function(results){
                // 判断状态是否正确
                if (local.getStatus() == BMAP_STATUS_SUCCESS){
                    var length = 4;
                    if ( results.getNumPois() < 4) {
                        length = results.getNumPois();
                    }
    				for (var i = 0; i < length; i ++){
                        var listUl = document.getElementById(listUlId); // 节点文字添加
                        var li = document.createElement("li");
                        var text = results.getPoi(i).title;
                        var textnode = document.createTextNode(text);
                        var liLng = results.getPoi(i).point.lng;    // 添加经纬度值
                        var liLat = results.getPoi(i).point.lat;
                        var liAddress = results.getPoi(i).address;  // 添加地址内容
                        li.setAttribute("data-title",text);
                        // li.setAttribute("onmouseenter","liOnmouseenter(" + liLng + "," + liLat + ")");
                        li.setAttribute("onclick","liOnclick("+liLng+","+liLat+","+"\""+text+"\""+","+"\""+liAddress+"\""+")");
						// li.setAttribute("onmouseleave","liOnmouseleave()");
                        li.appendChild(textnode);
                        listUl.appendChild(li);
    				}
                    var PNum = document.getElementById(listP);      // 检索数值
                    var num = results.getCurrentNumPois();   // getNumPois()全部结果数量
                    var numnode = document.createTextNode(num);
                    PNum.appendChild(numnode);
                    //listUl.setAttribute("onmouseout","liOnmouseout()");     // listUl添加鼠标移出事件
    			}
            }
        };
        var local = new BMap.LocalSearch(mPoint,options);
        local.searchNearby(listTile, mPoint,1000);
    }
}
