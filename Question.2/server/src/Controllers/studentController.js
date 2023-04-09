const express =require
const mongoose = require("mongoose")
const studentModel = require("../models/studentModel")


// Post Api
const createStudent = async function (req, res) {
  try {
    let data = req.body;

    let savedata = await studentModel.create(data);
    return res.status(201).json(savedata);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

module.exports = { createStudent };