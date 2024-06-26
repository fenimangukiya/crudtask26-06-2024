const { D } = require("../model")

const create_d_s = (data) => {
    return D.create(data)
}
const get_service = () => {
    return D.find()
}
const delete_service = (id) => {
    return D.findDyIdAndDelete(id)
}
const updete_service = (id,data) => {
    return D.findDyIdAndUpdate(id, data)
}

module.exports = {
    create_d_s,
    get_service,
    delete_service,
    updete_service
}