import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from './store/actions/user';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Cities from './pages/Cities';
import Detail from './components/Detail';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(userActions.authenticate());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route index element={<Home />} />
          <Route path="Cities" element={<Cities />} />
          <Route path="Detail/:cityId" element={<Detail />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;




