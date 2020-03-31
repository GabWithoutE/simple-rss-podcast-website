import React, { useEffect, useState } from 'react';
import fetchRss from 'helpers/api';

export default function Podcast() {
  const [rss, setRss] = useState(null);
  const [error, setError] = useState(null);

  // Initialize Podcast Episode List
  useEffect(() => {
    fetchRss()
      .then(data => {
        setRss(data);
      })
      .catch(err => {
        setError(err);
      });
  }, [setRss, setError]);

  return (
    <>
      <header>Podcast Name Here</header>
      { rss &&
        <p>{ rss }</p>
      }
      { error &&
        <p>RSS Feed Unavailable</p>
      }
    </>
  );
}