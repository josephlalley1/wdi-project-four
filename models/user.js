const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String
});

userSchema.pre('save', function() {
  this.password = bcrypt.hashSync(this.password, 8);
});

userSchema.methods.validatePassword = function(attemptedPassword) {
  return bcrypt.compareSync(attemptedPassword, this.password);
};

userSchema.virtual('transactionsCreated', {
  ref: 'Trades',
  localField: '_id',
  foreignField: 'transactionAddedBy'
});

userSchema.set('toJSON', {
  virtuals: true
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
