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

            var container = document.getElementById("container");

            var mc = new Hammer(container);

            mc.on("panleft panright tap press", function (ev) {
                //myElement.textContent = ev.type + " gesture detected.";
                
                $scope.$apply(function () {
                    $scope['dizer'] = ev.type;
                });
            });

        }]);

})();