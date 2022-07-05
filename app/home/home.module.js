angular
  .module('myApp.home', [
    'ngRoute'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: "home/home.template.html"
    })
  }]);