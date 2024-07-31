const { createCourse, addStudentToCourse, deleteCourse, getAllCourses } = require('./db');

async function handleCreateCourse(name, description, teacherId) {
  try {
    await createCourse(name, description, teacherId);
    console.log('Course created successfully');
  } catch (error) {
    console.error('Error creating course:', error);
  }
}

async function handleAddStudentToCourse(studentId, courseId) {
  try {
    await addStudentToCourse(studentId, courseId);
    console.log('Student added to course successfully');
  } catch (error) {
    console.error('Error adding student to course:', error);
  }
}

async function handleDeleteCourse(courseId) {
  try {
    await deleteCourse(courseId);
    console.log('Course deleted successfully');
  } catch (error) {
    console.error('Error deleting course:', error);
  }
}

async function handleGetAllCourses() {
  try {
    const courses = await getAllCourses();
    console.log('Courses:', courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
}


module.exports = {
  handleCreateCourse,
  handleAddStudentToCourse,
  handleDeleteCourse,
  handleGetAllCourses,
}
