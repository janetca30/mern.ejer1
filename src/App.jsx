import React from 'react'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Cities from './pages/Cities'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Layout />,
    children:[
      {path:'',element:<Home/>},
    ]
  },
  {path:'/cities',element: <Layout />,
   children:[
      {path:'/cities',element:<Cities />}
   ]
  }
])
  
function App() {
    return (
    <>
      <RouterProvider router= {router}></RouterProvider>
    </>
  )
}

export default App
