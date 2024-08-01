
import useStudentsById from '../hooks/useStudents.ts'

export default function StudentsById() {
  const { data } = useStudentsById() 

  return (
    <>
      <div className="app">
        <h1>Details of student:</h1>
        <ul>
          {data && data.map((student: number) => <li key={student}>{student}</li>)}
        </ul>
      </div>
    </>
  )
}
