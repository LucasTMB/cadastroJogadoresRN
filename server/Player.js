const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    picture:String,
    salary:String,
    position:String
})


mongoose.model("player",PlayerSchema)