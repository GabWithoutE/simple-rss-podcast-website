import Parser from 'rss-parser';
import { RSS_URL } from 'helpers/config';

const PARSER = new Parser();

export function fetchRss() {
  return fetch(RSS_URL, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      accept: 'application/rss+xml',
    },
  }).then((response) => response.text())
    // .then((response) => response.json())
    .then((data) => {
      if (!data) {
        throw new Error('RSS request failed');
      }
      return PARSER.parseString(data);
    });
}
