import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { mainQueryClient } from './api/index.ts'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={mainQueryClient}>
      <BrowserRouter >
        <App />
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
      </BrowserRouter>
    </QueryClientProvider >
  </React.StrictMode>,
)
