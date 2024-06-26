const express = require('express')
const { cCreate } = require('../../controler')

const cRoutes = express.Router()

cRoutes.post('/enter-movie',
    //controler
    cCreate.create_c
)
cRoutes.get('/get-cll',
    //controler
    cCreate.get_c
)
cRoutes.delete('/delete-movie',
    //controler
    cCreate.delete_c
)

cRoutes.put('/update-c/:c_id',
    //controler
    cCreate.updete_controler
)

module.exports = cRoutes
