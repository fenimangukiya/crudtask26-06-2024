const express = require('express')
const { bollywoodCreate } = require('../../controler')

const bollywoodRoutes = express.Router()

bollywoodRoutes.post('/enter-movie',
    //controler
    bollywoodCreate.create_bollywood
)
bollywoodRoutes.get('/get-all',
    //controler
    bollywoodCreate.get_bollywood
)
bollywoodRoutes.delete('/delete-movie',
    //controler
    bollywoodCreate.delete_bollywood
)

bollywoodRoutes.put('/update-bollywood/:bollywood_id',
    //controler
    bollywoodCreate.updete_controler
)

module.exports = bollywoodRoutes