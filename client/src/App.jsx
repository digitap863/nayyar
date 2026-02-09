import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import ScrollToTop from "./Components/ScrollToTop.jsx";
import MainRouter from "./Routes/Router.jsx";

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
        <ScrollToTop />
        <MainRouter />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;

