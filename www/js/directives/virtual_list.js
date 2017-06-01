(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('virtualList', virtualList);

    virtualList.$inject = ['$window'];

    function virtualList($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            replace:true,
            templateUrl: "virtual_list.html"
        };
        return directive;
    }

})();