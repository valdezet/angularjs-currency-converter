angular
  .module('myApp.partials.navbar')
  .component('mainNavBar', {
    templateUrl: 'partials/navbar/navbar.template.html',
    controller: ['$location', function mainNavBarController($location) {
      /**
       * factory function 
       * @param {} displayText what shows in the navbar 
       * @param {*} url the angular link
       * strip the prefix (#! by default), 
       * this function handles the insertion of prefix.
       * still include a leading slash.
       * @returns {Object} nav link item object
       */
      function createNavLink(displayText, url) {
        let angularAppLocationPrefix = "#!";
        let obj = {
          displayText,
          url: angularAppLocationPrefix + url,
        }
        console.debug('obj', obj);
        return obj;
      }

      this.navbarItems = [
        createNavLink("home", "/"),
        createNavLink("View 1", '/view1'),
        createNavLink("View 2", "/view2")
      ];
    }]
  });