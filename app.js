const express = require('express');
const app     = express();
const hbs     = require('hbs');
const path    = require('path');
// const bodyParser = require('body-parser');
const port    = process.env.PORT || 3000;
const router  = require('./routes/router'); // unsure

// require('dotenv/config'); // Unsure

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));
// app.use(bodyParser());

app.use('/router', router);

app.get('/', (req, res) => {
    res.render('welcome.hbs');
});

app.post("/send", function(req, res){
    console.log(req.body);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));












