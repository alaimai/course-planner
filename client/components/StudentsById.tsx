import { Student_course } from '../../models/types.ts'
import useStudentsById from '../hooks/useStudentsById.ts'
import { useParams } from 'react-router-dom'
export default function StudentsById() {
  const params = useParams()
  const id = Number(params.id)
  const { data } = useStudentsById(id)

  return (
    <>
      <div className="app">
        <h2>Details of student:</h2>
        <ul>
          {data &&
            data.map((student: Student_course) => (
              <li key={student.id}>{student.course_name}</li>
            ))}
        </ul>
      </div>
    </>
  )
}
