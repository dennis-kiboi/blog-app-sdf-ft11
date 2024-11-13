import { useState } from 'react';
import { Header } from './components/Header';
import { PostList } from './components/PostList';
import { Post } from './components/Post';
import { About } from './components/About';
import { Contact } from './components/Contact';
import './App.css';
import { Routes, Route } from 'react-router-dom';


export function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);

  const renderContent = () => {
    if (selectedPost) {
      return <Post post={selectedPost} onBack={() => setSelectedPost(null)} />;
    }

    switch (currentPage) {
      case 'home':
        return <PostList onPostSelect={setSelectedPost} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <PostList onPostSelect={setSelectedPost} />;
    }
  };

  return (
    <div className="app">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
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