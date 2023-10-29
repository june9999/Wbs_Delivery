import React from "react";
// import './App.css';
import Header from "./components/Common/Header";
import Main from "./components/Main";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <>
      <div className="sticky  top-0 z-50">
        <Header />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
