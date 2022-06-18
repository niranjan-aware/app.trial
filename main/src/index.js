const express= require('express')
require('./db/mongoose')
const dataRouter=require('./routes/userLoginRoute')


const app=express()
const port= process.env.PORT||3000

 app.use(express.json())
app.use(dataRouter)


 app.listen(port,()=>{
    console.log('Server is up on port'+port)
})