var app= angular.module('redditPull');

app.controller('inputCtrl', function($scope, redditFactory) {

  $scope.searchReddit = function(reddit) {
    redditFactory.setJSON(reddit);
  }

});
