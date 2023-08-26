import { useState } from 'react'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Cities from './pages/Cities'
import Detail from './components/Detail'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/Cities",
    element: <Layout />,
    children: [{ path: "/Cities", element: <Cities /> }],
  },
  {
    path: "/Detail/",
    element: <Layout />,
    children: [{ path: "/Detail/:cityId", element: <Detail /> }],
  },
]);
  
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router= {router}></RouterProvider>
    </>
  )
}

export default App;
