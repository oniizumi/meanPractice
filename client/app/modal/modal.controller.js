angular.module('meanSampleApp')
    .controller('ModalController', ['$scope', '$http', '$uibModalInstance', '$timeout', function($scope, $http, $uibModalInstance, $timeout) {
        $scope.modalRegister = function() {
            $http({
                url: '/registerStore',
                method: 'POST',
                data: {
                    storeName: $scope.storeName,
                    storeTel : $scope.storeTel,
                    storeType: $scope.storeType,
                    storeSeen: $scope.storeSeen,
                    storeRate: $scope.storeRate
                }
            })
            .success(function(data) {
                $scope.modalInstance.dismiss();
                $scope.stores.push(data);
                $scope.alerts.push({
                    type: 'info',
                    msg: '新規データを登録しました'
                });
            });
        };

        $scope.modalOkDelete = function() {
            $http({
                method: 'POST',
                url   : '/deleteStore',
                data  : {
                    storeName : $scope.stores[$scope.selectRowNo].storeName
                }
            })
            .success(function(data) {
                $scope.modalInstance.dismiss();
                $scope.stores.splice($scope.selectRowNo, 1);
                $scope.alerts.push({
                    type: 'danger',
                    msg: '一件のデータを削除しました'
                });
            });
        };

        $scope.modalUpdate = function() {

            $http({
                method: 'POST',
                url: '/updateStore',
                data: {
                    storeName: $scope.storeName,
                    storeTel:  $scope.storeTel,
                    storeType: $scope.storeType,
                    storeSeen: $scope.storeSeen,
                    storeRate: $scope.storeRate
                }
            })
            .success(function(data) {

                $scope.modalInstance.dismiss();
                $scope.stores[$scope.selectRowNo] = data;
                $scope.alerts.push({
                    type: 'success',
                    msg: '更新が完了しました'
                });

            });
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss();
        };



    }]);
