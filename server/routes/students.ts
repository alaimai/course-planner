import { Router } from 'express'
import * as db from '../db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const students = await db.getAllStudents()
    res.json(students)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const student = await db.getStudentById(id)
    res.json(student)
  } catch (error) {
    res.status(404).json({ message: 'Can not find the student' })
  }
})

router.post('/:id/courses', async (req, res) => {
  const studentId = Number(req.params.id)
  const { courseId } = req.body
  console.log('courseID:', courseId)

  try {
    await db.addCourseToStudent(studentId, courseId)
    res.status(200).json({ message: 'Course added successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
