const { C } = require("../model")

const create_c_s = (data) => {
    return C.create(data)
}
const get_service = () => {
    return C.find()
}
const delete_service = (id) => {
    return C.findCyIdAndDelete(id)
}
const updete_service = (id,data) => {
    return C.findCyIdAndUpdate(id, data)
}

module.exports = {
    create_c_s,
    get_service,
    delete_service,
    updete_service
}