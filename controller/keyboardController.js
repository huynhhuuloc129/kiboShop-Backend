const Keyboard = require('./../models/keyboards');

exports.getAllKeyboard = async (req, res) => {
  try {
    const keyboards = await Keyboard.find();

    res.status(200).json({
      status: 'success',
      total: keyboards.length,
      data: {
        keyboards,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getOneKeyboard = async (req, res) => {
  try {
    const keyboard = await Keyboard.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        keyboard,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.createKeyboard = async (req, res) => {
  try {
    const newKeyboard = await Keyboard.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        keyboard: newKeyboard,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteKeyboard = async (req, res) => {
  try {
    await Keyboard.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      message: 'delete successfull'
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
