const express =require('express')
const app = express()

app.set("view engine", "ejs")

app.use(express.static('public'))

const PORT = 5000

app.get('/home',(req,res) =>{
    res.render("home")
})

app.get('/about',(req,res) =>{
    res.render("about")
})

app.get('/contacts',(req,res) =>{
    res.render("contacts")
})

app.get('/post',(req,res) =>{
    res.render("post")
})

app.listen(PORT,() =>{
    console.log(`My app is running successfully ${PORT}`)
})