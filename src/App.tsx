import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './layout/header/Header';
import Main from './pages/main/Main';
import Footer from './layout/Footer';
import Nav from './layout/nav/Nav';
import Gallery from './pages/Gallery';
import ReHome from './pages/ReHome';  
import Notice from './pages/notice/Notice';
import Category from './pages/category/Category';
import Post from './components/post/Post';
import ModalTestComp from './components/modal/ModalTestComp';

function App() {
  const [showPost, setShowPost] = useState(true);
  return (
    <>
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header/>
        <Nav />
          <main style={{flexGrow:1}}>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path="/pages/Gallery" element={<Gallery />} />
              <Route path="/pages/ReHome" element={<ReHome />} />
              <Route path="/components/modal/ModalTestComp" element={<ModalTestComp />} />
              <Route path='/components/post/Post' element={<Post />} />
              <Route path='/pages/category/Category' element={<Category/>} />
              <Route path='/pages/notice/Notice' element={<Notice/>} />
              
            </Routes>       
          </main>
          <Footer/>
      </div>
    </Router>
    </>
    
  );
}

export default App;
