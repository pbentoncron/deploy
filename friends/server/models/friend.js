console.log('friends model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var FriendSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  birthday: Date,
},{timestamps: true});
mongoose.model('Friend', FriendSchema);