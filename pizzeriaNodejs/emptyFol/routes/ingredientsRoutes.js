const ingredientsModelMongoose = require('../model/ingredientsModel')

const {Router} = require('express');  //
const router = Router();
router.get('/ingredients', async (req,res)=>{
    const ingredients = await ingredientsModelMongoose.find()
    res.json(ingredients)

}) 

module.exports = router;
