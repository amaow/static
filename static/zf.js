// lei=1   规则
// lei=2   脚本
// lei=3   应用
// lei=4   其他
var color = 107;
function co_sj() {
    if (color == 112) {
        color = 101;
    } else {
        color++;
    }
}
var data_jc = [
{ "title": "微信支付", "image": "https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/a7/32/8c/a7328c6d-247e-578e-64fb-666ba3990947/source/100x100bb.jpg", "rq": " ",  "details": "与店主确定好价格在支付", "url": "../zf/vx.html" },

 { "title": "支付宝支付", "image": "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/e6/fe/62/e6fe62f2-b322-feae-5a3a-1221de7a3ad9/source/100x100bb.jpg", "rq": "",  "details": "与店主确定好价格在支付", "url": "../zf/zfb.html" },

 


 { "title": "淘宝店铺", "image": "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/7c/af/e5/7cafe5b4-fad8-0552-531c-2f2f0807da4f/source/100x100bb.jpg", "rq": "联系店主定制旧版应用", "details": "收费定制所有AppStore内上架的旧版应用，下架应用也可询问店主", "url": "../tb.html" }, 





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
$("#jc").html(kap_cj(data_jc));

