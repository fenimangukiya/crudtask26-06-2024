const { serial_service } = require("../service")

const create_serial = async(req, res) => {
    try {
        //service
        const data = req.body
        const new_serial = await serial_service.create_service(data)
        if(!new_serial){
            throw new Error('try again')
        }
        res.status(200).json({
            success: true,
            message: 'serial created successfully',
            data: new_serial
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const get_serial = async (req , res) => {
    try {
        const get_serial = await serial_service.get_service()
        if(!get_serial){
            throw new Error('try again')
        }
        res.status(200).json({
            success: true,
            message: 'serial fetched successfully',
            data: get_serial
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const delete_serial = async (req, res) => {
    try {
        const id = req.body.id
        const delete_serial = await serial_service.delete_service(id)
        if(!delete_serial){
            throw new Error('try again')
        }
        res.status(200).json({
            success: true,
            message: 'serial deleted successfully',
            id:id
        })
    } catch (error) {
        res.status(400).json({
            success: true,
            message:error.message
        })
    }
}

const update_serial = async (req, res) => {
    try {
        const id = req.params.serial_id
        const data = req.body
        const update_serial = await serial_service.update_service(id, data)
        if(!update_serial) {
            throw new Error('try again')
        }
        res.statu(200).json({
            success: true,
            message: 'serial updated successfully',
            data: data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = {
    create_serial,
    get_serial,
    delete_serial,
    update_serial
}