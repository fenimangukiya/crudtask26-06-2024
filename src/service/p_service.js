const { P } = require("../model")

const create_p_s = (data) => {
    return P.create(data)
}
const get_service = () => {
    return P.find()
}
const delete_service = (id) => {
    return P.findPyIdAndDelete(id)
}
const updete_service = (id,data) => {
    return P.findPyIdAndUpdate(id, data)
}

module.exports = {
    create_p_s,
    get_service,
    delete_service,
    updete_service
}