import { Router } from 'express'
import * as db from '../db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const teachers = await db.getAllTeachers()
    res.json(teachers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const teacher = await db.getTeacherById(id)
    res.json(teacher)
  } catch (error) {
    res.status(404).json({ message: 'Can not find the teacher' })
  }
})



export default router
