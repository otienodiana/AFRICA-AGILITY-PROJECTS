const express =require('express')
const app = express()

const PORT = 5000

app.get('/home',(req,res) =>{
    res.send("home")
})

app.get('/home',(req,res) =>{
    res.send("home")
})

app.get('/about',(req,res) =>{
    res.send("about")
})

app.get('/contact me',(req,res) =>{
    res.send("contact me")
})

app.listen(PORT,() =>{
    console.log('My app is running successfully')
})