const mongoose = require('mongoose')

const m_schema = mongoose.Schema({
    m_movie_name: {
        type: String,
        true: true
    },
    m_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const m = mongoose.model("M",m_schema)
module.exports = m















