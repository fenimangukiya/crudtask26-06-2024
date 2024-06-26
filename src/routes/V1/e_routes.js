const express = require('express')
const { xCreate } = require('../../controler')

const xRoutes = express.Router()

xRoutes.post('/enter-movie',
    //controler
    xCreate.create_x
)
xRoutes.get('/get-xll',
    //controler
    xCreate.get_x
)
xRoutes.delete('/delete-movie',
    //controler
    xCreate.delete_x
)

xRoutes.put('/update-x/:x_id',
    //controler
    xCreate.updete_controler
)

module.exports = xRoutes
