const express = require('express');
const router = express.Router();
// const ctrlMain = require('../controllers/main');

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others')
/* GET home page. */
router.get('/', ctrlMain.index);
module.exports = router;