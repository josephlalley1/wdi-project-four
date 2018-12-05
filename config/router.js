const router = require('express').Router();
const transactions = require('../controllers/transactionsController');
const authController = require('../controllers/authController');

router.route('/transactions')
  .get(transactions.index)
  .post(transactions.create);

router.route('/transactions/:id')
  .get(transactions.show)
  .put(transactions.update)
  .delete(transactions.delete);

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
