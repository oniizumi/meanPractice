
angular.module('meanSampleApp')
    .run(['$window', function($window) {

            //スマホメニューボタン開閉処理
            angular.element(document.getElementsByClassName('navList'))
                .on('click', function() {
                    var toggleFlg = angular.element(document.getElementById("xsBtn")).attr('aria-expanded');
                    if(toggleFlg) {
                        angular.element(document.getElementById('xsBtn')).click();
                    }
            });
    }]);
