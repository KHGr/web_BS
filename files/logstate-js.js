




/*
     FILE ARCHIVED ON 19:18:31 Aug 13, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:18:32 Aug 13, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
window.diy = window.diy || {};
window.diy.context = window.diy.context || {};
window.diy.context.type = 'web';
window.diy.context.isLoggedIn = false;
window.diy.context.isPublicView = /publicview=1/.test(location.search);
window.diy.context.isMobilePreviewView = /mobilepreview=1/.test(location.search);

(function () {
    var loadResourcesInterval = setInterval(function () {
        if (typeof jQuery === 'undefined') {
            return;
        } else {
            clearInterval(loadResourcesInterval);
            if (location.search.indexOf('logincallout=1') != -1) {
                jQuery("<link/>", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: jimdoData.cdnUrl + "s/css/web/logincallout.css?1597346311"
                }).appendTo("head");
                jQuery.getScript(webPath + 'cc/logincallout.php');
            }
        }
    }, 100);
}());

