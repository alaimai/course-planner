import { Student_course } from '../../models/types.ts'
import useStudentsById  from '../hooks/useStudents.ts'

export default function StudentsById() {
  const { data } = useStudentsById()
  
  return (
    <>
      <div className="app">
        <h1>Details of student:</h1>
        <ul>
          {data && data.map((student:Student_course) => <li key={student.id}>{student.last_name}</li>)}
        </ul>
      </div>
    </>
  )
}
