const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/users');
const ctrlPlayers = require('../controllers/players');

// users
router
  .route('/users/register')
  .post(ctrlUsers.usersRegister);

router
  .route('/users/login')
  .post(ctrlUsers.usersLogin);

// players
router
  .route('/players')
  .get(ctrlPlayers.playersList)
  .post(ctrlPlayers.playersCreate);

router
  .route('/players/:playerid')
  .get(ctrlPlayers.playersReadOne)
  .put(ctrlPlayers.playersUpdateOne)
  .delete(ctrlPlayers.playersDeleteOne);

// staff
router
  .route('/staff')
  .get(ctrlPlayers.staffList)
  .post(ctrlPlayers.staffCreate);

router
  .route('/staff/:staffid')
  .get(ctrlPlayers.staffReadOne)
  .put(ctrlPlayers.staffUpdateOne)
  .delete(ctrlPlayers.staffDeleteOne);

module.exports = router;
