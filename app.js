var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

// Connection to DB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/racemanager', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models
var trackModel = require('./models/track')(app, mongoose);
var teamModel = require('./models/team')(app, mongoose);
var driverModel = require('./models/driver')(app, mongoose);
var manufacturerModel = require('./models/manufacturer')(app, mongoose);
var categoryModel = require('./models/category')(app, mongoose);
var seasonModel = require('./models/season')(app, mongoose);

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

// Import Routes
var trackRouter = require('./routes/track');
var categoryRouter = require('./routes/category');

// API Routes
app.use('/track', trackRouter);
app.use('/category', categoryRouter);

// Start Server
app.listen(5000, function() {
  console.log("Node server running on http://localhost:5000");
});