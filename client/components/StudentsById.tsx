import { Student_course } from '../../models/types.ts'
import useStudentsById  from '../hooks/useStudents.ts'

export default function StudentsById() {
  const { data } = useStudentsById()
  
  return (
    <>
      <div className="app">
        <h2>Details of student:</h2>
        <ul>
          {data && data.map((student:Student_course) => <li key={student.id}>{student.course_name}</li>)}
        </ul>
      </div>
    </>
  )
}
