import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import LoadEditor from './components/loadEditor'
import ProtectedRoutes from './components/protectedRoutes'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<ProtectedRoutes />} >
            <Route path='/dashboard' element={<LoadEditor />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
