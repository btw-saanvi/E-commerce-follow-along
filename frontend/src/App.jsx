import { BrowserRouter,Routes,Route } from "react-router-dom";
import { LoginPage,SignupPage } from "./routes.jsx"

import './App.css';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;