import { useParams } from 'react-router-dom'
import useCoursesById from '../hooks/useCourses.ts'
import CourseNav from './CourseNav.tsx'
import { Course_student } from '../../models/types.ts'
export default function CourseById() {
  const { id } = useParams()
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

  return (
    <>
      <CourseNav />
      <div className="app">
        <h2>Students in this course:</h2>
        <ul>
          {data &&
            data.map((course: Partial<Course_student>) => (
              <li key={course.id}>
                {course.name}
                {/* {course.student_first_name} */}
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}
