import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import errorHandler from "./middleware/errorHandler.js";

dotenv.config({quiet : true});

const app = express();
const port = process.env.PORT

//middleware 
app.use(express.json());
app.use(cors())

//Routes 
app.get("/api",userRoutes)

//error handling
app.use(errorHandler)

//Testing postgres connection
app.get("/",async (req,res)=>{
   console.log('start');
   const result = await pool.query("SELECT current_database()");
   console.log('end');
   res.send(`The database name is :${result.rows[0].current_database}`);
})

//server running 
app.listen(port, ()=>{
    console.log(`Server is running on port ${port} `)
})
