import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';

export default function PodcastEpisode({
  title, link, pubDate,
}) {
  return (
    <li className="podcast-episode">
      <a href={link}>{title}</a>
      <p>{moment(pubDate).format('LL')}</p>
    </li>
  );
}

PodcastEpisode.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  pubDate: PropTypes.string.isRequired,
};
