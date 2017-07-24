var app= angular.module('redditPull');

app.directive('redditPost', function() {

  return {
    replace: false,
    restrict: 'E',
    templateUrl: 'reddit.html'
  }

})
