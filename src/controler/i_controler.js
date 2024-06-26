const { i_service } = require("../service")

const create_i =async(req , res) => {
    try {
        const data = req.body
        const new_i = await i_service.create_i_s(data)
        if(!new_i) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'i created successfully',
            data: new_i
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_i = async(req, res) => {
    try {
        //service
        const get_is = await i_service.get_service()
        if(!get_is) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'i created successfully',
            data: get_is
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_i  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await i_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'i deleted successfully',
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
        const id = req.params.i_id
        const data = req.body
        const update_result = await i_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'i updated successfully',
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
    create_i,
    get_i,
    delete_i,
    updete_controler,
}