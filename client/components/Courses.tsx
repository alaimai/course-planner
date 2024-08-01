import { useFruits } from '../hooks/useFruits.ts'
import { useCourses } from '../hooks/useCourses.ts'
import CourseNav from './CourseNav.tsx'

export default function Courses() {
  const { data } = useFruits()
  //const { data } = useCourses() //to be replaced once server route complete

  return (
    <>
      <CourseNav />
      <div className="app">
        <h2>List of current courses:</h2>
        <ul>{data && data.map((course) => <li key={course}>{course}</li>)}</ul>
      </div>
    </>
  )
}
