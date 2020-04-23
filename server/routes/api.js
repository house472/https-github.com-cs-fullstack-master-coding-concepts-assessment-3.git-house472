let express = require('express');
let router = express.Router();
router.use(express.json());

let BankAccountCollection = require('../models/BankAccountSchema')


//test listener

router.get('/test', (req, res)=>{
    res.send('this is a test')
});

//Create account send json data

router.post('/', (req, res)=>{
    res.send(`this is a create/post account`)

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