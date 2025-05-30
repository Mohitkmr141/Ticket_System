import dotenv from 'dotenv'
dotenv.config({
    path:"./.env"
})
import app from './app.js'
import connectDB from './database/index.js'

connectDB()
.then(()=>{
    app.listen(process.env.PORT , ()=>{
        console.log(`Server is at http://localhost:${process.env.PORT}`)
    })
})

.catch((error)=>{
    console.log(`Database connection Failed` , error)
})


