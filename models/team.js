var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var teamSchema = new Schema({  
  name: {
    type: String,
    unique: true
  },
  country: { type: String }
});

module.exports = mongoose.model('Team', teamSchema);