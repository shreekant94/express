const express = require("express");
const app = express();
const cors = require("cors");
const { config } = require("dotenv");
app.use(express.json())


const dburl = process.env.DB_URL


app.use(cors());
app.post("/login", (req, res) => {
const { email, pass } = req.body;
console.log(req.body);
if (!email && !pass) {
res.status(404).send("Please provide email and password" + req.body);
} else {
res.send("Login Success!" + req.body);
}
});
// const auth = async (req,res,next)=>{
// if(req.headers.authorization==="raj"){
// next()
// }else{
// return res.send("invalid user")
// }

// }

app.get("/getName", (req, res) => {

res.send({
name: "RAJ TILAK D SINGH ",
});
});

app.post("/createUser", (req, res) => {
const {email,password} = req.body
if(!email || !password) {
return res.status(400).send("please provide email and password")
}else{
res.status(200).send({
msg: "User Created Succesfully",
});
}

});

app.listen(3500, () => {});