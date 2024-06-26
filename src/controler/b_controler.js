const { b_service } = require("../service")

const create_b =async(req , res) => {
    try {
        const data = req.body
        const new_b = await b_service.create_b_s(data)
        if(!new_b) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'b created successfully',
            data: new_b
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const get_b = async(req, res) => {
    try {
        //service
        const get_bs = await b_service.get_service()
        if(!get_bs) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'b created successfully',
            data: get_bs
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_b  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await b_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'b deleted successfully',
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
        const id = req.params.b_id
        const data = req.body
        const update_result = await b_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'b updated successfully',
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
    create_b,
    get_b,
    delete_b,
    updete_controler,
}