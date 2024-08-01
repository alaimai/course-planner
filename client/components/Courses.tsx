import { Link } from 'react-router-dom'
import useCourses from '../hooks/useCourses.ts'
import { Course } from '../../models/types.ts'

export default function Courses() {
  const { data, error, isLoading } = useCourses()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading courses: {error.message}</div>
  }

  if (!data) {
    return <div>No courses available</div>
  }
  return (
    <>
      <div className="app">
        <h2>List of current courses:</h2>
        <ul>
          {data &&
            data.map((course: Course) => (
              <li key={course.name}>
                <Link to={`/courses/${course.id}`}>
                  <strong>{course.name}</strong> - {course.description}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}
