//アプリケーションモジュールの作成
var app = angular.module('meanSampleApp', [
  'ui.router',
  'ngMessages',
  'googlechart',
  'ui.bootstrap',
  'ngAnimate',
  'ngFileUpload'
]);

//クライアント側ルーティング処理
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        //Loginページ
        .state('login', {
            url: '/login',
            views: {
                '': {
                    controller: 'LoginController',
                    templateUrl: 'app/login/login.html'
                }
            }
        })
        //SignUpページ
        .state('signUp', {
            url: '/signUp',
            views: {
                '' : {
                    controller: 'SignUpController',
                    templateUrl: 'app/signUp/signUp.html'
                }
            }
        })
        //Membersページ
        .state('members', {
          url: '/members',
          views: {
              '' : {
                  controller: 'MembersController',
                  templateUrl: 'app/members/members.html'
              }
          }
        })
        .state('stores', {
          url: '/stores',
          views: {
              '': {
                  controller: 'StoresController',
                  templateUrl: 'app/stores/stores.html'
              }
          }
        })
        .state('member', {
            url: '/member/{id:int}',
            views: {
                '': {
                    controller: 'MembersController',
                    templateUrl: 'app/members/members.html'
                }
            }
        })
        .state('todo', {
            url: '/todo',
            views: {
                '': {
                    controller: 'TodoController',
                    templateUrl: 'app/todo/todo.html'
                }
            }
        });
    //その他URLアクセス時ログインページに遷移
    $urlRouterProvider.otherwise('/members');
}]);
