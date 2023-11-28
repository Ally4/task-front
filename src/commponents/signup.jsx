import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

  return (
    <div className="container-form">
    <form>
      <div className="input-group">
        <label htmlFor="email" className="form-label">
          Email
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
        <label htmlFor="email" className="form-label">
          Email
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
          Password
        </label>
        <input
        style={{borderColor: 'green', padding: 8,borderRadius: 5, width:300, marginLeft:40, borderWidth:1}}
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleFormsubmit} style={{backgroundColor: 'green', padding: 8,borderRadius: 5, width:300, marginLeft:40, color:'white'}}>
        Submit
      </button>
    </form>
    <Link to="/login" style={{color:'blue', marginTop:20}}>Login</Link>
  </div>
  );
}

