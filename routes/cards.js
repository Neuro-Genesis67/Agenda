const express = require('express');
const router = express.Router();




router.get('/MC_Budget', (req, res) => {
    res.render('MC_Budget');
});

router.get('/nocards', (req, res) => {
    res.send('<h1> No cards here... </h1>')
});

module.exports = router;