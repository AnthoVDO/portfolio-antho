//----------------------------------------------------INIT----------------------------------------------------
import express from "express"
const app = express();
import cors from "cors";
import portfolio from "./routes/portfolio.route.js";


//----------------------------------------------------Middleware----------------------------------------------------
app.use(cors())
app.use(express.json())

app.use('/api/v1/portfolio', portfolio);
app.use("*", (req, res)=>{
    res.status(404).json({error: "not found"})
})

export default app;
