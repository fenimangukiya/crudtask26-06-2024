
const { l_service } = require("../service")

const create_l =async(req , res) => {
    try {
        const data = req.body
        const new_l = await l_service.create_l_s(data)
        if(!new_l) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'l created successfully',
            data: new_l
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_l = async(req, res) => {
    try {
        //service
        const get_ls = await l_service.get_service()
        if(!get_ls) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'l created successfully',
            data: get_ls
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_l  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await l_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'l deleted successfully',
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
        const id = req.params.l_id
        const data = req.body
        const update_result = await l_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'l updated successfully',
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
    create_l,
    get_l,
    delete_l,
    updete_controler,
}

