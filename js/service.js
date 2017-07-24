var app= angular.module('redditPull');

app.factory('redditFactory', function($http) {

  var articles = [];

  return {
    setJSON: setJSON,
    getJSON: getJSON
  }

  function setJSON(reddit) {
    $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/' + reddit + '.json'
    }).then(function successfulCallback(response) {
      console.log(response);
      articles = response.data.data.children;
    });
  }

  function getJSON() {
    return articles;
  }

});
