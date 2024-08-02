/*import  useStudents  from '../hooks/useStudents.ts'
import { Personal_info } from '../../models/types.ts'

export default function Students() {
  const { data } = useStudents()

  return (
    <>
      <div className="app">
        <h2>List of current students:</h2>
        <ul>
          {data &&
            data.map((student: Personal_info) => (
              <li key={student.id}>
                {student.first_name} {student.last_name}
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}
*/
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Personal_info } from '../../models/types.ts'

const rootUrl = '/api/v1'

export default function StudentsList() {
  const {
    data: students,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['students'],
    queryFn: () => request.get(`${rootUrl}/students`).then((res) => res.body),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading students: {error.message}</div>

  return (
    <div className="app">
      <h2>List of Students</h2>
      <ul>
        {students.map((student: Personal_info) => (
          <li key={student.id}>
            <Link to={`/students/${student.id}`}>
              {student.first_name} {student.last_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
