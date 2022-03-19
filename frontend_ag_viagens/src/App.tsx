import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from 'pages/HomePage';
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";
import Login from "pages/Login";
import Cadastro from "pages/Login/cadastro";

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/destinos" element={<Listing />} />
        <Route path="/form">
          <Route path=":pacoteId" element={<Form />} />
       </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App; 