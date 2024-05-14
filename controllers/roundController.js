const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const roundModel = require("../models/roundModel/roundModel")


const createRound = catchAsyncErrors(async (req, res) => {
    const saveData = {
        hint,
        answer,
        round
    } = req.body
    try {
        const saveTask = await roundModel.create(saveData)
        res.status(201).json({
            success: true,
            saveTask,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
})


const fetchRound = catchAsyncErrors(async (req, res) => {

    const query = { round: req.params.round_id };
    try {
        const roundData = await roundModel.find(query)
        res.status(200).json({
            success: true,
            roundData
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }

})


const totalRound = catchAsyncErrors(async (req, res) => {
    try {
        const roundCount = await roundModel.aggregate([
            {
                $group: {
                    _id: "$round"
                }
            },
            {
                $sort: {
                    _id: 1 // Sort by the 'round' field in ascending order
                }
            }
        ])
        res.status(200).json({
            success: true,
            roundCount
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
})

const roundContorllers = {
    createRound,
    fetchRound,
    totalRound
}

module.exports = roundContorllers