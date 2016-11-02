var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var categorySchema = new Schema({  
  name: {
    type: String,
    unique: true
  },
  average_speed: { type: Number },
  team_drivers: { type: Number }
});

module.exports = mongoose.model('Category', categorySchema);

var powerUnitSchema = new Schema({  
  category: {
    type: Schema.ObjectId,
    ref: 'Category'
  },
  manufacturer: {
    type: Schema.ObjectId,
    ref: 'Manufacturer',
    unique: true
  },
  development: { type: Number }
});

module.exports = mongoose.model('PowerUnit', powerUnitSchema);

var constructorSchema = new Schema({  
  category: {
    type: Schema.ObjectId,
    ref: 'Category'
  },
  team: {
    type: Schema.ObjectId,
    ref: 'Team',
    unique: true
  },
  power_unit: {
    type: Schema.ObjectId,
    ref: 'PowerUnit'
  },
  development: { type: Number },
  drivers: [
    {
      type: Schema.ObjectId,
      ref: 'Driver'
    }
  ]
});

module.exports = mongoose.model('Constructor', constructorSchema);