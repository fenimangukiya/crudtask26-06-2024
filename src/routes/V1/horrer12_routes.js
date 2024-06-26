const express = require('express')
const { horrerCreate } = require('../../controler')

const horrerRoutes = express.Router()

horrerRoutes.post('/enter-movie',
    //controler
    horrerCreate.create_horrer
)
horrerRoutes.get('/get-all',
    //controler
    horrerCreate.get_horrer
)
// horrerRoutes.delete('/delete-movie',
//     //controler
//     horrerCreate.delete_movie
// )
horrerRoutes.delete('/delete/:horrerid',
    // controler
    horrerCreate.delete_horrer
)
horrerRoutes.put('/update-horrer/:horrer_id',
    //controler
    horrerCreate.updete_controler
)

module.exports = horrerRoutes