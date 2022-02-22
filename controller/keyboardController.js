const Keyboard = require('./../models/keyboards');

exports.getAllKeyboard = async (req, res) => {
  try {
    // BUILD QUERY
    // 1) Filtering
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'field'];
    excludedFields.forEach((el) => delete queryObj[el]);

    // 2) Advanced filtering

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b{gte|gt|lte|lt}\b/g, (match) => `$${match}`);
    console.log(JSON.parse(queryStr));

    const query = Keyboard.find(JSON.parse(queryStr));
    // EXECUTE QUERY
    const keyboards = await query;
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
      message: 'delete successfull',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
