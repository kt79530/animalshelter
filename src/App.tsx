import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ModalTestComp from '../src/components/modal/ModalTestComp';

import Gallery from './pages/Gallery';


function App() {
  const [showPost, setShowPost] = useState(true);
  return (
    <>
    <Header/>
    {/*<ModalTestComp/>*/}
    <Gallery/>
   {/* <Footer/>*/}
    </>
    
  );
}

export default App;
