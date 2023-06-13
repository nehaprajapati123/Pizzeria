const modelMongoose = require('../model/pizzaModel')

const {Router} = require('express');
const router = Router();
router.get('/pizza', async (req,res)=>{
    const pizza = await modelMongoose.find()
    res.json(pizza)
}) 

module.exports = router;
