import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    password: '',
    occupation: '',
    company: '',
  });
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post('https://jwt-backend-taeo.onrender.com/users/signup', {
        firstName: inputs.firstName,
        middleName: inputs.middleName,
        lastName: inputs.lastName,
        dob: inputs.dob,
        email: inputs.email,
        phone: inputs.phone,
        password: inputs.password,
        occupation: inputs.occupation,
        company: inputs.company,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history('/login'));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          marginLeft="auto"
          marginRight="auto"
          width={900}
          display="flex"
          flexDirection={'column'}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2">Signup</Typography>
          <TextField
            variant="outlined"
            placeholder="FirstName"
            margin="normal"
            value={inputs.firstName}
            type={'name'}
            onChange={handleChange}
            name="firstName"
          />
          <TextField
            variant="outlined"
            placeholder="MiddleName"
            margin="normal"
            value={inputs.middleName}
            type={'name'}
            onChange={handleChange}
            name="middleName"
          />
          <TextField
            variant="outlined"
            placeholder="LastName"
            margin="normal"
            value={inputs.lastName}
            type={'name'}
            onChange={handleChange}
            name="lastName"
          />
          <label>Date-of-Birth</label>
          <TextField
            variant="outlined"
            placeholder="Date-Of-Birth"
            margin="normal"
            value={inputs.dob}
            type={'date'}
            onChange={handleChange}
            name="dob"
          />
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
            placeholder="Phone"
            margin="normal"
            value={inputs.phone}
            type={'number'}
            onChange={handleChange}
            name="phone"
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
          <TextField
            variant="outlined"
            placeholder="Occupation"
            margin="normal"
            value={inputs.occupation}
            type={'name'}
            onChange={handleChange}
            name="occupation"
          />
          <TextField
            variant="outlined"
            placeholder="Company"
            margin="normal"
            value={inputs.company}
            type={'name'}
            onChange={handleChange}
            name="company"
          />
          <Button variant="contained" type="submit">
            Signup
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
