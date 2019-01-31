const User = require('../models/User');
const Todo = require('../models/Todo');

module.exports = {

    getTodosById: (id) => {

        return new Promise((resolve, reject) => {

            User.findById({_id: id}, 'todos')
                .populate('todos', '-user_id -__v')
                .exec( (err, user) => {
                    //console.log(user)
                    if (err) {
                        reject(err)
                    } else {
                        resolve(user)
                    }

                })



        });

    }, 

    createTodo: (params) => {

        return new Promise((resolve, reject) => {

            User.findById(params.id)
                .then(user => {

                    let newTodo = new Todo({
                        todo: params.todo, 
                        user_id: params.id
                    });

                    newTodo
                        .save()
                        .then(savedTodo => {
                        
                            user.todos.push(savedTodo);

                            user.save()
                                .then(user => {
                                    resolve(savedTodo)
                                })
                                .catch(err => {
                                    reject(err)
                                })



                        })
                        .catch(err => {
                            reject(err);
                        })

                })
                .catch(err => {
                    reject(err)
                })

        });

    }


}