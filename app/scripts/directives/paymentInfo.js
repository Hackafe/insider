/**
 * Created by groupsky on 12.03.16.
 */

require('../main').directive('paymentInfo', /*@ngInject*/function () {
    return {
        template: require("../../views/paymentInfo.html"),
        controller: /*@ngInject*/ function (scrooogeService, trackerService) {
            var paymentCtrl = this;

            paymentCtrl.loading = true;
            // Get current device mac if inside Hackafe
            trackerService.currentDevice()
                .then(function (device) {
                    paymentCtrl.device = device;

                    // TODO get the current member though some api (@ironsteel - waiting for you :)
                    paymentCtrl.member = device.mac;

                    return scrooogeService.paymentInfo(paymentCtrl.member);
                })
                .then(function (paymentInfo) {
                    paymentCtrl.info = paymentInfo;
                    var now = new Date();
                    var year = now.getFullYear();
                    var month = now.getMonth();
                    paymentCtrl.overdue = year * 12 + month - (paymentInfo.last_paid_year * 12 + paymentInfo.last_paid_month - 1);
                }, function () {
                    paymentCtrl.nopayment = true;
                    paymentCtrl.info = {
                        name: paymentCtrl.member
                    };
                })
                .catch(function () {
                    paymentCtrl.unavailable = true;
                })
                .finally(function () {
                    paymentCtrl.loading = false;
                });
        },
        controllerAs: 'paymentCtrl'
    };
});
