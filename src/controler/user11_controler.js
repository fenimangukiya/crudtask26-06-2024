const { user_service } = require("../service")

const create_user =async(req , res) => {
    try {
        const data = req.body
        const new_user = await user_service.create_user_s(data)
        if(!new_user) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'user created successfully',
            data: new_user
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_user = async(req, res) => {
    try {
        //service
        const get_users = await user_service.get_service()
        if(!get_users) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'user created successfully',
            data: get_users
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_user  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await user_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'user deleted successfully',
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
        const id = req.params.user_id
        const data = req.body
        const update_result = await user_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'user updated successfully',
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
    create_user,
    get_user,
    delete_user,
    updete_controler,
}