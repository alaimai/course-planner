import useCourses from '../hooks/useCourses.ts'
import { Course } from '../../models/types.ts'

export default function Courses() {
  const { data, error, isLoading } = useCourses()

  if(isLoading) {
    return <div>Loading...</div>
  }
  
  if(error) {
    return <div>Error loading courses: {error.message}</div>
  }

  if(!data) {
    return <div>No courses available</div>
  }
  return (
    <>
      <div className="app">
        <h1>List of current courses:</h1>
        <ul>{data.map((course: Course, index: number) => <li key={index}>{course.name}</li>)}</ul>
      </div>
    </>
  )
}
