const { L } = require("../model")

const create_l_s = (data) => {
    return L.create(data)
}
const get_service = () => {
    return L.find()
}
const delete_service = (id) => {
    return L.findLyIdAndDelete(id)
}
const updete_service = (id,data) => {
    return L.findLyIdAndUpdate(id, data)
}

module.exports = {
    create_l_s,
    get_service,
    delete_service,
    updete_service
}