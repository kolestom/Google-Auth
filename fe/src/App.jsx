import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/RootLayout'
import LoginPage from './pages/LoginPage'
import CallbackPage from './pages/CallbackPage'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        // path: 'login',
        index: true,
        element: <LoginPage/>
      },
      {
        path: 'callback',
        element: <CallbackPage/>
      },
      {
        path: 'home',
        element: <HomePage/>
      }
    ]
  }
])

function App() {
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
