const { Schema, model } = require('mongoose');
const User = require('./User');

const TaskSchema = Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    required: true,
  },
  fromUser: [{
    type: Schema.Types.ObjectId,
    ref: User,
  }],
});

const Task = model('Task', TaskSchema);
module.exports = Task;
