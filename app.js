const express = require('express'),
      logger = require('morgan'),
      path = require('path'),
      expressFormidable = require('express-formidable');

//Routes
const indexRoute = require('./routes/index');
const uploadRoute = require('./routes/upload');

const app = express();

app.use(logger('tiny'));

app.use(expressFormidable());

app.set("public", path.resolve(__dirname, "public"));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', indexRoute);
app.use('/upload', uploadRoute );

app.use((err, req, res, next) =>{
    res.send("<h1>Sorry something happened</h1>");
})

const server = app.listen(3000, () => console.log(`App started on port ${server.address().port}`))

