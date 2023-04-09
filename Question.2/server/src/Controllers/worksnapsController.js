const express = require;
const mongoose = require("mongoose");
const WorksnapsTimeEntryModel = require("../models/worksnapsModel");
const StudentModel = require("../models/studentModel");

//=========================  Post Api ========================
const createWorksnaps = async function (req, res) {
  try {
    let data = req.body;
    let savedata = await WorksnapsTimeEntryModel.create(data);
    return res.status(201).json(savedata);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

//=========================== Get showTimeEntries ==========================

const showTimeEntries = async function (req, res) {
  try {
    // Get all students from the database
    const students = await StudentModel.find();

    // Loop through each student
    for (const student of students) {
      console.log(`Time entries for student ${student.displayName}:`);

      // Find all time entries that belong to the current student
      const timeEntries = await WorksnapsTimeEntryModel.find({
        student: student._id,
      });


      //  Loop through each time entry and print its details

      for (const timeEntry of timeEntries) {
        console.log(
          `- ${timeEntry.timeEntries.startTime} - ${timeEntry.timeEntries.endTime}`
        );
      }

    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

module.exports = { createWorksnaps, showTimeEntries };

