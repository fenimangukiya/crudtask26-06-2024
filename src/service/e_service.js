const { X } = require("../model")

const create_x_s = (data) => {
    return X.create(data)
}
const get_service = () => {
    return X.find()
}
const delete_service = (id) => {
    return X.findXyIdAndDelete(id)
}
const updete_service = (id,data) => {
    return X.findXyIdAndUpdate(id, data)
}

module.exports = {
    create_x_s,
    get_service,
    delete_service,
    updete_service
}
