const express = require('express');
const keyboardController = require('./../controller/keyboardController');

const router = express.Router();

router
  .route('/')
  .get(keyboardController.getAllKeyboard)
  .post(keyboardController.createKeyboard);
router
  .route('/:id')
  .get(keyboardController.getOneKeyboard)
  .delete(keyboardController.deleteKeyboard);

module.exports = router;
