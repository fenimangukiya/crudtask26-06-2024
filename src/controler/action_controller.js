const { action_service } = require("../service")

const create_action =async(req , res) => {
    try {
        const data = req.body
        const new_action = await action_service.create_action_s(data)
        if(!new_action) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'action created successfully',
            data: new_action
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_action = async(req, res) => {
    try {
        //service
        const get_actions = await action_service.get_service()
        if(!get_actions) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'action created successfully',
            data: get_actions
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
//         const result = await action_service.delete_service(id)
//         if(!result){
//             throw new Error('try again')
//         }
        
//         res.status(200).json({
//             success : true,
//             message: 'action deleted successfully',
//             id:id
//         })
//     } catch (error) {
//         res.status(400).json({
//             success : false,
//             message: error.message
//         })
//     }
// }

const delete_action = async (req,res) => {
        try {
            const id = req.params.actionid
            const result = await action_service.delete_service(id)
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
        const id = req.params.action_id
        const data = req.body
        const update_result = await action_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'action updated successfully',
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
    create_action,
    get_action,

    delete_action,
    updete_controler,
}