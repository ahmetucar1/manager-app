require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require('body-parser')
const connection = require("./db");
const loginRoutes = require("./routes/login");
const signupRoutes = require("./routes/signup");
const mainRoutes = require("./routes/main");


// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/login", loginRoutes);
app.use("/api/signup", signupRoutes);
app.use("/api", mainRoutes)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
})
