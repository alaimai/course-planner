import { useFruits } from '../hooks/useFruits.ts'
import { useStudents } from '../hooks/useStudents.ts'

export default function Students() {
  const { data } = useFruits()
  //const { data } = useStudents() //to be replaced once server route complete

  return (
    <>
      <div className="app">
        <h2>List of current students:</h2>
        <ul>
          {data && data.map((student) => <li key={student}>{student}</li>)}
        </ul>
      </div>
    </>
  )
}
