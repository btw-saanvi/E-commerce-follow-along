import { BrowserRouter,Routes,Route } from "react-router-dom";
import { LoginPage,SignupPage,HomePage } from "./routes.jsx"

import './App.css';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/Home" element={<HomePage/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;