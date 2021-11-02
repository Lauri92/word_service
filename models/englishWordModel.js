'use strict';
const pool = require('../database/database');
const promisePool = pool.promise();

// Returns all englishWords
const getAllWords = async () => {
  try {
    const [rows] = await promisePool.execute(
        `SELECT * FROM english_word`);
    return rows;
  } catch (e) {
    console.error('englishWordModel error getAllWords: ', e.message);
  }
};

// Returns word with id
const getWordById = async (id) => {
  try {
    const [rows] = await promisePool.execute(
        `SELECT * FROM english_word
             WHERE english_word.id = ?;`, [id]);
    return rows;
  } catch (e) {
    console.error('englishWordModel error getWordById: ', e.message);
  }
};

const postSingleWord = async (req) => {
  try {
    const [rows] = await promisePool.execute(
        'INSERT INTO english_word (word, translation)' +
        'VALUES (?, ?)',
        [
          req.body.word,
          req.body.translation,
        ]);
    console.log('englishWordModel postSingleWord: ', rows);
    return rows;
  } catch (e) {
    console.log('englishWordModel postSingleWord error: ', e);
    return 0;
  }
};

module.exports = {
  getAllWords,
  getWordById,
};