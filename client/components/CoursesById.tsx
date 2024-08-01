import { useParams } from 'react-router-dom';
import useCourseById from '../hooks/useCoursesById'

export default function CourseById() {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useCourseById(Number(id));

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
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>Teacher ID: {data.teacher_id}</p>
    </div>
  );
}
