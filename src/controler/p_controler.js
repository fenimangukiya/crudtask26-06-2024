const { p_service } = require("../service")

const create_p =async(req , res) => {
    try {
        const data = req.body
        const new_p = await p_service.create_p_s(data)
        if(!new_p) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'p created successfully',
            data: new_p
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_p = async(req, res) => {
    try {
        //service
        const get_ps = await p_service.get_service()
        if(!get_ps) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'p created successfully',
            data: get_ps
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_p  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await p_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'p deleted successfully',
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
        const id = req.params.p_id
        const data = req.body
        const update_result = await p_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'p updated successfully',
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
    create_p,
    get_p,
    delete_p,
    updete_controler,
}