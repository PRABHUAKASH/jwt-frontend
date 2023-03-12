import React, { useEffect, useState } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

const Welcome = () => {
  const [user, setUser] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get('https://jwt-backend-taeo.onrender.com/users/user', {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  return (
    <div>
      {user && <h1>Welcome{user.name}</h1>}
      <h1>Welcome User</h1>
    </div>
  );
};

export default Welcome;
