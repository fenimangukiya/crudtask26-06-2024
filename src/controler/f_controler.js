const { f_service } = require("../service")

const create_f =async(req , res) => {
    try {
        const data = req.body
        const new_f = await f_service.create_f_s(data)
        if(!new_f) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'f created successfully',
            data: new_f
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_f = async(req, res) => {
    try {
        //service
        const get_fs = await f_service.get_service()
        if(!get_fs) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'f created successfully',
            data: get_fs
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_f  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await f_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'f deleted successfully',
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
        const id = req.params.f_id
        const data = req.body
        const update_result = await f_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'f updated successfully',
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
    create_f,
    get_f,
    delete_f,
    updete_controler,
}