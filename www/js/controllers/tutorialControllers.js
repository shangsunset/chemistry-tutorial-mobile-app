angular.module('starter.controllers')

.controller('TutorialsCtrl', function($scope, tutorialFactory) {
  tutorialFactory.success(function (data) {
    $scope.tutorials = data;
  });
})

.controller('TutorialCtrl', function($http, $scope, $stateParams, $ionicLoading, tutorialFactory) {
  

  tutorialFactory.success(function (data) {
    $scope.tutorial = data[$stateParams.tutorialId-1];
  });

});
