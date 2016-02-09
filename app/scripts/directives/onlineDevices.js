/**
 * Created by groupsky on 09.02.16.
 */

require('../main').directive('onlineDevices', /*@ngInject*/function ($timeout, trackerService) {
    return {
        restrict: 'AE',
        replace: true,
        template: require("../../views/onlineDevices.html"),
        link: function ($scope) {
            function updateDevices() {
                trackerService.getDevicesOnline().then(function (response) {
                    $scope.devices = response.devices;
                }).finally(function () {
                    $timeout(updateDevices, 60000);
                });
            }

            updateDevices();
        }
    };
});
