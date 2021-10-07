const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

//Legacy Config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/static", express.static(__dirname + "/assets"));
app.use(fileUpload());

//Routing
app.use("/api/blockchain", require("./router/blockchain"));

app.listen(PORT, ()=> console.log(`✅ Server is Running At : ${PORT}`));