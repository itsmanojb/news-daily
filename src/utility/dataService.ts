import request from './request';

function getHeadlines(urlParams?: string) {
  return request({
    url: `top-headlines?${urlParams}`,
    method: 'GET',
  });
}

function getCategories() {
  return ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
}

const NewsDataService = {
  getHeadlines,
  getCategories
}

export default NewsDataService;