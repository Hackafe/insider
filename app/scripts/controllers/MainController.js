/**
 * Created by groupsky on 02.12.15.
 */
var moment = require('moment');

require('../main')
    .controller('MainController', /*@ngInject*/function ($log, $scope, $rootScope, config, trelloService) {
        $rootScope.$loading = true;
        trelloService.getCards().then(function (cards) {
            var labels = {};
            cards.forEach(function (card) {
                if (!card.due) {
                    return;
                }
                if (moment(card.due).isBefore(moment().startOf('day'))) {
                    return;
                }
                if (!card.labels || !card.labels.length) {
                    return;
                }
                if (!card.labels.every(function(label) {
                        return config.skipLabels.indexOf(label.id) === -1;
                    })) {
                    return;
                }
                if (moment(card.due).isBefore(moment().endOf('day'))) {
                    (labels.today = labels.today || []).push(card);
                } else if (moment(card.due).isBefore(moment().add(1, 'day').endOf('day'))) {
                    (labels.tomorrow = labels.today || []).push(card);
                } else if (moment(card.due).isBefore(moment().endOf('week'))) {
                    (labels.week = labels.week || []).push(card);
                } else if (moment(card.due).isBefore(moment().add(1, 'week').endOf('week'))) {
                    (labels.nextweek = labels.nextweek || []).push(card);
                } else if (moment(card.due).isBefore(moment().endOf('month'))) {
                    (labels.month = labels.month || []).push(card);
                } else if (moment(card.due).isBefore(moment().add(1, 'month').endOf('month'))) {
                    (labels.nextmonth = labels.nextmonth || []).push(card);
                } else {
                    (labels.future = labels.future || []).push(card);
                }
            });
            $scope.labels = labels;
        }, function (error) {
            $log.error('Failed to retrieve cards', error);
        }).finally(function() {
            $rootScope.$loading = false;
        });
    });
