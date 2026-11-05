const mongoose = require('mongoose');
const Player = mongoose.model('Player');
const Staff = mongoose.model('Staff');

/* ---------- players ---------- */

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

const playersCreate = async function (req, res) {
  try {
    const player = await Player.create({
      number: req.body.number,
      name: req.body.name,
      position: req.body.position,
      age: req.body.age,
      flag: req.body.flag,
      photo: req.body.photo,
      stats: req.body.stats
    });
    res.status(201).json(player);
  } catch (err) {
    res.status(400).json(err);
  }
};

const playersReadOne = async function (req, res) {
  if (!req.params || !req.params.playerid) {
    return res.status(404).json({ message: "No playerid in request" });
  }
  try {
    const player = await Player.findById(req.params.playerid);

    if (!player) {
      return res.status(404).json({ message: "playerid not found" });
    }

    res.status(200).json(player);
  } catch (err) {
    res.status(404).json(err);
  }
};

const playersUpdateOne = async function (req, res) {
  if (!req.params.playerid) {
    return res.status(404).json({ message: "Not found, playerid is required" });
  }
  try {
    const player = await Player.findById(req.params.playerid);

    if (!player) {
      return res.status(404).json({ message: "playerid not found" });
    }

    player.number = req.body.number;
    player.name = req.body.name;
    player.position = req.body.position;
    player.age = req.body.age;
    player.flag = req.body.flag;
    player.photo = req.body.photo;
    player.stats = req.body.stats;

    const updatedPlayer = await player.save();
    res.status(200).json(updatedPlayer);
  } catch (err) {
    res.status(400).json(err);
  }
};

/* ---------- staff ---------- */

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

const staffCreate = async function (req, res) {
  try {
    const member = await Staff.create({
      name: req.body.name,
      role: req.body.role,
      flag: req.body.flag,
      photo: req.body.photo
    });
    res.status(201).json(member);
  } catch (err) {
    res.status(400).json(err);
  }
};

const staffReadOne = async function (req, res) {
  if (!req.params || !req.params.staffid) {
    return res.status(404).json({ message: "No staffid in request" });
  }
  try {
    const member = await Staff.findById(req.params.staffid);

    if (!member) {
      return res.status(404).json({ message: "staffid not found" });
    }

    res.status(200).json(member);
  } catch (err) {
    res.status(404).json(err);
  }
};

const staffUpdateOne = async function (req, res) {
  if (!req.params.staffid) {
    return res.status(404).json({ message: "Not found, staffid is required" });
  }
  try {
    const member = await Staff.findById(req.params.staffid);

    if (!member) {
      return res.status(404).json({ message: "staffid not found" });
    }

    member.name = req.body.name;
    member.role = req.body.role;
    member.flag = req.body.flag;
    member.photo = req.body.photo;

    const updatedMember = await member.save();
    res.status(200).json(updatedMember);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  playersList,
  playersCreate,
  playersReadOne,
  playersUpdateOne,
  staffList,
  staffCreate,
  staffReadOne,
  staffUpdateOne
};
