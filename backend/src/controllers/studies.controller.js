const { nextTick } = require('process');
const database = require('../database');

const getAllStudies = async (req, res, next) => {
  console.log('Get All Studies')
  try {
    const allStudies = await database.query('SELECT * FROM STUDIES');
    res.send(allStudies.rows);
  } catch (error) {
    next(error)
  }
}
const getStudy = async (req, res, next) => {
  console.log('Get Study with ID:', req.params.id)
  try {
    const { id } = req.params;
    const result = await database.query(`
      SELECT * FROM STUDIES
      WHERE id = ${id}
    `);
    if (result.rows.length === 0) {
      console.log('Study not found')
      return res.status(404).json({
        message: 'Study not found'
      })
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error)
    // console.log(error.message)
    // res.json({ error: error.message })
  }
}
const createStudy = async (req, res, next) => {
  try {
    const { title, description, started } = req.body
    const result = await database.query(`
      INSERT INTO STUDIES (title, description, started)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [title, description, started])
    res.json(result.rows[0])
    console.log('Created Study with ID:', result.rows[0].id)
  } catch (error) {
    next(error)
  }
}
const deleteStudy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await database.query(`
      DELETE FROM STUDIES
      WHERE id = ${id}
      RETURNING *
    `)
    if (result.rowCount === 0) {
      console.log('Study not found')
      return res.status(404).json({
        message: 'Study not found'
      })
    }
    res.json({ message: 'Study deleted' })
    // return res.sendStatus(204)
  } catch (error) {
    next(error)
  }
}
const updateStudy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, started, ended } = req.body;
    const result = await database.query(`
      UPDATE STUDIES
      SET title = $1, description = $2, started = $3, ended = $4
      WHERE id = ${id}
      RETURNING *
    `, [title, description, started, ended])
    if (result.rowCount === 0) {
      console.log('Study not found')
      return res.status(404).json({
        message: 'Study not found'
      })
    }
    res.json(result.rows[0])
    res.json({ message: 'Study updated' })
  } catch (error) {
    next(error)
  }
}


module.exports = {
  getAllStudies,
  getStudy,
  createStudy,
  deleteStudy,
  updateStudy
}