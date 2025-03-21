import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import cors from "cors"

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000
dotenv.config()
app.use(express.json())
app.use(cors({ origin: "http://localhost:3000", credentials: true })); 
app.use(cookieParser())




/* app.get("/",(req,res)=> {
    //root route http://localhost:5000/
    res.send("Hello World!");
}) */;

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)

}

    );