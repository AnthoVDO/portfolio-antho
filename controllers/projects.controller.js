import ProjectsDAO from "../models/projectsDAO.js";

export default class ProjectController {
    static async getProjects(req, res, next){
        const projects = await ProjectsDAO.getProjects();

        const response = {
            projects: projects
        }
        res.json(response.projects);
    }
}