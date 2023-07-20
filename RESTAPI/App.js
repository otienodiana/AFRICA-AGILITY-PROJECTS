require('dotenv').config();
const express = require ('express')

const PORT = process.env.PORT ||5000
const app = express()
app.get('./api/posts',(req,res) =>{
    res.send("someone liked your post")
})

app.listen(PORT,() => {
    console.log(`this server is runnig at ${PORT}`);
})