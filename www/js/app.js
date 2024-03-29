// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services',
        'starter.directives'])

.run(function($ionicPlatform, $rootScope, $ionicLoading) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  // $rootScope.$on('loading:show', function() {
  //   $ionicLoading.show({template: '<i class="icon ion-loading-c"></i>Loading'});
  // });
  //
  // $rootScope.$on('loading:hide', function() {
  //   $ionicLoading.hide();
  // });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  // $httpProvider.interceptors.push(function($rootScope) {
  //   return {
  //     request: function(config) {
  //       $rootScope.$broadcast('loading:show');
  //       return config;
  //     },
  //     response: function(response) {
  //       $rootScope.$broadcast('loading:hide');
  //       return response;
  //     }
  //   };
  // });


  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'MainCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.tutorials', {
      url: "/tutorials",
      views: {
        'menuContent' :{
          templateUrl: "templates/tutorials.html",
          controller: 'TutorialsCtrl'
        }
      }
    })

    .state('app.quizzes', {
      url: "/quizzes",
      views: {
        'menuContent' :{
          templateUrl: "templates/quizzes.html",
          controller: 'QuizzesCtrl'
        }
      }
    })
    .state('app.singleQuiz', {
      url: "/quizzes/:quizId",
      views: {
        'menuContent' :{
          templateUrl: "templates/quiz.html",
          controller: 'QuizCtrl'
        }
      }
    })
    .state('app.singleTutorial', {
      url: "/tutorials/:tutorialId",
      views: {
        'menuContent' :{
          templateUrl: "templates/tutorial.html",
          controller: 'TutorialCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/tutorials');
});

