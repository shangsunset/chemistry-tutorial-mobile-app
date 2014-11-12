angular.module('starter.directives', [])

.directive('quizTruefalse', function() {
  return {
    scope: {
      problemId: "@"
      
    },
    restrict:    'E',
    templateUrl: '/templates/partials/quiz-true-false.html'
  };
});
