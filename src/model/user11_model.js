const mongoose = require('mongoose')

const user_schema = mongoose.Schema({
    usermovie_name: {
        type: String,
        true: true
    },
    usermovie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const user = mongoose.model('User',user_schema)
module.exports = user