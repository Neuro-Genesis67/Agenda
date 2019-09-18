const express          = require('express');
const router           = express.Router();
const bodyParser       = require('body-parser');
const pageNavigation   = require('../models/PageNavigation'); // Renamend from PageNavigation
const urlencodedParser = bodyParser.urlencoded({ extended: false });



// --- GET --- //
router.get('/page2', (req, res) => {
    console.log("you hit page 2");
    res.render('page2.hbs', {
        hbs_currPageNum: 22,
        hbs_prevPageNum: 222
    });
});

router.get('/page3', (req, res) => {
    console.log("you hit page 3");
    res.render('page3.hbs', {
        hbs_currPageNum: 33,
        hbs_prevPageNum: 333
    });
});

// --- POST --- //
router.post('/posts', urlencodedParser, (req, res) => {
    // Receive data from req.body
    // console.log(req.body.currPageValue);
    // console.log(req.body.prevPageValue);
    res.redirect("page2");
});








module.exports = router;



































