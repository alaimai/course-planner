import { useParams } from 'react-router-dom'
import useCoursesById from '../hooks/useCourses.ts'
import CourseNav from './CourseNav.tsx'

export default function CourseById() {
  const { courseId } = useParams()
  const { data, error, isLoading } = useCoursesById(courseId)

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
        <ul>{data && data.map((course) => <li key={course}>{course}</li>)}</ul>
      </div>
    </>
  )
}
