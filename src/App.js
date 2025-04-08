import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Home/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
