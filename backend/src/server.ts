import express from "express";
import cors from "cors";
import { sample_tags, sample_users, sample_wines } from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

// web ul ruleaza pe 4200 insa backendul va fii pe 5000 , ii conectez
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/wines", (req,res) => {
    res.send(sample_wines);
})

app.get("/api/wines/search/:searchTerm", (req, res) =>{
    const searchTerm = req.params.searchTerm;
    const wines = sample_wines.filter(wine => wine.name.toLowerCase().includes(searchTerm.toLowerCase() ) );
    res.send(wines);
})

app.get("/api/wines/tags", (req, res) =>{
    res.send(sample_tags);
})

app.get("/api/wines/tag/:tagName", (req, res) =>{
    const tagName = req.params.tagName;
    const wines = sample_wines.filter(wine => wine.tags?.includes(tagName));
    res.send(wines);
})

app.get("/api/wines/:wineId", (req, res) =>{
     const wineId = req.params.wineId;
     const wine = sample_wines.find( wine => wine.id == wineId);
     res.send(wine);
})

app.post("/api/users/login", (req,res) =>{
    const body = req.body;
    const {email,password} = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);

    if(user){
        res.send(generateTokenReponse(user));
    }else{
        res.status(400).send("User name or password is wrong");
    }
})

const generateTokenReponse = (user : any) => {
    const token = jwt.sign({
      email:user.email, isAdmin: user.isAdmin
    },"SomeRandomText",{
      expiresIn:"30d"
    });
  
    user.token = token;
    return user;
  }

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})
