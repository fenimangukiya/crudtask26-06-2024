const mongoose = require('mongoose')

const horrer_schema = mongoose.Schema({
    horrermovie_name: {
        type: String,
        true: true
    },
    horrermovie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const horrer = mongoose.model('Horrer',horrer_schema)
module.exports = horrer