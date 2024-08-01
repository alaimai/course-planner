import { Router } from 'express'
import * as db from '../db/index.ts'
const router = Router()


router.get('/:id', async (req, res) => {
  console.log('Accessing /:id route with id:', req.params.id)
  const id = Number(req.params.id)
  try {
    const course = await db.getCourseById(id)
    res.json(course)
  } catch (error) {
    res.status(404).json({ message: 'Can not find the Course' })
  }
})


router.get('/', async (req, res) => {
  console.log('call courses')
  try {
    const courses = await db.getAllCourses()
    res.json(courses)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router