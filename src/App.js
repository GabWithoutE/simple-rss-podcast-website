import React from 'react';
import 'styles/index.scss';
import Podcast from 'components/views/podcast';

function App() {
  return (
    <div className="website-body">
      <div id="website-root">
        <Podcast />
      </div>
    </div>
  );
}

export default App;
