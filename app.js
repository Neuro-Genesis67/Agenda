const express = require('express');
const cardsRouter = require('./routes/cards');
const port = process.env.PORT || 3000;

const app = express();
app.use('/welcome', cardsRouter);

app.get('/', (req, res) => {
    res.send('<h1> Agenda </h1>')
});

app.listen(port, () => console.log(`Server listening on port `));



















// TODO
// -Integrate and test the following:
// |      | routes
// |      | hbs
// |      | mongoose
// |      | dotenv
// |      | body-parser
//
//
