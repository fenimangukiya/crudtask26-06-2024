
const { O } = require("../model")

const create_o_s = (data) => {
    return O.create(data)
}
const get_service = () => {
    return O.find()
}
const delete_service = (id) => {
    return O.findOyIdAndDelete(id)
}
const updete_service = (id,data) => {
    return O.findOyIdAndUpdate(id, data)
}

module.exports = {
    create_o_s,
    get_service,
    delete_service,
    updete_service
}