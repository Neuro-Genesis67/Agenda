const express = require('express');
const cardsRouter = require('./routes/cards');
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

app.use('/welcome', cardsRouter);
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('welcome.hbs');
});

app.listen(port, () => console.log(`Server listening on port `));



















// TODO
// -Integrate and test the following:
// | done | routes
// | done | hbs
// |      | redirecting
// |      | mongoose
// |      | dotenv
// |      | body-parser
//
//
