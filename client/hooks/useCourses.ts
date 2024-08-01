import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

export default function useCourses(id: string | undefined) {
  return useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      try {
        const res = await request.get(`/api/v1/courses`)
        return res.body.courses
      } catch (error) {
        throw new Error('Failed to fetch courses')
      }
    },
  })
}
