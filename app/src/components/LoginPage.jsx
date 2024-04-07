import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const LoginPage = () => {
  let navigate = useNavigate();
  const[loginData, setLoginData] = useState({ userName: '', password: ''})


  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData(prevVal => ({...prevVal, [name]: value}))
  }

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(loginData)
    navigate("/messages")
  }


  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input 
          value={loginData.userName} 
          type='text'
          name='userName'
          onChange={handleChange}
          />
        </label>

        
        <label>
          Password:
          <input 
          value={loginData.password} 
          type='password'
          name='password'
          onChange={handleChange}
          />
        </label>

        <button type='submit'>Login</button>
      </form>
      
      
    </div>
  );
};

export default LoginPage;
