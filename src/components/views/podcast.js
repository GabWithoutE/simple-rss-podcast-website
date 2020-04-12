import React, { useEffect, useState } from 'react';
import { fetchRss } from 'helpers/api';
import PodcastEpisode from 'components/layout/podcast_episode';
import { INSTAGRAM_URL, GITHUB_URL } from 'helpers/config';

export default function Podcast() {
  const [rss, setRss] = useState(null);
  const [error, setError] = useState(null);

  // Initialize Podcast Episode List
  useEffect(() => {
    fetchRss()
      .then((data) => {
        setRss(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [setRss, setError]);

  return (
    <main>
      <header id="title_banner">
        { rss && <img src={rss.image.url} alt="podcast" /> }
        <div className="title-info">
          <h1 className="title">{rss && rss.title}</h1>
          <h2 className="creator">{`By: ${rss && rss.creator}`}</h2>
          <nav className="external-links">
            <a className="simple-rss-website-icons" href={INSTAGRAM_URL}>instagram</a>
            <a className="simple-rss-website-icons" href={GITHUB_URL}>github</a>
          </nav>
        </div>
      </header>

      <hr />

      <h3>Episodes</h3>
      <ul className="podcast-episode-list">
        { rss && rss.items.map((episode) => (
          <PodcastEpisode
            key={episode.guid}
            title={episode.title}
            link={episode.link}
            pubDate={episode.pubDate}
          />
        ))}
      </ul>

      { error && <p>RSS Feed Unavailable</p> }
    </main>
  );
}
