const { R } = require("../model")

const create_r_s = (data) => {
    return R.create(data)
}
const get_service = () => {
    return R.find()
}
const delete_service = (id) => {
    return R.findRyIdAndDelete(id)
}
const updete_service = (id,data) => {
    return R.findRyIdAndUpdate(id, data)
}

module.exports = {
    create_r_s,
    get_service,
    delete_service,
    updete_service
}
