const express = require('express')
const { hollywoodCreate } = require('../../controler')

const hollywoodRoutes = express.Router()

hollywoodRoutes.post('/enter-movie',
    //controler
    hollywoodCreate.create_hollywood
)
hollywoodRoutes.get('/get-all',
    //controler
    hollywoodCreate.get_hollywood
)

hollywoodRoutes.delete('/delete/:hollywoodid',
    // controler
    hollywoodCreate.delete_hollywood
)
hollywoodRoutes.put('/update-hollywood/:hollywood_id',
    //controler
    hollywoodCreate.updete_controler
)

module.exports = hollywoodRoutes