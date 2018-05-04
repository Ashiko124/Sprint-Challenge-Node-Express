const express = require('../node_modules/express');
const AssignmentController = require('../Controllers/ProjectController');

const AssignmentRouter = express.Router();
const {getAssignment, getAssignmentActions, createAssignment, updateAssignment, deleteAssignment }  = AssignmentController//destructor your object


// AssignmentRouter.get('/:id');
// AssignmentRouter.get('/projects:id', getAssignmentActions);
// AssignmentRouter.post('/', createAssigment);
// AssignmentRouter.put('/:id', updateAssignment);
// AssignmentRouter.delete('/:id', deleteAssignment)

module.exports = AssignmentRouter;