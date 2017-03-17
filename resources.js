const express = require('express');

const router = express.Router();


router.use('/restaurants', require('./controllers/restaurants'));

module.exports = router;
