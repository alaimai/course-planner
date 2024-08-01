import { useFruits } from '../hooks/useFruits.ts'
import { useCoursesById } from '../hooks/useCourses.ts'
import CourseNav from './CourseNav.tsx'

export default function CoursesById() {
  const { data } = useFruits()
  //const { data } = useCourses() //to be replaced once server route complete

  return (
    <>
      <CourseNav />
      <div className="app">
        <h2>Students in this course:</h2>
        <ul>{data && data.map((course) => <li key={course}>{course}</li>)}</ul>
      </div>
    </>
  )
}
