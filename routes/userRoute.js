const express = require("express");
const { registerUser, updateScore, userScore, leaderBoard } = require("../controllers/userController");

const router = express.Router();
router.route("/register").post(registerUser);
router.route("/update-score").put(updateScore);
router.route("/user-score/:userid").get(userScore);
router.route("/leaderBoard").get(leaderBoard);
module.exports = router;
