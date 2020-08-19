const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    option : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true
    }

});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

