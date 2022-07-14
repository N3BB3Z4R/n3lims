const database = require('../database');

const getAllTrials = async (req, res, next) => {
  console.log('Get All Trials')
  try {
    const allTrials = await database.query('SELECT * FROM TRIALS');
    res.send(allTrials.rows);
  } catch (error) {
    next(error)
  }
}
const getTrial = async (req, res, next) => {
  console.log('Get Trial with ID:', req.params.id)
  try {
    const { id } = req.params;
    const result = await database.query(`
      SELECT * FROM TRIALS
      WHERE id = ${id}
    `);
    if (result.rows.length === 0) {
      console.log('Trial not found')
      return res.status(404).json({
        message: 'Trial not found'
      })
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error)
    // console.log(error.message)
    // res.json({ error: error.message })
  }
}
const createTrial = async (req, res, next) => {
  try {
    const { title, description, started } = req.body
    const result = await database.query(`
      INSERT INTO TRIALS (title, description, started)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [title, description, started])
    res.json(result.rows[0])
    console.log('Created Study with ID:', result.rows[0].id)
  } catch (error) {
    next(error)
  }
}
const deleteTrial = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await database.query(`
      DELETE FROM TRIALS
      WHERE id = ${id}
      RETURNING *
    `)
    if (result.rowCount === 0) {
      console.log('Trial not found')
      return res.status(404).json({
        message: 'Trial not found'
      })
    }
    res.json({ message: 'Trial deleted' })
    // return res.sendStatus(204)
  } catch (error) {
    next(error)
  }
}
const updateTrial = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, started, ended } = req.body;
    const result = await database.query(`
      UPDATE TRIALS
      SET title = $1, description = $2, started = $3, ended = $4
      WHERE id = ${id}
      RETURNING *
    `, [title, description, started, ended])
    if (result.rowCount === 0) {
      console.log('Trial not found')
      return res.status(404).json({
        message: 'Trial not found'
      })
    }
    res.json(result.rows[0])
    res.json({ message: 'Trial updated' })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllTrials,
  getTrial,
  createTrial,
  deleteTrial,
  updateTrial
}