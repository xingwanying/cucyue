angular.module('starter.controllers', [])

  .controller('TodayCtrl', function($scope) {

  })

  .controller('SemesterCtrl', function($scope, News,$http) {
    $http.get('http://www.cucyue.com/errortest/php/newsdata.php').   //$http.get(url).success().error();
      then(function (rep) {                   //和success(function(response)){}中的response不同
        // this callback will be called asynchronouslywhen the response is available
        News.setNews(rep.data);
        $scope.news = rep.data;
        //成功,加载线上资源
        console.log("成功");
        //createRecommend(response.data.selected);

      }, function (error) {
        // called asynchronously if an error occursor server returns response with an error status.
        console.log(JSON.stringify(error));
      });
  })
  .controller('NewsCtrl', function($scope,$stateParams, News) {
   // $scope.news = News.get($stateParams.newsId);
    var data = News.getNews();
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === $stateParams.newsId) {
        $scope.news = data[i];
        //alert(JSON.stringify(data[i]))
      }
    }
  })

  .controller('GradeCtrl', function($scope) {
  })

