const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        const conn = mongoose.connect{}
    }catch(error){
        console.log(error)
    }
}

module.exports = connectDB