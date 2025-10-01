import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './layout/header/Header';
import Footer from './layout/Footer';
import Nav from './layout/nav/Nav';
import Gallery from './pages/Gallery';
import ReHome from './pages/ReHome';  
import Category from './pages/category/Category';
import Post from './components/post/Post';
import Notice from './pages/notice/Notice';
import PetStory from './pages/petstory/PetStory';
import MainPage from './pages/main/Main';

function App() {
  const [showPost, setShowPost] = useState(true);
  const Main = MainPage
  return (
    
    <HashRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header/>
        <Nav />
          <main style={{flexGrow:1}}>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path="/pages/Gallery" element={<Gallery />} />
              <Route path="/pages/ReHome" element={<ReHome />} />
              <Route path='/components/post/Post' element={<Post />} />
              <Route path='/pages/category/Category' element={<Category/>} />
              <Route path='/notice' element={<Notice/>} />
              <Route path="/petstory" element={<PetStory />} />
            </Routes>       
          </main>
          <Footer/>
      </div>
    </HashRouter>
    
    
  );
}

export default App;
