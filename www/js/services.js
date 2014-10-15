'use strict;'

angular.module('starter.services', [])

.factory('Materials', function ($http) {

  return  $http.get('../helloMath.json');
});

