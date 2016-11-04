// Module dependencies
var express = require("express"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose'),
    path = require('path');

var app = module.exports = express();

// Connection to DB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/racemanager', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.set('port', process.env.PORT || 5000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// Import Models
var trackModel = require('./models/track')(app, mongoose),
    teamModel = require('./models/team')(app, mongoose),
    driverModel = require('./models/driver')(app, mongoose),
    manufacturerModel = require('./models/manufacturer')(app, mongoose),
    categoryModel = require('./models/category')(app, mongoose),
    seasonModel = require('./models/season')(app, mongoose);

// Import Routes
var trackRouter = require('./routes/track'),
    categoryRouter = require('./routes/category'),
    resultRouter = require('./routes/result'),
    frontRouter = require('./routes/front');

// Data Routes
app.use('/data/track', trackRouter);
app.use('/data/category', categoryRouter);
app.use('/data/result', resultRouter);

// Views Routes
app.use("/", frontRouter);

// Start Server
app.listen(app.get('port'), function() {
  console.log("Node server running on http://localhost:" + app.get('port'));
});