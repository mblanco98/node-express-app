var express = require('express');
var router = express.Router();
const landing = require('../controllers/landing.js')


router.get('/', landing.getLanding)

module.exports = router;
