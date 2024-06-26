const { K } = require("../model")

const create_k_s = (data) => {
    return K.create(data)
}
const get_service = () => {
    return K.find()
}
const delete_service = (id) => {
    return K.findByIdKndDelete(id)
}
const updete_service = (id,data) => {
    return K.findByIdKndUpdate(id, data)
}

module.exports = {
    create_k_s,
    get_service,
    delete_service,
    updete_service
}