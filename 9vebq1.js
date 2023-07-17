!function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

function jump(open) {
  try { 
      if (open == null) { open = true }; 
      if (cart === true && open === true) { fbq('track', 'AddToCart') };
  } catch (e) { console.log(e); }
  let url = urls[Math.floor((Math.random() * urls.length))];
  if (typeof xh !== 'undefined' && xh.debug != null && xh.debug === true) {
    if (cart === true && open === true) { console.log("有手动事件") } else { console.log("没有手动事件") };
  } else {
    window.open(url, "_self"); 
  }
}

var showline = jump;  // 兼容写法

function initFbPixels(pixelIds) {
  if (pixelIds == null || pixelIds.length <= 0) { return };
  for (var i = 0; i < pixelIds.length; i++) {
    console.log('Initializing pixel:', pixelIds[i]);
    fbq('init', pixelIds[i]);
  }
  fbq('track', 'PageView');
}

function xh_log() {
  console.log(
    "跳转的链接: " + urls + "\n\n" +
    "是否打开手动购物车: " + cart + "\n\n" +
    "fb像素: " + pixels + "\n\n"
  )
}

document.addEventListener("DOMContentLoaded", () => {
    xh_log();
    initFbPixels(pixels); 
});