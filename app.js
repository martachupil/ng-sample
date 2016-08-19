angular.module('app', [])
    .factory('itemsManager', ['$http' ,function($http) {
        return {
          getItems: function() {
              return $http.get('items.json');
          }
        };
    }])
    .controller('ToDoListController', ['$scope', 'itemsManager', function($scope, itemsManager) {
        $scope.items = [];
        $scope.loading = true;

        itemsManager.getItems()
            .success(function(receivedShitWithTasks) {
                $scope.items = receivedShitWithTasks;
                $scope.loading = false;
            })
            .error(function(err) {
               $scope.loading = false;
               alert("Error - "+err+". Why? Fuck you, thats why!");
            });

        $scope.addItem = function(item) {
            $scope.items.unshift(item);
            $scope.newItemName = '';
        };
    }]);

