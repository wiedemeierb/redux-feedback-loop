const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    const feedbackToAdd = req.body;
    let sqlText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
                      VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [feedbackToAdd.feelingsReducer, feedbackToAdd.understandingReducer, feedbackToAdd.supportedReducer, feedbackToAdd.commentsReducer])
        .then((result) => {
            console.log('feedback added:', feedbackToAdd);
            res.sendStatus(201);
        }).catch((err) => {
            console.log('POST error', err);
            res.sendStatus(500);
        })
})

module.exports = router
