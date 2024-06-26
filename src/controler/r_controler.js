
const { r_service } = require("../service")

const create_r =async(req , res) => {
    try {
        const data = req.body
        const new_r = await r_service.create_r_s(data)
        if(!new_r) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'r created successfully',
            data: new_r
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_r = async(req, res) => {
    try {
        //service
        const get_rs = await r_service.get_service()
        if(!get_rs) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'r created successfully',
            data: get_rs
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_r  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await r_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'r deleted successfully',
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
        const id = req.params.r_id
        const data = req.body
        const update_result = await r_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'r updated successfully',
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
    create_r,
    get_r,
    delete_r,
    updete_controler,
}






