const { n_service } = require("../service")

const create_n =async(req , res) => {
    try {
        const data = req.body
        const new_n = await n_service.create_n_s(data)
        if(!new_n) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'n created successfully',
            data: new_n
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_n = async(req, res) => {
    try {
        //service
        const get_ns = await n_service.get_service()
        if(!get_ns) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'n created successfully',
            data: get_ns
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_n  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await n_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'n deleted successfully',
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
        const id = req.params.n_id
        const data = req.body
        const update_result = await n_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'n updated successfully',
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
    create_n,
    get_n,
    delete_n,
    updete_controler,
}