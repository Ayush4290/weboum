import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app=express();

const PORT=process.env.PORT ? parseInt(process.env.PORT) : 4001;

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("user are working")
})

app.listen(PORT,()=>{
    console.log(`server is working in port ${PORT}`);
})