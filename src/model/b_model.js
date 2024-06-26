const mongoose = require('mongoose')

const b_schema = mongoose.Schema({
    b_movie_name: {
        type: String,
        true: true
    },
    b_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const b = mongoose.model('B',b_schema)
module.exports = b


