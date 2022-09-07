const database = require('../database');

const getAllSamples = async (req, res, next) => {
  console.log('Get All Samples')
  try {
    const allSamples = await database.query('SELECT * FROM SAMPLES');
    res.send(allSamples.rows);
  } catch (error) {
    next(error)
  }
}
const getSample = async (req, res, next) => {
  console.log('Get Sample with ID:', req.params.id)
  try {
    const { id } = req.params;
    const result = await database.query(`
      SELECT * FROM SAMPLES
      WHERE id = ${id}
    `);
    if (result.rows.length === 0) {
      console.log('Sample not found')
      return res.status(404).json({
        message: 'Sample not found'
      })
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error)
    // console.log(error.message)
    // res.json({ error: error.message })
  }
}
const createSample = async (req, res, next) => {
  try {
    const { title, description, started } = req.body
    const result = await database.query(`
      INSERT INTO SAMPLES (title, description, started)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [title, description, started])
    res.json(result.rows[0])
    console.log('Created Study with ID:', result.rows[0].id)
  } catch (error) {
    next(error)
  }
}
const deleteSample = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await database.query(`
      DELETE FROM SAMPLES
      WHERE id = ${id}
      RETURNING *
    `)
    if (result.rowCount === 0) {
      console.log('Sample not found')
      return res.status(404).json({
        message: 'Sample not found'
      })
    }
    res.json({ message: 'Sample deleted' })
    // return res.sendStatus(204)
  } catch (error) {
    next(error)
  }
}
const updateSample = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, started, ended } = req.body;
    const result = await database.query(`
      UPDATE SAMPLES
      SET title = $1, description = $2, started = $3, ended = $4
      WHERE id = ${id}
      RETURNING *
    `, [title, description, started, ended])
    if (result.rowCount === 0) {
      console.log('Sample not found')
      return res.status(404).json({
        message: 'Sample not found'
      })
    }
    res.json(result.rows[0])
    res.json({ message: 'Sample updated' })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllSamples,
  getSample,
  createSample,
  deleteSample,
  updateSample
}