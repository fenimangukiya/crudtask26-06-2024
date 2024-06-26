const mongoose = require('mongoose')

const action_schema = mongoose.Schema({
    Actionmovie_name: {
        type: String,
        true: true
    },
    Actionmovie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const action = mongoose.model('Action',action_schema)
module.exports = action