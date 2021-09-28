const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//Legacy Config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//Web3 Config
const web3 = require("./web3");
const StudentContract = new web3.eth.Contract(JSON.parse(process.env.ContractABI), process.env.ContractAddress);


app.get("/", (req, res)=> {
    // web3.eth.getAccounts().then(user => {
    //     console.log(user[0]);
    //     StudentContract.methods.setStudentInfo(2, "Minseo", 24).send({"from": user[0] })
    //         .then(result => {
    //             console.log(result);
    //         });
    // });
    console.log(typeof process.env.ContractAddress);
    console.log(typeof JSON.parse(process.env.ContractABI));
    StudentContract.methods.getStudentInfo(2).call()
        .then(result => {
            console.log(result);
        })
    
    res.send("Success!");
});

app.listen(PORT, ()=> console.log(`✅ Server is Running At : ${PORT}`));