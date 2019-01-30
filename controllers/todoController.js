const User = require('../models/User');
const Todo = require('../models/Todo');

module.exports = {

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
                        .then(saveTodo => {

                            resolve(saveTodo)

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