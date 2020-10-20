const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: '',
    database: '',
    host: 'localhost',
    port: ''
});

let res = {};

res.all = () => {

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM names', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

res.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM names WHERE id = ?', [id], (err, results) => { //Question mark prevents sqlinjection
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
}

module.exports = res;