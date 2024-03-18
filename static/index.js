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
{ "title": "ID共享", "image": "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/d8/82/1d/d8821d79-d790-1699-68be-971b3cdbc8bc/AppIcon-0-0-1x_U007emarketing-0-10-0-0-85-220.png/100x100bb.jpg", "rq": "30分钟自动更新", "details": "⭕️ 使用免费共享苹果账号必须从App Store 登录，千万不要登录「iCloud」，否则可能导致锁机或者隐私泄漏！", "url": "id.html" },

 { "title": "巨魔专区", "image": "https://cdn-app-icon.pgyer.com/2/2/5/f/e/225fe55b7826d055de02b5fb9e166468?x-oss-process=image/resize,m_lfit,h_120,w_120/format,jpg", "rq": "TrollStore专区", "details": "苹果手机必装应用，支持ios14到ios17", "url": "jm.html" },

 { "title": "ipa仓库", "image": "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/25/f7/fb/25f7fb4e-f365-3fc6-faed-5aca2925a679/AppIcon-1x_U007emarketing-0-7-0-85-220.png/100x100bb.jpg", "rq": "官方纯净砸壳", "details": "可用巨魔安装，也可以下载后自签安装", "url": "ipa.html" }, 

 { "title": "实用工具", "image": "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/f0/35/e8/f035e8fc-5cf5-e062-9b20-6c53a4e73854/AppIcon-Release-0-1x_U007emarketing-0-0-0-7-0-0-0-85-220-0.png/100x100bb.jpg", "rq": "各类实用教程，工具", "details": "免费下载收费应用或旧版应用，关注公众号", "url": "gj.html" },

 { "title": "安卓软件", "image": "https://cdn.freebiesupply.com/logos/large/2x/android-logo-png-transparent.png", "rq": "安卓破解版软件", "details": "免费下载收费应用或旧版应用，关注公众号", "url": "gzh.html" },

{ "title": "关注公众号", "image": "https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/a7/32/8c/a7328c6d-247e-578e-64fb-666ba3990947/source/100x100bb.jpg", "rq": "获取免费应用", "details": "免费下载收费应用或旧版应用，关注公众号", "url": "gzh.html" },





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
$("#index").html(kap_cj(data_index));

