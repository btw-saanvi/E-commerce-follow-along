import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { LoginPage,SignupPage,HomePage,CreateProduct,MyProducts} from "./routes.jsx"

import './App.css';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/create-product" element={<CreateProduct/>}/>
        <Route path="/my-products" element={<MyProducts/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;