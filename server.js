const express = require('express');
const static = require('express-static');
const mysql = require('mysql');
let server = express();
server.listen(2333);
server.use(static('www'));
let db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '4210',
    database: 'webproject0'
});
//测试链接
/*db.connect(function(e,r){

    if(e){
        console.log(e);
        return;
    }
    console.log(2);
});*/
server.get('/regi', function (req, res) {
    console.log(req.query);
    let sql = `INSERT INTO user_table VALUES (0,'${req.query.username}','${req.query.password}')`;
    db.query(sql, function (err, data) {
        console.log(data.insertId);
        if (err) {
            res.send({
                "error": 1,
                "message": 'GG'
            });
        } else {
            res.send({
                "error": 0,
            });
        }
    });
});
server.get('/login', function (req, res) {
    var json = req.query;
    console.log(json);
    var sql = `SELECT * FROM user_table WHERE username='${json['username']}'`
    db.query(sql, function (err, data) {
        console.log(data);
        // console.log(err);
        if (data.length) {
            if (data[0].password == json.password) {
                res.send({
                    error: 0
                });
            }
        } else {
            res.send({
                error: 1,
                message: '用户不存在'
            });
        }
    });
});