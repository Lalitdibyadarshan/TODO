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
}