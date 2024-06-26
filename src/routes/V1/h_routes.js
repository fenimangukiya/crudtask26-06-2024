const express = require('express')
const { hCreate } = require('../../controler')

const hRoutes = express.Router()

hRoutes.post('/enter-movie',
    //controler
    hCreate.create_h
)
hRoutes.get('/get-hll',
    //controler
    hCreate.get_h
)
hRoutes.delete('/delete-movie',
    //controler
    hCreate.delete_h
)

hRoutes.put('/update-h/:h_id',
    //controler
    hCreate.updete_controler
)

module.exports = hRoutes
