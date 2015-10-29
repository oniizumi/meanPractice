angular.module('meanSampleApp')
  .controller('StoresController', ['$scope', '$http', '$uibModal', function($scope, $http, $uibModal) {

    $http({
      method: 'GET',
      url: '/getStores'
    })
    .success(function(data) {
      $scope.stores = data;
    });

    // アラート表示
    $scope.alerts = [];

     $scope.closeAlert = function(index) {
       $scope.alerts.splice(index, 1);
     };


    $scope.showModalRegister = function() {
      $scope.modalTitle = '新規店舗登録';
      $scope.btnClass = 'info';
      $scope.modalRegisterFlg = true;
      $scope.modalUpdateFlg = false;

      $scope.selectRow = '';
      $scope.storeName = '';
      $scope.storeTel  = '';
      $scope.storeType = '';
      $scope.storeSeen = '';
      $scope.storeRate = '';

      $scope.modalInstance = $uibModal.open({
          controller: 'ModalController',
          templateUrl: 'app/modal/modal.registerStore.html',
          scope: $scope,
          backdrop: 'static'
      });
    };

    $scope.showModalDelete = function($index) {
        $scope.modalInstance = $uibModal.open({
            controller: 'ModalController',
            templateUrl: 'app/modal/modal.showDelete.html',
            scope: $scope,
            backdrop: 'static'
        });
        $scope.selectRowNo = $index;
    };

    $scope.showModalEdit = function($index) {
        $scope.modalTitle = '店舗情報更新';
        $scope.btnClass = 'success';
        $scope.modalUpdateFlg = true;
        $scope.modalRegisterFlg = false;

        $scope.selectRow = $scope.stores[$index];
        $scope.storeName = $scope.selectRow.storeName;
        $scope.storeTel  = $scope.selectRow.storeTel;
        $scope.storeType  = $scope.selectRow.storeType;
        $scope.storeSeen  = $scope.selectRow.storeSeen;
        $scope.storeRate  = $scope.selectRow.storeRate;

        $scope.modalInstance = $uibModal.open({
            controller: 'ModalController',
            templateUrl: 'app/modal/modal.registerStore.html',
            scope: $scope,
            backdrop: 'static'
        });
        $scope.selectRowNo = $index;
    };



  }]);
