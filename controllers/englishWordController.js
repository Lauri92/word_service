'use strict';
const englishWordModel = require('../models/englishWordModel');

// send some json
const getSomeWords = async (req, res) => {

  const words = [
    {
      id: "1",
      word: "Dog",
      category: "Animals",
      translation: "狗狗",
    },
    {
      id: "2",
      word: "Cat",
      category: "Animals",
      translation: "猫猫",
    },
    {
      id: "3",
      word: "Noodles",
      category: "Food",
      translation: "面",
    }
  ]

  res.json(words);
};

// Get all comments of a media
const get_all_words = async (req, res) => {

  const words = await englishWordModel.getAllWords()

  await res.json(words);
};

module.exports = {
  getSomeWords,
  get_all_words
};