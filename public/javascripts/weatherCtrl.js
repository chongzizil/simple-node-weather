/**
 * Created by youlongli on 3/13/15.
 */

app.controller('WeatherCtrl', ['$scope', '$http', '$mdSidenav', function ($scope, $http, $mdSidenav) {
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.getWeather = function () {
    $http({method: 'GET', url: '/weathers', params: {city: $scope.city}}).
        success(function (data, status, headers, config) {
          $scope.result = data;
        }).
        error(function (data, status, headers, config) {
          console.error("Something is wrong...");
        });
  }
}]);