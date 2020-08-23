import request from './request';

function getHeadlines(urlParams: any) {
  return request({
    url: `top-headlines?country=in${urlParams}`,
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