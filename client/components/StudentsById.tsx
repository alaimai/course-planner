import useStudentsById from '../hooks/useStudents.ts'

export default function StudentsById() {
  const { data } = useStudentsById()

  return (
    <>
      <div className="app">
        <h2>Details of student:</h2>
        <ul>
          {data && data.map((student) => <li key={student}>{student}</li>)}
        </ul>
      </div>
    </>
  )
}
