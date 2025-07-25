import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Nav from './layout/Nav';
import Community from '../src/components/Community';

function App() {
  return (
    <>
    <Header/>
    <Community/>
    <Footer/>
    </>
  );
}

export default App;
