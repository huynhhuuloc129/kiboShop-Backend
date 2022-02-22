const mongoose = require('mongoose');

const keyboardSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Model: {
    type: String,
    required: true,
  },
  Switch: {
    type: String,
    required: true,
  },
  Hotswap: {
    type: String,
    required: true,
  },
  Connect: {
    type: Array,
    required: true,
  },
  Keycap: {
    type: String,
    required: true,
  },
  Profile: {
    type: String,
    required: true,
  },
  Type: {
    type: Array,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Size: {
    type: String,
    required: true,
  },
  Weight: {
    type: String,
    required: true,
  },
});

const Keyboard = mongoose.model('Keyboard', keyboardSchema);

module.exports = Keyboard;
