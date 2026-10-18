const mongoose = require('mongoose');
const User = mongoose.model('User');

const usersRegister = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});
};

const usersLogin = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});
};

module.exports = {
  usersRegister,
  usersLogin
};
