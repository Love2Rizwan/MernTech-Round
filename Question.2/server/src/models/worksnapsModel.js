const mongoose = require("mongoose");

// Define the models based on the given schemas:

const WorksnapsTimeEntry = new mongoose.Schema({
  student: {
    type: mongoose.Schema.ObjectId,
    ref: "Student",
    required: true
  },
  timeEntries: {
    type: Object,
  },
});



module.exports = mongoose.model("Worksnaps", WorksnapsTimeEntry);
