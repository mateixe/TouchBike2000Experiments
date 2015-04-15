(function () {

    angular.module("touchBike2000", [])
        .directive("mainMenuHover", function () {

            return {

                restrict: "E",

                link: function (scope, element, attr) {

                    var over = false;

                    element.on('mouseenter', function (event) {
                        event.preventDefault();
                        over = true;
                        console.log(over);
                    });

                    element.on('mouseleave', function (event) {
                        event.preventDefault();
                        over = false;
                        console.log(over);
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