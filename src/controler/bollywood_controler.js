const { bollywood_service } = require("../service")

const create_bollywood =async(req , res) => {
    try {
        const data = req.body
        const new_bollywood1 = await bollywood_service.new_bollywood(data)
        if(!new_bollywood1) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'bollywood created successfully',
            data: new_bollywood1
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_bollywood = async(req, res) => {
    try {
        //service
        const get_bollywoods = await bollywood_service.get_service()
        if(!get_bollywoods) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'bollywood created successfully',
            data: get_bollywoods
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_bollywood =async (req,res) => {
    try {
        const id = req.body.id
        const result = await bollywood_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'bollywood deleted successfully',
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
        const id = req.params.bollywood_id
        const data = req.body
        const update_result = await bollywood_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'bollywood updated successfully',
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
    create_bollywood,
    get_bollywood,
    delete_bollywood,
    updete_controler,
}