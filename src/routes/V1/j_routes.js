const express = require('express')
const { jCreate } = require('../../controler')

const jRoutes = express.Router()

jRoutes.post('/enter-movie',
    //controler
    jCreate.create_j
)
jRoutes.get('/get-jll',
    //controler
    jCreate.get_j
)
jRoutes.delete('/delete-movie',
    //controler
    jCreate.delete_j
)

jRoutes.put('/update-j/:j_id',
    //controler
    jCreate.updete_controler
)

module.exports = jRoutes
