import axios from 'axios';

export default function fetchRss(url) {
  return axios.get(
    url,
  ).then( response => {
    const rssString = response.data;
    if (!rssString) {
      throw Error('RSS feed has no data');
    }
    return rssString;
  });
}