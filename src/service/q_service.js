const { Q } = require("../model")

const create_q_s = (data) => {
    return Q.create(data)
}
const get_service = () => {
    return Q.find()
}
const delete_service = (id) => {
    return Q.findQyIdAndDelete(id)
}
const updete_service = (id,data) => {
    return Q.findQyIdAndUpdate(id, data)
}

module.exports = {
    create_q_s,
    get_service,
    delete_service,
    updete_service
}
