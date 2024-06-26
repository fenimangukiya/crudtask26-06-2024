const { User } = require("../model")

const create_user_s = (data) => {
    return User.create(data)
}
const get_service = () => {
    return User.find()
}
const delete_service = (id) => {
    return User.findByIdAndDelete(id)
}
const updete_service = (id,data) => {
    return User.findByIdAndUpdate(id, data)
}

module.exports = {
    create_user_s,
    get_service,
    delete_service,
    updete_service
}