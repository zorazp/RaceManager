var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var driverSchema = new Schema({  
  name: { type: String },
  surname: { type: String },
  country: { type: String },
  birthdate: { type: Date },
  average: { type: Number },
  team: {
    type: Schema.ObjectId,
    ref: 'Team'
  }
});

module.exports = mongoose.model('Driver', driverSchema);