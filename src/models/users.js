const dbPool = require('../config/database.js');

const getAllUsers = () => {
   const SQLQuery = 'SELECT * FROM users';
   return dbPool.execute(SQLQuery);
}

const getUser = (id) => {
    const SQLQuery = `SELECT * FROM users
                        WHERE id=${id}`;
    return dbPool.execute(SQLQuery, [id]);
}

const createNewUser = (body) => {
    const SQLQuery =    `INSERT INTO users (name, email) 
                        VALUE ('${body.name}', '${body.email}')`;
    return dbPool.execute(SQLQuery);
}

const updateUser = (body, id) => {
    const SQLQuery = `UPDATE users 
                    SET name='${body.name}', email='${body.email}' 
                    WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const deleteUser = (id) => {
    const SQLQuery = `DELETE FROM users
                        WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}
module.exports = {
    getAllUsers,
    getUser,
    createNewUser,
    updateUser,
    deleteUser
}