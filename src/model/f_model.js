const mongoose = require('mongoose')

const f_schema = mongoose.Schema({
    f_movie_name: {
        type: String,
        true: true
    },
    f_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})
const f = mongoose.model("F",f_schema)
module.exports = f









































