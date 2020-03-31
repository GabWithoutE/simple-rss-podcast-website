import axios from 'axios';
import { RSS_URL } from "helpers/config";

export default function fetchRss() {
  return axios.get(
    RSS_URL,
  ).then( response => {
    const rssString = response.data;
    if (!rssString) {
      throw Error('RSS feed has no data');
    }
    return rssString;
  });
}