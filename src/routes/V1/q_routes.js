const express = require('express')
const { qCreate } = require('../../controler')

const qRoutes = express.Router()

qRoutes.post('/enter-movie',
    //controler
    qCreate.create_q
)
qRoutes.get('/get-qll',
    //controler
    qCreate.get_q
)
qRoutes.delete('/delete-movie',
    //controler
    qCreate.delete_q
)

qRoutes.put('/update-q/:q_id',
    //controler
    qCreate.updete_controler
)

module.exports = qRoutes