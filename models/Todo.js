const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const now = moment();

const TodoSchema = new mongoose.Schema({
    todo: {type: String, default: ''},
    user_id: {
        type: Schema.Types.ObjectId, ref: "User"
    },
    completed: { type: Boolean, default: false},
    timestamp: {type: String, default: now.format("dddd, MMMM Do YYYY, h:mm:ss a")},
})

module.exports = mongoose.model('Todo', TodoSchema);