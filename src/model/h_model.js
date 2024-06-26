const mongoose = require('mongoose')

const h_schema = mongoose.Schema({
    h_movie_name: {
        type: String,
        true: true
    },
    h_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const h = mongoose.model("H",h_schema)
module.exports = h






































