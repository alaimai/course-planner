import useStudents from '../hooks/useStudents.ts'

export default function Students() {
  const { data } = useStudents()

  return (
    <>
      <div className="app">
        <h1>List of current students:</h1>
        <ul>
          {data && data.map((student: number) => <li key={student}>{student}</li>)}
        </ul>
      </div>
    </>
  )
}
