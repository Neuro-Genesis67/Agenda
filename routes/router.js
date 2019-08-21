const express = require('express');
const router = express.Router();
// const controller = require('../public/scripts/controller');


// __________ Routes __________

router.get('/welcome2', (req, res) => {
    res.render('welcome2.hbs');
});
//
// router.get('/nocards', (req, res) => {
//     res.send('<h1> No cards here... </h1>')
// });
// ____________________________





module.exports = router;