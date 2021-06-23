// Author: Veda
const express= require("express");
const router = express.Router();
const Assessment= require("../model/assessmentModel");


router.get('/', (req, res )=>{
    console.log('Get request')
    res.send('Get Request')
})




router.post('/data', async(req,res) => {
    const a = new Assessment({
        questions: req.body.questions,
        correctAnswer: req.body.correctAnswer,
        givenAnswer: req.body.givenAnswer,
        score: req.body.score
    })

    try{
        const a1 =  await a.save() 
        res.json(a1)
        
    }catch(err){
        res.send('Error')
    }
})



module.exports=router;








