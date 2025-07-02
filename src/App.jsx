import { useEffect, useState } from 'react'
import './App.css'
import AdminContent from './components/adminContent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from './components/landing'
import AdminLogin from './components/adminLogin'
import { PublicRoute } from './routes/publicRoute'
import 'primereact/resources/primereact.min.css'; // Core styles
import 'primeicons/primeicons.css';              // Icons
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Theme styles
import { ViewAllBlog } from './components/viewAllBlog'
import ProtectedRoute from './routes/protectedRoute'
function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(localStorage.getItem('jwt')==='true');
  useEffect(()=>{
    localStorage.setItem('jwt',isAuthenticated);
  },[isAuthenticated])
  return (
        <BrowserRouter basename='/frequent'>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/admin' element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<AdminContent/>}/>}></Route>
          <Route path='/viewAll' element={<ViewAllBlog/>}></Route>
          <Route path='/adminLogin' element={<PublicRoute setIsAuthenticated={setIsAuthenticated}/>}></Route>
        </Routes>
        </BrowserRouter>
  )
}

export default App
