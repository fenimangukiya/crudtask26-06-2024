const { I } = require("../model")

const create_i_s = (data) => {
    return I.create(data)
}
const get_service = () => {
    return I.find()
}
const delete_service = (id) => {
    return I.findIyIdAndDelete(id)
}
const updete_service = (id,data) => {
    return I.findIyIdAndUpdate(id, data)
}

module.exports = {
    create_i_s,
    get_service,
    delete_service,
    updete_service
}