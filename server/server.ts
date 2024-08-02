import express from 'express'
import * as Path from 'node:path'

import coursesRoutes from './routes/courses'
import studentsRoutes from './routes/students'
import teachersRoutes from './routes/teachers'
const server = express()

server.use(express.json())

server.use('/api/v1/courses', coursesRoutes)
server.use('/api/v1/students', studentsRoutes)
server.use('/api/v1/teachers', teachersRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
