const { H } = require("../model")

const create_h_s = (data) => {
    return H.create(data)
}
const get_service = () => {
    return H.find()
}
const delete_service = (id) => {
    return H.findHyIdAndDelete(id)
}
const updete_service = (id,data) => {
    return H.findHyIdAndUpdate(id, data)
}

module.exports = {
    create_h_s,
    get_service,
    delete_service,
    updete_service
}
