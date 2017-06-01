var myApp = {};
var mainView = {};
var $$ = Dom7;

(function () {
    'use strict';

    angular.module('app', [
        // Angular modules

        // Custom modules

        // 3rd Party Modules
        'fsCordova',
        'f7AngularUtils'
    ]);
})();
(function () {
    angular
        .module('app')
        .run(runRun)

    runRun.$inject = ['$window', '$templateCache'];

    function runRun($window, $templateCache) {
        myApp = new Framework7({
            modalTitle: 'Framework7',
            material: true,
            pushState: true,
            angular: true
        });
        mainView = myApp.addView('.view-main', {
            domCache: true
        });
        //$templateCache.put('f7_infinite_scroll.html','<div class="content-block searchbar-not-found">No hay elementos.</div><div class="list-block list-block-search searchbar-found"> <ul> <div><li ng-repeat="item in data | limitTo:limitTo" class="item-content" ng-click="itemClick()"> <div class="item-inner"> <div class="item-title">{{item.name}} 123</div></div></li></div></ul></div>');
    }
}());


(function () {
    'use strict';

    angular
        .module('app')
        .controller('formulario', formulario)

    formulario.$inject = ['$scope'];

    function formulario($scope) {

        activate();

        function activate() {

            $scope.model = {
                checkbox: false
            };

            $scope.der = function (a) {
                console.log(a);
            }

            $scope.dataModel = function () {
                console.log($scope.model);
                    alert(JSON.stringify($scope.model));
                
                //alert($scope.model.checkbox);
            }



        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .directive('f7Cheched', directive);

    directive.$inject = ['$window'];

    function directive($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            require: 'ngModel',
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
            console.log(attrs)
            var inputName = attrs.name;

            $$('input[name="' + inputName + '"]').on('change', function () {
                var input = this;
                ngModel.$setViewValue(input.checked);
                ngModel.$render();
                scope.$apply();
            })


            // attrs.$observe('ngModel', function (value) {
            //     scope.$watch(value, function (newValue) {
            //         console.log(newValue);
            //     });
            // });

        }
    }

})();