const { Router } = require('express');
// const pool = require('../database');

const {
  getAllStudies,
  getStudy,
  createStudy,
  deleteStudy,
  updateStudy,
  patchStudy
} = require('../controllers/studies.controller');

const router = Router();

// /api/ default response
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to n3LIMS API',
    author: 'Oscar Abad a.k.a. N3BB3Z4R',
    version: '0.0.1'
  });
});
// GET-POST-DELETE-PUT-PATCH /api/studies
router.get('/studies', getAllStudies);
router.get('/studies/:id', getStudy);
router.post('/studies', createStudy);
router.delete('/studies/:id', deleteStudy);
router.put('/studies/:id', updateStudy);

module.exports = router;