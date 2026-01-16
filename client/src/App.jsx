import './App.css'
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./Routes/Router.jsx";
import { Toaster } from "react-hot-toast";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <MainRouter />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;

