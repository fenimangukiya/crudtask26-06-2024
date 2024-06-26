const { korian_service } = require("../service")

const create_korian =async(req , res) => {
    try {
        const data = req.body
        const new_korian = await korian_service.create_korian_s(data)
        if(!new_korian) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'korian created successfully',
            data: new_korian
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}

const get_korian = async(req, res) => {
    try {
        //service
        const get_korians = await korian_service.get_service()
        if(!get_korians) {
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'korian created successfully',
            data: get_korians
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
}
const delete_korian =async (req,res) => {
    try {
        const id = req.body.id
        const result = await korian_service.delete_service(id)
        if(!result){
            throw new Error('try again')
        }
        
        res.status(200).json({
            success : true,
            message: 'korian deleted successfully',
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
        const id = req.params.korian_id
        const data = req.body
        const update_result = await korian_service.updete_service(id, data)
        if(!update_result){
            throw new Error('try again')
        }
        res.status(200).json({
            success : true,
            message: 'korian updated successfully',
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
    create_korian,
    get_korian,

    delete_korian,
    updete_controler,
}