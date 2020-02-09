const Todo = require('../models/todoModel'),
    bodyParser = require('body-parser');
module.exports = function(app) {
    
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.get('/api/todo/:name', function(req, res) {
            Todo.find({ username: req.params.name }, function(err, result) {
                if(err) throw err;
                res.send(result);
            })
        })

        app.post('/api/todo', function(req, res) {
            if(req.body.id) {
                Todo.findByIdAndUpdate(req.body.id, {
                    todo: req.body.todo,
                    isDone: req.body.isDone,
                    hasAttachment: req.body.hasAttachment
                }, function(err, result) {
                    if(err) throw err;

                    res.send('Successfully updated !!!')
                })
            }

            else {
                var newTodo = Todo({
                    username: 'test',
                    todo: req.body.todo,
                    isDone: req.body.isDone,
                    hasAttachment: req.body.hasAttachment
                })
                newTodo.save(function(err) {
                    if(!err){
                        res.send('Successfully added !!!')
                    } 
                })
            }
        })
}