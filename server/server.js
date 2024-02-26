const express = require("express");
const cors = require("cors");
const router = require("./routes/routes.js");

//middlewares
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);


app.listen(5000, () => {
    console.log("Server is running successfully")
});

