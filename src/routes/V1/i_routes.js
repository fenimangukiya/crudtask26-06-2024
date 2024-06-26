const express = require('express')
const { iCreate } = require('../../controler')

const iRoutes = express.Router()

iRoutes.post('/enter-movie',
    //controler
    iCreate.create_i
)
iRoutes.get('/get-ill',
    //controler
    iCreate.get_i
)
iRoutes.delete('/delete-movie',
    //controler
    iCreate.delete_i
)

iRoutes.put('/update-i/:i_id',
    //controler
    iCreate.updete_controler
)

module.exports = iRoutes