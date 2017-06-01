(function () {
    'use strict';




    angular
        .module('app')
        .controller('infinitescroll', infinitescroll)

    infinitescroll.$inject = ['$scope', "$http", "$compile"];

    function infinitescroll($scope, $http, $compile) {
        $scope.modalValue = 'nada';
        var dataInfinite = [
            {
                "name": "Mitzi Cotton",
                "gender": "female",
                "company": "RUBADUB"
            },
            {
                "name": "Duran Mays",
                "gender": "male",
                "company": "ZILLAN"
            },
            {
                "name": "Karina William",
                "gender": "female",
                "company": "RUGSTARS"
            },
            {
                "name": "Schmidt Valentine",
                "gender": "male",
                "company": "PORTICA"
            },
            {
                "name": "Angelita Mueller",
                "gender": "female",
                "company": "ANOCHA"
            },
            {
                "name": "Jennie Joseph",
                "gender": "female",
                "company": "CEMENTION"
            },
            {
                "name": "Darcy Acevedo",
                "gender": "female",
                "company": "COMVEYER"
            },
            {
                "name": "Norma Clay",
                "gender": "female",
                "company": "ENDIPINE"
            },
            {
                "name": "Duncan Odonnell",
                "gender": "male",
                "company": "ZILCH"
            },
            {
                "name": "Gretchen Powell",
                "gender": "female",
                "company": "SONGBIRD"
            },
            {
                "name": "Campos Ellis",
                "gender": "male",
                "company": "WARETEL"
            },
            {
                "name": "Sparks Gross",
                "gender": "male",
                "company": "KEEG"
            },
            {
                "name": "Ayala Dawson",
                "gender": "male",
                "company": "ORBIXTAR"
            },
            {
                "name": "Lynn Alvarado",
                "gender": "male",
                "company": "ENERSAVE"
            },
            {
                "name": "Ware Kim",
                "gender": "male",
                "company": "DAYCORE"
            },
            {
                "name": "Crystal Boyer",
                "gender": "female",
                "company": "PREMIANT"
            },
            {
                "name": "Harmon Wise",
                "gender": "male",
                "company": "FILODYNE"
            },
            {
                "name": "Melton Bryan",
                "gender": "male",
                "company": "QNEKT"
            },
            {
                "name": "Anastasia Chambers",
                "gender": "female",
                "company": "ELENTRIX"
            },
            {
                "name": "Hopkins Gillespie",
                "gender": "male",
                "company": "CYCLONICA"
            },
            {
                "name": "Fry Kent",
                "gender": "male",
                "company": "HYPLEX"
            },
            {
                "name": "Gloria Walton",
                "gender": "female",
                "company": "MAGNINA"
            },
            {
                "name": "Joanna Nicholson",
                "gender": "female",
                "company": "CALCU"
            },
            {
                "name": "Mindy Collins",
                "gender": "female",
                "company": "ZENSUS"
            },
            {
                "name": "Shields Maynard",
                "gender": "male",
                "company": "KIOSK"
            },
            {
                "name": "Herman Caldwell",
                "gender": "male",
                "company": "EVENTIX"
            },
            {
                "name": "Bernadette Haley",
                "gender": "female",
                "company": "TROLLERY"
            },
            {
                "name": "Castro Gill",
                "gender": "male",
                "company": "SONIQUE"
            },
            {
                "name": "Erin Bowers",
                "gender": "female",
                "company": "WAAB"
            },
            {
                "name": "Lauren Singleton",
                "gender": "female",
                "company": "CYTRAK"
            },
            {
                "name": "Lora Fletcher",
                "gender": "female",
                "company": "INEAR"
            },
            {
                "name": "Wynn Weeks",
                "gender": "male",
                "company": "RENOVIZE"
            },
            {
                "name": "Ursula Mcintosh",
                "gender": "female",
                "company": "SNACKTION"
            },
            {
                "name": "Hubbard Soto",
                "gender": "male",
                "company": "EQUICOM"
            },
            {
                "name": "Hanson Levine",
                "gender": "male",
                "company": "LUMBREX"
            },
            {
                "name": "Ortiz Bryant",
                "gender": "male",
                "company": "EARTHWAX"
            },
            {
                "name": "Gladys Francis",
                "gender": "female",
                "company": "COMSTRUCT"
            },
            {
                "name": "David Mcmillan",
                "gender": "male",
                "company": "ZYTREK"
            },
            {
                "name": "Miriam Shepherd",
                "gender": "female",
                "company": "MOREGANIC"
            },
            {
                "name": "Megan Lynch",
                "gender": "female",
                "company": "MICROLUXE"
            },
            {
                "name": "Leigh Buckner",
                "gender": "female",
                "company": "INTERODEO"
            },
            {
                "name": "Workman Swanson",
                "gender": "male",
                "company": "PRIMORDIA"
            },
            {
                "name": "Grace English",
                "gender": "female",
                "company": "PEARLESEX"
            },
            {
                "name": "Evans Mcgee",
                "gender": "male",
                "company": "KAGGLE"
            },
            {
                "name": "Buck Stark",
                "gender": "male",
                "company": "CONFRENZY"
            },
            {
                "name": "Atkinson Talley",
                "gender": "male",
                "company": "FISHLAND"
            },
            {
                "name": "Young Neal",
                "gender": "female",
                "company": "QUADEEBO"
            },
            {
                "name": "Josie Emerson",
                "gender": "female",
                "company": "IZZBY"
            },
            {
                "name": "Carolina Sheppard",
                "gender": "female",
                "company": "PHOLIO"
            },
            {
                "name": "Pamela Franks",
                "gender": "female",
                "company": "FIREWAX"
            },
            {
                "name": "Kay Herman",
                "gender": "female",
                "company": "QUALITEX"
            },
            {
                "name": "Price Chandler",
                "gender": "male",
                "company": "ACCUSAGE"
            },
            {
                "name": "Angelia Kelley",
                "gender": "female",
                "company": "NEPTIDE"
            },
            {
                "name": "Maldonado Buchanan",
                "gender": "male",
                "company": "MARKETOID"
            },
            {
                "name": "Knight Aguilar",
                "gender": "male",
                "company": "BIZMATIC"
            },
            {
                "name": "Dona Hendrix",
                "gender": "female",
                "company": "ANARCO"
            },
            {
                "name": "Woods Gutierrez",
                "gender": "male",
                "company": "DANCITY"
            },
            {
                "name": "Graciela Raymond",
                "gender": "female",
                "company": "PAPRIKUT"
            },
            {
                "name": "Amelia Perez",
                "gender": "female",
                "company": "RODEOLOGY"
            },
            {
                "name": "Sylvia Roach",
                "gender": "female",
                "company": "KONGENE"
            },
            {
                "name": "Peterson Garrett",
                "gender": "male",
                "company": "RETRACK"
            },
            {
                "name": "Eddie Nunez",
                "gender": "female",
                "company": "ACCRUEX"
            },
            {
                "name": "Delores Cherry",
                "gender": "female",
                "company": "TETAK"
            },
            {
                "name": "Jeannette Molina",
                "gender": "female",
                "company": "CODAX"
            },
            {
                "name": "Shana Mcdowell",
                "gender": "female",
                "company": "EXOSIS"
            },
            {
                "name": "Yang Mercer",
                "gender": "male",
                "company": "COLLAIRE"
            },
            {
                "name": "Howell Slater",
                "gender": "male",
                "company": "RETROTEX"
            },
            {
                "name": "Puckett Lawson",
                "gender": "male",
                "company": "ENTROFLEX"
            },
            {
                "name": "Fowler Pitts",
                "gender": "male",
                "company": "SULTRAXIN"
            },
            {
                "name": "Mccullough Baldwin",
                "gender": "male",
                "company": "CIPROMOX"
            },
            {
                "name": "Mcintosh Freeman",
                "gender": "male",
                "company": "FLYBOYZ"
            },
            {
                "name": "Charlene Wallace",
                "gender": "female",
                "company": "VERAQ"
            },
            {
                "name": "Walls Guerrero",
                "gender": "male",
                "company": "GYNKO"
            },
            {
                "name": "Bobbi Reeves",
                "gender": "female",
                "company": "IDEALIS"
            },
            {
                "name": "Toni Navarro",
                "gender": "female",
                "company": "NIMON"
            },
            {
                "name": "Jordan Diaz",
                "gender": "male",
                "company": "ERSUM"
            },
            {
                "name": "Tamra Park",
                "gender": "female",
                "company": "FANGOLD"
            },
            {
                "name": "Tara Hardin",
                "gender": "female",
                "company": "ECOLIGHT"
            },
            {
                "name": "Helga Hampton",
                "gender": "female",
                "company": "FURNAFIX"
            },
            {
                "name": "Valencia Campbell",
                "gender": "male",
                "company": "INSURON"
            },
            {
                "name": "Head Hanson",
                "gender": "male",
                "company": "KEENGEN"
            },
            {
                "name": "Bond Klein",
                "gender": "male",
                "company": "TALKALOT"
            },
            {
                "name": "Margo Herrera",
                "gender": "female",
                "company": "VIRVA"
            },
            {
                "name": "Rios Jacobs",
                "gender": "male",
                "company": "MOMENTIA"
            },
            {
                "name": "Fields Fox",
                "gender": "male",
                "company": "ISOSTREAM"
            },
            {
                "name": "Angelica Shepard",
                "gender": "female",
                "company": "POLARAX"
            },
            {
                "name": "Alfreda Knowles",
                "gender": "female",
                "company": "ZYTREX"
            }
        ];
        $scope.newDataArray = [
            {
                "age": 31,
                "name": "Velazquez Lopez",
                "gender": "male",
                "email": "velazquezlopez@isoplex.com",
                "phone": "+1 (821) 545-2317"
            },
            {
                "age": 29,
                "name": "Alyson Barrett",
                "gender": "female",
                "email": "alysonbarrett@isoplex.com",
                "phone": "+1 (998) 447-3001"
            },
            {
                "age": 40,
                "name": "Hardy Manning",
                "gender": "male",
                "email": "hardymanning@isoplex.com",
                "phone": "+1 (884) 418-3499"
            },
            {
                "age": 27,
                "name": "Collins Bray",
                "gender": "male",
                "email": "collinsbray@isoplex.com",
                "phone": "+1 (992) 588-3401"
            },
            {
                "age": 25,
                "name": "Cochran Burch",
                "gender": "male",
                "email": "cochranburch@isoplex.com",
                "phone": "+1 (876) 562-3796"
            },
            {
                "age": 26,
                "name": "Jimenez Kemp",
                "gender": "male",
                "email": "jimenezkemp@isoplex.com",
                "phone": "+1 (942) 592-2173"
            },
            {
                "age": 32,
                "name": "Essie Battle",
                "gender": "female",
                "email": "essiebattle@isoplex.com",
                "phone": "+1 (996) 536-2714"
            },
            {
                "age": 22,
                "name": "Kristi Carr",
                "gender": "female",
                "email": "kristicarr@isoplex.com",
                "phone": "+1 (992) 521-2443"
            },
            {
                "age": 26,
                "name": "Deana Jenkins",
                "gender": "female",
                "email": "deanajenkins@isoplex.com",
                "phone": "+1 (861) 509-3207"
            },
            {
                "age": 29,
                "name": "Tommie Solis",
                "gender": "female",
                "email": "tommiesolis@isoplex.com",
                "phone": "+1 (915) 510-2671"
            },
            {
                "age": 35,
                "name": "Rosalind Patterson",
                "gender": "female",
                "email": "rosalindpatterson@isoplex.com",
                "phone": "+1 (805) 489-3013"
            },
            {
                "age": 37,
                "name": "Candace Grimes",
                "gender": "female",
                "email": "candacegrimes@isoplex.com",
                "phone": "+1 (983) 513-2663"
            },
            {
                "age": 36,
                "name": "Julianne Jennings",
                "gender": "female",
                "email": "juliannejennings@isoplex.com",
                "phone": "+1 (954) 514-2353"
            },
            {
                "age": 29,
                "name": "Lucinda Hawkins",
                "gender": "female",
                "email": "lucindahawkins@isoplex.com",
                "phone": "+1 (980) 540-2348"
            },
            {
                "age": 30,
                "name": "Serrano Bernard",
                "gender": "male",
                "email": "serranobernard@isoplex.com",
                "phone": "+1 (828) 476-3854"
            },
            {
                "age": 40,
                "name": "Avis Wright",
                "gender": "female",
                "email": "aviswright@isoplex.com",
                "phone": "+1 (963) 476-2457"
            },
            {
                "age": 34,
                "name": "Lynne Allison",
                "gender": "female",
                "email": "lynneallison@isoplex.com",
                "phone": "+1 (993) 463-2250"
            },
            {
                "age": 25,
                "name": "Tia Patton",
                "gender": "female",
                "email": "tiapatton@isoplex.com",
                "phone": "+1 (814) 421-3725"
            },
            {
                "age": 28,
                "name": "Paul Hays",
                "gender": "male",
                "email": "paulhays@isoplex.com",
                "phone": "+1 (866) 577-2388"
            },
            {
                "age": 28,
                "name": "Delia Park",
                "gender": "female",
                "email": "deliapark@isoplex.com",
                "phone": "+1 (955) 468-3794"
            },
            {
                "age": 34,
                "name": "Diana Cline",
                "gender": "female",
                "email": "dianacline@isoplex.com",
                "phone": "+1 (805) 531-3361"
            },
            {
                "age": 39,
                "name": "Millie Horne",
                "gender": "female",
                "email": "milliehorne@isoplex.com",
                "phone": "+1 (859) 409-2511"
            },
            {
                "age": 24,
                "name": "Dennis Miller",
                "gender": "male",
                "email": "dennismiller@isoplex.com",
                "phone": "+1 (975) 505-2053"
            },
            {
                "age": 26,
                "name": "Leah Hayden",
                "gender": "female",
                "email": "leahhayden@isoplex.com",
                "phone": "+1 (842) 401-2057"
            },
            {
                "age": 34,
                "name": "Donaldson Leonard",
                "gender": "male",
                "email": "donaldsonleonard@isoplex.com",
                "phone": "+1 (889) 481-3983"
            },
            {
                "age": 25,
                "name": "Wilma Elliott",
                "gender": "female",
                "email": "wilmaelliott@isoplex.com",
                "phone": "+1 (806) 401-3184"
            },
            {
                "age": 33,
                "name": "Patrice Bass",
                "gender": "female",
                "email": "patricebass@isoplex.com",
                "phone": "+1 (850) 594-2608"
            },
            {
                "age": 36,
                "name": "Maryann Harding",
                "gender": "female",
                "email": "maryannharding@isoplex.com",
                "phone": "+1 (979) 443-3024"
            },
            {
                "age": 20,
                "name": "Mercado Jones",
                "gender": "male",
                "email": "mercadojones@isoplex.com",
                "phone": "+1 (975) 419-3015"
            },
            {
                "age": 37,
                "name": "Angie Hopper",
                "gender": "female",
                "email": "angiehopper@isoplex.com",
                "phone": "+1 (982) 526-2081"
            },
            {
                "age": 37,
                "name": "Alberta Hopkins",
                "gender": "female",
                "email": "albertahopkins@isoplex.com",
                "phone": "+1 (880) 514-3243"
            },
            {
                "age": 33,
                "name": "Haney Wilkinson",
                "gender": "male",
                "email": "haneywilkinson@isoplex.com",
                "phone": "+1 (831) 475-2692"
            },
            {
                "age": 38,
                "name": "Orr Woods",
                "gender": "male",
                "email": "orrwoods@isoplex.com",
                "phone": "+1 (849) 588-2197"
            }
        ];
        $scope.cambiar = function () {
            console.log($scope.modalValue);
            myApp.prompt('What is your name?', function (value) {
                    $scope.modalValue = value;
                myApp.alert('Your name is "' + value + '". You clicked Ok button');
            });
            
            /*$$('.list-block li').remove();
            $scope.arq = 20;
            myApp.attachInfiniteScroll($$('.infinite-scroll'));
            $$('.page-content').scrollTop(0, 300);*/
        }

        $scope.data = dataInfinite;

        $scope.title = "funca";

        $scope.aaa = function () {
            alert("aaa");
        }

        window.pert = $scope;

    }

    angular
        .module('app')
        .directive('f7InfiniteScrollV2', f7InfiniteScroll);

    f7InfiniteScroll.$inject = ['$compile'];

    function f7InfiniteScroll($compile) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            link: link,
            controller: controller,
            restrict: 'EA', 
            replace: true,
            templateUrl:'f7_infinite_scroll.html'
            //template: '<div class="content-block searchbar-not-found">No hay elementos.</div><div class="list-block list-block-search searchbar-found"> <ul> <div><li ng-repeat="item in data | limitTo:limitTo" class="item-content" ng-click="itemClick()"> <div class="item-inner"> <div class="item-title">{{item.name}}</div></div></li></div></ul></div>'
        };

        function controller($scope, $element, $attrs, $transclude) {

        }

        function link(scope, element, attrs) {
            scope.limitTo = 20;
            scope.itemClick = function () { };

            var loading = false,
                lastIndex, maxItems, data,
                itemsPerLoad = 20;

            var ptrContent = $$('.pull-to-refresh-content');

            ptrContent.on('ptr:refresh', function (e) {
                // Emulate 2s loading
                setTimeout(function () {
                    // // Random image
                    // var picURL = 'http://hhhhold.com/88/d/jpg?' + Math.round(Math.random() * 100);
                    // // Random song
                    // var song = songs[Math.floor(Math.random() * songs.length)];
                    // // Random author
                    // var author = authors[Math.floor(Math.random() * authors.length)];
                    // // List item html
                    // var itemHTML = '<li class="item-content">' +
                    //     '<div class="item-media"><img src="' + picURL + '" width="44"/></div>' +
                    //     '<div class="item-inner">' +
                    //     '<div class="item-title-row">' +
                    //     '<div class="item-title">' + song + '</div>' +
                    //     '</div>' +
                    //     '<div class="item-subtitle">' + author + '</div>' +
                    //     '</div>' +
                    //     '</li>';
                    // // Prepend new list element
                    // ptrContent.find('ul').prepend(itemHTML);

                    // // When loading done, we need to reset it
                    // myApp.pullToRefreshDone();
                    scope.data = scope.newDataArray;
                    myApp.pullToRefreshDone();
                    scope.$apply();
                }, 2000);
            });


            $$('.infinite-scroll').on('infinite', function () {
                var html = '';
                data = scope.data;
                $$('.infinite-scroll-preloader').show();
                lastIndex = $$('.list-block li').length;
                maxItems = data.length;
                if (loading) return;
                loading = true;
                setTimeout(function () {
                    loading = false;
                    if (lastIndex >= maxItems) {
                        myApp.detachInfiniteScroll($$('.infinite-scroll'));
                        $$('.infinite-scroll-preloader').hide();
                        return;
                    }
                    scope.limitTo += 20;
                    scope.$apply();
                    // loading = false;
                    // if (lastIndex >= maxItems) {
                    //     myApp.detachInfiniteScroll($$('.infinite-scroll'));
                    //     $$('.infinite-scroll-preloader').hide();
                    //     return;
                    // }
                    // //crear nuevo scope con array
                    // //loopear
                    // //por cada vuelta push al array
                    // //termina el push, compilar el html con ngrepeat
                    // //hacer append a al alista

                    // for (var i = lastIndex; i <= lastIndex + itemsPerLoad; i++) {
                    //     var sc = scope.$new(true);
                    //     if (data[i]) {
                    //         html += '<li ng-click="aaa()" class="item-content"><div class="item-inner"><div class="item-title">' + data[i].name + '</div></div></li>';
                    //     }
                    //     sc.item = data[i]
                    //     //compile(sc)
                    //     //append
                    // }

                    // $$('.list-block ul').append($$($compile(html)(scope)));
                    // $$('.infinite-scroll-preloader').hide();
                }, 1000);
            });

            $$('.infinite-scroll-preloader').hide();
        }

        return directive;
    }


    angular
        .module('app')
        .directive('f7SearchBarOverlay', f7SearchBarOverlay);

    f7SearchBarOverlay.$inject = ['$compile'];

    function f7SearchBarOverlay() {
        var directive = {
            restrict: 'EA',
            replace: true,
            template: '<div class="searchbar-overlay"></div>'
        };
        return directive;
    }

    angular
        .module('app')
        .directive('f7SearchBar', f7SearchBar);

    f7SearchBar.$inject = [];

    function f7SearchBar() {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            link: link,
            controller: controller,
            restrict: 'EA',
            replace: true
            , template: '<form class="searchbar"> <div class="searchbar-input"> <input type="search" placeholder="Buscar"> <a href="#" class="searchbar-clear"></a> </div><a href="#" class="searchbar-cancel">Cancel</a> </form>'
        };

        function controller($scope, $element, $attrs, $transclude) {

        }

        function link(scope, element, attrs) {
            var mySearchbar = myApp.searchbar('.searchbar', {
                searchList: '.list-block-search',
                searchIn: '.item-title'
            });

        }

        return directive;
    }



    /*<div class="searchbar-overlay"></div>*/
})();   