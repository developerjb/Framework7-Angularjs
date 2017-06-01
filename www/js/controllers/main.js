(function () {
  'use strict';

  angular
    .module('app')
    .controller('main', main)

  main.$inject = ['$scope', 'CordovaService'];

  function main($scope, CordovaService) {
    myApp.showIndicator();
    CordovaService.ready.then(
      function resolved(resp) {
        //se puede cambiar la url de html
        //  mainView.router.load({
        //    pageName: 'virtual_list'
        //  });
         mainView.router.load({
           //url: 'virtual_list.html'
           url: 'list.html'
         });
        myApp.hideIndicator();
      },
      function rejected(resp) {
        myApp.hideIndicator();
        throw new Error(resp);
      }
    );
  }
})();