const express = require('express')
const { oCreate } = require('../../controler')

const oRoutes = express.Router()

oRoutes.post('/enter-movie',
    //controler
    oCreate.create_o
)
oRoutes.get('/get-oll',
    //controler
    oCreate.get_o
)
oRoutes.delete('/delete-movie',
    //controler
    oCreate.delete_o
)

oRoutes.put('/update-o/:o_id',
    //controler
    oCreate.updete_controler
)

module.exports = oRoutes
