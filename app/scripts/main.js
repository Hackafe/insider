/**
 * Created by groupsky on 02.12.15.
 */

var angular = require('angular');
var bulk = require('bulk-require');

var app = angular.module('app', [
    require('angular-animate'),
    require('angular-sanitize'),
    require('angular-ui-bootstrap'),
    require('angular-moment')
]);

module.exports = app;

// include all js files
bulk(__dirname, ['./**/!(main|*.spec).js']);
