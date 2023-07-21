


const indexpost = (req,res) =>{
    res.send("it should  post")
}

const storepost = (req,res) =>{
    res.send('should be storing the post')
}

module.exports = (indexpost,storepost)