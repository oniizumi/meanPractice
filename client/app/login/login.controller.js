angular.module('meanSampleApp')
    .controller('LoginController', ['$scope', '$http', function($scope, $http) {

          $scope.login = function() {

            $http({
              url: '/login',
              method: 'POST',
              data: {
                email: $scope.email,
                password: $scope.password
              }
            });
          };
    }]);
