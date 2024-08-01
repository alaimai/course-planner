import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Student_course } from '../../models/types'

export default function useStudentById(id: number) {
  return useQuery({
    queryFn: async () => {
      const res = await request.get(`/api/v1/students/${id}`)
      return res.body
    },
    queryKey: ['students', id],
  })
}
