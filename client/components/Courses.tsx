import { useFruits } from '../hooks/useFruits.ts'
import { useCourses } from '../hooks/useCourses.ts'

export default function Courses() {
  const { data } = useFruits()
  //const { data } = useCourses() //to be replaced once server route complete

  return (
    <>
      <div className="app">
        <h1>List of current courses:</h1>
        <ul>{data && data.map((course) => <li key={course}>{course}</li>)}</ul>
      </div>
    </>
  )
}
