const mongoose = require("mongoose");
const heroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  power: {
    type: String,
    unique: true,
  },
 
  imageUrl: {
    type: String,
    unique: true,
  },
  
});

module.exports = mongoose.model("Hero", heroSchema);