const { h_service } = require("../service")

const create_h =async(req , res) => {
    try {
        const data = req.body
        const new_h = await h_service.create_h_s(data)
        if(!new_h) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'h created successfully',
            data: new_h
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_h = async(req, res) => {
    try {
        //service
        const get_hs = await h_service.get_service()
        if(!get_hs) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'h created successfully',
            data: get_hs
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_h  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await h_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'h deleted successfully',
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
        const id = req.params.h_id
        const data = req.body
        const update_result = await h_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'h updated successfully',
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
    create_h,
    get_h,
    delete_h,
    updete_controler,
}