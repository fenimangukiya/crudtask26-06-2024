const mongoose = require('mongoose')

const hollywood_schema = mongoose.Schema({
    hollywoodmovie_name: {
        type: String,
        true: true
    },
    hollywoodmovie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const hollywood = mongoose.model('Hollywood',hollywood_schema)
module.exports = hollywood