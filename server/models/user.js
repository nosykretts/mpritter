const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      select: false
    }
  },
  {
    usePushEach: true,
    timestamps: {}
  }
)

module.exports = mongoose.model('User', userSchema)
