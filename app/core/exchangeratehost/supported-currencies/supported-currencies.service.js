angular
  .module('myApp.core.exchangeratehost.supportedCurrencies', [])
  .factory('SupportedCurrencies', [
    '$http',
    function ($http) {
      return function () {
        return $http.get("https://api.exchangerate.host/symbols")
      }
    }
  ])