const mongoose = require('mongoose');
const Player = mongoose.model('Player');
const Staff = mongoose.model('Staff');

const playersList = async function (req, res) {
  try {
    const players = await Player.find();

    if (!players || players.length === 0) {
      return res.status(404).json({ message: "No players found" });
    }

    res.status(200).json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const staffList = async function (req, res) {
  try {
    const staff = await Staff.find();

    if (!staff || staff.length === 0) {
      return res.status(404).json({ message: "No staff found" });
    }

    res.status(200).json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  playersList,
  staffList
};
