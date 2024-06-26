const express = require('express')
const { korianCreate } = require('../../controler')

const korianRoutes = express.Router()

korianRoutes.post('/enter-movie',
    //controler
    korianCreate.create_korian
)
korianRoutes.get('/get-all',
    //controler
    korianCreate.get_korian
)
korianRoutes.delete('/delete-movie',
    //controler
    korianCreate.delete_korian
)

korianRoutes.put('/update-korian/:korian_id',
    //controler
    korianCreate.updete_controler
)

module.exports = korianRoutes