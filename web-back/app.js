import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import  SignUp from "./routes/signup.js"
import Login from "./routes/login.js"
import SignOut from "./routes/signout.js"
import RefreshToken from "./routes/refreshToken.js"
import AuthenticateToken from "./auth/authenticate.js"
import Perfil from "./routes/perfil.js"
import Notes from "./routes/notes.js"


dotenv.config()

const app = express()

const port = process.env.PORT || 3100

app.use(cors())
app.use(express.json())

async function main(){
    await mongoose.connect(process.env.DB_CONNECTION_STRING)
    console.log("connected to mongoDB")
}

main().catch(console.error)

app.use("/api/signup", SignUp)  
app.use("/api/login", Login)
app.use("/api/signout", SignOut)
app.use("/api/refresh-token", RefreshToken)
app.use("/api/perfil",   AuthenticateToken,   Perfil) 
app.use("/api/notes",  /* AuthenticateToken, */ Notes  ) 



app.get("/", (req, res)=>{
    res.send('hello')
})

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
})