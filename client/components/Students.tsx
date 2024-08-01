import useStudents from '../hooks/useStudents.ts'

export default function Students() {
  const { data } = useStudents()

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
