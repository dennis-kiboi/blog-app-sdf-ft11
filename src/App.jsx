import { useState } from 'react';
import { Header } from './components/Header';
import { PostList } from './components/PostList';
import { Post } from './components/Post';
import { About } from './components/About';
import { Contact } from './components/Contact';
import './App.css';
import { Routes, Route } from 'react-router-dom';


export function App() {
  
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path='/' element={<PostList />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/post/:postId' element={<Post />} />
        </Routes>
      </main>
    </div>
  );
}