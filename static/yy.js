// lei=1   规则
// lei=2   脚本
// lei=3   应用
// lei=4   其他
var color = 104;
function co_sj() {
    if (color == 112) {
        color = 101;
    } else {
        color++;
    }
}
var data_yy = [
{ "title": "免费应用", "image": "https://img.alicdn.com/imgextra/i4/2206335589929/O1CN01TzVNae2NDXGax1H4j_!!2206335589929.jpg", "rq": "暂未更新", "details": "经常更新一些免费旧版应用和绝版应用", "url": "yy.html" },






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
$("#yy").html(kap_cj(data_yy));

