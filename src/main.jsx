import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Show } from './pages/Show'
import { ThemeContext } from './ThemeContext'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: 'show/:id',
    element: <Show />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
