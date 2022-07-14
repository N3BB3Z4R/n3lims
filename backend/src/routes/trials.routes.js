const { Router } = require('express');
// const pool = require('../database');

const {
  getAllTrials,
  getTrial,
  createTrial,
  deleteTrial,
  updateTrial,
  patchTrial
} = require('../controllers/Trials.controller');

const router = Router();

// /api/ default response
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to n3LIMS API',
    author: 'Oscar Abad a.k.a. N3BB3Z4R',
    version: '0.0.1',
    description: 'Laboratory, Trial and Sample Unit, Information Management System'
  });
});
// GET-POST-DELETE-PUT-PATCH /api/Trials
router.get('/Trials', getAllTrials);
router.get('/Trials/:id', getTrial);
router.post('/Trials', createTrial);
router.delete('/Trials/:id', deleteTrial);
router.put('/Trials/:id', updateTrial);

module.exports = router;