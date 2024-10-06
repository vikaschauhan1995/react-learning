import axios from "axios";
import React, { useState } from "react";
import {BASE_URL} from '../../config';

const RegisterPage = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setIsRegisterLoading(true);
    const response = await axios.post(`${BASE_URL}/user/register`, state);
    setIsRegisterLoading(false)
  };
  const handleFieldChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };
  // console.log(state);
  return (
    <div>
      <div>RegisterPage</div>
      <form onSubmit={submit}>
        <input
          type="text"
          name="username"
          onChange={handleFieldChange}
          value={state?.username}
          placeholder="username"
        />
        <br />
        <input
          type="email"
          name="email"
          onChange={handleFieldChange}
          value={state?.email}
          placeholder="email"
        />
        <br />
        <input
          type="password"
          name="password"
          onChange={handleFieldChange}
          value={state?.password}
          placeholder="****"
        />
        <br />
        <input type="submit" value={isRegisterLoading ? 'Loading' : 'Register'} />
      </form>
    </div>
  );
};

export default RegisterPage;
