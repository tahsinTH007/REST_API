const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const router = require("../routes/userRoutes")

const app = express();

// dotenv connect
dotenv.config();

// cors options
var corsOptions = {
    origin:"http://localhost:8081"
}


// For parsing application/json
app.use(express.json());
// app.use(express.urlencoded({extends: true}));

// middleware
app.use(cors(corsOptions));
app.use("/api/user",router)



const PORT = process.env.PORT || 3000;

app.get("/api", (req, res) => {
    const  body  = req.body;
    console.log(body);
    res.send("hello world");
})

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
})