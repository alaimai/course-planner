import request from 'superagent'

const rootUrl = '/api/v1'

export function getCourses(): Promise<string[]> {
  return request.get(rootUrl + '/courses').then((res) => {
    return res.body.courses
  })
}
