(function () {

    angular.module("touchBike2000", [])
        .directive("mainMenuHover", function () {

            return {

                restrict: "A",

                link: function (scope, element, attr) {

                    scope.fullLabel = element.contents;
                    console.log(scope.fullLabel);
                    scope.overLabel = String(element.contents).split(" ", 3)[0];

                    element.on('mouseenter', function (event) {
                        event.preventDefault();
                        over = true;
                        element.removeClass('bike-2000-opacity-off').addClass('bike-2000-opacity-on');
                    });

                    element.on('mouseleave', function (event) {
                        event.preventDefault();
                        over = false;
                        element.removeClass('bike-2000-opacity-on').addClass('bike-2000-opacity-off');
                    });
                    
                }
            }

        })
        .directive("home", function () {
            restrict: "E"
        })
        .directive("formasBascas", function () {

            return {

                restrict: "E",

                link: function (scope,element,attr) {
                    console.log('formas-bascas');
                }

            }

        })
        .controller("MainCtrl", ["$scope", function ($scope) {

            var self = this;

            $scope.model = {
                labels: {
                    formasBascas: "Formas Bascas, versadas em forma de história de El Lissitzky"
                }
            };

            $scope.hmSwipeleft = function () {
                alert("fdsfsd");
            }

        }])
        .controller("FormasBascasCtrl", ["$scope",function ($scope) {

            $scope.dizer = 'docce quero meu doce';

            $scope.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
            $scope.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

            var container = document.getElementById("container");

            var mc = new Hammer(container);
            $scope.svg = Snap("#canvas");

            $scope.circle = $scope.svg.circle(150, 150, 100);

            mc.on("panleft panright tap press", function (ev) {
 
                $scope.ev = ev;

                $scope.$apply(function (ev) {

                    //console.log(ev.type);
                   
                    if (ev.type = "tap") {

                        $scope.circle.attr({
                            fill: "#bada55",
                            stroke: "#555",
                            strokeWidth: 20,
                            cx: $scope.ev.deltaX,
                            cy: $scope.ev.deltaY
                        });

                    }

                });
            });

        }]);

})();