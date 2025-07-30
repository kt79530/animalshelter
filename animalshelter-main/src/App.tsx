import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/header/Header';
import Footer from './layout/Footer';
import Nav from './layout/nav/Nav';
import Search from './components/search/Search';
import Gallery from './components/gallery/GalleryDetail';
import Notice from './components/notice/NoticeBoard';

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <Search/>
    <Gallery/>
    <Notice/>
    </>
  );
}

export default App;
