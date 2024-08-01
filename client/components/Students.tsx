
import  useStudents  from '../hooks/useStudents.ts'
import { Personal_info } from '../../models/types.ts'
export default function Students() {
  const { data } = useStudents()
  

  return (
    <>
      <div className="app">
        <h1>List of current students:</h1>
        <ul>
          {data && data.map((student:Personal_info) => <li key={student.id}>{student.last_name}</li>)}
        </ul>
      </div>
    </>
  )
}
