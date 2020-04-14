import request from '@/utils/request'

export function saveAsDraft(draftForm) {
  return request({
    url: 'api/save',
    method: 'post',
    data: draftForm
  })
}

export function publishArticle(markdownForm) {
  return request({
    url: 'api/publish',
    method: 'post',
    data: markdownForm
  })
}