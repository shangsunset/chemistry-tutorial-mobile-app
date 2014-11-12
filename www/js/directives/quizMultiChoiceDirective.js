angular.module('starter.directives')

.directive('quizMultichoice', function() {
  return {
    scope: {
      problemId: "@"
    },
    restrict: "E",
    templateUrl: "/templates/partials/quiz-multi-choice.html"
  };
});
