import { NavLink } from 'react-router-dom'
//import { useCourses } from '../hooks/useCourses.ts'
import { useFruits } from '../hooks/useFruits'

export default function CourseNav() {
  //const { data } = useCourses()
  const { data, isLoading } = useFruits()

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(data)

  return (
    <nav>
      {data.map((course) => (
        <NavLink to={`/courses/${course}`}>{course}</NavLink>
      ))}
    </nav>
  )
}
