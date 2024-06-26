const express = require('express')
const { aCreate } = require('../../controler')

const aRoutes = express.Router()

aRoutes.post('/enter-movie',
    //controler
    aCreate.create_a
)
aRoutes.get('/get-all',
    //controler
    aCreate.get_a
)
aRoutes.delete('/delete-movie',
    //controler
    aCreate.delete_a
)

aRoutes.put('/update-a/:a_id',
    //controler
    aCreate.updete_controler
)

module.exports = aRoutes