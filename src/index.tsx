import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { mainQueryClient } from './api/index.ts'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={mainQueryClient}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </QueryClientProvider >
  </React.StrictMode>,
)
