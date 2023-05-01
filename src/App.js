import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/contact-us" element={<Home />} />
          {/* {<Route path="/project/:id" element={<ProjectDetails />} />}
          <Route path="/subproject/:id1/:id" element={<SubProjectDetails />} /> */}
        </Routes>
        <Footer />
        <div className="h-96 bg-white">
          dfghjkl
        </div>
        <div className="h-96 bg-white">
          dfghjkl
        </div>
        <div className="h-96 bg-white">
          dfghjkl
        </div>
        <div className="h-96 bg-white">
          dfghjkl
        </div>
        <div className="h-96 bg-white">
          dfghjkl
        </div>
        <div className="h-96 bg-white">
          dfghjkl
        </div>
        <div className="h-96 bg-white">
          dfghjkl
        </div>
        <div className="h-96 bg-white">
          dfghjkl
        </div>
        <div className="h-96 bg-white">
          dfghjkl
        </div>
        <div className="h-96 bg-white">
          dfghjkl
        </div>
        <div className="h-96 bg-white">
          dfghjkl
        </div>


      </div>
    </Router>
  );
}

export default App;
