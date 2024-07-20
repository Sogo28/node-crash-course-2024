import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

const urlObj = new URL(urlString);

// console.log(urlObj);

console.log(url.format(urlObj));

// console.log(import.meta.url);
// console.log(url.fileURLToPath(import.meta.url));

const urlParams = new URLSearchParams(urlObj.search);
console.log(urlParams.get('q'));
urlParams.append('limit', '5');
console.log(urlParams);