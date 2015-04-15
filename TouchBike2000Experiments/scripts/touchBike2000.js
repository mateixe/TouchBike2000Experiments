(function () {

    angular.module("touchBike2000", [])
        .directive("mainMenuHover", function () {

            return {

                restrict: "E",

                link: function (scope, element, attr) {

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
        .controller("MainCtrl", ["$scope", function ($scope) {

            var self = this;

            $scope.model = {
                labels: {
                    formasBascas: "Formas Bascas, versadas em forma de história de El Lissitzky"
                }
            };

        }]);

})();