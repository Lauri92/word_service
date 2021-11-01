'use strict';

const express = require('express');
const router = express.Router();
const englishWordController = require('../controllers/englishWordController');

// get comments of media
router.route('/').get(englishWordController.get_all_words);

module.exports = router;