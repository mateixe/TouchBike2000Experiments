(function () {

    angular.module("touchBike2000", [])
        .controller("MainCtrl", ["$scope", function ($scope) {

            var self = this;

            $scope.model = {
                labels: {
                    formasBascas: "Formas Bascas, versadas em forma de história de El Lissitzky"
                }
            };

        }]);

})();