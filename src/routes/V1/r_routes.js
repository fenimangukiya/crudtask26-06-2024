const express = require('express')
const { rCreate } = require('../../controler')

const rRoutes = express.Router()

rRoutes.post('/enter-movie',
    //controler
    rCreate.create_r
)
rRoutes.get('/get-rll',
    //controler
    rCreate.get_r
)
rRoutes.delete('/delete-movie',
    //controler
    rCreate.delete_r
)

rRoutes.put('/update-r/:r_id',
    //controler
    rCreate.updete_controler
)

module.exports = rRoutes


































