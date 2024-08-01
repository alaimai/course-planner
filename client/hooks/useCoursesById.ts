import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

export default function useCoursesById(id: number) {
  return useQuery({
    queryKey: ['courses', id],
    queryFn: async () => {
      try{
        const res = await request.get(`/api/v1/courses/${id}`)
        return res.body
      } catch (error) {
        throw new Error('Failed to fetch the course')
      }
    },
  })
}
