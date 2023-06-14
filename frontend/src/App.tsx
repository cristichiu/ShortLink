import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../setPublic/scss/index.scss"
import "../setPublic/scss/color.scss"

import Login from "./compontents/login"
import Register from "./compontents/register"
import AdminPannel from "./compontents/adminPannel"
import Redirect from "./compontents/redirect"
import Err404 from "./compontents/err404"

function App() {
  return (<>
  <BrowserRouter>
      <Routes>
        <Route path='app'>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path=':username/:admin' element={<AdminPannel />}></Route>
          <Route path="*" element={<Err404 />}></Route>
        </Route>
        <Route path='/:user/:link' element={<Redirect />}></Route>
      </Routes>
  </BrowserRouter>
  </>)
}

export default App