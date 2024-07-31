import { useFruits } from '../hooks/useFruits.ts'
import { useStudentsById } from '../hooks/useStudents.ts'

export default function StudentsById() {
  const { data } = useFruits()
  //const { data } = useStudents() //to be replaced once server route complete

  return (
    <>
      <div className="app">
        <h1>Details of student:</h1>
        <ul>
          {data && data.map((student) => <li key={student}>{student}</li>)}
        </ul>
      </div>
    </>
  )
}
