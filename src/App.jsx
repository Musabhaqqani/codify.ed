import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import LoadEditor from './components/loadEditor'
import ProtectedRoutes from './components/protectedRoutes'
import Signup from './components/signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route element={<ProtectedRoutes />} >
            <Route path='/admin-dashboard' element={<LoadEditor />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
