import request from './request';

function getHeadlines(urlParams?: string) {
  return request({
    url: `top-headlines?${urlParams}`,
    method: 'GET',
  });
}

function getNewsSources() {
  return request({
    url: `sources`,
    method: 'GET',
  });
}

function getCategories() {
  return ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
}
function getLanguages() {
  return [
    { code: 'ar', name: 'العربية', title: 'Arabic' },
    { code: 'de', name: 'Deutsch', title: 'German' },
    { code: 'en', name: 'English', title: 'English' },
    { code: 'es', name: 'Español', title: 'Spanish' },
    { code: 'fr', name: 'français', title: 'French' },
    { code: 'he', name: 'עברית', title: 'Hebrew' },
    { code: 'it', name: 'Italiano', title: 'Italian' },
    { code: 'nl', name: 'Dutch', title: 'Dutch' },
    { code: 'no', name: 'Norsk', title: 'Norwegian' },
    { code: 'pt', name: 'Português', title: 'Portuguese' },
    { code: 'ru', name: 'русский', title: 'Russian' },
    { code: 'se', name: 'Davvisámegiella', title: 'Northern Sami' },
    { code: 'ud', name: 'Urdu', title: 'Urdu' },
    { code: 'zh', name: '中文', title: 'Chinese' },
  ];
}

function getCountries() {
  return [
    { code: 'ae', name: 'UAE' },
    { code: 'ar', name: 'Argentina' },
    { code: 'at', name: 'Austria' },
    { code: 'au', name: 'Australia' },
    { code: 'be', name: 'Belgium' },
    { code: 'bg', name: 'Bulgaria' },
    { code: 'br', name: 'Brazil' },
    { code: 'ca', name: 'Canada' },
    { code: 'ch', name: 'Switzerland' },
    { code: 'cn', name: 'China' },
    { code: 'co', name: 'Colombia' },
    { code: 'cu', name: 'Cuba' },
    { code: 'cz', name: 'Czechia' },
    { code: 'de', name: 'Germany' },
    { code: 'eg', name: 'Egypt' },
    { code: 'fr', name: 'France' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'gr', name: 'Greece' },
    { code: 'hk', name: 'Hong Kong' },
    { code: 'hu', name: 'Hungary' },
    { code: 'id', name: 'Indonesia' },
    { code: 'ie', name: 'Ireland' },
    { code: 'il', name: 'Israel' },
    { code: 'in', name: 'India' },
    { code: 'it', name: 'Italy' },
    { code: 'jp', name: 'Japan' },
    { code: 'kr', name: 'Korea' },
    { code: 'lt', name: 'Lithuania' },
    { code: 'lv', name: 'Latvia' },
    { code: 'ma', name: 'Morocco' },
    { code: 'mx', name: 'Mexico' },
    { code: 'my', name: 'Malaysia' },
    { code: 'ng', name: 'Nigeria' },
    { code: 'nl', name: 'Netherlands' },
    { code: 'no', name: 'Norway' },
    { code: 'nz', name: 'New Zealand' },
    { code: 'ph', name: 'Philippines' },
    { code: 'pl', name: 'Poland' },
    { code: 'pt', name: 'Portugal' },
    { code: 'ro', name: 'Romania' },
    { code: 'rs', name: 'Serbia' },
    { code: 'ru', name: 'Russia' },
    { code: 'sa', name: 'Saudi Arabia' },
    { code: 'se', name: 'Sweden' },
    { code: 'sg', name: 'Singapore' },
    { code: 'si', name: 'Slovenia' },
    { code: 'sk', name: 'Slovakia' },
    { code: 'th', name: 'Thailand' },
    { code: 'tr', name: 'Turkey' },
    { code: 'tw', name: 'Taiwan' },
    { code: 'ua', name: 'Ukraine' },
    { code: 'us', name: 'USA' },
    { code: 've', name: 'Venezuela' },
    { code: 'za', name: 'South Africa' }
  ];
}

const NewsDataService = {
  getNewsSources,
  getHeadlines,
  getCategories,
  getCountries,
  getLanguages
}

export default NewsDataService;