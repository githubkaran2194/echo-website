import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  return (
    <>
    <BrowserRouter>
      {/* <Header /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
