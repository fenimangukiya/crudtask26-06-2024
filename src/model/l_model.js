const mongoose = require('mongoose')

const l_schema = mongoose.Schema({
    l_movie_name: {
        type: String,
        true: true
    },
    l_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const l = mongoose.model("L",l_schema)
module.exports = l




