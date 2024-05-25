import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import LoadEditor from './components/loadEditor'
import ProtectedRoutes from './components/protectedRoutes'
import Dashboard from './components/dashboard'
import Signup from './components/signup'
import SubjectPage from './components/subjectPage'
import DisplayQuestionList from './components/displayQuestionList'
import DisplayQuestionDetails from './components/displayQuestionDetails'
import CreateWeek from './components/createWeek'
import CreateTask from "./components/createTask"

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
