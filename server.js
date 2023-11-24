const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "signup"
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO users ( `name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})
app.post('/login', (req, res) => {

    const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ? ";
    
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        console.log(req.body);
        console.log(data.length);
        if (data.length > 0) {
            if(req.body.email[0] === 'admin@gmail.com' && req.body.password[0] === '123'){
               return res.json("admin_access"); 
            }else{
                return res.json("Success");
            }
        } else {
            return res.json("Failed");
        }
    });
});

app.get('/admin/users', (req, res) => {
    const sql = "SELECT * FROM users";

    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    });
});


app.listen(8081, ()=> {
    console.log("listening");
})