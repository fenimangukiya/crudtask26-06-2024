const mongoose = require('mongoose')

const korian_schema = mongoose.Schema({
    korianmovie_name: {
        type: String,
        true: true
    },
    korianmovie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const korian = mongoose.model('Korian',korian_schema)
module.exports = korian