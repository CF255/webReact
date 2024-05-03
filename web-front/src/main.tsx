import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './routes/Signup.tsx'
import Login from './routes/Login.tsx'
import Dashboard from './routes/Dashboard.tsx'
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import { AuthProvider } from './auth/AuthProvider.tsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import TresEnRaya from './routes/TresEnRaya.jsx'
import ApiPelis from './routes/ApiPelis.jsx'

const router = createBrowserRouter([

{
  path: "/",
  element: <Login/>
},
{
  path: "/signup",
  element: <Signup/>
},
{
  path: "/",
  element: <ProtectedRoute/>,
  children:[
    {
      path:"/dashboard",
      element: <Dashboard/>
    },
    {
      path:"/tresenraya",
      element: <TresEnRaya/>
    },
    {
      path:"/apipelis",
      element: <ApiPelis/>
    }
  ]
}
])

library.add(fas)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
