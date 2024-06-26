const { m_service } = require("../service")

const create_m =async(req , res) => {
    try {
        const data = req.body
        const new_m = await m_service.create_m_s(data)
        if(!new_m) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'm created successfully',
            data: new_m
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_m = async(req, res) => {
    try {
        //service
       
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_m  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await m_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'm deleted successfully',
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
        const id = req.params.m_id
        const data = req.body
        const update_result = await m_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'm updated successfully',
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
    create_m,
    get_m,
    delete_m,
    updete_controler,
}