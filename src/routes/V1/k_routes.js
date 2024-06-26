const express = require('express')
const { kCreate } = require('../../controler')

const kRoutes = express.Router()

kRoutes.post('/enter-movie',
    //controler
    kCreate.create_k
)
kRoutes.get('/get-kll',
    //controler
    kCreate.get_k
)
kRoutes.delete('/delete-movie',
    //controler
    kCreate.delete_k
)

kRoutes.put('/update-k/:k_id',
    //controler
    kCreate.updete_controler
)

module.exports = kRoutes
