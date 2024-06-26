const { N } = require("../model")

const create_n_s = (data) => {
    return N.create(data)
}
const get_service = () => {
    return N.find()
}
const delete_service = (id) => {
    return N.findNyIdAndDelete(id)
}
const updete_service = (id,data) => {
    return N.findNyIdAndUpdate(id, data)
}

module.exports = {
    create_n_s,
    get_service,
    delete_service,
    updete_service
}