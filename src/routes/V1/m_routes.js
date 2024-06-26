

const express = require('express')
const { mCreate } = require('../../controler')

const mRoutes = express.Router()

mRoutes.post('/enter-movie',
    //controler
    mCreate.create_m
)
mRoutes.get('/get-mll',
    //controler
    mCreate.get_m
)
mRoutes.delete('/delete-movie',
    //controler
    mCreate.delete_m
)

mRoutes.put('/update-m/:m_id',
    //controler
    mCreate.updete_controler
)

module.exports = mRoutes