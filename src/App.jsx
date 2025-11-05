import React from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Course from "./pages/Course";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <main>
        
        <Home />
      </main> */}
      <Course />
      <Footer />
    </div>
  );
}

export default App;
