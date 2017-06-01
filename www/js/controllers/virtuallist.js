(function () {
    'use strict';

    angular
        .module('app')
        .controller('virtuallist', virtuallist)

    virtuallist.$inject = ['$scope', "$http", "$compile"];

    function virtuallist($scope, $http, $compile) {

        //console.log($compile('<b ng-click="aaa()">SCOPE</b>')($scope));
        
        var template = '<div><li class="item-content" ng-click="aaa()">' +
            '<div class="item-inner">' +
            '<div class="item-title">asd</div>' +
            '</div>' +
            '</li></div>';


        myApp.virtualList('.vl_virtual_list', {
            // Array with items data
            items: [
                {
                    title: 'Item 1',
                    picture: 'path/to/picture1.jpg'
                },
                {
                    title: 'Item 2',
                    picture: 'path/to/picture2.jpg'
                },
                {
                    title: 'Item 1000',
                    picture: 'path/to/picture1000.jpg'
                },
            ],
            renderItem: function (index, item) {
                var as = $compile(template)($scope);
                console.log($$(as[0]).html());
                return $$(as[0]).html();
            }
            //template: template
        });

        $scope.aaa = function () {
            alert('')
        };


        $scope.title = "News Feeds";
        $scope.showModel = function () {
            console.log($scope.model);
        };
        $scope.nasa = [];

        //myApp.showIndicator();
        // $http({
        //     "method": "GET",
        //     "url": "http://rss2json.com/api.json?rss_url=https://www.nasa.gov/rss/dyn/breaking_news.rss"
        // }).then(function (data) {
        //     $scope.nasa = data.data.items;
        //     myApp.hideIndicator();
        // });

        // $http({
        //     "method": "GET",
        //     "url": "http://rss2json.com/api.json?rss_url=http://www.cnet.com/rss/smart-home/"
        // }).then(function (data) {
        //     $scope.tech = data.data.items;
        //     myApp.hideIndicator();
        // });

        // $http({
        //     "method": "GET",
        //     "url": "http://rss2json.com/api.json?rss_url=http://www.cnet.com/rss/gaming/"
        // }).then(function (data) {
        //     $scope.games = data.data.items;
        //     myApp.hideIndicator();
        // });
        window.des = $scope;
    }
})();