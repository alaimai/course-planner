import connection from './connection.ts'
import { Course } from '../../models/types.ts'

export async function getAllCourses(db = connection): Promise<Course[]> {
  return db('courses').select('*')
}
