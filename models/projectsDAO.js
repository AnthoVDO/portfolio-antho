import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let projects;

export default class ProjectsDAO{

    static async injectDB(conn){
        if(projects){return}
        try{
            projects = await conn.db(process.env.DB_PORTFOLIO).collection("project");

        }catch(e){
            console.error(
                `Unable to make a connection to the project collection in projectsDAO: ${e}`
            )
        }

        
        // console.log(query);
    }

    static async getProjects(){
        let query = await projects.find({});
        return query.toArray();
    }

}