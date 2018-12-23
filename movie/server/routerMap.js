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
    conn.query(sqlMap.random_movie, ids, (er, result) => {
        if (er) console.log(er)
        // console.log(result[0].movieName)
        res.json(result)
    })
    console.log(ids)

})
router.post('/login', (req, res) => {
    const account_info = req.body
    console.log(account_info)
    let send_info = {
        isUser: false
    }
    conn.query(sqlMap.user_verify,account_info.account, (er, result) => {
        console.log(result)
        // if (er) res.send(send_info)
        if (result[0] == undefined) {
            console.log(result)
            res.send(send_info)
        }
        else {
            console.log(result)
            send_info.isUser = true
            res.send(send_info)
        }
    })
})

module.exports = router

