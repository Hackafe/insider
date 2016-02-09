/**
 * Created by groupsky on 09.02.16.
 */

require('../main').service('trackerService', /*@ngInject*/function ($http) {
    return {
        getDevicesOnline: function () {
            return $http.jsonp('http://tracker.hackafe.org/api/devicesOnline', {
                    params: {
                        apiVersion: 1,
                        callback: 'JSON_CALLBACK'
                    }
                })
                .then(function (response) {
                    return response.data;
                });
        }
    };
});
