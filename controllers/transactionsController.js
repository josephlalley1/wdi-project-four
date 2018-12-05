const Transaction = require('../models/transaction');

function indexRoute(req, res) {
  Transaction
    .find()
    .then(transactions => {
      res.json(transactions);
    });
}

function showRoute(req,res) {
  Transaction
    .findById(req.params.id)
    .then(transaction => {
      res.json(transaction);
    });
}

function createRoute(req, res, next) {
  Transaction
    .create(req.body)
    .then(transaction => res.status(201).json(transaction))
    .catch(next);
}

function updateRoute(req, res, next) {
  Transaction.findById(req.params.id)
    .then(transaction => transaction.set(req.body))
    .then(transaction => transaction.save())
    .then(transaction => res.json(transaction))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Transaction.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
