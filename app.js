const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

module.exports = app;

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static('public'));

const server = app.listen(9001, function(){
  console.log("It's over 9000!");
});

app.get('/', function(req, res, next) {
    res.send("Hello!");
});