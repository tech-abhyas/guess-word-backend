const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel/userModel");

// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { username, round } = req.body;
  console.log(username, round)
  try {
    let user = await User.create({
      username,
      round
    });

    res.status(201).json({
      success: true,
      user
    });
  } catch (error) {
    res.status(403).send({
      success: false,
      message: error.message
    })
  }
});

exports.updateScore = catchAsyncErrors(async (req, res, next) => {
  const { score, user } = req.body;
  const query = { _id: user }
  const updateData = { score }

  try {
    let user = await User.findByIdAndUpdate(query, updateData, { new: true });
    res.status(201).json({
      success: true,
      user
    });
  } catch (error) {
    res.status(403).send({
      success: false,
      message: error.message
    })
  }
});


exports.userScore = catchAsyncErrors(async (req, res, next) => {
  const query = { _id: req.params.userid }
  try {
    let user = await User.findById(query);
    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    res.status(403).send({
      success: false,
      message: error.message
    })
  }
});


exports.leaderBoard = catchAsyncErrors(async (req, res, next) => {
  try {
    let score = await User.find({}).sort({ score: -1 }).limit(3)

    res.status(200).json({
      success: true,
      score
    });
  } catch (error) {
    res.status(403).send({
      success: false,
      message: error.message
    })
  }
});



