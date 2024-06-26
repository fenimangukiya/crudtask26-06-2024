const express = require('express')
const { gCreate } = require('../../controler')

const gRoutes = express.Router()

gRoutes.post('/enter-movie',
    //controler
    gCreate.create_g
)
gRoutes.get('/get-gll',
    //controler
    gCreate.get_g
)
gRoutes.delete('/delete-movie',
    //controler
    gCreate.delete_g
)

gRoutes.put('/update-g/:g_id',
    //controler
    gCreate.updete_controler
)

module.exports = gRoutes