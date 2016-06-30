app.controller('MainController',['$scope','TodoServices',function($scope, TodoServices){
  $scope.formData = {}
  TodoServices.get.success(function(data){
    $scope.todos = data;
    console.log(data);
  })

  $scope.createTodo = function(){
    TodoServices.create.success(function(data){
      $scope.formData = {};
      $scope.todos = data;
      console.log(data);
    })
  }

  $scope.deleteTodo = function(id){
    TodoServices.delete(id).success(function(data){
      $scope.todos = data;
      console.log(data);
    })
  }
  
}]);