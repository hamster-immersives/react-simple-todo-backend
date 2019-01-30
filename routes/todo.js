var express = require('express');
var router = express.Router();
var todoController = require('../controllers/todoController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getalltodos/:id', function(req, res) {
    
    todoController
        .getTodosById(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })

});

router.post('/createtodo', function(req, res) {
    todoController
        .createTodo(req.body)
        .then( result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router;
