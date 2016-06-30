var Todo = require('./models/Todo')

module.exports = function(app){

  app.get('/api/todos',function(req,res){
    // use mongoose to get all todos in the database
    Todo.find({}).sort({createdAt: 'desc'}).exec(function(error,todos){
      if(error){
        res.send(500,
          {error: error,
           succes: false
          });
      }else{
        res.json(todos);
        // res.send('No data')
      }
    })
  });


  // create todo and send back all todos after creation
  app.post('/api/todos',function(req,res){
    var todo = new Todo({
      text: req.body.text,
      done: false
    });

    todo.save(function(error, todo){
      if(error){
        res.send(500,{
          error: error,
          success: false
        });
      }else{
        // get and return all the todos after you create another
        Todo.find({}).sort({createdAt: 'desc'}).exec(function(error,todos){
          if(error){
            res.send(500,{
              error: error,
              success: false
            });
          }else{
            res.json(todos);
          }
        });
      }
    });
  });

  // DELETE A TODO
  app.delete('/api/todos/:todo_id',function(req,res){
    Todo.findOneAndRemove({
      _id: req.params.todo_id
    },function(error,todo){
      if(error){
        res.send(500,{
          error: error,
          success:false
        });
      }else{
       Todo.find({}).sort({createdAt: 'desc'}).exec(function(error,todos){
        if(error){
          res.send(500,{
            error: error,
            success: false
          });
        }else{
          res.json(todos);
        }
      });
      }
    });
  });

  //Front End Routes for angular js
  app.get('*',function(req,res){
    res.sendfile('./public/index.html');
  });


}; // end of module export