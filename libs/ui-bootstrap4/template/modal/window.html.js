angular.module("uib/template/modal/window.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/modal/window.html",
    "<div class=\"modal-dialog {{size ? 'modal-' + size : ''}} {{scrollable ? 'modal-dialog-scrollable': ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n" +
    "");
}]);
