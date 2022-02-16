const express = require('express');
const hb = require('express-handlebars');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello there');
})


app.listen(3000)