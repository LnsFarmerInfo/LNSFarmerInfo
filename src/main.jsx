import React,{useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Internship from './Components/internship.jsx'


const router = createBrowserRouter(
     createRoutesFromElements(
          <Route path='/'>
               <Route path='' element={<App/>} />
               <Route path='internship' element={<Internship/>} />
          </Route>
     )
)

ReactDOM.createRoot(document.getElementById('root')).render(
     // <RouterProvider router={router} />
     <App/>
)
