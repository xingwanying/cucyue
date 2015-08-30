// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'tabs.html'
  })
  .state('tab.today', {
    url: '/today',
    views: {
      'tab-dash': {
        templateUrl: 'today.html',
        controller: 'TodayCtrl'
      }
    }
  })

  .state('tab.semester', {
      url: '/semester',
      views: {
        'tab-chats': {
          templateUrl: 'semester.html',
          controller: 'SemesterCtrl'
        }
      }
    })
    .state('tab.news', {
      url: '/semester/:newsId',
      views: {
        'tab-chats': {
          templateUrl: 'news.html',
          controller:'NewsCtrl'
        }
      }
    })

  .state('tab.grade', {
    url: '/grade',
    views: {
      'tab-account': {
        templateUrl: 'grade.html',
        controller: 'GradeCtrl'
      }
    }
  })
    .state('tab.grade-details', {
      url: '/grade/grade-details',
      views: {
        'tab-account': {
          templateUrl: 'grade-details.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/today');

});
