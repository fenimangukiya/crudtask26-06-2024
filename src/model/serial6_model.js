const mongoose = require('mongoose')
const serial_schema = mongoose.Schema({
    serial_name : {
        type : String,
        trim: true
    },
    serial_rank : {
        type : Number,
        default: 0
    }
},{
    timestamps : true
})


const serial = mongoose.model('Serial',serial_schema)
module.exports = serial 