import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import BooksView from './Page/Books';
import Categories from './Page/Categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<BooksView />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
