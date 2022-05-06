
import React from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
import './App.css';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="app">
      Header
      <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/albums">Album</Link></p>

      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />

    </div >
  );
}

export default App;
