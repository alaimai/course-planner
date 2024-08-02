import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Student_course } from '../../models/types'

export default function useTeacherById(id: number) {
  return useQuery({
    queryFn: async () => {
      const res = await request.get(`/api/v1/teachers/${id}`)
      return res.body
    },
    queryKey: ['teachers', id],
  })
}
