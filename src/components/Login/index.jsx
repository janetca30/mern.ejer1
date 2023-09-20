import user from '/Images/user.png'; 
import { Link } from 'react-router-dom';
import './style.css';

function Login() {
  return (
    <>
      <Link to="/SignIn">
        <button className="login-button bg-blue-900 rounded" type="button">
          <img className="login-user" src={user} alt="User" />
          Log In
        </button>
      </Link>
    </>
  );
}

export default Login;



