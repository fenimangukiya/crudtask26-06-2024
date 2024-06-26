const { g_service } = require("../service")

const create_g =async(req , res) => {
    try {
        const data = req.body
        const new_g = await g_service.create_g_s(data)
        if(!new_g) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'g created successfully',
            data: new_g
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_g = async(req, res) => {
    try {
        //service
        const get_gs = await g_service.get_service()
        if(!get_gs) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'g created successfully',
            data: get_gs
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_g  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await g_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'g deleted successfully',
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
        const id = req.params.g_id
        const data = req.body
        const update_result = await g_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'g updated successfully',
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
    create_g,
    get_g,
    delete_g,
    updete_controler,
}