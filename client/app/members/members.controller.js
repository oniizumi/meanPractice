angular.module('meanSampleApp')
  .controller('MembersController', ['$scope', '$http', '$stateParams', '$uibModal', function($scope, $http, $stateParams, $uibModal) {

        $scope.lists = [
            {name: 'list1', score: 1},
            {name: 'list2', score: 2},
            {name: 'list3', score: 3},
        ];

        $scope.modalTitle = 'なひー';

        $scope.showModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'app/modal/modal.registerList.html',
                controller : 'ModalController',
                scope: $scope
            });

            modalInstance.result.then(
                function() {
                    console.log('hello');
                }
            );
        };

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
