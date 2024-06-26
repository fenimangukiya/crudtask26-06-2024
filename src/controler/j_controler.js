const { j_service } = require("../service")

const create_j =async(req , res) => {
    try {
        const data = req.body
        const new_j = await j_service.create_j_s(data)
        if(!new_j) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'j created successfully',
            data: new_j
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_j = async(req, res) => {
    try {
        //service
        const get_js = await j_service.get_service()
        if(!get_js) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'j created successfully',
            data: get_js
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_j  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await j_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'j deleted successfully',
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
        const id = req.params.j_id
        const data = req.body
        const update_result = await j_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'j updated successfully',
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
    create_j,
    get_j,
    delete_j,
    updete_controler,
}