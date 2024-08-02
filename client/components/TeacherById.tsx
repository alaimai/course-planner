import { Link, useParams } from 'react-router-dom'
import useTeacherById from '../hooks/useTeacherById.ts'
import { Course_student, Teacher_course } from '../../models/types.ts'

export default function TeacherById() {
  //const { id } = useParams()
  const params = useParams()
  const id = Number(params.id)
  const { data, error, isLoading } = useTeacherById(id)

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
        <h2>Details of teacher:</h2>
        <div>
          <h3>
            Name: {data[0].first_name || ''} {data[0].last_name || ''}
          </h3>
          <ul>
            {data.map((teacher: Partial<Teacher_course>) => (
              <li key={teacher.course_id}>
                <Link to={`/courses/${teacher.course_id}`}>
                  {teacher.course_name}
                </Link>{' '}
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
