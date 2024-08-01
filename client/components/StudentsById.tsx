
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'
import request from 'superagent'
import { Course } from '../../models/types.ts'
import useStudentByID from '../hooks/useStudentsById.ts'
import { useState, useEffect } from 'react'

const rootUrl = '/api/v1'

export default function StudentsById() {
  const { id } = useParams<{ id: string }>()
  const studentId = Number(id)

  const { data: student, isLoading, error } = useStudentByID(studentId)
  const { data: coursesData } = useQuery({
    queryKey: ['courses'],
    queryFn: () => request.get(`${rootUrl}/courses`).then((res) => res.body),
  })

  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null)

  const mutation = useMutation({
    mutationFn: (courseId: number) =>
      request.post(`${rootUrl}/students/${studentId}/courses`).send({ courseId }),
    onError: (error) => {
      console.error('Error adding course:', error)
    },
    onSuccess: () => {
      console.log('Course added successfully')
    },
  })

  const handleAddCourse = () => {
    if (selectedCourseId) {
      mutation.mutate(selectedCourseId)
    }
  }
  useEffect(() => {
    console.log('Student Data:', student)
    console.log('Courses Data:', coursesData)
 
  }, [student, coursesData])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading student: {error.message}</div>
  if (!student) return <div>No student found</div>


  const courses: Course[] = Array.isArray(coursesData) ? coursesData : []

  const studentCourses = student.course || []

  const unenrolledCourses: Course[] = courses.filter(
    (course: Course) => !studentCourses.some((sc: Course) => sc.id === course.id)
  )

  return (
    <>
      <div className="app">
        <h2>Details of student:</h2>
        <div>
          <h3>Name: {student.first_name || ''} {student.last_name || ''}</h3>
          <h3>Enrolled Courses:</h3>
          <ul>
          {studentCourses.length > 0 ? (
            studentCourses.map((course: Course) => (
              <li key={course.id}>{course.name}</li>
            ))
          ) : (
            <li>No courses enrolled</li>
          )}
          </ul>
        </div>

        <div>
          <h3>Add Course</h3>
          <select
            onChange={(e) => setSelectedCourseId(Number(e.target.value))}
            value={selectedCourseId || ''}
          >
          <option value="" disabled>
            Select a course
          </option>
          {unenrolledCourses.length > 0 ? (
            unenrolledCourses.map((course: Course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))
          ) : (
            <option value="" disabled>No courses available</option>
          )}
          </select>
          <button onClick={handleAddCourse}>Confirm</button>
        </div>
      </div>
    </>
  )
}
