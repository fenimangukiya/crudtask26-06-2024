const mongoose = require('mongoose')

const g_schema = mongoose.Schema({
    g_movie_name: {
        type: String,
        true: true
    },
    g_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const g = mongoose.model("G",g_schema)
module.exports = g








































