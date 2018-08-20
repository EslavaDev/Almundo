let mongoose = require('mongoose');
let Schema = mongoose.Schema;


const HotelsSchema = Schema({
  _id:String,
  name:String,
  stars:Number,
  price:Number,
  image:String,
  amenities:[String],
  createdAt: {
    type: String,
    default: new Date
  }
});


module.exports = mongoose.model('Hotels', HotelsSchema );
