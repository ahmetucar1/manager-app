require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const signupRoutes = require("./routes/signup");
const loginRoutes = require("./routes/login");
const mainRoutes = require("./routes/main");


// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRoutes);
app.use("/api", mainRoutes)



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
})
