import React, { useEffect, useState } from 'react';
import { fetchRss } from 'helpers/api';
import PodcastEpisode from 'components/layout/podcast_episode';

export default function Podcast() {
  const [rss, setRss] = useState(null);
  const [error, setError] = useState(null);

  // Initialize Podcast Episode List
  useEffect(() => {
    fetchRss()
      .then((data) => {
        setRss(data);
        // setRss(JSON.parse("{\"items\":[{\"creator\":\"Gabriel and Daniel\",\"title\":\"Coronavirus: What Would Jesus Do?\",\"link\":\"https://anchor.fm/gabriel-daniel-shew/episodes/Coronavirus-What-Would-Jesus-Do-ec6c57\",\"pubDate\":\"Tue, 31 Mar 2020 05:24:26 GMT\",\"enclosure\":{\"url\":\"https://anchor.fm/s/1758782c/podcast/play/11791975/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-2-31%2F60437320-48000-2-8d8301017fb43.mp3\",\"length\":\"60372064\",\"type\":\"audio/mpeg\"},\"dc:creator\":\"Gabriel and Daniel\",\"content\":\"<p>The first ever episode of ShewMeTheWay (please forgive the poor podcasting and editing skills), where your hosts Daniel and Gabriel talk about life, the gospel, and how God is speaking into their lives.</p>\\n<p>This episode, Gab and Dan talk about Coronavirus, convictions, and living life like Jesus amidst the current shelter in place situation.</p>\\n<p>Recorded: March 2020</p>\\n\",\"contentSnippet\":\"The first ever episode of ShewMeTheWay (please forgive the poor podcasting and editing skills), where your hosts Daniel and Gabriel talk about life, the gospel, and how God is speaking into their lives.\\nThis episode, Gab and Dan talk about Coronavirus, convictions, and living life like Jesus amidst the current shelter in place situation.\\nRecorded: March 2020\",\"guid\":\"66e2b22a-44af-4041-8a39-9e15fb9468e7\",\"isoDate\":\"2020-03-31T05:24:26.000Z\",\"itunes\":{\"summary\":\"<p>The first ever episode of ShewMeTheWay (please forgive the poor podcasting and editing skills), where your hosts Daniel and Gabriel talk about life, the gospel, and how God is speaking into their lives.</p>\\n<p>This episode, Gab and Dan talk about Coronavirus, convictions, and living life like Jesus amidst the current shelter in place situation.</p>\\n<p>Recorded: March 2020</p>\\n\",\"explicit\":\"No\",\"duration\":\"5030\",\"image\":\"https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/3816739/3816739-1584682851858-3638943413315.jpg\",\"episode\":\"1\"}},{\"creator\":\"Gabriel and Daniel\",\"title\":\"Coronavirus: What Would Jesus Do?\",\"link\":\"https://anchor.fm/gabriel-daniel-shew/episodes/Coronavirus-What-Would-Jesus-Do-ec6c57\",\"pubDate\":\"Tue, 31 Mar 2020 05:24:26 GMT\",\"enclosure\":{\"url\":\"https://anchor.fm/s/1758782c/podcast/play/11791975/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-2-31%2F60437320-48000-2-8d8301017fb43.mp3\",\"length\":\"60372064\",\"type\":\"audio/mpeg\"},\"dc:creator\":\"Gabriel and Daniel\",\"content\":\"<p>The first ever episode of ShewMeTheWay (please forgive the poor podcasting and editing skills), where your hosts Daniel and Gabriel talk about life, the gospel, and how God is speaking into their lives.</p>\\n<p>This episode, Gab and Dan talk about Coronavirus, convictions, and living life like Jesus amidst the current shelter in place situation.</p>\\n<p>Recorded: March 2020</p>\\n\",\"contentSnippet\":\"The first ever episode of ShewMeTheWay (please forgive the poor podcasting and editing skills), where your hosts Daniel and Gabriel talk about life, the gospel, and how God is speaking into their lives.\\nThis episode, Gab and Dan talk about Coronavirus, convictions, and living life like Jesus amidst the current shelter in place situation.\\nRecorded: March 2020\",\"guid\":\"66e2b22a-44af-4041-8a39-9e15fb7468e7\",\"isoDate\":\"2020-03-31T05:24:26.000Z\",\"itunes\":{\"summary\":\"<p>The first ever episode of ShewMeTheWay (please forgive the poor podcasting and editing skills), where your hosts Daniel and Gabriel talk about life, the gospel, and how God is speaking into their lives.</p>\\n<p>This episode, Gab and Dan talk about Coronavirus, convictions, and living life like Jesus amidst the current shelter in place situation.</p>\\n<p>Recorded: March 2020</p>\\n\",\"explicit\":\"No\",\"duration\":\"5030\",\"image\":\"https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/3816739/3816739-1584682851858-3638943413315.jpg\",\"episode\":\"1\"}}],\"feedUrl\":\"https://anchor.fm/s/1758782c/podcast/rss\",\"image\":{\"link\":\"https://anchor.fm/gabriel-daniel-shew\",\"url\":\"https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/3816739/3816739-1584682851858-3638943413315.jpg\",\"title\":\"Shew Me The Way\"},\"creator\":\"Gabriel and Daniel\",\"title\":\"Shew Me The Way\",\"description\":\"Two twenty-something year olds Christians in the Bay Area, having conversations about the gospel, and how it impacts us and the people around us.\",\"author\":\"Gabriel and Daniel\",\"generator\":\"Anchor Podcasts\",\"link\":\"https://anchor.fm/gabriel-daniel-shew\",\"language\":\"en\",\"copyright\":\"Gabriel and Daniel\",\"lastBuildDate\":\"Wed, 01 Apr 2020 02:38:57 GMT\",\"itunes\":{\"owner\":{\"name\":\"Gabriel and Daniel\",\"email\":\"\"},\"image\":\"https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/3816739/3816739-1584682851858-3638943413315.jpg\",\"categories\":[\"Religion & Spirituality\"],\"author\":\"Gabriel and Daniel\",\"summary\":\"Two twenty-something year olds Christians in the Bay Area, having conversations about the gospel, and how it impacts us and the people around us.\",\"explicit\":\"No\"}}"));
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
        </div>
      </header>

      <hr />

      <h3>Episode</h3>
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
