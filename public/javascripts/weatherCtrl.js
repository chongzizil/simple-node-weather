/**
 * Created by youlongli on 3/13/15.
 */

app.controller('WeatherCtrl', ['$scope', '$http', '$mdSidenav', '$mdToast', function ($scope, $http, $mdSidenav, $mdToast) {
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  var toast = function() {
    $mdToast.show({
      controller: 'ToastCtrl',
      templateUrl: '../templates/input-error-toast.html',
      hideDelay: 6000,
      position: "right top"
    });
  };

  $scope.getWeather = function () {
    $http({method: 'GET', url: '/weathers', params: {city: $scope.city}}).
        success(function (data, status, headers, config) {
          $scope.result = data;
        }).
        error(function (data, status, headers, config) {
          toast();
        });
  }
}]).controller('ToastCtrl', function($scope, $mdToast) {
  $scope.closeToast = function() {
    $mdToast.hide();
  };
});