const express = require('express');
const router = express.Router();
const {
  create,
  destroy,
  getAll,
  getOne,
  update
} = require('../controllers/tweet')

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports = router