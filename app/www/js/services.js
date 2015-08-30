angular.module('starter.services', [])
  .factory('News', function() {
    var news = [{
      id: 0,
      title: '新生户口迁移详解',
      source: '来源：传媒精英团',
      face: 'img/n1.jpg'
    }, {
      id: 1,
      title: '你一月要花多少钱',
      source: '来源：传媒精英团',
      face: 'img/n1.jpg'
    }, {
      id: 2,
      title: '怎么和室友更好地相处',
      source: '来源：传媒精英团',
      face: 'img/n1.jpg'
    }];

    return {
      all: function() {
        return news;
      },
      get: function(newsId) {
        for (var i = 0; i < news.length; i++) {
          if (news[i].id === parseInt(newsId)) {
            return news[i];
          }
        }
        return null;
      }
    };
  });
