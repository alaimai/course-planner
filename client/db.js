const knex = require('./knex')

async function createCourse(name, description, teacherId) {
  return knex('courses').insert({ name, description, teacher_id: teacherId })
}

async function addStudentToCourse(studentId, courseId) {
  return knex('student_courses').insert({ student_id: studentId, course_id: courseId });
}

async function deleteCourse(courseId) {
  return knex('courses').where('id', courseId).del()
}

async function getAllCourses() {
  return knex('courses').select('*')
}


module.exports = {
  createCourse,
  addStudentToCourse,
  deleteCourse,
  getAllCourses,
}
