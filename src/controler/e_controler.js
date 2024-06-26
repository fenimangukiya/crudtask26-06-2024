const { x_service } = require("../service")

const create_x =async(req , res) => {
    try {
        const data = req.body
        const new_x = await x_service.create_x_s(data)
        if(!new_x) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'x created successfully',
            data: new_x
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_x = async(req, res) => {
    try {
        //service
        const get_xs = await x_service.get_service()
        if(!get_xs) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'x created successfully',
            data: get_xs
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_x  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await x_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'x deleted successfully',
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
        const id = req.params.x_id
        const data = req.body
        const update_result = await x_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'x updated successfully',
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
    create_x,
    get_x,
    delete_x,
    updete_controler,
}