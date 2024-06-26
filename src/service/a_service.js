const { A } = require("../model")

const create_a_s = (data) => {
    return A.create(data)
}
const get_service = () => {
    return A.find()
}
const delete_service = (id) => {
    return A.findByIdAndDelete(id)
}
const updete_service = (id,data) => {
    return A.findByIdAndUpdate(id, data)
}

module.exports = {
    create_a_s,
    get_service,
    delete_service,
    updete_service
}