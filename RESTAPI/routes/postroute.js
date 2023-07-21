const express = require('express')
const router = express.Router()

const postController = require('../controller/postController')

router.get('./api/posts',postController.indexpost)

router.post('./api/posts',postController.storepost)

// router.get('./api/posts',(req,res) =>{
//     res.send("someone liked your post")
// })

// router.post('./api/posts',(req,res) =>{
//     res.send("it should  post")
// })

module.exports = router