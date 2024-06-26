const { B } = require("../model")

const create_b_s = (data) => {
    return B.create(data)
}
const get_service = () => {
    return B.find()
}
const delete_service = (id) => {
    return B.findByIdAndDelete(id)
}
const updete_service = (id,data) => {
    return B.findByIdAndUpdate(id, data)
}

module.exports = {
    create_b_s,
    get_service,
    delete_service,
    updete_service
}