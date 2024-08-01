import { NavLink } from 'react-router-dom'
import useCourses from '../hooks/useCourses.ts'

export default function CourseNav() {
  const { data, isLoading } = useCourses()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <nav>
      {data.map((course) => (
        <NavLink key={course.id} to={`/courses/${course.id}`}>
          {course.name}
        </NavLink>
      ))}
    </nav>
  )
}
