(function () {
    'use strict';

    angular.module('f7AngularUtils', [
        // Angular modules
        // Custom modules
        // 3rd Party Modules
    ]);
})();

(function () {
    'use strict';

    angular
        .module('f7AngularUtils')
        .run(runRun)

    runRun.$inject = ['$templateCache'];

    function runRun($templateCache) {
        $templateCache.put('f7_infinite_scroll.html','<div class="content-block searchbar-not-found">No hay elementos.</div><div class="list-block list-block-search searchbar-found"> <ul> <div><li ng-repeat="item in data | limitTo:limitTo" class="item-content" ng-click="itemClick()"> <div class="item-inner"> <div class="item-title">{{item.name}}</div></div></li></div></ul></div>');

        $templateCache.put('f7/infinite_scroll.html',
            '<div class="page-content infinite-scroll">' +
            '<div class="content-block searchbar-not-found">No hay elementos.</div>' +
            '<div class="list-block list-block-search searchbar-found">' +
            '<ul>' +
            '<li ng-repeat="item in jsonGenerator | limitTo:20" class="item-content" ng-click="aaa()">' +
            '<div  class="item-inner">' +
            '<div class="item-title">{{item.name}}</div>' +
            '</div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div class="infinite-scroll-preloader">' +
            '<div class="preloader"></div>' +
            '</div>' +
            '</div>'
        );
    }

})();



(function () {
    'use strict';

    angular
        .module('f7AngularUtils')
        .directive('f7InfiniteScroll', f7InfiniteScroll);

    f7InfiniteScroll.$inject = ['$window', '$compile'];

    function f7InfiniteScroll($window, $compile) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            link: link,
            controller: controller,
            restrict: 'EA',
            replace: true,
            templateUrl: 'f7/infinite_scroll.html',
            // scope: {
            //     data: '='
            // }
        };


        function controller($scope, $element, $attrs, $transclude) {

            console.log($scope);

            $scope.jsonGenerator = $scope.data;

            //     var mySearchbar = myApp.searchbar('.searchbar', {
            //     searchList: '.list-block-search',
            //     searchIn: '.item-title'
            // });

            var loading = false;
            // Last loaded index
            var lastIndex = $$('.list-block li').length;
            // Max items to load
            //var maxItems = 60;

            var maxItems = $scope.data.length;

            // Append items per load
            var itemsPerLoad = 20;

            // Attach 'infinite' event handler
            //'.infinite-scroll'
            $$($element).on('infinite', function () {
                console.log('infinite...');

                $$('.infinite-scroll-preloader').show();

                lastIndex = $$('.list-block li').length;
                // Exit, if loading in progress
                if (loading) return;

                // Set loading flag
                loading = true;

                // Emulate 1s loading
                setTimeout(function () {
                    // Reset loading flag
                    loading = false;

                    if (lastIndex >= maxItems) {
                        // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
                        myApp.detachInfiniteScroll($$('.infinite-scroll'));
                        // Remove preloader
                        //$$('.infinite-scroll-preloader').remove();
                        $$('.infinite-scroll-preloader').hide();
                        return;
                    }

                    // Generate new items HTML
                    var html = '';
                    for (var i = lastIndex; i <= lastIndex + itemsPerLoad; i++) {
                        if ($scope.data[i]) {
                            html += '<li ng-click="aaa()" class="item-content"><div class="item-inner"><div class="item-title">' + $scope.data[i].name + '</div></div></li>';
                        }
                    }
                    // Append new items
                    var as = $compile(html)($scope);
                    //console.log(as);
                    $$('.list-block ul').append($$(as));
                    //$$('.list-block ul').append(html);

                    // Update last loaded index
                    lastIndex = $$('.list-block li').length;
                    $$('.infinite-scroll-preloader').hide();
                }, 1000);

            });
            $$('.infinite-scroll-preloader').hide();
        }
        function link(scope, element, attrs) {
            console.log(element);
            $$(element).on('infinite', function () {
               
            });
        }

        return directive;
    }

})();

(function () {
    'use strict';

    angular
        .module('f7AngularUtils')
        .factory('componentsF7', componentsF7)

    componentsF7.$inject = ['$http', '$compile'];

    function componentsF7($http, $compile) {

        var _componentsF7 = {
            infiniteScroll: _infiniteScroll
        };

        function _infiniteScroll(scope, data, template) {
            var loading = false;
            // Last loaded index
            var lastIndex = $$('.list-block li').length;
            // Max items to load
            //var maxItems = 60;
            var maxItems = data.length;

            // Append items per load
            var itemsPerLoad = 20;

            // Attach 'infinite' event handler
            $$('.infinite-scroll').on('infinite', function () {
                $$('.infinite-scroll-preloader').show();

                lastIndex = $$('.list-block li').length;
                // Exit, if loading in progress
                if (loading) return;

                // Set loading flag
                loading = true;

                // Emulate 1s loading
                setTimeout(function () {
                    // Reset loading flag
                    loading = false;

                    if (lastIndex >= maxItems) {
                        // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
                        myApp.detachInfiniteScroll($$('.infinite-scroll'));
                        // Remove preloader
                        //$$('.infinite-scroll-preloader').remove();
                        $$('.infinite-scroll-preloader').hide();
                        return;
                    }

                    // Generate new items HTML
                    var html = '';
                    for (var i = lastIndex; i <= lastIndex + itemsPerLoad; i++) {
                        if (data[i]) {
                            html += '<li ng-click="aaa()" class="item-content"><div class="item-inner"><div class="item-title">' + data[i].name + '</div></div></li>';
                        }
                    }
                    // Append new items
                    var as = $compile(html)(scope);
                    //console.log(as);
                    $$('.list-block ul').append($$(as));

                    // Update last loaded index
                    lastIndex = $$('.list-block li').length;
                    $$('.infinite-scroll-preloader').hide();
                }, 1000);

            });
            $$('.infinite-scroll-preloader').hide();
        }

        return _componentsF7;
    }
})();