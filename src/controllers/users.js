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

const createNewUser = (req, res) => {
    console.log(req.body)
    res.json({
        message: 'CREATE user baru berhasil',
        data: req.body
    })
};

const updateUser = (req, res) => {
    const {id} = req.params;
    console.log('id user :', id);
    res.json({
        message: 'UPDATE user berhasil',
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params;
    res.json({
        message: 'DELETE user berhasil',
        data:{
            
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
};