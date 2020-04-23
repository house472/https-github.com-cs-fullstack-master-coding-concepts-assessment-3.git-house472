let mongoose = require('mongoose');
let Schema = mongoose.Schema

//create model

let BankAccountSchema = new Schema({
    accountNumber: {type: Number, unique: true}, 
    accountType: String, 
    accountName : String,
    accountBalance : Number

},{timestamps: true}
);

module.exports = mongoose.model('bankManager', BankAccountSchema);