
const { a_service } = require("../service")

const create_a =async(req , res) => {
    try {
        const data = req.body
        const new_a = await a_service.create_a_s(data)
        if(!new_a) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'a created successfully',
            data: new_a
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_a = async(req, res) => {
    try {
        //service
        const get_as = await a_service.get_service()
        if(!get_as) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'a created successfully',
            data: get_as
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_a  =async (req,res) => {
    try {
        const id = req.body.id
        const result = await a_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'a deleted successfully',
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
        const id = req.params.a_id
        const data = req.body
        const update_result = await a_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'a updated successfully',
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
    create_a,
    get_a,
    delete_a,
    updete_controler,
}