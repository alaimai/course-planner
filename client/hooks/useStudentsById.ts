import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

export default function useStudentByID(id: number) {
  return useQuery({
    queryFn: async () => {
      const res = await request.get(`/api/v1/students/${id}`)
      return res.body
    },
    queryKey: ['students', id],
  })
}
