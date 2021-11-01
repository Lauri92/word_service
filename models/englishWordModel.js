'use strict';
const pool = require('../database/database');
const promisePool = pool.promise();

// Returns all comments associated with certain pic
const getAllWords = async () => {
  try {
    const [rows] = await promisePool.execute(
        `SELECT * FROM english_word`);
    return rows;
  } catch (e) {
    console.error('commentModel getCommentById: ', e.message);
  }
};

module.exports = {
  getAllWords,
};