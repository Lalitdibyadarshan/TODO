var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res) {
        //seed database
        var starterTodos = [
            {
                username: "Kaizen",
                todo: "Prepare for my dreams",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "Lalit",
                todo: "rise early",
                isDone: true,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, results) {
            res.send(results)
        })
    })
}