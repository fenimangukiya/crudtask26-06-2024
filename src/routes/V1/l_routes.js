const express = require('express')
const { lCreate } = require('../../controler')

const lRoutes = express.Router()

lRoutes.post('/enter-movie',
    //controler
    lCreate.create_l
)
lRoutes.get('/get-lll',
    //controler
    lCreate.get_l
)
lRoutes.delete('/delete-movie',
    //controler
    lCreate.delete_l
)

lRoutes.put('/update-l/:l_id',
    //controler
    lCreate.updete_controler
)

module.exports = lRoutes