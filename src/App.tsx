import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Root from './pages/Root'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Employee from './pages/Employee'
import Sales from './pages/Sales'
import Inventory from './pages/Stock'
import Product from './pages/Product'
import "./styles/app.scss"

function App() {
  // const { data, isSuccess, error, isLoading } = useQuery({ queryKey: ["employee"], queryFn: getEmployee });

  useEffect(() => {
    console.log(import.meta.env.VITE_PORT)
    console.log(import.meta.env.PORT) // 123

  }, [])

  return (
    <>
      {localStorage.getItem("token") ?
        <Routes>
          <Route path='/' element={<Root />}>
            <Route path='/' element={<h1>2</h1>} />
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
          <Route path='/register' element={<SignUp />} />
        </Routes>
      }

    </>
  )
}

export default App
