// index.js
import express from 'express';
import dotenv from 'dotenv';
import jwt from "jsonwebtoken"

dotenv.config();

const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;
const secret = process.env.SECRETE

app.get('/', (req, res) => {
  res.json({ name: 'vishal' });
});


app.post("/name" , (req,res)=>{
    console.log(req.body)
    const {name} = req.body
    res.json({
        name
    })
})


app.post("/auth" , (req,res)=>{
    const {email , password} = req.body;
    const token =  jwt.sign({email ,password },secret )
    res.json(token)

})


app.post("/login" , (req,res)=>{
const {token} = req.body;

const data = jwt.decode(token,secret)
res.json(data)   
})
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
