const router = require('./routerMap')
const express = require('express')
const bodyparse = require('body-parser')

const app = new express()

app.use(bodyparse.json())
app.use(bodyparse.urlencoded({ extended: false }))

app.use('/api/home', router)
// app.use(function(req,res,next
app.listen(3000)
console.log('Plz open http://127.0.0.1:8080 in chrome. ')
// const express = require('express')
// const app =express()
// const bodyparse = require('body-parser')

// app.use(bodyparse.json())
// app.use(bodyparse.urlencoded({ extended:false }))

// app.get('/api/home/movie',(req,res)=>{
//   console.log('saddd')
//     res.end('sadda');
// })
// app.listen(3000)