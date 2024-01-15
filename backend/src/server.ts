import dotenv from 'dotenv';
dotenv.config();


import express from "express";
import cors from "cors";
import wineRouter from './routers/wine.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';
dbConnect();




const app = express();
app.use(express.json());

// web ul ruleaza pe 4200 insa backendul va fii pe 5000 , ii conectez
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/wines", wineRouter);
app.use("/api/users", userRouter);

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})
