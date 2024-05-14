const express = require("express")
require("dotenv").config()
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const errorMiddleware = require("./middleware/error")


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: ['http://localhost:3001', 'http://localhost:3000'], credentials: true }));

// Route Imports
const userRoute = require("./routes/userRoute")
const roundRoute = require("./routes/roundRoute")


app.use("/api/v1/user", userRoute)
app.use("/api/v1/round", roundRoute)


app.get("*", (req, res) => {
  res.send("Not Authorized")
})

// Middleware for Errors
app.use(errorMiddleware)
module.exports = app
