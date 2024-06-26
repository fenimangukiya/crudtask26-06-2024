const express = require('express')
const { actionCreate } = require('../../controler')

const actionRoutes = express.Router()

actionRoutes.post('/enter-movie',
    //controler
    actionCreate.create_action
)
actionRoutes.get('/get-all',
    //controler
    actionCreate.get_action
)
// actionRoutes.delete('/delete-movie',
//     //controler
//     actionCreate.delete_movie
// )
actionRoutes.delete('/delete/:actionid',
    // controler
    actionCreate.delete_action
)
actionRoutes.put('/update-action/:action_id',
    //controler
    actionCreate.updete_controler
)

module.exports = actionRoutes