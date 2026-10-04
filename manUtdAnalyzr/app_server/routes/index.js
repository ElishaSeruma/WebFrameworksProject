const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/users'); 
const ctrlPlayers = require('../controllers/players');
const crtlOthers = require('../controllers/others')

/* GET home page. */
router.get('/',ctrlUsers.login);
router.get('/register', ctrlUsers.register);
router.get('/login',ctrlUsers.login);
router.get('/stats',ctrlPlayers.squadStats);
router.get('/stats/detail',crtlOthers.statDetail);
module.exports = router;



