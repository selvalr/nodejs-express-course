const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 character']
    },

    completed: {
        type:Boolean,
        default:false,
    }

})

const Task = mongoose.model('Task', schema, 'Task');

module.exports = Task;