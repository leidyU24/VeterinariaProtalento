import React from 'react'
import ReactDOM from 'react-dom/client'
import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom"
import MenuAppointmente from './components/Main/MenuAppointmente/MenuAppointmente.jsx'
import Layout from './components/Layout.jsx'
import EditFormAppointmente from './components/Main/EditAppointmente/EditFormAppointmente.jsx'
import Home from './components/Home/Home.jsx'
import Document from './components/Home/Document.jsx'
import About from './components/Home/About.jsx'
import Contact from './components/Home/Contact.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"Citas",
        element: <MenuAppointmente/>
      },
      {
        path:"Editar",
        element: <EditFormAppointmente/>
      }
    ]
  },
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"Home",
        element: <Home/>
      }
    ]
  },
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"Document",
        element: <Document/>
      }
    ]
  },
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"About",
        element: <About/>
      }
    ]
  },
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"Contact",
        element: <Contact/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
