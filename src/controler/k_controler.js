const { k_service } = require("../service")

const create_k =async(req , res) => {
    try {
        const data = req.body
        const new_k = await k_service.create_k_s(data)
        if(!new_k) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'k created successfully',
            data: new_k
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const get_k = async(req, res) => {
    try {
        //service
        const get_ks = await k_service.get_service()
        if(!get_ks) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'k created successfully',
            data: get_ks
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_k  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await k_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'k deleted successfully',
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
        const id = req.params.k_id
        const data = req.body
        const update_result = await k_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'k updated successfully',
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
    create_k,
    get_k,
    delete_k,
    updete_controler,
}