/**
 * Created by youlongli on 3/13/15.
 */

app.controller('WeatherCtrl', ['$scope', '$http', '$mdSidenav', '$mdToast', function ($scope, $http, $mdSidenav, $mdToast) {
  // Based on https://gist.github.com/aloncarmel/8575527#file-weathericon
  $scope.getWeatherClass = function(condid) {
    condid = parseInt(condid);
    switch(condid) {
      case 0: var icon  = 'wi wi-tornado';
        break;
      case 1: var icon  = 'wi wi-storm-showers';
        break;
      case 2: var icon  = 'wi wi-tornado';
        break;
      case 3: var icon  = 'wi wi-thunderstorm';
        break;
      case 4: var icon  = 'wi wi-thunderstorm';
        break;
      case 5: var icon  = 'wi wi-snow';
        break;
      case 6: var icon  = 'wi wi-rain-mix';
        break;
      case 7: var icon  = 'wi wi-rain-mix';
        break;
      case 8: var icon  = 'wi wi-sprinkle';
        break;
      case 9: var icon  = 'wi wi-sprinkle';
        break;
      case 10: var icon  = 'wi wi-hail';
        break;
      case 11: var icon  = 'wi wi-showers';
        break;
      case 12: var icon  = 'wi wi-showers';
        break;
      case 13: var icon  = 'wi wi-snow';
        break;
      case 14: var icon  = 'wi wi-storm-showers';
        break;
      case 15: var icon  = 'wi wi-snow';
        break;
      case 16: var icon  = 'wi wi-snow';
        break;
      case 17: var icon  = 'wi wi-hail';
        break;
      case 18: var icon  = 'wi wi-hail';
        break;
      case 19: var icon  = 'wi wi-cloudy-gusts';
        break;
      case 20: var icon  = 'wi wi-fog';
        break;
      case 21: var icon  = 'wi wi-fog';
        break;
      case 22: var icon  = 'wi wi-fog';
        break;
      case 23: var icon  = 'wi wi-cloudy-gusts';
        break;
      case 24: var icon  = 'wi wi-cloudy-windy';
        break;
      case 25: var icon  = 'wi wi-thermometer';
        break;
      case 26: var icon  = 'wi wi-cloudy';
        break;
      case 27: var icon  = 'wi wi-night-cloudy';
        break;
      case 28: var icon  = 'wi wi-day-cloudy';
        break;
      case 29: var icon  = 'wi wi-night-cloudy';
        break;
      case 30: var icon  = 'wi wi-day-cloudy';
        break;
      case 31: var icon  = 'wi wi-night-clear';
        break;
      case 32: var icon  = 'wi wi-day-sunny';
        break;
      case 33: var icon  = 'wi wi-night-clear';
        break;
      case 34: var icon  = 'wi wi-day-sunny-overcast';
        break;
      case 35: var icon  = 'wi wi-hail';
        break;
      case 36: var icon  = 'wi wi-day-sunny';
        break;
      case 37: var icon  = 'wi wi-thunderstorm';
        break;
      case 38: var icon  = 'wi wi-thunderstorm';
        break;
      case 39: var icon  = 'wi wi-thunderstorm';
        break;
      case 40: var icon  = 'wi wi-storm-showers';
        break;
      case 41: var icon  = 'wi wi-snow';
        break;
      case 42: var icon  = 'wi wi-snow';
        break;
      case 43: var icon  = 'wi wi-snow';
        break;
      case 44: var icon  = 'wi wi-cloudy';
        break;
      case 45: var icon  = 'wi wi-lightning';
        break;
      case 46: var icon  = 'wi wi-snow';
        break;
      case 47: var icon  = 'wi wi-thunderstorm';
        break;
      default: var icon  =  'fa fa-exclamation-triangle';
        break;
    }

    return icon;
  };

  $scope.toggleSidenav = function (menuId) {
    $mdSidenav(menuId).toggle();
  };

  var toast = function () {
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
          if (!$scope.$$phase) $scope.$apply();
        }).
        error(function (data, status, headers, config) {
          toast();
        });
  }
}]).controller('ToastCtrl', function ($scope, $mdToast) {
  $scope.closeToast = function () {
    $mdToast.hide();
  };
});