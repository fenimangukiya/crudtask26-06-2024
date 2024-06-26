const mongoose = require('mongoose')

const c_schema = mongoose.Schema({
    c_movie_name: {
        type: String,
        true: true
    },
    c_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const c = mongoose.model('C',c_schema)
module.exports = c


