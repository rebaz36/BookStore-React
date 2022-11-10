import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import BooksView from './Pages/Books';
import Categories from './Pages/Categories';
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
