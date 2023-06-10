import { useEffect } from 'react'
import Sample from './components/common/Sample'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api'
import Root from './pages/Root'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {

  useEffect(() => {
    console.log(2);
  }, [])


  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/' element={<Root />}>

            <Route path='/sample' element={<Sample message='sample' />} />
            <Route path='/wew' element={<Sample message='wew' />} />
            <Route path='*' element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider >
  )
}

export default App
