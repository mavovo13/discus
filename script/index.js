angular.module('Discus', ['ngResource'])
  .controller('mainController', ['$scope', '$resource', function($scope, $resource) {
    $scope.inputedBody = '';
    $scope.inputedAuthor = '';

    var Comments = $resource(
      'https://9l9p8myt23.execute-api.ap-northeast-1.amazonaws.com/prod/messages'
    );

    $scope.messages = Comments.query(function(data, headers) {
      result.push(response);
    });


    $scope.reply = function(message) {
      $scope.inputedBody = '[ref:' + message.messageId + ']' + "\n" + $scope.inputedBody;
    };

    $scope.onSubmit = function() {
      var newContents = {
        messageId: 1,
        body: $scope.inputedBody,
        author: $scope.inputedAuthor,
        date: dateTimeFormat(new Date()),
        liked: 0
      };

      Comments.save(
        newContents,
        function() {}
      );

      $scope.messages.push(newContents);
      $scope.inputedBody = '';
    };
  }])
  .controller('listController', ['$scope', function($scope) {
    $scope.onLike = function(message) {
      // Todo:hrt メッセージIDをもとにlikedを1プラスして更新する

      message.liked = message.liked + 1;
    };
  }]);
