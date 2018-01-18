const express = require('express');
const router = express.Router();
const authentication = require('../middlewares/authentication')
const {
  create,
  destroy,
  getAll,
  getOne,
} = require('../controllers/tweet')

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', authentication, create)
router.delete('/:id', authentication, destroy)

module.exports = router