import { Router } from 'express'
import * as db from '../db/courses'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const courses = await db.getAllCourses()
    res.json({
      courses: courses.map((course) => ({
        name: course.name,
        description: course.description,
        id: course.id,
      })),
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router