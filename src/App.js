import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Login from "./component/Login";
import beranda from "./component/beranda";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/beranda" element={<beranda/>}/>
        
      </Routes>
    </BrowserRouter>
  );}
export default App;
