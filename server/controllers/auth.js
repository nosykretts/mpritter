const ModelUser = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = {
  signin: function(req, res, next) {
    ModelUser.findOne({
      email: req.body.email
    })
      .select('+password')
      .then(user => {
        if (user) {
          if (req.body.password == user.password) {
            let payload = {
              userId: user._id,
              username: user.username
            }
            jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
              if (err) return next(boom.boomify(err))
              res.status(200).json({
                message: 'Signin success',
                data: { token, userId: user._id }
              })
            })
          } else {
            res.status(403).json({
              message: 'password not match'
            })
          }
        } else {
          res.status(404).json({
            message: 'email not found'
          })
        }
      })
  },
  signup: function(req, res, next) {
    let body = req.body
    ModelUser.findOne({ email: req.body.email }).then(user => {
      if (user) {
        res.status(200).json({
          message: 'email already exist'
        })
      } else {
        if (body.username.length === 0 || body.password.length == 0) {
          res.status(400).json({
            message: 'username and password must not empty'
          })
        } else {
          ModelUser.create(req.body).then(user => {
            res.status(200).json({
              message: 'Signup Success'
            })
          })
        }
      }
    })
  }
}
