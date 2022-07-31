const database = require('../database');

const getAllProjects = async (req, res, next) => {
  console.log('Get All Projects')
  try {
    const allProjects = await database.query('SELECT * FROM PROJECTS');
    res.send(allProjects.rows);
  } catch (error) {
    next(error)
  }
}
const getProject = async (req, res, next) => {
  console.log('Get Project with ID:', req.params.id)
  try {
    const { id } = req.params;
    const result = await database.query(`
      SELECT * FROM PROJECTS
      WHERE id = ${id}
    `);
    if (result.rows.length === 0) {
      console.log('Project not found')
      return res.status(404).json({
        message: 'Project not found'
      })
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error)
    // console.log(error.message)
    // res.json({ error: error.message })
  }
}
const createProject = async (req, res, next) => {
  try {
    const { title, description, started } = req.body
    const result = await database.query(`
      INSERT INTO PROJECTS (title, description, started)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [title, description, started])
    res.json(result.rows[0])
    console.log('Created Study with ID:', result.rows[0].id)
  } catch (error) {
    next(error)
  }
}
const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await database.query(`
      DELETE FROM PROJECTS
      WHERE id = ${id}
      RETURNING *
    `)
    if (result.rowCount === 0) {
      console.log('Project not found')
      return res.status(404).json({
        message: 'Project not found'
      })
    }
    res.json({ message: 'Project deleted' })
    // return res.sendStatus(204)
  } catch (error) {
    next(error)
  }
}
const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, started, ended } = req.body;
    const result = await database.query(`
      UPDATE PROJECTS
      SET title = $1, description = $2, started = $3, ended = $4
      WHERE id = ${id}
      RETURNING *
    `, [title, description, started, ended])
    if (result.rowCount === 0) {
      console.log('Project not found')
      return res.status(404).json({
        message: 'Project not found'
      })
    }
    res.json(result.rows[0])
    res.json({ message: 'Project updated' })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject
}