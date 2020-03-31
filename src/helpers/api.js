import Parser from 'rss-parser';
import { RSS_URL } from 'helpers/config';

const PARSER = new Parser();

export function fetchRss() {
  return PARSER.parseURL(RSS_URL);
}
