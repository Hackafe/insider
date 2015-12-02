/**
 * Created by groupsky on 02.12.15.
 */

var moment = require('moment');
require('../main')
    .filter('fromNow', /*@ngInject*/function () {
        return function (date) {
            return date ? moment(date).fromNow() : date;
        };
    });
