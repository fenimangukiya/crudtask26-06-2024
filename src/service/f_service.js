const { F } = require("../model")

const create_f_s = (data) => {
    return F.create(data)
}
const get_service = () => {
    return F.find()
}
const delete_service = (id) => {
    return F.findFyIdAndDelete(id)
}
const updete_service = (id,data) => {
    return F.findFyIdAndUpdate(id, data)
}

module.exports = {
    create_f_s,
    get_service,
    delete_service,
    updete_service
}