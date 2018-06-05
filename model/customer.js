let mongoose = require('mongoose');

// Customer Schema
let customerSchema = mongoose.Schema({
  firstName:{
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  }
})

let Customer = module.exports = mongoose.model('Customer', customerSchema);