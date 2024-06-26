const express = require('express')
const { dCreate } = require('../../controler')

const dRoutes = express.Router()

dRoutes.post('/enter-movie',
    //controler
    dCreate.create_d
)
dRoutes.get('/get-dll',
    //controler
    dCreate.get_d
)
dRoutes.delete('/delete-movie',
    //controler
    dCreate.delete_d
)

dRoutes.put('/update-d/:d_id',
    //controler
    dCreate.updete_controler
)

module.exports = dRoutes