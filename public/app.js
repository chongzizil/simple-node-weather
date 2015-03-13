/**
 * Created by youlongli on 3/13/15.
 */

var app = angular.module('WeatherApp', ['ngMaterial', 'ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'templates/weathers.html',
        controller: 'WeatherCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
});