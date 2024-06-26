const { o_service } = require("../service")

const create_o =async(req , res) => {
    try {
        const data = req.body
        const new_o = await o_service.create_o_s(data)
        if(!new_o) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'o created successfully',
            data: new_o
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_o = async(req, res) => {
    try {
        //service
        const get_os = await o_service.get_service()
        if(!get_os) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'o created successfully',
            data: get_os
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_o  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await o_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'o deleted successfully',
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
        const id = req.params.o_id
        const data = req.body
        const update_result = await o_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'o updated successfully',
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
    create_o,
    get_o,
    delete_o,
    updete_controler,
}