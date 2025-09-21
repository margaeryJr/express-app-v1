const getAllUsers = (req,res) => {
    const data = {
        id : '1',
        name : "mumu",
        email : "mumu@email.com"
    }
    res.json({
        message: 'GET semua users berhasil',
        data: data
    })
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
            id: id,
            name: "Margaery",
            email: "mumu@email.com"
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
};