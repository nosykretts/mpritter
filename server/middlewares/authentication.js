const jwt = require('jsonwebtoken')


module.exports = function(req, res, next) {
  console.log('kesinis')
  const bearerToken = req.headers.authorization
  const token =
    bearerToken && bearerToken.split(' ')[1] ? bearerToken.split(' ')[1] : undefined
  if(!token){
    return res.status(403).json({
      message: 'token required'
    })
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        message: 'invalid token'
      })
    } else {
      req.decoded = decoded
      req.userId = decoded.userId
      req.username = decoded.usernames
      next()
    }
  })
}