const ModelTweet = require('../models/tweet')

module.exports = {
  getAll: function(req, res, next) {
    let opt = req.query.hastag ? {} : {}
    ModelTweet.find(opt).then(tweets => {
      res.status(200).json({
        message: 'tweet list',
        data: tweets
      })
    })
  },
  getOne: function(req, res, next) {},
  create: function(req, res, next) {},
  update: function(req, res, next) {},
  destroy: function(req, res, next) {}
}
