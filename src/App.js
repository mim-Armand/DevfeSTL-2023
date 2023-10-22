import React from "react";
import Navbar from "./components/navbar.jsx";
import Landing from "./Pages/Landing";

const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Landing/>
    </div>
  );
};

export default App;
