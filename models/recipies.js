const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Recipe = new Schema (
    {
      cuisineType: { type: String },
      recipie: { type: String },
      directions: { type: String }
    },
    {timestamps: true}
)

module.exports = mongoose.model('recipies', Recipe)

