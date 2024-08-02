import { useParams } from 'react-router-dom'
import useTeacherById from '../hooks/useTeacherById.ts'
import { Course_student } from '../../models/types.ts'

export default function TeacherById() {
  //const { id } = useParams()
  const params = useParams()
  const id = Number(params.id)
  const { data, error, isLoading } = useTeacherById(id)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading course: {error.message}</div>
  }

  if (!data) {
    return <div>No course found</div>
  }
  console.log(data)
  return (
    <>
      <div className="app">
        <h2>Details of teacher:</h2>
        <div>
          <h3>
            Name: {data.first_name || ''} {data.last_name || ''}
          </h3>
          
        </div>
      </div>
    </>
  )
}
