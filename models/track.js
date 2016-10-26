var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var trackSchema = new Schema({  
  name: { type: String },
  country: { type: String },
  sectors: [
    {
      length: { type: Number },
      type: {
        type: String,
        enum: ["very_slow", "slow", "normal", "fast", "very_fast"]
      }
    }
  ]
});

module.exports = mongoose.model('Track', trackSchema);