const router = require('./routerMap')
const express = require('express')
const bodyparse = require('body-parser')

const app = new express()

app.use(bodyparse.json)
app.use(bodyparse.urlencoded({extended:false}))

app.use('/api/home',router)

app.listen(3000,()=>{
    console.log('Plz open http://127.0.0.1:8080 in chrome. ')
})