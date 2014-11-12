angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TutorialsCtrl', function($scope, tutorialFactory) {
  tutorialFactory.success(function (data) {
    $scope.tutorials = data;
  });
})

.controller('TutorialCtrl', function($scope, $stateParams, tutorialFactory) {
  
  tutorialFactory.success(function (data) {
    $scope.tutorial = data[$stateParams.tutorialId-1];
  });
  
})


.controller('QuizzesCtrl', function ($scope, quizFactory) {
  quizFactory.success(function(data) {
    $scope.quizzes = data;
  });
})


.controller('QuizCtrl', function($scope, $stateParams, quizFactory) {

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
    var problem = $scope.problemInfo[problemId-1];
    problem.userChoice = userChoice;

    if (userChoice === problem.answer) {
      problem.result = 'Correct'; 
    }
    else {
      problem.result = 'Incorrect';
    }
  };


  $scope.isQuizCompleted = function() {
    for (var i=0; i<$scope.problemInfo.length; i++) {
      if ($scope.problemInfo[i].userChoice === null) {
        return false;
      }
      
    }
    return true;
  };
})


.controller('AdvancedQuizCtrl', function($scope, $stateParams, $filter,  quizFactory) {

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

  $scope.getFilteredProblem = function(problemId) {
    return filter($scope.problems, {_id: problemId});
  };
  

});
