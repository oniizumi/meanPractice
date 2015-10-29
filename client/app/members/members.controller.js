angular.module('meanSampleApp')
  .controller('MembersController', ['$scope', '$http', '$stateParams', '$uibModal', '$timeout', 'Upload', function($scope, $http, $stateParams, $uibModal, $timeout, Upload) {

        $scope.alerts = [];

        $scope.imageName = 'lion.jpg';

        $scope.clickLionMan = function() {
            $scope.imageName = 'lion.jpg';
        };

        $scope.clickLionWoman = function() {
            $scope.imageName = 'Lion_Gir.jpg';
        };

        $scope.showModalUpload = function() {
            $uibModal.open({
                controller: 'ModalController',
                templateUrl: 'app/modal/modal.fileUpload.html',
                scope: $scope,
            });
        };


        //メール送信
        $scope.sendMail = function() {
            $http({
                url: '/sendMail',
                method :'POST',
                data: {
                    toMail: $scope.toMail,
                    fromMail: $scope.fromMail,
                    subjectMail: $scope.subjectMail,
                    contentsMail: $scope.contentsMail
                }
            })
            .success(function(data) {
                $scope.alerts.push({
                    type: 'info',
                    msg: data
                });

                $timeout(function() {
                    angular.element(document.getElementsByClassName('alertMsg')).fadeOut('slow', function() {
                        $scope.alerts.splice(0, 1);
                    });
                },3000);
            });
        };

        //GoogleChart表示
        $scope.data = {
              'type': 'BarChart',
              'data': {
                    //列の情報定義
                    'cols':[
                        {
                            id: 'month',
                            label: '月',
                            type : 'string'
                        },
                        {
                            id: 'fujimoto',
                            label: '藤本',
                            type: 'number'
                        },
                        {
                            id: 'kanaeda',
                            label: '金枝',
                            type: 'number'
                        },
                        {
                            id: 'horio',
                            label: '堀尾',
                            type: 'number'
                        },
                        {
                            id: 'hara',
                            label: '原',
                            type: 'number'
                        }
                    ],
                    'rows':[
                        {
                            'c':[
                                {
                                    'v':4,
                                    'f':'4月'
                                },
                                {
                                    'v':20,
                                    'f':'200万円'
                                },
                                {
                                    'v':5,
                                    'f':'50万円'
                                },
                                {
                                    'v':2,
                                    'f':'20万円'
                                },
                                {
                                    'v':1,
                                    'f':'10万円'
                                },
                            ]
                        },
                        {
                            'c':[
                                {
                                    'v':5,
                                    'f':'5月'
                                },
                                {
                                    'v':10,
                                    'f':'100万円'
                                },
                                {
                                    'v':5,
                                    'f':'50万円'
                                },
                                {
                                    'v':6,
                                    'f':'60万円'
                                },
                                {
                                    'v':1,
                                    'f':'10万円'
                                },
                            ]
                        },
                        {
                            'c':[
                                {
                                    'v':6,
                                    'f':'6月'
                                },
                                {
                                    'v':5,
                                    'f':'50万円'
                                },
                                {
                                    'v':10,
                                    'f':'100万円'
                                },
                                {
                                    'v':10,
                                    'f':'100万円'
                                },
                                {
                                    'v':3,
                                    'f':'30万円'
                                },
                            ]
                        }
                    ]},
              'options': {
                  'title': '売り上げランキング',
                  'isStacked': 'true',
                  'vAxis': {
                      'title': '売上月'
                  },
                  'hAxis': {
                      'title': '売上数',
                      'gridlines': {
                          'count': 10
                      }
                  }
              }
          };
  }]);
