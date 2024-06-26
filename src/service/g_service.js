const { G } = require("../model")

const create_g_s = (data) => {
    return G.create(data)
}
const get_service = () => {
    return G.find()
}
const delete_service = (id) => {
    return G.findGyIdAndDelete(id)
}
const updete_service = (id,data) => {
    return G.findGyIdAndUpdate(id, data)
}

module.exports = {
    create_g_s,
    get_service,
    delete_service,
    updete_service
}