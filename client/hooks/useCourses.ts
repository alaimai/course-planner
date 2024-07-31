import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

export default function useCourses() {
  return useQuery({
    queryFn: async () => {
      const res = await request.get(`/api/v1/courses/`)
      return res.body
    },
    queryKey: ['courses'],
  })
}
