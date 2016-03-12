/**
 * Created by groupsky on 12.03.16.
 */

require('../main').service('scrooogeService', /*@ngInject*/function ($http, $window) {
    return {
        paymentInfo: function (member) {
            return $http.jsonp('http://scroooge.hackafe.org/'+$window.encodeURIComponent(member), {
                    params: {
                        callback: 'JSON_CALLBACK'
                    }
                })
                .then(function (response) {
                    return response.data;
                });
        }
    };
});
