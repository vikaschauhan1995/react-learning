import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL } from '../../config';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [state, setState] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({...state, [name] : value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${BASE_URL}/user/login`, state);
    const token = response?.data?.token;
    // debugger;   
    localStorage.setItem("token", token);
    navigate('/home');
  }
  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit} >
            <input type="text" onChange={handleChange} className='bg-transparent border' value={state?.username} name="username" />
            <br />
            <input type="password" onChange={handleChange} className='bg-transparent border' value={state?.password} name="password" />
            <br />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginPage