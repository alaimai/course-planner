/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router-dom'
import Courses from './components/Courses'
import Layout from './components/Layout'
import Students from './components/Students'
import StudentsById from './components/StudentsById'
import CoursesById from './components/CoursesById'
import Teachers from './components/Teachers'
import TeacherById from './components/TeacherById'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Courses />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/courses/:id" element={<CoursesById />} />
    <Route path="/students" element={<Students />} />
    <Route path="/students/:id" element={<StudentsById />} />
    <Route path="/teachers/:id" element={<TeacherById />} />
    <Route path="/teachers" element={<Teachers />} />
    <Route path="/teachers/:id" element={<TeacherById />} />
  </Route>,
)
