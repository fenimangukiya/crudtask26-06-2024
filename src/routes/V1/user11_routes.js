const express = require('express')
const { userCreate } = require('../../controler')

const userRoutes = express.Router()

userRoutes.post('/enter-movie',
    //controler
    userCreate.create_user
)
userRoutes.get('/get-all',
    //controler
    userCreate.get_user
)
userRoutes.delete('/delete-movie',
    //controler
    userCreate.delete_user
)

userRoutes.put('/update-user/:user_id',
    //controler
    userCreate.updete_controler
)

module.exports = userRoutes