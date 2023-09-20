import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import countries from '../../../countries.json';
import userActions from '../../store/actions/user';
import './style.css';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

const SignUp = () => {
  const dispatch = useDispatch();

  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const imageUrlInputRef = useRef();
  const passwordInputRef = useRef();
  const countrySelectRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameInputRef.current.value;
    const lastName = lastNameInputRef.current.value;
    const imageUrl = imageUrlInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const country = countrySelectRef.current.value;

    try {
      dispatch(userActions.signUp({ name, lastName, email, password, imageUrl, country }));
    } catch (error) {
      console.error(error);
    }
  };

  const signUpWithGoogle = (credentialResponse) => {
    const dataUser = jwtDecode(credentialResponse.credential);
    const name = dataUser.given_name
    const lastName = dataUser.family_name
    const email = dataUser.email
    const password = dataUser.sub
    const imageUrl = dataUser.picture
    const country = 'Other'

    try {
      dispatch(userActions.signUp({ name, lastName, email, password, imageUrl, country }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 className='text-3xl text-cyan-600 font-semibold'>Create account</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              ref={nameInputRef}
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              ref={lastNameInputRef}
              type="text"
              id="lastName"
              name="lastName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              ref={emailInputRef}
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              ref={imageUrlInputRef}
              type="text"
              id="imageUrl"
              name="imageUrl"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              ref={passwordInputRef}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <select
              className='text-cyan-700 rounded-md bg-pink-200'
              ref={countrySelectRef}
              id="country"
              name="country"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <button className="signup text-white py-2 px-8 rounded bg-cyan-700" type="submit">Sign Up</button>
          <p className='text-cyan-700'>
            Already have an account?{' '}
            <Link to="/SignIn">Sign In</Link>
          </p>
          <GoogleLogin
            onSuccess={signUpWithGoogle}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </form>
      </div>
    </>
  );
}

export default SignUp;







