
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Home from './components/Home';
import Navgation from './components/Navgation';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Project from './components/Project';
import Experience from "./components/resume/Experience";
import Languages from "./components/resume/Languages";
import NoPage  from './components/NoPage';
import Education from './components/resume/Education';
const  App = () => {
  return (
    <div className="App">
      <Router>
      <Navgation />
      <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route exact path="/" element={<Home name={"waqar"}/>} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="resume" element={<Resume />}>
            {/* <Route exact index element={<Experience />} /> */}
            <Route path="/resume" element={<Navigate to="experience" replace />} />
            <Route path="education" element={<Education />} />
            <Route path="experience" element={<Experience />} />
            <Route path="languages" element={<Languages />} />   
         </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<NoPage />} />
          </Routes>
    </Router>
    </div>
  );
}

export default App;
