import { useFruits } from '../hooks/useFruits.ts'
import { useCoursesById } from '../hooks/useCourses.ts'

export default function CoursesById() {
  const { data } = useFruits()
  //const { data } = useCourses() //to be replaced once server route complete

  return (
    <>
      <div className="app">
        <h1>Students in this course:</h1>
        <ul>{data && data.map((course) => <li key={course}>{course}</li>)}</ul>
      </div>
    </>
  )
}
