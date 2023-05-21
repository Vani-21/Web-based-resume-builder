import React, { useState, useEffect, useRef, Fragment } from 'react';
//import { useReactToPrint } from 'react-to-print';
//import Navbar from './First/components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import './First/styles/App.scss';
//import ResumePage from './First/ResumePage';
import Template from './First/Template';
import ResumeState from './First/Context/ResumeState';
import Home from './pages/Home';
import Template2 from './Second/Components/Template2';
import ResumeState2 from './Second/Components/Context/ResumeState2';
//import axios from 'axios';
import Template3 from './Third/Template3';
import ResumeState3 from './Third/Context/ResumeState3';
import Templatepage from './pages/Templatepage';

import ResumeState4 from './Fourth/Context/ResumeState4';
import Template4 from './Fourth/Template4';
import Template5 from './Fifth/Template5';
import ResumeState5 from './Fifth/Context/ResumeState5';
import Navbar from './pages/Navbar';

import Template6 from './Sixth/Template6';
import ResumeState6 from './Sixth/Context/ResumeState6';
import Template7 from './Seventh/Template7';
import ResumeState7 from './Seventh/Context/ResumeState7';
import Template8 from './Eighth/Template8';
import ResumeState8 from './Eighth/Context/ResumeState8';
import Template9 from './Nineth/Template9';
import ResumeState9 from './Nineth/Context/ResumeState9';
import Template10 from './Tenth/Template10';
import ResumeState10 from './Tenth/Context/ResumeState10';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <ResumeState>
      <ResumeState2>
      <ResumeState3>
          <ResumeState4>
            <ResumeState5>
              <ResumeState6>
                <ResumeState7>
                  <ResumeState8>
                    <ResumeState9>
                      <ResumeState10>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/templatepage' element={<Templatepage/>} />
        <Route exact path='/resume' element={<Template/> } />
        <Route exact path='/about' element={<AboutUs/> } />
        <Route exact path='/contact' element={<ContactUs/> } />
        <Route exact path="/template2" element={<Template2/>} />
        <Route exact path="/template3" element={<Template3/>} />
        <Route exact path="/template4" element={<Template4/>} />
        <Route exact path="/template5" element={<Template5/>} />
        <Route exact path="/template6" element={<Template6/>} />
        <Route exact path="/template7" element={<Template7/>} />  
        <Route exact path="/template8" element={<Template8/>} />   
        <Route exact path="/template9" element={<Template9/>} />    
        <Route exact path="/template10" element={<Template10/>} />  
        </Routes>
        </ResumeState10>
        </ResumeState9>
        </ResumeState8>
        </ResumeState7>
      </ResumeState6>
      </ResumeState5>
      </ResumeState4>
      </ResumeState3>
      </ResumeState2>
      </ResumeState>
    </Router>
  );
};

export default App;

