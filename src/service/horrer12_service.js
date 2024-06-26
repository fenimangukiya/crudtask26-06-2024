const { Horrer } = require("../model")

const create_horrer_s = (data) => {
    return Horrer.create(data)
}
const get_service = () => {
    return Horrer.find()
}
const delete_service = (id) => {
    return Horrer.findByIdAndDelete(id)
}
const updete_service = (id,data) => {
    return Horrer.findByIdAndUpdate(id, data)
}

module.exports = {
    create_horrer_s,
    get_service,
    delete_service,
    updete_service
}