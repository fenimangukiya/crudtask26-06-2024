const { horrer_service } = require("../service")

const create_horrer =async(req , res) => {
    try {
        const data = req.body
        const new_horrer = await horrer_service.create_horrer_s(data)
        if(!new_horrer) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'horrer created successfully',
            data: new_horrer
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_horrer = async(req, res) => {
    try {
        //service
        const get_horrers = await horrer_service.get_service()
        if(!get_horrers) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'horrer created successfully',
            data: get_horrers
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
// const delete_movie =async (req,res) => {
//     try {
//         const id = req.body.id
//         const result = await horrer_service.delete_service(id)
//         if(!result){
//             throw new Error('try again')
//         }
        
//         res.status(200).json({
//             success : true,
//             message: 'horrer deleted successfully',
//             id:id
//         })
//     } catch (error) {
//         res.status(400).json({
//             success : false,
//             message: error.message
//         })
//     }
// }

const delete_horrer = async (req,res) => {
        try {
            const id = req.params.horrerid
            const result = await horrer_service.delete_service(id)
            res.status(200).json({
                id:id
            })
        } catch (error) {
            res.status(400).json({
                success : false,
                message: error.message
            })
        }
}
const updete_controler =async (req, res) => {
    try {
        //service
        const id = req.params.horrer_id
        const data = req.body
        const update_result = await horrer_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'horrer updated successfully',
            data:data
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

module.exports = {
    create_horrer,
    get_horrer,

    delete_horrer,
    updete_controler,
}