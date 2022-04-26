import React from 'react';
import './App.css';
import ItemList from './components/item-list';

function App() {
  return (
    <div className="App">
      <h2>My To Do List:</h2>
      <ItemList />
    </div>
  );
}

export default App;
