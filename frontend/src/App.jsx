import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { LoginPage,SignupPage,HomePage,CreateProduct,MyProducts,cart} from "./routes.jsx"

import './App.css';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create-product" element={<CreateProduct/>}/>
        <Route path="/my-products" element={<MyProducts/>}/>
        <Route path="/create-product/:id" element={<CreateProduct/>}/>
        <Route path="/cart" element={<cart/>}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App;