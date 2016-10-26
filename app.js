var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/racemanager', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models = require('./models/track')(app, mongoose);
var tracksCtrl = require('./controllers/tracks');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

// API routes
var tracks = express.Router();

tracks.route('/tracks')
  .get(tracksCtrl.getTracks)
  .post(tracksCtrl.setTracks);

tracks.route('/track')
  .post(tracksCtrl.setTrack);

app.use('/populate', tracks);

// Start server
app.listen(5000, function() {
  console.log("Node server running on http://localhost:5000");
});