const mongoose = require('mongoose')
const Schema = mongoose.Schema

let tweetSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true
    },
    tags: [String]
  },
  {
    usePushEach: true,
    timestamps: {}
  }
)

module.exports = mongoose.model('Tweet', tweetSchema)
