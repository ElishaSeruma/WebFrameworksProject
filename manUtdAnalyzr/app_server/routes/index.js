const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/users'); 
const ctrlPlayers = require('../controllers/players');


router.get('/',ctrlUsers.login);
router.get('/register', ctrlUsers.register);
router.post('/register', ctrlUsers.doRegister);
router.get('/login',ctrlUsers.login);
router.post('/login', ctrlUsers.doLogin);
router.get('/stats',ctrlPlayers.squadStats);
router.get('/stats/:playerid', ctrlPlayers.playerInfo);
module.exports = router;



