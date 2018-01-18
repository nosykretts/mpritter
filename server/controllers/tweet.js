const ModelTweet = require('../models/tweet')

module.exports = {
  getAll: function(req, res, next) {
    let opt = req.query.hastag ? {
      tags: req.query.hastag
    } : {}
    ModelTweet.find(opt)
      .sort({createdAt: 'desc'})
      .populate('creator')
      .then(tweets => {
        res.status(200).json({
          message: 'tweet list',
          data: tweets
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },
  getOne: function(req, res, next) {
    ModelTweet.findOne({
      _id: req.params.id
    })
      .populate('creator')
      .then(tweet => {
        if (!tweet) {
          res.status(404).json({
            message: 'tweet no found',
            data: tweet
          })
        } else {
          res.status(200).json({
            message: 'get one success',
            data: tweet
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },
  create: function(req, res, next) {
    let { content } = req.body
    let tags = content
      .split(' ')
      .filter(word => {
        return word[0] === '#' && word[word.length - 1] !== '#'
      })
      .map(word => word.substr(1))
    console.log(req.userId)
    ModelTweet.create({
      creator: req.userId,
      content,
      tags
    })
      .then(tweet => {
        res.status(200).json({
          message: 'create success',
          data: tweet
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },
  update: function(req, res, next) {},
  destroy: function(req, res, next) {
    ModelTweet.findOneAndRemove({
      _id: req.params.id
    }).then(tweet => {
      if (!tweet) {
        res.status(404).json({
          message: 'tweet not found',
          data: tweet
        })
      } else {
        res.status(200).json({
          message: 'delete success',
          data: {
            _id: tweet._id
          }
        })
      }
    })
  }
}
