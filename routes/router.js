const express = require('express');
const router = express.Router();


const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// const controller = require('../public/scripts/controller');


// __________ Routes __________

router.get('/page2', (req, res) => {
    res.render('page2.hbs');
});
//
// router.get('/nocards', (req, res) => {
//     res.send('<h1> No cards here... </h1>')
// });
// ____________________________

// POST
router.post('/testPost', urlencodedParser, (req, res) => {
    console.log("post received");
    console.log(req.body.data1);
    console.log(req.body.data2);
    // location.href = 'router/welcome2';
});




module.exports = router;