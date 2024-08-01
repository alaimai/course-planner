<<<<<<< HEAD
import { useFruits } from '../hooks/useFruits.ts'
import { useCourses } from '../hooks/useCourses.ts'
import CourseNav from './CourseNav.tsx'
=======
import useCourses from '../hooks/useCourses.ts'
import { Course } from '../../models/types.ts'
>>>>>>> 5ef395fa33ff7af5d4ad272e5940ff24570cadf0

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
      <CourseNav />
      <div className="app">
<<<<<<< HEAD
        <h2>List of current courses:</h2>
        <ul>{data && data.map((course) => <li key={course}>{course}</li>)}</ul>
=======
        <h1>List of current courses:</h1>
        <ul>{data.map((course: Course, index: number) => <li key={index}>{course.name}</li>)}</ul>
>>>>>>> 5ef395fa33ff7af5d4ad272e5940ff24570cadf0
      </div>
    </>
  )
}
