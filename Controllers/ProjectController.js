const db = require('../data/helpers/projectModel.js');



const ProjectController = {
    getProject: (req, res) => {
        const { id } = req.params;
        db.get(id).then(project => {
            console.log(project);
        })
    },

    getProjectActions: (req, res) => {
        const { id } = req.params;
        db.get(id).then(project => {
            console.log(project);
        })
    },

    createProject: (req, res) => {
        const { id } = req.params;
        db.post(id).then(project => {
            console.log(project);
        })
    },

    updateProject: (req, res) => {
        const { id } = req.params;
        db.put(id).then(project => {
            console.log(project);
        })
    },

    deleteProject: (req, res) => {
        const { id } = req.params;
        db.remove(id).then(project => {
            console.log(project);
        })
    }
}

module.exports = ProjectController;