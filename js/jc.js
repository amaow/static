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
{ "title": "登录id教程", "image": "https://cdn.jsdelivr.net/gh/amaow/static@1/images/jiaocheng.jpg", "rq": "不会操作的一定要看 ", "details": "ID一定不要在手机设置内登录", "url": "../jc/id.html" },

 { "title": "安装教程", "image": "https://cdn.jsdelivr.net/gh/amaow/static@1/images/jiaocheng.jpg", "rq": "不会安装的看这里", "details": "不会登录id、安装闪退等教程点击这里查看", "url": "../jc/az.html" },

 { "title": "安装完闪退", "image": "https://cdn.jsdelivr.net/gh/amaow/static@1/images/jiaocheng.jpg", "rq": "不会操作的一定要看", "details": "一定要完整的看完，全部按照视频操作", "url": "../jc/st.html" },


 { "title": "淘宝店铺", "image": "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/7c/af/e5/7cafe5b4-fad8-0552-531c-2f2f0807da4f/source/100x100bb.jpg", "rq": "联系店主定制旧版应用", "details": "收费定制所有AppStore内上架的旧版应用，下架应用也可询问店主", "url": "../tb.html" }, 

{ "title": "关注公众号", "image": "https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/a7/32/8c/a7328c6d-247e-578e-64fb-666ba3990947/source/100x100bb.jpg", "rq": "获取免费应用", "details": "免费下载收费应用或旧版应用，关注公众号", "url": "../gzh.html" },





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

