const ModelUser = require('../models/user')

module.exports = {
  signin: function (req,res,next) {
    ModelUser.findOne({
      username : req.body.username
    }).then(user => {
      if(user){
        if(req.body.password === user.password)
      }else{

      }
    })
  },
  signup: function (req,res,next) {
    
  },
}

