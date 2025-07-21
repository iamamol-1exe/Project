const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.routes");
const functionRoutes = require("./routes/function.routes");
const path = require("path");
const connectToDB = require("./db/db");
const cors = require("cors");



dotenv.config({ path: path.resolve(__dirname, '../.env') });
connectToDB();


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from your frontend
    credentials: true               // If you're using cookies/auth headers
}));



app.get("/",(req,res)=>{
    res.send("hello world");
})
app.use("/user",userRoutes);
app.use('/api/function',functionRoutes);



module.exports = app;
