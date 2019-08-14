const express = require('express');
const router = express.Router();




router.get('/2__MC_Budget', (req, res) => {
    res.render('2__MC_Budget');
});

router.get('/nocards', (req, res) => {
    res.send('<h1> No cards here... </h1>')
});

module.exports = router;