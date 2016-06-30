angular.module('todoController', [])
.controller('MainController',['$scope','TodoService',function($scope, TodoService){
  $scope.formData = {}

  // GET =====================================================================
// when landing on the page, get all todos and show them
// use the service to get all the todos
  TodoService.get()
  .success(function(data){
    $scope.todos = data;
  });

  // CREATE ==================================================================
  // when submitting the add form, send the text to the node API
  $scope.createTodo = function(){
// validate the formData to make sure that something is there if form is empty, nothing will happen people can't just hold enter to keep adding the same to-do anymore
    if (!$.isEmptyObject($scope.formData)) {
        // call the create function from our service (returns a promise object)
    TodoService.create($scope.formData)
    // if successful creation, call our get function to get all the new todos
    .success(function(data){
      $scope.formData = {};
      $scope.todos = data;
    });
    }
  };
  // DELETE ==================================================================
  $scope.deleteTodo = function(id){
    TodoService.delete(id).success(function(data){
      $scope.todos = data;
    });
  };

}]);