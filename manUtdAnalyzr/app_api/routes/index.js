const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/users');
const ctrlPlayers = require('../controllers/players');

router
  .route('/users/register')
  .post(ctrlUsers.usersRegister);

router
  .route('/users/login')
  .post(ctrlUsers.usersLogin);

router
  .route('/players')
  .get(ctrlPlayers.playersList);

router
  .route('/staff')
  .get(ctrlPlayers.staffList);

module.exports = router;
