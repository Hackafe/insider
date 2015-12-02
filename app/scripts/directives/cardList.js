/**
 * Created by groupsky on 02.12.15.
 */

require('../main')
    .directive('cardList', /*@ngInject*/function (trelloService) {
        return {
            limit: 'AE',
            scope: {
                cards: "="
            },
            controller: /*@ngInject*/function ($scope, $timeout) {
                $scope.cardOrder = function (card) {
                    return new Date(card.due).getTime();
                };
                $scope.coverImage = function (card) {
                    card.coverImage = card.coverImage || {};
                    if (!card.idAttachmentCover) return card.coverImage;
                    if (card.coverImage.promise) return card.coverImage;
                    card.coverImage.promise = trelloService.getCardAttachment(card.id, card.idAttachmentCover).then(function (attachment) {
                        card.coverImage.url = attachment.url;
                    }, function (error) {
                        console.error(error);
                    });
                    return card.coverImage;
                };
                $scope.getFb = function (card) {
                    card.fb = card.fb || {};
                    if (card.fb.processed) return card.fb;
                    card.fb.match = card.desc ? card.desc.match(/((https?:)?\/\/(www.)?facebook.com\/events\/\d+)/i) : null;
                    if (card.fb.match)
                        card.fb.url = card.fb.match[0];
                    card.fb.processed = true;
                    return card.fb;
                };
            },
            templateUrl: "eventList"
        }
    });
