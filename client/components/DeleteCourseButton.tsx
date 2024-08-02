import useStudentsDeleteCourse from '../hooks/useStudentsDeleteCourse.ts'

const DeleteCourseButton = ({ studentId, courseId }) => {
  // Call the custom hook
  const { data, refetch } = useStudentsDeleteCourse(studentId, courseId)

  // Handler to trigger deletion
  const handleDelete = () => {
    refetch() // Manually trigger the query
  }

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteCourseButton
