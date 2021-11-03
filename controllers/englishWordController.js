'use strict';
const englishWordModel = require('../models/englishWordModel');
const {validationResult} = require('express-validator');

// send some json containing words
const getSomeWords = async (req, res) => {

  const words = [
    {
      id: '1',
      word: 'Dog',
      category: 'Animals',
      translation: '狗狗',
    },
    {
      id: '2',
      word: 'Cat',
      category: 'Animals',
      translation: '猫猫',
    },
    {
      id: '3',
      word: 'Noodles',
      category: 'Food',
      translation: '面',
    },
  ];

  res.json(words);
};

// Get all words
const get_all_words = async (req, res) => {
  const words = await englishWordModel.getAllWords();
  await res.json(words);
};

// Get word by it's ID
const get_word_by_id = async (req, res) => {
  const id = req.params.wordId;
  const word = await englishWordModel.getWordById(id);
  await res.json(word);
};

const insert_single_word = async (req, res) => {

  console.log(`insert_single_word params: ${req}`);

  // Check for errors in input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Error happened in single word validation: ', errors.array());
    return res.status(400).json({errors: errors.array()});
  }

};

module.exports = {
  getSomeWords,
  get_all_words,
  get_word_by_id,
  insert_single_word,
};