const { Serial } = require("../model")

const create_service = (data) => {
    return Serial.create(data)
}

const get_service = () => {
    return Serial.find()
}

const delete_service = (id) => {
    return Serial.findByIdAndDelete(id)
} 

const update_service = (data , id) => {
    return Serial.findByIdAndUpdate(id, data)
}

module.exports = {
    create_service,
    get_service,
    delete_service,
    update_service
}