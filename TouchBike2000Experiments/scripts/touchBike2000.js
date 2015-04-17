(function () {

    angular.module("touchBike2000", [])
        .directive("mainMenuHover", function () {

            return {

                restrict: "E",

                link: function (scope, element, attr) {

                    scope.fullLabel = element.contents;
                    scope.overLabel = String(element.contents).split(" ", 3)[0];

                    element.on('mouseenter', function (event) {
                        event.preventDefault();
                        over = true;
                        element.html = scope.overLabel;
                        element.removeClass('bike-2000-opacity-off').addClass('bike-2000-opacity-on');
                    });

                    element.on('mouseleave', function (event) {
                        event.preventDefault();
                        over = false;
                        element.html = scope.fullLabel;
                        element.removeClass('bike-2000-opacity-on').addClass('bike-2000-opacity-off');
                    });

                    element.on('swipeleft', function (event) {
                        event.preventDefault();
                        element.removeClass('bike-2000-opacity-on').addClass('bike-2000-opacity-all');
                    });
                    
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

        }]);

})();