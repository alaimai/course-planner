import { Link, useParams } from 'react-router-dom'
import useCoursesById from '../hooks/useCoursesById.ts'
import { Course_student } from '../../models/types.ts'

export default function CourseById() {
  //const { id } = useParams()
  const params = useParams()
  const id = Number(params.id)
  const { data, error, isLoading } = useCoursesById(id)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading course: {error.message}</div>
  }

  if (!data) {
    return <div>No course found</div>
  }
  console.log(data)
  return (
    <>
      <div className="app">
        <h2>Students in this course: {data[0].name}</h2>
        <ul>
          {data &&
            data.map((course: Partial<Course_student>) => (
              <li key={course.student_id}>
                <Link to={`/students/${course.student_id}`}>
                  {course.student_first_name} {course.student_last_name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}
