const express = require('express')
const { pCreate } = require('../../controler')

const pRoutes = express.Router()

pRoutes.post('/enter-movie',
    //controler
    pCreate.create_p
)
pRoutes.get('/get-pll',
    //controler
    pCreate.get_p
)
pRoutes.delete('/delete-movie',
    //controler
    pCreate.delete_p
)

pRoutes.put('/update-p/:p_id',
    //controler
    pCreate.updete_controler
)

module.exports = pRoutes
