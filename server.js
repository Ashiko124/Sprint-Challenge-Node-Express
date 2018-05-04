const express = require('express');
const ProjectRouter = require('./Routers/ProjectRouter');
const AssignmentRouter = require('./Routers/AssignmentRouter');

const server = express();
server.use(express.json());
server.use('/api/Projects', ProjectRouter);
server.use('/api/Assignments', AssignmentRouter);

server.listen(5000, () => console.log('\n== API Running on port 5000 ==\n'));


