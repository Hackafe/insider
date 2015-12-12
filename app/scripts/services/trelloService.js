/**
 * Created by groupsky on 02.12.15.
 */

require('../main').service('trelloService', /*@ngInject*/function ($http, config) {
    return {
        getCards: function () {
            return $http.jsonp('http://api.trello.com/1/boards/' + config.boardId + '/cards/open', {
                    params: {
                        key: config.trelloAppKey,
                        callback: 'JSON_CALLBACK'
                    }
                })
                .then(function (response) {
                    return response.data;
                });
        },
        getCardAttachment: function (cardId, attachmentId) {
            return $http.jsonp('//api.trello.com/1/cards/' + cardId + "/attachments/" + attachmentId, {
                    params: {
                        key: config.trelloAppKey,
                        callback: 'JSON_CALLBACK'
                    }
                })
                .then(function (response) {
                    return response.data;
                });
        }
    };
});
