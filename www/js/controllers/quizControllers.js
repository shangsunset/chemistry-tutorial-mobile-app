angular.module('starter.controllers')


.controller('QuizzesCtrl', function ($scope, quizFactory) {
  quizFactory.success(function(data) {
    $scope.quizzes = data;
  });
})

.controller('QuizCtrl', function($scope, $stateParams, $filter, $ionicPopup, quizFactory) {

  var filter = $filter('filter');

  $scope.problemInfo = [];
  quizFactory.success(function(data) {
    var quiz = data[$stateParams.quizId-1];
    $scope.problems = quiz.problems;
    createResult();
  });

  var createResult = function() {
    for (var i=0; i<$scope.problems.length; i++) {
      
      $scope.problemInfo.push({
        _id: $scope.problems[i]._id,
        answer: $scope.problems[i].answer,
        userChoice: null,
        result: null
      });
    }
  };


  $scope.checkUserChoice = function(problemId, userChoice) {
    
    $scope.problemInfo[problemId-1].userChoice = userChoice;

    if ($scope.problemInfo[problemId-1].answer === userChoice) {
      $scope.problemInfo[problemId-1].result = true;

    }
    else {
      $scope.problemInfo[problemId-1].result = false;
    }

  };

  $scope.showMeResult = function () {
    var alertPopup = $ionicPopup.show({
      title: 'Quiz Result',
      scope: $scope,
      buttons: [
          {text: 'OK',
          type: ' button-positive'}],
      template: '<div ng-repeat="each in problemInfo">' +
                  '<h4 ng-if="each.result">' +
                    'Question {{each._id}}: <i class="icon ion-checkmark"></i></h4>' +
                  '<h4 ng-if="each.result === false">' +
                    'Question {{each._id}}: <i class="icon ion-close"></i></h4>' +
                '</div>'
    });
    alertPopup.then(function(res) {
      for (var i = 0; i < $scope.problems.length; i ++) {
        $scope.problems[i].userChoice = null;
      
      }
    });
  
    };

  $scope.getFilteredProblem = function(problemId) {
    return filter($scope.problems, {_id: problemId});
  };
  

});
