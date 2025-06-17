import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar.jsx';
import LeftSidebar from './Components/LeftSidebar/LeftSidebar.jsx';
import Main from './Components/Main/Main.jsx';
import RightSidebar from './Components/RightSidebar/RightSidebar.jsx';

import Home from "./Components/Pages/Home.jsx";
import Learn from "./Components/Pages/Learn.jsx";
import Contact from "./Components/Pages/Contact.jsx";

// Layout wraps the main content area + page content
const Layout = ({ children }) => (
  <div className="layout">
     <RightSidebar />
    <Main>{children}</Main>
     <LeftSidebar />
  </div>
);

const App = () => {
  return (
    <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Layout><Home /></Layout>} />
    <Route path="/learn" element={<Layout><Learn /></Layout>} />
    <Route path="/contact" element={<Layout><Contact /></Layout>} />
  </Routes>
</Router>

  );
};

export default App;
