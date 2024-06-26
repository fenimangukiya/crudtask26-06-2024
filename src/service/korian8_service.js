const { Korian } = require("../model")


const create_korian_s = (data) => {
    return Korian.create(data)
}
const get_service = () => {
    return Korian.find()
}
const delete_service = (id) => {
    return Korian.findByIdAndDelete(id)
}
const updete_service = (id,data) => {
    return Korian.findByIdAndUpdate(id, data)
}

module.exports = {
    create_korian_s,
    get_service,
    delete_service,
    updete_service
}