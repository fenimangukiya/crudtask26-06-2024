const { J } = require("../model")

const create_j_s = (data) => {
    return J.create(data)
}
const get_service = () => {
    return J.find()
}
const delete_service = (id) => {
    return J.findJyIdAndDelete(id)
}
const updete_service = (id,data) => {
    return J.findJyIdAndUpdate(id, data)
}

module.exports = {
    create_j_s,
    get_service,
    delete_service,
    updete_service
}
