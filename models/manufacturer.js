var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ownerSchema = new Schema({  
  name: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model('Owner', ownerSchema);

var manufacturerSchema = new Schema({  
  owner: {
    type: Schema.ObjectId, 
    ref: 'Owner'
  },
  name: {
    type: String,
    unique: true
  },
  country: { type: String }
});

module.exports = mongoose.model('Manufacturer', manufacturerSchema);