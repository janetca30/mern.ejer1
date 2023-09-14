import { useRef, useState } from 'react';
import { Link,  } from 'react-router-dom';
import { useDispatch } from "react-redux";
import userActions from "../../store/actions/user";
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2'
import './style.css';

function SignIn() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSignIn = async (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!email || !password) {
      setError ('Please enter email and password.');
      return;
    }
  
  try {
    const response = await dispatch(userActions.signIn({ email, password }));

    if (response.payload.user) {
      Swal.fire({
        title: "Logged In!",
        text: "Successfully logged",
        icon: "success",
        confirmButtonText: "OK",
      });
      
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
      Swal.fire({
        title: "Error!",
        text: "Incorrect email or password, please try again",
        icon:'error',
        confirmButtonText: "OK",
      });
    }
  };

 /* const signInWithGoogle = (credentialResponse) => {
    const dataUser = jwtDecode(credentialResponse.credential);
    const body = {
      email: dataUser.email,
      password: dataUser.given_name + dataUser.sub,
      
    };
    dispatch(userActions.signIn(body))
*/
        


  return (
    <div className="signin-container flex justify-center ml-44 rounded-2xl">
      <div>
        <form className="signin-form text-lg-center font-semibold" onSubmit={handleSignIn}>
          <h2 className="text-3xl font-semibold flex justify-center text-blue-800 p-2">Log In</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="inpEmail border-none outline-none"
              name="email"
              autoComplete="off"
              type="email"
              id="email"
              ref={emailInputRef}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              className="inpPass border-none outline-none"
              name="password"
              autoComplete="off"
              type="password"
              id="password"
              ref={passwordInputRef}
              required
            />
          </div>
          <button className="signin-submit-button text-white bg-blue-600 rounded w-24 h-8" type="submit">
            Log In
          </button>
          <p className="text-lg text-blue-800">
            Don't have an account?{' '}

            
           
            <Link to="/signup">Sign Up</Link>
          </p>
          
        </form>
      </div>
    </div>
  );
      }

export default SignIn
