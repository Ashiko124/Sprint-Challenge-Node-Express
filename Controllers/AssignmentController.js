const db = require('../data/helpers/actionModel.js');


const ProjectController = {
    getAssignment: (req, res) => {
        const { id } = req.params;
        db.get(id).then(project => {
            console.log(project);
        })
    },

    getAssignmentActions: (req, res) => {
        const { id } = req.params;
        db.get(id).then(project => {
            console.log(project);
        })
    },

    createAssignment: (req, res) => {
        const { id } = req.params;
        db.post(id).then(project => {
            console.log(project);
        })
    },

    updateAssignment: (req, res) => {
        const { id } = req.params;
        db.put(id).then(project => {
            console.log(project);
        })
    },

    deleteAssignment: (req, res) => {
        const { id } = req.params;
        db.remove(id).then(project => {
            console.log(project);
        })
    }
}