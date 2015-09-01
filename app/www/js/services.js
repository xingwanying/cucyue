angular.module('starter.services', [])
  .factory('News', function() {
    var news;
    return {

      setNews: function(result) {news = result;},
      getNews: function(){return news},

    };
  });
