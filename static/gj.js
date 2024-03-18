// lei=1   规则
// lei=2   脚本
// lei=3   应用
// lei=4   其他
var color = 105;
function co_sj() {
    if (color == 112) {
        color = 101;
    } else {
        color++;
    }
}
var data_gj = [
    { "title": "屏蔽iOS更新", "image": "https://appimg.dbankcdn.com/application/icon144/e284c84ea519461981c9fac79b6ca828.webp", "rq": "30分钟自动更新", "details": "关闭设备自动更新下载", "url": "https://d-updater.i4.cn/web/mobileconfig/iOS17.mobileconfig" },

    { "title": "体验iOS测试版", "image": "https://appimg.dbankcdn.com/application/icon144/d93db5087458438a8bbd403cecb2c461.webp", "rq": "30分钟自动更新", "details": "在线更新到iOS最新测试版", "url": "http://d.updater.i4.cn/web/mobileconfig/iOS_16_Beta_Profile.mobileconfig" },






]
function kap_cj(data){
    var txt1 = "";
    for (var i = 0; i < data.length; i++) {
        co_sj()
        var arr = data[i]
        txt1 = txt1 + `<div class="col-md-4" onclick="window.open('${arr.url}')">
        <div class="kap s${color}">
            <img src="${arr.image}">
            <div class="title">
                <h4>${arr.title}</h4>
                <p class="ri">${arr.rq}</p>
            </div>
            <div class="sm">
                <p>${arr.details}</p>
            </div>
        </div>
        </div>`
    }
    return txt1;
}
$("#gj").html(kap_cj(data_gj));

