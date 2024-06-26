const express = require('express')
const { fCreate } = require('../../controler')

const fRoutes = express.Router()

fRoutes.post('/enter-movie',
    //controler
    fCreate.create_f
)
fRoutes.get('/get-fll',
    //controler
    fCreate.get_f
)
fRoutes.delete('/delete-movie',
    //controler
    fCreate.delete_f
)

fRoutes.put('/update-f/:f_id',
    //controler
    fCreate.updete_controler
)

module.exports = fRoutes