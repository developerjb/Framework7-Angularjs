//'use strict';
var myApp = {};
var mainView = {};
var $$ = Dom7;

var app = angular.module('app', ['fsCordova']).
  run(['$window', function ($window) {
    myApp = new Framework7({
      modalTitle: 'Framework7',
      material: true,
      pushState: true,
      angular: true
    });
    mainView = myApp.addView('.view-main', {});
  }])
  .config(function () {
    //window.location.hash = "#!/home.html";
  })
  .controller('AppCtrl', ['$scope', '$window', '$timeout', 'CordovaService',
    function ($scope, $window, $timeout, CordovaService) {
      myApp.showIndicator();
      CordovaService.ready.then(
        function resolved(resp) {
          mainView.router.load({
            url: 'home.html'
          });
          myApp.hideIndicator();
        },
        function rejected(resp) {
          myApp.hideIndicator();
          throw new Error(resp);
        }
      );

    }
  ])
  .controller("HomeController", ["$scope", "$http", function ($scope, $http) {

    $scope.title = "News Feeds";
    $scope.nasa = [];
    myApp.showIndicator();
    $http({
      "method": "GET",
      "url": "http://rss2json.com/api.json?rss_url=https://www.nasa.gov/rss/dyn/breaking_news.rss"
    }).then(function (data) {
      $scope.nasa = data.data.items;
      myApp.hideIndicator();
    });

    $http({
      "method": "GET",
      "url": "http://rss2json.com/api.json?rss_url=http://www.cnet.com/rss/smart-home/"
    }).then(function (data) {
      $scope.tech = data.data.items;
      myApp.hideIndicator();
    });

    // $http({
    //   "method": "GET",
    //   "url": "http://rss2json.com/api.json?rss_url=http://www.cnet.com/rss/gaming/"
    // }).then(function (data) {
    //   $scope.games = data.data.items;
    //   myApp.hideIndicator();
    // });


  }]);


// var myApp = {};
// var mainView = {};
// var rightView = {};
// var $$ = Dom7;

// angular.module("AngularApp",[])

// .run(function() {
//     myApp = new Framework7({
//         modalTitle: 'Framework7',
//         material: true,
//         pushState: true,
//         angular: true
//     });
//     mainView = myApp.addView('.view-main', {});
// })

// .config(function() {
//     window.location.hash = "#!/home.html";
// })

// .controller("RootController", ["$scope", function($scope) {


//          $scope.title = "Examples";


// }])
// .controller("HomeController", ["$scope", "$http", function($scope, $http) {

// $scope.title = "News Feeds";
//   $scope.nasa = [];

//   $http({
//     "method" : "GET",
//     "url" : "http://rss2json.com/api.json?rss_url=https://www.nasa.gov/rss/dyn/breaking_news.rss"
//   }).then(function(data){
//     $scope.nasa = data.data.items;
//   });

//   $http({
//     "method" : "GET",
//     "url" : "http://rss2json.com/api.json?rss_url=http://www.cnet.com/rss/smart-home/"
//   }).then(function(data){
//     $scope.tech = data.data.items;
//   });

//   $http({
//     "method" : "GET",
//     "url" : "http://rss2json.com/api.json?rss_url=http://www.cnet.com/rss/gaming/"
//   }).then(function(data){
//     $scope.games = data.data.items;
//   });


// }]);