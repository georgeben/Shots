const express = require('express'),
      logger = require('morgan'),
      path = require('path'),
      expressFormidable = require('express-formidable'),
      formidable = require('formidable'),
      bodyParser = require('body-parser');

//Routes
const indexRoute = require('./routes/index');
const uploadRoute = require('./routes/upload');
const downloadRoute = require('./routes/download')

const publicPath = path.resolve(__dirname, "public");

const app = express();

app.use(logger('tiny'));

app.set("public", publicPath);

app.use(express.static(publicPath))

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', indexRoute);
app.use('/upload', uploadRoute);
app.use('/download', downloadRoute)


app.use((err, req, res, next) =>{
    res.send(`<h1>Sorry something happened</h1> ${err.message}`);
})

const server = app.listen(3000, () => console.log(`App started on port ${server.address().port}`))

