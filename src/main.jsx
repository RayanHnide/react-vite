import React from 'react'
import ReactDOM from 'react-dom/client'
 
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RouterProject } from './router/Router.jsx'
 import 'bootstrap/dist/css/bootstrap.min.css'
const router  = createBrowserRouter(RouterProject)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>,
)
