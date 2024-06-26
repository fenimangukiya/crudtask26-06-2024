const express = require('express')
const { bCreate } = require('../../controler')

const bRoutes = express.Router()

bRoutes.post('/enter-movie',
    //controler
    bCreate.create_b
)
bRoutes.get('/get-bll',
    //controler
    bCreate.get_b
)
bRoutes.delete('/delete-movie',
    //controler
    bCreate.delete_b
)

bRoutes.put('/update-b/:b_id',
    //controler
    bCreate.updete_controler
)

module.exports = bRoutes
