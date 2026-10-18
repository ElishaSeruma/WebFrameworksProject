const mongoose = require('mongoose');
const Player = mongoose.model('Player');
const Staff = mongoose.model('Staff');

const playersList = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});
};

const staffList = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});
};

module.exports = {
  playersList,
  staffList
};
