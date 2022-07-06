const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/User');

/*
localhost:8000/user/register
localhost:8000/user/login
localhost:8000/user/all
*/

/* 
Name API :localhost:8000/user/register
Fields : Name,EMAIL, PASSWORD
Method : post
*/ 

router.post('/register',async(req,res)=>{
    try{
        let {name,email,password} = req.body;
        // user existing or not
        let user = await User.findOne({email:email})
        if(user){
            return res.status(401).json({error:"User Already Existed"})
        }

        // encode the password

        let salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password,salt);
        user = new User({name,email,password});
        user = await user.save();
        res.status(200).json({result:"Succes", user:user});
    }catch(err){
        if (err) throw err;
        res.status(500).json({error:"Server Error"})
    }
});

/* 
Name API :localhost:8000/user/login
Fields : EMAIL, PASSWORD
Method : post
*/ 
router.post('/login',async(req,res)=>{
    //Get the data form
    let {email,password} = req.body;
    //console.log(email);
    //verify user existed or not
    let user = await User.findOne({email:email})
    console.log(user)
        /* if(user){
            res.status(401).json({error:"User Already Existed"})
        }else{
            res.status(401).json({error:"User Account not existed"});
        }
 */
        console.log(password);
        console.log(user.password);
        //verify the password
        let result = await bcrypt.compare(password, user.password);
        if(result){
            return res.status(200).json({
                "status":"login successful"
            })
        }
});

/* 
Name API :localhost:8000/user/all
Method : get
*/ 
router.get('/all',()=>{});

module.exports = router;