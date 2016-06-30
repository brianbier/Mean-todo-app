app.factory('TodoService',['$http',function($http){
  return
  get: function(){
    return $http.get('api/todos')
    .success(function(data){
      return data
    })
    .error(function(error){
      return error
    });
  }

  create: function(TodoData){
    return $http.post('api/todos',TodoData)
    .success(function(data){
      return data
    })
    .error(function(error){
      return error
    });
  }

  delete: function(todo_id){
    return $http.post('api/todos/'+ todo_id)
    .success(function(data){
      return data
    })
    .error(function(error){
      return error
    });
  }
}]);