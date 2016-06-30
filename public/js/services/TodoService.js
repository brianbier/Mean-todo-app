angular.module('todoService', [])
.factory('TodoService',['$http',function($http){
  return {
    get: function(){
      return $http.get('api/todos');
    },
    create: function(TodoData){
      return $http.post('api/todos',TodoData);
    },
    delete: function(todo_id){
      return $http.delete('api/todos/'+ todo_id);
    }
  }
}]);