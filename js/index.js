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
var data_index = [
{ "title": "免费应用", "image": "https://cdn.jsdelivr.net/gh/amaow/static@1/images/AppStore.jpg", "rq": "暂未更新", "details": "经常更新一些免费旧版应用和绝版应用", "url": "yy.html" },

 { "title": "手机工具", "image": "https://cdn.jsdelivr.net/gh/amaow/static@1/images/gongju.jpg", "rq": "暂未更新", "details": "暂未更新", "url": "gj.html" },

 { "title": "安装教程", "image": "https://cdn.jsdelivr.net/gh/amaow/static@1/images/jiaocheng.jpg", "rq": "安装教程", "details": "不会登录id、安装闪退等教程点击这里查看", "url": "jc/index.html" },

 { "title": "淘宝店铺", "image": "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/7c/af/e5/7cafe5b4-fad8-0552-531c-2f2f0807da4f/source/100x100bb.jpg", "rq": "联系店主定制旧版应用", "details": "收费定制所有AppStore内上架的旧版应用，下架应用也可询问店主", "url": "tb.html" }, 

{ "title": "关注公众号", "image": "https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/a7/32/8c/a7328c6d-247e-578e-64fb-666ba3990947/source/100x100bb.jpg", "rq": "获取免费应用", "details": "免费下载收费应用或旧版应用，关注公众号", "url": "gzh.html" },





]
function kap_cj(data){
    var txt1 = "";
    for (var i = 0; i < data.length; i++) {
        co_sj()
        var arr = data[i]
        txt1 = txt1 + `<div class="col-md-4" onclick="window.open('${arr.url}')">
        <div class="kap s${color}">
            <img src="{arr.image}">
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
$("#index").html(kap_cj(data_index));

