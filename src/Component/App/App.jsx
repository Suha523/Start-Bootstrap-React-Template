import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Portfolio from "../Portfolio/Portfolio";

// import {Helmet} from "react-helmet";



function App() {
  return (
  <>
     <Navbar />
     <Home />
     <Portfolio />
     <About />
     <Contact />
     <Footer />
    
  </>
  );
}

export default App;
