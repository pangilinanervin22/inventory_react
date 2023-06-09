import { useEffect } from 'react'
import Sample from './components/common/Sample'
import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api'
import Root from './pages/Root'

function App() {

  useEffect(() => {
    console.log(2);
  }, [])


  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
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
