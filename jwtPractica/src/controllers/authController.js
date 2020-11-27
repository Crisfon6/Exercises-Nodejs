const { Router } = require('express');
const router = Router();


const User = require('../models/User')
const jwt= require('jsonwebtoken');

const config = require('../config')

router.get('/me',async (req,res)=>{
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(401).json({
            auth:false,
            message: "No token provided"
        })
    }

    const decoded = await jwt.verify(token,config.secret)
    console.log(decoded);
    const user = await User.findById(decoded.id,{password:0})
    console.log(user);
    
    if(!user) return res.status(404).send("No user found")
    else{

        console.log(user);
        res.json(user);
    }
    
})


router.post('/signup',  async (req, res) => {
    const {username,email,password}  = req.body;
  
    const user = new User({
        username: username,
        email: email,
        password: password
    })
    user.encryptPassword(user.password).then( async (result) => {
        user.password = result;
        console.log(user);
        await user.save();
       const token =  jwt.sign({id: user._id},config.secret,{
            expiresIn: 60*60*24
        })
    
    
        res.json({message:"recived",token})
    }).catch((err) => {
        console.log("MIRAR ", err);
        
    });
  
    
})
router.post('/signin',async (req,res)=>{
    const user =await User.find({})
    res.json(user)
    res.json('signin')
})

module.exports = router;