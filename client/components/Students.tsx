import { useFruits } from '../hooks/useFruits.ts'
import { useStudents } from '../hooks/useStudents.ts'

export default function Students() {
  const { data } = useFruits()
  //const { data } = useStudents()

  return (
    <>
      <div className="app">
        <h1>List of current students:</h1>
        <ul>
          {data && data.map((student) => <li key={student}>{student}</li>)}
        </ul>
      </div>
    </>
  )
}
