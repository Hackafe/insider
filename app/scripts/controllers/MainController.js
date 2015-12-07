/**
 * Created by groupsky on 02.12.15.
 */

function getCards(cardsByLabels, labels) {
    if (!Array.isArray(labels)) {
        labels = [labels];
    };

    var cardsHash = {};
    labels.forEach(function(label){
        (cardsByLabels[label] && cardsByLabels[label].cards || []).forEach(function(card){
            cardsHash[card.id] = card;
        });
    });

    var cards = [];
    Object.keys(cardsHash).forEach(function(cardId){
        cards.push(cardsHash[cardId]);
    });
    return cards;
}

require('../main')
    .controller('MainController', /*@ngInject*/function ($log, $scope, config, trelloService) {
        trelloService.getCards().then(function (cards) {
            var labels = {};
            cards.forEach(function (card) {
                if (new Date(card.due).getTime() < Date.now()) {
                    return;
                }
                card.labels.forEach(function (label) {
                    labels[label.id] = labels[label.id] || label;
                    labels[label.id].cards = labels[label.id].cards || [];
                    labels[label.id].cards.push(card);
                });
            });
            $scope.labels = {
                // IT events
                events: { name: "Events", cards: labels[config.eventsLabelId].cards },
                // IT courses
                courses: { name: "Courses", cards: labels[config.coursesLabelId].cards },
                // IT gatherings
                gatherings: { name: "Gatherings", cards: labels[config.gatheringsLabelId].cards },
                // Other
                other: { name: "Other", cards: getCards(labels, config.othersLabels) }
            };
        }, function (error) {
            $log.error('Failed to retrieve cards', error);
        });
    });
