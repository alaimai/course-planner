import connection from './connection.ts'
import {
  Course,
  Student_course,
  Personal_info,
  Course_student,
} from '../../models/types.ts'

export async function addCourseToStudent(
  studentId: number,
  courseId: number,
  db = connection,
) {
  await db('enrolments').insert({ student_id: studentId, course_id: courseId })
}

export async function getAllCourses(db = connection): Promise<Course[]> {
  const courses = await db('courses').select('*')
  return courses as Course[]
}
export async function getCourseById(id: number, db = connection) {
  const course = await db('courses')
    .join('enrolments', 'courses.id', 'enrolments.course_id')
    .join('students', 'enrolments.student_id', 'students.id')
    .where('courses.id', id)
    .select(
      'courses.id',
      'courses.name',
      'courses.location',
      'courses.description',
      'courses.teacher_id',
      'students.last_name as student_last_name',
      'students.first_name as student_first_name',
      'students.id as student_id',
    )
  return course as Partial<Course_student> // do we need  student names who have chosen the course?
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
      'courses.name as course_name',
    )
  return student as Partial<Student_course>
}
export async function getAllTeachers(db = connection) {
  const teachers = await db('teachers').select('*')
  return teachers as Personal_info[]
}
export async function getTeacherById(id: number, db = connection) {
  const teacher = await db('teachers').where('students.id', id).first()
  return teacher as Personal_info
}
