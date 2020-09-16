const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

//users.js
const users = require("./router/api/users");

//db config
const db = require("./config/keys").mongoURI;

//body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);

//connect to mongodb
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("connected"))
        .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello World!");
})

//using routes
app.use("/api/users", users);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})