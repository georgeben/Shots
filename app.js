const express = require('express'),
      logger = require('morgan'),
      path = require('path'),
      expressFormidable = require('express-formidable'),
      formidable = require('formidable'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

//DB Connection
mongoose.connect('mongodb://localhost/Shots', {useNewUrlParser:true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('connected', () => console.log("Successfully connected to database"));
db.on('error', () => console.log("Failed to connect to db "+ err.message))

//Routes
const indexRoute = require('./routes/index');
const uploadRoute = require('./routes/upload');
const downloadRoute = require('./routes/download')

const publicPath = path.resolve(__dirname, "public");

const app = express();

app.use(logger('tiny'));
app.use(bodyParser.urlencoded({extended:false}));

app.set("public", publicPath);

app.use(express.static(publicPath));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', indexRoute);
app.use('/upload', uploadRoute);
app.use('/download', downloadRoute)

app.use((req, res, next) =>{
    return next(new Error("Page not found"))
})


app.use((err, req, res, next) =>{
    res.render("error", {
        error: err.message
    })
})

const server = app.listen(3000, () => console.log(`App started on port ${server.address().port}`))

