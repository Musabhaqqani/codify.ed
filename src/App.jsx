import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/pages/login'
import ProtectedRoutes from './components/pages/protectedRoutes'
import Dashboard from './components/pages/dashboard'
import Signup from './components/pages/signup'
import SubjectPage from './components/pages/subjectPage'
import DisplayQuestionList from './components/pages/displayQuestionList'
import DisplayQuestionDetails from './components/pages/displayQuestionDetails'
import CreateWeek from './components/pages/createWeek'
import CreateTask from "./components/pages/createTask"

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
            <Route path='/admin-dashboard/create-week/:subjectName' element={<CreateWeek />} />
            <Route path='/admin-dashboard/create-task/:subjectName/:weekNumber' element={<CreateTask />} />
            <Route path='/admin-dashboard/subject/:subjectName/:weekNumber' element = {<DisplayQuestionList />} />
            <Route path='/admin-dashboard/subject/:subjectName/:weekNumber/:title' element = {<DisplayQuestionDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
