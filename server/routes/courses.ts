import { Router } from 'express'
import * as db from '../db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const courses = await db.getAllCourses()
    res.json(courses)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})
router.get('/:id',async (req, res)=>{
  const id = Number(req.params.id)
  try{const course = await db.getCourseById(id)
    res.json(course)
  }catch (error){
    res.status(404).json({message: 'Can not find the Course'})
  }
})
export default router
