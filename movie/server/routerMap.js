const mysql = require('mysql')
const express = require('express')
const db = require('./db/db')
const sqlMap = require('./db/sqlMap')
const router = express.Router()

//create local mysql connection
const conn = mysql.createConnection(db.mysql)

//connect to msyql
conn.connect()

//post to searchInfo
router.post('/search_movie', (req, res) => {
    console.log(req.body);
    conn.query(sqlMap.serch, req.body, (er, result) => {
        if (er) console.log(er)
        //console.log(result[0])
        res.end(result)
    })
})

router.get('/movie_info', (req, res) => {
    console.log(req.body)
    conn.query(sqlMap.random_movie,req.body.movie_id,(er,result)=>{
        if(er) console.log(er)
        console.log(result)
        res.end(result)
    })
})

module.exports = router

