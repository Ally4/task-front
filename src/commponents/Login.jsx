import axios from 'axios';
import React, { useEffect, useState} from 'react';
import {  useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom';


import { loginStart, loginSuccess, loginFailure } from '../features/auth/authLoginSlice'; 

export default function Login() {

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleLogin = async () => {
    if (!user || !password) {
      dispatch(loginFailure('Please enter both user and password.'));
      return;
    }
    dispatch(loginStart());
    try {
      const response = await axios.post("http://localhost:1234/api/v1/auth/login",{ email, password })
      

      if (response.data.token) {

        dispatch(loginSuccess({ user: response.data.user, token: response.data.token }));
        setPassword('');
        setEmail('');
      } else {    
        dispatch(loginFailure(error));
      }
    } catch (error) {
      const err = error.response?.data?.message || error.message;
      dispatch(loginFailure(error));
    }
  };

  return (
    <div className="container-form">
    <form>
    <div className="input-group">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
        style={{borderColor: 'green', padding: 8,borderRadius: 5, width:300, marginLeft:40, borderWidth:1}}
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password" className="form-label">
          password
        </label>
        <input
        style={{borderColor: 'green', padding: 8,borderRadius: 5, width:300, marginLeft:40, borderWidth:1}}
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} style={{backgroundColor: 'green', padding: 8,borderRadius: 5, width:300, marginLeft:40, color:'white'}} >
        Submit
      </button>
    </form>
    <Link to="/" style={{color:'blue', marginTop:20}}>Signup</Link>
    {/* <pre className="result">{JSON.stringify(data)}</pre> */}
  </div>
  );
}

