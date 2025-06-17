import React from "react";
import "./Home.css";
const Home = () => {
  return (
  
    <div className="home-page">
  <section className="hero">
    <h1>Welcome to ReactApp</h1>
    <p>Build and Learn React Projects Easily.</p>
    <button>Start Learning</button>
  </section>

  <section className="features">
    <h2>What You'll Learn</h2>
    <ul>
      <li>🎯 React Components</li>
      <li>🧠 Hooks and State</li>
      <li>📦 React Router</li>
      <li>⚙️ Tailwind & Styling</li>
    </ul>
  </section>
</div>
  );
};

export default Home;
