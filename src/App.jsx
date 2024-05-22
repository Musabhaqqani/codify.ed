import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import LoadEditor from './components/loadEditor'
import ProtectedRoutes from './components/protectedRoutes'
import Dashboard from './components/dashboard'
import Signup from './components/signup'
import SubjectPage from './components/subjectPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route element={<ProtectedRoutes />} >
            <Route path='/admin-dashboard' element={<Dashboard />} />
            <Route path='/admin-dashboard/subject' element={<SubjectPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
