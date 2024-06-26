const { Action } = require("../model")

const create_action_s = (data) => {
    return Action.create(data)
}
const get_service = () => {
    return Action.find()
}
const delete_service = (id) => {
    return Action.findByIdAndDelete(id)
}
const updete_service = (id,data) => {
    return Action.findByIdAndUpdate(id, data)
}

module.exports = {
    create_action_s,
    get_service,
    delete_service,
    updete_service
}