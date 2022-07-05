angular
  .module('myApp.currencyConverter')
  .component('currencyConverter', {
    templateUrl: 'currency-converter/currency-converter.template.html',
    controller: [
      'SupportedCurrencies',
      'ConvertCurrency',
      function CurrencyConverterController(
        SupportedCurrencies,
        ConvertCurrency
      ) {
        // properties
        this.supportedCurrencies = [];
        this.from = "PHP";
        this.to = "";
        this.amount = 0.0;
        this.result = 0.0;

        // event handler methods
        this.convertCurrency = () => {
          ConvertCurrency(this.from, this.to, this.amount)
            .then(response => {
              this.result = response.data.result;
            })
        }

        // etc
        SupportedCurrencies()
          .then(({ data }) => {
            Object.values(data.symbols).forEach(cur => {
              this.supportedCurrencies.push(cur)
            });
          })
      }]
  })