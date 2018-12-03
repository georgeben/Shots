const express = require('express'),
      logger = require('morgan'),
      path = require('path');

//Routes
const indexRoute = require('./routes/index');

const app = express();

app.use(logger('tiny'));

app.set("public", path.resolve(__dirname, "public"));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', indexRoute);

app.use((err, req, res, next) =>{
    res.send("<h1>Sorry something happened</h1>");
})

const server = app.listen(3000, () => console.log(`App started on port ${server.address().port}`))

