import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './routes/Home'
import  { Repositories } from "./routes/Repositores"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
      path: "/",
      element: <Home/>
    },
    {
      path: "/repos/:id",
      element: <Repositories />
    }
  ]
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
