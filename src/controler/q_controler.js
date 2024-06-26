const { q_service } = require("../service")

const create_q =async(req , res) => {
    try {
        const data = req.body
        const new_q = await q_service.create_q_s(data)
        if(!new_q) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'q created successfully',
            data: new_q
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_q = async(req, res) => {
    try {
        //service
        const get_qs = await q_service.get_service()
        if(!get_qs) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'q created successfully',
            data: get_qs
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_q  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await q_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'q deleted successfully',
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
        const id = req.params.q_id
        const data = req.body
        const update_result = await q_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'q updated successfully',
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
    create_q,
    get_q,
    delete_q,
    updete_controler,
}



