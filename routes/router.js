const express          = require('express');
const router           = express.Router();
const bodyParser       = require('body-parser');
const pageNavigation   = require('../models/PageNavigation');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const pages = [
    "0_Welcome",
    "1_HowWasYourDay",
    "2_HowAreYouFeeling"
];

let previousPage;
let nextPage;


// --- GET --- //
router.get('/0_Welcome', (req, res) => {
    res.render('0_Welcome.hbs', {
        currentPage:  nextPage,
        previousPage: previousPage
    });
});

router.get('/1_HowWasYourDay', (req, res) => {
    res.render('1_HowWasYourDay.hbs', {
        currentPage:  nextPage,
        previousPage: previousPage
    });
});


// --- POST --- //
router.post('/posts', urlencodedParser, (req, res) => {
    console.log("/posts...");
    previousPage = req.body.form_previousPage;
    nextPage     = req.body.form_nextPage;


    //Save some data to mongoDB here

    res.redirect(pages[nextPage]);
});








module.exports = router;



































