const { Bollywood } = require("../model")
const new_bollywood = (data) => {
    return Bollywood.create(data)
} 

const get_service = () => {
    return Bollywood.find()
}
const delete_service = (id) => {
    return Bollywood.findByIdAndDelete(id)
}
const updete_service = (id,data) => {
    return Bollywood.findByIdAndUpdate(id, data)
}

module.exports = {
    new_bollywood,
    get_service,
    delete_service,
    updete_service
}