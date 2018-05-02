const bookController = require('../../controllers/books');

const router = require('express').Router();

//    /books/:bookID

//   /books

router
  .get('/', bookController.index)
  .post('/', bookController.create)
  .get('/:bookID', bookController.show)
  .put('/:bookID', bookController.update)
  .delete('/:bookID', bookController.destroy);

module.exports = router;
