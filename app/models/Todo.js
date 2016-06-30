var mongoose = require('mongoose');

//Creating the schema
var TodoSchema = mongoose.Schema(
{
  text: {type: String, default: ''}
},
{
  timestamps: true
});

module.exports = mongoose.model('Todo',TodoSchema);
