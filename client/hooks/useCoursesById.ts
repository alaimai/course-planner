import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

export default function useCoursesById(id: number) {
  return useQuery({
    queryFn: async () => {
      const res = await request.get(`/api/v1/courses/${id}`)
      return res.body
    },
    queryKey: ['courses', id],
  })
}
