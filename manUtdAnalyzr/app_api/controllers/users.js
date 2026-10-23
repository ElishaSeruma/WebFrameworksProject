const mongoose = require('mongoose');
const User = mongoose.model('User');

const usersRegister = async function (req, res) {
  try {
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      favouritePlayer: req.body.favouritePlayer,
      username: req.body.username,
      password: req.body.password
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

const usersLogin = async function (req, res) {
  try {
    const users = await User.find({ username: req.body.username });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    if (users[0].password !== req.body.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    res.status(200).json(users[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  usersRegister,
  usersLogin
};
