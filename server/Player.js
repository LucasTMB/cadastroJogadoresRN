const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name:String,
    country:String,
    number:String,
    picture:String,
    team:String,
    position:String
})


mongoose.model("player",PlayerSchema)