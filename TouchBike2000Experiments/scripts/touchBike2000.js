(function () {

    angular.module("touchBike2000", [])
        .controller("MainCtrl", [function () {

            console.log("hello seu trouxa");

            var self = this;

            model = {
                "labels": {
                    "formas-bascas":""
                }
            };

            self.onHoverMenu = function (event) {
                event.prevenDefault();
                console.log("hover");
            }

        }]);

})();