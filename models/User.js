var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
   first_name: String,
   second_name: String,
   first_lastname: String,
   second_lastname: String,
   email: String,
   roll: {
      type: String,
      enum: ['Admin', 'Editor']
   },
   username: String,
   password: String
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);