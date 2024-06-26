const mongoose = require('mongoose')

const i_schema = mongoose.Schema({
    i_movie_name: {
        type: String,
        true: true
    },
    i_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const i = mongoose.model("I",i_schema)
module.exports = i








































