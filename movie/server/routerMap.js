const mysql = require('mysql')
const express = require('express')
const db = require('./db/db')
const sqlMap = require('./db/sqlMap')
const router = express.Router()

//create local mysql connection
const conn = mysql.createConnection(db.mysql)

//connect to msyql
conn.connect()
// console.log('this is routemap')

//post to searchInfo
router.post('/search_movie', (req, res) => {
    // console.log(req.body);
    conn.query(sqlMap.serch, req.body, (er, result) => {
        if (er) console.log(er)
        //console.log(result[0])
        res.end(result)
    })
})
let infos
router.post('/movieinfo', (req, res) => {
    // console.log(req.body.movie_id)
    // console.log('recieved get requirement.')
    const ids = req.body.movie_id
    conn.query(sqlMap.random_movie,ids,(er,result)=>{
        if(er) console.log(er)
        // console.log(result[0].movieName)
        res.json(result)
    })  
    console.log(ids)

})

module.exports = router

