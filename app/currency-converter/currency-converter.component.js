angular
  .module('myApp.currencyConverter')
  .component('currencyConverter', {
    templateUrl: 'currency-converter/currency-converter.template.html',
    controller: ['SupportedCurrencies', function CurrencyConverterController(SupportedCurrencies) {
      // properties
      this.supportedCurrencies = [];
      this.from = "PHP";
      this.to = "";
      this.amount = 0.0;
      this.result = 0.0;

      // event handler methods
      this.convertCurrency = () => {
        alert("WIP");
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