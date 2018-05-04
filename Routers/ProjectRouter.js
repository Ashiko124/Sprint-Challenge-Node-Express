const express = require('../node_modules/express');
const ProjectController =  require('../Controllers/ProjectController');

const ProjectRouter = express.Router();
const {getProject, getProjectActions, createProject, updateProject, deleteProject }  = ProjectController//destructor your object


ProjectRouter.get('/:id', getProject);
ProjectRouter.get('/projects:id', getProjectActions);
ProjectRouter.post('/', createProject);
ProjectRouter.put('/:id', updateProject);
ProjectRouter.delete('/:id', deleteProject);

module.exports = ProjectRouter;
