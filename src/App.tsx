import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Nav from './layout/Nav';
import ModalTestComp from '../src/components/ModalTestComp';

function App() {
  return (
    <>
    <Header/>
    <ModalTestComp/>
    <Footer/>
    </>
  );
}

export default App;
