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

.controller('TutorialsCtrl', function($scope, Materials) {
  Materials.success(function (data) {
    $scope.tutorials = data.tutorials;
  });
})

.controller('TutorialCtrl', function($scope, $stateParams, Materials) {
  
  Materials.success(function (data) {
    $scope.tutorial = data.tutorials[$stateParams.tutorialId-1];
  });
  
})


.controller('QuizzesCtrl', function ($scope, Materials) {
  Materials.success(function(data) {
    $scope.quizzes = data.quizzes;
  });
})


.controller('QuizCtrl', function($scope, $stateParams, Materials) {

  $scope.results = [];
  Materials.success(function(data) {
    var quiz = data.quizzes[$stateParams.quizId-1];
    $scope.problems = quiz.problems;
    createResult();
  });

  var createResult = function() {
    for (var i=0; i<$scope.problems.length; i++) {
      
      $scope.results.push({
        _id: $scope.problems[i]._id,
        answer: $scope.problems[i].answer,
        userChoice: null,
        result: null
      });
    }
  };


  $checkUserChoice = function(problemId, userChoice) {
    var problem = $scope.results[problemId-1];
    problem.userChoice = userChoice;

    if (userChoice === problem.answer) {
      problem.result = 'Correct'; 
    }
    else {
      problem.result = 'Incorrect';
    }
  };

});
