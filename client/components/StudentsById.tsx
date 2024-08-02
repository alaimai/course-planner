import { Link, useParams } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { Course, Student_course } from '../../models/types.ts'
import useStudentByID from '../hooks/useStudentsById.ts'
import { useState, useEffect } from 'react'

const rootUrl = '/api/v1'

export default function StudentsById() {
  const { id } = useParams<{ id: string }>()
  const studentId = Number(id)
  const [unenrolledCourse, setUnenrolledCourse] = useState<Course[]>([])

  const { data: student, isLoading, error } = useStudentByID(studentId)
  const { data: coursesData } = useQuery({
    queryKey: ['courses'],
    queryFn: () => request.get(`${rootUrl}/courses`).then((res) => res.body),
  })

  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null)
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (courseId: number) =>
      request
        .post(`${rootUrl}/students/${studentId}/courses`)
        .send({ courseId }),
    onError: (error) => {
      console.error('Error adding course:', error)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students', studentId] })
      console.log('Course added successfully')
    },
  })

  const handleAddCourse = () => {
    if (selectedCourseId) {
      mutation.mutate(selectedCourseId)
    }
  }
  useEffect(() => {
    const getUnrolledCourses = () => {
      const courses: Course[] = Array.isArray(coursesData) ? coursesData : []

      const studentCourses = student || []
      const unenrolledCourses: Course[] = courses.filter(
        (course: Course) =>
          !studentCourses.some(
            (sc: Partial<Student_course>) => sc.course_name === course.name,
          ),
      )
      setUnenrolledCourse(unenrolledCourses)
    }
    getUnrolledCourses()
  }, [student, coursesData])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading student: {error.message}</div>
  if (!student) return <div>No student found</div>

  // const courses: Course[] = Array.isArray(coursesData) ? coursesData : []

  // const studentCourses = student || []
  // const unenrolledCourses: Course[] = courses.filter(
  //   (course: Course) =>
  //     !studentCourses.some(
  //       (sc: Partial<Student_course>) => sc.course_name === course.name,
  //     ),
  // )

  // console.log('student', student)
  // console.log('studentCourses', studentCourses)
  // console.log('courses', courses)
  // console.log('unenrolledCourses', unenrolledCourses)

  // const unenrolledCourses =

  // console.log('this is the studentCourses:', studentCourses)

  return (
    <>
      <div className="app">
        <h2>Details of student:</h2>
        <div>
          <h3>
            Name: {student[0].first_name || ''} {student[0].last_name || ''}
          </h3>
          <h3>Enrolled Courses:</h3>
          <ul>
            {student.length > 0 ? (
              student.map((course: Partial<Student_course>) => (
                <li key={course.id}>
                  <Link to={`/courses/${course.id}`}>{course.course_name}</Link>
                </li>
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
            {unenrolledCourse.length > 0 ? (
              unenrolledCourse.map((course: Course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No courses available
              </option>
            )}
          </select>
          <button onClick={handleAddCourse}>Confirm</button>
        </div>
      </div>
    </>
  )
}
