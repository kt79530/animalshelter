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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header/>
      <main style={{flexGrow:1}}>
        {/*<ModalTestComp/>*/}
        <Gallery/>
      </main>
      <Footer/>
    </div>
    </>
    
  );
}

export default App;
