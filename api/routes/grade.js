const express = require('express');  //import express
const router = express.Router();  //use express method router to create routes to this API

//defining a GET method to this API with a request and sending a response
router.get('/:score', (req, res, next)=>{
    const score = req.params.score; //storing the value passed in the parameters
    var grade;
    //logic to calculate grade
    if(score>=70)
        grade="Pass";
    else
        grade="Fail";
    
    //sending json response with the value of grade
    res.status(200).json({
        grade: grade
    });
})
module.exports = router;