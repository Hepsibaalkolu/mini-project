const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RegisterModel = require('./models/Register')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.post('/register', (req, res)=>{
    console.log(req.body)
    const {name, email, password} = req.body;
    RegisterModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already have an account")
        } else {
            RegisterModel.create({name: name, email: email, password: password})
            .then(result => res.json(result) )
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
})

const port = 7800;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})