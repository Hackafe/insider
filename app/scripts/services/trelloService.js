/**
 * Created by groupsky on 02.12.15.
 */

require('../main').service('trelloService', /*@ngInject*/function ($http, config) {
    return {
        getCards: function () {
            return $http.get('//api.trello.com/1/boards/' + config.boardId + '/cards/open')
                .then(function (response) {
                    return response.data;
                });
        },
        getCardAttachment: function (cardId, attachmentId) {
            return $http.get('//api.trello.com/1/cards/' + cardId + "/attachments/" + attachmentId)
                .then(function (response) {
                    return response.data;
                });
        }
    };
});
