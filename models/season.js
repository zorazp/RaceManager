var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var seasonSchema = new Schema({  
  category: {
    type: Schema.ObjectId,
    ref: 'Category'
  },
  year: { type: Number },
  races: [
    {
      laps: { type: Number },
      track: {
        type: Schema.ObjectId,
        ref: 'Track'
      },
      finished: false
    }
  ]
});

module.exports = mongoose.model('Season', seasonSchema);

var resultSchema = new Schema({  
  category: {
    type: Schema.ObjectId,
    ref: 'Category'
  },
  season: {
    type: Schema.ObjectId,
    ref: 'Season'
  },
  track: {
    type: Schema.ObjectId,
    ref: 'Track'
  },
  laps: { type: Number },
  constructors: [
    {
      name: { type: String },
      manufacturer: {
        type: Schema.ObjectId,
        ref: 'Manufacturer'
      },
      drivers: [
        {
          type: Schema.ObjectId,
          ref: 'Driver'
        }
      ],
    }
  ],
  race: { type: Object }
});

module.exports = mongoose.model('Result', resultSchema);
