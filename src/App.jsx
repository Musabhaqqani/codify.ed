import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import LoadEditor from './components/loadEditor'
import ProtectedRoutes from './components/protectedRoutes'
import Dashboard from './components/dashboard'
import Signup from './components/signup'
import SubjectPage from './components/subjectPage'
import DisplayQuestionList from './components/displayQuestionList'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route element={<ProtectedRoutes />} >
            <Route path='/admin-dashboard' element={<Dashboard />} />
            <Route path='/admin-dashboard/subject/:subjectName' element={<SubjectPage />} />
            <Route path='/admin-dashboard/subject/:subjectName/:weekNumber' element = {<DisplayQuestionList />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
