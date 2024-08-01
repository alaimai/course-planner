import { NavLink } from 'react-router-dom'

export default function CourseNav() {
  return (
    <nav>
      <NavLink to={`/courses/`}>Courses</NavLink>
      <NavLink to={`/students/`}>Students</NavLink>
      <NavLink to={`/teachers/`}>Teachers</NavLink>
    </nav>
  )
}
