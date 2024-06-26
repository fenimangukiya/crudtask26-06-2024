const express = require('express')
const { serialCreate } = require('../../controler')

const serial_routes = express.Router()

serial_routes.post('/serial-post',
    //controller
    serialCreate.create_serial
)

serial_routes.get('/serial-get',
    // controller
    serialCreate.get_serial
)

serial_routes.delete('/serial-delete',
    // controler
    serialCreate.delete_serial
)

serial_routes.put('/serial-update/:serial_id',
    // controller
    serialCreate.update_serial
)

module.exports = serial_routes