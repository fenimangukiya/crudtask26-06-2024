const express = require('express')
const { nCreate } = require('../../controler')

const nRoutes = express.Router()

nRoutes.post('/enter-movie',
    //controler
    nCreate.create_n
)
nRoutes.get('/get-nll',
    //controler
    nCreate.get_n
)
nRoutes.delete('/delete-movie',
    //controler
    nCreate.delete_n
)

nRoutes.put('/update-n/:n_id',
    //controler
    nCreate.updete_controler
)

module.exports = nRoutes