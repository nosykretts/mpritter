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
    email: {
      type: String,
      required: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    profileUrl: {
      type: String,
      default: 'https://ui-avatars.com/api/?name=John+Doe'
    }
  },
  {
    usePushEach: true,
    timestamps: {}
  }
)

module.exports = mongoose.model('User', userSchema)
