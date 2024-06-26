const { Hollywood } = require("../model")

const create_hollywood_s = (data) => {
    return Hollywood.create(data)
}
const get_service = () => {
    return Hollywood.find()
}
const delete_service = (id) => {
    return Hollywood.findByIdAndDelete(id)
}
const updete_service = (id,data) => {
    return Hollywood.findByIdAndUpdate(id, data)
}

module.exports = {
    create_hollywood_s,
    get_service,
    delete_service,
    updete_service
}