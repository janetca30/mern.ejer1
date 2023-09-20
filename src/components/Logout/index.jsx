import { useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom';
import userActions from '../../store/actions/user';
import './style.css';

function Logout() {
  const dispatch = useDispatch();

  const handlerLogout = () => {
    try {
      dispatch(userActions.signOut());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Link to="/">
      <button onClick={handlerLogout} className="logout bg-cyan-500 rounded " type="button">
        <img className="logout-icon w-14" src="https://i.imgur.com/mEJPq1E.png" alt="logout" /> 
        <p className='logout-text text-blue-600 text-xl font-bold'>Log Out</p>
      </button>
    </Link>
  );
}

export default Logout;
