import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import countries from '../../../countries.json'
import userActions from '../../store/actions/user';
import './style.css';

import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

function SignUp() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
 
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsRegistered(true);
  };
    const signUpWithGoogle = (credentialResponse) => {
      const dataUser = jwtDecode( credentialResponse.credential);

      const body ={
        name: dataUser.name,
        email: dataUser.email,
        imageUrl: dataUser.picture,
        password: dataUser.given_name + dataUser.sub,
      }
      dispatch(userActions.signUp(body));
    };

  

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className='text-3xl text-cyan-600 font-semibold'>Create account</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={handleImageUrlChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select className='text-cyan-700 rounded-md   bg-pink-200'
            type="text"
            id="country"
            value={country}
            onChange={handleCountryChange}
          >
            <option  value="">Select Country</option>

            {countries.map((index) => (
              <option key={index.id} value={index.name}>
                {index.name}{" "}
              </option>
            ))}
          </select>
        </div>
        <button className="signup text-white py-2 px-8 rounded bg-cyan-700" type="submit">Sign Up</button>
        <p className='text-cyan-700'>
          Already have an account?{' '}
          <Link to="/">Home</Link>
        </p>
        <GoogleLogin
        text="signup_with"  
        onSuccess={signUpWithGoogle}
        onError={() => {
          console.log('Login Failed');
        }}/>
      </form>
      
    </div>
  );
}

export default SignUp;






