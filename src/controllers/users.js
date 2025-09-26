const usersModel = require('../models/users.js');

const getAllUsers = async (req, res) => {
    try {
        const [data]  = await usersModel.getAllUsers();
    res.json({
        message: 'GET semua users berhasil',
        data: data
            })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
        
    }
};

const createNewUser = async (req, res) => {
    const {body} = req;
    try {
        await usersModel.createNewUser(body);
         res.status(201).json({
             message: 'CREATE user baru berhasil',
             data: req.body
    })   
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        }) 
    }
   
};

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await usersModel.updateUser(body, id);
        res.status(201).json({
        message: 'UPDATE user berhasil',
        data: {
            id: id,
            ...body
        }
    })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
    
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        await usersModel.deleteUser(id)
        res.json({
        message: 'DELETE user berhasil',
        data: null
    })
    } catch (error) {
        res.status(500).json({
        message: 'Server Error',
        serverMessage: error
        })  
    }
   
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
};