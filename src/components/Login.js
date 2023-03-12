import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post('https://jwt-backend-taeo.onrender.com/users/login', {
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history('/user'));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          marginLeft="auto"
          marginRight="auto"
          width={300}
          display="flex"
          flexDirection={'column'}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2">Login</Typography>
          <TextField
            variant="outlined"
            placeholder="Email"
            margin="normal"
            value={inputs.email}
            type={'email'}
            onChange={handleChange}
            name="email"
          />
          <TextField
            variant="outlined"
            placeholder="Password"
            margin="normal"
            value={inputs.password}
            type={'password'}
            onChange={handleChange}
            name="password"
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
