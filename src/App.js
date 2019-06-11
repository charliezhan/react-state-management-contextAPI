import React from 'react';
import MovieList from './MovieList';
import { MovieProvider } from './MovieContext';
import AddMovie from './AddMovie';
import './App.css';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
