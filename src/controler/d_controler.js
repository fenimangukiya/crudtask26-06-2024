const { d_service } = require("../service")

const create_d =async(req , res) => {
    try {
        const data = req.body
        const new_d = await d_service.create_d_s(data)
        if(!new_d) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'd created successfully',
            data: new_d
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_d = async(req, res) => {
    try {
        //service
        const get_as = await d_service.get_service()
        if(!get_ds) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'd created successfully',
            data: get_ds
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_d  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await d_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'd deleted successfully',
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
        const id = req.params.d_id
        const data = req.body
        const update_result = await d_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'd updated successfully',
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
    create_d,
    get_d,
    delete_d,
    updete_controler,
}