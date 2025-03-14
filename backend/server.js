import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 3000
dotenv.config()
app.use(express.json())

/* app.get("/",(req,res)=> {
    //root route http://localhost:5000/
    res.send("Hello World!");
}) */;

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)

}

    );