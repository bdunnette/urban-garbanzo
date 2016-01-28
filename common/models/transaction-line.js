module.exports = function(TransactionLine) {
  TransactionLine.validatesPresenceOf('_product', 'transactionId', {
    message: 'Cannot be blank'
  });
};
