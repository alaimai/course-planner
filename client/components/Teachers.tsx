import { Personal_info } from '../../models/types.ts'
import useTeachers from '../hooks/useTeachers.ts'

export default function Teachers() {
  const { data } = useTeachers()

  return (
    <>
      <div className="app">
        <h2>List of current Teachers:</h2>
        <ul>
          {data &&
            data.map((teacher: Personal_info) => (
              <li key={teacher.id}>{teacher.last_name}</li>
            ))}
        </ul>
      </div>
    </>
  )
}
