import { useFruits } from '../hooks/useFruits.ts'
import { useStudents } from '../hooks/useStudents.ts'

import  useStudents  from '../hooks/useStudents.ts'
import { Personal_info } from '../../models/types.ts'
export default function Students() {
  const { data } = useStudents()
  

  return (
    <>
      <div className="app">
        <h2>List of current students:</h2>
        <ul>
          {data && data.map((student:Personal_info) => <li key={student.id}>{student.last_name}</li>)}
        </ul>
      </div>
    </>
  )
}
