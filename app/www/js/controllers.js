angular.module('starter.controllers', [])

  .controller('TodayCtrl', function($scope) {

  })

  .controller('SemesterCtrl', function($scope, News) {
    $scope.news = News.all();
  })
  .controller('NewsCtrl', function($scope,$stateParams, News) {
    $scope.news = News.get($stateParams.newsId);
  })

  .controller('GradeCtrl', function($scope) {
  })

