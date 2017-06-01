(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('pagemain', pagemain);

    pagemain.$inject = ['$window'];

    function pagemain($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            replace:true,
            templateUrl: "home.html"
        };
        return directive;
    }

})();