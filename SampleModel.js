const mongoose = require("mongoose");
const { Schema } = require("mongoose");


const sampleSchema = mongoose.Schema({
     name: {
          type: String
     },
     email: {
          type: String,
          required: true
     },
     password: {
          type: String,
          required: true
     },
     date: {
          type: Date,
          date: Date.now
     }
});



const Sample = mongoose.model("Sample Shemas", sampleSchema);

module.exports = { Sample };