import connection from './connection.ts'
import { Course, Student_course, Personal_info } from '../../models/types.ts'

export async function addCourseToStudent(studentId: number, courseId: number, db = connection) {
  await db('students_courses').insert({ student_id: studentId, course_id: courseId })
}

export async function getAllCourses(db = connection): Promise<Course[]> {
  const courses = await db('courses').select('*')
  return courses as Course[]
}
export async function getCourseById(id: number, db = connection) {
  const course = await db('courses').where({ id }).first()
  return course as Course// do we need  student names who have chosen the course?
}
export async function getAllStudents(db = connection) {
  const students = await db('students').select('*')
  return students as Personal_info[]
}
export async function getStudentById(id: number, db = connection) {
  const student = await db('students')
    .join('enrolments', 'students.id', 'enrolments.student_id')
    .join('courses', 'enrolments.course_id', 'courses.id')
    .where('students.id', id)
    .select(
      'students.id',
      'students.last_name',
      'students.first_name',
      'students.email',
      'courses.name',
    )
  return student as Partial<Student_course>
}
