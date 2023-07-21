require('dotenv').config();
const express = require ('express')

const postrouter = require('./routes/postroute')
const mongoose = require('mongoose')

const PORT = process.env.PORT ||5000
const app = express()


// app.get('./api/posts',(req,res) =>{
//     res.send("someone liked your post")
// })

const dbconnect = async () => {
    try{
        conn = mongoose.connect(process.env.MONGODB_URL)
        console.log('connection successful')
    }catch(error) {
        console.log(error)
    }
}

dbconnect()

app.use('./',postRouter)
app.listen(PORT,() => {
    console.log(`this server is runnig at ${PORT}`);
})