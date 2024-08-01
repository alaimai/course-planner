import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

export default function useTeachers() {
  return useQuery({
    queryFn: async () => {
      const res = await request.get(`/api/v1/teachers/`)
      return res.body
    },
    queryKey: ['teachers'],
  })
}
