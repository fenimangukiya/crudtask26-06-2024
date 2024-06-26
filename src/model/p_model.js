const mongoose = require('mongoose')

const p_schema = mongoose.Schema({
    p_movie_name: {
        type: String,
        true: true
    },
    p_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const p = mongoose.model("P",p_schema)
module.exports = p












