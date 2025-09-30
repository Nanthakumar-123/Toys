import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Art from "./pages/Art";
import Cart from "./pages/Cart";
import Upload from "./pages/Upload";
import Update from "./pages/Update";
import Edit from "./pages/Edit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/art" element={<Art/>} /> */}
          <Route path="/cart" element={<Cart/>} />
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/update' element={<Update/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
