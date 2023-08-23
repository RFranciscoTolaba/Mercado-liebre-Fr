const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('./public'))

app.listen(3000, () =>{
    console.log('corriendo servidor');
    })

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})
app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname, './views/register.html'))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname + "/views/login.html"))
})

