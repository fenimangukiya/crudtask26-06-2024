const mongoose = require('mongoose')

const r_schema = mongoose.Schema({
    r_movie_name: {
        type: String,
        true: true
    },
    r_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const r = mongoose.model("R",r_schema)
module.exports = r











