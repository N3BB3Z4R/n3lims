const { Router } = require('express');
// const pool = require('../database');

const {
  getAllProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
  patchProject
} = require('../controllers/projects.controller');

const router = Router();

// /api/ default response
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to n3LIMS API',
    author: 'Oscar Abad a.k.a. N3BB3Z4R',
    version: '0.0.1',
    description: 'Laboratory, Project and Sample Unit, Information Management System'
  });
});
// GET-POST-DELETE-PUT-PATCH /api/Projects
router.get('/Projects', getAllProjects);
router.get('/Projects/:id', getProject);
router.post('/Projects', createProject);
router.delete('/Projects/:id', deleteProject);
router.put('/Projects/:id', updateProject);

module.exports = router;