import { useEffect } from 'react'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Cities from './pages/Cities'
import Detail from './components/Detail'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import userActions from './store/actions/user'

const router = createBrowserRouter([
  {path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/Cities', element: <Cities /> },
      { path: '/Detail/:cityId', element: <Detail /> },
      { path: '/SignIn', element: <SignIn /> }, // Agrega la ruta de registro
      { path: '/SignUp', element: <SignUp /> },
]}]);
  
function App() {
  
  const dispatch = useDispatch()
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(userActions.authenticate());
    }
  },[])
  
  return (
    <>
      <RouterProvider router= {router}></RouterProvider>
    </>
  )
}

export default App;
