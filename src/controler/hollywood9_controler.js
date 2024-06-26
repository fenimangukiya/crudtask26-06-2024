const { hollywood_service } = require("../service")

const create_hollywood =async(req , res) => {
    try {
        const data = req.body
        const new_hollywood = await hollywood_service.create_hollywood_s(data)
        if(!new_hollywood) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'hollywood created successfully',
            data: new_hollywood
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_hollywood = async(req, res) => {
    try {
        //service
        const get_hollywoods = await hollywood_service.get_service()
        if(!get_hollywoods) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'hollywood created successfully',
            data: get_hollywoods
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
//         const result = await hollywood_service.delete_service(id)
//         if(!result){
//             throw new Error('try again')
//         }
        
//         res.status(200).json({
//             success : true,
//             message: 'hollywood deleted successfully',
//             id:id
//         })
//     } catch (error) {
//         res.status(400).json({
//             success : false,
//             message: error.message
//         })
//     }
// }

const delete_hollywood = async (req,res) => {
        try {
            const id = req.params.hollywoodid
            const result = await hollywood_service.delete_service(id)
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
        const id = req.params.hollywood_id
        const data = req.body
        const update_result = await hollywood_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'hollywood updated successfully',
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
    create_hollywood,
    get_hollywood,

    delete_hollywood,
    updete_controler,
}