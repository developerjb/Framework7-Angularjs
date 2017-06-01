(function () {
  'use strict';

  angular
    .module('app')
    .controller('list', list)

  list.$inject = ['$scope'];

  function list($scope) {
    
    $scope.clickAvance = function (page){
        mainView.router.load({
           url: page
         });
    }

  }
})();