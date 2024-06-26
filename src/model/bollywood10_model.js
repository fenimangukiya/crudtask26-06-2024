const mongoose = require('mongoose')

const bollywood_schema = mongoose.Schema({
    bollywoodmovie_name: {
        type: String,
        true: true
    },
    bollywoodmovie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const bollywood = mongoose.model('Bollywood',bollywood_schema)
module.exports = bollywood