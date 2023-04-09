const express = require("express");
const studentController = require("./Controllers/studentController");
const worksnapsController =require("./Controllers/worksnapsController")
const router = express.Router();

// Post Api createStudent
router.post("/student", studentController.createStudent);

// Post Api createWorksnaps
router.post("/worksnaps", worksnapsController.createWorksnaps);

// Get Api showTimeEntries
router.get("/showTime", worksnapsController.showTimeEntries);


module.exports = router;