const express = require('express');
const router = express.Router();
const Member = require('./logsignmodel')

//sign up route

router.post('/signup', async (req, res) => {
   
    try {
        const { username, email, password } = req.body
        if(!req.body.username) {
            return res.status(400).json({message: 'Username is required'})
        }
       
        if(!req.body.email)  {
            return res.status(400).json({message: 'email is required'})
        }

        if(!req.body.password) {
            return res.status(400).json({message: 'password is required'})
        }

       const newUser= await Member.create({
            username,
            email,
            password
        })
        res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
    }
})

//login route

router.post('/login', async (req, res) => {
    
    try {
        const { username, password } = req.body

        await Member.findOne({username: username})
        .then(member => {
            if(member) {
                if(member.password === password) {
                    res.json({message: 'success'})
                } else {
                    res.status(401).json({message: 'Invalid password'})
                }
            } else {
                res.status(404).json({message: 'User not found'})
            }
        })
    } catch (error) {
        
    }
})

module.exports = router;