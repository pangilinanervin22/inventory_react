import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Root from './pages/Root'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Employee from './pages/Employee'
import Sales from './pages/Sales'
import Inventory from './pages/Stock'
import Product from './pages/Product'
import Report from './pages/Report'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/app.scss"
import storeUserProfile from './app/login'

function App() {
  const token = storeUserProfile(state => state.token)
  const nav = useLocation();

  useEffect(() => {
    console.log(import.meta.env.VITE_PORT)
    console.log(import.meta.env.PORT) // 123
  }, [])

  useEffect(() => {
  }, [nav.pathname, localStorage.getItem("token")])


  return (
    <>
      {token ?
        <Routes>
          <Route path='/' element={<Root />}>
            <Route path='/' element={<Report />} />
            <Route path='/employee' element={<Employee />} />
            <Route path='/sales' element={<Sales />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/employee' element={<Employee />} />
            <Route path='/product' element={<Product />} />
            <Route path='*' element={<h1>Not Found</h1>} />
          </Route>
        </Routes> :
        <Routes>
          <Route path='/*' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      }

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </>
  )
}

export default App
