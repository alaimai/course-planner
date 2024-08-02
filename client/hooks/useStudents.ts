import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

export default function useStudents() {
  return useQuery({
    queryFn: async () => {
      const res = await request.get(`/api/v1/students/`)
      return res.body
    },
    queryKey: ['students'],
  })
}
