import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from './pages/Home';

// test

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/skills" element={<Home />} />
          <Route path="/resume" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          {/* {<Route path="/project/:id" element={<ProjectDetails />} />}
          <Route path="/subproject/:id1/:id" element={<SubProjectDetails />} /> */}
        </Routes>
        <Footer />
        <div className="text-3xl bg-black text-white h-screen">dfgjhjkdljld</div>
      <div className="text-3xl bg-black text-white h-screen">dfgjhjkdljld</div>
      <div className="text-3xl bg-black text-white h-screen">dfgjhjkdljld</div>
      </div>
      
    </Router>
  );
}

export default App;
