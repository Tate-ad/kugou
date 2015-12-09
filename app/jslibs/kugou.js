var app = angular.module('kugou', ['ngRoute', 'kgService']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/searchret', {
      template: '<p> hello</p>'
    })
}]);

app.controller('TestCtroller', ['$scope', function (scope) {
  scope.name = 'hcl';
}]);
