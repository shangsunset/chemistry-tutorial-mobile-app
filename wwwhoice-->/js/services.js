angular.module('starter.services', [])

.factory('quizFactory', function ($http) {

  return  $http.get('../data/quizzes.json');
})

.factory('tutorialFactory', function($http) {
  return $http.get('../data/tutorials.json');
});
