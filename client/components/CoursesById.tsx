import { Link, useParams } from 'react-router-dom'
import useCoursesById from '../hooks/useCoursesById.ts'
import { Course_student } from '../../models/types.ts'
import useTeachers from '../hooks/useTeachers.ts'

export default function CourseById() {
  //const { id } = useParams()
  const params = useParams()
  const id = Number(params.id)
  const { data, error, isLoading } = useCoursesById(id)
  const { data: Teachers, isLoading: isLoadingTeachers } = useTeachers()

  if (isLoading || isLoadingTeachers) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading course: {error.message}</div>
  }

  if (!data) {
    return <div>No course found</div>
  }

  const filteredTeachers = Teachers.filter(
    (teacher) => teacher.id == data[0].teacher_id,
  )
  return (
    <>
      <div className="app">
        <h2>
          Teacher for this course:{' '}
          <Link to={`/teachers/${data[0].teacher_id}`}>
            {filteredTeachers &&
              filteredTeachers[0].first_name +
                ' ' +
                filteredTeachers[0].last_name}
          </Link>
        </h2>
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
