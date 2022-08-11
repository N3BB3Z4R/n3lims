const { Router } = require('express');
// const pool = require('../database');

const {
  getAllSamples,
  getSample,
  createSample,
  deleteSample,
  updateSample,
  patchSample
} = require('../controllers/samples.controller');

const router = Router();

// /api/ default response
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to n3LIMS API',
    author: 'Oscar Abad a.k.a. N3BB3Z4R',
    version: '0.0.1',
    description: 'Laboratory, Projects and Sample Unit, Information Management System'
  });
});
// GET-POST-DELETE-PUT-PATCH /api/Samples
router.get('/Samples', getAllSamples);
router.get('/Samples/:id', getSample);
router.post('/Samples', createSample);
router.delete('/Samples/:id', deleteSample);
router.put('/Samples/:id', updateSample);

module.exports = router;