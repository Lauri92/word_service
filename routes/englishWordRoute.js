'use strict';

const express = require('express');
const router = express.Router();
const englishWordController = require('../controllers/englishWordController');

// get comments of media
router.route('/').get(englishWordController.getSomeWords);
router.route('/').post(englishWordController.insert_single_word);

router.route('/:wordId').get(englishWordController.get_word_by_id);

module.exports = router;