import app from "./server.js";
import dotenv from "dotenv";
import mongodb from "mongodb";
import ProjectsDAO from "./models/projectsDAO.js";


dotenv.config();
const PORT = process.env.PORT || 8080;
const MongoClient = mongodb.MongoClient;

//Connect to database and start server

MongoClient.connect(
    process.env.DB_URI, {
        maxPoolSize: 50,
        wtimeoutMS:2500,
        useNewUrlParser: true
    }
).catch(err=>{
    console.error(err.stack);
    process.exit(1)
}).then(async client => {
    await ProjectsDAO.injectDB(client);
    app.listen(PORT, ()=>{
    console.log("Server started on port: "+PORT)
})
})

