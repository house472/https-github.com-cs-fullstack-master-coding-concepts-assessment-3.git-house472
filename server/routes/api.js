let express = require('express');
let router = express.Router();
router.use(express.json());

let BankAccountCollection = require('../models/BankAccountSchema')


//test listener

router.get('/test', (req, res)=>{
    res.send('this is a test')
});

//Create account send json data
// Trying to do a create a new record and getting an error. postman thinking. test case works, but not when i try to seed or create new record. 
router.post('/', (req, res)=>{
    // res.send(`this is a create/post account ${req.params.account_number}`)
// console.log('creating data')
//     const seedData =[{

//     accountNumber: 1234, 
//     accountType: "Checking", 
//     accountName : "Charles Gordon",
//     accountBalance : 400,
// },

// {

//     accountNumber: 5678, 
//     accountType: "Savings", 
//     accountName : "Charles Gordon",
//     accountBalance : 400,
// },

// {

//     accountNumber: 9012, 
//     accountType: "Checking", 
//     accountName : "Flash Gordon",
//     accountBalance : 400,
// },

// {

//     accountNumber: 6789, 
//     accountType: "Savings", 
//     accountName : "Flash Gordon",
//     accountBalance : 400
// }

// ]
BankAccountCollection.create(req.body, (errors, results)=>{
    errors ? res.send(errors) : res.send(results)
})
});


router.get('/:add/100', (req, res)=>{
    res.send(`this is a add account`)
});

router.get('/:subtract/100/withdraw', (req, res)=>{
    res.send(`this is a subtract account`)
});

module.exports = router;