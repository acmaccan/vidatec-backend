const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  email: {
    type: String,
    required: [true, 'Mail is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Pass is required'],
    unique: true,
  },
});

const User = model('User', UserSchema);
module.exports = User;
