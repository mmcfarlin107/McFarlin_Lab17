var app= angular.module('redditPull');

app.controller('outputCtrl', function($scope, redditFactory) {

  $scope.articles = redditFactory.getJSON();

});
