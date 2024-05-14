const express = require("express");
const roundContorllers = require("../controllers/roundController")
const router = express.Router();

router.route("/create").post(roundContorllers.createRound);
router.route("/fetch/:round_id").get(roundContorllers.fetchRound);
router.route("/total-round").get(roundContorllers.totalRound);


module.exports = router