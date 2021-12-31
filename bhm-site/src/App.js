import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/component';
import Hostel from './components/hostel/component';
import Navbar from './components/navbar/component.js';
import Homepage from './pages/homepage';
import FAQs from './pages/faqs/component';
import Resources from './pages/resources/component'

function App() {
  return (
    <div className="App" id="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/hostel/:hostel" element={<Hostel/>} />
          <Route exact path='/' element={<Homepage/>} />
          <Route path="/faqs" element = {<FAQs/>}/>
          <Route path="/resources" element = {<Resources/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}



export default App;
