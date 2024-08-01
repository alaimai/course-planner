<<<<<<< HEAD
import { useFruits } from '../hooks/useFruits.ts'
import { useCoursesById } from '../hooks/useCourses.ts'
import CourseNav from './CourseNav.tsx'
=======
import { useParams } from 'react-router-dom';
import useCourseById from '../hooks/useCoursesById'
>>>>>>> 5ef395fa33ff7af5d4ad272e5940ff24570cadf0

export default function CourseById() {
  const { courseId } = useParams<{ courseId: string }>();
  const { data, error, isLoading } = useCourseById(Number(courseId));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading course: {error.message}</div>;
  }

  if (!data) {
    return <div>No course found</div>;
  }

  return (
<<<<<<< HEAD
    <>
      <CourseNav />
      <div className="app">
        <h2>Students in this course:</h2>
        <ul>{data && data.map((course) => <li key={course}>{course}</li>)}</ul>
      </div>
    </>
  )
=======
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>Teacher ID: {data.teacher_id}</p>
    </div>
  );
>>>>>>> 5ef395fa33ff7af5d4ad272e5940ff24570cadf0
}
