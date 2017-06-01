(function () {
    'use strict';

    angular
        .module('app')
        .controller('pagemain', pagemain)

    pagemain.$inject = ['$scope', "$http"];

    function pagemain($scope, $http) {

        $scope.title = "News Feeds";
        $scope.showModel=function(){
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
    }
})();