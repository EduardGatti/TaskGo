import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/PageHome/Home.jsx"
import Login from "./Pages/PageLogin/Login.jsx"
import Register from "./Pages/PageRegister/Register.jsx"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
