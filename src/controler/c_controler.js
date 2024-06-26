const { c_service } = require("../service")

const create_c =async(req , res) => {
    try {
        const data = req.body
        const new_c = await c_service.create_c_s(data)
        if(!new_c) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'c created successfully',
            data: new_c
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const get_c = async(req, res) => {
    try {
        //service
        const get_cs = await c_service.get_service()
        if(!get_cs) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'c created successfully',
            data: get_cs
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_c  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await c_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'c deleted successfully',
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
        const id = req.params.c_id
        const data = req.body
        const update_result = await c_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'c updated successfully',
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
    create_c,
    get_c,
    delete_c,
    updete_controler,
}