const { M } = require("../model")

const create_m_s = (data) => {
    return M.create(data)
}
const get_service = () => {
    return M.find()
}
const delete_service = (id) => {
    return M.findMyIdAndDelete(id)
}
const updete_service = (id,data) => {
    return M.findMyIdAndUpdate(id, data)
}

module.exports = {
    create_m_s,
    get_service,
    delete_service,
    updete_service
}