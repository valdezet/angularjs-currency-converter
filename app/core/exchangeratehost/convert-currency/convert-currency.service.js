angular
  .module('myApp.core.exchangeratehost.convertCurrency', [])
  .factory('ConvertCurrency', [
    '$http',
    function ($http) {
      /**
       * @param {string} from 
       * supported currency as base for conversion
       * @param {string} to
       * target currency
       * @param {number} amount
       * the ammount of currency to convert 
       * 
       * @return {Promise}
       * response object of API endpoint
       */
      return function (from, to, amount) {
        let apiUrl = "https://api.exchangerate.host/convert";
        let searchParams = new URLSearchParams();
        searchParams.append('from', from);
        searchParams.append('to', to);
        searchParams.append('amount', amount);
        let searchParamsString = searchParams.toString();

        let responsePromise = $http.get(apiUrl + `?${searchParamsString}`);
        responsePromise.catch(() => { alert("Error converting currency.") })
        return responsePromise;
      }
    }
  ])